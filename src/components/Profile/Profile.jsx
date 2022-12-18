import PropTypes from 'prop-types';
import {
  CardProfile,
  DescriptionUser,
  UserImage,
  UserInfo,
  StatsList,
  StatsItem,
  StatsText,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <CardProfile>
      <DescriptionUser>
        <UserImage src={avatar} alt={username} />
        <UserInfo>{username}</UserInfo>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </DescriptionUser>

      <StatsList>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <StatsText>{stats.followers}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <StatsText>{stats.views}</StatsText>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes</StatsText>
          <StatsText>{stats.likes}</StatsText>
        </StatsItem>
      </StatsList>
    </CardProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
