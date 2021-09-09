import React from 'react';
import PropTypes from 'prop-types';
import StatItem from './StatItem';
import s from './Statistics.module.css';

const Statistics = ({ statData }) => (
  <section className={s.statistics}>
    <h2 className={s.title}>Upload stats</h2>
    <ul className={s.statList}>
      <StatItem statData={statData} />
    </ul>
  </section>
);

Statistics.propTypes = {
  statData: PropTypes.object,
};

export default Statistics;
