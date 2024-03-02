import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  height: 100vh;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  width: 25%;
  height: 25%;
  border: none;
  border-radius: 8px;
  padding-top: 22px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #000000;
  font-size: 24px;
  text-align: center;
  margin-bottom: 28px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #323f4b;
  font-size: 16px;
`

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #cbd2d9;
  margin-right: 5px;
  border-radius: 5px;
  outline: none;
`

export const Button = styled.button`
  margin-left: 5px;
  background-color: #d946ef;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 5px;
`
