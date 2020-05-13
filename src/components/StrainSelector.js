import React from 'react'

const strainsData = require('../APIs/metaStrains.json')

class StrainSelector extends React.Component{

    constructor(props){
        super(props);
        this.strains = strainsData.performance;
        this.state = {
            selection:{0:"0", 1:"1", 2:"2"}
        }
        this.selectStrain = this.selectStrain.bind(this);
    }

    selectStrain(e, strainId){
        e.preventDefault();
        
        const updatedSelection = this.state.selection;
        if(updatedSelection[`${strainId}`]){
            delete updatedSelection[`${strainId}`];
        }else if(Object.keys(updatedSelection).length < 5){
            updatedSelection[`${strainId}`] = `${strainId}`;
        }
        this.props.updateSelection(updatedSelection);
        this.setState({selection: updatedSelection});
    }

    buildBtns(){
        const btns = [];
        this.strains.forEach((pair, index) =>{
            if(!this.state.selection[`${index}`]){
                btns.push(
                    <div key = {index} className="strain-btns" onClick={e => this.selectStrain(e, index)}>
                        {pair[0]}
                        <span style={{color:"rgb(1, 172, 1)", fontSize:"12px", paddingLeft:"10px"}}>{pair[2]}</span>
                        <span style={{color:"grey", fontSize:"12px"}}>lbs</span>
                    </div>
                )
            }else{
                btns.push(
                    <div key = {index} className="strain-btns selected" onClick={e => this.selectStrain(e, index)}>
                        {pair[0]}
                        <span style={{color:"rgb(0, 255, 0)", fontSize:"12px", paddingLeft:"10px"}}>{pair[2]}</span>
                        <span style={{color:"white", fontSize:"12px"}}>lbs</span>
                    </div>
                )
            }
            
        })
        return btns;
    }

    render(){
        //console.log(this.state.selection);
        return(
            <div>
                <span style={{color:"rgb(1, 172, 1)"}}>{Object.keys(this.state.selection).length}</span>/5 strains selected
                <div>
                {this.buildBtns()}
                </div>
            </div>
        )
    }
}

export default StrainSelector;