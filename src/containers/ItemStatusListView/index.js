import React, {Component} from 'react';
import ItemDetailView from '../../components/ItemDetailView';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/items';
import ItemList from '../../components/ItemList';
import ItemStatusList from '../../components/ItemStatusList';

class TopItemsView extends Component {
  constructor(){
    super();


  }

  componentWillMount(){

  }

  render(){
    return(
      <div>
        <h1> PUBLISHED </h1>
        <ItemStatusList items={this.props.items} statusId={2}/>
        <h1> SOLD ITEMS  </h1>
        <ItemStatusList items={this.props.items} statusId={1}/>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    loadItems: () => {
      dispatch(loadItems())
    }
  }
}

const ConnectedItemStatusList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopItemsView)

export default ConnectedItemStatusList;