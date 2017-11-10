import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/items.actions.js';


class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '', imagePreviewUrl: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  } 

   handleSubmit(event) {
    console.log('handle uploading--->', this.state.file);

    let formData = new FormData();
   
    console.log(formData);
    formData.append('file', this.state.file);
    // formData.append('name', this.state.name);
    // formData.append('description', this.state.description);
    // formData.append('manufacturer', this.state.manufacturer);
    // formData.append('modelname', this.state.modelname);
    // formData.append('price', this.state.price);
    // formData.append('category_id', this.state.category_id);
    // formData.append('is_sold', this.state.is_sold);
    // formData.append('user_id', this.state.user_id);
  }


   handleImageChange(event) {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
       $imagePreview = (<img src={imagePreviewUrl} />);
    } 
    else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (

      <div className="upload-form">
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <input className="file-input" 
            type="file" 
            accept="image/x-png,image/gif,image/jpeg"
            encType="multipart/form-data"
            action="/addItem"
            method="post"
            onChange={(event)=>this.handleImageChange(event)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(event)=>this.handleSubmit(this.formData)}>Upload Image</button>
        </form>

        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

  
const mapStateToProps = (state) => {
  return {
    file: state.file
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: addItem
  };
};

export default connect(mapStateToProps)(ImageUpload);








