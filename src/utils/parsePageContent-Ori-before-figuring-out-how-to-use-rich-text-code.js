import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export function parsePageContent( pageTitle, rawPageData) {
  const richTextFormatData = documentToReactComponents(JSON.parse(rawPageData))

  // Remove empty strings in the 'pageBodyCopy' array
  let pageBodyCopyArray = [];


  let richTextTypes = []

  // Find all Rich Text Types
  richTextFormatData.map( eachObject => {
    for (let i = 0; i < eachObject.props.children.length; i++) {
      if ( eachObject.props.children[i].type !== undefined ) {
        richTextTypes.push(eachObject.props.children[i].type)
      }
    }
  })


  // Array with no duplicates
  // https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
  let uniqueRichTextTypes = [...new Set(richTextTypes)];
  // console.log('parsePageContent - uniqueRichTextTypes', uniqueRichTextTypes);  // ['b', 'i', 'u']


  // If object has more rich text styling than 1
  richTextFormatData.forEach( objectData => {
    // console.log('objectData ', objectData)

    if (objectData.props.children.length > 1) {
      let combinedStringArray = [];
      objectData.props.children.forEach( value => {

        // For all value props.children, concat into 1 string
        if ( typeof value === 'object' ) {
          combinedStringArray.push(value.props.children)

        } else if ( typeof value === 'string' ) {
          combinedStringArray.push(value)
        }

        // console.log('combinedStringArray ', combinedStringArray.join(' ')) 
        // ['With', 'IBD®', 'Digital']

        // combinedStringArray.join('');
        // [With IBD® Digital]
      })
      pageBodyCopyArray.push(combinedStringArray.join(''));
    } else {
      pageBodyCopyArray.push(objectData.props.children[0])
    }
  });

  return pageBodyCopyArray;
};






























