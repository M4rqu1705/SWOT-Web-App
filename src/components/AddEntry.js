import React from 'react'

export default function AddEntry({ enableOverlay, thrashMode, handleDrop }) {
    function handleDragOver(event) {
        event.preventDefault();
    }

    return (
        <button id={thrashMode ? "RemoveEntry" : "AddEntry"} onClick={enableOverlay} onDragOver={e => handleDragOver(e)} onDrop={e => handleDrop(e, "thrash")}>
            {thrashMode ? "🗑️" : "+"}
        </button>
    )
}
