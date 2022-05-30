import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
// import PermanentDrawerLeft from '../component/Drawer';
import Button from '@mui/material/Button';
import axios from 'axios';





const Accounting = () => {
  const [apicall,setApiCall] = useState([]);
  let onAPi  = ()=>{
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => setApiCall(res.data))
  }

  console.log(apicall)
   


  return (
    <>
      {/* <PermanentDrawerLeft /> */}
      <div className='MainFlex'>
        <h1>
           ENTER TO GET USER VALUE
        </h1>
        
        <Button
        onClick={onAPi}
        variant="contained" color="success">
        ENTER
      </Button>

        {apicall.map ((x) =>{
          return(

            <div className=''>
          <p>{x.email}</p>
          </div>
            )
        })}

        </div>
        <Outlet/>

    </>

  )
}


export default Accounting