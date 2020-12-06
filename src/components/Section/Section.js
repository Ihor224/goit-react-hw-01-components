import React from 'react';
import PropTypes from 'prop-types';
import s from '../Section/Section.module.css';
import user from '../data/user.json';
import Profile from '../Profile/Profile';
import statisticalData from '../data/statistical-data.json';
import Statistics from '../Stats/Stats';
import friends from '../data/friends.json';
import FriendList from '../FriendList/FriendList';
import transactions from '../data/transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

function Section({ title }) {
  return (
    <section>
      {title}
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {title && <Statistics title="Upload stats" stats={statisticalData} />}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
