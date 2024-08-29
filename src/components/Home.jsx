import React from "react"
import { Table } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Home = ({ data }) => {
    console.log(data)
    return (
        <Table striped bordered hover size="sm" >
            <thead>
                <tr>
                    <th scope="col" >ID</th>
                    <th scope="col" >First Name</th>
                    <th scope="col" >Last Name</th>
                    <th scope="col" >e-mail</th>
                    <th scope="col" >Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(item => (
                       <tr key={item.id} >
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default Home