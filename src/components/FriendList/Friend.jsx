import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar, Name } from './FriendList.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </FriendItem>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
