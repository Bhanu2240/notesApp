import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/Sidebar';
import { useNotes } from '../../context/notes.context';
import NotesCard from '../../Components/NotesCard';

const Bin = () => {
  const { bin } = useNotes();

  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div>

        <div className="flex flex-wrap gap-6 w-screen mt-7">
          {bin.length === 0 ? (
            <p className="ml-10">Bin is Empty</p>
          ) : (
            bin.map(({ id, title, text, isPinned }) => (
              <NotesCard
                key={id}
                id={id}
                title={title}
                text={text}
                isPinned={isPinned}
                isBin={true}
              />
            ))
          )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Bin;
