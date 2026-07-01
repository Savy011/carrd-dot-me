export const titlecase = str => {
  if (!str) return "";
  return str.replace(/\b\w/g, c => c.toUpperCase());
}
