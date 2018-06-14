import React from "react";
import ClassNames from "classnames";
import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      disliked: false,
      initLike: 0,
      initDislike: 0
    }

    this.onLikeClick = this.onLikeClick.bind(this);
    this.onDisLikeClick = this.onDisLikeClick.bind(this);

  }

  onLikeClick() {
    if(!this.state.disliked) {
      this.setState({
        liked: !this.state.liked
      });
    }else {
      this.setState({
        liked: true,
        disliked: false
      });
    }
  }

   onDisLikeClick() {
    if(!this.state.liked) {
      this.setState({
        disliked: !this.state.disliked
      });
    }else {
      this.setState({
        liked: false,
        disliked: true
      });
    }
  }

  render() {
    const classLikeButton = ClassNames({
      "like-button": true,
      "liked": this.state.liked
    });

    const classDisLikeButton = ClassNames({
      "dislike-button": true,
      "disliked": this.state.disliked
    })

    console.log(this.state);
    console.log(classLikeButton)
    console.log(classDisLikeButton)

    return (
      <div>
        <span className={classLikeButton}
        onClick={this.onLikeClick}>
          Like |
          <span className="likes-counter">
            {this.state.liked ? this.state.initLike+1 : this.state.initLike}
          </span>
        </span>
        <span className={classDisLikeButton}
        onClick={this.onDisLikeClick}>
          Dislike |
          <span className="dislikes-counter">
            {this.state.disliked ? this.state.initDislike+1 : this.state.initDislike}
          </span>
        </span>
      </div>  
    );
  }

}

export default Button;