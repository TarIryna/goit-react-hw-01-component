import React from "react";
import PropTypes from "prop-types";
import s from './FriendList.module.css';

const FriendList = ({ friendsData }) => (
<section class={s.friendsSection}>
<ul class={s.friendList}>
  {friendsData.map(({avatar, name, isOnline, id}) => (
        <li class={s.item} key={id}>
        <span class={s[isOnline]}>{isOnline}</span>
        <img class={s.avatar} src={avatar} alt={name} width="48" />
        <p class={s.name}>{name}</p>
        </li>
      ))}
</ul>
</section>
);

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
};

export default FriendList;