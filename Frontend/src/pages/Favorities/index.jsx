import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import { useNotes } from '../../context/notes.context';
import NotesCard from '../../Components/NotesCard';

const Favourites = () => {
  const { notes } = useNotes();

  // Get only favourite notes
  const favouriteNotes = notes.filter(note => note.isFavorite);

  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div>

        <div className="flex flex-wrap gap-6 w-screen mt-7 ml-10">
          {favouriteNotes.length === 0 ? (
            <p>No favourites yet</p>
          ) : (
            favouriteNotes.map(({ id, title, text, isPinned, isFavorite }) => (
              <NotesCard
                key={id}
                id={id}
                title={title}
                text={text}
                isPinned={isPinned}
                isFavorite={isFavorite}
                isFavoritesPage={true}
              />
            ))
          )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Favourites;
