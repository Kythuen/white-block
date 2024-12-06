export function matchItems(pattern: string, list: string[]) {
  return list.some(item => pattern.includes(item))
}
