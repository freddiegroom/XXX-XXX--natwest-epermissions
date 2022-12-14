import React, { FC, useState } from "react";
import FakeNextButton from "components/e-permissions/Buttons/FakeNextButton";
import NextButton from "components/e-permissions/Buttons/NextButton";
import ContentContainer from "components/e-permissions/ContentContainer";
import ExperimentContainer from "components/e-permissions/ExperimentContainer";
import Footer from "components/e-permissions/Footer";
import Header from "components/e-permissions/Header";
import {
  HeadingText,
  RedText,
  SmallPaddingDiv,
} from "components/e-permissions/Text/Text.style";
import TTEmailChannel from "components/e-permissions/TickBoxChannels/TwoTickChannel/TTEmailChannel";
import TTPostChannel from "components/e-permissions/TickBoxChannels/TwoTickChannel/TTPostChannel";
import TTTelephoneChannel from "components/e-permissions/TickBoxChannels/TwoTickChannel/TTTelephoneChannel";
import TTTextMessageChannel from "components/e-permissions/TickBoxChannels/TwoTickChannel/TTTextMessageChannel";
import { DesktopYesNoContainer } from "components/e-permissions/TickBoxChannels/TwoTickChannel/TwoTickChannel.styles";
import { usePageDuration } from "hooks/usePageDuration";
import cupSaucer from "images/cup-saucer.png";

const Scenario5: FC = () => {
  const stopPageTiming = usePageDuration("marketing-preferences-5");

  const [textClick, setTextClick] = useState(3);
  const [emailClick, setEmailClick] = useState(3);
  const [telephoneClick, setTelephoneClick] = useState(3);
  const [postClick, setPostClick] = useState(3);
  const [fillMessage, setFillMessage] = useState("");
  return (
    <ExperimentContainer>
      <Header image={cupSaucer}>News and offers</Header>
      <ContentContainer>
        <p>
          We'd like to keep you informed about NatWest products, services and
          offers we think may be helpful to you. We won’t bombard you and we’ll
          never share your details with other NatWest group companies or third
          parties for marketing purposes without your permission.
        </p>
        <SmallPaddingDiv />

        <HeadingText>Are you happy for us to contact you by:</HeadingText>
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
        {!(
          textClick !== 3 &&
          emailClick !== 3 &&
          telephoneClick !== 3 &&
          postClick !== 3
        ) && (
          <>
            {fillMessage && (
              <RedText>Please make your choices to continue</RedText>
            )}
            <FakeNextButton setState={setFillMessage}>
              scroll to top
            </FakeNextButton>
          </>
        )}

        {textClick !== 3 &&
          emailClick !== 3 &&
          telephoneClick !== 3 &&
          postClick !== 3 && (
            <NextButton
              routeAddress={"/PrivacyPermissions"}
              pageTimeFunc={stopPageTiming}
            />
          )}
      </ContentContainer>
      <Footer />
    </ExperimentContainer>
  );
};
export default Scenario5;
