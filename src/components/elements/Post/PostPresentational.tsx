/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Modal } from 'flowbite-react';
import React from 'react';
import { HOST } from '../../../utils/constants/host';
import { PostType } from '../../../utils/types/post';
import { PostFilterProps } from './Post';

type Props = {
  post: PostType,
  isOwner: boolean,
  editView: boolean,
  handleEditView: () => void,
  handleDelete: () => void,
  showDeleteModal: boolean,
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PostPresentational({
  post, isOwner, editView, handleEditView, handleDelete, register, handleSubmit, onSubmit,
  showDeleteModal, setShowDeleteModal,
}:PostFilterProps & Props): JSX.Element {
  return (
    <>
      <div className="max-w-sm h-fit bg-white relative rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className={`absolute right-3 px-4 rounded top-3 text-white ${post.type === 'LOST' ? 'bg-red-600' : 'bg-green'}`}>{post.type}</div>
        <img className="rounded-t-lg w-full" src={`${HOST}/images/media_object/${post.imageUrl}`} alt="" />
        <div className="p-5">
          {
          editView ? (
            <div>
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                  <input {...register('description')} type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={post.description} />
                </div>
                <div>
                  <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type</p>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input id="type-radio-found" {...register('type')} type="radio" value="FOUND" defaultChecked={post.type === 'FOUND'} name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="type-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">FOUND</label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input id="type-radio-lost" {...register('type')} type="radio" value="LOST" defaultChecked={post.type === 'LOST'} name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="type-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">LOST</label>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State</p>
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input id="default-checkbox" {...register('state')} type="checkbox" defaultChecked={post.state} className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                  </div>
                </div>
                <div>
                  <input type="submit" value="Save" className="cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" />
                </div>
              </form>
            </div>
          )
            : (
              <>
                <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 w-100">{post.description}</p>
                <p>{post.owner.username}</p>
                <p className="text-xs">{post.created_at}</p>
                <p className="text-xs">{`${post.latitude}, ${post.longitude}`}</p>
                <p className="text-xs">{post.state ? 'State: 1' : 'State: 0'}</p>
              </>
            )
          }

          {
          isOwner && (
            <div className="mt-2 flex justify-end space-x-2">
              <button type="button" onClick={handleEditView} className="text-white bg-yellow-400 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                Edit
              </button>
              <button type="button" onClick={() => setShowDeleteModal(true)} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Delete
              </button>
            </div>
          )
        }
        </div>
      </div>
      <Modal
        show={showDeleteModal}
        size="md"
        popup
        onClose={() => setShowDeleteModal(false)}
      >
        <Modal.Header />
        <Modal.Body className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this product?
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              color="red"
              onClick={handleDelete}
            >
              Yes, I am sure
            </Button>
            <Button
              color="alternative"
              onClick={() => setShowDeleteModal(false)}
            >
              No, cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
