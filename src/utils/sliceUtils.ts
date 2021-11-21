import CodeSlice from '../components/slices/code'
import InfoSlice from '../components/slices/info'
import TextSlice from '../components/slices/text'

const SliceMap = {
	code: CodeSlice,
	info: InfoSlice,
	text: TextSlice,
}

function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getSliceComponent(name) {
	return SliceMap[name]
}

export function getAllSliceFragments() {
	const sliceNames = Object.keys(SliceMap)
	return sliceNames.reduce((query, sliceName) => {
		return query + `
        ... on PrismicPostDataBody${capitalize(sliceName)} {
            id
            slice_label
            primary {
                ${sliceName} {
                    html
                    raw
                    text
                }
            }
            slice_type
        }

        `
	}, '')
}
