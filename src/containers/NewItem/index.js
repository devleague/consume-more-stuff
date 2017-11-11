import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/items.actions';
import Select from '../../components/select.components';

class NewItem extends Component {
  constructor() {
    super();

    this.state = {
      userPhoto: '',
      name: '',
      description: '',
      price: 0,
      manufacturer: '',
      model: '',
      dimensions: '',
      category_id: 1,
      condition_id: 1,
      notes: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleSubmit(userId, evt){
    evt.preventDefault();

    let formData = new FormData();

    formData.append('userPhoto', this.state.userPhoto);
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    formData.append('manufacturer', this.state.manufacturer);
    formData.append('model', this.state.model);
    formData.append('price', this.state.price);
    formData.append('category_id', this.state.category_id);
    formData.append('condition_id', this.state.condition_id);
    formData.append('dimensions', this.state.dimensions);
    formData.append('notes', this.state.notes);
    formData.append('user_id', userId);

    this.props.addItem(formData);

    this.setState({
     // this will pass up to the newItem that will be submitted on SUBMIT
      userPhoto: '',
      name: '',
      description: '',
      price: 0,
      manufacturer: '',
      model: '',
      dimensions: '',
      category_id: 1,
      condition_id: 1,
      notes: ''
    });
  }

  handleChangeImage(evt){
    evt.preventDefault();

    let reader = new FileReader();
    let file = evt.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imageUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  handleChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name] : value
    });
  }

  render() {
    if(localStorage.username) {
      return (
        <div id="new-item-form">
          <form onSubmit={
            (e) => this.handleSubmit(localStorage.userId, e)
          }>

            <Select
              defaultValue={this.state.category_id}
              handler={this.handleChange}
              label="Category: "
              list={this.props.categories}
              name="category_id"
              type="category"
            />

            <Select
              defaultValue={this.state.condition_id}
              handler={this.handleChange}
              label="Condition: "
              list={this.props.conditions}
              name="condition_id"
              type="condition"
            />

            <div className="name-form">
              <input
                name="name"
                onChange={this.handleChange}
                placeholder="item name"
                type="text"
                value={this.state.name}
              />
            </div>

            <div className="manufacturer-form">
              <input
                name="manufacturer"
                onChange={this.handleChange}
                placeholder="manufacturer"
                type="text"
                value={this.state.manufacturer}
              />
            </div>

            <div className="model-form">
              <input
                name="model"
                onChange={this.handleChange}
                placeholder="model"
                type="text"
                value={this.state.model}
              />
            </div>

            <div className="price-form">
              <input
                max="100000"
                min="0"
                name="price"
                onChange={this.handleChange}
                placeholder="price"
                type="decimal"
                value={this.state.price}
              />
            </div>

            <div className="dimensions-form">
              <input
                name="dimensions"
                onChange={this.handleChange}
                placeholder="dimensions"
                type="text"
                value={this.state.dimensions}
              />
            </div>
            
            <div className="description-form">
              <textarea
                name="description"
                onChange={this.handleChange} cols="30" rows="10"
                placeholder="description"
                type="text"
                value={this.state.description}
              />
            </div>

            <div className="notes-form">
              <textarea
                name="notes"
                onChange={this.handleChange} cols="30" rows="10"
                placeholder="notes"
                type="text"
                value={this.state.notes}
              />
            </div>

            <div>
              <input
                accept="image/x-png,image/gif,image/jpeg"
                name="userPhoto"
                onChange={this.handleChangeImage}
                type="file"
              />
            </div>

            <input type="submit" value="submit item" />
          </form>
          <br/>
        </div>
      );

    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    items : state.itemList,
    users : state.userList,
    categories : state.categoryList,     // setting state
    conditions : state.conditionList,
    statuses : state.statusList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItem)
