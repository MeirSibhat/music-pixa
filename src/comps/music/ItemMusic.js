
import React, { Component } from 'react'

export class ItemMusic extends Component {
    render() {
        let item=this.props.item;
        return (
            <div className="col-lg-6 p-2 ">
            <div className="border p-2 overflow-hidden musicItem">
              <img src={item.artist.picture_big} className="float-left w-50 mr-2 "></img>
              <h3> {item.title} </h3>
              <h5>Artist :{ item.artist.name}</h5>
              <h5> Album :{ item.album.title}</h5>
              <audio controls src={item.preview}></audio>
              <br/> 
              <a class="btn btn-secondary linkSong  item" href={item.link}  target="_blank"role="button">Mor info</a>
            </div>
          </div>
        )
    }
}

export default ItemMusic




