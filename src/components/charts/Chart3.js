import React from 'react'

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const colors = [
    ["rgba(1, 172, 1, 0.6)", "rgba(1, 172, 1)"],
    ["rgba(0, 0, 0, 0.1)", "rgba(0,0,0,0.8)"],
    ["rgba(255, 0, 0, 0.3)", "rgba(255, 0, 0)"],
    ["rgba(255, 195, 0, 0.3)", "rgba(255, 195, 0)"],
]

class Chart3 extends React.Component {
    render() {
        return (
            <div className="char-1-2" style={{
                gridColumn: ' 1 / span 2',
                height: '500px',
                paddingTop:"20px"
            }}>

                <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 200px" }}>
                    <div>Harvest yield ( lbs )</div>
                    <div style={{ height: "50px", paddingBottom: "10px", textAlign:"center" }} >
                        <div className="legend"><div className="legent-circle" style={{ backgroundColor: colors[0][0], border: "2px solid " + colors[0][1] }}></div>yield goal</div>
                        <div className="legend"><div className="legent-circle" style={{ backgroundColor: colors[1][0], border: "2px solid " + colors[1][0] }}></div>harvest yield</div>
                        <div className="legend"><div className="legent-circle" style={{ backgroundColor: colors[2][0], border: "2px solid " + colors[2][1] }}></div>infected plants</div>
                        <div className="legend"><div className="legent-circle" style={{ backgroundColor: colors[3][0], border: "2px solid " + colors[3][1] }}></div>killed plants</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                        <div>infected plants (%)</div>
                        <div>killed plants (%)</div>
                    </div>
                </div>

                <BarChart width={1200} height={400} data={this.props.data}
                    margin={{ top: 10, right: 10, left: 10, bottom: 20 }}

                    barSize={25}>
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" domain={[0, 120]} />
                    <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
                    <Tooltip contentStyle={{ fontWeight: "500" }} itemStyle={{ color: "black", fontWeight: "100" }} />
                    {/* <Legend/> */}
                    <Bar yAxisId="left" dataKey="yield" fill={colors[0][0]} stroke={colors[0][1]} strokeWidth="2" legendType="circle" label={{ position: 'top' }} />

                    <Bar yAxisId="left" dataKey="goal" fill={colors[1][0]} legendType="circle" label={{ position: 'top' }} />
                    <Bar yAxisId="right" dataKey="killed" stackId="a" fill={colors[2][0]} stroke={colors[2][1]} strokeWidth="2" legendType="circle" label={{ position: 'top' }}></Bar>
                    <Bar yAxisId="right" dataKey="infected" stackId="a" fill={colors[3][0]} stroke={colors[3][1]} strokeWidth="2" legendType="circle" label={{ position: 'top' }}></Bar>
                </BarChart>
            </div>
        )
    }
}

export default Chart3;