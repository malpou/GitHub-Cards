import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    const cards = this.props;
    return (
      <div>
        {cards.profiles.map(profile => (
          <Card {...profile} key={profile.id} />
        ))}
      </div>
    );
  }
}

export default CardList;
