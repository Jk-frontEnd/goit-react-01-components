import styles from './stats.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.stat__list}>
      {stats.map(({id, label, percentage}) => (
        <li className={styles.item} key={id}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);