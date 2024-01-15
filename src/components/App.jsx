import user from "../source/user.json";
import data from "../source/data.json";
import friends from '../source/friends.json';
import transactions from '../source/transactions.json';

import { TransactionHistory } from './transaction/Transaction';
import { FriendList } from './friends/FriendsList';
import { Statistics } from './stats/Statisctics';
import { Profile }from './prof/Profile'; 

import React from 'react';

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
      <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
