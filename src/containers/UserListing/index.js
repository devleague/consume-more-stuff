import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserItems } from '../../actions/itemActions';
import ItemList from '../../containers/ItemList';

class UserListing extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.getUserItems(userId)
  }

  render() {
    return (
      <div>
        <h1>HELLO </h1>

          <div className="status-published">
            <h2>PUBLISHED ITEMS: </h2>
            <ItemList items={this.props.items} filter={"item_status"} id={ 1 }/>
          </div>

          <div className="status-pending">
            <h2>PENDING ITEMS: </h2>
            <ItemList items={this.props.items} filter={"item_status"} id={ 2 }/>
          </div>

          <div className="status-sold">
            <h2>SOLD ITEMS: </h2>
            <ItemList items={this.props.items} filter={"item_status"} id={ 3 }/>
          </div>

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
    getUserItems: (id) => {
      dispatch(getUserItems(id));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserListing)