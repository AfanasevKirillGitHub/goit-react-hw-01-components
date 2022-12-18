import PropTypes from 'prop-types';
import {
  Container,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  Format,
  Value,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <Format>{label}</Format>
            <Value>{percentage}%</Value>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
