import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import {deleteuser} from './UserReducer'

const Home = () => {
    const users=useSelector((state)=> state.users);
    const dispatch =useDispatch();

    const handledelete=(id)=>{
      dispatch(deleteuser({id:id}));
    }
  return (
    <div className='flex items-center justify-center flex-col mt-10'>
      <h2 className='font-serif font-extrabold text-xl '>CRUD app with JSON server</h2>
      <Link to="/create" className=' bg-green-700 text-white p-2 rounded-xl my-7'>create +</Link>
      <div className=''>
            <div className='flex justify-between'>
                <h1 className='mx-20 font-serif font-extrabold'>Id</h1>
                <h1 className='mx-20 font-serif font-extrabold'>Name</h1>
                <h1 className='mx-20 font-serif font-extrabold'>Email</h1>
                <h1 className='mx-20 font-serif font-extrabold'>Action</h1>
            </div>
                <hr className="w-full h-[0.5px] mx-auto my-4 border-0 rounded bg-gray-700"/>
                {users.map((user,index)=>(
                  <div key={index} className="flex my-3 justify-between items-start">
                    <div className="mx-16 font-serif font-extrabold">{user.id}</div>
                    <div className="mx-16 font-serif font-extrabold">{user.name}</div>
                    <div className="mx-16 font-serif font-extrabold">{user.email}</div>
                    <div className="">
                    <Link to={`/edit/${user.id}`}  className=' bg-blue-600 text-white p-2 rounded-xl mx-3'>edit </Link>
                    <button onClick={()=>handledelete(user.id)} className=' bg-red-600 text-white p-2 rounded-xl '>delete </button>
                    </div>
                  </div>
                ))}
      </div>
    </div>
  )
}

export default Home
