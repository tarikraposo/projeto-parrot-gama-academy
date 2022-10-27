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
  cursor: pointer;

  &:hover {
    background-color: #469615;
  }
`;

export const InputForm = styled.input`
  width: 100%;
  display: block;
  font-size: 1.5rem;
  padding-block: 7px;
  border: 2px solid #909090;
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

export const LinkForm = styled.a`
  display: inline-block;
  color: #555555;
  font-size: 1.125rem;
  text-decoration: none;

  &:hover {
    color: #76BB4C;
  }
`

export const BtnProfile = styled.a`
  display: inline-block;
  color: #ffffff;
  font-size: 1rem;
  background: #76BB4C;
  padding: 7px 20px;
  border-radius: 30px;
`

export const HeaderUser = styled.header`
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);

  div {
    display: flex;
    align-items: center;
  }
`

export const Navigation = styled.nav`
  max-width: 1500px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-inline: auto;
  padding: 10px;
`

export const ImgLogo = styled.img`
  max-width: 240px;
`

export const Ulist = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 7px;

  li:first-child {
    font-size: 1.5rem;
    border-right: 2px solid #76BB4C;
    padding-right: 5px;
  }

  li:first-child a {
    color: #76BB4C;
  }

  li:last-child a {
    color: #6033AA;
  }

  a {
    text-decoration: none;
  }
`

type Padding = {
  padding: string;
}

export const MainProfile = styled.main`
  max-width: 700px;
  height: 100vh;
  margin-inline: auto;
  border-left: 1px solid #c5c5c5;
  border-right: 1px solid #c5c5c5;
`

export const DivContainerProfile = styled.div`
  padding: ${(props: Padding) => props.padding}
  border-bottom: 1px solid #c5c5c5;
`

export const DivUser = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  align-items: start;
  gap: 30px;

  div {
    display: flex;
    flex-direction: column;
  }

  a {
    justify-self: center;
  }

  p {
    color: #76BB4C;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  span {
    font-size: 1rem;
    margin-bottom: 10px;
  }
`

export const DivPost = styled.div`
  max-width: 700px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  margin-inline: auto;
  padding: 35px 25px 45px 25px;
  border-bottom: 1px solid #c5c5c5;

  h2 {
    color: #76BB4C;
    font-size: 1rem;
    font-weight: 400;
  }

  span {
    color: #909090;
    font-size: 0.875rem;
    font-weight: 400;
  }

  p {
    font-size: 1rem;
    margin-top: 10px;
  }
`