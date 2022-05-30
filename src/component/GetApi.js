import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

export default function GetApi() {
    const [first, setfirst] = useState([])
    const User = () => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => { setfirst(res.data) })
    }
    console.log(first)
    return (
        <div>
            <Button onClick={User}>User</Button>
            {first.map((e,i) => {
                return (

                    <>
                        <p>{e.id}</p>
                    </>
                )
            })}
            {first.map((e) => {
                return (

                    <>
                        <p>{e.name}</p>
                    </>
                )
            })}
            {first.map((e) => {
                return (

                    <>
                        <p>{e.username}</p>
                    </>
                )
            })}
            {first.map((e) => {
                return (

                    <>
                        <p>{e.email}</p>
                    </>
                )
            })}
        </div>
    )
}
