import React from 'react';
import { ModalTab } from '../layout/modals/ModalTab';
import { ModalTab2 } from '../layout/modals/ModalTab2';
import { ModalTab3 } from '../layout/modals/ModalTab3';
import { ModalTab4 } from '../layout/modals/ModalTab4';
import { Button } from 'react-bootstrap';

function Settings() {
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);

    return (
        <>
        <h3 className="text-light font-italic text-center" > Данный раздел содержит подробную информацию о подключении устройств в панель управления.</h3>
            <Button variant="primary" className="btn btn-primary btn-lg btn-block" onClick={() => setModalShow1(true)}>
                Освещение
            </Button>

            <ModalTab
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />

            <Button variant="primary" className="btn btn-secondary btn-lg btn-block" onClick={() => setModalShow2(true)}>
                Температура
            </Button>

            <ModalTab2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />

            <Button variant="primary" className="btn btn-primary btn-lg btn-block" onClick={() => setModalShow3(true)}>
                Влажность
            </Button>

            <ModalTab3
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />

            <Button variant="primary" className="btn btn-secondary btn-lg btn-block" onClick={() => setModalShow4(true)}>
                Музыка
            </Button>

            <ModalTab4
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
        </>
    );
}

export default Settings;