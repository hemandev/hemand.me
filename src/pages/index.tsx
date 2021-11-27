import { graphql, Link } from 'gatsby'
import { Fragment } from 'react'
import HomeLayout from '../components/layout/homeLayout'
import PostBlock from '../components/postBlock'
import SectionHeader from '../components/sectionHeader'
import Tag from '../components/tag'

interface Post {
	heading: { html: string }
	date_published: string
	content: { html: string }
	uid: string
	tags?: string
}

export const query = graphql`
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

						body {
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
`

export default function Home({ data }) {
	let posts = data.allPrismicPost.edges.map((item: any) => {
		let {
			node: { data, uid, tags },
		} = item
		return {
			...data,
			uid,
			tags,
		}
	}) as Post[]
	return (
		<HomeLayout
			pageTitle="Home"
			nav={
				<ul className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 items-center text-lg md:text-xl justify-center">
					<li className="py-2 md:py-5 text-3xl md:text-6xl mr-6 md:mr-10 font-cursive text-green-50 uppercase">
						<Link to="/">Hemand S</Link>
					</li>
					<li>
						<Link to="/posts">Posts</Link>
					</li>
					<li className="md:mr-auto">
						<Link to="/about">About</Link>
					</li>
					<li>
						<a href="https://github.com/hemandev" target="__blank">
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/h3mandev" target="__blank">
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24">
								<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
							</svg>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/hemand" target="__blank">
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
					</li>
				</ul>
			}
			aside={
				<Fragment>
					<div>
						<SectionHeader>Tags</SectionHeader>
						<div className="flex flex-row flex-wrap gap-x-3 gap-y-2 mt-4">
							<Tag>Functional</Tag>
							<Tag>React</Tag>
							<Tag>Javascript</Tag>
							<Tag>Angular</Tag>
							<Tag>Rust</Tag>
						</div>
					</div>
					<div>
						<SectionHeader>Trending</SectionHeader>
						<div className="flex flex-row flex-wrap gap-x-3 gap-y-2"></div>
					</div>
				</Fragment>
			}
			footer={
				<ul className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 items-center text-md md:text-xl justify-center">
					<li className="py-2 md:py-5 text-2xl md:text-4xl mr-4 md:mr-6 font-cursive">
						<Link to="/">Hemand S</Link>
					</li>
					<li>
						<Link to="/posts">Posts</Link>
					</li>
					<li className="md:mr-auto">
						<Link to="/about">About</Link>
					</li>
					<li>
						<a href="https://github.com/hemandev" target="__blank">
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/h3mandev" target="__blank">
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24">
								<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
							</svg>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/hemand" target="__blank">
							<svg
								className="fill-current"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>
					</li>
				</ul>
			}>
			<Fragment>
				<SectionHeader>Recently published</SectionHeader>

				<article className="my-3 mr-8">
					{posts.map(post => (
						<PostBlock
							key={post.uid}
							path={post.uid}
							heading={post.heading.html}
							content={post.content.html}
						/>
					))}
				</article>
			</Fragment>
		</HomeLayout>
	)
}
