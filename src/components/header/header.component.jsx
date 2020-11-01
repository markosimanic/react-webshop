import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { ReactComponent as Logo} from '../../assets/4.3 crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import './header.styles.scss'
                //this currentUser value comes from reducer
const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'></Logo>
        </Link> 
        <div className='options'>
            <Link className='option' to='/shop'> SHOP </Link>
            <Link className='option' to='/contact'> CONTACT </Link>
            {
                currentUser ? (
                <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                ):(
                <Link className='option' to='signIn'>SIGN IN</Link>
                )}
            <CartIcon/>
        </div>
        {
            hidden ? null :
            <CartDropdown/>
        } 
    </div>
)
                        //this state is rootReducer
const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
              //state from rootReducer is user -> state.user returns its value -> userReducer which have currentUser in its state 
    currentUser,
    hidden
  });
  
  export default connect(mapStateToProps)(Header);