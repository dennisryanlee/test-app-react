const initialState = {
  selectedOption: "",
  discountCode: "",
  note: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_OPTION":
      return { ...state, selectedOption: action.payload };
    case "SET_DISCOUNT_CODE":
      return { ...state, discountCode: action.payload };
    case "SET_NOTE":
      return { ...state, note: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
