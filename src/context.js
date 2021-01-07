import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_GIF':
            return {
                ...state,
                gifs: action.payload,
                heading: 'Search Results'
            } 
        default: 
            return state
    }
}

export class Provider extends Component {
    state = {
        gifs: [],
        heading: 'Trending',
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
        axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=0uMselzUyP89MZ3WBoni3gc3xpnfEc9b&limit=40&rating=g
        `)
            .then(res => {
                // console.log(res.data.data[0].id);
                this.setState({gifs: res.data.data})
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;