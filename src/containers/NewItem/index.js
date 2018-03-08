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
      console.log('history')
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
              <br/>
              <input type="text"
              placeholder="Upload image..."
              name="image"
              value={this.state.newItem.image}
              onChange={this.handleInput}/>

              <br/>
              <input type="text"
              name="price"
              placeholder="Price (required)"
              price="price"
              value={this.state.newItem.price}
              onChange={this.handleInput}/>

              <br/>
              <select 
              name="condition"
              value={this.state.newItem.conditon}
              onChange={this.handleInput}>
                <option value="">Condition</option>
                <option value="5">New</option>
                <option value="4">Good</option>
                <option value="3">Fair</option>
                <option value="2">Worn</option>
                <option value="1">Used</option>
              </select>

              <br/>
              <select
              name="category"
              value={this.state.newItem.category}
              onChange={this.handleInput}>
                <option value="">Category</option>
                <option value="1">Vehicles</option>
                <option value="2">Appliances</option>
                <option value="3">Computers</option>
                <option value="4">Furniture</option>
              </select>

              <br/>
              <input type="text"
              name="model"
              placeholder="Model / Make"
              value={this.state.newItem.model}
              onChange={this.handleInput}/>

              <br/>
              <input type="text"
              name="dimensions"
              placeholder="Dimensions"
              value={this.state.newItem.dimensions}
              onChange={this.handleInput}/>

              <br/>
              <textarea name="notes" placeholder="Notes" value={this.state.newItem.notes} onChange={this.handleInput} 
              id="" cols="30" rows="10">Notes: </textarea>

              <br/>
              <input type="submit"/>

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