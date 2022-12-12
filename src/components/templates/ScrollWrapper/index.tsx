import React from 'react';

import { ActionButton } from '@/components/atoms/ActionButton';

import { useScrollWrapper } from './hooks';
import { getStyles } from './styles';

type Props = {
  children: React.ReactNode[];
};

export const ScrollWrapper: React.FC<Props> = ({ children }) => {
  const {
    wrapperRef,
    isVisibleBackButton,
    isVisibleNextButton,
    getItemRef,
    scrollToStart,
    scrollToEnd,
    handleDisplayButtons,
  } = useScrollWrapper();

  const {
    container,
    listWrapper,
    getNextButtonWrapperStyle,
    getBackButtonWrapperStyle,
  } = getStyles();

  return (
    <div css={container}>
      <div css={getBackButtonWrapperStyle(isVisibleBackButton)}>
        <ActionButton pattern="back" size="s" onClick={scrollToStart} />
      </div>
      <ul ref={wrapperRef} css={listWrapper} onScroll={handleDisplayButtons}>
        {children.map((child, index) => (
          <li
            key={index}
            ref={getItemRef({
              isFirst: index === 0,
              isLast: index === children.length - 1,
            })}
          >
            {child}
          </li>
        ))}
      </ul>
      <div css={getNextButtonWrapperStyle(isVisibleNextButton)}>
        <ActionButton pattern="next" size="s" onClick={scrollToEnd} />
      </div>
    </div>
  );
};
