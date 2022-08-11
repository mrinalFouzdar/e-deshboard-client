import { useState } from "react"
import {useNavigate} from "react-router-dom"
// onsubmit
export const FromHook=(Initial="")=>{
    const [formData,setFormData]=useState(Initial)
    const  nevigate = useNavigate()
    const handleInputChange=(e)=>{
        let {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        let result =await fetch('http://localhost:5000/register',{
            method:"Post",
            body:JSON.stringify(formData),
            headers:{
                "Content-type":"application/json"
            }
        });
        result = await result.json();
        console.log(result)
        localStorage.setItem("user",JSON.stringify(result))
        if(result){
            nevigate("/")
        }
    }
    const nevigatFun=()=>{
    const auth = localStorage.getItem("user")
        if(auth){
            nevigate("/")
        }
    }
    return{formData,handleInputChange,handleSubmit,nevigatFun}
}