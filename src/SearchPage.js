import React, { Component } from 'react';
import { createFav, getResults, getFavs } from './utils.js';

export default class search extends Component {
    
    state = {
        name:'',
        result: [],
        favs:[]
    }

    componentDidMount = async() => {
        const favs = await getFavs(this.props.token);

        await this.setState({favs});
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const result = await getResults(this.state.name);
        await this.setState({ result })
        console.log('results on submit', this.state.result)
    }

    handleFav = async(url) => {
        // could be function
        const favArr = this.state.result.filter(item => item.url === url);
        console.log(favArr)
        const fav = favArr[0];
        // console.log(fav[0]);
        await createFav(fav, this.props.token);

        const favs = await getFavs(this.props.token);

        await this.setState({favs});
    }

    isInFav = (url, favs) => {
        return favs.find(fav => fav.url === url);
    }

    render() {
        console.log('favs on render', this.state.favs);
        const result = this.state.result
        return (
            <div>
                <h1>Hello have some red wine</h1>
                <div className ="search-bar">
                
                <form onSubmit = {this.handleSubmit}>
                    <label>
                    <input onChange={async(e) => await this.setState({ name: e.target.value })}/>
                    <button>Search</button>
                    </label>
                </form>
                </div>
                <div className = "results-container">
                    {result.map(entry => 
                    <div className="results-item" key={entry.url}>
                    <span>{entry.name}</span>
                    <img src={entry.image} alt={entry.name}/>
                    <span>Rating: {entry.rating}</span>
                    <span><a href={entry.url}>Yelp Link</a></span>
                    {/* if this entry from results data is also inside of our favs data, then disable this button */}
                    {
                    !this.isInFav(entry.url, this.state.favs) && <button onClick={async() => await this.handleFav(entry.url)} className="favorite-restaurant">Fav</button>
                    }
                    </div>
                    ) }
                </div>

            </div>
        )
    }
}
