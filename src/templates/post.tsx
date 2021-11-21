import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SliceZone from '../components/sliceZone'

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
					html
					text
				}
				body {
					... on PrismicPostDataBodyCode {
						id
						slice_label
						primary {
							code {
								html
								raw
								text
							}
						}
						slice_type
					}

					... on PrismicPostDataBodyText {
						id
						slice_label
						primary {
							text {
								html
								raw
								text
							}
						}
						slice_type
					}

					... on PrismicPostDataBodyInfo {
						id
						slice_label
						primary {
							info {
								html
								raw
								text
							}
						}
						slice_type
					}
				}
			}
			tags
		}
	}
`

export default function Post({ data: { prismicPost } }) {
	const body = prismicPost.data.body
	return (
		<Layout pageTitle={'Blog'}>
			<h1 className="font-serif text-6xl mb-5 text-gray-900">
				{prismicPost.data.heading.text}
			</h1>
			<SliceZone body={body} />
		</Layout>
	)
}
