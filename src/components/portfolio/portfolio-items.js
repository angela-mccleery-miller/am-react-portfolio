import React from 'react';
import { Link } from "react-router-dom";

export default function(props) {
// Data that we'll need:
    // - background image: thumb_image_url
    // - logo
    // - description: description
    // - id: id
    // - in inspect console: Object.key(item)
    // - "position", "thumb_image_url", "banner_image_url:"

    const { id, name, description, thumb_image_url, logo } = props.item

  // console.log(props.title);

  // State
  // Lifecycle hooks

  return (
    <div>
    <img src={thumb_image_url} />
    <img src={logo} />
        <h3>{name}</h3>
        <div>{description}</div>
        <Link to={`/portfolio/${id}`}>Link</Link>
    
    </div>
  );
}