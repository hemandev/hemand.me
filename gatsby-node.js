const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const pages = await graphql(`
		{
			allPrismicPost {
				edges {
					node {
						data {
							author
							date_published
							content {
								html
							}
							heading {
								html
							}
						}
						id
						last_publication_date
						uid
						tags
					}
				}
			}
		}
	`)

	const template = path.resolve('src/templates/post.tsx')
	pages.data.allPrismicPost.edges.forEach(({ node: post  }) => {
		createPage({
			path: `/${post.uid}`,
			component: template,
			context: {
				uid: post.uid,
			},
		})
	})
}
