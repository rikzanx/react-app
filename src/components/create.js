import axios from 'axios';
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

export default function Create(){
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckBox] = useState(false);
    const postData= () => {
        axios.post('https://65b6077eda3a3c16ab002135.mockapi.io/api/v1/fakeData',{
            firstName,
            lastName,
            checkbox
        }).then(()=> {
            navigate('/read')
        })
    }
    return (
        <Form className='create-form'>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First name' onChange={(e) => setFirstName(e.target.value) } />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last name' onChange={(e)=>setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I Agree to the Terms and Conditions' onChange={(e) => setCheckBox(!checkbox)}/>
            </Form.Field>
            <Button type='submit' onClick={postData}>Submit</Button>
        </Form>
    )
}