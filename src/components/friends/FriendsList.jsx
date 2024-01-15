import styles from './friends.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendsItem}>
      <img className={styles.avatar} src={avatar} alt="User avatar" />
      <p className={styles.name}>
        {name} <span className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}></span>
      </p>
    </li>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};
