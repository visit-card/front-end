import React from 'react';

import {Bar, BarCard, BarLogo, ChartContainer, CardTitle, CardText, ExperienceChartContainer, BarText} from './style';

import CPlusPlusIcon from '../../../../../images/icons/colored/c-plus-plus.svg';
import CSharpIcon from '../../../../../images/icons/colored/c-sharp.svg';
import KotlinIcon from '../../../../../images/icons/colored/kotlin.svg';
import ReactIcon from '../../../../../images/icons/colored/react.svg';

const ExperienceChart = () => {

    const experienceArray = [
        {
            name: 'Песочница',
            description: 'Проект песочница - детская песочница с проектором, датчиком глубины и одноплатником. ' +
                '\nЗадача: разработка игр для детей с использованием данных от датчика глубины. ' +
                '\nТехнологии: C++, Qt, OpenCV, OpenGL, Git',
            date: '05-2016',
            logo: <CPlusPlusIcon />,
        },
        {
            name: 'Картомат',
            description: 'Устройство для хранения, учета и выдачи банковских карт. ' +
                '\nЗадача: разработать ПО для в 2х вариантах. Пользовательский - заказ новой карты, замена старой. ' +
                'Бизнес - хранение карт, выдача по необходимости и полный учет выданных/бракованных/загруженных карт.' +
                '\nТехнологии: C#, Prism, EntityFramework, WPF',
            date: '08-2017',
            logo: <CSharpIcon />,
        },
        {
            name: 'IP-Камера',
            description: 'Проект IP-Камера - небольшое устройство с 2мя камерами, микрофоном и одноплатником на борту.' +
                '\nЗадача: разработка ПО для склейки видео с двух камер и наложение звуковой дорожки с микрофона. Обеспечение хранения, трансляции и доступа через вэб-интерфейс.' +
                '\nТехнологии: С++, Qt, GStreamer, ReactJS, HTML, CSS, JavaScript, RTSP, RTCP',
            date: '08-2019',
            logo: <CPlusPlusIcon />,
        },
        {
            name: 'TimeFlip',
            description: '10ти гранник для отслеживания времени потраченного на выполнение задачи. Одна задача - одна грань.' +
                '\nЗадача: разработка мобильного приложения для удобного взаимодействия с устройством, а так же серверного ПО, необходимого для хранения пользовательский данных и вэб интерфейса.' +
                '\nТехнологии: Kotlin, Spring Boot, PostgreSQL, Flyway, Jooq, ReactJS, HTML, CSS, Firebase, LiveData, Koin',
            date: '02-2020',
            logo: <KotlinIcon />,
        },
        {
            name: 'IP-Камера',
            description: 'Проект IP-Камера - небольшое устройство с 2мя камерами, микрофоном и одноплатником на борту.' +
                '\nЗадача: доработать ПО, заменив протокол онлайн трансляции RTSP на WebRTC' +
                '\nТехнологии: С++, Qt, QtGStreamer, ReactJS, HTML, CSS, JavaScript, RTCP, WebRTC, Janus Gateway',
            date: '04-2020',
            logo: <CPlusPlusIcon />,
        },
        {
            name: 'Сервис медицина',
            description: 'Вэб сервис для проведения врачебных комиссий, диагностики и лечения сотрудников МВД РФ' +
                '\nЗадача: разработка серверного ПО и вэб интерфейса' +
                '\nТехнологии: Kotlin, Spring Boot, PostgreSQL, Hibernate, Liquibase, Vue.js, TypeScript, HTML, LESS, TSyringe, Ant design',
            date: '05-2020',
            logo: <KotlinIcon />,
        },
        {
            name: 'ПРАНА',
            description: 'Система прогностики и удаленного мониторинга' +
                '\nЗадача: доработка вэб интерфейса' +
                '\nТехнологии: ReactJS, Redux, TypeScript, StyledComponents, Webpack',
            date: '08-2020',
            logo: <ReactIcon />,
        },
        {
            name: 'The Bot',
            description: 'Телеграмм бот - агрегатор фриланс бирж' +
                '\nЗадача: доработать бота, а именно - организовать парсинг данных с бирж фриланса, организовать интерфейс настроек и оплаты' +
                '\nТехнологии: Kotlin, Spring Boot, Flyway, Jooq, PostgreSQL, Redis, Camunda BPM',
            date: '07-2021',
            logo: <KotlinIcon />,
        },
        {
            name: 'ЦКМ',
            description: 'Устройство с пирометром, алкометром и одноплатником на борту, а также с возможностью подключить внешний тонометр, датчик температуры и принтер.' +
                '\nЗадача: разработать ПО для считывания данных с подключенных устройств, обеспечение проведения этапов диагностики пациента, а также хранение данных, обновление ПО и т.д.' +
                '\nТехнологии: Kotlin, JavaFX, Koin, Exposed, Liquibase, HikariCP',
            date: '02-2022',
            logo: <KotlinIcon />,
        }
    ]

    return <ExperienceChartContainer>
        <ChartContainer>
            {
                experienceArray.map((item, index) =>
                    <Bar key={index} >
                        <BarLogo>{ item.logo }</BarLogo>
                        <BarText>{ item.date }</BarText>
                        <BarCard>
                            <CardTitle>
                                { item.name }
                            </CardTitle>
                            <CardText>
                                { item.description }
                            </CardText>
                        </BarCard>
                    </Bar>
                )
            }
        </ChartContainer>
    </ExperienceChartContainer>
};

export default ExperienceChart;