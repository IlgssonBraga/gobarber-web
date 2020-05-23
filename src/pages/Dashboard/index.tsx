import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile } from './styles';
import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
    const { user, signout } = useAuth();

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <img src={logo} alt="GoBarber" />
                    <Profile>
                        <img
                            src={
                                user.avatar_url ||
                                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/240px-User_icon_2.svg.png'
                            }
                            alt={user.name}
                        />
                        <div>
                            <span>Bem vindo,</span>
                            <strong>{user.name}</strong>
                        </div>
                    </Profile>
                    <button type="button" onClick={signout}>
                        <FiPower />
                    </button>
                </HeaderContent>
            </Header>
        </Container>
    );
};

export default Dashboard;
