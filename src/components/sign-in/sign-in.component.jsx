import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;

        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form action="" method="post">
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                        ></FormInput>

                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required
                        ></FormInput>

                    <CustomButton type="submit">Sign In</CustomButton>
                    
                </form>
             </div>
        )
    }
}

export default  SignIn;