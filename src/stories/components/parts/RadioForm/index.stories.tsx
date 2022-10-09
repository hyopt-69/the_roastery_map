import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { RadioForm, RadioItemType } from '@/components/parts/RadioForm';

export default {
  component: RadioForm,
} as ComponentMeta<typeof RadioForm>;

type Test = 'test1' | 'test2' | 'test3';

const radioItems: RadioItemType<Test>[] = [
  { label: 'TEST 1', value: 'test1' },
  { label: 'TEST 2', value: 'test2' },
  { label: 'TEST 3', value: 'test3' },
];

type StoryProps = Omit<
  React.ComponentProps<typeof RadioForm>,
  'selectedValue' | 'onChange' | 'items'
>;

const Story: React.FC<StoryProps> = ({ ...args }) => {
  const [value, setValue] = useState<Test>('test1');
  return (
    <RadioForm<Test>
      {...args}
      items={radioItems}
      selectedValue={value}
      setSelectedValue={setValue}
    />
  );
};
export const Index: ComponentStoryObj<typeof RadioForm> = {
  args: {
    disabled: false,
  },
  render: (args) => <Story {...args} />,
};
