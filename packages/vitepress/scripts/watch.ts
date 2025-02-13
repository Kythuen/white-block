import { copy, remove } from 'fs-extra'
import { watch } from 'chokidar'
import { normalizePath } from 'vite'
import type { Stats } from 'node:fs'

function toDist(file: string) {
  return normalizePath(file).replace(/^src\//, 'dist/')
}

export default function () {
  const watcher: any = watch('src', {
    ignored: ((path: string, stats: Stats) =>
      stats?.isFile() &&
      path.endsWith('.ts') &&
      !path.includes('/files/')) as any
  })

  watcher
    .on('change', (file: string) => copy(file, toDist(file)))
    .on('add', (file: string) => copy(file, toDist(file)))
    .on('unlink', (file: string) => remove(toDist(file)))
}
