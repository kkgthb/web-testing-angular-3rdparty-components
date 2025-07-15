import type { Meta, StoryObj } from '@storybook/angular';
import { MiscellaneousExampleComponent } from './miscellaneous-example.component';

const meta: Meta<MiscellaneousExampleComponent> = {
  title: 'Component Library/Miscellaneous Example',
  component: MiscellaneousExampleComponent,
};
export default meta;

type Story = StoryObj<MiscellaneousExampleComponent>;

export const story_001: Story = {
  name: 'Story 001',
  args: {
    title: 'Hi',
    subtitle: 'world',
  },
};