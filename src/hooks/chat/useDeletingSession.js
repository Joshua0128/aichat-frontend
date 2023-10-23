import useSWRDelete from '../useSWRDelete'

export default (sessionId) => {
	// const apiUrl = `https://api.projectszero.tech/session/${sessionId}`;
	const apiUrl = `https://aichat-backend-puce.vercel.app/session/${sessionId}`

	const { trigger } = useSWRDelete(apiUrl) // 發送 DELETE 請求

	return { trigger }
}
