import React from "react";

const sampleJson = `{
  "user": {
    "name": "Alice",
    "address": { "city": "Wonderland", "zip": "12345" },
    "items": [
      { "id": 1, "name": "Item A" },
      { "id": 2, "name": "Item B" }
    ]
  }
}`;

function JsonInput({ value, onChange, onClick, onClear, error }) {
  return (
    <div className="json-input">
      <div>
        <textarea
          rows={10}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={sampleJson}
        />
      </div>

      <div className="vis-clear">
        <button className="visualize-btn" onClick={onClick}>Visualize</button>
        <button className="clear-btn" onClick={onClear} style={{ marginLeft: '1em' }}>Clear</button>
      </div>

      {error && <div className="error">{error}</div>}
    </div>
  );
}


export default JsonInput;
