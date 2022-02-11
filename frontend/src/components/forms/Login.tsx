import {
  Dispatch, FormEvent, SetStateAction, useState,
} from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useNavigate } from 'react-router-dom';
import Password from './components/Password';
import Email from './components/Email';
import Title from './components/Title';
import './form.css';
import SelectForm from './components/SelectForm';
import { useLoginMutation } from '../../auth/authApiSlice';
import Success from './components/Success';
import CustomError from './components/CustomError';
import SubmitBtn from './components/SubmitBtn';
import { setUser } from '../../auth/authSlice';
import { useAppDispatch } from '../../app/store';

interface IProps {
  setForm: Dispatch<SetStateAction<string>>;
}

function LogIn({ setForm }: IProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, {
    data, isSuccess, isError, error, isLoading,
  }] = useLoginMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    login({ email, password });

    setEmail('');
    setPassword('');
  };

  if (isSuccess && data) {
    const {
      userId, name, token, refreshToken,
    } = data;
    dispatch(setUser({
      userId, name, token, refreshToken,
    }));

    setTimeout(() => navigate('/'), 2000);

    Object.entries(data).forEach(([key, value]) => {
      if (key === 'message') return;
      localStorage.setItem(key, value);
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Title
        title="Log in"
        text="Log in using e-mail and password provided during registration"
      />
      <div className="form-alert-container">
        {isSuccess && <Success />}
        {isError && <CustomError error={error as FetchBaseQueryError} />}
      </div>
      <Email email={email} setEmail={setEmail} />
      <Password password={password} setPassword={setPassword} />
      {
        isLoading
          ? <SubmitBtn title="Logging..." disabled />
          : <SubmitBtn title="Log in" disabled={false} />
      }
      <SelectForm
        type="Register"
        text="Do not have a registration?"
        setForm={setForm}
      />
    </form>
  );
}

export default LogIn;
