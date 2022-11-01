import React, { useReducer, useRef } from 'react';
import styled from 'styled-components';
import TextInput from 'components/atoms/TextInput';
import Label from 'components/atoms/Label';
import Select from 'components/atoms/Select';
import { ActionType, CharacterStatus, Color, formFieldName } from 'core/enums';
import Checkbox from 'components/molecules/Checkbox';
import Switcher from 'components/molecules/Switcher';
import { FormState, FormStringStates } from 'core/interfaces/states';
import ErrorText from 'components/atoms/ErrorText';
import {
  validateSpecies,
  validateBirthday,
  validateImage,
  validateStatus,
  validateGender,
  validateName,
} from 'services/validation';
import { FormProps } from 'core/interfaces/props';
import BorderedFlexbox from 'components/atoms/BorderedFlexbox';
import { ChangeFormStateAction } from 'core/interfaces/others';

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

const reducer = (state: FormState, action: ChangeFormStateAction): FormState => {
  return { ...state, ...action.payload };
};

const initialState = {
  isSubmitDisabled: true,
  nameError: ' ',
  dateError: ' ',
  statusError: ' ',
  speciesError: ' ',
  genderError: ' ',
  avatarError: ' ',
};

const Form = ({ addNewCard }: FormProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nameInput = useRef<HTMLInputElement>(null);
  const dateInput = useRef<HTMLInputElement>(null);
  const statusSelect = useRef<HTMLSelectElement>(null);
  const speciesCheckbox = useRef<HTMLInputElement>(null);
  const genderSwitcher = useRef<HTMLInputElement>(null);
  const avatarInput = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const enableSubmit = () => {
    if (state.isSubmitDisabled) {
      dispatch({ type: ActionType.changeFormState, payload: { isSubmitDisabled: false } });
    }
  };

  const resetErrorMessages = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    enableSubmit();
    const key = `${e.target.name}Error`;
    if (Object.keys(state).includes(key)) {
      dispatch({
        type: ActionType.changeFormState,
        payload: { [key]: '' } as Pick<FormStringStates, keyof FormStringStates>,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isEachRefNotNull =
      nameInput.current &&
      dateInput.current &&
      statusSelect.current &&
      speciesCheckbox.current &&
      genderSwitcher.current &&
      avatarInput.current &&
      form.current;

    const hasAnyError =
      state.nameError ||
      state.dateError ||
      state.statusError ||
      state.speciesError ||
      state.avatarError ||
      state.genderError ||
      state.isSubmitDisabled;

    if (isEachRefNotNull) {
      dispatch({
        type: ActionType.changeFormState,
        payload: {
          ...validateName(nameInput.current.value),
          ...validateBirthday(dateInput.current.value),
          ...validateStatus(statusSelect.current.value),
          ...validateSpecies(speciesCheckbox.current.checked),
          ...validateGender(genderSwitcher.current.checked),
          ...validateImage(avatarInput.current.value),
        },
      });
    }

    if (!hasAnyError) {
      if (isEachRefNotNull && avatarInput.current.files) {
        addNewCard({
          name: nameInput.current.value,
          birthday: dateInput.current.value,
          status: statusSelect.current.value,
          species: speciesCheckbox.current.checked,
          gender: genderSwitcher.current.checked,
          image: avatarInput.current.files[0],
        });

        if (form.current) {
          form.current.reset();
          speciesCheckbox.current.checked = false;
          genderSwitcher.current.checked = false;
          dispatch({
            type: ActionType.changeFormState,
            payload: initialState,
          });
        }
      }
    }
  };
  return (
    <StyledForm
      autoComplete="off"
      onSubmit={handleSubmit}
      noValidate
      encType="multipart/form-data"
      ref={form}
    >
      <GridContainer>
        <FormItem>
          <Label htmlFor="input">Name</Label>
          <TextInput
            onChange={resetErrorMessages}
            id="input"
            placeholder="Character name"
            ref={nameInput}
            name={formFieldName.name}
          />
          <ErrorText>{state.nameError}</ErrorText>
        </FormItem>
        <FormItem>
          <Label htmlFor="date">Date of birth</Label>
          <DateInput
            onChange={resetErrorMessages}
            id="date"
            type="date"
            ref={dateInput}
            name={formFieldName.date}
          />
          <ErrorText>{state.dateError}</ErrorText>
        </FormItem>
        <FormItem>
          <Label htmlFor="select">Pick character status</Label>
          <Select
            onChange={resetErrorMessages}
            id="select"
            ref={statusSelect}
            name={formFieldName.status}
            padding={1}
          >
            <Option>Character status</Option>
            <Option>{CharacterStatus.alive}</Option>
            <Option>{CharacterStatus.dead}</Option>
            <Option>{CharacterStatus.unknown}</Option>
          </Select>
          <ErrorText>{state.statusError}</ErrorText>
        </FormItem>
        <FormItem>
          <Checkbox ref={speciesCheckbox} resetErrorMessages={resetErrorMessages} />
          <ErrorText>{state.speciesError}</ErrorText>
        </FormItem>
        <FormItem>
          <Switcher ref={genderSwitcher} resetErrorMessages={resetErrorMessages} />
          <ErrorText>{state.genderError}</ErrorText>
        </FormItem>
        <FormItem>
          <Label htmlFor="avatar">Choose avatar</Label>
          <BorderedFlexbox>
            <InnerText>Image:</InnerText>
            <FileInput
              id="avatar"
              name={formFieldName.avatar}
              type="file"
              onChange={resetErrorMessages}
              ref={avatarInput}
            />
          </BorderedFlexbox>
          <ErrorText>{state.avatarError}</ErrorText>
        </FormItem>
      </GridContainer>
      <SubmitContainer>
        <Submit disabled={state.isSubmitDisabled}>Submit</Submit>
      </SubmitContainer>
    </StyledForm>
  );
};

export default Form;
