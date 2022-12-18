import styled from 'styled-components';

export const Container = styled.div`
  max-width: 260px;
  margin: 40px auto;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: ${props => props.theme.space[4]}px;
  padding: ${props => props.theme.space[0]}px;
  margin: ${props => props.theme.space[0]}px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: ${props => props.theme.space[5]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.mint};
  box-shadow: ${props => props.theme.shadows.normal};
`;

export const Status = styled.span`
  margin-right: ${props => props.theme.space[5]}px;
  width: ${props => props.theme.space[4]}px;
  height: ${props => props.theme.space[4]}px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props =>
    props.status ? props.theme.colors.green : props.theme.colors.red};
`;

export const Avatar = styled.img`
  width: ${props => props.theme.space[6]}px;
  margin-right: ${props => props.theme.space[5]}px;
`;

export const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
`;
