import "semantic-ui-css/semantic.min.css";

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";

class App extends React.Component {  
  state = { lat: null, lon: null, errMsg: '' };

  render() {
    // return (
    //   <div>
    //     {!this.state.errMsg ? 
    //       (<><SeasonDisplay state={this.state}/></>) :
    //       (<><p>Error: Unable to locate location.</p></>)
    //     }
    //   </div>
    // );
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
  renderContent() {
    if (this.state.errMsg && !this.state.lat) {
      return <div>Error: {this.state.errMsg}</div>;
    }

    if (!this.state.errMsg && this.state.lat) {
      return <SeasonDisplay state={this.state} />;
    }

    return <Spinner />;
  }
  componentDidMount() {
    console.log('My component was rendered to the screen.');
    // Ref: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude,  lon: position.coords.longitude, errMsg: '' }),
      (err) => this.setState({ errMsg: err.message })
    );
  }

};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
