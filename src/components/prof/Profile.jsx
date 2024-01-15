import styles from './profile.module.css';

export const Profile = ({username, tag, location, avatar, stats}) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={styles.avatar}
      />
      <p className={styles.profileName}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.statsLabel}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.middle}>
        <span className={styles.statsLabel}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={styles.statsLabel}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
