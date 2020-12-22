import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { auth } from '../../firebase'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const [userRegistered, setUserIsRegistered] = useState(true);
    const dispatch = useDispatch()


    const userRegisteredHandler = () => {
        setUserIsRegistered(!userRegistered)
    }

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL
            }))
        })
        
    }
    const register = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic
                }))
            })
        }).catch((err) => {
            alert(err)
        })
        
    }

    return (
        <div className="login">
            <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
            <form>
                {
                    !userRegistered && (
                        <>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Full name (required if registering)"/>
                            <input type="text" value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)"/>
                        </>
                    )
                }
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email address"/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password"/>
                {
                    !userRegistered ? (
                        <button type="submit" className="login__button" onClick={register}>Register</button>
                    ) : (
                        <button type="submit" className="login__button" onClick={loginToApp}>Sign In</button>
                    )
                }
            </form>
            {
                !userRegistered ? (<p>Have an account already?
                <span className="login__register" onClick={userRegisteredHandler}>Login</span>
            </p>) : (<p>Not a member?
                <span className="login__register" onClick={userRegisteredHandler}>Register now</span>
            </p>)
            }
        </div>
    )
}

export default Login
