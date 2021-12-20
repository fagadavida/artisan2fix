// If this helps, don't forget to upvote so others see this.

// install the following dependencies with npm in terminal for this to work.
// npm i react-signature-canvas
// npm i react-signature-pad

import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";

export default function MySignaturePad() {
  let padRef = useRef({});

  function handleClear() {
    //var data = signaturePad.toDataURL("image/png");
    console.log(padRef);
    //padRef.current.clear();
  }

  return (
    <div>
      <SignaturePad ref={padRef} backgroundColor="#F4F4F4" />
      <button
        onClick={() => {
          handleClear();
        }}
      >
        Clear
      </button>
    </div>
  );
}
