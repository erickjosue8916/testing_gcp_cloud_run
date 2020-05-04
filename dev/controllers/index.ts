import { Router } from 'express'
import v1 from './v1'

const router =  Router()

router.use('/v1', v1)
router.use("", (req, res) => {
    return res.status(200).json({"message": "default response"})
})
export default router