import React, { Component } from 'react';
import axios from 'axios';

export default class SignupForm extends Component {

    constructor(props) {
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserPassword2 = this.onChangeUserPassword2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name:'',
            last_name:'',
            username: '',
            password: '',
            password2:''
        }
    }
   
    onChangeFirstName(e) {
        this.setState({ first_name: e.target.value })
    }
    
    onChangeLastName(e) {
        this.setState({ last_name: e.target.value })
    }
    onChangeUserName(e) {
        this.setState({ username: e.target.value })
    }

    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }

    onChangeUserPassword2(e) {
      this.setState({ password2 : e.target.value })
  }
    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            username: this.state.username,
            password: this.state.password,
            password2:this.state.password2
        };

        axios.post("http://127.0.0.1:8000/register/", userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

      this.setState({
      first_name:'',
	    last_name:'',
	    username: '',
      password: '',
      password2:''
    })
    }


    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add First Name</label>
                        <input type="text" value={this.state.first_name} onChange={this.onChangeFirstName} className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Add Last Name</label>
                        <input type="text" value={this.state.last_name} onChange={this.onChangeLastName} className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label>Add User Name</label>
                        <input type="text" value={this.state.username} onChange={this.onChangeUserName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Add User Password</label>
                        <input type="password" value={this.state.password} onChange={this.onChangeUserPassword} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Confirm User Password</label>
                        <input type="password" value={this.state.password2} onChange={this.onChangeUserPassword2} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}