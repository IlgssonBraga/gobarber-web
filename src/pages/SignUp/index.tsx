import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <img src={logo} alt="GoBarber" />
            <form>
                <h1>Faça seu cadastro</h1>

                <Input name="nome" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="E-mail" />
                <Input
                    name="password"
                    icon={FiLock}
                    type="password"
                    placeholder="Senha"
                />
                <Button type="submit">Cadastrar</Button>
            </form>
            <a href="a">
                <FiArrowLeft /> Voltar para logon
            </a>
        </Content>
    </Container>
);

export default SignIn;
