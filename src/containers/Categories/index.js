import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../../actions/itemActions';
import ItemList from '../ItemList';

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {category: this.props.match.params.id}
  }

  componentDidMount() {
    const catId = this.props.match.params.id;
    this.props.getCategory(catId)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      const catId = this.props.match.params.id;
      this.props.getCategory(nextProps.match.params.id)
    }
  }

  render() {
    if(this.props.category.item){
      return (
        <div>
          <h2>Category: {this.props.category.category}</h2>
          <ItemList items={this.props.category.item}/>
        </div>
      )
    }
    return (
      <div></div>
    )
  }
}  

const mapStateToProps = state => {
  return {
    category: state.items.category
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategory: (id) => {
      dispatch(getCategory(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories)