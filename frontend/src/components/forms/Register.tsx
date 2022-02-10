import {
  Dispatch, FormEvent, SetStateAction, useState,
} from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import Password from './components/Password';
import Email from './components/Email';
import Title from './components/Title';
import './form.css';
import SelectForm from './components/SelectForm';
import Name from './components/Name';
import { useRegisterMutation } from '../../auth/authApiSlice';
import SubmitBtn from './components/SubmitBtn';
import Success from './components/Success';
import CustomError from './components/CustomError';

interface IProps {
  setForm: Dispatch<SetStateAction<string>>;
}

function Register({ setForm }: IProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, {
    isSuccess, isError, error, isLoading,
  }] = useRegisterMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    register({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Title
        title="Register"
        text="register using name, e-mail and password"
      />
      <div className="form-alert-container">
        {isSuccess && <Success />}
        {isError && <CustomError error={error as FetchBaseQueryError} />}
      </div>
      <Name name={name} setName={setName} />
      <Email email={email} setEmail={setEmail} />
      <Password password={password} setPassword={setPassword} />
      {
        isLoading
          ? <SubmitBtn title="Registration..." disabled />
          : <SubmitBtn title="Register" disabled={false} />
      }
      <SelectForm
        type="Log in"
        text="Do you have a registration?"
        setForm={setForm}
      />
    </form>
  );
}

export default Register;
