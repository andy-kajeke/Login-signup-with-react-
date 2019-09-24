import React, {Component} from 'react';
import { login } from './UserFunctions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
                this.props.history.push('/profile')
            }
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form onValidate onSubmit={this.onSubmit}>
                            <h4 className='h3 mb-3 font-weight-normal'>Please sign in</h4>
                            <div className='form-group'>
                                <label htmlFor='email'>Email Address</label>
                                <input type='email' className='form-control'
                                    name='email' placeholder='Enter email' 
                                    value={this.state.email} onChange={this.onChange}
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Enter Password</label>
                                <input type='password' className='form-control'
                                    name='password' placeholder='Enter password' 
                                    value={this.state.password} onChange={this.onChange}
                                />
                            </div>
                            <button type='submit' className='btn btn-lg btn-primary btn-block' onClick={this.onSubmit}>
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;