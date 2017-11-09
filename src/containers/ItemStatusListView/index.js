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
/*ID NEEDS TO BE SET UP*/
  render(){
    const id = localStorage.getItem('userId')
    console.log('WHo is in?', id)
    return(
      <div>
        <h1> PUBLISHED </h1>
        <ItemStatusList items={this.props.items} statusId={2} currentUserId = {id}/>
        <h1> SOLD ITEMS  </h1>
        <ItemStatusList items={this.props.items} statusId={1} currentUserId = {id}/>
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