import React from "react";

const NotesItemBody = ({Notes}) => {
    const getDate = new Date(Notes.createdAt);
    const date = getDate.getDate();
    const getHari = getDate.getDay();
    const getBulan = getDate.getMonth();
    const tahun = getDate.getFullYear();
    const namaHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'];
    const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const hari = namaHari[getHari];
    const bulan = namaBulan[getBulan]
    return (
        <div className="card-body">
            <h3 className="card-title">{Notes.title}</h3>
            <p className="card-date">{hari}, {date} {bulan} {tahun}</p>
            <p className="card-desc">{Notes.body}</p>
        </div>
    )
}
export default NotesItemBody