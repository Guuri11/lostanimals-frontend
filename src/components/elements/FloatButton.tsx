import React from 'react';
import { PlusIcon, MenuIcon } from '@heroicons/react/outline';

export default function FloatButton(): JSX.Element {
  return (
    <div className="floating-container">
      <div className="floating-button">
        <MenuIcon className="p-4">Add Post</MenuIcon>
      </div>
      <div className="element-container">
        <span className="float-element cursor-pointer">
          <PlusIcon className="p-2">Add Post</PlusIcon>
        </span>
      </div>
    </div>
  );
}
