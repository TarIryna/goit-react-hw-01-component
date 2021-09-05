import React from "react";
import PropTypes from "prop-types";
import s from './Statistics.module.css';
import getRandomHexColor from '../../getColor';

const Statistics = ({ statData }) => (
 <section className={s.statistics}>
  <h2 className={s.title}>Upload stats</h2>
  <ul className={s.statList}>
  {statData.map(({id, label, percentage}) => (
    <li className={s.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  ))}
  </ul>
</section>
);

Statistics.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
};

export default Statistics;