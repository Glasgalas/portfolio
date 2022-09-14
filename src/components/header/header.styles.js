import styled from 'styled-components';
import { baseTheme } from '../../styles/theme';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-family: 'Sunflower', sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  color: ${baseTheme.colors.font};
  text-decoration: none;

  &:before {
    content: '';
    display: inline-flex;
    position: absolute;
    left: -20px;
    top: 5px;
    width: 6px;
    height: 6px;
    border-radius: 50%50%;
    background: ${baseTheme.colors.primary};
  }
`;

export const NavBtnWrap = styled.div`
  width: 184px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    126deg,
    ${baseTheme.colors.btnGradientFst},
    ${baseTheme.colors.btnGradientSnd}
  );
  border-radius: 4px;
  transition: all ${baseTheme.transition.ms300} ${baseTheme.transition.function};

  &:hover {
    cursor: pointer;
    background: linear-gradient(
      318deg,
      ${baseTheme.colors.btnGradientFst},
      ${baseTheme.colors.btnGradientSnd}
    );
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 176px;
  height: 40px;
  background: ${baseTheme.colors.bg};
  border-radius: 4px;
  padding: 2px;
`;
