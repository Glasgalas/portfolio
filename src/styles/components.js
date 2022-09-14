import styled from 'styled-components';
import { baseTheme } from './theme';

export const List = styled.ul`
  display: flex;
  margin-right: 64px;
`;

export const ListItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Sunflower', sans-serif;
  font-weight: 300;
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 54px;
  }

  &:after {
    position: absolute;
    bottom: -10px;
    content: '';
    display: inline-flex;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      ${baseTheme.colors.btnGradientFst},
      ${baseTheme.colors.btnGradientSnd}
    );
    transform: scale(0);
    transition: all ${baseTheme.transition.function} 350ms;
  }

  &:hover:after {
    transform: scale(1.1);
  }
`;
