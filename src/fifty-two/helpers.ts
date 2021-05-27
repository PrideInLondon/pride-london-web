export const generateFiftyTwoEntrySlug = (name: string) =>
  `/fifty-two/${name.trim().replace(/\s+/g, '-').toLowerCase()}`
