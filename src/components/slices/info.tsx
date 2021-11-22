import { RichText } from 'prismic-reactjs'

export default function InfoSlice({ content }) {
	const text = RichText.asText(content.raw)
	return (
		<>
			<div className="my-4 border-l-4 border-green-600 p-3 text-xl md:text-2xl text-gray-500 italic"> {text} </div>
		</>
	)
}
