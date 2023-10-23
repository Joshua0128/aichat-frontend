// import { useCookies } from "react-cookie";
import { useUser } from '@clerk/clerk-react'

import useSWRPost from '../useSWRPost'

export default () => {
	const { user } = useUser()
	// console.log(user.id)

	// const apiUrl = `https:aichat-backend-puce.vercel.app/session/${user.id}`
	const apiUrl = `https://aichat-backend-puce.vercel.app/users/${user.id}/sessions`

	const { trigger } = useSWRPost(apiUrl) // 發送 POST 請求

	return { trigger }
}
