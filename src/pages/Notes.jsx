// import React from 'react'
import { useEffect, useState } from "react";
import db from "../appwrite/databases";
import Form from "../components/NoteForm";
import { Query } from "appwrite";
import Note from "../components/Note";
import { SiGoogletasks } from "react-icons/si";
function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    init();
  });

  const init = async () => {
    // const response=await databases.listDocuments(
    //     // make requst to backend
    //     import.meta.env.VITE_DATABASE_ID,
    //     import.meta.env.VITE_COLLECTION_ID_NOTES
    // );
    const response = await db.notes.list(
        [Query.orderDesc('$createdAt')]
    );
    setNotes(response.documents);
  };

  return (
    <>
    <div>
      <h1><SiGoogletasks />      Taskly</h1>
    </div>

    <div>
        <Form setNotes/>
      <div>
        {notes.map((note) => (
            <Note key={note.$id} setNotes={setNotes} noteData={note}/>
        ))}
      </div>
    </div>
    </>
  );

  // return (
  //     <div>HEllo</div>
  // )
}

export default Notes;
