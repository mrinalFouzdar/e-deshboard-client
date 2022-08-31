import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
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
        let result =await fetch('http://localhost:5000/api/auth/register',{
            method:"Post",
            credentials:"include",
            body:JSON.stringify(formData),
            headers:{
                "Content-type":"application/json"
            }
        });
        result = await result.json();
        console.log(result)
        // try {
        //     let result = await axios.post('http://localhost:5000/api/auth/register',formData, {Credential:"include"});
        //     console.log(result);
        // } catch (error) {
        //     console.log(error);
        // }

    }

    const handleSubmitLogin=async(e)=>{
        e.preventDefault()
        try {
            let result = await axios.post('http://localhost:5000/api/auth/logIn',formData,{ withCredentials: true });
            console.log(result);
            localStorage.setItem("user",JSON.stringify(result.data))
            if(result){
                nevigate("/")
            }  
        } catch (error) {
            console.log(error)
        }


    }


    const handleAddProduct=async(e)=>{
        e.preventDefault()
        const userId =JSON.parse(localStorage.getItem("user"))._id
        console.log(userId)
        try {
            let result = await axios.post('http://localhost:5000/add-product',{...formData,userId})
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
    const nevigatFun=()=>{
    let auth = localStorage.getItem("user")
        if(auth){
            nevigate("/")
        }
    }
    return{formData,handleInputChange,handleSubmit,nevigatFun,handleSubmitLogin,handleAddProduct}
}