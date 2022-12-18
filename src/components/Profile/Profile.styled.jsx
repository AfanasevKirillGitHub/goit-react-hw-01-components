import styled from 'styled-components';

export const CardProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  max-width: 260px;
  background-color: ${props => props.theme.colors.mint};
  border-radius: ${props => props.theme.radii.middle};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const DescriptionUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[3]}px;
  margin-bottom: ${props => props.theme.space[5]}px;
  margin-top: ${props => props.theme.space[5]}px; ;
`;

export const UserImage = styled.img`
  display: block;
  width: 150px;
  border-radius: ${props => props.theme.radii.round};
`;

export const UserInfo = styled.p`
  text-align: center;
  margin: ${props => props.theme.space[0]};
  font-size: ${props => props.theme.fontSizes.m};
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  list-style: none;
  border-radius: 0 0 24px 24px;
  font-size: ${props => props.theme.fontSizes.s};
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
  background-color: ${props => props.theme.colors.grey};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space[2]}px;
  width: 100%;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`;

export const StatsText = styled.span`
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
`;
