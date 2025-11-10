import { Route, Routes } from "react-router-dom";

  import Homepage from "./pages/HomePage.jsx"; 
  import Createpage from "./pages/CreatePage.jsx";
   import NoteDetailpage from "./pages/NoteDetailPage.jsx";
   import "./index.css";
   const App = () => {
     return (
        <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/create" element={<Createpage />} />
    <Route path="/note/:id" element={<NoteDetailpage />} />
  </Routes>
</div>
);
 };
  export default App;
