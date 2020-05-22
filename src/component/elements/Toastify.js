import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

const CustomToast = () => {
    return(
        <div>
        Something Wrong
        <button className="btn btn-info">button</button>
        </div>
    )
}
export default function Toastify() {

    const notify = () => {
        toast('Basic Notification !', {position : toast.POSITION.BOTTOM_LEFT})
        toast.success('Success Notification !', {
            position : toast.POSITION.BOTTOM_RIGHT,
            autoClose : 8000
        })
        toast.error(<CustomToast/>, {
            position : toast.POSITION.TOP_RIGHT,
            autoClose : false
        })
    }
    return (
        <div>
             <button onClick={notify} className="btn btn-primary">Notify !</button>
        </div>
    )
}
