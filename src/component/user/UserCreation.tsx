import React from "react";
import UserModel from "./userModel";

interface stateParam {
  user: UserModel;
}

interface props {
  onSubmit: (value: stateParam) => void;
  editableUser?: UserModel;
}

let counter = 1;

const UserCreation: React.FC<props> = ({ onSubmit, editableUser }) => {
  const [user, setUser] = React.useState(
    editableUser || { id: undefined, lastname: "", firstname: "", language: "none" }
  );

  React.useEffect(() => {
    if (editableUser) {
      setUser(editableUser);
    }
  }, [editableUser]);

  return (
    <div>
      <form onSubmit={onSubmitForm(user, onSubmit)}>
        <span>
          <label> Prénom </label>
          <input
            type="text"
            name="firstname"
            onChange={onChange(user, setUser)}
            value={user.firstname}
          ></input>{" "}
        </span>
        <span>
          {" "}
          <label> Nom </label>
          <input
            type="text"
            name="lastname"
            onChange={onChange(user, setUser)}
            value={user.lastname}
          ></input>
        </span>
        <span>
          <label> Langue </label>
          <select
            onChange={onChange(user, setUser)}
            name="language"
            value={user.language}
          >
            <option value="none"> ---- </option>
            <option value="Français"> Français </option>
            <option value="English"> English </option>
            <option value="Español"> Español </option>
            <option value="한국어"> 한국어 </option>
          </select>{" "}
        </span>
        <button type="submit" value="ok">
          {" "}
          {editableUser ? "modifier" : "ok"}{" "}
        </button>
      </form>
    </div>
  );
};

const onChange = (user, setUser) => (event) => {
  const fieldName: string = event.target.name;
  const fieldValue: string = event.target.value;
  setUser({ ...user, [fieldName]: fieldValue });
};

const onSubmitForm = (user, onSubmit) => (event) => {
  event.preventDefault();
  if (onSubmit) {
    const submitted = { user: { ...user, id: user.id || nextIndex() }};
    onSubmit( submitted);
  }
};

const nextIndex = () => counter++;

export default UserCreation;
