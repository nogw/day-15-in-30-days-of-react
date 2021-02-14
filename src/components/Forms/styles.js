import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    background-color: #202847;
    border-radius: 10px;
    padding: 40px;
    margin: 40px;
    max-width: 300px;
  }

  label {
    color: #8C9CC3;
    font-size: 15px;
    font-weight: 400;
    margin-left: 1.5px;
  }

  input {
    background-color: transparent;
    border: 1.5px solid #171f38;
    font-size: 15px;
    color: #fff;
    padding: 10px;
    margin: 5px 0px 20px 0px;
    outline: none;
    border-radius: 5px;
    transition: border 400ms ease;

    &:focus {
      border: 1.5px solid  #F572B0;
    }
  }

  button {
    background-color: #F572B0;
    margin: 20px 0px 0px 0px;
    border-radius: 5px;
    padding: 10px;
    border: none;
    color: #fff;
    font-family: monospace;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: transform 400ms ease;

    &:active {
      transform: scale(0.95)
    }
  }
`;

export const Result = styled.div`
  background-color: #fff;
  padding: 10px;
  color: #000;

  pre {
  }
`;