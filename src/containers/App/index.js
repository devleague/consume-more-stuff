import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/items.actions';
import { loadConditions } from '../../actions/conditions.actions';
import { loadCategories } from '../../actions/categories.actions';
import ItemList from '../../components/itemlist.components';

class App extends Component {
  componentDidMount(){
    this.props.loadItems();
    this.props.loadCategories();
    this.props.loadConditions();
  }

  render() {
    return (
      <div id="app">

        {
          this.props.categories
          .map((category, idx) => {
            return(
              <ItemList
                items={this.props.items}
                categoryId={category.id}
                categoryName={category.category}
                key={idx}/>
            )
          })
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items : state.itemList, // makes it this.props.items
    categories : state.categoryList,
    conditions : state.conditionList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: () => {
      dispatch(loadItems());
    },
    loadCategories: () => {
      dispatch(loadCategories());
    },
    loadConditions: () => {
      dispatch(loadConditions());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;
