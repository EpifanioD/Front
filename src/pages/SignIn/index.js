import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatoria'),
});

export default function SignIn() {
    const dispath = useDispatch();

    function handleSubmit({ email, password }) {
        dispath(signInRequest(email, password));
    }

    return (
        <>
          <img src={logo} alt="" />

          <Form  schema={schema} onSubmit={handleSubmit}>
              <Input name="email" type="email" placeholder="Seu E-mail" />
              <Input name="password" type="password" placeholder="Sua senha completa" />

              <button type="submit">Acessar</button>
              <Link to="/register">Criar conta gratuita</Link>
          </Form>
        </>
    );
}
