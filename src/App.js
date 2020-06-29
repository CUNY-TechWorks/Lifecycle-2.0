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
      this.id = setInterval(() => {
       this.setState({
         ticker: this.state.ticker + 1,
       });
     }, 400);
  }

  shouldComponentUpdate(nextProps, nextState) {
     // Only trigger a re-render when ticker is a multiple of 3
     // This doesn't prevent rendering, but rather just optimizing
     // performance
     return nextState.ticker % 3 === 0;
  }

  pause = () => {
    clearInterval(this.id);

    document.getElementsByTagName("td")[0].innerText = "Ticker is paused"
  }

  resume = () => {
    if(document.getElementsByTagName("td")[0].innerText === "Ticker is paused" || this.state.ticker === 0) {
      this.id = setInterval(() => {
        this.setState({
          ticker: this.state.ticker + 1,
        });
       }, 400);

       document.getElementsByTagName("td")[0].innerText = "Ticker is resuming"
   }
  }

  clear = () => {
     this.setState({
       ticker: 0,
     });
     
     document.getElementsByTagName("td")[0].innerText = "Ticker has resetted"
  }

  render() {
    let {ticker} = this.state;
    
    return (
      <div>
         <p className="body"> The ticker is: {ticker}  <td> Ticker started </td> </p>
         <div className="button-body">
           <button type="button" className="button" onClick={this.clear}> Reset Ticker </button>
           <button type="button" className="button" onClick={this.pause}> Pause Ticker </button>
           <button type="button" className="button" onClick={this.resume}> Resume Ticker </button>
         </div>
      </div>
    ); 
  }
}

export default Ticker;