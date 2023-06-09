const path = require(`path`)

/* ORIGINAL GATSBY-NODE.JS
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
*/

exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;

  // const { createPage } = actions

  // createPage({
  //   path: "/path",
  //   // component: resolve(__dirname, "../src/pages/ibd-digital/index.js"),
  //   component: require.resolve("../src/pages/ibd-digital/index.js"),
  //   context: {
  //     redirectTo: "https://ibdgatsbycontentfulmain.gatsbyjs.io/subdirectory/ibd-digital/features/",
  //   }
  // })


  // // -------------------- createRedirect
  // const { createRedirect } = actions; //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions

  // console.log('#######################')
  // console.log('createRedirect ', createRedirect)

  // createRedirect({
  //   // fromPath: `/blog/recipes/mouthwatering-lasagna`,
  //   // toPath: `/recipes/mouthwatering-lasagna`,

  //   fromPath: `/`,
  //   toPath: `/ibd-digital/why-ibd/`,
  //   // isPermanent: true,
  //   statusCode: 200,
  // })


  // // -------------------- Create pages dynamically
  // const { createPage } = actions
  // const templatePageOne = path.resolve(`src/templates/page-1.js`)
  // const result = await graphql(`
  //   query {
  //     allContentfulIbddContentType {
  //       edges {
  //         node {
  //           slug
  //           pageTitle
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log('#######################')
  // console.log('createPage ', createPage)
  // console.log('result ', result)

  // result.data.allContentfulIbddContentType.edges.forEach(edge => {
  //   console.log('#######################')
  //   console.log('edge ', edge)

  //   createPage({
  //     path: `${edge.node.slug}`,
  //     component: templatePageOne,
  //     context: {
  //       title: edge.node.pageTitle,
  //     },
  //   })
  // })
};




// // + Implement the Gatsby API "onCreatePage". This is
// //    called after every page is created.
// // + Keep in mind that in createPages is where you create 
// //    all dynamic pages hence you have all the slugs and paths 
// //    available to make your dynamic redirects.
// exports.onCreatePage = async ({ page, actions }) => {

//   const { createRedirect } = actions

//   createRedirect({
//     // fromPath: `/blog/recipes/mouthwatering-lasagna`,
//     // toPath: `/recipes/mouthwatering-lasagna`,

//     fromPath: `/subdirectory/ibd-digital/features`,
//     toPath: `/subdirectory/ibd-digital/why-ibd`, 
//   })
// }





// https://stackoverflow.com/questions/65749516/webpackerror-referenceerror-image-is-not-defined-during-gatsby-build-by-ga
// 
// EXPLANATION 20min mark : 
// https://www.youtube.com/watch?v=eMOnbgKRIYE
// - This is updated and automated in recent versions. 
// - Youtube tuts above is 2 years old.
// - Code below addresses issues of Gatsby not being
//   able to use 'document' or 'window'.
// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === "build-html" || stage === "develop-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /airpods/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }



