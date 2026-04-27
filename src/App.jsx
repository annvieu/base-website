import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main/main";
import { AboutPage } from "./pages/about-article/about-acticle";
import { LessonsPage } from "./pages/lessons/lessons";
import { StudiosPage } from "./pages/studios/studios";
import { TrendsPage } from "./pages/trends/trends";
import { LessonPage } from "./pages/lesson-page/lesson-page";
import { BotPage } from "./pages/bot/bot-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/lessons" element={<LessonsPage />}></Route>
        <Route path="/studios" element={<StudiosPage />}></Route>
        <Route path="/trends" element={<TrendsPage />}></Route>
        <Route path="/lesson" element={<LessonPage />}></Route>
        <Route path="/bot" element={<BotPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
