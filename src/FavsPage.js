import React, { Component } from 'react'
import { deleteFav, getFavs } from './utils.js'

export default class FavsPage extends Component {
    state = {
        favs: []
    }

    componentDidMount = async () => {
        const favs = await getFavs(this.props.token)
        await this.setState({ favs })
    }

    handleRemove = async(entry) => {
        await deleteFav(entry.id, this.props.token)
        const favs = await getFavs(this.props.token);
        await this.setState({favs});
    }

    render() {
        const favs = this.state.favs
        console.log(favs)
        return (
            <div className="favs-container">
                {favs.map(entry => 
                    <div className="solo-fav" key={entry.url}>
                    <span>{entry.name}</span>
                    <img src={entry.image} alt={entry.name}/>
                    <span>Rating: {entry.rating}</span>
                    <span><a href={entry.url}>Yelp Link</a></span>
                    <button onClick={() => this.handleRemove(entry)}>Remove</button>
                    </div>
                )

                }
                
            </div>
        )
    }
}
