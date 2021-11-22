import { Link } from 'gatsby'

interface PostProps {
	heading: string
	content: string
  path: string
}

export default function Post({ heading, content, path }: PostProps) {
	return (
		<Link to={path} className="my-6 mr-10 md:my-8 md:mr-12 group">
				<h5 className="font-sans text-2xl md:text-3xl font-normal text-gray-800 mb-2 group-hover:text-green-500 transition ease-in duration-100">
					{heading}
				</h5>
				<p className="font-sans font-normal text-md md:text-lg text-gray-700">{content}</p>
		</Link>
	)
}
