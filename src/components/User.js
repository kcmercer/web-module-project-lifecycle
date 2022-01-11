import React from 'react';
import axios from 'axios';
import App from '../App';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
`

const StyledH2 = styled.h2`
    width: 100%;
`

const StyledH3 = styled.h3`
    width: 100%;
`

const StyledH4 = styled.h4`
    width: 100%;
`

class User extends React.Component {
    state = {
        avatar_url:"",
        name:"",
        login:"",
        public_repos:0,
        followers:0,
        loading: true
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
                    loading: false,
                    followers: resp.data.followers
                })
                console.log(this.state);
            })
    }

    componentDidUpdate(prevProps) {
        console.log('State Changed')
        if (this.props.search !== prevProps.search) {
            axios.get(`https://api.github.com/users/${this.props.search}`)
            .then(resp => {
                console.log(resp.data)
                this.setState({
                    avatar_url: resp.data.avatar_url,
                    name: resp.data.name,
                    login: resp.data.login,
                    public_repos: resp.data.public_repos,
                    followers: resp.data.followers,
                    loading: false
                })
                console.log(this.state);
            })
        } else {
            console.log('Same Person')
        }
    }

    render() {
        return(
            <StyledDiv>
                <img width="300" src={this.state.avatar_url} />
                <StyledH2> {this.state.name} </StyledH2>
                <StyledH4> {this.state.login} </StyledH4>
                <StyledH3> Public Repos - {this.state.public_repos} </StyledH3>
                <StyledH3> Follower Count - {this.state.followers} </StyledH3>
            </StyledDiv>
        )}
}

export default User;