import React, {Component} from 'react';

class Bomb extends Component {
    state = {
        count: 0
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
            }, 1000
        );
    };

    componentWillUnmount() {
        clearInterval(this.interval)
    };

    render() {
        console.log(this.state.count)
        if (this.state.count >= 8) {
            this.componentWillUnmount();
        };
        return (
        <div>
                { this.state.count % 2 === 0 && this.state.count < 8 && <p>tick</p> }
                { this.state.count % 2 !== 0 && this.state.count < 8 && <p>tock</p>}
                { this.state.count >= 8 && <p>BOOM!!!</p> }
        </div>
        );
    };
}

export default Bomb;