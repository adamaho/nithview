import * as React from 'react';

export const useCustomEvent = (
  event: string,
  ref: React.RefObject<HTMLElement>,
  callback?: React.EventHandler<any>
) => {

  if (callback == null) {
    return;
  }

  return React.useEffect(() => {
    const element = ref;
    function handleCustomEvent(e: Event) {
      if (callback) {
        callback(e);
      }
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