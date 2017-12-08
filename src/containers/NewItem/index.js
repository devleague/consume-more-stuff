import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/items.actions';
import { loadSingleUser } from '../../actions/users.actions';
import { loadConditions } from '../../actions/conditions.actions';
import { loadCategories } from '../../actions/categories.actions';
import Select from '../../components/select.components';

class NewItem extends Component {
  constructor(props) {
    super();
    
    this.state = {
      file: '',
      name: '',
      description: '',
      price: 0,
      manufacturer: '',
      model: '',
      dimensions: '',
      category_id: 1,
      condition_id: 1,
      notes: '',
      showNewItemForm: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    let formData = new FormData();

    formData.append('file', this.state.file);
    formData.append('name', this.state.name);
    formData.append('description', this.state.description);
    formData.append('manufacturer', this.state.manufacturer);
    formData.append('model', this.state.model);
    formData.append('price', this.state.price);
    formData.append('category_id', this.state.category_id);
    formData.append('condition_id', this.state.condition_id);
    formData.append('dimensions', this.state.dimensions);
    formData.append('notes', this.state.notes);
    formData.append('user_id', localStorage.userId);
    
    this.props.addItem(formData);

    if(this.props.userId) {
      this.props.loadSingleUser(this.props.userId);
    }

    this.setState({
     // this will pass up to the newItem that will be submitted on SUBMIT
      file: '',
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

  newItemDisplay(evt) {
    evt.preventDefault();
    this.setState({showNewItemForm: !this.state.showNewItemForm});
  }

  handleChangeImage(evt){
    evt.preventDefault();
    let reader = new FileReader();
    let file = evt.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        // imageUrl: reader.result
      });
    };

    reader.readAsDataURL(file);

  }

  handleChange(evt) {
    evt.preventDefault();
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name] : value
    });
  }

  componentDidMount() {
    this.props.loadCategories();
    this.props.loadConditions();
  }

  render() {
    if(localStorage.username) {
      return (
      <div id="product-listing-container">
        <h2><a onClick={this.newItemDisplay.bind(this)} href="">
        Sell A New Item
        </a></h2>
        { this.state.showNewItemForm &&
        <div id="listing-details">
        <div className="product-info">
          <h3>Product Info</h3>
          <p>Tell us about the details of your item</p>
        </div>
          <div id="new-item-form-container">
            <form className="new-item-form"
              onSubmit={this.handleSubmit}>
              <div id="product_row_1">
              <Select
                defaultValue={this.state.category_id}
                handler={this.handleChange}
                label="Category: "
                list={this.props.categories}
                name="category_id"
                type="category"
              /></div>

              <div id="product_row_2">
              <Select
                defaultValue={this.state.condition_id}
                handler={this.handleChange}
                label="Condition: "
                list={this.props.conditions}
                name="condition_id"
                type="condition"
              /></div>

              <div id="product_row_3">
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
              </div>

              <div id="product_row_5">
              <div className="model-form">
                <input
                  name="model"
                  onChange={this.handleChange}
                  placeholder="model"
                  type="text"
                  value={this.state.model}
                />
              </div>
              </div>

              <div id="product_row_6">
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
              </div>

              <div id="product_row_7">
              <div className="dimensions-form">
                <input
                  name="dimensions"
                  onChange={this.handleChange}
                  placeholder="dimensions"
                  type="text"
                  value={this.state.dimensions}
                />
              </div>
              </div>

              <div id="product_row_8">
              <div className="description-form">
                <textarea
                  name="description"
                  onChange={this.handleChange} cols="50" rows="8"
                  placeholder="description"
                  type="text"
                  value={this.state.description}
                />
              </div>
              </div>

              <div id="product_row_9">
              <div className="notes-form">
                <textarea
                  name="notes"
                  onChange={this.handleChange} cols="50" rows="5"
                  placeholder="notes"
                  type="text"
                  value={this.state.notes}
                />
              </div>
              </div>

              <div id="product_row_10"><input
                accept="image/x-png,image/gif,image/jpeg"
                name="file"
                onChange={this.handleChangeImage}
                type="file"
              /></div>
              <br/>

              <input
              className="new-item-submit-btn"
              type="submit"
              value="
              Submit" />
            <br/>
            </form>
          </div>
        </div>
      }
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
    categories : state.categoryList,
    conditions : state.conditionList,
    statuses : state.statusList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    },
    loadSingleUser: (id) => {
      dispatch(loadSingleUser(id));
    },
    loadCategories: () => {
      dispatch(loadCategories());
    },
    loadConditions: () => {
      dispatch(loadConditions());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewItem)
