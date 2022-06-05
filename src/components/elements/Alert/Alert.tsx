import React, { useEffect, useState } from 'react';
import { Alert } from 'flowbite-react';
import { useAppContext } from '../../../hooks/AppContext';

export default function AlertMissage(): JSX.Element | null {
  const { alertText, alertColor, handleAlert } = useAppContext();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (alertText && alertColor) {
      setShow(true);
    }
  }, [alertText, alertColor]);

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => {
        setShow(false);
        if (handleAlert) {
          handleAlert('', 'blue');
        }
      }, 4000);
      return () => {
        clearTimeout(timeout);
      };
    }
    return undefined;
  }, [handleAlert, show]);

  return (
    show && alertText && alertColor ? (
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1/2">
        <Alert
          color={alertColor}
          rounded
          // eslint-disable-next-line react/jsx-no-bind
          onDismiss={() => setShow(false)}
        >
          <span>
            {alertText}
          </span>
        </Alert>
      </div>
    ) : null
  );
}
