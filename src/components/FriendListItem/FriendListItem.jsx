import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  const activeStatus = isOnline ? 'Онлайн' : 'Офлайн';
  return (
    <li className={css.item}>
      <span className={activeStatus}></span>
      <img className={avatar} src="" alt="User avatar" width="48" />
      <p className={name}></p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
