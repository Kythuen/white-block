import type { Options } from 'tsup'
import watchOtherFiles from './scripts/watch'
import copyOtherFiles from './scripts/copy'

export const tsup: Options = {
  entry: [
    'src/client/**/*.ts',
    'src/node/cli/index.ts',
    'src/node/unocss/index.ts'
  ],
  format: ['esm'],
  dts: true,
  splitting: false,
  clean: true,
  shims: false,
  external: [/.*\.vue/, /.*\.css/, /.*\.less/],
  ignoreWatch: [
    'src/client/theme/components',
    'src/client/theme/styles',
    'src/client/theme/Layout.vue'
  ],
  async onSuccess() {
    if (process.env.NODE_ENV === 'development') {
      watchOtherFiles()
    } else {
      copyOtherFiles()
    }
  }
}
