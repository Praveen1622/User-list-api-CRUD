import axios from 'axios';
// import { useParams } from 'react-router-dom';

const  config  =(method = 'get',  url)=> ({
  method: method ,
  maxBodyLength: Infinity,
  url: url,
  headers: { }
});

const users = 'https://dummyjson.com/users';

export const getAllUsers = () => {
    const fetch = axios.request(config('get', users)).then((response)=>{
        return response.data
    }).catch((error)=>{
        console.log("error in getAllUsers")
    })
    return fetch
} 

const user = (id)=> `https://dummyjson.com/users/${id}`;


export function getSingleUser (id)  {
    const fetch = axios.request(config('get', user(id))).then((response)=>{
        return response.data
    }).catch((error)=>{
        console.log("error in getSingleUser")
    })
    return fetch
} 

const search = (value)=> `https://dummyjson.com/users/search?q=${value}`;

export function searchUser (value)  {
    const fetch = axios.request(config('get', search(value))).then((response)=>{
        return response.data
    }).catch((error)=>{
        console.log("error in searchUser")
    })
    return fetch
} 


const update = (id) => `https://dummyjson.com/users/${id}`

export function updateUser (id)  {
    const fetch = axios.request(config('put', update(id))).then((response)=>{
        return response.data
    }).catch((error)=>{
        console.log("error in upateUser")
    })
    return fetch
} 


