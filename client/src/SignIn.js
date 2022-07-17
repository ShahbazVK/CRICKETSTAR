import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import axios from 'axios'
import FadeIn from 'react-fade-in'
// import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
    // const navigate = useNavigate()
    const notify = () => toast.error('Fill out all the fields.');
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [data, setdata] = useState('')
    const handleChange = (change) => event => {
        if (change === 'email') setemail(event.target.value)
        else if (change === 'password') setpassword(event.target.value)
        console.log(email, password);
    }
    const login = async () => {
        if (email && password) {
            await axios.get(`http://localhost:8000/api/signin/${email}`)
                .then((resp) => {
                    setdata(resp.data)
                    if (resp.data && resp.data.email === email && resp.data.password === password) {
                        toast.success("Logged in")
                        localStorage.setItem("email", email)
                        // navigate('/scoring')
                        window.location.href = "http://localhost:3000/scoring";
                    }
                    else {
                        toast.error("Incorrect credentials")
                        setdata(" ")
                    }
                })
                .catch((err) => console.log(err))

        }
        else notify()
        console.log("data", data);
    }

    return (
        <FadeIn transitionDuration={2300}>
            <div className='signinFullBackground' style={{ height: "93vh" }}>
                <div className='beforeLogin'>
                    <div className='login sign'>
                        <h2>Making a comeback?</h2>
                        <h3>Sign in</h3>
                        <div style={{ textAlign: "center" }}>
                            {/* <label htmlFor="">Email</label> */}
                            <input onChange={handleChange('email')} value={email} className='loginInput' type="email" placeholder='example@gmail.com' /><br /><br />
                            {/* <label htmlFor="">Password</label> */}
                            <input onChange={handleChange('password')} value={password} className='loginInput' type="password" placeholder='*******' /><br /><br />
                            <button id='signInDisbale' onClick={() => {
                                login()
                                document.getElementById("signInDisbale").disabled = true
                                setTimeout(() => {
                                    document.getElementById("signInDisbale").disabled = false
                                }, 2000)
                            }} style={{ width: "10rem", height: "2.1rem", borderRadius: "8px", textAlign: "center" }} value="Sign in" >Sign in</button>
                            <Toaster
                                position="top-center"
                                reverseOrder={true}
                            />
                        </div>
                        <h2>OR</h2>
                        <button style={{ width: "15rem", height: "2.4rem", borderRadius: "5px" }}><Link style={{ textDecoration: "none" }} to={'/signup'}>Click here to register Now</Link></button>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}
