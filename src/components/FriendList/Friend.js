import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const Friend = ({ friendsData }) =>
  friendsData.map(({ avatar, name, isOnline, id }) => (
    <li class={s.item} key={id}>
      <span class={s[isOnline]}>{isOnline}</span>
      <img class={s.avatar} src={avatar} alt={name} width="48" />
      <p class={s.name}>{name}</p>
    </li>
  ));

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default Friend;
