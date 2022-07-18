import React, { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { validate } from 'react-email-validator';
import FadeIn from 'react-fade-in';


export const SignUp = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const handleChange = (change) => (event) => {
        if (change === 'email') setemail(event.target.value)
        else if (change === 'password') setpassword(event.target.value)
        // console.log(email, password);
    }
    const register = () => {
        if (email && password && validate(email)) {
            axios.post('http://localhost:8000/api/signup', { email, password })
                .then((resp) => {
                    // console.log("resp", resp)
                    if (resp.data.error) toast.error(resp.data.error)
                    else {
                        toast.success("Account created.")
                        window.location.href = "http://localhost:3000/signin";
                    }
                })
                .catch((err) => console.log(err))
            setemail('')
            setpassword('')
        }
        else toast.error("Fill out all the fields and a valid email address.")
    }
    return (
        <FadeIn transitionDuration={2300}>
            <div style={{ height: "93vh" }}>
                <div className='beforeLogin'>
                    <div className='login sign'>
                        <h2>Make your debut today</h2>
                        <h3>Register now</h3>
                        <div className='signinFullBackground'>
                            {/* <label htmlFor="">Email</label> */}
                            <input onChange={handleChange('email')} className='loginInput' value={email} type="email" placeholder='example@gmail.com' /><br /><br />
                            {/* <label htmlFor="">Password</label> */}
                            <input onChange={handleChange('password')} className='loginInput' value={password} type="password" placeholder='*******' /><br /><br />
                            <button id='disablebutton' onClick={() => {
                                register()
                                document.getElementById('disablebutton').disabled = true
                                setTimeout(() => {
                                    document.getElementById('disablebutton').disabled = false
                                }, 2000)
                            }} style={{ width: "10rem", height: "2.1rem", borderRadius: "8px", textAlign: "center" }} value="Sign up">Sign up</button>
                            <Toaster
                                position="top-center"
                                reverseOrder={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
