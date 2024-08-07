import type { FC } from 'react'
import { Toaster } from 'react-hot-toast'

const ReactToaster: FC = () => {
	return (
		<Toaster
			position="top-right"
			gutter={8}
			toastOptions={{
				duration: 3000,
				style: {
					fontSize: '13px',
					fontWeight: 500,
					color: '#39393f',
				},
				error: {
					style: {
						color: '#fff',
						backgroundColor: '#F31559',
					},
				},
				success: {
					style: {
						color: '#fff',
						backgroundColor: '#2EE89A',
					},
				},
			}}
		/>
	)
}

export default ReactToaster
