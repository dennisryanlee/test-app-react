import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RadioGroup, FormControlLabel, Button, Radio } from "@mui/material";
import { setSelectedOption, setDiscountCode, setNote } from "./actions";
import {
  MainContainer,
  StyledButtonSection,
  StyledFormGroup,
  StyledLabel,
  StyledTextField,
} from "./styled";

const DiscountApp = () => {
  const selectedOption = useSelector((state) => state.selectedOption);
  const note = useSelector((state) => state.note);
  const discountCode = useSelector((state) => state.discountCode);

  console.log("selectedOption", selectedOption);
  console.log("discountCode", discountCode);
  console.log("note", note);

  const dispatch = useDispatch();

  const handleOptionChange = (event) => {
    dispatch(setSelectedOption(event.target.value));
  };

  const handleGenerateCode = () => {
    const code = "NEWCODE123"; // Mock code generation
    dispatch(setDiscountCode(code));
  };

  const handleCodeChange = (event) => {
    dispatch(setDiscountCode(event.target.value));
  };

  const handleNoteChange = (event) => {
    dispatch(setNote(event.target.value));
  };

  return (
    <MainContainer>
      <StyledFormGroup>
        {/* Radio */}
        <StyledLabel>Select Option</StyledLabel>
        <RadioGroup
          aria-label="options"
          name="options"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <FormControlLabel
            value="Option A"
            control={<Radio />}
            label="Option A"
          />
          <FormControlLabel
            value="Option B"
            control={<Radio />}
            label="Option B"
          />
          <FormControlLabel
            value="Option C"
            control={<Radio />}
            label="Option C"
          />
        </RadioGroup>
        {/* Discount Code */}
        <StyledLabel>Discount Code</StyledLabel>
        <StyledTextField
          value={discountCode}
          id="discount-code"
          label="Discount Code"
          variant="outlined"
          onChange={handleCodeChange}
        />

        <StyledButtonSection>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateCode}
          >
            Generate Code
          </Button>
        </StyledButtonSection>

        <StyledTextField
          value={note}
          id="note"
          label="Note"
          variant="outlined"
          multiline
          rows={4}
          onChange={handleNoteChange}
        />
      </StyledFormGroup>
    </MainContainer>
  );
};

export default DiscountApp;
