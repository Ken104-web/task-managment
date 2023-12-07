import React, { useState } from "react";
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';
import './addCard.css'


const AddCardx = ({visible, onClose, handleCardAdd}) => {
    const customStyles = {
        background: "rgb(58 58 58)",
        padding: "20px",
        width: "50%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "40rem"
    }
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')

    return ( 
     <Rodal  customStyles={customStyles} visible={visible} onClose={onClose}>
        <div className="containerY">
            <span className="label">Card Title</span>
            <input type="text"  className="Input" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
            <span className="Input">
                Detail
            </span>
            <textarea
            rows={10} className="Input" value={details}
            type='text' onChange={(e) => setDetails(e.target.value)}/>
        </div>
        <button 
                disabled={title=== "" && details === ""}
                className='saveButton'
                onClick={()=> {
                    handleCardAdd(title, details)
                    setDetails("")
                    setTitle("")
                }}
                >
                    Add
                </button>
     </Rodal>
     );
}
 
export default AddCardx;