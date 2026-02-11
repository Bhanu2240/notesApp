import { v4 as uuid } from 'uuid';
export const notesReducer = (state, { type, payload }) => {
    switch (type) {
        case 'SET_TITLE':
            return { ...state, title: payload };
        case 'SET_TEXT':
            return { ...state, text: payload };
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, { text: state.text, title: state.title, id: uuid(), isPinned: false, isFavorite: false }],
            };
        case 'CLEAR_INPUT':
            return {
                ...state,
                title: '',
                text: '',
            };
        case 'PIN':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
                )
            };
        case 'UNPIN':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
                )
            };
        case 'ADD_TO_ARCHIVE':
            return {
                ...state,
                archive: [...state.archive, state.notes.find(({ id }) => id === payload.id)],
                notes: state.notes.filter(({ id }) => id !== payload.id)
            }
        case 'REMOVE_FROM_ARCHIVE':
            return {
                ...state,
                notes: [...state.notes, state.archive.find(({ id }) => id === payload.id)],
                archive: state.archive.filter(({ id }) => id !== payload.id)
            }
        case 'ADD_TO_BIN': {
            const noteToBin =
                state.notes.find(note => note.id === payload.id) ||
                state.archive.find(note => note.id === payload.id);

            return {
                ...state,
                notes: state.notes.filter(note => note.id !== payload.id),
                archive: state.archive.filter(note => note.id !== payload.id),
                bin: [...state.bin, noteToBin]
            };
        }
        case 'RESTORE_FROM_BIN': {
            const noteToRestore = state.bin.find(
                note => note.id === payload.id
            );

            return {
                ...state,
                notes: [...state.notes, noteToRestore],
                bin: state.bin.filter(note => note.id !== payload.id)
            };
        }
        case 'DELETE_FOREVER':
            return {
                ...state,
                bin: state.bin.filter(note => note.id !== payload.id)
            };
        case 'TOGGLE_FAVORITE':
            return {
                ...state,
                notes: state.notes.map(note =>
                    note.id === payload.id
                        ? { ...note, isFavorite: !note.isFavorite }
                        : note
                )
            };




        default:
            return state;
    }
}