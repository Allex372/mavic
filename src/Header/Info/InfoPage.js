import React, {Component} from 'react';
import AllUsers from "../../Users/AllUsers";
import './info.css'
import FullUser from "../../Users/FullUser";

class InfoPage extends Component {
    render() {
        return (
            <div className={'info-users'}>
                <div className={'show-user'}>
                    <AllUsers/>
                </div>

                <div className={'show-info'}>
                    <FullUser/>
                </div>

            </div>
        );
    }
}

export default InfoPage;