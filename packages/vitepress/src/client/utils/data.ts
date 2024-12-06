export function frontmatterField(
  frontmatter: Record<string, any>,
  field: string
) {
  if (!(field in frontmatter)) return true
  return Boolean(frontmatter[field])
}

export function inFrontmatter(frontmatter: Record<string, any>, field: string) {
  return field in frontmatter
}
