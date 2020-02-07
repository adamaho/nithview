import * as React from 'react';

export const useCustomEvent = (
  event: string,
  ref: React.RefObject<HTMLElement>,
  callback: React.EventHandler<any>
) => {
  return React.useEffect(() => {
    const foo = ref;
    function handleCustomEvent(e: Event) {
      callback(e);
    }

    if (foo.current !== null) {
      foo.current.addEventListener('tabChange', handleCustomEvent);
    }

    return () => {
      if (foo.current) {
        foo.current.removeEventListener('tabChange', handleCustomEvent);
      }
    }
  });
};