import React from 'react';
import FunnelGraph from 'funnel-graph-js';
import PropTypes from 'prop-types';

export default class Funnel extends React.Component{

    static propTypes = {
        direction: PropTypes.enum,
        values:PropTypes.array,
        colors: PropTypes.array,
        labels: PropTypes.array,
        gradient: PropTypes.enum
    };

    constructor(props) {
        super(props)
      
        this.funnelobj = 'default'
      }
 
    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.direction != this.props.direction)
        {
            if(this.props.direction == "horizontal")
            {
                this.funnelobj.makeHorizontal()
            }
            else if(this.props.direction == "vertical")
            {
                this.funnelobj.makeVertical()
            }
        }  
        
        if(prevProps.gradient != this.props.gradient)
        {
            if(this.props.gradient == "horizontal")
            {
                this.funnelobj.gradientMakeHorizontal()
            }
            else if(this.props.gradient == "vertical")
            {
                this.funnelobj.gradientMakeVertical()
            }
        }   
    }
    

    componentDidMount(){

        const {direction, values, colors, labels, width, height, gradient} = this.props;


        var myfunnel = new FunnelGraph({
            container: '.funnel',
            gradientDirection: gradient,
            data:{
                values,
                labels,
                colors
            },
            displayPercent: true,
            direction: direction,
            width, 
            height
        });
        
        myfunnel.draw();
        this.funnelobj = myfunnel;
      }
    
    render(){

        return(
            <div className="funnel" ref={ref => (this._ref = ref)}></div>
        )
    }
}