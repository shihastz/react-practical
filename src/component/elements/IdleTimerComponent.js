import React, {useState, useRef} from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement("#root")
export default function IdleTimerComponent() {

const [isLoggedIn, setIsLoggedIn] = useState(true)
const [modalIsOpen, setModalIsOpen] = useState(false)

const idleTimerRef = useRef(null)

const onIdle = () => {
    console.log("user in idle")
    setModalIsOpen(true)
}

const stayActive = ()=>{
    setModalIsOpen(false)
    console.log('user is active')
}

const logOut = ()=>{
    setModalIsOpen(false)
    setIsLoggedIn(false)
    console.log('user is loged outg')

}
    return (
        <div>
            {
                isLoggedIn ? <h2>Hello shihas </h2> : <h2>Hello guest</h2>
            }
            <Modal isOpen={modalIsOpen}>
                <h2>You have been idle for a while</h2>
                <div>
                    <button onClick={logOut}>Log me out</button>
                    <button onClick={stayActive}>Keep me Logged in</button>
                </div>
            </Modal>
            <IdleTimer ref={idleTimerRef} timeout={100*1000} onIdle = {onIdle}></IdleTimer>
        </div>
    )
}
