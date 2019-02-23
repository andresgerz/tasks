import React from 'react';

class AllForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  
  handleSubmit(e){
    e.preventDefault();
    this.props.onAddAll(this.state);
    this.setState({
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    });
    console.log("Sending the data...");
  }


  handleInput(e){
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
      });
    }

    
  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input 
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              placeholder="Title"
              onChange={this.handleInput}

            />
          </div>

          <div className="form-group">
            <input 
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              placeholder="Resposible"
              onChange={this.handleInput}
            />
          </div>  

          <div className="form-group">
            <input 
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              placeholder="DescriptionResposible"
              onChange={this.handleInput}
            />
          </div>

          <div className="form-group">
            <select 
              name="priority"
              className="form-control"
              value={this.state.priority}
              onChange={this.handleInput}
              >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="hich">High</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default AllForm;