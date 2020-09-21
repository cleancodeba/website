import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import InformationSection, {InformationSectionProps} from "./InformationSection";
import MeetupImage from '../../public/meetup.jpg';

export default {
  title: 'Clean Code Web/Sections/InformationSection',
  component: InformationSection,
  argTypes: {  },
} as Meta;

const Template: Story<InformationSectionProps> = (args) => <InformationSection {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  image: MeetupImage,
  title: "Events",
  description: "Hacemos eventos buenisimos",
  buttonTitle: "Enter!",
  link: "https://www.cleancodeba.org"
};

export const Right = Template.bind({});
Right.args = {
  image: MeetupImage,
  title: "Events",
  description: "Hacemos eventos buenisimos",
  buttonTitle: "Enter!",
  link: "https://www.cleancodeba.org",
  right: true
};
