import React, { useRef } from 'react'

export default function Dialog({ disableOverlay, addNewEntry }) {
    const titleRef = useRef("");
    const categoryRef = useRef("");

    // Used to lift title and category refs up
    function addEntry() {
        const title = titleRef.current.value;
        const category = categoryRef.current.value;

        addNewEntry(title, category);
        disableOverlay();
    }

    function handleKey(event) { event.key === "Enter" && addEntry(); }

    return (
        <div id="Dialog">
            <div id="Dialog__overlay">
                <input ref={titleRef} id="Dialog__overlay__title" type="text" placeholder="Entry" onKeyUp={handleKey} autoFocus />
                <select ref={categoryRef} name="categories" id="Dialog__overlay__categories">
                    <option value="strengths">Strengths</option>
                    <option value="opportunities">Opportunities</option>
                    <option value="weaknesses">Weaknesses</option>
                    <option value="threats">Threats</option>
                </select>

                <div id="Dialog__overlay__action">
                    <button id="Dialog__overlay__action__add" onClick={addEntry}>Add</button>
                    <button id="Dialog__overlay__action__cancel" onClick={disableOverlay}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
