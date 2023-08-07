import React, { Component } from 'react'

export default class Users extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:[]
      }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
            response.json().then(users=>this.setState({users:users}))
        })
    }
  render() {
    return (
      <>
        <center><h2>Product Details</h2>
        <table className='table table-success table-striped table-hover'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.users.map(user=><tr key={user.id}>
                     <td>{user.id}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>{user.address.city}</td>
                     <td>{user.phone}</td>
                    </tr>)
                }
            </tbody>
        </table>

        </center>
      </>
    )
  }
}
