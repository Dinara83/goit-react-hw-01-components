import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const activeStatus = isOnline ? css.active : css.status;
  return (
    <li className={css.item}>
      <span className={activeStatus}></span>
      <img
        className={css.avatarFriend}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.nameFriend}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
