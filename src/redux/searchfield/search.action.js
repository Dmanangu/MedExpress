import { CHANGE_SEARCHFIELD } from "./search.types";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export default setSearchField;
