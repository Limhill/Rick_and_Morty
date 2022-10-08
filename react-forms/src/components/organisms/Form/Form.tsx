import React from 'react';
import styled from 'styled-components';
import TextInput from 'components/atoms/TextInput';
import Label from 'components/atoms/Label';
import Select from 'components/molecules/Select';
import Option from 'components/atoms/Option';
import { CharacterStatus, Color, fieldName } from 'core/enums';
import Checkbox from 'components/molecules/Checkbox';
import Switcher from 'components/atoms/Switcher';
import { FormState } from 'core/interfaces/states';
import ErrorText from 'components/atoms/ErrorText';
import {
  validateCheckbox,
  validateDate,
  validateFile,
  validateName,
  validateSelect,
  validateSwitcher,
} from 'services/helpers';
import { FormProps } from 'core/interfaces/props';

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

const FileInput = styled.input`
  ::-webkit-file-upload-button {
    float: right;
  }
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

class Form extends React.Component<FormProps, FormState> {
  nameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  statusSelect: React.RefObject<HTMLSelectElement>;
  speciesCheckbox: React.RefObject<HTMLInputElement>;
  genderSwitcher: React.RefObject<HTMLInputElement>;
  avatarInput: React.RefObject<HTMLInputElement>;
  form: React.RefObject<HTMLFormElement>;

  constructor(props: FormProps) {
    super(props);
    this.state = {
      isSubmitDisabled: true,
      nameError: ' ',
      dateError: ' ',
      statusError: ' ',
      speciesError: ' ',
      genderError: ' ',
      avatarError: ' ',
    };

    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.statusSelect = React.createRef();
    this.speciesCheckbox = React.createRef();
    this.genderSwitcher = React.createRef();
    this.avatarInput = React.createRef();
    this.form = React.createRef();
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (this.state.isSubmitDisabled) {
      this.setState({ isSubmitDisabled: false });
    }
    switch (e.target.name) {
      case fieldName.name:
        this.setState({ nameError: '' });
        break;
      case fieldName.date:
        this.setState({ dateError: '' });
        break;
      case fieldName.status:
        this.setState({ statusError: '' });
        break;
      case fieldName.gender:
        this.setState({ genderError: '' });
        break;
      case fieldName.species:
        this.setState({ speciesError: '' });
        break;
      case fieldName.avatar:
        this.setState({ avatarError: '' });
        break;
    }
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.nameInput.current) {
      const errorMessage = validateName(this.nameInput.current.value);
      if (errorMessage) this.setState(errorMessage);
    }
    if (this.dateInput.current) {
      const errorMessage = validateDate(this.dateInput.current.value);
      if (errorMessage) this.setState(errorMessage);
    }

    if (this.statusSelect.current) {
      const errorMessage = validateSelect(this.statusSelect.current.value);
      if (errorMessage) this.setState(errorMessage);
    }

    if (this.speciesCheckbox.current) {
      const errorMessage = validateCheckbox(this.speciesCheckbox.current.checked);
      if (errorMessage) this.setState(errorMessage);
    }

    if (this.genderSwitcher.current) {
      const errorMessage = validateSwitcher(this.genderSwitcher.current.checked);
      if (errorMessage) this.setState(errorMessage);
    }

    if (this.avatarInput.current) {
      const errorMessage = validateFile(this.avatarInput.current.value);
      if (errorMessage) this.setState(errorMessage);
    }

    if (
      !this.state.nameError &&
      !this.state.dateError &&
      !this.state.statusError &&
      !this.state.speciesError &&
      !this.state.avatarError &&
      !this.state.genderError &&
      !this.state.isSubmitDisabled
    ) {
      if (
        this.nameInput.current &&
        this.dateInput.current &&
        this.statusSelect.current &&
        this.speciesCheckbox.current &&
        this.genderSwitcher.current &&
        this.avatarInput.current &&
        this.avatarInput.current.files
      ) {
        this.props.handler({
          name: this.nameInput.current.value,
          birthday: this.dateInput.current.value,
          status: this.statusSelect.current.value,
          species: this.speciesCheckbox.current.checked,
          gender: this.genderSwitcher.current.checked,
          image: this.avatarInput.current.files[0],
        });
        if (this.form.current) {
          this.form.current.reset();
        }
      }
    }
  };
  render() {
    return (
      <StyledForm
        autoComplete="off"
        onSubmit={this.handleSubmit}
        noValidate
        encType="multipart/form-data"
        ref={this.form}
      >
        <GridContainer>
          <FormItem>
            <Label htmlFor="input">Name</Label>
            <TextInput
              onChange={this.handleChange}
              id="input"
              placeholder="Character name"
              ref={this.nameInput}
              name={fieldName.name}
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
              name={fieldName.date}
            />
            <ErrorText>{this.state.dateError}</ErrorText>
          </FormItem>
          <FormItem>
            <Label htmlFor="select">Pick character status</Label>
            <Select
              onChange={this.handleChange}
              id="select"
              ref={this.statusSelect}
              name={fieldName.status}
            >
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
              <Switcher ref={this.genderSwitcher} handler={this.handleChange} />
              <InnerText>Female</InnerText>
            </Flexbox>
            <ErrorText>{this.state.genderError}</ErrorText>
          </FormItem>
          <FormItem>
            <Label>Choose avatar</Label>
            <Flexbox>
              <InnerText>Image:</InnerText>
              <FileInput
                name={fieldName.avatar}
                type="file"
                onChange={this.handleChange}
                ref={this.avatarInput}
              />
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
