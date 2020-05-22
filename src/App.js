//for ui elements
import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Icons from "./component/elements/Icons";
import Toastify from "./component/elements/Toastify";
import ModalPopup from "./component/elements/ModalPopup";
import TippyComponent from "./component/elements/TippyComponent";
import CountUpComponent from "./component/elements/CountUpComponent";
import IdleTimerComponent from "./component/elements/IdleTimerComponent";
import ColorComponent from "./component/elements/ColorComponent";
import DateComponent from "./component/elements/DateComponent";
import Loading from "./component/elements/Loading";
import LineChart from "./component/elements/LineChart";
import BarChart from "./component/elements/BarChart";
import DonutChart from "./component/elements/DonutChart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <Icons />
        <IdleTimerComponent />
        <CountUpComponent />
        <Loading />
        <DateComponent />
        <ColorComponent />
        
        <TippyComponent />
        <ModalPopup />
        <Toastify />

        <DonutChart />
        <BarChart />
        <LineChart />
      </div>
    );
  }
}

export default App;
