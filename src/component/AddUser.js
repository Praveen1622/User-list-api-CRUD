import React, { useState } from 'react';
import './AddUser.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UploadImage } from './UploadImage';

const AddUser = () => {
    const [user, setUser] = useState({
        "firstName": "",
        "lastName": "",
        "maidenName": "",
        "age": "",
        "gender": "",
        "email": "",
        "phone": "",
        "username": "",
        "password": "",
        "birthDate": "",
        "image": "",
        "bloodGroup": "",
        "height": "",
        "weight": "",
        "eyeColor": "",
    });

    const [data, setData] = useState("");
    // console.log(data, "ADDDDDDDDDDDDDD")
    const history = useNavigate();
    const handleAdd = () => {
        axios.post('https://dummyjson.com/users/add', user, {
            headers: { 'Content-Type': 'application/json' },
        })
            .then(newData => {
                setData(prevData => [...prevData, newData])
                console.log(newData, "newData")
                localStorage.setItem('added', JSON.stringify(newData));
                history("/")
            })
            .catch((error) => {
                console.log(error ,"AddUser");
            });
    }

    const handleCancel = () => {
        history("/")
    }

    return (
        <div className="AddUser">
            <div className='profile-container'>
      
            <div className='profile-image' value={user.image}>
                                <UploadImage setUser={setUser} />
                            </div>
                <div className='profile-details'>
                    <div className='containadd'>
                        <div className="item">
                            <div className="text" style={{ width: '100px' }}>
                                <h4 className='index'>firstName</h4>
                            </div>
                            <div className="text" >
                                <input className='fill' type='text' value={user.firstName}
                                    onChange={e => setUser((item) => ({ ...item, firstName: e.target.value }))} />
                            </div>
                        </div>
                        <div className="item">
                            <div className="text" style={{ width: '100px' }}>
                                <h4 className='index'>LastName</h4>
                            </div>
                            <div className="text" >
                                <input className='fill' type='text' value={user.lastName}
                                    onChange={e => setUser((item) => ({ ...item, lastName: e.target.value }))} />
                            </div>
                        </div>
                        <div className="item"  >
                            <div className="text" style={{ width: '100px' }}>
                                <h4 className='index'>E-mail</h4>
                            </div>
                            <div className="text" >
                                <input className='fill' type='text' value={user.email}
                                    onChange={e => setUser((item) => ({ ...item, email: e.target.value }))} />
                            </div>
                        </div>
                        <div className="item">
                            <div className="text" style={{ width: '100px' }}>
                                <h4 className='index'>Age</h4>
                            </div>
                            <div className="text" >
                                <input className='fill' type='text' value={user.age}
                                    onChange={e => setUser((item) => ({ ...item, age: e.target.value }))} />
                            </div>
                        </div>
                        <div className="item">
                            <div className="text" style={{ width: '100px' }}>
                                <h4 className='index'>Gender</h4>
                            </div>
                            <div className="text" >
                                <input className='fill' type='text' value={user.gender}
                                    onChange={e => setUser((item) => ({ ...item, gender: e.target.value }))} />
                            </div>
                        </div>
                        <div className="item">
                            <div className="text" style={{ width: '100px' }}>
                                <h4 className='index'>BirthDate</h4>
                            </div>
                            <div className="text" >
                                <input className='fill' type='text' value={user.birthDate}
                                    onChange={e => setUser((item) => ({ ...item, birthDate: e.target.value }))} />
                            </div>
                        </div>
                        <div className="item">
                            <div className="text" style={{ width: '100px' }}>
                                <h4 className='index'>Phone</h4>
                            </div>
                            <div className="text" >
                                <input className='fill' type='text' value={user.phone}
                                    onChange={e => setUser((item) => ({ ...item, phone: e.target.value }))} />
                            </div>
                        </div>
                    </div>
                    <button className='profile-button' onClick={handleAdd}>ADD</button>
                    <button className='profile-button' onClick={handleCancel}>Cancel</button>
                </div>
            </div>

        </div>
    )
}

export default AddUser;

