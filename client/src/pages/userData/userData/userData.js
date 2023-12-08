import React, { useMemo } from "react";
import  { MaterialReactTable} from 'material-react-table'
import './userData.css'

const UserData = () => {
    const columns = useMemo(() => [
            {
                accessorKey: "name.firstName",
                header: 'First Name',
            },
            {
                accessorKey: "name.lastName",
                header: 'Last Name',
            },
            {
                accessorKey: "address",
                header: "Address",
            },
            {
                accessorKey: "city",
                header: "City",
            },
            {
                accessorKey: "state",
                header: "State",
            },
    
    ], [],);
    return ( 
        <div className="table">
       <MaterialReactTable  colums= {columns}/>
        </div>
     );
}
 
export default UserData;