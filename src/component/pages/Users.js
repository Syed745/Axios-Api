import { Typography,Button } from '@mui/material'
import React,{useState} from 'react'
import axios from 'axios'

export default function Users() {
    const [first, setfirst] = useState('')
    const Users = () => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then((e) => { setfirst(e.data) })
    }
    return (
        <>
            <Typography variant='h3' mt={15}>Users</Typography>
            <Button onClick={Users}>Click to Users Data</Button>


            <ul className='padding'>
                <li>

                    {first ?
                        first.id : ''}
                </li>
                <li >


                    {first ?
                        first.username : ''}
                </li>
                <li>


                    {first ?
                        first.email : ''}
                </li>

            </ul>


        </>
    )
}
