import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    archive: [],
    bin: [],
    
  };

  const [{ title, archive, text, notes, bin, favorites }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

  return (
    <NotesContext.Provider value={{ title, archive, text, notes, bin, favorites, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
