import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItems, addItem } from '../../actions/items.actions';

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {  // sets intial empty state object
      name: '',
      description: '',
      manufacturer: '',
      modelname: '',
      price: '',
      category_id: '',
      condition_id: '',
      is_sold: 2, // initial state defaults to NOT SOLD
      created_by: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleManufacturerInput = this.handleManufacturerInput.bind(this);
    this.handleModelNameInput = this.handleModelNameInput.bind(this);
    this.handlePriceInput = this.handlePriceInput.bind(this);
    this.handleCategoryInput = this.handleCategoryInput.bind(this);
    this.handleConditionInput = this.handleConditionInput.bind(this);
    this.handleIsSoldInput = this.handleIsSoldInput.bind(this);
    this.handleCreatorInput = this.handleCreatorInput.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let newItem = {
      name: this.state.name,    // sets state when client inserts/changes the name
      description: this.state.description,
      manufacturer: this.state.manufacturer,
      modelname: this.state.modelname,
      price: this.state.price,
      category_id: this.state.category_id,
      condition_id: this.state.condition_id,
      is_sold: this.state.is_sold,
      created_by: this.state.created_by
    }
      console.log(newItem, "new item");

    this.props.addItem(newItem);

    this.setState({ // this will pass up to the newItem that will be submitted on SUBMIT
      name: '',
      description: '',
      manufacturer: '',
      modelname: '',
      price: '',
      category_id: '',  // these will be integers that DB will associate with category table
      condition_id: '',
      is_sold: 2, // defaults to NOT SOLD
      created_by: ''
    })
  }







}

