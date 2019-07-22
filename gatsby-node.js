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
              topCategory
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const topCategory = edge.node.frontmatter.topCategory
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blogTemplate.js`),
      context: { slug: slug, topCategory: topCategory },
    })
  })
}
