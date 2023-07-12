import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../Services/API';
import { useNavigate } from 'react-router-dom';
import './Users.css';
const Users = () => {

  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const history = useNavigate();

  const callUserAPI = async () => {
    const response = await getAllUsers();
    // console.log(response, "response");
    setData(response.users);
  };

  useEffect(() => {
    callUserAPI();
  }, []);

  const searchData = JSON.parse(localStorage.getItem('search'));
  const updateUser = JSON.parse(localStorage.getItem('update'));
  const getAddedUser = JSON.parse(localStorage.getItem('added'));
  const getDeletedData = JSON.parse(localStorage.getItem('delete'));

  useEffect(() => {

    if (searchData?.users) {
      setData(searchData?.users);
      localStorage.removeItem('search');
    }
  }, [searchData]);
  console.log(searchData, "searchDatasearchData")
  useEffect(() => {

    if (data?.length && updateUser?.id) {
      const newData = data.filter(item => item.id !== updateUser.id);
      const updatedData = [...newData, updateUser];
      setData(updatedData);
      localStorage.removeItem('update');
    }

    if (data?.length && getAddedUser) {
      const newData = [...data, getAddedUser.data];
      setData(newData);
      localStorage.removeItem('added');
    }

    if (data?.length && getDeletedData?.id) {
      const updatedData = data.filter((item) => item.id != getDeletedData.id)
      setData(updatedData)
      localStorage.removeItem('delete');
    }
  },
    [data, updateUser, getAddedUser, getDeletedData]);

  const handleClick = (id) => {
    history(`/viewuser/${id}`);
  };

  return (
    <div className='container'>

      {data?.sort((a, b) => a.id - b.id).map(user => (
        <div className='card' key={user.id} onClick={() => handleClick(user.id)} >
          <img alt="User Image" src={user.image} style={{ width: "300px" }} />
          <div className='card-content'>
            <p>firstName:{user.firstName}</p>
            <p>lastName: {user.lastName}</p>
            <p>email: {user.email}</p>
            <p>age: {user.age}</p>
            <p>gender: {user.gender}</p>
            <p>birthDate: {user.birthDate}</p>
            <p>phone: {user.phone}</p>
          </div>

        </div>
      ))}

    </div>
  );
};
export default Users;

