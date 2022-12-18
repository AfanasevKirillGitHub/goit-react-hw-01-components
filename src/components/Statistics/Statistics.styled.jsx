import styled from 'styled-components';
import { getRandomHexColor } from '../../utils/getRandomColor';

export const Container = styled.section`
  max-width: 500px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.normal};
`;

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.l};
  padding: ${props => props.theme.space[5]}px;
  margin: ${props => props.theme.space[0]}px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: ${props => props.theme.space[0]}px;
  padding: ${props => props.theme.space[0]}px;
  background-color: ${props => props.theme.colors.grey};
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${getRandomHexColor};
  padding: ${props => props.theme.space[3]}px;
  border: solid 1px;
`;

export const Format = styled.span`
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Value = styled.span`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};
`;
