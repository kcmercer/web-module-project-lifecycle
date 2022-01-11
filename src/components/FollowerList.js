import React from 'react';
import axios from 'axios';
import Follower from './Follower';

class FollowerList extends React.Component {
    state = {
        followers: [],
    };

    componentDidMount() {
        axios.get(`https://api.github.com/users/kcmercer/followers`)
            .then(resp => {
                console.log(resp.data)
                this.setState({
                    followers: resp.data
                })
                console.log(this.state);
            })
    }

    render() {
        console.log('FollowerList is Rendering')
        return(
            <>
                {
                    this.state.followers.map(user => (
                        <Follower key={user.id} user={user} />
                    ))
                }
            </>
        )}
}

export default FollowerList;