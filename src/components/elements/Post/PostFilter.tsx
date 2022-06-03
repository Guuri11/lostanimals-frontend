/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { SearchIcon, CalendarIcon } from '@heroicons/react/outline';
import { PostFilterProps } from '../../pages/AuthPage/Home/HomeContainer';

export default function PostFilter({
  register, handleSubmit, errors, onSubmit, watch,
}: PostFilterProps): JSX.Element {
  return (
    <div className="rounded border-2 p-3">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</p>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input {...register('owner')} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User..." />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <SearchIcon className="w-5 h-5 text-white dark:text-gray-400" />
            </button>
          </div>
        </div>
        <div>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Radio distance (
            {watch('radio') || 150}
            km)
          </p>
          <input {...register('radio', { min: 0, max: 150 })} id="default-range" type="range" defaultValue="150" min="0" max="300" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
        </div>
        <div>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Start date</p>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input type="date" {...register('startDate')} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
        <div>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">End date</p>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
            <input type="date" {...register('endDate')} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
        <div>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type</p>
          <div className="flex">
            <div className="flex items-center mr-4">
              <input id="type-radio-filter-found" {...register('type')} type="radio" value="FOUND" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="type-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">FOUND</label>
            </div>
            <div className="flex items-center mr-4">
              <input id="type-radio-filter-lost" {...register('type')} type="radio" value="LOST" name="type" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="type-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">LOST</label>
            </div>
          </div>
        </div>
        <div>
          <input type="submit" value="Filter" className="cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900" />
        </div>
      </form>
    </div>
  );
}
