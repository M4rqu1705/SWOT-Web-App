import React from 'react'

export default function Entry({ entryKey, title, enableThrash, disableThrash }) {
    function handleDragStart(event) {
        // event.preventDefault();
        event.dataTransfer.setData("text/entryKey", entryKey);
        enableThrash();
    }

    function handleDragEnd(event) {
        disableThrash();
    }
    // Represents every entry that is added and removed from each category
    return (
        <div className="Bucket__content__entry" draggable onDragStart={e => handleDragStart(e)} onDragEnd={e => handleDragEnd(e)}>
            {title}
        </div>
    )
}
