import React from 'react';
import axios from 'axios';
import Follower from './Follower';

class FollowerList extends React.Component {
    state = {
        followers: [],
        loading: true
    };

    componentDidMount() {
        axios.get(`https://api.github.com/users/kcmercer/followers`)
            .then(resp => {
                console.log(resp.data)
                this.setState({
                    followers: resp.data,
                    loading: false,
                })
                console.log(this.state);
            })
    }

    componentDidUpdate(prevProps) {
        console.log('State Changed')
        if (this.props.search !== prevProps.search) {
            axios.get(`https://api.github.com/users/${this.props.search}/followers`)
            .then(resp => {
                console.log(resp.data)
                this.setState({
                    followers: resp.data,
                    loading: false,
                })
                console.log(this.state);
            })
        } else {
            console.log('Same Followers')
        }
    }

    render() {
        console.log('FollowerList is Rendering')
        return(
            <>
                {
                    this.state.followers.map(user => (
                        console.log(user),
                        <Follower key={user.id} user={user} />
                    ))
                }
            </>
        )}
}

export default FollowerList;