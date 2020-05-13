import React from 'react'

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';


const colors = [
    ["rgba(255, 0, 0, 0.3)", "rgba(255, 0, 0)"],
    ["rgba(255, 195, 0, 0.3)", "rgba(255, 195, 0)"],
]

class Chart5 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabId: 0
        }
        this.tabColors = ["rgba(255, 255, 255)", "rgba(255, 255, 255, 0.5)"]
        this.tabClick = this.tabClick.bind(this);
    }

    tabClick(id) {
        // this.setState({ tabId: id })
    }

    render() {
        const color1 = this.tabColors[this.state.tabId];
        const color2 = this.tabColors[(this.state.tabId + 1) % 2];
        return (
            <div style={{ marginTop: "70px", position: "relative" }}>
                <div className="per-chart-card">
                    {this.state.tabId === 0 ?
                        <div>
                            <div style={{ position:"relative", top:"10px", display: "grid", gridTemplateColumns: "60px 200px 1fr 400px" }}>
                                <div></div><div>%</div><div></div>
                                <div style={{ height: "50px", paddingBottom: "10px", textAlign: "center" }} >
                                    <div className="legend"><div className="legent-circle" style={{ backgroundColor: colors[0][0], border: "2px solid " + colors[0][1] }}></div>killed plants</div>
                                    <div className="legend"><div className="legent-circle" style={{ backgroundColor: colors[1][0], border: "2px solid " + colors[1][0] }}></div>infected plants</div>
                                </div>
                            </div>
                            <BarChart width={1200} height={250} data={this.props.data}
                                margin={{ top: 0, right: 10, left: 30, bottom: 20 }}
                                barSize={38}>
                                <CartesianGrid strokeDasharray="2 2" />
                                <XAxis dataKey="name" />
                                <YAxis yAxisId="left" orientation="left" domain={[0, 100]} />
                                <Tooltip contentStyle={{ fontWeight: "500" }} itemStyle={{ color: "black", fontWeight: "100" }} />
                                <Bar yAxisId="left" dataKey="killed" stackId="a" fill={colors[0][0]} stroke={colors[0][1]} strokeWidth="2" label={{ position: 'top' }} />
                                <Bar yAxisId="left" dataKey="infected" stackId="a" fill={colors[1][0]} stroke={colors[1][1]} strokeWidth="2" label={{ position: 'top' }} />
                            </BarChart>
                        </div> :
                        <div>coefficient of variation / cycle</div>
                    }
                </div>
                <div style={{ position: "absolute", top: "0px", zIndex: 1 }}>
                    <div className="sm-tab" style={{ backgroundColor: color1 }} onClick={() => this.tabClick(0)}>{'infected plants & killed plants'}</div>
                    <div className="sm-tab" style={{ backgroundColor: color2 }} onClick={() => this.tabClick(1)}>coefficient of variation / cycle</div>
                </div>
            </div>
        )
    }
}

export default Chart5;