import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Settings />} />
        <Route path="/question" exact element={<Questions />} />
        <Route path="/score" exact element={<FinalScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
