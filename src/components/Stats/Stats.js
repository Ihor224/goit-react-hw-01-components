import PropTypes from 'prop-types';
import s from '../Stats/Stats.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className="title">{title}</h2>

      <ul className={s.statList}>
        {stats.map(item => (
          <li key={item.id} className="item">
            <span className={s.label}>{item.label}</span>
            <span className="percentage">{item.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
