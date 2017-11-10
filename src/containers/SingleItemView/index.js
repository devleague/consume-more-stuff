import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleItem, makeItemEditable } from '../../actions/items.actions';
import { loadCategories } from '../../actions/categories.actions';
import { loadConditions } from '../../actions/conditions.actions';
import { loadStatuses } from '../../actions/statuses.actions';
import Item from '../../components/item.components';
import EditItem from '../../components/edit-item.components';

class SingleItemView extends Component {
  constructor() {
    super();
    this.state = {
      name : '',
      description: '',
      price: '',
      category_id: '',
      condition_id: '',
      is_sold: '',
      user_id: ''
    };
  }

  toggleEdit(id) {
    const item = this.props.singleItem;

    this.setState({
      name : item.name,
      description: item.description,
      price: item.price,
      category_id: item.category_id,
      condition_id: item.condition_id,
      is_sold: item.is_sold,
      user_id: item.user_id
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.setState = {
      name : '',
      description: '',
      price: '',
      category_id: '',
      condition_id: '',
      is_sold: '',
      user_id: ''
    };
  }

  handleChange(evt) {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name] : value
    });
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadSingleItem(parseInt(id, 10));
    this.props.loadCategories();
    this.props.loadConditions();
    this.props.loadStatuses();
  }

  render() {
    return(
      <div id="single-item-view">
        {
          this.props.singleItem.isEditing &&
          <Item
            singleItem={ this.props.singleItem }  />
        }
        {
          !this.props.singleItem.isEditing &&
          <EditItem
            singleItem={ this.props.singleItem }
            categories={ this.props.categories }
            conditions={ this.props.conditions }
            statuses={ this.props.statuses }
            handleChange={ this.handleChange }
            handleSubmit={ this.handleSubmit } />
        }
      </div>
    )
  }
}

// sets store state on local props
const mapStateToProps = state => {
  return {
    singleItem : state.singleItem,
    categories : state.categoryList,
    conditions : state.conditionList,
    statuses : state.statusList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleItem: (id) => {
      dispatch(loadSingleItem(id))
    },
    makeItemEditable: (id) => {
      dispatch(makeItemEditable(id))
    },
    loadCategories: () => {
      dispatch(loadCategories());
    },
    loadConditions: () => {
      dispatch(loadConditions());
    },
    loadStatuses: () => {
      dispatch(loadStatuses());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleItemView);
