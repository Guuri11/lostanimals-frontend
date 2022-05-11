import React, { useState } from 'react';
import {
  useForm, SubmitHandler, UseFormRegister, UseFormHandleSubmit, FieldError, UseFormWatch,
} from 'react-hook-form';
import { useAppContext } from '../../../../hooks/AppContext';
import AuthPage from '../../AuthPage';
import HomePresentational from './HomePresentational';

export type PostFilterInputs = {
  owner: string,
  radio: number,
  startDate: string,
  endDate: string,
  type: string,
};

export type PostFilterProps = {
  register: UseFormRegister<PostFilterInputs>,
  handleSubmit: UseFormHandleSubmit<PostFilterInputs>
  errors: {
    owner?: FieldError | undefined;
    radio?: FieldError | undefined;
    startDate?: FieldError | undefined;
    endDate?: FieldError | undefined;
    type?: FieldError | undefined;
  },
  onSubmit: SubmitHandler<PostFilterInputs>,
  watch: UseFormWatch<PostFilterInputs>
}

export default function Home() : JSX.Element {
  const { token } = useAppContext();

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<PostFilterInputs>();
  const onSubmit: SubmitHandler<PostFilterInputs> = (data) => {
    console.log(data);
  };

  return (
    <AuthPage>
      <HomePresentational
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
        watch={watch}
      />
    </AuthPage>
  );
}
