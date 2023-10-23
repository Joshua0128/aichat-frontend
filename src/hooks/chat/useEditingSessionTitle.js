import axios from 'axios'

export default (sessionId) => ({
	trigger: (title) =>
		// axios.put(`https://api.projectszero.tech/session/${sessionId}/${title}`, {})
		axios.put(
			`http://aichat-backend-puce.vercel.app/session/${sessionId}/?title=${title}`,
			{}
		),
})
