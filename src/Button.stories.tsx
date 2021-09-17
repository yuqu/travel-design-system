import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Components / Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Title',
  disabled: false
};
Primary.parameters = {
  zeplinLink: [{
    name: "default",
    link: "https://app.zeplin.io/styleguide/5cd486b18a64c1414be004fb/components?coid=60011c4a56703a633cbc654c"
  }, {
    name: "pressed",
    link: "https://app.zeplin.io/styleguide/5cd486b18a64c1414be004fb/components?coid=60011c49ad918108c5fc0a4e"
  }, {
    name: "disabled",
    link: "https://app.zeplin.io/styleguide/5cd486b18a64c1414be004fb/components?coid=60011c4a671662023330f736"
  }]
}

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};
