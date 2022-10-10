import React, { useCallback, useRef } from 'react';

import { Icon } from '@/components/parts/Icon';

import { styles } from './styles';

type InputProps = Pick<
  React.ComponentProps<'input'>,
  'placeholder' | 'onSubmit'
>;

type Props = InputProps;

export const SearchForm: React.FC<Props> = ({
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
    <fieldset css={styles.formContainer} name="search">
      <div css={styles.inputWrapper}>
        <Icon pattern="SEARCH" size="s" fill="pumice" />
        <input
          ref={inputRef}
          name="search"
          type="text"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        css={styles.deleteBtn}
        name="search"
        type="button"
        onClick={handleClear}
      >
        <Icon pattern="X" size="s" fill="pumice" />
      </button>
    </fieldset>
  );
};
