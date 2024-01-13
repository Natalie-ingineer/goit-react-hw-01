import "../FriendList/FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export { FriendList };
