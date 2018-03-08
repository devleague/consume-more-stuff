import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadSingleItem } from '../../actions/itemActions';
import Item from '../../components/Item';
import EditItem from '../EditItem';
import { Link } from 'react-router-dom';

class SingleItem extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const itemId = this.props.match.params.id;
    this.props.loadSingleItem(itemId);
  }

  render() {
    const item = this.props.item
    
    return (
      <div className="detail-view">
        <h2>Item Detail View</h2>
        <Link to={`edit-item/${this.props.match.params.id}`}>EDIT ITEM</Link>
        <Item {...item}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    item: state.items.item
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadSingleItem: (id) => {
      dispatch(loadSingleItem(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleItem)