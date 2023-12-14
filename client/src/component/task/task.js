import { useEffect, useState } from "react";
import css from './task.css'

const Task = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('./tasks')
        .then((r) => r.json())
        .then((data) =>  setTasks(data))
    }, [])
    return ( 
        <div className={`${css.tasks}, theme-container`}>
        <div>
        <h3>Todays Task</h3>
        <div className="headerK">
            <p>Name</p>
            <p>Status</p>
            <p>Time spent</p>
        </div>
        <div className="taskDetails">
        {tasks.map((task) => (
                <p key={task.id}>
                    <span>{task.name}</span>
                    <span>{task.status}</span>
                    <span>{task.time} Hrs</span>
                </p>
            ))}
        </div>
        </div>
        </div>
     );
}
 
export default Task;