import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import NavigationBar, {NavigationBarProps} from "./NavigationBar";

export default {
  title: 'Clean Code Web/NavigationBar',
  component: NavigationBar,
  argTypes: {  },
} as Meta;

const Template: Story<NavigationBarProps> = (args) => <NavigationBar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  fixed: false,
};
