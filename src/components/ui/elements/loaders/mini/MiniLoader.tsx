import { ACCENT_COLOR } from '@/constants/global.constants'
import type { IMiniLoader } from '@/shared/interfaces/common/loader/loader.interface'
import type { FC } from 'react'

const MiniLoader: FC<IMiniLoader> = ({ color, className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 200 200"
			className={className ? className : 'w-6 h-6'}
		>
			<radialGradient
				id="a11"
				cx=".66"
				fx=".66"
				cy=".3125"
				fy=".3125"
				gradientTransform="scale(1.5)"
			>
				<stop offset="0" stopColor={color || ACCENT_COLOR}></stop>
				<stop
					offset=".3"
					stopColor={color || ACCENT_COLOR}
					stopOpacity=".9"
				></stop>
				<stop
					offset=".6"
					stopColor={color || ACCENT_COLOR}
					stopOpacity=".6"
				></stop>
				<stop
					offset=".8"
					stopColor={color || ACCENT_COLOR}
					stopOpacity=".3"
				></stop>
				<stop
					offset="1"
					stopColor={color || ACCENT_COLOR}
					stopOpacity="0"
				></stop>
			</radialGradient>
			<circle
				style={{ transformOrigin: 'center' }}
				fill="none"
				stroke={color || ACCENT_COLOR}
				strokeWidth="15"
				strokeLinecap="round"
				strokeDasharray="200 1000"
				strokeDashoffset="0"
				cx="100"
				cy="100"
				r="70"
			>
				<animateTransform
					type="rotate"
					attributeName="transform"
					calcMode="spline"
					dur="2"
					values="360;0"
					keyTimes="0;1"
					keySplines="0 0 1 1"
					repeatCount="indefinite"
				></animateTransform>
			</circle>
			<circle
				style={{ transformOrigin: 'center' }}
				fill="none"
				opacity=".2"
				stroke={color || ACCENT_COLOR}
				strokeWidth="15"
				strokeLinecap="round"
				cx="100"
				cy="100"
				r="70"
			></circle>
		</svg>
	)
}

export default MiniLoader
