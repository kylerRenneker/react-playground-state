import React, { Component } from 'react';

class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8
    }
    
    state = {
            chamber: null,
            spinningTheChamber: false 
    }
    
    handlePullTrigger = () => {
        this.setState({
            spinningTheChamber: true
        });
        this.timeout = setTimeout(() => {
            let num = Math.floor((Math.random()*8) +1 );
            this.setState({
                chamber: num,
                spinningTheChamber: false
            })
        }, 2000);
    }

    componentWillMount() {
        clearTimeout(this.timeout);
    }

    render () {
        console.log('spinning the chamber', this.state.spinningTheChamber);
        console.log('chamber', this.state.chamber);
        console.log('props', this.props);
        const message = 
            this.state.spinningTheChamber 
            ?
            `spinning the chamber and pulling the trigger! ...` 
            : 
            this.state.chamber === this.props.bulletInChamber ? `BANG!!!!` : `you're safe`;

        return (
            <div>
                <p>{(this.state.chamber !== null) && message}</p>
                <button onClick={this.handlePullTrigger}>Pull the trigger</button>
            </div>
        )
    }
};

export default RouletteGun;