import express from 'express'

const router = express.Router()

router.post('/google', (req, res) => {
	let token = req.body.googleInfo.profileObj
	console.log(token)
})

export default router
