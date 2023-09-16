import React from "react";
import NotesItem from "./NotesItem";


const NoteList = ({Notes, onHapus, archived, isarchived, active, activeData}) =>{
console.log(isarchived);
    return(
        <section className="card-list">
                <div className="note note-active">
                <h1>Notes</h1>
                <div className="note-list">
                   {
                    activeData.length === 0 || Notes.length === 0 ?
                    <p>Tidak Ada Notes</p>
                    :
                    Notes.map((item) => (
                        !item.archived&&(
                        <NotesItem
                        NotesData={item} 
                        key={item.id} 
                        onHapus={onHapus} 
                        archive={archived}/>
                        )
                        )) 
                }
                </div>
                </div>
        </section>
    );
}

export default NoteList