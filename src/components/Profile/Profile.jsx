import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={props.image}
          width={250}
          height={250}
          alt={props.name}
          className="avatar"
        />
        <p className="name">{props.name}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Follovers</span>
          <span className="value">{props.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="value">{props.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="value">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export { Profile };
