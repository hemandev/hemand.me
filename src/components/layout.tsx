import { Fragment } from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import '@fontsource/roboto'
import '@fontsource/roboto-slab'

const Globals = createGlobalStyle`

* {
	box-sizing: border-box;
	font-family: 'Roboto', sans-serif;
}

body {
	margin: 0;
	padding: 0;
}
`

const Main = styled.main`
	margin: 1rem 20rem;
`

const H1 = styled.h1`
	font-family: 'Roboto Slab', serif;
	color: rebeccapurple;
`

const Ul = styled.ul`
	list-style: none;
	display: flex;
	padding-left: 0;
`

const NavItem = styled.li`
	padding-right: 2rem;
`

const StyledLink = styled(Link)`
	color: black;
`

interface LayoutProps {
	pageTitle: string
	children?: React.ReactNode
}

export default function Layout({ pageTitle, children }: LayoutProps) {
	return (
		<Fragment>
			<Globals />
			<Main>
				<title>{pageTitle}</title>
				<nav>
					<Ul>
						<NavItem>
							<StyledLink to="/">Home</StyledLink>
						</NavItem>
						<NavItem>
							<StyledLink to="/about">About</StyledLink>
						</NavItem>
					</Ul>
				</nav>
				<H1>{pageTitle}</H1>
				{children}
			</Main>
		</Fragment>
	)
}
