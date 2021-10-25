import dbConnect from '../../../utils/dbConnect'
import Contact from '../../../models/Contact'

dbConnect()

const apiConn = async (req, res) => {
    const { method } = req

    switch(method){
        case 'POST':
            try {
                const contactPost = await Contact.create(req.body);

                res.status(201).json({ success: true, data: contactPost })
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