import React, {Component} from "react";
import './Header.css';
import 'typeface-roboto';
class Header extends Component {
    render() {
        return (
            <div>
                <header className="app-header">
                    <p className="app-logo">ImageViewer</p>
                </header>
            </div>
        )
    }
}

export default Header;