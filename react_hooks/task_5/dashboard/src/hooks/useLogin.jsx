import { useState, useCallback } from 'react';

export default function useLogin(onLogin) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const handleChangeEmail = useCallback((e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEnableSubmit(validateEmail(newEmail) && password.length >= 8);
  }, [password]);

  const handleChangePassword = useCallback((e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setEnableSubmit(validateEmail(email) && newPassword.length >= 8);
  }, [email]);

  const handleLoginSubmit = useCallback((e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(email, password);
    }
  }, [onLogin, email, password]);

  return {
    email,
    password,
    enableSubmit,
    handleChangeEmail,
    handleChangePassword,
    handleLoginSubmit
  };
}
