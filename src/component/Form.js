import React, { useState } from 'react';
import top2 from '../assets/top2.png';
import { useForm } from 'react-hook-form';

export default function Form() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
      const handleGoogleSignIn = () => {
        // Implement the Google sign-in logic here
        console.log('Perform Google sign-in');
      };
      const handleForgotPassword = () => {
        // Implement your forgot password logic here
        console.log("Forgot password clicked");
      };    
      
  return (
    <section>
     <img src={top2} className='Img' alt="top2.png"/>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <div class="sign-up">
                    <span>Do not have an account?</span>
                    <span class="sign-up-link">Sign Up</span>
                </div>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("Username or gmail")} placeholder='Username or gmail' />
                    <input type="text" {...register("pwd")} placeholder='Password' />
                </form>
                <div className="forgot-password">
        <span onClick={handleForgotPassword}>Forgot password?</span>
      </div>
                <button className="google-btn" onClick={handleGoogleSignIn}>
            Continue with Google
          </button>
          <button className='btn'>Submit</button>
            </div>
            <div className="col-2">
               
            </div>
        </div>
    </section>
  )
}
