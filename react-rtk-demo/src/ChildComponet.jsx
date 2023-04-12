import { useState, useCallback } from 'react';

function ChildComponent({ onChildData }) {
  const [childInput, setChildInput] = useState("");

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onChildData(childInput);
  }, [childInput, onChildData]);

  return (
    <div>
      <h2>Child Component</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={childInput} onChange={(event)=>setChildInput(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ChildComponent;
