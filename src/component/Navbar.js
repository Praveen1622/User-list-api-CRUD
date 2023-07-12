import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { searchUser } from '../Services/API';

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const history = useNavigate();
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    // Perform search logic or navigate to search results page
    // console.log('Search value:', searchValue);
    const response = await searchUser(searchValue);

    localStorage.setItem("search", JSON.stringify(response))

    history("/")
    // console.log(
    //   response, "response"
    // )
    //  setSearchValue(response.users);
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar__logo">UserInfo</Link>
      <Link to="/adduser" className="navbarAdd">Add User</Link>
      <div className="navbar__menu">

        <form className='search' onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchChange}
            className="navbar__search-input"
          />
          <button type="submit" className="navbar__search-button" onClick={handleSearchSubmit}>Search</button>
        </form>

      </div>
    </div>
  );
}

export default Navbar;
