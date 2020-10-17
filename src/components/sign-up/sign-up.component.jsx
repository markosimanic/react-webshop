import React from 'react';
import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component{
    
    constructor(){
        super();
        this.state = {
            displayName : '',
            email : '',
            password: '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try {
            //we are destrucuring user of the return of createUserWithEmailAndPassword
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            //await up there means that we wait to createUserProfileDocument finish and then we set state to initial - clears form
            this.setState({
                displayName : '',
                email : '',
                password: '',
                confirmPassword : ''
            })
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name] : value})
    }
    
    render() {
        const {displayName,email,password,confirmPassword} = this.state;
       
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className='sign-up-form'>
                    <FormInput 
                        type='text'
                        name='displayName' 
                        value={displayName} 
                        onChange={this.handleChange} 
                        label='Display name'>
                    </FormInput>

                    <FormInput 
                        type='email'
                        name='email' 
                        value={email} 
                        onChange={this.handleChange} 
                        label='Email'>
                    </FormInput>

                    <FormInput 
                        type='password'
                        name='password' 
                        value={password} 
                        onChange={this.handleChange} 
                        label='Password'>
                    </FormInput>

                    <FormInput 
                        type='password'
                        name='confirmPassword' 
                        value={confirmPassword} 
                        onChange={this.handleChange} 
                        label='Confirm password'>
                    </FormInput>
                    
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
                
            </div>
        );
    }
}

export default SignUp;