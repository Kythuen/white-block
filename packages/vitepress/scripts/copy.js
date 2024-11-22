import { copy } from 'fs-extra'
import glob from 'fast-glob'

function toDest(file) {
  return file.replace(/^src\//, 'dist/')
}

glob.sync(['src/**']).forEach(file => {
  if (file.endsWith('.ts')) return
  copy(file, toDest(file))
})
