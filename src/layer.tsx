import type { ConfigProviderProps } from 'antd';
import type React from 'react';

import { App, ConfigProvider } from 'antd';

type Props = React.PropsWithChildren<{
  token: NonNullable<NonNullable<ConfigProviderProps['theme']>['token']>;
}>;

function Layer({ token, children }: Props) {
  return (
    <ConfigProvider theme={{ cssVar: true, hashed: false, token }}>
      <App className="w-full h-full m-3 rounded-sm border border-dashed border-colorBorder bg-colorBgBase bg-clip-content">
        {children}
      </App>
    </ConfigProvider>
  );
}

export { Layer };
