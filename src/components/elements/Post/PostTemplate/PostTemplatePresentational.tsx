/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PostFilterProps } from './PostTemplateContainer';

export default function PostPresentational({
  register, handleSubmit, errors, onSubmit,
}:PostFilterProps): JSX.Element {
  return (
    <div className="max-w-sm bg-white relative rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <h3 className="text-center font-bold mb-3">Add a new Post</h3>
        <div>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <span className="text-red-500">
                {errors.image?.type === 'required' && 'Image required'}
              </span>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload animal image</label>
              <input {...register('image', { required: true })} className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
            </div>
            <div>
              <span className="text-red-500">
                {errors.description?.type === 'required' && 'Description required'}
                {errors.description?.type === 'max' && 'Max length is 255 characters'}
              </span>
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
              <input {...register('description', { required: true, max: 255 })} type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <span className="text-red-500">
                {errors.type?.type === 'required' && 'Type required'}
              </span>
              <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type</p>
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input id="type-radio-found" {...register('type', { required: true })} type="radio" value="FOUND" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="type-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">FOUND</label>
                </div>
                <div className="flex items-center mr-4">
                  <input id="type-radio-lost" {...register('type', { required: true })} type="radio" value="LOST" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="type-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">LOST</label>
                </div>
              </div>
            </div>
            <div>
              <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">State</p>
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input id="default-checkbox" {...register('state')} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
              </div>
            </div>
            <div>
              <input type="submit" value="Save" className="cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
