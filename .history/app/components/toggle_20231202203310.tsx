import React from "react";

const Toggle = () => {
  return (
    <div className="join join-vertical">
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="Pastel"
        value="pastel"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="Retro"
        value="retro"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="Cyberpunk"
        value="cyberpunk"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="Dark"
        value="dark"
      />
      <input
        type="radio"
        name="theme-buttons"
        className="btn theme-controller join-item"
        aria-label="Aqua"
        value="aqua"
      />
    </div>
  );
};

export default Toggle;
