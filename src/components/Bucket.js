import React from 'react';
import Entry from './Entry';

export default function Bucket({ title, background, content, category, handleDrop, enableThrash, disableThrash }) {

    function handleDragOver(event) {
        event.preventDefault();
    }

    // Should represent each of the draggable slots for each entry
    return (
        <div className="Bucket" style={{ backgroundColor: background }} onDragOver={e => handleDragOver(e)} onDrop={e => handleDrop(e, category)}>
            <h2>{title}</h2>
            <hr />

            <div className="Bucket__content">
                {content.map(entry => (
                    <Entry key={entry.id} entryKey={entry.id} title={entry.title} enableThrash={enableThrash} disableThrash={disableThrash} />
                ))}
            </div>
            <hr />
            <p className="Bucket__footer">{content.length} entr{content.length === 1 ? "y" : "ies"}</p>

        </div>
    )
}
