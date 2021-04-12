import React, {Component} from "react";
import './Login.css'
import Header from "../../common/header/Header";
import {Button, Card, FormControl, Input, InputLabel} from "@material-ui/core";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        };
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
                    </FormControl>
                    <br/><br/>
                    <FormControl fullWidth={true} margin="normal" required>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password"/>
                    </FormControl>
                    <br/><br/>
                    <Button variant="contained" color="primary">LOGIN</Button>
                </Card>
            </div>
        );
    }
}
