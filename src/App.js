import React, {Component} from 'react';

class Ticker extends Component {
  constructor() {
    super();
    
    this.state = {
       ticker: 0,
    }
  }

  componentDidMount() {
     // start our ticker here
     setInterval(() => {
       this.setState({
         ticker: this.state.ticker + 1,
       });
     }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
     // Only trigger a re-render when ticker is a multiple of 3
     // This doesn't prevent rendering, but rather just optimizing
     // performance
     return nextState.ticker % 3 === 0;
  }

  clear = () => {
     this.setState({
       ticker: 0,
     });
  }

  render() {
    let {ticker} = this.state;
    
    return (
      <div>
         <p> The ticker is: {ticker} </p>
         <button type="button" onClick={this.clear}> Reset Ticker </button>
      </div>
    ); 
  }
}

export default Ticker;