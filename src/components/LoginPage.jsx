import React from "react";
import '../assetss/css/LoginPage.css';


class LoginPage extends React.Component {

    render() {
        return (

            <React.Fragment>

                <div className="wrapper fadeInDown">

                    <div id="formContent">

                        <div className="fadeIn first">
<br/>
                            <img src="https://freepikpsd.com/media/2019/10/flat-user-icon-png-4-Transparent-Images.png" id="icon" alt="User Icon" />
<br/>
                        </div>

                        <form>
                            <input type="text" id="login" className="fadeIn second" name="username" placeholder="UserName" />
                            <input type="text" id="password" className="fadeIn third" name="password" placeholder="Password" />
                            <input type="submit" className="fadeIn fourth" value="Log In" />
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