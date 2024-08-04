'use client'

import { PUBLIC_PAGES, USER_PAGES } from '@/constants/url.constants'
import { usePathname, useRouter } from 'next/navigation'

export const useLogoutRedirect = () => {
	const pathname = usePathname()
	const { replace, refresh } = useRouter()

	const userPages = [USER_PAGES.PROFILE]

	if (userPages.some((page) => pathname === page)) {
		replace(PUBLIC_PAGES.HOME)
		refresh()
	}
}
