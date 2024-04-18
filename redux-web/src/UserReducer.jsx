import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name:"users",
    initialState:userList,
    reducers:{
        adduser: (state,action)=>{
            state.push(action.payload)
        },
        updateuser: (state,action)=>{
            const{name,id,email}=action.payload;
            const uu= state.find(user=>user.id==id);
            if(uu){
                uu.name=name;
                uu.email=email;
            }
        },
        deleteuser:(state,action)=>{
            const{id}=action.payload;
            const uu= state.find(user=>user.id==id);
            if(uu){
                return state.filter(f=>f.id!==id)
            }
        }
    }
})

export const {adduser,updateuser,deleteuser} = userSlice.actions
export default userSlice.reducer;