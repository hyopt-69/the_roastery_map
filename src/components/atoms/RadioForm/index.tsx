import React, { SetStateAction, useId } from 'react';

import { Label } from '@/components/atoms/Label';

import { styles } from './styles';

export type RadioItemType<T> = {
  label: string;
  value: T;
};

type FieldSetProps = Pick<
  React.ComponentProps<'fieldset'>,
  'name' | 'disabled'
>;

type Props<T> = {
  items: RadioItemType<T>[];
  selectedValue: T;
  setSelectedValue: React.Dispatch<SetStateAction<T>>;
} & FieldSetProps;
export const RadioForm = <T extends string>({
  items,
  name,
  disabled,
  selectedValue,
  setSelectedValue,
}: Props<T>): JSX.Element => {
  const fieldId = useId();

  return (
    <fieldset css={styles.container} name={name} disabled={disabled}>
      {items.map(({ value, label }) => {
        const itemId = `${fieldId}_${value}`;
        const isChecked = selectedValue === value;

        return (
          <label htmlFor={itemId} css={styles.radioItem}>
            <input
              id={itemId}
              type="radio"
              value={value}
              name={name}
              checked={isChecked}
              onChange={() => setSelectedValue(value)}
            />
            <Label size="xxs" color={isChecked ? 'white' : 'mirage'}>
              {label}
            </Label>
          </label>
        );
      })}
    </fieldset>
  );
};
