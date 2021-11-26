export default function TextSlice({ content }) {
	return (
		<>
			<div
				className="container overflow-auto font-serif font-light text-xl text-gray-800 leading-relaxed"
				dangerouslySetInnerHTML={{ __html: content.html }}
			/>
		</>
	)
}
