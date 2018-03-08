import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem, loadSingleItem } from '../../actions/edit_item';
// import { editItem } from '../../actions/edit_item';
// import { loadSingleItem } from '../../actions/itemActions';

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', price: '', model: '', dimensions: '',
    notes: '', category_id: '', condition_id: '', item_status_id: '',
    image: ''};

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount(props) {
  const itemId = this.props.match.params.id;
    this.props.loadSingleItem(itemId) 
  }

  componentWillUpdate(nextProps) {
    if (nextProps.item !== this.props.item) {
     return this.setState({...nextProps.item})
    }
  }

  handleOnChange(event) {
    this.setState({[event.target.name] : event.target.value})
  }

  handleOnSelect(event) {
    this.setState({[event.target.name] : parseInt(event.target.value)})
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const history = this.props.history;
    this.props.editItem(this.state, () => {
      history.push(`/item/${this.props.match.params.id}`)
    });
  }

  render() {
    return (
      <div className="edit-item-form">
        <form onSubmit={this.handleOnSubmit}>
          <h2>Edit Item</h2>
          <div className="edit-form-name">
          <h5>Name</h5>
            <input type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
            />
          </div>
            <br/>
          <div className="edit-form-price">
            <h5>Price</h5>
            <input type="text"
              name="price"
              value={this.state.price}
              onChange={this.handleOnChange}
            />
          </div>
            <br/>
          <div className="edit-form-model">
            <h5>Make/Model</h5>
            <input type="text"
              name="model"
              value={this.state.model}
              onChange={this.handleOnChange}
            />
          </div>
            <br/>
          <div className="edit-form-dimensions">
            <h5>Dimensions</h5>
            <input type="text"
              name="dimensions"
              value={this.state.dimensions}
              onChange={this.handleOnChange}
            />
          </div>
            <br/>
          <div className="edit-form-notes">
            <h5>Notes</h5>
            <textarea name="notes"
              value={this.state.notes}
              onChange={this.handleOnChange}
              id="" cols="30" row="10"
            />
          </div>
            <br/>
            <br/>
          <div className="edit-form-category">
            <h5>Category</h5>
            <select
              name="category_id"
              value={this.state.category_id}
              onChange={this.handleOnSelect}>

              <option value=''>Category</option>
              <option value="1">Vehicles</option>
              <option value="2">Appliances</option>
              <option value="3">Computers</option>
              <option value="4">Furniture</option>
            </select>
          </div>
            <br/>
          <div className="edit-from-condition">
            <h5>Condition</h5>
            <select
              name="condition_id"
              value={this.state.condition_id}
              onChange={this.handleOnSelect}>

              <option value=''>Condition</option>
              <option value="1">Used</option>
              <option value="2">Worn</option>
              <option value="3">Fair</option>
              <option value="4">Good</option>
              <option value="5">New</option>
            </select>
          </div>
            <br/>
          <div className="edit-form-itemstatus">
            <h5>Status</h5>
            <select
              name="item_status_id"
              value={this.state.item_status_id}
              onChange={this.handleOnSelect}>

              <option value=''>Item Status</option>
              <option value="1">Published</option>
              <option value="2">Pending</option>
              <option value="3">Sold</option>
            </select>
          </div>
            <br/>
          <div className="edit-form-image">
            <h5>Image</h5>
            <input type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleOnChange}
            />
          </div>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}// end NewItem


const mapStateToProps = state => {
  return {
    items: state.editItem.items,
    item: state.editItem.item,
    editId: state.editItem.editId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editItem: function (item, redirectCallback) {
      dispatch(editItem(item, redirectCallback));
    },
    loadSingleItem: function (id) {
      dispatch(loadSingleItem(id));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
