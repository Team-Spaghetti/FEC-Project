import Button from '@mui/material/Button';
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}, my ARCH NEMESIS!
        </h1>
        <Button variant="contained">Hello World</Button>
      </>
    );
  }
}

export default hot(App);