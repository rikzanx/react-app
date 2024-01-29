import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, TableHeaderCell, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function Read(){
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get('https://65b6077eda3a3c16ab002135.mockapi.io/api/v1/fakeData')
            .then((response) => {
                setAPIData(response.data)
            })
    },[])
    const setData = (data)=>{
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID',id);
        localStorage.setItem('First Name', firstName);  
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
    }
    const onDelete = (id) => {
        axios.delete(`https://65b6077eda3a3c16ab002135.mockapi.io/api/v1/fakeData/${id}`)
            .then(()=>{
                getData();
            })
    }
    const getData = () => {
        axios.get('https://65b6077eda3a3c16ab002135.mockapi.io/api/v1/fakeData')
            .then((response) => {
                setAPIData(response.data)
            })
    }
    return (
        <div>
            <Link to='/create'>
                <Button>Create</Button>
            </Link>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <TableHeaderCell>First Name</TableHeaderCell>
                        <TableHeaderCell>Last Name</TableHeaderCell>
                        <TableHeaderCell>Checked</TableHeaderCell>
                        <TableHeaderCell>Action</TableHeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return(
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Link>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}