import { Typography, Button } from '@mui/material'
import axios from 'axios'
import React,{useState} from 'react'



export default function Albums() {
    const [first, setfirst] = useState('')
    const Albums = () => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1')
            .then((e) => { setfirst(e.data) })
    }
  return (
      <>
    <Typography mt={15} variant='h3' >Albums</Typography>
    <Button onClick={Albums}>Click to Albums Data</Button>


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
