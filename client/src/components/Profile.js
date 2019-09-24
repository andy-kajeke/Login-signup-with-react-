import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            first_Name: '',
            last_Name: '', 
            email: ''
         };
    }

    componentDidMount(){
       const token = localStorage.userToken;
       const decoded = jwt_decode(token);
       this.setState({
           first_Name: decoded.first_Name,
           last_Name: decoded.last_Name,
           email: decoded.email
       })
    }

    render() {
        return (
            <div className='container'>
                <div className='jumbotron mt-5'>
                    <div className='col-sm-8 mx-auto'>
                        <h3 className='text-center'>Profile</h3>
                    </div>
                    <table className='table col-md-6 mx-auto'>
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{ this.state.first_Name }</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{ this.state.last_Name }</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{ this.state.email }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Profile;