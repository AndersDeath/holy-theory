export const pageWrapperHtml = (content: string, meta?: any) => {
  return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${meta?.title || "Holy Theory"}</title>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/monokai.min.css" />
          <script type="application/javascript" src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
          <style>
          body {
            margin: 0;
                padding: 0;
            }
    
            img {
                max-width: 400px;
            }
    
            .content {
              width: 60%;
              margin: 0 auto;
            }
          </style>
      </head>
      <body>
          <div class="content">${content}</div>
      </body>
      </html>`;
};
