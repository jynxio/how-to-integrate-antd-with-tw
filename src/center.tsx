import type React from 'react';

function Center({ children }: React.PropsWithChildren) {
  return (
    <div className="fixed inset-0 m-auto w-[calc(100dvw-24px)] h-[calc(100dvh-24px)] max-w-[100px] max-h-[100px] -translate-6">
      {children}
    </div>
  );
}

export { Center };
