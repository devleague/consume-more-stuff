import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadItems } from '../../actions/items';
import Top3ItemList from '../../components/Top3ItemList';


class TopItemsView extends Component {
  constructor(){
    super();


  }

  componentWillMount(){

  }

  render(){
    return(
      <div>
        <h1>TOP 3 for COMPUTERS </h1>
        <Top3ItemList items={this.props.items} categoryNumber={1}/>
        <h1>TOP 3 for FURNITURE </h1>
        <Top3ItemList items={this.props.items} categoryNumber={2}/>
        <h1>TOP 3 for APPLIANCES </h1>
        <Top3ItemList items={this.props.items} categoryNumber={3}/>
        <h1>TOP 3 for VEHICLES </h1>
        <Top3ItemList items={this.props.items} categoryNumber={4}/>
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

const ConnectedTopItemsView = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopItemsView)

export default ConnectedTopItemsView;