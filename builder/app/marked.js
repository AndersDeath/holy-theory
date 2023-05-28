import { marked } from 'marked';
import { markedHighlight } from "marked-highlight";
import { mangle } from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";
import hljs from 'highlight.js';


marked.use({
    langPrefix: ''
})
marked.use(markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    }
  }));
marked.use(mangle());
marked.use(gfmHeadingId());

export { marked };