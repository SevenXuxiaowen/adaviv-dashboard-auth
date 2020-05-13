import React from 'react'

import Chart1 from './charts/Chart1'
import Chart2 from './charts/Chart2'
import Chart3 from './charts/Chart3'
import Chart4 from './charts/Chart4'
import Chart5 from './charts/Chart5'
import Chart6 from './charts/Chart6'

import StrainSelector from './StrainSelector'
const strainsData = require('../APIs/metaStrains.json');

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selection:{0:"0", 1:"1", 2:"2"}
        }

        this.updateSelection = this.updateSelection.bind(this);
    }

    updateSelection(updateSelection){
        this.setState({
            selection: updateSelection
        })
    }

    buildTrendData(){
        const data = strainsData.trend.map((item) => {
            const obj = {
                name: `${item[0]}(${item[1]})`,
                yield: item[2],
                goal: item[3],
                infected: item[4],
                killed:item[5]
            }
            return obj;
        })
        return data;
    }

    buildData(){
        const data = Object.entries(this.state.selection).map((entry) => {
            const item = strainsData.performance[Number(entry[0])];
            const obj = {
                name: item[0],
                harvest: item[2],
                average: item[3],
                "top quintile": item[4],
                infected: item[5] - item[6],
                killed: item[6],
                tierInfo: item[7],
                harvestWeight: item[8],
                yieldPeformance: item[9]
            }
            return obj;
        })
        return data;
    }


    render() {
        //console.log(this.state.selection);
        const trendData = this.buildTrendData();
        const data = this.buildData();
        return (
            <div className="dashboard">
            {this.props.tabId === 0 ?
                <div>
                    <div style={{
                        padding:"1em",
                        display:"grid",
                        gridTemplateColumns:"650px 650px"
                    }}>
                    <Chart1 />
                    <Chart2 />
                    <Chart3 data = {trendData}/>
                    </div>
                </div>
                :
                <div style={{
                    padding:"2em",
                    width:"1300px"
                }}>
                    <StrainSelector testId = {this.props.tabId} updateSelection = {this.updateSelection} />
                    <Chart4 data = {data}/>
                    <Chart5 data = {data}/>
                    <Chart6 data = {data}/>
                </div>}
            </div>
        )
    }
}

export default Dashboard;