import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition7 from ".";

export default {
  title: "Routes/Condition7",
  component: Condition7,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition7 />
    </Router>
  );
};

export const Basic = Template.bind({});
