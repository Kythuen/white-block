import type { XNode as VNode } from '../types'

export type Slots = {
  /*
   * 默认按钮内容。
   */
  default: () => any
}

export type Emits = {
  /*
   * 点击时触发, 参数为 `MouseEvent` 对象。
   */
  click: [e: MouseEvent]
}

export type Props = {
  /*
   * 无预设样式.
   */
  pure?: boolean
  /*
   * 是否显示 dropper.
   */
  dropper?: boolean
  /**
   * 点击事件处理函数, 参数为 `MouseEvent` 对象。
   */
  onClick?: (e: MouseEvent) => void
  /*
   * 按钮的内容插槽。
   */
  default?: string | VNode
}

export default {
  pure: false,
  dropper: false
} as Props
