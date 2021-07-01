import React, { Component } from 'react';
import './edit.css';
export class Editprofile extends Component {
  state={
    profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state
		return (
			<div className="page2">
				<div className="container2">
					<h1 className="heading2">Add your Image</h1>
					<div className="img-holder2">
						<img src={profileImg} alt="" id="img2" className="img2" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div className="label">
                    <label className="image-upload2" htmlFor="input">
						<i className="material-icons">Edit Profile</i>
                        {/* <input type="submit" className="profile-edit2 btn" value="Edit Profile" name="btnAddMore" /> */}
						
					</label>
          </div>
				</div>
			</div>
		);
	}
}

export default Editprofile;