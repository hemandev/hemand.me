import { Fragment } from 'react'
import '@fontsource/roboto'
import '@fontsource/roboto-slab'
import '@fontsource/roboto-slab/300.css'
import '@fontsource/roboto-slab/400.css'
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import '@fontsource/roboto-condensed/300.css'
import '@fontsource/roboto-condensed/400.css'
import '@fontsource/roboto-condensed/700.css'
import '@fontsource/pacifico'
import '../../../tailwind.custom.css'

interface LayoutProps {
	pageTitle?: string
	children?: React.ReactNode
}

export default function Layout({ pageTitle, children }: LayoutProps) {
	return <Fragment>{children}</Fragment>
}
