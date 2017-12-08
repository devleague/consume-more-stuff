import React from 'react';
import Select from './select.components.js';

const EditItem = ({ singleItem, categories, conditions, statuses, handleChange, handleSold }) => {

  return (
    <div className="single-item" id="edit-single-item">
      <div>
        <input
          name="name"
          onChange={handleChange.bind(this)}
          placeholder="name"
          defaultValue={singleItem.name} />
      </div>
      <div>
        <textarea
          name="description"
          onChange={handleChange}
          cols="18" rows="8"
          placeholder="description"
          defaultValue={singleItem.description} />
      </div>
      <div>
        <input
          name="price"
          onChange={handleChange}
          placeholder="price"
          defaultValue={`$${singleItem.price}`} /> </div> <div>
        <input
          name="manufacturer"
          onChange={handleChange}
          placeholder="manufacturer"
          defaultValue={singleItem.manufacturer} />
      </div>
      <div>
        <input
          name="model"
          onChange={handleChange}
          placeholder="model"
          defaultValue={singleItem.model} />
      </div>
      <div>
        <input
          name="dimensions"
          onChange={handleChange}
          placeholder="dimensions"
          defaultValue={singleItem.dimensions} />
      </div>
      <div>
        <textarea
          name="notes"
          onChange={handleChange}
          cols="18" rows="8"
          placeholder="notes"
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
    </div>
  );
}

export default EditItem;