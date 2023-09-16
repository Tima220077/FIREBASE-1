import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const [newname, setName] = useState("");
  const [newage, setAge] = useState(0);
  const userRef = collection(db, "users");
  useEffect(() => {
    async function getUser() {
      const data = await getDocs(userRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getUser();
  }, []);

  async function getNewUser() {
    await addDoc(userRef, { name: newname, age: Number(newage) });
  }
  async function getNewAge(id, age) {
    const place = doc(db, "users", id);
    const newG = { age: age + 1 };
    await updateDoc(place, newG);
  }
  async function deleteUser(id) {
    const place = doc(db, "users", id);
    await deleteDoc(place);
  }
  return (
    <div>
      <input
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="Age"
        onChange={(event) => setAge(event.target.value)}
      />
      <button onClick={getNewUser}>SAVE</button>

      {users.map((user) => {
        return (
          <>
            <h3 className="hhh">Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <button onClick={() => getNewAge(user.id, user.age)}>
              INCREASE AGE
            </button>
            <button onClick={() => deleteUser(user.id)}>DELETE</button>
          </>
        );
      })}
    </div>
  );
}

export default App;
