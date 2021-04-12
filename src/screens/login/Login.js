import React, {Component} from "react";
import './Login.css'
import Header from "../../common/header/Header";
import {Button, Card, FormControl, Input, InputLabel,FormHelperText} from "@material-ui/core";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            usernameRequired: "dispNone"
        };
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    render() {
        return (
            <div>
                <Header/>
                <Card className="card">
                    <h2 className="card-heading">LOGIN</h2>
                    <FormControl fullWidth={true} margin="normal" required>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input id="username" type="text"/>
                        <FormHelperText className={this.state.usernameRequired}>
                            <span className="red">required</span>
                        </FormHelperText>
                    </FormControl>
                    <br/><br/>
                    <FormControl fullWidth={true} margin="normal" required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password"/>
                    </FormControl>
                    <br/><br/>
                    <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                </Card>
            </div>
        );
    }
}
