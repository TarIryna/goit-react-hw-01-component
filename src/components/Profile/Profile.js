import React from "react";
import PropTypes from "prop-types";
import defaultImage from './man.png';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, followers, views, likes }) => (
    <div className={s.profile} key={name}>
        <div className="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={s.avatar}
            />
            <p className={s.name}>{name}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
            <li>
                <span className={s.label}>Followers</span>
                <span className={s.quantity}>{followers}</span>
            </li>
            <li>
                <span className={s.label}>Views</span>
                <span className={s.quantity}>{views}</span>
            </li>
            <li>
                <span className={s.label}>Likes</span>
                <span className={s.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};


Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number 
};

console.log(Profile);
export default Profile;