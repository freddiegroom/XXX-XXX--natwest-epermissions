import React, { FC } from "react";
import {
  RedInputContainer,
  InputContainer,
  RedInput,
  NormalInput,
} from "../inputs.styles";

interface FirstNameProps {
  state?: number;
  setState: any;
}

const FirstName: FC<FirstNameProps> = ({ state, setState }) => {
  return (
    <>
      {!state && (
        <RedInputContainer
          onClick={(e) => {
            e.preventDefault();
            setState(1);
          }}
        >
          <p>First Name</p>
          <RedInput>Alex</RedInput>
        </RedInputContainer>
      )}
      {state && (
        <InputContainer>
          <p>First Name</p>
          <NormalInput>Alex</NormalInput>
        </InputContainer>
      )}
    </>
  );
};

export default FirstName;
