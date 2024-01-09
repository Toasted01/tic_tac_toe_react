import React from 'react';
import '../styles/main.css';
import Grid from '../components/Grid'



class App extends React.Component {
  render() {
    return (
      <div className = "Container">
        <Grid />
      </div>
    );
  }
}

export default App;