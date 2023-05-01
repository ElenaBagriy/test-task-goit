import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "redux/usersSlice";
import { updateUser } from "redux/usersOperations";
import { selectFollowingUsers } from "redux/selectors";
import PropTypes from 'prop-types';
import ellipse from '../../images/Ellipse.png';
import { displayedNumber } from "service/displayedNumber";
import { Avatar, AvatarFrame, AvatarWrapper, Container, ContentBox, FollowButton, Text, Wrapper } from "./Tweets.styled"

export const Tweets = ({ userInfo }) => {
    const { id, user, avatar, tweets, followers } = userInfo;

    const dispatch = useDispatch();
    const followedUsers = useSelector(selectFollowingUsers);
    const [isFollowing, setIsFollowing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const buttonText = isFollowing ? 'following' : 'follow';
    
    useEffect(() => {
        const isFollowing = followedUsers.includes(id)
        setIsFollowing(isFollowing);
    }, [followedUsers, id]);
            
    const onClick = (e) => {
        setIsLoading(true);
        const data = isFollowing ? { user, tweets, followers: followers - 1, avatar, id } :
            { user, tweets, followers: followers + 1, avatar, id };
        
        if (isFollowing) {
            dispatch(unfollowUser(id));
        } else {
            dispatch(followUser(id));
        };

        dispatch(updateUser({ userId: id, userInfo: data }))
            .then(() => setIsLoading(false));
    };
    
    return <Container >
        <Wrapper>
            <AvatarWrapper>
                <Avatar alt={user} src={avatar} />
                <AvatarFrame alt={user} src={ellipse} />
            </AvatarWrapper>
        </Wrapper>
        <ContentBox>
            <Text>{displayedNumber(tweets)} tweets</Text>
            <Text className={'followers'}>{displayedNumber(followers)} followers</Text>
            <FollowButton type="button" isFollowing={isFollowing} isLoading={isLoading} onClick={onClick}>
                {isLoading ? 'loading..' : buttonText}
            </FollowButton>
        </ContentBox>
    </Container>
};

Tweets.propTypes = {
    userInfo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        tweets: PropTypes.number,
        followers: PropTypes.number
  }),
};