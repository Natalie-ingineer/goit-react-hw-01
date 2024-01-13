import css "./FriendListItem.module.css"

const FriendListItem = (props) => {
    return (
        <div className="item">
  <img className="avatar" src="" alt="Avatar" width="48" />
  <p className="name">Friend name</p>
  <p className="status">Friend status</p>
</div>
    )
}

export {FriendListItem}