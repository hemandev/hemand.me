import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/layout'

export default function About() {
	return (
		<Layout pageTitle="About">
			<h1>Hi there, I'm the creator of this site!</h1>
			<StaticImage
				alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
				src="../images/profilepic.jpeg"
			/>
		</Layout>
	)
}
