import PropTypes from 'prop-types';
import { FriendsList, Container } from './FriendList.styled';
import { Friend } from '../FriendList/Friend';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <FriendsList>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
      </FriendsList>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
