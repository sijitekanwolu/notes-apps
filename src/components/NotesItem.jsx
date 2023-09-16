import React from "react";
import NotesItemBody from './NotesItemBody'
import NotesItemButtom from './NotesItemButtom'

const NotesItem = ({NotesData, onHapus, archive}) => {
    return (
        <div className="card">
            <div className="card-content">
            <NotesItemBody Notes={NotesData}/>
            <NotesItemButtom id={NotesData.id} onHapus={onHapus} onArchive={archive} isArchive={NotesData.archived}/>
            </div>
        </div>
    )
}

export default NotesItem;