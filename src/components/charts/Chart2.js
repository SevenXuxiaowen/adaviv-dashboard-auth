import React from 'react'

import {
    PieChart, Pie, Cell,
} from 'recharts';

const data = [
    { name: 'Group A', value: 100 },
    { name: 'Group B', value: 20 }
];
const COLORS = ['rgb(1, 172, 1)', 'rgba(0, 0, 0, 0.2)'];

const chart1Data = {
    current: 100,
    target: 120
}

//1270px

class Chart2 extends React.Component {
    constructor(props) {
        super(props);
        this.current = chart1Data.current;
        this.target = chart1Data.target;
    }
    render() {
        return (
            <div className="char-1-2">
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "250px 1fr 1.5fr"
                }}>
                    <div className="char1-left">
                        <div className="lable">Yield Performance</div>
                        <div style={{position:"relative", top:"10px"}}>
                            <div style={{ color: "rgb(1, 172, 1)" }}>
                                <span className="char1-number">{this.current}</span>
                                <span style={{fontSize:'12px'}}>grams/sq.ft.</span></div>
                            <div className="char1-line"></div>
                            <div className="char1-target">
                                <span className="char1-number">{this.target}</span>
                                <span style={{fontSize:'12px'}}>grams/sq.ft.</span>
                            </div>
                        </div>
                    </div>
                    <div><span style={{ float: "right", paddingTop: "80px" }}>yield/goal (%)</span> </div>
                    <div className="char1-right">
                        <PieChart width={180} height={180} onMouseEnter={this.onPieEnter}>
                            <Pie data={data}
                                cx="50%"
                                cy="50%"
                                startAngle={90}
                                endAngle={-270}
                                innerRadius={62}
                                outerRadius={75}
                                paddingAngle={0}
                                dataKey="value">
                                {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                            </Pie>
                        </PieChart>
                        <div className="chart1-pie-l"><div style={{ textAlign: "center" }}>{Math.floor(100 * this.current / (this.target))}%</div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chart2;