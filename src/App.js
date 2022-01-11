import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import styled from 'styled-components';
import axios from 'axios';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`

const StyledH2 = styled.h2`
    width: 100%;
`


class App extends React.Component {
  state = {
    search: "",
    avatar_url:"",
    name:"",
    login:"",
    public_repos:0,
    followers:0,
    followerProfiles: [],
    loading: true
  }

  onChange = e => {
    this.setState({
      ...this.state,
      search: e.target.value
    })
  }

  onClick = e => {
    e.preventDefault();
    console.log('click!')
  }

  onSearch = e => {
    e.preventDefault();
    const search = this.state.search;

    this.setState({
      ...this.state,
      loading: false
    })
  }

  render() {
    console.log(this.state.search)
    const search = this.state.search; 
    // If {search} doesn't work in User and FollowerList, {this.state.search} does work for MVP, however it updates every keystroke.
    return(<div>
      <h1>GITHUB INFO</h1>
      <form>
        <input 
          onChange={this.onChange}
          value={this.state.search}
          />
        <button onClick={this.onSearch}> Search </button>
      </form>

      <StyledDiv>
      <User search={search} />

      <StyledH2> Followers: </StyledH2>
      <FollowerList search={search} />
      </StyledDiv>

    </div>);
  }
}

export default App;
