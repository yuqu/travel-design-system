import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Tag as TagComponent } from "./Tag";

export default {
  title: 'Components / Controls',
  component: TagComponent
} as ComponentMeta<typeof TagComponent>;

export const Tag = (args) => <TagComponent {...args}/>;
Tag.args = {
  children: "Title",
  selected: false
}

