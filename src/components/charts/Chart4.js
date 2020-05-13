import React from 'react'

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';


const colors = [
    ["rgba(1, 172, 1)", "rgba(1, 172, 1)"],
    ["rgba(1, 172, 1, 0.6)", "rgba(1, 172, 1)"],
    ["white", "black"],
    ["rgba(255, 195, 0, 0.3)", "rgba(255, 195, 0)"],
]

class Chart4 extends React.Component{
    render(){
        //console.log(this.props.data);
        return(
            <div className="per-chart-card">
                <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 400px" }}>
                    <div>yield (grams / sq.ft.)</div><div></div>
                    <div style={{ height: "50px", paddingBottom: "10px", textAlign:"center" }} >
                        <div className="legend"><div className="legent-circle" style={{ backgroundColor: colors[0][0], border: "2px solid " + colors[0][1] }}></div>harvest</div>
                        <div className="legend"><div className="legent-circle" style={{ backgroundColor: colors[1][0], border: "2px solid " + colors[1][0] }}></div>average</div>
                        <div className="legend"><div className="legent-circle" style={{ backgroundColor: colors[2][0], border: "2px solid " + colors[2][1] }}></div>top quintile</div>
                    </div>
                </div>
                <BarChart width={1200} height={250} data={this.props.data}
                    margin={{ top: 0, right: 10, left: 30, bottom: 20 }}
                    barSize={38}>
                    <CartesianGrid strokeDasharray="2 2"/>
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" domain={[0, 160]} />
                    <Tooltip contentStyle={{ fontWeight: "500" }} itemStyle={{ color: "black", fontWeight: "100" }} />

                    <Bar yAxisId="left" dataKey="harvest" fill={colors[0][0]} stroke={colors[0][1]} strokeWidth="2" label={{ position: 'top' }} />
                    <Bar yAxisId="left" dataKey="average" fill={colors[1][0]} stroke={colors[1][1]} strokeWidth="2" label={{ position: 'top' }} />
                    <Bar yAxisId="left" dataKey="top quintile" fill={colors[2][0]} stroke={colors[2][1]} strokeWidth="2" label={{ position: 'top' }} />
                </BarChart>
            </div>
        )
    }
}

export default Chart4;