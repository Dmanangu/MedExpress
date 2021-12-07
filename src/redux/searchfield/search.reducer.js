import { CHANGE_SEARCH_FIELD } from "./search.types";

const initialStateSearch = {
  searchField: "",
};

export const searchMedicine = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

export default searchMedicine;
