import user from "../source/user.json";
import data from "../source/data.json";
import friends from '../source/friends.json';
import React from 'react';

const Profile = ({user}) => (
  <div className="profile">
    <div className="description">
      <img
        src={user.avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="name">{user.username}</p>
      <p className="tag">@{user.tag}</p>
      <p className="location">{user.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="stats-label">Followers</span>
        <span className="quantity">{user.stats.followers}</span>
      </li>
      <li className="middle">
        <span className="stats-label">Views</span>
        <span className="quantity">{user.stats.views}</span>
      </li>
      <li>
        <span className="stats-label">Likes</span>
        <span className="quantity">{user.stats.likes}</span>
      </li>
    </ul>
  </div>
)

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {data.map(item => (
        <li className="item" key={item.id}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
)

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}       <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        maxWidth: '1500px',
        flexWrap: 'wrap',
        marginBottom: '40px'
      }}
    >
      <Profile user={user} />
      <FriendList friends={friends} />
      <Statistics data={data} />

    </div>
  );
};
