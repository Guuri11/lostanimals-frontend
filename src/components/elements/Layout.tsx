import React from 'react';
import Navbar from './Navbar/Navbar';

type Props = { children: JSX.Element }

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="container px-4 mx-auto">
        { children }
      </div>
    </>
  );
}
