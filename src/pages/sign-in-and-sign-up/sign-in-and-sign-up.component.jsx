import React from 'react'

import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/sing-in/sing-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>    
    </div>
)

export default SignInAndSignUpPage