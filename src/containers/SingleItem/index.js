import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadSingleItem } from '../../actions/itemActions';
import Item from '../../components/Item';
import EditItem from '../EditItem';
import { Link } from 'react-router-dom';

class SingleItem extends Component {
  constructor (props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    const itemId = this.props.match.params.id;
    this.props.loadSingleItem(itemId);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.item !== this.props.item) {
     return this.setState({...nextProps.item})
    }
  }

  render() {
    function isAuthorized(id, params)  {
      if (id !== parseInt(params)) {
        return false
      } else {
        return true
      }
      };

    const item = this.props.item;
    const loggedIn = JSON.parse(localStorage.getItem('user'));
    const userId = this.state.user_id;
 
    if (loggedIn) {
      return (
        <div className="main-content">
          <div className="item-container">
            <div className="item-detail-category-row">
              <div className="category-title">
                <h2><Item category={this.state.category}/></h2>
              </div>
              <div className="page-options-container">
                <div className="page-options">
                  <div className="icon">
                    <i className="fas fa-print"></i>
                  </div>
                  <div className="icon">
                    <i className="far fa-heart"></i>
                  </div>
                </div>
                <div className="report-button-container">
                  <button>Report</button>
                </div>
              </div>
            </div>
            <div className="item-image-and-detail-container">
              <figure className="item-detail-image">
                <img src="https://picsum.photos/300/?random" alt="Item image"/>
              </figure>
              <div className="item-detail-container">
                <div className="item-title-row">
                  <h1><Item name={this.state.name}/></h1>
                </div>
                <div className="item-timestamp-row">
                  <Item created_at={this.state.created_at}/>
                  <Item updated_at={this.state.updated_at}/>
                </div>
                <div className="item-price-row">
                  <div className="stars-row">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <div className="item-price">
                    <h2><Item price={this.state.price}/></h2>
                  </div>
                </div>
                <div className="item-description-row">
                  <Item className="item-description" notes={this.state.notes}/>
                </div>
                <div className="item-owner-row">
                  <div className="item-status-container">
                    <Item className="item-owner" user={this.state.user}/>
                      {
                        isAuthorized(loggedIn.id, userId) 
                        ? 
                        <Item className="item-status" itemStatus={this.state.itemStatus}/>
                        :null
                      }
                  </div>
                  <div className="edit-item-container">
                    {
                      isAuthorized(loggedIn.id, userId) 
                      ? 
                      <Link className="edit-item-link" to={`edit-item/${this.props.match.params.id}`}>EDIT ITEM</Link>
                      :null
                    }
                  </div>
                </div>
                <div className="item-specs-row">
                  <Item className="item-condition" conditions={this.state.condition}/>
                  <Item className="item-model" model={this.state.model}/>
                  <Item className="item-dimensions" dimensions={this.state.dimensions}/>
                </div>
                <div className="item-button-row">
                  <div className="add-to-cart-button-container">
                    <button>Add to Cart</button>
                  </div>
                </div>
                <div className="item-detail-footer">
                  <div className="footer-icon-container">
                    <div className="icon">
                      <i className="fab fa-facebook-square"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-google-plus-square"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-twitter-square"></i>
                    </div>
                  </div>
                </div>
              </div> {/*closing item-detail-container*/}
            </div> {/*closing item-image-and-detail-container*/}
          </div> {/*closing item-container*/}
        </div> //closing main
      )
    } else {
      return (
        <div className="main-content">
          <div className="item-container">
            <div className="item-detail-category-row">
              <div className="category-title">
                <h2><Item category={this.state.category}/></h2>
              </div>
              <div className="page-options-container">
                <div className="page-options">
                  <div className="icon">
                    <i className="fas fa-print"></i>
                  </div>
                  <div className="icon">
                    <i className="far fa-heart"></i>
                  </div>
                </div>
                <div className="report-button-container">
                  <button>Report</button>
                </div>
              </div>
            </div>
            <div className="item-image-and-detail-container">
              <figure className="item-detail-image">
                <img src="https://picsum.photos/300/?random" alt="Item image"/>
              </figure>
              <div className="item-detail-container">
                <div className="item-title-row">
                  <h1><Item name={this.state.name}/></h1>
                </div>
                <div className="item-timestamp-row">
                  <Item created_at={this.state.created_at}/>
                  <Item updated_at={this.state.updated_at}/>
                </div>
                <div className="item-price-row">
                  <div className="stars-row">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <div className="item-price">
                    <h2><Item price={this.state.price}/></h2>
                  </div>
                </div>
                <div className="item-description-row">
                  <Item className="item-description" notes={this.state.notes}/>
                </div>
                <div className="item-specs-row">
                  <Item className="item-condition" conditions={this.state.condition}/>
                  <Item className="item-model" model={this.state.model}/>
                  <Item className="item-dimensions" dimensions={this.state.dimensions}/>
                </div> 
                <div className="item-button-row">
                  <div className="add-to-cart-button-container">
                    <button>Add to Cart</button>
                  </div>
                </div>
                <div className="item-detail-footer">
                  <div className="footer-icon-container">
                    <div className="icon">
                      <i className="fab fa-facebook-square"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-google-plus-square"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-twitter-square"></i>
                    </div>
                  </div>
                </div>
              </div> {/*closing item-detail-container*/}
            </div> {/*closing item-image-and-detail-container*/}
          </div> {/*closing item-container*/}
        </div> //closing main
        )
    }
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