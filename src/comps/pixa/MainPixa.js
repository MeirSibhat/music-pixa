import React, { Component } from 'react'
import { doApi } from '../apiRest';
import ItemPixa from './ItemPixa';
import HeaderPixa from './HeaderPixa';
import SearchPixa from './SearchPixa';
class MainPixa extends Component {
    state = { _arPixa: [] }
    componentDidMount() {
  //  let url = "http://fs1.co.il/bus/pixa1.php?fbclid=IwAR1GJ7mlmtqdkFNLaOTrzI8SxQETCjPqEWUELmVPvKXxaXh8-aIFZd33wEs";
        let url="https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=&image_type=photo&pretty=tr"
        doApi(url)
            .then(res => {
                this.setState({ _arPixa: res.hits });
                console.log(res);

            })
    }
    OnSearch=(_val)=>{
        let url=`https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=${_val}&image_type=photo&pretty=tr`;
        doApi(url)
        .then(res=>{
            this.setState({ _arPixa: res.hits });
        })

    }
    render() {
        return (
            <div> 
                <HeaderPixa/>
                <SearchPixa searchPic={this.OnSearch} />
                <div className='row'>
                    {this.state._arPixa.map(item => {
                        return (
                            <ItemPixa key={item.id} item={item}  />
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default MainPixa

