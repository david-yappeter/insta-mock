import React from "react";
import Avatar from "../components/Avatar";

const Aside = () => {
  const suggestions = [
    {
      username: "notwatermango",
      subtitle: "Followed by ai.jfcjaya + 4 more",
      image: "https://picsum.photos/51/51",
    },
    {
      username: "diacheng",
      subtitle: "New to instagram",
      image: "https://picsum.photos/52/52",
    },
    {
      username: "jonathank",
      subtitle: "Followed by no_huang + 5 more",
      image: "https://picsum.photos/53/53",
    },
    {
      username: "jiman_oh",
      subtitle: "Followed by no_huang + 5 more",
      image: "https://picsum.photos/54/54",
    },
    {
      username: "gwatemala",
      subtitle: "Followed by no_huang + 5 more",
      image: null,
    },
  ];

  return (
    <div id="_aside-container">
      {/* Our Contact */}
      <div className="_aside-main-contact">
        <Avatar
          className="_aside-avatar"
          src="https://picsum.photos/50/50"
          alt=""
          size="56px"
        />
        <div className="_aside-contact-detail">
          <p>davidy__</p>
          <p>David Yappeter</p>
        </div>
        <p className="_aside-button text-custom-blue">Switch</p>
      </div>

      {/* Suggestions */}
      <div className="_suggestion-header-container">
        <p>Suggestions For you</p>
        <p className="_aside-button text-custom-black-light">See All</p>
      </div>
      {suggestions.map((item, idx) => (
        <div key={idx} className="_aside-main-contact">
          <Avatar
            className="_aside-avatar"
            src={
              item.image
                ? item.image
                : "https://st4.depositphotos.com/11634452/21365/v/600/depositphotos_213659488-stock-illustration-picture-profile-icon-human-or.jpg"
            }
            alt=""
            size="32px"
          />
          <div className="_aside-contact-detail">
            <p>{item.username}</p>
            <p>{item.subtitle}</p>
          </div>
          <p className="_aside-button text-custom-blue">Switch</p>
        </div>
      ))}
    </div>
  );
};

export default Aside;
