

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export function parsePageContent( pageTitle, rawPageData) {
  // console.log('parsePageContent - pageTitle', pageTitle)
  // console.log('parsePageContent - rawPageData', rawPageData)


  const richTextFormatData = documentToReactComponents(JSON.parse(rawPageData))
  // console.log('IBD_Overview richTextFormatData', richTextFormatData)


  // Remove empty strings in the 'pageBodyCopy' array
  let pageBodyCopyArray = [];
  richTextFormatData.map( eachObject => {
    // console.log('parsePageContent - eachObject', eachObject)
    pageBodyCopyArray.push(eachObject.props.children[0])
  })
  return pageBodyCopyArray;
};




// /\n\s*\n/
