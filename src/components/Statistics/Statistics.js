import React from "react";
import PropTypes from "prop-types";
import s from './Statistics.module.css';
import getRandomHexColor from '../../getColor';

const Statistics = ({ statData }) => (
 <section class={s.statistics}>
  <h2 class={s.title}>Upload stats</h2>

  <ul class={s.statList}>
  {statData.map(({id, label, percentage}) => (
    <li class={s.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
      <span class={s.label}>{label}</span>
      <span class={s.percentage}>{percentage}</span>
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