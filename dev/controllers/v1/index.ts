import express from 'express'

const router = express.Router()

router.get('/ping', (req, res) => {
  res.status(200).json({code: 1, status: 200, name: 'Ok', message: 'Server Online'})
})

export default router