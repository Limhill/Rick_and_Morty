import React from 'react';
import styled from 'styled-components';
import TextInput from 'components/atoms/TextInput';
import Label from 'components/atoms/Label';
import Select from 'components/molecules/Select';
import Option from 'components/atoms/Option';
import { CharacterStatus, Color } from 'core/enums';
import Checkbox from 'components/molecules/Checkbox';
import Switcher from 'components/atoms/Switcher';
import { FormState } from 'core/interfaces/states';

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.3rem solid ${Color.lightBlue};
  padding: 1rem;
  border-radius: 0.8rem;
  &:hover,
  &:focus {
    box-shadow: 0 0 15px 5px rgba(172, 228, 170, 0.7);
  }
`;

const InnerText = styled.span`
  font-size: 2.2rem;
  color: ${Color.white};
  user-select: none;
`;

const Input = styled.input`
  overflow: hidden;
  display: block;
  width: 38%;
`;

const GridContainer = styled.div`
  display: grid;
  flex-direction: column;
  row-gap: 3rem;
  column-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const Submit = styled.button`
  background: ${Color.cardBackground};
  border: none;
  color: ${Color.black};
  padding: 1rem 3rem;
  border-radius: 1rem;
  font-size: 2rem;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0 0 15px 5px ${Color.cardHighlight};
  }
  &:disabled {
    background: ${Color.gray};
    cursor: auto;
    box-shadow: none;
  }
`;

class Form extends React.Component<unknown, FormState> {
  nameInput: React.RefObject<HTMLInputElement>;
  constructor(props: unknown) {
    super(props);
    this.state = { isSubmitDisabled: true, nameFieldError: '' };
    this.nameInput = React.createRef();
  }

  handleChange = () => {
    if (this.state.isSubmitDisabled) {
      this.setState({ isSubmitDisabled: false });
    }
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.nameInput.current && this.nameInput.current.value.length < 3) {
      this.setState({ nameFieldError: 'Имя должно быть длиннее 3 символов!' });
    }
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <GridContainer>
          <FormItem>
            <Label htmlFor="input">Name</Label>
            <TextInput
              onChange={this.handleChange}
              id="input"
              placeholder="Character name"
              autoComplete="off"
              ref={this.nameInput}
            />
            <InnerText>{this.state.nameFieldError}</InnerText>
          </FormItem>
          <FormItem>
            <Label htmlFor="date">Date of birth</Label>
            <TextInput
              onChange={this.handleChange}
              id="date"
              placeholder="Date of birth"
              type="date"
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="select">Pick character status</Label>
            <Select onChange={this.handleChange} id="select">
              <Option>Character status</Option>
              <Option>{CharacterStatus.alive}</Option>
              <Option>{CharacterStatus.dead}</Option>
              <Option>{CharacterStatus.unknown}</Option>
            </Select>
          </FormItem>
          <FormItem>
            <Label>Check species</Label>
            <Checkbox handler={this.handleChange} />
          </FormItem>
          <FormItem>
            <Label>Choose character gender</Label>
            <Flexbox>
              <InnerText>Male</InnerText>
              <Switcher handler={this.handleChange} />
              <InnerText>Female</InnerText>
            </Flexbox>
          </FormItem>
          <FormItem>
            <Label>Choose avatar</Label>
            <Flexbox>
              <InnerText>Image:</InnerText>
              <Input type="file" onChange={this.handleChange} />
            </Flexbox>
          </FormItem>
        </GridContainer>
        <SubmitContainer>
          <Submit disabled={this.state.isSubmitDisabled}>Submit</Submit>
        </SubmitContainer>
      </form>
    );
  }
}

export default Form;
