import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MateriCURD from "./materi-CRUD/index.js";
import MateriRestRouter from "./materi-REST-ROUTER";
import MateriRedux from "./materi-Redux";

function App() {
  return <MateriCURD />;
}

export default App;
