import { Typography,Button } from '@mui/material'
import React,{useState} from 'react'
import axios from 'axios'



export default function Todos() {
    const [first, setfirst] = useState('')
    const Todos = () => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1')
            .then((e) => { setfirst(e.data) })
    }
    return (
        <>
            <Typography mt={15} variant='h3' >Todos</Typography>
            <Button onClick={Todos}>Click to Todos Data</Button>
            <ul className='padding'>
                <li>

                    {first ?
                        first.id : ''}
                </li>
                <li >


                    {first ?
                        first.userId : ''}
                </li>
                <li>


                    {first ?
                        first.title : ''}
                </li>

            </ul>

        </>
    )
}
