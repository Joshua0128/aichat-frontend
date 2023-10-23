import useSWRFetch from '../useSWRFetch'

export default (sessionId) => {
	// const apiUrl = `https://api.projectszero.tech/session/${sessionId}`;
	const apiUrl = `http://aichat-backend-puce.vercel.app/${sessionId}`

	const { data, mutate } = useSWRFetch(apiUrl) // 發送 GET 請求

	return { messages: data && data.messages, mutate }
}
