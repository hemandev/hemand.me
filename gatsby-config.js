require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: 'Hemand S',
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-source-prismic`,
			options: {
				repositoryName: `hemand`,
				accessToken: `${process.env.API_KEY}`,
				linkResolver:
					({ node, key, value }) =>
					post =>
						`/${post.uid}`,
				schemas: {
					post: require('./src/schemas/post.json'),
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
	],
}
