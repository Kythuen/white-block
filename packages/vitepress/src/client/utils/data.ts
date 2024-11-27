export function frontmatterField(
  frontmatter: Record<string, any>,
  field: string
) {
  if (!(field in frontmatter)) return true
  return Boolean(frontmatter[field])
}
