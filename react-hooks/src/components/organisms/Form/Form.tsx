import React from 'react';
import styled from 'styled-components';
import TextInput from 'components/atoms/TextInput';
import Label from 'components/atoms/Label';
import Select from 'components/molecules/Select';
import { CharacterStatus, Color, fieldName } from 'core/enums';
import Checkbox from 'components/molecules/Checkbox';
import Switcher from 'components/atoms/Switcher';
import { FormState } from 'core/interfaces/states';
import ErrorText from 'components/atoms/ErrorText';
import {
  validateSpecies,
  validateBirthday,
  validateImage,
  validateName,
  validateStatus,
  validateGender,
} from 'services/helpers';
import { FormProps } from 'core/interfaces/props';
import BorderedFlexbox from 'components/atoms/BorderedFlexbox';

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 11.5rem;
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

const Option = styled.option`
  font-size: 2.2rem;
  color: ${Color.black};
`;

const initial = {
  isSubmitDisabled: true,
  nameError: ' ',
  dateError: ' ',
  statusError: ' ',
  speciesError: ' ',
  genderError: ' ',
  avatarError: ' ',
};

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
    this.state = initial;

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
    const key = `${e.target.name}Error`;
    if (Object.keys(this.state).includes(key)) {
      this.setState({ [key]: '' } as unknown as Pick<FormState, keyof FormState>);
    }
  };

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (this.nameInput.current) {
      await this.setState(validateName(this.nameInput.current.value));
    }
    if (this.dateInput.current) {
      await this.setState(validateBirthday(this.dateInput.current.value));
    }

    if (this.statusSelect.current) {
      await this.setState(validateStatus(this.statusSelect.current.value));
    }

    if (this.speciesCheckbox.current) {
      await this.setState(validateSpecies(this.speciesCheckbox.current.checked));
    }

    if (this.genderSwitcher.current) {
      await this.setState(validateGender(this.genderSwitcher.current.checked));
    }

    if (this.avatarInput.current) {
      await this.setState(validateImage(this.avatarInput.current.value));
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
          this.speciesCheckbox.current.checked = false;
          this.genderSwitcher.current.checked = false;
          this.setState(initial);
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
            <Checkbox ref={this.speciesCheckbox} handler={this.handleChange} />
            <ErrorText>{this.state.speciesError}</ErrorText>
          </FormItem>
          <FormItem>
            <Switcher ref={this.genderSwitcher} handler={this.handleChange} />
            <ErrorText>{this.state.genderError}</ErrorText>
          </FormItem>
          <FormItem>
            <Label htmlFor="avatar">Choose avatar</Label>
            <BorderedFlexbox>
              <InnerText>Image:</InnerText>
              <FileInput
                id="avatar"
                name={fieldName.avatar}
                type="file"
                onChange={this.handleChange}
                ref={this.avatarInput}
              />
            </BorderedFlexbox>
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
