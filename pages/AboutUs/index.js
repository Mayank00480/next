import React from 'react'
import Link from 'next/link'
const index = () => {
    const details = [  { id : 1, name: 'Yash', role: 'Senior Developer'},{ id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}]
  return (
    <>
    {details.map(item => {
        return <><Link style= {{textDecoration:'none'}} key= {Math.random().toString()} href = {"AboutUs/"+item.id }>{item.name}</Link> <br/></>
    })}
    
    </>
  )
}

export default index
