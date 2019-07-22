const path = require(`path`)

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "portfolio" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blogTemplate.js`),
      context: { slug: slug },
    })
  })
}
