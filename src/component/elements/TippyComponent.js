import React, {forwardRef} from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ColoredTippy = () => {
  return <span style={{ color: "red" }}>kdhgugg <button>sgs</button></span>;
};

const CustomChild = forwardRef((props,ref) => {
    return(
        <div ref={ref}>
            <div>First Line</div>
        </div>
    )
})

export default function TippyComponent() {
  return (
    <div>
      <Tippy content="Basic Tippy" position="bottom" arrow={false} delay={1000}>
        <button>Tippy</button>
      </Tippy>
      <div>
      <Tippy content={<ColoredTippy/>} position="top" trigger="click">
      <button>Custom Tippy</button>
      </Tippy>
      </div>
      <div style={{marginTop: "20px"}}>
      <Tippy content={<ColoredTippy/>} position="bottom">
        <CustomChild/>
      </Tippy>
      </div>
    </div>
  );
}
