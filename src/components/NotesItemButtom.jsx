import React from "react";

const NotesItemButtom = ({id,  onHapus, onArchive, isArchive}) => {
    return(
    <div className="card-bottom">
        <button className="btn-delete" onClick={() => onHapus(id)}>Delete</button>
        <button className="btn-archive" onClick={() => onArchive(id)}>{isArchive ? 'Pindahkan' : 'Arsipkan'}</button>
    </div>
    )
};

export default NotesItemButtom;