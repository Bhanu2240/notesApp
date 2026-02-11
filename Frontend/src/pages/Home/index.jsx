
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import { useNotes } from '../../context/notes.context'
import NotesCard from '../../Components/NotesCard'


const Home = () => {
  const { title, text, notes, archive, bin, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({ type: 'SET_TITLE', payload: e.target.value })
  }

  const onTextChange = (e) => {
    notesDispatch({ type: 'SET_TEXT', payload: e.target.value })
  }
  const onAddNote = () => {
    notesDispatch({ type: 'ADD_NOTE' })
    notesDispatch({ type: 'CLEAR_INPUT' })

  }
  const PinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const OtherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);
  const hasPinnedNotes = PinnedNotes.length > 0;
  console.log(bin);


  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className='flex flex-col w-screen mt-7 '>
          <div className="flex flex-col w-[450px] border-red-400 relative self-center">
            <input value={title} onChange={onTitleChange}
              className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1" placeholder="Enter title" />
            <textarea value={text} onChange={onTextChange}
              className="h-[100px] border border-neutral-800 rounded-b-md focus:outline-none border-t-0 p-1" placeholder="Enter content" />
            <button disabled={title.length === 0} onClick={onAddNote} className="w-7 h-7 absolute bottom-0 right-0 border bg-indigo-800 text-slate-50 rounded-full">
              <span className="material-icons-outlined">add</span>
            </button>
          </div>
          <div className="mt-14 ml-10 flex flex-col gap-6">
            {
              PinnedNotes?.length > 0 && (
                <>
                  <h3 className=''>Pinned Notes</h3>
                  <div className='flex flex-wrap gap-6 '>
                    {
                      PinnedNotes?.length > 0 && PinnedNotes.map(({ id, title, text, isPinned ,isFavorite}) => (
                        <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned}   isFavorite={isFavorite}/>
                      ))
                    }
                  </div>
                </>
              )}
            {
              PinnedNotes?.length > 0 && <h3>Other Notes</h3>
            }
            <div className='flex flex-wrap gap-6 '>
              {
                OtherNotes?.length > 0 && OtherNotes.map(({ id, title, text, isPinned ,isFavorite}) => (
                  <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} isFavorite={isFavorite}/>
                ))
              }

            </div>

          </div>


        </div>
      </main>
    </>
  )
}

export default Home
