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



  const { createRedirect } = actions; //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions

  console.log('createRedirect ', createRedirect)

  createRedirect({
    // fromPath: `/blog/recipes/mouthwatering-lasagna`,
    // toPath: `/recipes/mouthwatering-lasagna`,

    fromPath: `/subdirectory/ibd-digital/features/`,
    toPath: `/subdirectory/ibd-digital/why-ibd/`,
    isPermanent: true
  })



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






// exports.createPages = ({ graphql, actions }) => {
//   const {createRedirect} = actions //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
//   // createRedirect({ fromPath: '/old-url', toPath: '/new-url', isPermanent: true });

//   console.log('gatsby-node.js actions ---------------------------- ', actions)

//   createRedirect({
//     fromPath: `/ibd-digital/`,
//     toPath: `https://www.yahoo.com/`,
//     statusCode: 200,
//   });
// }


// https://stackoverflow.com/questions/65749516/webpackerror-referenceerror-image-is-not-defined-during-gatsby-build-by-ga
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





