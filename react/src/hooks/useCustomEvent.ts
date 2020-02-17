import * as React from 'react';

export const useCustomEvent = (
  event: string,
  ref: React.RefObject<HTMLElement>,
  callback: React.EventHandler<any>
) => {
  return React.useEffect(() => {
    const element = ref;

    console.log(element);
    function handleCustomEvent(e: Event) {
      callback(e);
    }

    if (element.current !== null) {
      element.current.addEventListener(event, handleCustomEvent);
    }

    return () => {
      if (element.current) {
        element.current.removeEventListener(event, handleCustomEvent);
      }
    }
  });
};