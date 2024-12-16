import { copy } from 'fs-extra'
import glob from 'fast-glob'

function toDest(file: string) {
  return file.replace(/^src\//, 'dist/')
}

export default function () {
  glob.sync(['src/**']).forEach(file => {
    console.log(file)
    if (file.endsWith('.ts') && !file.includes('/files/')) return
    copy(file, toDest(file))
  })
}
