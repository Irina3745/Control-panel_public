import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';

class Info extends Component {
    state = {};
    render() {
        return (
            <>
                <h3 className="text-light font-italic text-center">
                    Курсовой проект по теме: "Разработка одностраничного веб-приложения". Предметная область: разработка панели управления умным домом.  Панель управления умным домом предусматривает добавление устройства при помощи кнопки "ADD" с добавлением его в базу данных Firebase. 
                    Устройства также можно удалять, изменять его статус (вкл/выкл) и видеть дату его добавления.
                    Данное приложение разработано студентом гр.УТб-4301-02-00 Смольниковой Ириной Алексеевной.
                </h3>
                <div className="container slide">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://media.istockphoto.com/photos/smart-home-automation-remote-control-internet-technology-picture-id1014664366?k=6&m=1014664366&s=612x612&w=0&h=1WYia7a_DG0F3VXCyio8G3i4fkxQA9ONGo1DAQmTBo0="
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Smart Home</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://sun9-10.userapi.com/impf/XveLNzXhStaH50BGz1mIkSsYabDJTMls46hGsA/SNVRR3NSOSA.jpg?size=899x766&quality=96&proxy=1&sign=bf5452924340fea725a5948a4abea2b0&type=album"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </>
        );
    }
}

export default Info;