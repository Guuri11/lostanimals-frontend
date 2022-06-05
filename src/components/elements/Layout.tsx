import React from 'react';
import Alert from './Alert/Alert';
import Navbar from './Navbar/Navbar';

type Props = { children: JSX.Element }

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Navbar />
      <Alert />
      <div className="container px-4 mx-auto">
        { children }
      </div>
    </>
  );
}
