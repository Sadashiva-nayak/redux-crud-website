import React, { useState } from 'react'
import { adduser } from './UserReducer';
import {  useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [name,setname]=useState('');
    const [email,setemail]=useState('')
    const dispatch= useDispatch();
    const users=useSelector((state)=> state.users);
    const navigate=useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        dispatch(adduser({id:users[users.length-1].id+1 ,name,email}))
        navigate('/')
    }
  return (
    <div className='flex items-center justify-center w-full h-[100vh]'>
      <div className="w-[50%] text-white p-5 bg-gray-500 flex items-center justify-center flex-col">
        <h3 className='text-xl font-serif font-extrabold'>Add new User</h3>
        <form onSubmit={handlesubmit} action="">
        <div className="flex flex-col">
                <label htmlFor='name'>Name:</label>
                <input onChange={e=> setname(e.target.value)} type="text" name="name" className="w-[40vw] my-2 rounded" placeholder='enter name'/>
            </div>
            <div className="flex flex-col">
                <label htmlFor='email'>Email:</label>
                <input onChange={e=> setemail(e.target.value)} type="email"  name="email" className="w-[40vw] rounded" placeholder='enter email'/>
            </div><br/>
            <button className='bg-blue-500 p-2 rounded'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
