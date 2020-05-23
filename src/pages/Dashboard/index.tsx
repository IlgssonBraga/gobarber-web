import React, { useState, useCallback } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';
import 'react-day-picker/lib/style.css';
import DayPicker, { DayModifiers } from 'react-day-picker';
import {
    Container,
    Header,
    HeaderContent,
    Profile,
    Content,
    Schedule,
    Calendar,
    NextAppointment,
    Section,
    Appointment,
} from './styles';
import logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { user, signout } = useAuth();

    const handleDateChange = useCallback(
        (day: Date, modifiers: DayModifiers) => {
            if (modifiers.available) {
                setSelectedDate(day);
            }
        },
        [],
    );

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

            <Content>
                <Schedule>
                    <h1>Horários agendados</h1>
                    <p>
                        <span>Hoje</span>
                        <span>Dia 06</span>
                        <span>Segunda-feira</span>
                    </p>

                    <NextAppointment>
                        <strong>Atendimento a seguir</strong>
                        <div>
                            <img
                                src="https://avatars1.githubusercontent.com/u/34402902?s=460&u=0b51d72036ccfea1d253ff5e9bbf3cc063d3d2ea&v=4"
                                alt="Ilgsson"
                            />
                            <strong>Ilgsson Braga</strong>
                            <span>
                                <FiClock />
                                08:00
                            </span>
                        </div>
                    </NextAppointment>

                    <Section>
                        <strong>Manhã</strong>

                        <Appointment>
                            <span>
                                <FiClock />
                                08:00
                            </span>

                            <div>
                                <img
                                    src="https://avatars1.githubusercontent.com/u/34402902?s=460&u=0b51d72036ccfea1d253ff5e9bbf3cc063d3d2ea&v=4"
                                    alt="Ilgsson"
                                />
                                <strong>Ilgsson Braga</strong>
                            </div>
                        </Appointment>

                        <Appointment>
                            <span>
                                <FiClock />
                                08:00
                            </span>

                            <div>
                                <img
                                    src="https://avatars1.githubusercontent.com/u/34402902?s=460&u=0b51d72036ccfea1d253ff5e9bbf3cc063d3d2ea&v=4"
                                    alt="Ilgsson"
                                />
                                <strong>Ilgsson Braga</strong>
                            </div>
                        </Appointment>
                    </Section>

                    <Section>
                        <strong>Tarde</strong>

                        <Appointment>
                            <span>
                                <FiClock />
                                08:00
                            </span>

                            <div>
                                <img
                                    src="https://avatars1.githubusercontent.com/u/34402902?s=460&u=0b51d72036ccfea1d253ff5e9bbf3cc063d3d2ea&v=4"
                                    alt="Ilgsson"
                                />
                                <strong>Ilgsson Braga</strong>
                            </div>
                        </Appointment>
                    </Section>
                </Schedule>
                <Calendar>
                    <DayPicker
                        weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
                        fromMonth={new Date()}
                        disabledDays={[{ daysOfWeek: [0, 6] }]}
                        modifiers={{
                            available: { daysOfWeek: [1, 2, 3, 4, 5] },
                        }}
                        selectedDays={selectedDate}
                        onDayClick={handleDateChange}
                        months={[
                            'Janeiro',
                            'Fevereiro',
                            'Março',
                            'Abril',
                            'Maio',
                            'Junho',
                            'Julho',
                            'Agosto',
                            'Setembro',
                            'Outubro',
                            'Novembro',
                            'Dezembro',
                        ]}
                    />
                </Calendar>
            </Content>
        </Container>
    );
};

export default Dashboard;
