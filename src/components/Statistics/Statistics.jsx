import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const elements = stats.map(({ label, percentage, id }) => (
    <li key={id} className={css.item}>
      <span className={css.labelDoc}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  ));
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {elements} 
      </ul>
    </section>
  );
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
