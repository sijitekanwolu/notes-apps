import React from "react";

class InputNotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            description: "",
            count: 50
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onAddChange = this.onAddChange.bind(this);
    }

    onDescriptionChange(event) {
        this.setState(() => {
            return {
                description: event.target.value
            };
        });
    }

    onTitleChange(event){
        const maxLength = 50
        this.setState(() => {
            return {
                title: event.target.value.substr(0,maxLength),
                count: event.target.value.length > 50 ? 0 : maxLength - event.target.value.length
            };
        });
    }

    onAddChange(event) {
        this.setState(() => {
            event.preventDefault();
            this.props.Add(this.state);
            (this.state.title = ""), (this.state.description = "");
        });
    }

    render() {
        return (
          <section className="section-input-notes">
            <div className="form-input-notes">
              <h2>Input Note</h2>
              <p>Tersisa karakter: {this.state.count}</p>
              <form action="" className="form-notes" onSubmit={this.onAddChange}>
                <input type="text" name="title" id="title-notes" placeholder="Masukan Judul" className="input-notes" value={this.state.title} onChange={this.onTitleChange} onKeyDown={this.characterCount}/>
                <textarea id="desc-notes" className="desc-notes" cols="30" rows="10" placeholder="Masukan Description Notes" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
                <button type="submit" className="submit-notes">Tambah Notes</button>
              </form>
            </div>
          </section>
        );
      }
}
export default InputNotes;