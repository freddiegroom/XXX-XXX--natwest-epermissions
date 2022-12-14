import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import NextButton from "components/e-permissions/Buttons/NextButton";
import ContentContainer from "components/e-permissions/ContentContainer";
import ExperimentContainer from "components/e-permissions/ExperimentContainer";
import Footer from "components/e-permissions/Footer";
import Header from "components/e-permissions/Header";
import {
  BoldText,
  HeadingText,
  SmallPaddingDiv,
} from "components/e-permissions/Text/Text.style";
import TTEmailChannel from "components/e-permissions/TickBoxChannels/TwoTickChannel/TTEmailChannel";
import TTPostChannel from "components/e-permissions/TickBoxChannels/TwoTickChannel/TTPostChannel";
import TTTelephoneChannel from "components/e-permissions/TickBoxChannels/TwoTickChannel/TTTelephoneChannel";
import TTTextMessageChannel from "components/e-permissions/TickBoxChannels/TwoTickChannel/TTTextMessageChannel";
import { DesktopYesNoContainer } from "components/e-permissions/TickBoxChannels/TwoTickChannel/TwoTickChannel.styles";
import { usePageDuration } from "hooks/usePageDuration";
import cupSaucer from "images/cup-saucer.png";
import { pickRandomFunc } from "../../../../utils/pickRandomFunc";
import {
  saveEmail,
  savePost,
  saveTelephone,
  saveTextMessage,
} from "../../../../redux/MarketingPreferencesSlice";

const Scenario9: FC = () => {
  const stopPageTiming = usePageDuration("marketing-preferences-9");

  const dispatch = useDispatch();
  let initialTextMessage = useMemo(() => pickRandomFunc(15), []);
  let initialEmail = useMemo(() => pickRandomFunc(20), []);
  let initialTelephone = useMemo(() => pickRandomFunc(60), []);
  let initialPost = useMemo(() => pickRandomFunc(60), []);

  useEffect(() => {
    dispatch(saveTextMessage(initialTextMessage));
    dispatch(saveEmail(initialEmail));
    dispatch(saveTelephone(initialTelephone));
    dispatch(savePost(initialPost));
  }, [
    dispatch,
    initialEmail,
    initialPost,
    initialTelephone,
    initialTextMessage,
  ]);

  const [textClick, setTextClick] = useState(initialTextMessage);
  const [emailClick, setEmailClick] = useState(initialEmail);
  const [telephoneClick, setTelephoneClick] = useState(initialTelephone);
  const [postClick, setPostClick] = useState(initialPost);
  return (
    <ExperimentContainer>
      <Header image={cupSaucer}>News and offers</Header>
      <ContentContainer>
        <SmallPaddingDiv />
        <HeadingText>
          Please review your existing preferences and choose if you are{" "}
          <BoldText>happy</BoldText> for us to send you information about
          products, services and offers by:
        </HeadingText>
        <DesktopYesNoContainer>
          <p>YES</p>
          <p>NO</p>
        </DesktopYesNoContainer>
        <TTTextMessageChannel state={textClick} setState={setTextClick} />
        <TTEmailChannel state={emailClick} setState={setEmailClick} />
        <TTTelephoneChannel
          state={telephoneClick}
          setState={setTelephoneClick}
        />
        <TTPostChannel state={postClick} setState={setPostClick} />

        <NextButton
          routeAddress="/PrivacyPermissions"
          pageTimeFunc={stopPageTiming}
        />
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};

export default Scenario9;
