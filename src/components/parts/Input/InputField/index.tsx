import React, { useCallback, useRef } from 'react';

import { Icon } from '@/components/parts/Image/Icon';

import { styles } from './styles';

type InputProps = Pick<
  React.ComponentProps<'input'>,
  'placeholder' | 'onSubmit'
>;

type Props = InputProps;

export const InputField: React.FC<Props> = ({
  placeholder = 'search',
  onSubmit,
}) => {
  const inputRef = useRef<React.ElementRef<'input'>>(null);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          onSubmit?.(e);
        }
      },
      [onSubmit]
    );

  const handleClear = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, []);

  return (
    <form css={styles.formContainer}>
      <div css={styles.inputWrapper}>
        <Icon pattern="SEARCH" size="s" stroke="pumice" />
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button css={styles.deleteBtn} type="button" onClick={handleClear}>
        <Icon pattern="X" size="s" stroke="pumice" />
      </button>
    </form>
  );
};
