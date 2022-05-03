import React from 'react';

type Props = { children: JSX.Element }

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div>
      { children }
    </div>
  );
}
