import React, { Component } from 'react'
import ItemMusic from '../music/ItemMusic'

export class ItemPixa extends Component {
    render() {
        let {previewURL,pageURL,views,tags,downloads,user}=this.props.item;
        return (
            <div className=" col-lg-6 p-3  ">
                <div className=" p-2 overflow-hidden itemPixa ">
                <img src={previewURL} className="float-left w-50 mr-2 pixPic "></img>
                  <h4>User: {user}</h4>
                  <h6>Tags: {tags}</h6>
                  <h6>Views: {views}</h6>
                  <h6>downloads: {downloads}</h6>
                  </div>
               
              <a class="btn btn-warning linkSong  item" href={pageURL}  target="_blank"role="button">Mor info</a>
            </div>
        )
    }
}

export default ItemPixa
///{previewURL,viewsL,tags,downloads,user}