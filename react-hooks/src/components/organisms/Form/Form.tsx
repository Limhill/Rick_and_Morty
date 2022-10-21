import React, { useReducer, useRef } from 'react';
import styled from 'styled-components';
import TextInput from 'components/atoms/TextInput';
import Label from 'components/atoms/Label';
import Select from 'components/molecules/Select';
import { ActionType, CharacterStatus, Color, fieldName } from 'core/enums';
import Checkbox from 'components/molecules/Checkbox';
import Switcher from 'components/atoms/Switcher';
import { FormState, FormStringStates } from 'core/interfaces/states';
import ErrorText from 'components/atoms/ErrorText';
import {
  validateSpecies,
  validateBirthday,
  validateImage,
  validateStatus,
  validateGender,
  validateName,
} from 'services/helpers';
import { FormProps } from 'core/interfaces/props';
import BorderedFlexbox from 'components/atoms/BorderedFlexbox';
import { BooleanStateAction, StringStateAction } from 'core/interfaces/others';
import { isBooleanStateAction } from 'services/typeGuards';

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

const reducer = (state: FormState, action: BooleanStateAction | StringStateAction): FormState => {
  if (isBooleanStateAction(action)) {
    return { ...state, isSubmitDisabled: action.payload };
  }
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

const Form = ({ handler }: FormProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nameInput = useRef<HTMLInputElement>(null);
  const dateInput = useRef<HTMLInputElement>(null);
  const statusSelect = useRef<HTMLSelectElement>(null);
  const speciesCheckbox = useRef<HTMLInputElement>(null);
  const genderSwitcher = useRef<HTMLInputElement>(null);
  const avatarInput = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (state.isSubmitDisabled) {
      dispatch({ type: ActionType.changeBooleanState, payload: false });
    }

    const key = `${e.target.name}Error`;
    if (Object.keys(state).includes(key)) {
      dispatch({
        type: ActionType.changeStringState,
        payload: { [key]: '' } as Pick<FormStringStates, keyof FormStringStates>,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      nameInput.current &&
      dateInput.current &&
      statusSelect.current &&
      speciesCheckbox.current &&
      genderSwitcher.current &&
      avatarInput.current &&
      form.current
    ) {
      dispatch({
        type: ActionType.changeStringState,
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

    if (
      !state.nameError &&
      !state.dateError &&
      !state.statusError &&
      !state.speciesError &&
      !state.avatarError &&
      !state.genderError &&
      !state.isSubmitDisabled
    ) {
      if (
        nameInput.current &&
        dateInput.current &&
        statusSelect.current &&
        speciesCheckbox.current &&
        genderSwitcher.current &&
        avatarInput.current &&
        avatarInput.current.files
      ) {
        handler({
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
          dispatch({ type: ActionType.changeBooleanState, payload: true });
          dispatch({
            type: ActionType.changeStringState,
            payload: {
              nameError: ' ',
              dateError: ' ',
              statusError: ' ',
              speciesError: ' ',
              genderError: ' ',
              avatarError: ' ',
            },
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
            onChange={handleChange}
            id="input"
            placeholder="Character name"
            ref={nameInput}
            name={fieldName.name}
          />
          <ErrorText>{state.nameError}</ErrorText>
        </FormItem>
        <FormItem>
          <Label htmlFor="date">Date of birth</Label>
          <DateInput
            onChange={handleChange}
            id="date"
            type="date"
            ref={dateInput}
            name={fieldName.date}
          />
          <ErrorText>{state.dateError}</ErrorText>
        </FormItem>
        <FormItem>
          <Label htmlFor="select">Pick character status</Label>
          <Select onChange={handleChange} id="select" ref={statusSelect} name={fieldName.status}>
            <Option>Character status</Option>
            <Option>{CharacterStatus.alive}</Option>
            <Option>{CharacterStatus.dead}</Option>
            <Option>{CharacterStatus.unknown}</Option>
          </Select>
          <ErrorText>{state.statusError}</ErrorText>
        </FormItem>
        <FormItem>
          <Checkbox ref={speciesCheckbox} handler={handleChange} />
          <ErrorText>{state.speciesError}</ErrorText>
        </FormItem>
        <FormItem>
          <Switcher ref={genderSwitcher} handler={handleChange} />
          <ErrorText>{state.genderError}</ErrorText>
        </FormItem>
        <FormItem>
          <Label htmlFor="avatar">Choose avatar</Label>
          <BorderedFlexbox>
            <InnerText>Image:</InnerText>
            <FileInput
              id="avatar"
              name={fieldName.avatar}
              type="file"
              onChange={handleChange}
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
