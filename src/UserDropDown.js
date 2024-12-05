import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import SearchBar from "./SearchBar";
import "./styles.css";

export default function UserDropDown() {
  const [userResponse, setUserResponse] = useState([]);
  const [info, setInfo] = useState([]);
  const [selectedOption, setSelectedOption] = useState(1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((fetcheddata) => setUserResponse(fetcheddata))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedOption}`)
      .then((response) => response.json())
      .then((fetcheddata) => setInfo(fetcheddata))
      .catch((error) => console.error("Error fetching posts:", error));
  }, [selectedOption]);

  return (
    <div className="container">
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <FaRegUser className="fa-user" />
        <h2>Select a User</h2>
      </div>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {userResponse.map((user) => (
          <option value={user.id}>{user.username}</option>
        ))}
      </select>
      <div>
        <SearchBar data={info} />
      </div>
    </div>
  );
}
