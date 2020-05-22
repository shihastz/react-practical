import React from "react";
import { SketchPicker } from "react-color";

class ColorComponent extends React.Component {
  state = {
    background: "#fff",
    status : false
  };

  handleChangeComplete = (color) => {
    let show_picker = !this.state.status
    this.setState({ background: color.hex, status : show_picker});
  };
  showPickerPopup = (prev) => {
    //   let show_picker = !this.state.status
    //   this.setState({
    //     status : show_picker
    //   })
    this.setState((prev, props) => ({ status: !prev.status }));
  }

  render() {
    return (
      <div>
          <button onClick={this.showPickerPopup}>Show Picker</button>
          {
              this.state.status ? <SketchPicker
              color={this.state.background}
              onChangeComplete={this.handleChangeComplete}
            /> : null
          }
        
        <h3> you selected color = {this.state.background}</h3>
      </div>
    );
  }
}
export default ColorComponent;
