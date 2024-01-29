import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

export default function Update(){
    let navigate = useNavigate();
    const [id, setID] = useState(null); 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckBox] = useState(false);
    const updateAPIData = () => {
        axios.put(`https://65b6077eda3a3c16ab002135.mockapi.io/api/v1/fakeData/${id}`,{
            firstName,
            lastName,
            checkbox
        }).then(()=>{
            navigate('/read')
        })
    }
    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckBox(localStorage.getItem('Checkbox Value'))
    },[])
    return (
        <Form className='create-form'>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value) } />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last name' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I Agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckBox(!checkbox)}/>
            </Form.Field>
            <Button type='submit' onClick={updateAPIData}>Submit</Button>
        </Form>
    )
}