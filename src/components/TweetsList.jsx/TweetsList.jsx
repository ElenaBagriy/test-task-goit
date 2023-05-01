import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "redux/usersOperations";
import { selectError, selectFilter, selectFilteredUsers } from "redux/selectors";
import { Tweets } from "components/Tweets/Tweets"
import { BackLink } from "components/BackLink/BackLink";
import { Button, ButtonWrapper, Container, Item, List, Message } from "./TweetsList.styled"

const ITEMS_PER_PAGE = 3;

export const TweetsList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);
  const [visibleUsers, setVisibleUsers] = useState([]);

  const error = useSelector(selectError);
  const filterStatus = useSelector(selectFilter);
  const filteredUsers = useSelector(selectFilteredUsers);

  useEffect(() => {
    dispatch(fetchUsers());;
  }, [dispatch]);

  useEffect(() => {
    setVisibleUsers(filteredUsers.slice(0, page * ITEMS_PER_PAGE));
  }, [filteredUsers, page]);
  
  useEffect(() => {
    if (page >= Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)) {
      return setShowButton(false);
    };
    setShowButton(true);
  }, [page, filteredUsers.length]);
    
  const onLoadMore = () => {
    setPage(page + 1);
  };

  return <Container>
    <BackLink to={location?.state?.from ?? '/'}>Go back</BackLink>
      <List>
        {visibleUsers.length !== 0 ? visibleUsers.map((user) => {
          return <Item key={user.id}><Tweets userInfo={user} /></Item>
        }) : <Message>Sorry, there are no users according to filter "{filterStatus}" yet.</Message>}
      </List>
    {showButton &&
      <ButtonWrapper>
        <Button loadingIndicator="Loading…" onClick={onLoadMore} variant="contained">
          Load more
        </Button>
      </ButtonWrapper>}
    {error && <Message>Something went wrong, please try again later</Message>}
  </Container>
}