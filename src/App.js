import "./styles.css";
import User from "./components/User.js";

import { useState } from "react";

const users = [
  { name: "John", age: 20, hobbies: ["sports", "music"] },
  { name: "Kate", age: 30, hobbies: ["shopping", "music"] },
  { name: "Sato", age: 40, hobbies: ["anime", "manga"] }
];

export default function App() {
  const [filterVal, setFilterVal] = useState("");

  return (
    <div className="App">
      <h2>Foydalanuvchini ismi orqali topish</h2>
      <input
        type="text"
        placeholder="Ismni kiriting..."
        value={filterVal}
        onChange={(e) => {
          setFilterVal(e.target.value);
        }}
      />
      <ul>
        {users
          .filter((user) => user.name.indexOf(filterVal) !== -1)
          .map((user) => (
            <li key={user.name}>
              <User {...user} />
            </li>
          ))}
      </ul>
    </div>
  );
}
