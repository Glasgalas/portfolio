import * as C from '../../styles/components';
import * as S from './header.styles';

const Header = () => {
  return (
    <S.StyledHeader>
      <S.Logo>lx_code</S.Logo>
      <S.NavWrap>
        <C.List>
          <C.ListItem>
            <S.NavLink href="#about">About</S.NavLink>
          </C.ListItem>
          <C.ListItem>
            <S.NavLink href="#works">Works</S.NavLink>
          </C.ListItem>
          <C.ListItem>
            <S.NavLink href="#footer">Contacts</S.NavLink>
          </C.ListItem>
        </C.List>
        <S.NavBtnWrap>
          <S.NavBtn>My Resume</S.NavBtn>
        </S.NavBtnWrap>
      </S.NavWrap>
    </S.StyledHeader>
  );
};
export default Header;
