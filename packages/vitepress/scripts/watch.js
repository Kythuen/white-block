import { copy, remove } from 'fs-extra'
import { watch } from 'chokidar'
import { normalizePath } from 'vite'

function toDist(file) {
  return normalizePath(file).replace(/^src\//, 'dist/')
}

export default function () {
  watch('src', {
    ignored: (path, stats) => stats?.isFile() && path.endsWith('.ts')
  })
    .on('change', file => copy(file, toDist(file)))
    .on('add', file => copy(file, toDist(file)))
    .on('unlink', file => remove(toDist(file)))
}
