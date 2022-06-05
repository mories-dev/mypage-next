import React from "react";
import styled from "@emotion/styled";

export type ButtonProps = {
    text: string,
};

export const Button: React.FC<ButtonProps> = (props) => {
    return <StyledButton>{props.text}</StyledButton>
};

const StyledButton = styled.button`
  background-color: red;
`;