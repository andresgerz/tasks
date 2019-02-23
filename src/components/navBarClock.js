import React from 'react';


class navBarClock extends React.Component{
  render(){
    return <div>{document.write(Date())}</div>
  }
}

export default navBarClock;