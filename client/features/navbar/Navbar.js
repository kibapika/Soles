import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';
import mainlogo from '../../../src/components/pictures/mainlogo.png'
import cart from '../../../src/components/pictures/cart.png'


const Navbar = () => {
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  const isLoggedIn = false;

// placeholder functions for each button
  const AthleticBtn = () => {
    console.log('filter athletic sneakers')
  }

  const CasualBtn = () => {
    console.log('filter casual sneakers')
  }

  const SearchSneaks = () => {
    console.log('sneakers searched')
  }
  
  return (
    <div>
      {/* need to work on routes */}
    <nav id='navDiv'>
      <ul id='navBar'>
        <li className='navbarLi'>
          <img id='mainlogo' src={mainlogo} alt='mainlogo'/>
          <Link className='navLinks' to="/home">Home</Link>
          <button className='sneakBtns' type='button' onClick={AthleticBtn}>Athletic</button>
          <button className='sneakBtns' type='button' onClick={CasualBtn}>Casual</button>
        </li>
      <li className='navbarLi'>
      <input placeholder='search...' type='text'/>
      <input onClick={SearchSneaks} type='submit'/>
      <Link className='navLinks' to="/login">Login</Link>
      <Link className='navLinks' to="/signup">Sign Up</Link>
      <Link to='/cart'><img id='cart' src={cart}></img></Link>
      </li>
      </ul>
      </nav>
      <div>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
           
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          // need to work on home page before log in 
          <div>
            {/* The navbar will show these links before you log in */}
            {/* <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link> */}
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
