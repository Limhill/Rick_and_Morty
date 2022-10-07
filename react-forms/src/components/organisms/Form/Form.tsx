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
import ErrorText from 'components/atoms/ErrorText';

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 11.5rem;
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

const DateInput = styled(TextInput)`
  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

const StyledForm = styled.form`
  width: 70%;
`;

class Form extends React.Component<unknown, FormState> {
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  statusSelect: React.RefObject<HTMLSelectElement>;
  speciesCheckbox: React.RefObject<HTMLInputElement>;
  avatarInput: React.RefObject<HTMLInputElement>;
  constructor(props: unknown) {
    super(props);
    this.state = {
      isSubmitDisabled: true,
      nameError: '',
      dateError: '',
      statusError: '',
      speciesError: '',
      avatarError: '',
    };
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.statusSelect = React.createRef();
    this.speciesCheckbox = React.createRef();
    this.avatarInput = React.createRef();
  }

  handleChange = () => {
    if (this.state.isSubmitDisabled) {
      this.setState({ isSubmitDisabled: false });
    }
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.nameInput.current) {
      if (this.nameInput.current.value.length < 3) {
        this.setState({ nameError: 'Name should contain at least 3 letters' });
      } else if (this.nameInput.current.value.match(/[^a-zA-Z]+/i)) {
        this.setState({ nameError: 'Name could contain only english letters' });
      }
    }
    if (this.dateInput.current) {
      const date = new Date(this.dateInput.current.value);
      const currentDate = new Date(Date.now());
      if (!date.getDate() || !date.getMonth() || !date.getFullYear()) {
        this.setState({ dateError: 'Please enter the date' });
      } else if (date.getTime() > currentDate.getTime()) {
        this.setState({ dateError: 'Date should be less than current' });
      }
    }

    if (this.statusSelect.current) {
      if (this.statusSelect.current.value.match(/character/i)) {
        this.setState({ statusError: 'Please choose character status' });
      }
    }

    if (this.speciesCheckbox.current) {
      if (!this.speciesCheckbox.current.checked) {
        this.setState({ speciesError: 'Only Premium users could create non-humans' });
      }
    }

    if (this.avatarInput.current) {
      const fileName = this.avatarInput.current.value;
      if (!fileName) {
        this.setState({ avatarError: 'Please upload an image' });
      } else if (
        !fileName.endsWith('.png') ||
        !fileName.endsWith('.jpg') ||
        !fileName.endsWith('.jpeg')
      ) {
        this.setState({ avatarError: 'Please upload .png, .jpg or .jpeg file.' });
      }
    }
  };
  render() {
    return (
      <StyledForm autoComplete="off" onSubmit={this.handleSubmit} noValidate>
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
            <ErrorText>{this.state.nameError}</ErrorText>
          </FormItem>
          <FormItem>
            <Label htmlFor="date">Date of birth</Label>
            <DateInput
              onChange={this.handleChange}
              id="date"
              placeholder="Date of birth"
              type="date"
              ref={this.dateInput}
            />
            <ErrorText>{this.state.dateError}</ErrorText>
          </FormItem>
          <FormItem>
            <Label htmlFor="select">Pick character status</Label>
            <Select onChange={this.handleChange} id="select" ref={this.statusSelect}>
              <Option>Character status</Option>
              <Option>{CharacterStatus.alive}</Option>
              <Option>{CharacterStatus.dead}</Option>
              <Option>{CharacterStatus.unknown}</Option>
            </Select>
            <ErrorText>{this.state.statusError}</ErrorText>
          </FormItem>
          <FormItem>
            <Label>Check species</Label>
            <Checkbox ref={this.speciesCheckbox} handler={this.handleChange} />
            <ErrorText>{this.state.speciesError}</ErrorText>
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
              <Input type="file" onChange={this.handleChange} ref={this.avatarInput} />
            </Flexbox>
            <ErrorText>{this.state.avatarError}</ErrorText>
          </FormItem>
        </GridContainer>
        <SubmitContainer>
          <Submit disabled={this.state.isSubmitDisabled}>Submit</Submit>
        </SubmitContainer>
      </StyledForm>
    );
  }
}

export default Form;
