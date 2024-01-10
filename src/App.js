import "./App.css";
import Header from "./component/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./component/page/home/Home";
import Footer from "./component/footer/Footer";
import ExamDetails from "./component/page/examDetails/ExamDetails";
function App() {
  return (
    <div className="App bg-slate-100 overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exam" element={<ExamDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
