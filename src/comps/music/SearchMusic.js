import React, { Component } from 'react'

export class SearchMusic extends Component {
    inputSearch = React.createRef();
    onSearch = () => {
        let searcVal = this.inputSearch.current.value;
        this.props.searcMusic(searcVal)
        //console.log(this.inputSearch.current.value);
      }
    render() {
        return (
            <div className="row justify-content-lg-center">
            <div className="col-lg-10 d-flex p-2">
                <input ref={this.inputSearch} type="text" className="form-control w-100  inputSerch" />
                <button onClick={this.onSearch} className="btn btn-primary btnSearch">Search</button>
            </div>
            </div>
        )
    }
}

export default SearchMusic

