import React from "react";
import './HierarchyString.css';

const nestedObject = {
  id: "UDSMDHIS2LB",
  name: "UDSM DHIS2 Lab",
  parent: {
    id: "CSE12345678",
    name: "CSE",
    parent: {
      id: "CoICT78767",
      name: "CoICT",
      parent: {
        id: "UDSM1234567",
        name: "UDSM"
      }
    }
  }
};

const getHierarchyString = (obj) => {
  if (obj.parent) {
    return obj.name + "/" + getHierarchyString(obj.parent);
  } else {
    return obj.name;
  }
};

const HierarchyString = () => {
  const hierarchyString = getHierarchyString(nestedObject);

  return (
    <div className="hierarchy-container">
      <h1>Hierarchy String</h1>
      <p>{hierarchyString}</p>
    </div>
  );
};

export default HierarchyString;
