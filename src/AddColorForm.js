import React, { useState } from "react";

export default function AddColorForm({ onNewColor = (...params) => params }) {
  // const txtTitle = useRef();
  // const [title, setTitle] = useState("");
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    // let title = txtTitle.current.value;
    // alert(title);
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        // onChange={(event) => setTitle(event.target.value)}
        // value={title}
        {...titleProps}
        type="text"
        placeholder="Titulo del color: "
        required
      />
      <input
        {...colorProps}
        type="color"
        required
      />
      <button>Add</button>
    </form>
  );
}

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [
    { value, onChange: (event) => setValue(event.target.value) },
    () => setValue(initialValue),
  ];
};
