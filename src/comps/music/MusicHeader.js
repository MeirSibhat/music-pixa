import React, { Component } from 'react'
import Background from '../../images/music3.jpg'
export class MusicHeader extends Component {

    render() {
        return (
            <div className='row'>
               <div className="col-lg-12 col-md-12 col-sm-12">
                    <header style={{ backgroundImage: `url("${Background}")`, color: "red" }} className="container-fluid d-flex align-items-center">
                        <div className="container text-center">
                            <h1 className="display-2">My Music Store</h1>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}

export default MusicHeader
