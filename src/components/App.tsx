import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Gallery from "./gallery/gallery";
import Album from "./album/album";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h2>Brainscape App Coding Exercise</h2>
        <p>Photo Album Generator by Alex O.</p>
      </header>
      <DndProvider backend={HTML5Backend}>
        <div className="main">
          <section className="album-section">
            <Album />
          </section>
          <section className="gallery-section">
            <Gallery />
          </section>
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
