import { useState,useCallback } from "react";
import ChildComponent from "./ChildComponet";

function ParentComponent() {
  const [childData, setChildData] = useState("");

  const handleChildData = useCallback((data) => {
    setChildData(data);
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onChildData={handleChildData} />
      <p>Child Data: {childData}</p>
    </div>
  );
}

export default ParentComponent;
