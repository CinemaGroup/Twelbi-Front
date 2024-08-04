import {
	useJwtConfirmationMutation,
	type JwtAuthConfirmationInput,
} from '@/__generated__/output'
import { useAuthConfirmationStore } from '@/store/timer/timer.store'
import { formatTimer } from '@/utils/formats/format-timer.util'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useJwtAuthConfirmation = () => {
	const {
		register: registerInput,
		formState: { errors },
		control,
		handleSubmit,
		watch,
	} = useForm<JwtAuthConfirmationInput>({
		mode: 'onChange',
	})

	const { remainingTime, setTimer } = useAuthConfirmationStore()

	const [sendConfirmation, { loading }] = useJwtConfirmationMutation()

	const onSubmit: SubmitHandler<JwtAuthConfirmationInput> = async (data) => {
		if (remainingTime) {
			return toast.error(
				`Мы уже отправили ссылку для подтверждения на вашу электронную почту. Вы можете попробовать снова через ${formatTimer(
					remainingTime
				)}.`
			)
		}

		await sendConfirmation({
			variables: {
				data,
			},
			onCompleted: (data) => {
				if (data.jwtConfirmation) {
					setTimer(60)
					return toast.success(
						'Мы отправили вам ссылку для подтверждения на ваш E-mail.Вы можете попробовать снова через 5 минут.',
						{
							duration: 5000,
						}
					)
				}

				return toast.error('Произошла ошибка.')
			},
			onError: ({ message }) => {
				return toast.error(message)
			},
		})
	}

	return {
		registerInput,
		control,
		watch,
		errors,
		handleSubmit,
		onSubmit,
		loading,
	}
}
