import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import axios from 'axios';
import { Breadcrumbs } from '@mui/material';
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  useFieldArray,
  UseFieldArrayRemove,
  UseFormRegister,
  FieldValues,
} from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

interface LoginForm {
  email: string;
  password: string;
}

const NameForm = (
  index: number,
  remove: UseFieldArrayRemove,
  register: UseFormRegister<FieldValues>
) => {
  return (
    <div key={index} className="py-2">
      <TextField
        label="firstName"
        key={`${index}-firstName`} // important to include key with field's id
        {...register(`test.${index}.firstName`)}
      />
      <TextField
        label="lastName"
        key={`${index}-lastName`} // important to include key with field's id
        {...register(`test.${index}.last  Name`)}
      />
      <Button variant="outlined" type="button" onClick={() => remove(index)}>
        Remove
      </Button>
    </div>
  );
};

const FormPage: NextPage = () => {
  // const { data, error } = useSWR('/api/database', axios);

  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {}
  );
  const { fields, append, prepend, remove, swap, move, insert, update } =
    useFieldArray({
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'test', // unique name for your Field Array
    });

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="flex min-h-screen flex-col items-center justify-center text-center ">
          {fields.map((field, index) => {
            return NameForm(index, remove, register);
          })}
          <div className="py-2">
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </div>

          <div className="py-2">
            <Button variant="outlined" type="button" onClick={() => append({})}>
              Add
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormPage;
