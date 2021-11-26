import Layout from './layout'

interface LayoutProps {
	pageTitle: string
	aside?: React.ReactNode
	nav?: React.ReactNode
	footer?: React.ReactNode
	children?: React.ReactNode
}

export default function PostLayout({
	pageTitle,
	children,
	aside,
	nav,
	footer,
}: LayoutProps) {
	return (
		<Layout>
			<div className="grid grid-cols-layout-post grid-rows-layout-post min-h-screen bg-white text-green-50 font-sans">
				<div className="col-start-1 col-end-5 row-start-1 row-end-2 bg-gradient-to-br from-green-500 to-green-400 transform -rotate-1 m-5 mb-10 rounded-xl">
					&nbsp;
				</div>
				<nav className="col-start-2 col-end-4 row-start-1 row-end-2 py-12 md:py-20 z-10">
					{nav}
				</nav>
				<main className="col-start-2 col-end-3 row-start-3 row-end-4">
					{children}
				</main>
				<aside className="col-start-3 col-end-4 row-start-3 row-end-4 flex flex-col md:gap-12">
					{aside}
				</aside>
				<div className="col-start-1 col-end-5 row-start-4 row-end-6 bg-gradient-to-br from-green-400 to-green-500 py-12 md:py-20 mt-8"></div>
				<footer className="col-start-2 col-end-4 row-start-5 row-end-6 py-12 md:py-20 bg-transparent z-10">
					{footer}
				</footer>
			</div>
		</Layout>
	)
}
