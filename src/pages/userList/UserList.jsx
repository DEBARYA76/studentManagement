import {useState} from 'react'
import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons"
import { userRows } from '../../dummydata';
import { Link } from 'react-router-dom';

export default function UserList() {
    const [data,setData] =useState(userRows);

    const handleDelete=(id)=>{
      setData(data.filter((item)=>item.id!==id ))
    }
    const columns = [
  { field: 'id', headerName: 'ID', width: 99},
  { field: 'UserName', headerName: 'Student', width: 200,renderCell:(params)=>{
      return(
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.UserName}
          </div>
      )
  } },
  { field: 'email', headerName: 'Email', width: 170 },
  {
    field: 'stature',
    headerName: 'Status',
    width: 140,
  },
  {
    field: 'transaction',
    headerName: 'Transaction',
    width: 160,
  },
  {
    field:"action",
    headerName:"Action",
    width:"150",
    renderCell:(params)=>{
      return(
          <>
          <Link to={"/user/"+params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
      )
    }
  }
  
];



    return (
        <div className="userList">
        <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
