import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ label, percentage, id }) => (
    <li
      key={id}
      className={css.itemStatistic}
      style={{ backgroundColor: getRandomColor() }}
    >
      <span className={css.labelDoc}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  ));
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.titleStatistic}>{title}</h2>}
      <ul className={css.statList}>{elements}</ul>
    </section>
  );
};

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
