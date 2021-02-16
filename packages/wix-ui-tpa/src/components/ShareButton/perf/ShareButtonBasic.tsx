import * as React from 'react';
import { ShareButton } from '../';

export const ShareButtonExtended = () => {
  return (
    <ShareButton
      withIcon
      shareData={{
        title: 'Share title',
        url: 'https://wix.com',
      }}
      onClick={() => {}}
      text="Share"
    />
  );
};
