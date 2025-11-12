import React, { useState } from 'react';

export default function Hello({ list }) {

  const [selectedDept, setSelectedDept] = useState("all");


  if (list == null) {
    return <h1>No data to display</h1>;
  }

  const people = Object.values(list);

  const IT = people.filter((x) => x.profession.toLowerCase() === "it");
  const civil = people.filter((x) => x.profession.toLowerCase() === "civil");
  const mech = people.filter((x) => x.profession.toLowerCase() === "mech");

  const getFilteredPeople = () => {
    switch (selectedDept) {
      case "it": return IT;
      case "civil": return civil;
      case "mech": return mech;
      default: return people;
    }
  };

  const filteredPeople = getFilteredPeople();

  return (
    <>
      <h1>Hi, welcome to React course</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="dept-select">Select Department: </label>
        <select
          id="dept-select"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          <option value="all">All</option>
          <option value="it">IT</option>
          <option value="civil">Civil</option>
          <option value="mech">Mech</option>
        </select>
      </div>

      <div className="filtercontent">
        <h2>Department Counts</h2>
        <ul>
          <li>IT: {IT.length}</li>
          <li>Civil: {civil.length}</li>
          <li>Mech: {mech.length}</li>
        </ul>
      </div>

      <div className="filtered-list">
        <h2>
          Showing: {selectedDept === "all" ? "All Departments" : selectedDept.toUpperCase()}
        </h2>
        <ul>
          {filteredPeople.map((person) => (
            <li key={`${person.id}-${person.name}`}>
              {person.id} — {person.name} — {person.profession}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
