import React from 'react';
import styled from 'styled-components';
import TextInput from 'components/atoms/TextInput';
import Label from 'components/atoms/Label';
import Select from 'components/molecules/Select';
import Option from 'components/atoms/Option';
import { CharacterStatus } from 'core/enums';
import Checkbox from 'components/atoms/Checkbox';
import Switcher from 'components/atoms/Switcher';

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Form = () => {
  return (
    <StyledForm>
      <FormItem>
        <Label htmlFor="input">Name</Label>
        <TextInput id="input" placeholder="Character name" />
      </FormItem>
      <FormItem>
        <Label htmlFor="date">Date of birth</Label>
        <TextInput id="date" placeholder="Date of birth" type="date" />
      </FormItem>
      <FormItem>
        <Label htmlFor="select">Pick character status</Label>
        <Select id="select">
          <Option selected>Character status</Option>
          <Option>{CharacterStatus.alive}</Option>
          <Option>{CharacterStatus.dead}</Option>
          <Option>{CharacterStatus.unknown}</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Label>Check species</Label>
        <Checkbox />
      </FormItem>
      <FormItem>
        <Switcher />
      </FormItem>
    </StyledForm>
  );
};

export default Form;
