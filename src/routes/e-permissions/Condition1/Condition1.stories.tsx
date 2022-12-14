import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition1 from ".";

export default {
  title: "Routes/Condition1",
  component: Condition1,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition1 />
    </Router>
  );
};

export const Basic = Template.bind({});
