import React from 'react'

import { META_DATA } from '../APIs/metaData';

class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.actionsArray = META_DATA.actionsArray;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, id){
        e.preventDefault();
        this.props.switchTabId(id);
    }

    render() {
        const actions = this.actionsArray.map((act, index) => {
            return (
                <div key={index} className="action-box">
                    <div className="action-check"></div>
                    <div className="action-text">{act}</div>
                </div>
            )
        })
        return (
            <div className="sidebar">
                <div className="btn-sidebar" onClick={e => this.handleClick(e, 0)}>Trend</div>
                <div className="btn-sidebar" onClick={e => this.handleClick(e, 1)}>Performance</div>
                <div className="take-action">
                    <div style={{
                        padding: '12px 0 0 18px'
                    }}>Take Action</div>
                    {actions}
                </div>
            </div>
        )
    }
}

export default Sidebar