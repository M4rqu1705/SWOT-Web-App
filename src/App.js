import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import AddEntry from './components/AddEntry.js';
import Dialog from './components/Dialog'
import { v4 as uuidv4 } from 'uuid';
import './styles/styles.scss'
// import 'drag-drop-touch'
import './scripts/dragdroptouch.js'

const LOCAL_STORAGE_KEY = "swot.app.state";

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [thrashMode, setThrashMode] = useState(false);
  const [entries, setEntries] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);

  useEffect(function () {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  function enableOverlay() {
    setShowDialog(true);
  }

  function disableOverlay() {
    setShowDialog(false);
  }

  function addNewEntry(title, category) {
    const newEntry = { title: title, category: category, id: uuidv4() };

    setEntries([...entries, newEntry]);
  }

  function handleDrop(event, category) {
    event.preventDefault();
    let entryKey = event.dataTransfer.getData("text/entryKey");

    let newEntries = entries.map(e => {
      if (e.id === entryKey) {
        e.category = category;
      }

      return e;
    });

    newEntries = newEntries.filter(e => e.category !== "thrash")
    disableThrash();
    setEntries(newEntries);
  }

  function enableThrash() {
    setThrashMode(true);
  }

  function disableThrash() {
    setThrashMode(false);
  }

  return (
    <div id="app">
      {showDialog && <Dialog disableOverlay={disableOverlay} addNewEntry={addNewEntry} />}

      <header id="app__header">SWOT Table</header>

      <Table entries={entries} handleDrop={handleDrop} enableThrash={enableThrash} disableThrash={disableThrash} />

      <AddEntry enableOverlay={enableOverlay} thrashMode={thrashMode} handleDrop={handleDrop} />
    </div>
  );
}

export default App;
