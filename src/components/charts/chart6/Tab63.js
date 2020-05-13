import React from 'react';

import {
    BarChart, Bar, XAxis, YAxis
} from 'recharts';

const colors = [
    ["rgba(255, 0, 0, 0.3)", "rgba(255, 0, 0)"],
    ["rgba(0, 119, 255, 0.3)", "rgba(0, 119, 255)"],
    ["rgba(1, 172, 1, 0.3)", "rgba(1, 172, 1)"],
]


class Tab63 extends React.Component {

    buildCharts() {
        const chartsArray = [];
        this.props.data.forEach((item, index) => {
            //console.log(item.tierInfo);
            const outputData = [
                { name: "tier1", number: item.yieldPeformance[0] },
                { name: "tier2", number: item.yieldPeformance[1] },
                { name: "tier3", number: item.yieldPeformance[2] },
            ];

            const width = ((1000) / (this.props.data.length));
            chartsArray.push(
                <div key={index} >
                        <BarChart width={width} height={224} data={outputData} layout="vertical"
                            margin={{ top: 25, right: 0, left: 50, bottom: 0 }} 
                            >
                            <XAxis type="number" hide={true} domain={[0, 50]} />
                            <YAxis type="category" dataKey="name" hide={true} />
                            {/* <Tooltip /> */}
                            <Bar dataKey="number" fill={colors[1][0]} stroke={colors[1][1]} orientation="top" strokeWidth="2" label={{ position: 'insideStart', fontSize: "12px" }} />
                        </BarChart>
                    <div style={{ textAlign: "center", paddingTop: "10px" }}>{item.name}</div>
                </div>
            )
        })
        return chartsArray;
    }

    render() {
        //console.log(this.props.data);
        return (
            <div>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${this.props.data.length}, 1fr)`
                }}>
                    {this.buildCharts()}
                </div>
            </div>
        )
    }
}

export default Tab63;