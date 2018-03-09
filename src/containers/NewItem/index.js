import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createItem} from '../../actions/itemActions';

class NewItem extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newItem: {
        name: '',
        image: '',
        price: '',
        condition: '',
        category: '',
        model: '',
        dimensions: '',
        notes:''
      }
    }
    
    this.handleInput = this.handleInput.bind(this)
    this.submitHandler = this.submitHandler.bind(this)

  }


  handleInput (event) {
    const { name, value } = event.target
    this.setState({newItem: Object.assign({}, this.state.newItem, { [name]: value})})
  }

  submitHandler (event) {
    event.preventDefault();
    const history = this.props.history
    this.props.createItem(this.state.newItem, () => {
      history.push(`/item/${this.props.newItem.id}`)
    });
    this.setState({newItem: Object.assign({}, this.state.newItem, {name: '', image: '', price: '',
  condition: '', category: '', model: '', dimensions: '', notes: ''})})
  }

  render() {
    return (
      <div className="main-content">
      
        <form className="new-item-form" onSubmit={this.submitHandler}>
          <div className="form-title-row">
            <h1>Add a New Item</h1>
          </div>
      

          <div className="form-row">
            <span>Item name</span>
            <input type="text"
            placeholder="(required)"
            name="name"
            value={this.state.newItem.name}
            onChange={this.handleInput}/>
          </div>

          <div className="form-row">
            <span>Price</span>
            <input type="text"
            name="price"
            placeholder="(required)"
            price="price"
            value={this.state.newItem.price}
            onChange={this.handleInput}/>
          </div>

          <div className="form-row">
            <span>Condition</span>
            <select 
            name="condition"
            value={this.state.newItem.conditon}
            onChange={this.handleInput}>
              <option value="">Select...</option>
              <option value="5">New</option>
              <option value="4">Good</option>
              <option value="3">Fair</option>
              <option value="2">Worn</option>
              <option value="1">Used</option>
            </select>
          </div>

          <div className="form-row">
          <span>Category</span>
            <select
              name="category"
              value={this.state.newItem.category}
              onChange={this.handleInput}>
                <option value="">Select...</option>
                <option value="1">Vehicles</option>
                <option value="2">Appliances</option>
                <option value="3">Computers</option>
                <option value="4">Furniture</option>
            </select>
          </div>

          <div className="form-row">
          <span>Model / Make</span>
            <input type="text"
            name="model"
            placeholder="Model / Make"
            value={this.state.newItem.model}
            onChange={this.handleInput}/>
          </div>

          <div className="form-row">
            <span>Dimensions</span>  
            <input type="text"
            name="dimensions"
            placeholder="L x W x H"
            value={this.state.newItem.dimensions}
            onChange={this.handleInput}/>
          </div>

          <div className="form-row">
            <span>Upload image</span>
            <input type="text"
            placeholder="Upload image..."
            name="image"
            value={this.state.newItem.image}
            onChange={this.handleInput}/>
          </div>

          <div className="form-text-area">
            <textarea name="notes" 
            placeholder="Notes" 
            value={this.state.newItem.notes} 
            onChange={this.handleInput} 
            id="" cols="60" rows="10">
              Notes
            </textarea>
          </div>

          <div className="form-new">
            <button type="submit">Create New Item</button>
          </div>
        </form>
      </div>
    )
  }
}// end NewItem

const mapStateToProps = state => {
  return {
    newItem: state.items.newItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createItem: (data,redirectCallback) => {
      dispatch(createItem(data, redirectCallback))
    }
  }
}




export default connect(mapStateToProps,mapDispatchToProps)(NewItem)