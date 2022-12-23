export function sortedGatsbyImgData(propsData, imgOrder) {
  // console.log('sortedGatsbyImgData ', propsData)

  let unorderedImgArray = [];
  const gatsbyImageArray = [];

  // 'imgOrder.length' equals # of images added to imgOrder.
  // for (let i = 0; i < imgOrder.length; i++) {
  for (let i = 0; i < propsData.length; i++) {
    // const imgOriginalName = propsData.allImageSharp.edges[i].node.fluid.originalName;
    const imgOriginalName = propsData[i].filename;
    const imgData = propsData[i].gatsbyImageData;
    const eachImgData = [imgOriginalName, imgData];

    unorderedImgArray.push(eachImgData);
  }
  // console.log('unorderedImgArray ', unorderedImgArray)

  // For each order of 'imgKey', 'filter' and return new array (gatsbyImageArray) of 'values' that match condition. If no match, return 'undefined'.
  imgOrder.forEach(function(imgKey) {
    var found = false;
    unorderedImgArray = unorderedImgArray.filter(function(imgObject) {
      if(!found && imgObject[0] === imgKey) {
        gatsbyImageArray.push(imgObject);
        found = true;
        return false;
      } else {
        return true;
      }
    })
  })
  // console.log('gatsbyImageArray ',  gatsbyImageArray)
  // console.log('gatsbyImageArray[0][0] ',  gatsbyImageArray[0][0])

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




