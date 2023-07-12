import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSingleUser } from '../Services/API';
import './ViewUser.css';

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const history = useNavigate();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getSingleUser(id);
        setUser(userData);
      } catch (error) {
        console.log("Error in fetchData:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = () => {
  localStorage.setItem('update', JSON.stringify(user));
  history("/")
  }
  const handleClear = (id) => {
    localStorage.setItem('delete', JSON.stringify({ id: id }));
    history("/")
  }
const handleCancel = () => {
  history('/')
}


  return (
    <div>
      {user ? (
        <div className='profile-container'>
          <img className='profile-image' src={user.image} alt="User Image" />
          <div className='profile-details'>
            <h3 className='profile-userid' style={{}} >User ID: {id}</h3>
            <DisplayField title={'firstName'} user={user.firstName}  toggle ={toggle}   setUser={setUser} />
            <DisplayField title={'email'} user={user.email} toggle ={toggle}  setUser={setUser} />
            <DisplayField title={'age'} user={user.age}  toggle ={toggle} setUser={setUser} />
            <DisplayField title={'gender'} user={user.gender} toggle ={toggle}  setUser={setUser} />
            <DisplayField title={'birthDate'} user={user.birthDate}  toggle ={toggle} setUser={setUser} />
            <DisplayField title={'phone'} user={user.phone}  toggle ={toggle} setUser={setUser} />
            <div className='profile-action'>
            {!toggle ? (
              <>
              <button className='profile-button' onClick={() => setToggle((prev) => !prev)}>Edit</button>
              <button className='profile-button' onClick={(id) => handleClear(user.id)}>Delete</button>
              </>
              ) : (
                <>
                <button className='profile-button' onClick={() =>  handleUpdate()}>Update</button>
                <button className='profile-button' onClick={handleCancel}>Cancel</button>
                </>
            )}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ViewUser;

const DisplayField = ({title, user, toggle, setUser}) => {
  return (
    <div className='contain'>
      <div  className ="text" style={{width: '100px'}}>
        <h4 className='index'>{title}:</h4>
      </div>
      <div className ="text" >
        {
          toggle ? (
            <input
            className='fill'
              type='text'
              value={user}
              onChange={e => {
                  // console.log({[title] : e.target.value} , "Changes")
                setUser(prevUser =>({...prevUser, [title] : e.target.value}))
              }}
            />
          ) : (
            <p className=''>{user}</p>
          ) 
        }
      </div>
    </div>
  )
}

const style = {width: '-webkit-fill-available'}

