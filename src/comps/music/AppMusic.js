import React, { Component } from 'react'
import { doApi } from '../apiRest'
import ItemMusic from './ItemMusic'
import SearchMusic from './SearchMusic'
import MusicHeader from './MusicHeader'

export class AppMusic extends Component {
    state = { musicAr: [] }
    componentDidMount() {
        let url = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=abba"
        doApi(url)
            .then(res => {
                this.setState({ musicAr: res.data })
                console.log(res.data);
            })
    }
    search = (_item) => {
        let url = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${_item}`
        doApi(url)
            .then(res => {
                this.setState({ musicAr: res.data })
            })
    }
    render() {
        return (
            <div >
                 <div>
                 <MusicHeader />
                <SearchMusic searcMusic={this.search} />
                 </div>
                <div className='row'>
                    {this.state.musicAr.map(item => {
                        return (
                            <ItemMusic key={item._id} item={item} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default AppMusic
