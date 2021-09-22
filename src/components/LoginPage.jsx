import React from "react";
import '../assetss/css/LoginPage.css';
import { ApiUrl } from '../services/api';
import axios from 'axios';


class LoginPage extends React.Component {

    state = {
        loginForm: {
            "username": "",
            "password": ""
        },
        error: false,
        errorMsg: ""
    }

    changeManager = async e => {
        await this.setState({
            loginForm: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        // console.log(this.state.loginForm);
    }

    submitManager = e => {
        e.preventDefault();
    }

    loginBtnManager = () => {

        axios.post(ApiUrl, this.state.loginForm)
        .then( rps => {
            console.log(rps);
        })

    } 


    render() {
        return (

            <React.Fragment>

                <div className="wrapper fadeInDown">

                    <div id="formContent">

                        <div className="fadeIn first">
                            <br />
                            <img src="https://freepikpsd.com/media/2019/10/flat-user-icon-png-4-Transparent-Images.png" id="icon" alt="User Icon" />
                            <br />
                        </div>

                        <form onSubmit={this.submitManager}>
                            <input type="text" className="fadeIn second" name="username" placeholder="UserName" onChange={this.changeManager} />
                            <input type="password" className="fadeIn third" name="password" placeholder="Password" onChange={this.changeManager} />
                            <input type="submit" className="fadeIn fourth" value="Log In" onclick={this.loginBtnManager} />
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="../components/LoginPage.jsx">Forgot Password?</a>
                        </div>

                    </div>

                </div>

            </React.Fragment>

        );
    }
}

export default LoginPage;