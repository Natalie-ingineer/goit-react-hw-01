import clsx from "clsx";

import "../FriendListItem/FriendListItem.css";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusClasses = clsx("status", {
    "is-active": isOnline,
    "is-retired": !isOnline,
  });

  return (
    <div className="item">
      <img className="avatar" src={avatar} alt={name} width="100" />
      <p className="name">{name}</p>
      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export { FriendListItem };
