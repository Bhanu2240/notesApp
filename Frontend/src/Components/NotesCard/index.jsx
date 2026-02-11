import React from 'react';
import { useNotes } from '../../context/notes.context';
import { findNotesInArchive } from '../../utils/findNotesInArchive';

const NotesCard = ({ id, title, text, isPinned, isBin, isFavorite, isFavoritesPage }) => {
    const { notesDispatch, archive } = useNotes();
    const isNoteInArchive = findNotesInArchive(archive, id);

    const onPinClick = () => {
        notesDispatch({
            type: isPinned ? 'UNPIN' : 'PIN',
            payload: { id }
        });
    };

    const onArchiveClick = () => {
        notesDispatch({
            type: isNoteInArchive ? 'REMOVE_FROM_ARCHIVE' : 'ADD_TO_ARCHIVE',
            payload: { id }
        });
    };

    const onDeleteClick = () => {
        notesDispatch({
            type: isBin ? 'DELETE_FOREVER' : 'ADD_TO_BIN',
            payload: { id }
        });
    };

    const onRestoreClick = () => {
        notesDispatch({
            type: 'RESTORE_FROM_BIN',
            payload: { id }
        });
    };
    const onFavoriteClick = () => {
        notesDispatch({
            type: 'TOGGLE_FAVORITE',
            payload: { id }
        });
    };


    return (
        <div className="w-[250px] border border-neutral-800 p-3 rounded-md">

            {/* ---------- HEADER ---------- */}
            <div className="flex justify-between items-start">
                <p className="font-medium">{title}</p>

                <div className="flex gap-2">
                    {/* Favorite (placeholder) */}
                    {/* ⭐ Favorite (not in archive & not in bin) */}
                    {!isNoteInArchive && !isBin && (
                        <span
                            className="material-icons cursor-pointer"
                            onClick={onFavoriteClick}
                        >
                            {isFavorite ? 'star' : 'star_outline'}
                        </span>
                    )}




                    {/* Pin (not in bin & not in archive) */}
                    {!isNoteInArchive && !isBin && !isFavoritesPage && (
                        <span
                            className={`material-icons${isPinned ? '' : '-outlined'} cursor-pointer`}
                            onClick={onPinClick}
                        >
                            push_pin
                        </span>
                    )}
                </div>
            </div>

            {/* ---------- SEPARATOR ---------- */}
            <div className="border-t border-neutral-300 my-2"></div>

            {/* ---------- CONTENT ---------- */}
            <p className="text-sm">{text}</p>

            {/* ---------- ACTIONS ---------- */}
            <div className="flex justify-end gap-2 mt-3">

                {/* Archive (not in bin) */}
                {!isBin && !isFavoritesPage && (
                    <span
                        className={`material-icons${isNoteInArchive ? '' : '-outlined'} cursor-pointer`}
                        onClick={onArchiveClick}
                    >
                        archive
                    </span>
                )}

                {/* Delete */}
                <span
                    className={`material-icons${isBin ? '' : '-outlined'} cursor-pointer`}
                    onClick={onDeleteClick}
                >
                    delete
                </span>

                {/* Restore (only in bin) */}
                {isBin && (
                    <span
                        className="material-icons-outlined text-green-600 cursor-pointer"
                        onClick={onRestoreClick}
                    >
                        restore
                    </span>
                )}
            </div>
        </div>
    );
};

export default NotesCard;
