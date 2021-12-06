import { CHANGE_SEARCH_FIELD } from "./search.types";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});

export default setSearchField;
