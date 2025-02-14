---
title: '@white-block/types'
description: Tools to resolve types for WhiteBlock components.

---

## Introduction

This is a library used to parse  API Types for [WhiteBlock](/) components.

It use AST to resolve the source code and return useful result which supports parsing to object and array format.

In additional provides tools to quickly convert data into a markdown table which facilitates the construction of component library documents.

## ModuleResolver

Resolve a module file, reference to [ModuleResolver](https://github.com/Kythuen/white-block/blob/main/packages/types/src/resolver.ts#L15).

Returns imports map, exports types & ast.

### Exports Types

::: code-group
```ts [example.ts]
import { ModuleResolver } from '@white-block/types'

const code = `export interface test {
  base?: number
  custom: CustomType
  union?: AAA | BBB
  intersection?: AAA & BBB
  complex: (AAA | BBB)[],
  tuple: [e: MouseEvent]
}`

const resolver = new ModuleResolver(code)

const result = resolver.getExports()
```
:::

::: details see result
```ts
// result
{
  test: {
    base: {
      comment: [],
      type: 'number',
      required: false
    },
    custom: {
      comment: [],
      type: 'CustomType',
      required: true
    },
    union: {
      comment: [],
      type: 'AAA | BBB',
      required: false
    },
    intersection: {
      comment: [],
      type: 'AAA & BBB',
      required: false
    },
    complex: {
      comment: [],
      type: '(AAA | BBB)[]',
      required: true
    },
    tuple: {
      comment: [],
      type: '[e: MouseEvent]',
      required: true
    }
  }
}
```
:::

See [Exports Test](https://github.com/Kythuen/white-block/blob/main/packages/types/test/resolver.test.ts#L5) for more examples.

### Import Types

::: code-group
```ts [example.ts]
import { ModuleResolver } from '@white-block/types'

const code = `import Vue from 'vue'
  import AAA from './type'
  import type { PropType } from 'vue'
  import { BBB } from './type'
  import { CCC as DDD } from './type'`

const resolver = new ModuleResolver(code)

const result = resolver.getImports()
```
:::

::: details see result
```ts
// result
{
  Vue: 'vue',
  AAA: './type',
  PropType: 'vue',
  BBB: './type',
  DDD: './type'
}
```
:::

See [Imports Test](https://github.com/Kythuen/white-block/blob/main/packages/types/test/resolver.test.ts#L216) for more examples.


### API Types

Use `ModuleResolver` to resolve API of WhiteBlock components.

#### getExports

::: code-group
```ts [example.ts]
import { ModuleResolver } from '@white-block/types'

const code = `export interface Props extends CommonProps {
  /*
   * Size preset for the component.
   */
  size?: SizeEnum
  /*
   * Data for the component.
   */
  data: Data[]
  /*
   * Click action.
   */
  onClick?: (e: MouseEvent) => void
}

export type Emits = {
  /*
   * click action.
   */
  click: [e: MouseEvent]
}

export default {
  size: 'small',
  data: -1
} as Props
`
const resolver = new ModuleResolver(code)

const result = resolver.getExports()
```
:::

::: details see result
```ts
// result
{
  Props: {
    size: {
      comment: ['\n         * Size preset for the component.\n         '],
      required: false,
      type: 'SizeEnum'
    },
    data: {
      comment: ['\n         * Data for the component.\n         '],
      required: true,
      type: 'Data[]'
    },
    onClick: {
      comment: ['\n         * Click action.\n         '],
      required: false,
      type: '(e: MouseEvent) => void'
    }
  },
  Emits: {
    click: {
      comment: ['\n         * click action.\n         '],
      required: true,
      type: '[e: MouseEvent]'
    }
  },
  default: {
    size: 'small',
    data: -1
  }
}
```
:::


<!-- #### getImports -->

<!-- #### getAST -->

#### getPropsConfig

Get props configs from result of `getExports`.

::: code-group
```ts [example.ts]
import { getPropsConfig } from '@white-block/types'

const props = {
  size: {
    comment: ['\n         * Size preset for the component.\n         '],
    required: false,
    type: 'SizeEnum'
  },
  data: {
    comment: ['\n         * Data for the component.\n         '],
    required: true,
    type: 'Data[]'
  }
}
const defaultProps = {
  size: 'small',
  data: [1, 2, 3]
}

const result = getPropsConfig(props, defaultProps)
```
:::

::: details see result
```ts
// result
[
  {
    name: 'size',
    comment: ['\n         * Size preset for the component.\n         '],
    required: false,
    type: 'SizeEnum',
    default: 'small'
  },
  {
    name: 'data',
    comment: ['\n         * Data for the component.\n         '],
    required: true,
    type: 'Data[]',
    default: [1, 2, 3]
  }
]
```
:::

#### getEmitsConfig

Get emits configs from result of `getExports`.

::: code-group
```ts [example.ts]
import { getEmitsConfig } from '@white-block/types'

const emits = {
  click: {
    comment: ['\n         * click action.\n         '],
    required: true,
    type: '[e: MouseEvent]'
  }
}

const result = getEmitsConfig(emits)
```
:::

::: details see result
```ts
// result
[
  {
    name: 'click',
    comment: ['\n         * click action.\n         '],
    type: '[e: MouseEvent]'
  }
]
```
:::

See [API Test](https://github.com/Kythuen/white-block/blob/main/packages/types/test/api.test.ts#L4) for more examples.


## createTable
Create Markdown table from headers config & data.

### Props Example

::: code-group
```ts [example.ts]
import { createTable, TableDataItem, TableHeaderItem } from '../src'

const headers: TableHeaderItem[] = [
  { label: 'Name', value: 'name' },
  { label: 'Type', value: 'type' },
  { label: 'TS', value: 'ts' },
  { label: 'Default', value: 'default' },
  {
    label: 'Description',
    value: 'comment',
    transform: (val: string) =>
      val.match(/\*\s+(.*)\s*$/)?.[1]?.trim() || '-'
  },
  {
    label: 'Required',
    value: 'required',
    align: 'center',
    transform: (val: boolean) => (val ? 'Y' : 'N')
  }
]
const data: TableDataItem[] = [
  {
    name: 'type',
    comment: '* type of button ',
    required: false,
    type: 'String',
    ts: 'ButtonType',
    default: 'default'
  },
  {
    name: 'size',
    comment: '* size of button ',
    required: false,
    type: 'String',
    ts: 'ButtonSize',
    default: 'medium'
  }
]
const tableOptions = { headers, data }

const result = createTable(tableOptions)
```
:::

::: details see result
| Name | Type	 | TS | Default | Description | Required |
| :-------- | :-------- | :-------- | :-------- | :-------- | :--------: |
| type | String | ButtonType | default | type of button. | N |
| size | String | ButtonSize | medium | size of button. | N |
:::

### Emits Example

::: code-group
```ts [example.ts]
import { createTable, TableDataItem, TableHeaderItem } from '../src'

const headers: TableHeaderItem[] = [
  { label: 'Name', value: 'name' },
  {
    label: 'Parameters',
    value: 'params',
    transform: (params: Record<string, string>) => {
      const result: string[] = []
      for (const event in params) {
        result.push(`${event}: ${params[event]}`)
      }
      return `\`(${result.join(', ')})\``
    }
  },
  {
    label: 'Description',
    value: 'comment',
    transform: (comment: string) =>
      comment.match(/\*\s+(\S*)\s*$/)?.[1]?.trim() || '-'
  }
]
const data: TableDataItem[] = [
  {
    name: 'click',
    comment: '* click action. ',
    params: { e: 'MouseEvent', payload: 'Data' }
  }
]
const tableOptions = { headers, data }

const result = createTable(tableOptions)
```
:::

::: details see result
| Name | Parameters | Description |
| :-------- | :-------- | :-------- |
| click | \`(e: MouseEvent, payload: Data)\` | click action. |
:::