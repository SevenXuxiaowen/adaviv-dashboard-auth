import React from 'react'

import Topbar from './Topbar'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tabId: 0,
        }
        this.switchTabId = this.switchTabId.bind(this);
    }

    switchTabId(id){
        //console.log(id);
        this.setState({tabId: id});
    }

    render() {
        // console.log("test");
        return (
            <div>
                <Topbar />
                <Sidebar switchTabId = {this.switchTabId}/>
                <div style={{
                    display: "grid",
                    gridTemplateColumns:"200px 1fr"
                }}>
                    <div></div>
                    <Dashboard tabId = {this.state.tabId}/>
                </div>
            </div>
        )
    }
}

export default Main;