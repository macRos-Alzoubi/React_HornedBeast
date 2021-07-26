import React from 'react';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
// import './Component/HornedBeast.css';

class App extends React.Component{
  render(){
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
