import React from 'react';
// import { FormattedRelative } from 'react-intl';
// import { Link } from 'react-router-dom';
import Select from './select.components.js';

const EditItem = ({ singleItem, categories, conditions, statuses, handleSubmit, handleChange }) => {

  return (
    <div className="single-item" id="edit-single-item">

      <form onSubmit={ (e) => handleSubmit(singleItem.id, e) }>
        <div>
          <input
            name="name"
            onChange={handleChange.bind(this)}
            defaultValue={singleItem.name} />
        </div>
        <div>
          <input
            name="description"
            onChange={handleChange}
            defaultValue={singleItem.description} />
        </div>
        <div>
          <input
            name="price"
            onChange={handleChange}
            defaultValue={singleItem.price} />
        </div>
        <div>
          <input
            name="manufacturer"
            onChange={handleChange}
            defaultValue={singleItem.manufacturer} />
        </div>
        <div>
          <input
            name="model"
            onChange={handleChange}
            defaultValue={singleItem.model} />
        </div>
        <div>
          <input
            name="dimensions"
            onChange={handleChange}
            defaultValue={singleItem.dimensions} />
        </div>
        <div>
          <input
            name="notes"
            onChange={handleChange}
            defaultValue={singleItem.notes} />
        </div>
        <div>
          <Select
            list={categories}
            name="category_id"
            label="Category: "
            type="category"
            handler={handleChange}
            defaultValue={singleItem.category_id} />
        </div>
        <div>
          <Select
            list={conditions}
            name="condition_id"
            label="Conditon: "
            type="condition"
            handler={handleChange}
            defaultValue={singleItem.condition_id} />
        </div>
        <div>
          <Select
            list={statuses}
            name="is_sold"
            label="Sold: "
            type="sold"
            handler={this.handleChange}
            defaultValue={singleItem.is_sold} />
        </div>

        <input type="submit" value="CONFIRM" />
      </form>

    </div>
  );
}

export default EditItem;