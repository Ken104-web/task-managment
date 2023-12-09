import React from "react";
import css from './task.css'

const Task = () => {
    return ( 
        <div className={`${css.tasks}, theme-container`}>
            <span className="Title">
                    Tasks
            </span>
            <div className="herders">
                <span ></span>
            </div>
        </div>
     );
}
 
export default Task;