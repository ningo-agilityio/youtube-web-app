import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { HeaderProps } from 'buildTypes';
import { BTN } from 'constants/index';
import { colors } from 'theme/color';
import logo from 'assets/main-logo.png';
import { toggleForm } from 'actions';
import Button from './Button';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  background: ${colors.WHITE};
`;

const Logo = styled.img`
  width: 18%;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
`;

export const Header = (props: HeaderProps) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(toggleForm());
  };

  return (
    <HeaderStyled>
      <Wrapper>
        <Logo src={logo} alt="Main Logo" />
      </Wrapper>
      <Button
        name={BTN.PRIMARY}
        value="upload"
        type="button"
        onClick={handleOnClick}
      />
    </HeaderStyled>
  );
};

Header.defaultProps = {};
