import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export class ModalTab4 extends Component {
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
                        Музыка
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        Панель управления аудиосистемой (ACP) является частью системы связи для использования различной аудиосвязи и приёма звуковых сигналов.
                        Эти панели подключены к блокам управления звуком через последовательные шины ARINC 429.
                        <div>
                            Чтобы использовать данную систему в Панели управления, вам необходимо сначала её настроить.
                        </div>

                        <div>
                            Это работает следующим образом:
                            Перейдите в Настройки Панели управления.
                            Нажмите зеленую кнопку со знаком плюса рядом с надписью «Распознавание музыки», чтобы добавить кнопку.
                            При необходимости переместите его в желаемое место, перетащив кнопку через три линии.
                        </div>
                        <div>
                            <img src="https://image.shutterstock.com/image-vector/vector-illustration-music-songs-playlist-260nw-1535959064.jpg" alt=""></img>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}