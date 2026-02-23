import React, { useEffect, useState } from "react";
import { api, getPeople } from "../../api/api";

export default function PeopleList() {
  const [people, setPeople] = useState([]);

  const fetchPeople = async () => {
    try {
      const response = await getPeople();
      setPeople(response);
    } catch (error) {
      console.error("Error fetching people:", error);
    }
  };

  useEffect(() => {
    fetchPeople();
  }, []);
  return (
    <div>
      <h1>People List</h1>
      <button onClick={fetchPeople}>Fetch People</button>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} - {person.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
