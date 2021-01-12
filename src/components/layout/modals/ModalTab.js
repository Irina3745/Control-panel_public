import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export class ModalTab extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Освещение
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        Автоматизированная Система Управления Освещением (АСУО) построена по иерархическому принципу и представляет собой трёхуровневую структуру.
                    <div> «Нижний уровень» представлен несколькими группами светильников - внутреннее освещение и внешнее освещение, а также локальной автоматикой в виде датчиков промышленного исполнения, совмещающих в себе следующие функции: определение уровня освещённости на высотах до 5 метров от 0 до 1000 Люкс; определение комбинированного уровня освещённости - сочетание естественного и искусственного освещения; установка задержки времени срабатывания датчика на включение / выключение системы; интеллектуальное определение краткосрочных изменений естественного освещения; возможность регулирования светового потока светильников в пределах от 10 до 100%; инфракрасное определение движения / присутствия человека; включение / выключение системы освещения в автономном режиме. </div>
                        <div>«Средний уровень» представляет собой средства автоматизации, смонтированное в Шкафу Пункта Включения системы освещения: коммутационное оборудование; счётчик электроэнергии с цифровым интерфейсом; контроллерное оборудование. Контроллерное оборудование состоит из свободно программируемого промышленного контроллера и модулей ввода/вывода унифицированных сигналов. </div>
                        <div>«Верхний уровень» включает в себя систему визуализации данных, которая строится на базе ПО, установленного компьютера офисного или промышленного исполнения. Программное обеспечение «верхнего уровня» представлено SCADA/HMI системой со следующими функциями: архивирование рабочих / предоставляемых данных; предоставление оперативному персоналу удобного человеко-машинного интерфейса; контроль состояния и диспетчерского управления системой освещения; анализ накопленных архивных данных; обеспечения формирования отчетной документации.</div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>

        )
    }
}