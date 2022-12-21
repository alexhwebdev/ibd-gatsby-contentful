import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm'

const MarkdownComponent = ({ copy }) => {
  // console.log('copy ', copy)

  return (
    <ReactMarkdown 
      rehypePlugins={[rehypeRaw]}   // bold, underline, allows to write html code in Strapi backend
      remarkPlugins={[remarkGfm]}   // strikethrough : https://github.com/remarkjs/react-markdown
      escapeHtml={false} 
      // source={copy} 
    >
      {copy}
    </ReactMarkdown>
  )
}

export default MarkdownComponent;