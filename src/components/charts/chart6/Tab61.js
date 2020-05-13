import React from 'react';

import {
    BarChart, Bar, XAxis, YAxis
} from 'recharts';

const colors = [
    ["rgba(255, 0, 0, 0.3)", "rgba(255, 0, 0)"],
    ["rgba(255, 195, 0, 0.3)", "rgba(255, 195, 0)"],
    ["rgba(1, 172, 1, 0.3)", "rgba(1, 172, 1)"],
]


class Tab61 extends React.Component {

    buildCharts() {
        const chartsArray = [];
        this.props.data.forEach((item, index) => {
            //console.log(item.tierInfo);
            const inputData = [
                { name: "tier1", number: -item.tierInfo[0][0] },
                { name: "tier2", number: -item.tierInfo[1][0] },
                { name: "tier3", number: -item.tierInfo[2][0] },
            ];
            const outputData = [
                { name: "tier1", number: 100 - item.tierInfo[0][0] },
                { name: "tier2", number: 100 - item.tierInfo[1][0] },
                { name: "tier3", number: 100 - item.tierInfo[2][0] },
            ];

            const width = ((600 - 60) / (this.props.data.length));
            chartsArray.push(
                <div key={index} >
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr"
                    }}>
                        <div>
                            <div style={{ textAlign: "right", paddingRight: "10px" }}>input</div>
                            <BarChart width={width} height={200} data={inputData} layout="vertical"
                                margin={{ top: 0, right: 5, left: 0, bottom: 0 }} >
                                <XAxis type="number" hide={true} domain={[-100, 0]} />
                                <YAxis type="category" dataKey="name" hide={true} />
                                {/* <Tooltip /> */}
                                <Bar dataKey="number" fill={colors[0][0]} stroke={colors[0][1]} orientation="top" strokeWidth="2" label={{ position: 'insideStart', fontSize: "12px" }} />
                            </BarChart>
                        </div>
                        <div>
                            <div>output</div>
                            <BarChart width={width} height={200} data={outputData} layout="vertical"
                                margin={{ top: 0, right: 0, left: 5, bottom: 0 }} >
                                <XAxis type="number" hide={true} domain={[0, 100]} />
                                <YAxis type="category" dataKey="name" hide={true} />
                                {/* <Tooltip /> */}
                                <Bar dataKey="number" fill={colors[2][0]} stroke={colors[2][1]} orientation="top" strokeWidth="2" label={{ position: 'insideStart', fontSize: "12px" }} />
                            </BarChart>
                        </div>
                    </div>
                    <div style={{ textAlign: "center", paddingTop:"10px" }}>{item.name}</div>
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

export default Tab61;