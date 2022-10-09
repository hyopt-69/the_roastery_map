import { css } from '@emotion/react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import React, { useState } from 'react';

import { RadioForm, RadioItemType } from '@/components/parts/RadioForm';

export default {
  component: RadioForm,
} as ComponentMeta<typeof RadioForm>;

type Roast = 'dark' | 'medium' | 'light';

const radioItems: RadioItemType<Roast>[] = [
  { label: '深煎り', value: 'dark' },
  { label: '中煎り', value: 'medium' },
  { label: '浅煎り', value: 'light' },
];

type StoryProps = Omit<
  React.ComponentProps<typeof RadioForm>,
  'selectedValue' | 'onChange' | 'items'
>;

const Story: React.FC<StoryProps> = ({ ...args }) => {
  const [value, setValue] = useState<Roast>('light');
  return (
    <RadioForm<Roast>
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
