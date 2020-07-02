import React, { Component } from 'react'
import Background from '../../images/pic3.jpg' 
export class HeaderPixa extends Component {
    render() {
        return (
            <div className='row'>
            <div className="col-lg-12 col-md-12 col-sm-12">
            <header style={{backgroundImage: `url("${Background}")`,color:"green"}} className="container-fluid d-flex align-items-center">
                        <div className="container text-center">
                            <h1 className="display-2">Picture For Every Day</h1>
                        </div>
                    </header>
            </div>
            </div>
        )
    }
}

export default HeaderPixa

