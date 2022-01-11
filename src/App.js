import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';



class App extends React.Component {
  state = {
    search: "",
    avatar_url:"",
    name:"",
    login:"",
    public_repos:0,
    followers:0,
    followerProfiles: []
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

  // onSearch = e => {
  //   e.preventDefault();
  //   let searchResult = 
  //   this.state.search != "" ? this.state.search : 'kcmercer'
  //   axios.get(`https://api.github.com/users/${searchResult}`)
  //       .then(resp => {
  //           console.log(searchResult)
  //           this.setState({
  //             ...this.state,
  //               avatar_url: resp.data.avatar_url,
  //               name: resp.data.name,
  //               login: resp.data.login,
  //               public_repos: resp.data.public_repos,
  //               followers: resp.data.followers 
  //           })
  //           console.log(this.state);
  //       })
  // }

  render() {
    return(<div>
      <h1>GITHUB INFO</h1>
      <form>
        <input 
          onChange={this.onChange}
          value={this.state.search}
          />
        <button onClick={this.onSearch}> Search </button>
      </form>

      <User searchResult = {this.state.search} />

      <div>
        <h2> Followers: </h2>
        <FollowerList />
        </div>
    </div>);
  }
}

export default App;
