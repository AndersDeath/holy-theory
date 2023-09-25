export const cleanContent = (content: any) => {
    content = content.replace("* [Go back](../readme.md)", "");
    return content;
  };
  