import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from './UserReducer';

const Update = () => {
    const {id}=useParams();
    const users=useSelector((state)=> state.users);
    const existinguser= users.filter(f=>f.id == id);
    const {name,email}=existinguser[0];
    const [uemail,setemail]=useState(email);
    const [uname,setname]=useState(name);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleupdate= (e)=>{
        e.preventDefault();
        dispatch(updateuser({
            id:id,
            name:uname,
            email:uemail
        }))
        navigate('/')
    }
  return (
    <div className='flex items-center justify-center w-full h-[100vh]'>
    <div className="w-[50%] text-white p-5 bg-gray-500 flex items-center justify-center flex-col">
      <h3 className='text-xl font-serif font-extrabold'>Update User</h3>
      <form onSubmit={handleupdate} action="">
      <div className="flex flex-col">
              <label htmlFor='name'>Name:</label>
              <input value={uname} onChange={(e)=>setname(e.target.value)} type="text" name="name" className="w-[40vw] my-2 rounded text-black" placeholder='enter name'/>
          </div>
          <div className="flex flex-col">
              <label htmlFor='email'>Email:</label>
              <input value={uemail} onChange={(e)=>setemail(e.target.value)} type="email"  name="email" className="w-[40vw] rounded text-black" placeholder='enter email'/>
          </div><br/>
          <button className='bg-blue-500 p-2 rounded'>Update</button>
      </form>
    </div>
  </div>
  )
}

export default Update
