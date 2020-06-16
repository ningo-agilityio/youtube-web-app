import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'buildTypes';
import { Header } from 'components/Header';
import { Form } from 'components/Form';
import './App.css';
import { colors } from 'theme/color';

const AppStyled = styled.div`
  padding: 0 1.5rem;
`;

const WrapperForm = styled.div`
  position: fixed;
  z-index: 1;
  background-color: rgba(250, 250, 250, 0.7);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const App = () => {
  const isShowForm = useSelector((state: RootState) => state.toggleForm);

  return (
    <AppStyled>
      <Header />
      {isShowForm && (
        <WrapperForm>
          <Form />
        </WrapperForm>
      )}
    </AppStyled>
  );
};

export default App;
