import dbConnect from '../../../utils/dbConnect'
import Email from '../../../models/Email'

dbConnect()

const apiConn = async (req, res) => {
    const { method } = req

    switch(method){
        case 'POST':
            try {
                const emailPost = await Email.create(req.body);

                res.status(201).json({ success: true, data: emailPost })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false })
            break

    }
}

export default apiConn