function User({ UserData }) {
  return (
    <span className="user">
      <span className="name"> {UserData.name} </span>
      <span className="handle">@ {UserData.handle}</span>
    </span>
  );
}

export default User;
