export const wrapToHtmlTag = (tag: string, content = "") =>
  `<${tag}>${content}</${tag}>`;
