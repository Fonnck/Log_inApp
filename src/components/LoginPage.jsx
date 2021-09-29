import React from "react";
import axios from 'axios';

import '../assetss/css/LoginPage.css';
import { ApiUrl } from '../services/api';



class LoginPage extends React.Component {

    /*     constructor(props) {
            super(props);
        } */

    state = {
        loginForm: {
            "username": "",
            "password": ""
        },
        error: false,
        errorMsg: ""
    }

    //let bodyJson = {
    // "IDClient": "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
    // "ServiceName": "AdminService",
    // "WSToken": "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
    // "MethodHash": "com.advantage.bean.account.WorkSession_loguinUsuarioWS_String_String",
    // "ArgumentList": [ ...this.state.loginForm
    //   ]
    //};

    changeManager = async e => {
        await this.setState({
            loginForm: {
                ...this.state.loginForm,
                [e.target.name]: e.target.value
            }
        })
        // console.log(this.state.loginForm);
    }

    submitManager = e => {
        e.preventDefault();
    }

    loginBtnManager = () => {

        console.log(this.state.loginForm.username);
        console.log(this.state.loginForm.password);

        /*         if (this.state.error === false) {
                    this.setState({
                        error: true,
                        errorMsg: "ERROR 'CORES Policy' "
                    }
                    )
                }
                else {

                } */

        axios.post(ApiUrl, {
            "IDClient": "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
            "ServiceName": "AdminService",
            "WSToken": "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
            "MethodHash": "com.advantage.bean.account.WorkSession_loguinUsuarioWS_String_String",
            "ArgumentList": [this.state.loginForm.username, this.state.loginForm.password]
        },
        {headers: {}})
            .then(rps => {
                console.log(rps);
                if (rps.data.status === 'ok') {

                    localStorage.setItem("token", rps.data.token);
                    this.props.history.push("/userpage");

                }
                else {
                    this.setState({
                        error: true,
                        errorMsg: "Auth error"
                    })
                }
            }).catch(
                this.setState({
                    error: true,
                    errorMsg: "Cannot conect to the Api -- CORES Policy Issue"
                })
            ).finally(() => {
                this.props.history.push("/userpage");
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
                            <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.loginBtnManager} />
                        </form>


                        {this.state.error === true &&

                            <div className="alert alert-danger" role="alert">
                                {this.state.errorMsg}
                            </div>
                        }


                        <div id="formFooter">
                            <a className="underlineHover" href="../components/UserPage.jsx">Forgot Password?</a>
                        </div>

                    </div>

                </div>

            </React.Fragment>

        );
    }
}

export default LoginPage;