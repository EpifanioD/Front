import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    name: Yup.string()
    .required('Insira o Nome do usuário'),
    email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatoria'),
});


export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
          <img src={logo} alt="" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome Completo" />
                <Input name="email" type="email" placeholder="Seu E-mail" />
                <Input name="password" type="password" placeholder="Sua senha completa" />

                <button type="submit">Criar conta</button>
                <Link to="/">Já possuo cadastro</Link>
             </Form>
        </>
    );
}
