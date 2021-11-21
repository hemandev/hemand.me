import { Link } from 'gatsby'

interface PostProps {
	heading: string
	content: string
  path: string
}

export default function Post({ heading, content, path }: PostProps) {
	return (
		<Link to={path} className="my-8 mr-12 group">
				<h5 className="font-sans-condensed text-2xl font-normal text-gray-800 mb-2 group-hover:text-green-600 transition ease-in duration-100">
					{heading}
				</h5>
				<p className="font-sans font-normal text-md text-gray-700">{content}</p>
		</Link>
	)
}
