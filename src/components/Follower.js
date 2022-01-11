/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border: 1px solid black;
`

class Follower extends React.Component {
    componentDidMount() {
        console.log(`Follower ${this.props.user.login} has mounted!`)
    }

    render() {
        const { user } = this.props;

        console.log(`User ${this.props.user.login} is rendering`)
        return(
            <StyledDiv key={user.id} className = "followerProfile">
                <img width="200" src={user.avatar_url} alt={user.login} />
                <h4>{user.login}</h4>
            </StyledDiv>
        )
    }

}

export default Follower;