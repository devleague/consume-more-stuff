import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../../components/item.components';


class SingleItemView extends Component {
  constructor(props){
    super();

    this.state = {
      // id: this.props.id
    }
  }

  render(){
console.log(this.props.items);
    console.log(this.props.id);
    return(
      <div className="single-item-view">

      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    items: state.itemList
  }
}

export default connect(
  mapStateToProps
)(SingleItemView);

