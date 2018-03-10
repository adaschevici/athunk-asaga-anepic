import React from 'react';
import { Slide, Text, Image } from 'spectacle';

import preloader from "spectacle/lib/utils/preloader";

const images = {
  me: require('../../../assets/angularcamp17_170_crop.jpg'),
  twitter: require('../../../assets/Twitter-xxl.png'),
};

preloader(images);

const avatarStyle = {
  borderRadius: "18.750em"
};

const twitterBoxStyle = {
  display: "flex",
  flexDirection: "column",
  height: "25.000em",
  width: "21.875em",
  paddingLeft: "35%"
};

const twitterStyle = {
  borderRadius: "18.750em",
	marginLeft: "30%",
};

const twitterHandleStyle = {
  marginTop: "-32px",
	fontSize: "3.750em",
	fontFamily: "Monaco",
};

export default (
  <Slide transition={["slide", "spin"]} transitionDuration={1000} bgColor="primary" id="profile">
    <div style={{ display: "flex", flexDirection: "row", height: "25.000em", width: "21.875em" }}>
      <Image
        src={images.me.replace("/", "")}
        margin="0px auto 40px"
        style={avatarStyle}
      />
      <div style={twitterBoxStyle}>
        <Image
          src={images.twitter.replace("/", "")}
          margin="0px auto 40px"
          style={twitterStyle}
        />
        <Text size={1} textColor="secondary" style={twitterHandleStyle}>@_arturdas</Text>
      </div>
    </div>
  </Slide>
);
