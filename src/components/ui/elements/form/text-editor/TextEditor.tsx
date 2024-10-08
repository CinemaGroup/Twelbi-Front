import '@/assets/styles/editor.scss'
import type { ITextEditor } from '@/shared/interfaces/common/form/form.interface'
import cn from 'clsx'
import dynamic from 'next/dynamic'
import { type FC } from 'react'
import globalStyles from '../Form.module.scss'
import styles from './TextEditor.module.scss'

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })

const TextEditor: FC<ITextEditor> = ({
	onChange,
	value,
	error,
	label,
	className,
}) => {
	return (
		<div
			className={cn(globalStyles.field, styles.field, className && className)}
		>
			{label && <label className={globalStyles.label}>{label}</label>}
			{error && <p className={globalStyles.error}>{error.message}</p>}
			<JoditEditor
				className={styles.editor}
				value={value || ''}
				onBlur={(newContent) => onChange(newContent)}
				onChange={(newContent) => onChange(newContent)}
			/>
		</div>
	)
}

export default TextEditor
