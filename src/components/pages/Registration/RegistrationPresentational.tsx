/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../elements/Layout';

type Props = {
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: () => void
}

export default function RegistrationPresentational(
  { setUsername, setPassword, handleSubmit }: Props,
) : JSX.Element {
  return (
    <Layout>
      <div className="h-full bg-gradient-to-tl from-green-400 to-yellow-900 w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p aria-label="Register to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
              Register to your account
            </p>
            <p className="text-sm mt-4 font-medium leading-none text-gray-500">
              Do you have an account?
              {' '}
              <Link to="/login" aria-label="Sign in here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                Sign in here
              </Link>
            </p>
            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />
              <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
              <hr className="w-full bg-gray-400  " />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">Email</label>
              <input onChange={(event) => { setUsername(event.target.value); }} aria-label="enter email adress" type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
            </div>
            <div className="mt-6  w-full">
              <label className="text-sm font-medium leading-none text-gray-800">Password</label>
              <div className="relative flex items-center justify-center">
                <input onChange={(event) => { setPassword(event.target.value); }} aria-label="enter Password" type="password" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
              </div>
            </div>
            <div className="mt-8">
              <button type="button" onClick={handleSubmit} aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 text-sm font-semibold leading-none text-white focus:outline-none bg-yellow-400 border rounded hover:bg-yellow-600 py-4 w-full">
                Create my account
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
