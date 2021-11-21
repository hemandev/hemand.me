import CodeSlice from './slices/code'
import InfoSlice from './slices/info'
import TextSlice from './slices/text'

const SliceMap = {
	code: CodeSlice,
	info: InfoSlice,
	text: TextSlice,
}

export default function SliceZone({ body }) {
	console.log('Inide body   ', body)
	return (
		<>
			{body &&
				body.map((bodyContent, i) => {
					const type = bodyContent.slice_type;
					const Slice = SliceMap[type]
					return <Slice key={i} content={bodyContent.primary[type]} />
				})}
		</>
	)
}
