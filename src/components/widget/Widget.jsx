import React from 'react'
import "./Widget.scss"
import { EmojiEmotions, KeyboardArrowUp, OndemandVideo, Person } from '@mui/icons-material'

const Widget = ({ type }) => {
    let data;
  
    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
          data = {
            title: "Users",
            isMoney: false,
            link: "See all users",
            icon: (
              <EmojiEmotions
                className="icon"
                style={{
                  color: "crimson",
                  backgroundColor: "rgba(255, 0, 0, 0.2)",
                }}
              />
            ),
          };
          break;
        case "video":
          data = {
            title: "Video",
            isMoney: false,
            link: "View all Video",
            icon: (
              <OndemandVideo
                className="icon"
                style={{
                  backgroundColor: "rgba(218, 165, 32, 0.2)",
                  color: "goldenrod",
                }}
              />
            ),
          };
          break;
        case "viewer":
          data = {
            title: "ATHER",
            isMoney: true,
            link: "See ATHER",
            icon: (
              <Person
                className="icon"
                style={{
                  backgroundColor: "rgba(128, 0, 128, 0.2)",
                  color: "purple",
                }}
              />
            ),
          };
          break;
        default:
          break;
      }
  return (
    <div className="widget">
      <div className="first">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="second">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
