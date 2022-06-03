import React from 'react';
import { PlusIcon, MenuIcon } from '@heroicons/react/outline';

type Props = {
  handleAddPost: () => void
}

export default function FloatButton({ handleAddPost }: Props): JSX.Element {
  return (
    <div className="floating-container">
      <div className="floating-button">
        <MenuIcon className="p-4">Add Post</MenuIcon>
      </div>
      <div className="element-container">
        <button type="button" onClick={handleAddPost} className="float-element">
          <PlusIcon className="p-2">Add Post</PlusIcon>
        </button>
      </div>
    </div>
  );
}
