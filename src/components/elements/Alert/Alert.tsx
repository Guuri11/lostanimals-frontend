import React, { useEffect, useState } from 'react';
import { Alert } from 'flowbite-react';
import { useAppContext } from '../../../hooks/AppContext';

export default function AlertMissage(): JSX.Element | null {
  const { alertText, alertColor } = useAppContext();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (alertText && alertColor) {
      setShow(true);
    }
  }, [alertText, alertColor]);

  return (
    show ? (
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
