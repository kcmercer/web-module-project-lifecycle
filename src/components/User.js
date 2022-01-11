import React from 'react';
import axios from 'axios';
import App from '../App';

class User extends React.Component {
    state = {
        avatar_url:"",
        name:"",
        login:"",
        public_repos:0,
        followers:0
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/kcmercer`)
            .then(resp => {
                console.log(resp.data)
                this.setState({
                    avatar_url: resp.data.avatar_url,
                    name: resp.data.name,
                    login: resp.data.login,
                    public_repos: resp.data.public_repos,
                    followers: resp.data.followers 
                })
                console.log(this.state);
            })
    }

    componentDidUpdate(prevProps, prevState) {
        let searchResult = 
        this.props.searchResult != "" ? this.props.searchResult : 'kcmercer'
        if(prevState.name !== this.state.name) {
        axios.get(`https://api.github.com/users/${searchResult}`)
            .then(resp => {
                console.log(searchResult)
                this.setState({
                    avatar_url: resp.data.avatar_url,
                    name: resp.data.name,
                    login: resp.data.login,
                    public_repos: resp.data.public_repos,
                    followers: resp.data.followers 
                })
                console.log(this.state);
            })} else {
                console.log('woah')
            }
    }

    render() {
        return(
            <div>
                <img width="300" src={this.state.avatar_url} />
                <h2> {this.state.name} </h2>
                <h4> {this.state.login} </h4>
                <h3> Public Repos - {this.state.public_repos} </h3>
                <h3> Followers - {this.state.followers} </h3>
            </div>
        )}
}

export default User;