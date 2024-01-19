import { buildHeadline } from "../ui";

export function generateSectionReadmes(
    contentBySection: Record<string, string[]>,
    type = "md"
  ): string {
    return Object.keys(contentBySection)
      .map((section) => {
        const sectionContent = contentBySection[section].join("\n");
        return `${buildHeadline(section, 2, type)}\n\n${sectionContent}`;
      })
      .join("\n\n");
  }
  