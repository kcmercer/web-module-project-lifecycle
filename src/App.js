import React from 'react';
import User from './components/User';



class App extends React.Component {
  render() {
    return(<div>
      <h1>GITHUB INFO</h1>
      <form>
        <input
          type="text"
          name="search"
          />
        <button> Search </button>
      </form>

      <User />

      <div>
        <h2> Followers: </h2>
        <div>
          <img width="200" src="https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg" />
          <h4> ladyBeard </h4>
        </div>
      </div>
    </div>);
  }
}

export default App;
