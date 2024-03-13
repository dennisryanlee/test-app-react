import styled from "styled-components";
import { TextField, Button } from "@mui/material";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 800px;
  margin: auto;
  padding: 40px;
`;

export const StyledFormGroup = styled.div`
  border: 1px solid rgb(165, 166, 167, 0.24);
  border-radius: 8px;
  padding: 20px;
`;

export const StyledLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #202223;
  text-transform: uppercase;
  padding: 20px 0px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const StyledButtonSection = styled.div`
  padding: 20px 0px;
`;
