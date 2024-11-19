import React, { useState } from 'react';

export default function Loginc({ onLogIn, onError }) {
    const [formData, formDataset] = useState({ email: '', password: '' })
    const handleChange = (e) => {
        const { name, value } = e.target
        formDataset({ ...formData, [e.target.name]: e.target.value })
    };
    const handleSubmit = (e) =>{
        e.preventDefault()
        const storedData = JSON.parse(localStorage.getItem('signUpData'))
        if(storedData && storedData.email === formData.email && storedData.password === formData.password) {
            onLogIn(storedData.username)
        }
        else{
            onError('Invalid Email or Password')
        }
    }
    return(
        <>


        </>
    )
}
