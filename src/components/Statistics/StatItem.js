import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomHexColor from '../utils/getColor';

const StatItem = ({ statData }) =>
  statData.map(({ id, label, percentage }) => (
    <li className={s.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  ));

StatItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatItem;
