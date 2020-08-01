import React, { Component } from 'react';
import Calculator from "./components/buttons"



class App extends Component{
  
  render(){
  return (
    <div className="App" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',
                                  backgroundImage: "url(" + "https://avante.biz/wp-content/uploads/Galaxy-Wallpaper-Tumblr/Galaxy-Wallpaper-Tumblr-005.jpg" + ")",
                                  width: "50%",
                                  height: "400px",
                                  backgroundPosition: 'center',
                                  backgroundSize: 'cover'
                            
                                   }} >
      <Calculator/>
    </div>
  );
  }
}

export default App;
