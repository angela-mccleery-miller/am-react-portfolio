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

    const { id, name, description, thumb_image_url, logo_url } = props.item

  // console.log(props.title);

  // State
  // Lifecycle hooks

  return (
    <div className="portfolio-item-wrapper">
        <div
          className="portfolio-img-background"
          style={{
            backgroundImage: "url(" + thumb_image_url + ")"
          }}
        />


      <div className="img-text-wrapper">
        <div className="logo-wrapper">
          <img src={logo_url} />
        </div>

        <div className="subtitle">{description}</div>
        </div>

      </div>
  );
}