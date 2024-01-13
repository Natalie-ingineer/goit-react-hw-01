import clsx from "clsx";

import css from "../FriendListItem/FriendListItem.module.css";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  const statusClasses = clsx("status", {
    "is-active": isOnline,
    "is-retired": !isOnline,
  });

  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} width="100" />
      <p className={css.name}>{name}</p>
      <p className={statusClasses}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export { FriendListItem };
