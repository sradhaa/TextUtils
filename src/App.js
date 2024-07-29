import { useState } from "react";
import "./App.css";
//import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";
import Alert from "./componenets/Alert";

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const toggleMode = (c) => {
    let checkboxes = document.querySelectorAll(
      '.form-check-input[type="checkbox"]'
    );

    checkboxes.forEach((checkbox) => {
      checkbox.disabled = !checkbox.classList.contains(`form-check-input-${c}`);
    });

    if (mode === "light" && c === "black") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      document.title = "TextUtil Darkmode";

      // showAlert("Dark mode enabled", "success");
    } else if (mode === "light" && c === "red") {
      setMode("danger");
      document.body.style.backgroundColor = "#7d0117";
      document.body.style.color = "white";
      // showAlert("Red mode enabled", "success");
    } else if (mode === "light" && c === "yellow") {
      setMode("warning");
      document.body.style.backgroundColor = "lightyellow";

      //showAlert("Yellow mode enabled", "success");
    } else if (mode === "light" && c === "blue") {
      setMode("primary");
      document.body.style.backgroundColor = "lightblue";
      // showAlert("Yellow mode enabled", "success");
    } else if (mode === "light" && c === "green") {
      setMode("success");
      document.body.style.backgroundColor = "lightgreen";
      // showAlert("Yellow mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      checkboxes.forEach(function (checkbox) {
        checkbox.disabled = false;
      });
      // showAlert("Light mode enabled", "success");
    }
  };
  return (
    // <Router>
    //   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    //   <Alert alert={alert} />
    //   <div className="container">
    //     <Routes>
    //       <Route
    //         exact
    //         path="/"
    //         element={
    //           <TextForm
    //             heading="Enter the text to analyze below"
    //             mode={mode}
    //             showAlert={showAlert}
    //           />
    //         }
    //       />
    //       <Route exact path="/about" element={<About mode={mode} />} />
    //     </Routes>
    //   </div>
    // </Router>

    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter the text to analyze below..."
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
