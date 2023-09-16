import React from "react";
import NoteList from './NoteList'
import { getInitialData } from "../utils/index"
import InputNotes from "./InputNotes";
import Header from "./header";


class NotesApp extends React.Component {
    constructor (props){
        super (props);
        this.state = {
            notes: getInitialData(),
        }
        this.onDeleteNote = this.onDeleteNote.bind(this);
        this.onAddNote = this.onAddNote.bind(this);
        this.isArchived = this.isArchived.bind(this);
        this.restoreFromArchive = this.restoreFromArchive.bind(this);

    }

    onDeleteNote(id){
        console.log(`${id} di pencet`);
        const NotesData = this.state.notes.filter(item => item.id !== id)
        this.setState({notes:NotesData});
    }

    onAddNote({title, description}) {
        console.log('dipencet')
        this.setState((prevState) => {
            return{
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title ,
                        body: description,
                        createdAt: new Date(),
                        archived: false 
                    }
                ]
            }
        }); 
    }

    isArchived(id) {
        console.log(`${id} dipencet`)
        this.setState(prevState => {
            const updatedNotes = prevState.Notes.map(item => {
                if (item.id === id) {
                    return { ...item, archived: true };
                }
                return item;
            });
    
            return {
                Notes: updatedNotes
            };
        });
    }

    restoreFromArchive(id) {
        console.log(id)
        this.setState(prevState => {
            const updatedNotes = prevState.Notes.map(item => {
                if (item.id === id) {
                    return { ...item, archived: false };
                }
                return item;
            });
    
            return {
                Notes: updatedNotes
            };
        });
    }

    render() {
        // const filteredNotes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
        const archiveData = this.state.notes.filter(item => item.archived != false);
        const activeData = this.state.notes.filter(item => item.archived == false);
        // console.log(archiveData);
        // console.log(filteredNotes);
        return(
            <div className="notes-app">
                <Header/>
                <InputNotes Add={this.onAddNote}/>
                <NoteList Notes={this.state.notes} onHapus={this.onDeleteNote} onArchived={this.isArchivedNote} isArchived={archiveData} active={this.restoreNoteArchive} activeData={activeData}/>
            </div>
        );
    }
}

export default NotesApp;
