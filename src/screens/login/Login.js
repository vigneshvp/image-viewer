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
                    <FormControl fullWidth={true} margin="normal">
                        <InputLabel htmlFor="username">Username *</InputLabel>
                        <Input
                            id="username"
                        />
                    </FormControl>
                    <FormControl fullWidth={true} margin="normal">
                        <InputLabel htmlFor="password">Password *</InputLabel>
                        <Input
                            id="password"
                            type="password"
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        className="button"
                    >
                        LOGIN
                    </Button>
                </Card>
            </div>
        );
    }
}
