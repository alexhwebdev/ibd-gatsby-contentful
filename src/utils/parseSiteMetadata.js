export function parseSiteMetadata(propsData) {
// console.log('propsData ', propsData);

  const siteMetadata = [];
  siteMetadata.push({ title: propsData.allWpIbd.edges[0].node.title })

  propsData.allWpIbd.edges.map(edge => (
    // siteMetadata.push({ title: edge.node.title }),

    // NOTE - Get all strings b/n <p> tag and push to contentArray
    edge.node.excerpt.match(/<p>(.*?)<\/p>/g).map(function(eachContent){
      siteMetadata.push({ excerpt: eachContent.replace(/<\/?p>/g,'') })
      return false;
    })
  ))
  return siteMetadata;
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