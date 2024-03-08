import React from 'react'
import {Table} from 'react-bootstrap'
function Boot(){

    const list = [
        {Name:"Pranav",Email:"Pranav@123",Contact:123},
        {Name:"Amey",Email:"Amey@gmail.com",Contact:321},
        {Name:"Abhi",Email:"Abhi@gmail.com",Contact:456},
        {Name:"Amit",Email:"Amit@gmail.com",Contact:654},
        {Name:"Shubh",Email:"Shubh@gmail.com",Contact:789},
    ];
    return(
        <div className='boot'>
            <div>
                <h2>List With BootStrap Table</h2>
                <Table striped variant='dark' hover>
                    <tbody>
                        <tr>
                            <td>NAME</td>
                            <td>EMAIL</td>
                            <td>CONTACT</td>
                        </tr>
                        {
                            list.map((i,key)=>
                            <tr key={key}>
                                <td>{i.Name}</td>
                                <td>{i.Email}</td>
                                <td>{i.Contact}</td>
                            </tr>
                            )}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
    export default Boot;