import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export function parsePageContent( pageTitle, rawPageData) {
  // console.log('parsePageContent - rawPageData', rawPageData)

  const richTextFormatData = documentToReactComponents(JSON.parse(rawPageData))
  console.log('parsePageContent - richTextFormatData', richTextFormatData)

  return richTextFormatData;
};

