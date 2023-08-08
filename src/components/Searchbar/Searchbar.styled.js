import { styled } from "styled-components";

const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 70px;

  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    padding: 9px 0 9px 9px;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    background: none;

    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    &:hover {
        opacity: 1;
    }
`;

const Input = styled.input`
    font: inherit;
    font-size: 19px;

    display: inline-block;
    width: 100%;
    border: none;
    outline: none;

    padding-left: 4px;
    padding-right: 4px;

    &:placeholder {
        font: inherit;
        font-size: 16px;
    }
`;

export { Header, Form, Button, Input };