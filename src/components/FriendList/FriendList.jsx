import css "./FriendList.module.css"
import { FriendListItem } from "../FriendListItem/FriendListItem"

const FriendList = (props) => {
    return (
        <ul className="friend-list">
	{/* Кількість li залежить від кількості об'єктів в масиві */}
	<li>
		<FriendListItem />
	</li>
</ul>
    )
}

export {FriendList}