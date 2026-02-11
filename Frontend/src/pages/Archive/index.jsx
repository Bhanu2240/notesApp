import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import { useNotes } from '../../context/notes.context'
import NotesCard from '../../Components/NotesCard'

const index = () => {
    const { archive } = useNotes();
  return (
    <>
    <Navbar/>
      <main className="flex gap-3">
        <Sidebar/>
      <div>
          <div className='flex flex-wrap gap-6  w-screen mt-7'>
                  {
                    archive?.length > 0 && archive.map(({ id, title, text, isPinned }) => (
                      <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                    ))
              }
                </div>
                </div>
      </main>

      </>
  )
}

export default index
