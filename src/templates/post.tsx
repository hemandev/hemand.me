import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
	query PostById($uid: String!) {
		prismicPost(uid: { eq: $uid }) {
			uid
			first_publication_date
			id
			data {
				author
				content {
					html
				}
				date_published
				heading {
					html,
                    text
				}
			}
			tags
		}
	}
`

export default function Post({ data: { prismicPost } }) {
	return (
		<Layout pageTitle={'Blog'}>
            <h1>{prismicPost.data.heading.text}</h1>
			<div
				dangerouslySetInnerHTML={{ __html: prismicPost.data.content.html }}
			/>
		</Layout>
	)
}
