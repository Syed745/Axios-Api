import { Button, List, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

export default function Posts() {
    const [first, setfirst] = useState('')
    const Post = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((e) => { setfirst(e.data) })
    }

    return (
        <>
            <Typography mt={15} variant='h3'>Posts</Typography>
            <Button onClick={Post}>Click to Post Data</Button>


            <ul className='padding'>
                <li>

                    {first ?
                        first.title : ''}
                </li>
                <li >


                    {first ?
                        first.body : ''}
                </li>
                <li>

                    
                    {first ?
                        first.id : ''}
                </li>

            </ul>


        </>
    )
}
