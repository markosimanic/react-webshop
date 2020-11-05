import React from 'react'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

//this currentUser value comes from reducer
const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'> SHOP </OptionLink>
            <OptionLink to='/contact'> CONTACT </OptionLink>
            {
                currentUser ? 
                    (
                        <OptionLink as='div' onClick={() => auth.signOut()}> 
                            SIGN OUT 
                        </OptionLink>
                    ) 
                    : 
                    (
                        <OptionLink to='signIn'> 
                            SIGN IN 
                        </OptionLink>
                    )
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);