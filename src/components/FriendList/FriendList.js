import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend';
import s from './FriendList.module.css';

const FriendList = ({ friendsData }) => (
  <section class={s.friendsSection}>
    <ul class={s.friendList}>
      <Friend friendsData={friendsData} />
    </ul>
  </section>
);

FriendList.propTypes = {
  friendsData: PropTypes.object,
};

export default FriendList;
