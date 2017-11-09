import React, {Component} from 'react';
import ItemDetailView from '../../components/ItemDetailView';
import { connect } from 'react-redux';
import { loadItems,editItem } from '../../actions/items';
import ItemList from '../../components/ItemList';

import TopItemsView from '../../containers/TopItemsView';
import SingleItem from '../../components/SingleItem.js';
import filterItem from '../../lib/filterUser';



import ItemStatusListView from '../../containers/ItemStatusListView';


class AllItemView extends Component {
  constructor(){
    super();

        this.state = {
          item: '',
          name: '',
          user: '',
          itemstatus: '',
          description: '',
          image: '',
          price: '',
          condition: '',
          category: '',
          manfucturer: '',
          model: '',
          dimensions: '',
          notes:'',
          auth: true,
          edit: false
        }
  }
   handleName(event)          { this.setState({ name: event.target.value        }) }
   handleUser(event)          { this.setState({ user: event.target.value        }) }
   handleItemStatus(event)    { this.setState({ itemstatus: event.target.value  }) }
   handleDescription(event)   { this.setState({ description: event.target.value }) }
   handleImage(event)         { this.setState({ image: event.target.value       }) }
   handlePrice(event)         { this.setState({ price: event.target.value       }) }
   handleCondition(event)     { this.setState({ condition: event.target.value   }) }
   handleCategory(event)      { this.setState({ category: event.target.value    }) }
   handleManufacturer(event)  { this.setState({ manfucturer: event.target.value }) }
   handleModel(event)         { this.setState({ model: event.target.value       }) }
   handleDimensions(event)    { this.setState({ dimensions: event.target.value  }) }
   handleNotes(event)         { this.setState({ notes: event.target.value       }) }






   editNow(item,e){
    this.setState({item: item});
    this.setState({edit: true});
    if(this.state.edit){
      let item = {
        id: this.state.item[0].id,
        name: this.state.name,
        user: this.state.user,
        itemstatus: this.state.itemstatus,
        description: this.state.description,
        image: this.state.image,
        price: this.state.price,
        condition: this.state.condition,
        category: this.state.category,
        manfucturer: this.state.manfucturer,
        model: this.state.model,
        dimensions: this.state.dimensions,
        notes:this.state.notes
    }
    this.props.editItem(item);
    this.setState({item: null});
    this.setState({edit: false});
    }
  }




  componentWillMount(){
    this.props.loadItems();
  }

  loadSingleItem(id,e){
    let items = this.props.items;
    let item = filterItem(items,id)
    this.setState({item: item});
  }

  backToItems(e){
    e.preventDefault();
    this.setState({item: null});
  }

  render(){
    const item = this.state.item;
    return(
      <div>

       {item ?
        <SingleItem

          edit={this.state.edit}
          auth={this.state.auth}
          item={this.state.item}
          editNow={this.editNow.bind(this)}
          handleName={this.handleName.bind(this)}
          handleUser={this.handleUser.bind(this)}
          handleItemStatus={this.handleItemStatus.bind(this)}
          handleDescription={this.handleDescription.bind(this)}
          handleImage={this.handleImage.bind(this)}
          handlePrice={this.handlePrice.bind(this)}
          handleCondition={this.handleCondition.bind(this)}
          handleCategory={this.handleCategory.bind(this)}
          handleManufacturer={this.handleManufacturer.bind(this)}
          handleModel={this.handleModel.bind(this)}
          handleDimensions={this.handleDimensions.bind(this)}
          handleNotes={this.handleNotes.bind(this)} 
          backToItems={this.backToItems.bind(this)}/>
        :
        <ItemList
          loadSingleItem={this.loadSingleItem.bind(this)} 
          items={this.props.items}/>
        }



      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return{
    items: state.items
  }
}

const ConnectedAllItemView = connect(
  mapStateToProps,
  {loadItems,editItem}
)(AllItemView)

export default ConnectedAllItemView;