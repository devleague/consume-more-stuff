import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/itemActions';
import ItemList from '../ItemList/index';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.loadItems();
  }

  render() {
    
    return (
      <div className="home-view">
        <h2>HOME</h2>
            <div className="category-name">Vehicles</div>
              <ItemList items={ this.props.items } filter={"category"} id={ 1 }/>
            <div className="category-name">Appliances</div>
              <ItemList items={ this.props.items } filter={"category"} id={ 2 }/>
            <div className="category-name">Computers</div>
              <ItemList items={ this.props.items } filter={"category"} id={ 3 }/>
            <div className="category-name">Furniture</div>
              <ItemList items={ this.props.items } filter={"category"} id={ 4 }/>
      </div>
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
      dispatch(loadItems());
    }
  };
}

export default (connect(mapStateToProps, mapDispatchToProps)(Home));