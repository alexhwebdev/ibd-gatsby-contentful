export function sortedGatsbyImgData(pageTitle, ibdDigitalSiteData, imgOrder) {
  console.log('sortedGatsbyImgData - pageTitle', pageTitle)
  console.log('sortedGatsbyImgData ibdDigitalSiteData ', ibdDigitalSiteData)

  let unorderedImgArray = [];
  const gatsbyImageArray = [];

  // Get all image data that belongs to the page of 'pageTitle'
  const eachPageImages = ibdDigitalSiteData.map( eachPageData => {
    if (eachPageData.node.Page_Title === pageTitle) {
      return eachPageData.node.Page_Images
    } 
  })

  // Filter out 'undefined' array object
  let filteredImgArray = eachPageImages.filter(function(x) {
    return x !== undefined;
  })

  let pageImages = filteredImgArray[0]
  console.log('pageImages ', pageImages)

  // For each corresponding image name and image data, organize into its own array.
  // 'imgOrder.length' equals # of images added to imgOrder.
  // for (let i = 0; i < imgOrder.length; i++) {
  for (let i = 0; i < pageImages.length; i++) {
    const imageName = pageImages[i].name;

    // const imgData = pageImages[i].localFile.childImageSharp.gatsbyImageData;
    let imgData = pageImages[i].localFile.childImageSharp ? 
      pageImages[i].localFile.childImageSharp.gatsbyImageData :
      null;
    // if ( pageImages[i].localFile.childImageSharp ) {
    //   imgData = pageImages[i].localFile.childImageSharp.gatsbyImageData;
    // }

    // Query thru URL did not work to load SVG, GIF, PDF
    // const imgData = pageImages[i].url;
    const eachImgData = [imageName, imgData];

    unorderedImgArray.push(eachImgData);
  }
  // console.log('unorderedImgArray ', unorderedImgArray)

  // For each order of 'imgKey', 'filter' and return new array (gatsbyImageArray) of 'values' that match condition. If no match, return 'undefined'.
  imgOrder.forEach(function(imgKey) {
    // console.log('imgKey ', imgKey)

    let found = false;
    unorderedImgArray = unorderedImgArray.filter(function(imgObject) {
      // console.log('imgObject ', imgObject)

      if(!found && imgObject[0] === imgKey) {
        gatsbyImageArray.push(imgObject);
        found = true;
        return false;
      } else {
        return true;
      }
    })
  })

  return gatsbyImageArray;
};




// https://remarkablemark.org/blog/2019/11/29/javascript-sanitize-html/
// export function parsedContent() {
//   var unsanitizedHTML = '<script>alert("XSS");</script>';
//   console.log('unsanitizedHTML ', unsanitizedHTML)
  
//   var element = document.createElement('div');
//   element.innerText = unsanitizedHTML;
//   var sanitizedHTML = element.innerHTML;

//   function sanitizeHTML(text) {
//     var element = document.createElement('div');
//     element.innerText = text;
//     return element.innerHTML;
//   }
//   console.log('sanitizedHTML ', sanitizedHTML)
// }




