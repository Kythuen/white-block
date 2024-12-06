import { copy, remove } from 'fs-extra'
import { watch } from 'chokidar'
import { normalizePath } from 'vite'
import type { Stats } from 'node:fs'

function toDist(file: string) {
  return normalizePath(file).replace(/^src\//, 'dist/')
}

export default function () {
  watch('src', {
    ignored: ((path: string, stats: Stats) =>
      stats?.isFile() && path.endsWith('.ts')) as any
  })
    .on('change', file => copy(file, toDist(file)))
    .on('add', file => copy(file, toDist(file)))
    .on('unlink', file => remove(toDist(file)))
}
