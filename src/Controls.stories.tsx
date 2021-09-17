import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Tag as TagComponent } from "./Tag";
import { Stepper as StepperComponent } from "./Stepper";

export default {
  title: 'Components / Controls'
};

export const Tag = (args) => <TagComponent {...args}/>;
Tag.args = {
  children: "Title",
  selected: false
}

export const Stepper = (args) => <StepperComponent {...args}/>;
Stepper.args = {
  children: "Title"
}

