'use client';
import Messages from './messages';
import ButtonBack from '../components/ButtonBack';
import {
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

const fieldConfigs = [
  { name: 'email', label: 'Email', defaultValue: '', type: 'text' },
  { name: 'password', label: 'Password', defaultValue: '', type: 'password' },
];
export default function Login() {
  const { control } = useForm();
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <ButtonBack />
      <form
        className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action="/auth/sign-in"
        method="post"
      >
        {fieldConfigs.map((fieldConfig) => (
          <Controller
            key={fieldConfig.name}
            name={fieldConfig.name}
            control={control}
            defaultValue={fieldConfig.defaultValue}
            render={({ field }) =>
              fieldConfig.type === 'radio' ? (
                <RadioGroup
                  {...field}
                  row
                  aria-label={fieldConfig.label}
                  className="flex gap-2 justify-center"
                ></RadioGroup>
              ) : (
                <TextField
                  {...field}
                  label={fieldConfig.label}
                  type={fieldConfig.type || 'text'}
                  fullWidth
                />
              )
            }
          />
        ))}
        <button
          className="bg-green-700 rounded px-4 py-2 text-white mb-2"
          formAction="/auth/sign-in"
        >
          Sign In
        </button>
        <button
          formAction="/auth/sign-up"
          className="border border-gray-700 rounded px-4 py-2 text-black mb-2"
        >
          Sign Up
        </button>
      </form>
      <Messages />
    </div>
  );
}
