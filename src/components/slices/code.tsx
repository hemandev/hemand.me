import { useEffect } from 'react'
import Prism from 'prismjs'
import Markdown from 'react-markdown'
import { RichText } from 'prismic-reactjs'

export default function CodeSlice({ content }) {
	const rawMarkdown = RichText.asText(content.raw)
	useEffect(() => {
		Prism.highlightAll()
	})
	return (
		<>
			<Markdown children={rawMarkdown} />
		</>
	)
}
