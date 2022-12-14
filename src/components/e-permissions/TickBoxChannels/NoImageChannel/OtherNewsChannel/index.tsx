import React, { useState, FC } from "react";
import {
  Channel,
  ChannelText,
  ChannelWrapper,
  ClickBox,
  ClickedBox,
} from "../NoImageChannel.styles";
import tickedCheckbox from "images/tick-checkbox.png";
import checkbox from "images/checkbox.png";
import { useDispatch } from "react-redux";
import { tickOtherNews, unTickOtherNews } from "redux/PrivacyPermissionsSlice";

const OtherNewsChannel: FC = () => {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked && (
        <ChannelWrapper>
          <Channel
            onClick={(e) => {
              e.preventDefault();
              dispatch(tickOtherNews());
              setClicked(true);
            }}
          >
            <ClickBox>
              <img src={checkbox} alt=""></img>
            </ClickBox>
            <ChannelText>
              <p>Other NatWest group news and offers</p>
            </ChannelText>
          </Channel>
        </ChannelWrapper>
      )}
      {clicked && (
        <ChannelWrapper>
          <Channel
            onClick={(e) => {
              e.preventDefault();
              dispatch(unTickOtherNews());
              setClicked(false);
            }}
          >
            <ClickedBox>
              <img src={tickedCheckbox} alt=""></img>
            </ClickedBox>
            <ChannelText>
              <p>Other NatWest group news and offers</p>
            </ChannelText>
          </Channel>
        </ChannelWrapper>
      )}
    </>
  );
};

export default OtherNewsChannel;
