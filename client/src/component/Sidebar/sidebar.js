import './sidebar.css'
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return ( 
        <div className='container'>
                <img src="./task.webp" alt="logo" className='logo' />
                <div className='menu'>
                    <NavLink to='dashboard' className="item" title='dashboard'>
                        <MdSpaceDashboard size={30}/>
                    </NavLink>
                    <NavLink
                    to="calendar"
                    className='item'
                    title="Calendar"
                >
                    <AiFillCalendar size={30} />
                </NavLink>

                <NavLink
                    to="board"
                    className='item'
                    title="Trello Board"
                >
                    <FaTasks size={30} />
                </NavLink>

                <NavLink
                    to="users"
                    className='item'
                    title="Users"
                >
                    <AiOutlineTable size={30} />
                </NavLink>
                </div>
        </div>
     );
}
 
export default Sidebar;
