import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MiscellaneousExampleComponent } from './miscellaneous-example.component';
import { MatButtonModule } from '@angular/material/button';

const meta: Meta<MiscellaneousExampleComponent> = {
  title: 'Component Library/Miscellaneous Example',
  component: MiscellaneousExampleComponent,
  // decorators: [
  //   moduleMetadata({
  //     declarations: [],
  //     imports: [MatButtonModule],
  //   }),
  // ],
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