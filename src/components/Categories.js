import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';

import { loadItems, getCategory } from '../actions/itemActions';

// import Item from '../components/Item';

class Categories extends Component {
  constructor(props) {
    super(props)
      this.state = {
        categories: []
      }
  }

  componentDidMount() {
    console.log('componentdidmount', this.props)
  }

  render() {
    // console.log('categories props', this.props)
    return (
      <div>Categories</div>
    //   <div className={}
    //     <div className="item-status">Published</div>
    //       <ItemList status={ 1 }/>  
    //     <div className="item-status">Sold</div>
    //       <ItemList status={ 2 }/>
    //     <div className="item-status">Pending</div>
    //       <ItemList status={ 3 }/>


    )
  }

}  

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadItems: () => {
      dispatch(loadItems())
    }
  }
}

const ConnectedCategories = connect (
  mapStateToProps,
  mapDispatchToProps
)(Categories)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories))
