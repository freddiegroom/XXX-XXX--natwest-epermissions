import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HashRouter as Router } from "react-router-dom";
import Condition2 from ".";

export default {
  title: "Routes/Condition2",
  component: Condition2,
} as Meta;

interface StoryProps {}

const Template: Story = () => {
  return (
    <Router>
      <Condition2 />
    </Router>
  );
};

export const Basic = Template.bind({});
