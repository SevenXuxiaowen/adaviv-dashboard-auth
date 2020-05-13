import React from 'react'
import Tab61 from './chart6/Tab61'
import Tab62 from './chart6/Tab62'
import Tab63 from './chart6/Tab63'

class Chart6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabId: 0
        }
        this.tabColors = ["rgba(255, 255, 255)", "rgba(255, 255, 255, 0.5)"];
        this.tabClick = this.tabClick.bind(this);
        this.generateChart = this.generateChart.bind(this);
    }

    tabClick(id) {
        this.setState({ tabId: id })
    }

    generateChart() {
        if (this.state.tabId === 0) {
            return <Tab61 data = {this.props.data}/>
        } else if (this.state.tabId === 1) {
            return <Tab62 data = {this.props.data}/>
        }else {
            return <Tab63 data = {this.props.data}/>
        }
    }

    render() {
        //console.log(this.props.data);
        const color1 = this.state.tabId === 0 ? this.tabColors[0] : this.tabColors[1];
        const color2 = this.state.tabId === 1 ? this.tabColors[0] : this.tabColors[1];
        const color3 = this.state.tabId === 2 ? this.tabColors[0] : this.tabColors[1];

        return (
            <div style={{ marginTop: "70px", position: "relative" }}>
                <div className="per-chart-card" style={{height:"270px"}}>
                    <div style={{
                        display:"grid",
                        gridTemplateColumns: "90px 1fr"
                    }}>
                        <div className="tier-gp">
                            <div className="tier-btn ">Tier 1</div>
                            <div className="tier-btn ">Tier 2</div>
                            <div className="tier-btn ">Tier 3</div>
                        </div>
                        <div >{this.generateChart()}</div>
                    </div>
                </div>
                <div style={{ position: "absolute", top: "0px", zIndex: 1 }}>
                    <div className="sm-tab" style={{ backgroundColor: color1 }} onClick={() => this.tabClick(0)}>Efficiency factor</div>
                    <div className="sm-tab" style={{ backgroundColor: color2 }} onClick={() => this.tabClick(1)}>Harvest Weight (pounds)</div>
                    <div className="sm-tab" style={{ backgroundColor: color3 }} onClick={() => this.tabClick(2)}>Yield Performance (grams / sq.ft.)</div>
                </div>
            </div>
        )
    }
}

export default Chart6;