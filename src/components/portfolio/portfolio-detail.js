import React, { Component } from "react";
import axios from "axios";


banner_image_url: "https://devcamp-space.s3.amazonaws.com/nEGVrBiz9WsqdJW94Aav5xVh?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20filename%2A%3DUTF-8%27%27crondose.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200430%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200430T041606Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=c39bd823dd3603e1583e3dc3542f2c91de3fbc32427af987d4f1061bce5a9ad4"
category: "Enterprise"
column_names_merged_with_images: (9) ["id", "name", "description", "url", "category", "position", "thumb_image", "banner_image", "logo"]
description: "You daily Dev Guides."
id: 16358
logo_url: "https://devcamp-space.s3.amazonaws.com/xTyrm4GyeTeMEdcG674NDY7G?response-content-disposition=inline%3B%20filename%3D%22crondose.png%22%3B%20filename%2A%3DUTF-8%27%27crondose.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200430%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200430T041606Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=f9b834506fa89be7e40b3f734dbefe3d12dd875eb310221ebbf533239282c1e4"
name: "Crondose"
position: 1
thumb_image_url: "https://devcamp-space.s3.amazonaws.com/Gbxmrd1MdpsRKYqWee8CZjVf?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20filename%2A%3DUTF-8%27%27crondose.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEHZJNHM5JFESRRQ%2F20200430%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200430T041606Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=33a07197269f8c33e1ac35a073afcbf87b7a1f3ec0beca9f7125420927d6cc83"
url: "https://www.crondose.com"


export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state={
            portfolioItem: {}
        }
    }

    componentWillMount() {
        this.getPortfolioItem();
    }

    getPortfolioItem() {
        axios
        .get(`https://angelamiller.devcamp.space/portfolio/portfolio_items/${
            this.props.match.params.slug
        }`,
        { withCredentials: true }
        )
        .then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item
            })       })
        .catch(error => {
            console.log("getportfolioitem error", error);
        });
    }

    render() {
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
                } = this.state.portfolioItem;


        const bannerStyles = {
            backgroundImage: "url(" + banner_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        }

        const logoStyles = {
            width: "200px"
        }

        return (

            <div className="portfolio-detail-wrapper">
                <div className="banner" style={bannerStyles}>
                   <img src={logo_url} style={logoStyles} /> 
                </div>
               
               <div className="portfolio-detail-description-wrapper">
                   <div className="description">{description}</div>
               </div>

               <div className="bottom-content-wrapper">
                   <a href={url} className="site-link" target="_blank">
                       Visit {name}
                   </a>
               </div>
            </div>
    );
  }
}