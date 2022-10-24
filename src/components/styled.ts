import styled from "styled-components";
import background from "../assets/img-login/background.svg";

export const ButtonForm = styled.button`
  width: 100%;
  display: block;
  color: #000000;
  font-size: 1.5rem;
  background-color: #76BB4C; 
  padding-block: 7px;
  border: none;
  border-radius: 10px;
`;

export const InputForm = styled.input`
  width: 100%;
  display: block;
  font-size: 1.5rem;
  padding-block: 7px;
  border: 1px solid #909090;
  border-radius: 10px;

  &[placeholder] {
    text-align: center;
  }
`

export const DivContainer = styled.div`
  max-width: 450px;
  background-color: #ffffff;
  margin-inline: auto;
  padding: 70px;
`

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: rgba(96, 51, 170, 0.2);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 1);
    position: absolute;
    z-index: -1;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`