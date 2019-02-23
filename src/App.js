import React from 'react';
import logo from './logo.svg';
import './App.css';


import {all} from './all.json';
import AllForm from './components/AllForm';
import navBarClock from './components/navBarClock';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      all
    }

    this.handleAddAll = this.handleAddAll.bind(this);
  }

  removeAll(index){
    console.log("I removed the index: " + index);
    this.setState({
      all: this.state.all.filter((e, i) =>{
        return i!==index
      })
    });
  }

  handleAddAll(all){
    this.setState({
      all: [...this.state.all, all]
    })
  }



  render() {
      const all = this.state.all.map((all,i) =>{
        return(
          <div className="col-md-4" key={i}>
            <div className="card md-4">
              <div className="card-header">
                <h3>{all.title}</h3>
                <span className="badge badge-pill badge-danger ml-2">
                  {all.priority}
                </span> 
              <div className="card-body"></div>
                <p>{all.description}</p>
                <p><mark>{all.responsible}</mark></p>
              </div>  
              <div className="card-footer">
                <button className="btn btn-secondary"
                  onClick = {this.removeAll.bind(this, i)}>
                  Delete
                </button>
              </div>
            </div>
          </div>

          
        )
      })

      return (
        <div className="App">
          
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              Tasks
            
              <span className="badge badge-pill badge-light ml-2">
                {this.state.all.length}
              </span>
            </a>
            <navBarClock></navBarClock>
            <div className="bg-info">Here I have to put the clock</div>
          </nav>

          <div className="container">
            <div className="row mt-4">

              <div className="col-md-4 text-center">
                  <img src={logo} className="App-logo" alt="logo" />

                <AllForm onAddAll={this.handleAddAll}></AllForm>

              </div>
              <div className="col-md-8">
                <div className="row">
                  {all}
                </div>
              </div>
              
            </div>
          </div>


        
        
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        
        </div>
    
          
      );
    }
}

export default App;
