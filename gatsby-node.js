// const redirects = require("./src/utils/redirects.json");

exports.createPages = ({ graphql, actions }) => {
  const {createRedirect} = actions //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions
  // createRedirect({ fromPath: '/old-url', toPath: '/new-url', isPermanent: true });


  createRedirect({
    fromPath: `https://ibdgatsbycontentfulmain.gatsbyjs.io/ibd-digital/`,
    toPath: `https://ibdgatsbycontentfulmain.gatsbyjs.io/`,
  });
}






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
