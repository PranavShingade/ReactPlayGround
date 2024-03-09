import React from 'react'
import {Table} from 'react-bootstrap'
function Customer(){
    const cust = [
        {
            Name: "Pranav", Email: "Pranav@gmail.com", Address: [{ HouseNo: "10", State: "Maharashtra", Country: "India" },
            { HouseNo: "20", State: "Maharashtra", Country: "India" }, { HouseNo: "30", State: "Maharashtra", Country: "India" },
            { HouseNo: "40", State: "Maharashtra", Country: "India" }, { HouseNo: "50", State: "Maharashtra", Country: "India" }
            ]
        },
        {
            Name: "Amit", Email: "Amit@gmail.com", Address: [{ HouseNo: "10", State: "Maharashtra", Country: "India" },
            { HouseNo: "20", State: "Maharashtra", Country: "India" }, { HouseNo: "30", State: "Maharashtra", Country: "India" },
            { HouseNo: "40", State: "Maharashtra", Country: "India" }, { HouseNo: "50", State: "Maharashtra", Country: "India" }
            ]
        }

    ]
    return(
        <div className='customer'>
            <h2>Nested List In React Js</h2>
            <Table variant='dark' striped>
                <tbody>
                    <tr>
                        <td>Sr.No</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                </tbody>
                    
                        {
                        cust.map((data,i)=>
                            <tr>
                                <td>{i+1}</td>
                                <td>{data.Name}</td>
                                <td>{data.Email}</td>
                                <td> 
                                    <Table variant='dark' striped>
                                        <tbody>{
                                            data.Address.map((item)=>
                                        <tr> 
                                            <td>{item.HouseNo}</td>
                                            <td>{item.State}</td>
                                            <td>{item.Country}</td>
                                        </tr>
                                        )}
                                        </tbody>
                                    </Table> 
                                </td>
                            </tr>
                        )
                    }
                        
                    </Table>
                
        </div>
    )
}
export default Customer