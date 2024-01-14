import user from "../source/user.json";
import data from "../source/data.json";
import friends from '../source/friends.json';
import transactions from '../source/transactions.json'

import React from 'react';

const Profile = ({user}) => (
  <div className="profile">
    <div className="description">
      <img
        src={user.avatar}
        alt="User avatar"
        className="avatar"
      />
      <p className="profile-name">{user.username}</p>
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
      {stats.map(item => (
        <li className="item" key={item.id}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friends-item">
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name} <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
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

const Transaction = ({ transactions }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <TransactionTable transactions={transactions} />
  </table>
);

const TransactionTable = ({ transactions }) => {
  return (
    <tbody className="table-body">
      {transactions.map((transaction) => (
        <TransactionTableItem key={transaction.id} {...transaction} />
      ))}
    </tbody>
  );
};

const TransactionTableItem = ({ type, amount, currency }) => {
  return (
    <tr className="item">
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
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
        alignItems: 'baseline',
        fontSize: 40,
        color: '#010101',
        maxWidth: '1500px',
        flexWrap: 'wrap',
        marginBottom: '40px',
        marginTop: '40px'
      }}
    >
      <Profile user={user} />
      <FriendList friends={friends} />
      <Statistics stats={data} />
      <Transaction transactions={transactions} />
    </div>
  );
};
