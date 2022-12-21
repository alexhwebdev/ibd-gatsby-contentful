export function parsePageContent( pageTitle, ibdDigitalSiteData) {
  // console.log('parsePageContent - pageTitle', pageTitle)
  // console.log('parsePageContent - ibdDigitalSiteData', ibdDigitalSiteData)

  const eachPageCopy = ibdDigitalSiteData.map( eachPageData => {
    console.log('parsePageContent - eachPageData', eachPageData)

    if (eachPageData.node.Page_Title === pageTitle) {
      return eachPageData.node.Page_Copy.data.Page_Copy;
    } 
  })
  console.log('parsePageContent - eachPageCopy', eachPageCopy)


  // Filter out 'undefined' array object
  let filteredPageCopyArray = eachPageCopy.filter(function(x) {
    return x !== undefined;
  })
  // console.log('parsePageContent - filteredPageCopyArray', filteredPageCopyArray)


  // Create array of strings, split all instances of '\n' next line.
  // EXAMPLE : https://bobbyhadz.com/blog/javascript-split-string-by-newline
  // const str = 'first\nsecond\r\nthird';
  // console.log('str ', str);   // ['first', 'second', 'third']

  const pageBodyCopy = filteredPageCopyArray[0].split(/\r?\n/);
  // console.log('parsePageContent - pageBodyCopy', pageBodyCopy)



  // Remove empty strings in the 'pageBodyCopy' array
  let pageBodyCopyArray = [];
  pageBodyCopy.map( eachValue => {
    // console.log('parsePageContent - eachValue', eachValue)

    if (eachValue !== '') {
      pageBodyCopyArray.push(eachValue)
    }
  })
  // console.log('parsePageContent - pageBodyCopyArray', pageBodyCopyArray)

  return pageBodyCopyArray;
};




// /\n\s*\n/
