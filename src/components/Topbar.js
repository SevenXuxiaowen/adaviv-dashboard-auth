import React from 'react'
import logo from '../img/logo.png'

import { META_DATA } from '../APIs/metaData'

var today = new Date();
var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

class Topbar extends React.Component {
    buildTimewindow(){
        const timewindow = [];
        const arr = META_DATA.harvests.range;
        const classes = ["tw-0", "tw-1", "tw-2"];
        arr.forEach((ele, index) => {
            let classId = 0;
            if(ele[0] === META_DATA.harvests.select[0]){
                classId = 1;
            }else if(ele[0] === META_DATA.harvests.select[1]){
                classId = 1;
            }else if(ele[0] > META_DATA.harvests.select[0] && ele[0] < META_DATA.harvests.select[1]){
                classId = 2;
            }
            timewindow.push(
                <div key={index} style={{
                    display:"inline-block",
                    width:`${100/arr.length}%`,
                    // border:"1px solid red",
                    fontSize:"12px",
                    textAlign:"center"

                }}>
                    <div>{ele[0]}</div>
                    <div className="tw-block">
                        <div className={classes[classId]}></div>
                    </div>
                    <div>{ele[1]}</div>
                </div>
            )
        });
        return timewindow;
    }

    render() {

        return (
            <div className="topbar">
                <div className="topbar-top">
                    <div>
                        <img alt="i-logo" src={logo} style={{
                            padding: "0 0 0 20px",
                            height: "60px"
                        }} />
                    </div>
                    <div>
                        <div>
                            <div className="sm-header grey">{META_DATA.enterprise.location}</div>
                            <div className="sm-header grey" style={{ paddingLeft: "45px" }}>{date}</div>
                        </div>
                        <h4>{META_DATA.enterprise.company}</h4>
                    </div>
                    <div>
                        <div className="sm-header grey">Total yield</div>
                        <h4><span className="green">{META_DATA.total.cur}</span> / <span>{META_DATA.total.tar}</span></h4>
                    </div>
                    <div className="top-selector">
                        Harvest #
                    <div className="btn-topbar">{META_DATA.harvests.select[0]}<DropDown /></div>
                        -
                    <div className="btn-topbar">{META_DATA.harvests.select[1]}<DropDown /></div>
                    </div>
                    <div>
                        Room
                    <div className="btn-topbar btn-room">all<DropDown /></div>
                    </div>
                    <div>
                        Strain
                    <div className="btn-topbar btn-strain">all<DropDown /></div>
                    </div>
                </div>
                <div className="topbar-bottom">
                    <div className="time-window" style={{
                        padding:"10px 0px 0px 200px",
                        width:"1300px"
                    }}>
                        {this.buildTimewindow()}
                    </div>
                </div>
            </div>
        )
    }
}

function DropDown() {
    return (
        <span className="material-icons i-down"> arrow_drop_down</span>
    )
}

export default Topbar;