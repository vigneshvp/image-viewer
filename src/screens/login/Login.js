import React, {Component} from "react";
import './Login.css'
import Header from "../../common/header/Header";
import {Button, Card, FormControl, FormHelperText, Input, InputLabel} from "@material-ui/core";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            validUsernameAndPassword: "dispNone"
        };
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"});
        this.state.password === "" ? this.setState({passwordRequired: "dispBlock"}) : this.setState({passwordRequired: "dispNone"});
        if (this.state.username === "admin" && this.state.password === "admin") {
            this.setState({validUsernameAndPassword: "dispNone"});
            sessionStorage.setItem(
                "accessToken",
                "IGQVJVMUpqV1BlOEdwdldUMmMyTHlaVGdPR2hwZAHJ0c3pfVklZATWZAWWHlRZAlJBUDExYXZA6NGVuZAThaWGhvM3psTy1WMkhNOXFiUmVUbHdzRWhtQTBPSVlrX2lINDBtNC1LLXJjeXRCS2JZAVER3ODc5MXlVNm9PTmREaGRR"
            );
            window.location = "/home";
        } else {
            this.setState({validUsernameAndPassword: "dispBlock"});
        }
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({username: e.target.value});
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <div>
                <Header/>
                <Card className="card">
                    <h2 className="card-heading">LOGIN</h2>
                    <FormControl fullWidth={true} margin="normal" required>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input id="username" type="text" username={this.state.username}
                               onChange={this.inputUsernameChangeHandler}/>
                        <FormHelperText className={this.state.usernameRequired}>
                            <span className="red">required</span>
                        </FormHelperText>
                    </FormControl>
                    <br/><br/>
                    <FormControl fullWidth={true} margin="normal" required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" password={this.state.password}
                               onChange={this.inputPasswordChangeHandler}/>
                        <FormHelperText className={this.state.passwordRequired}>
                            <span className="red">required</span>
                        </FormHelperText>
                        <FormHelperText className = {this.state.validUsernameAndPassword}>
                            <span className="red">Incorrect username and/or password</span>
                        </FormHelperText>
                    </FormControl>
                    <br/><br/>
                    <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                </Card>
            </div>
        );
    }
}
