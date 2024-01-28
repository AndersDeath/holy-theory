export const addPageBreak = (type: string) => {
    return type === "md"
    ? "\n\\newpage \n\n"
    : '<p style="page-break-after: always;"> </p>';
}