import { Fragment } from 'react'
import { Link } from 'gatsby'
import '@fontsource/roboto'
import '@fontsource/roboto-slab'
import '@fontsource/roboto-slab/300.css'
import '@fontsource/roboto-slab/400.css'

interface LayoutProps {
	pageTitle: string
	children?: React.ReactNode
}

export default function Layout({ pageTitle, children }: LayoutProps) {
	return (
		<Fragment>
			<main className="mx-80 mt-5">
				<title>{pageTitle}</title>
				<nav>
					<ul className="flex space-x-8 font-bold underline">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
				<h1 className="mt-6 mb-6 text-purple-700 text-3xl">{pageTitle}</h1>
				{children}
			</main>
		</Fragment>
	)
}
