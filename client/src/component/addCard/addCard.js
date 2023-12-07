import React from "react";
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';
import './addCard.css'


const AddCardx = ({visible, onClose}) => {
    return ( 
     <Rodal visible={visible} onClose={onClose}>

     </Rodal>
     );
}
 
export default AddCardx;