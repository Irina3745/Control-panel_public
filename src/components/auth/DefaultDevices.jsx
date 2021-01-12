import React from 'react';

const DefaultDevices = () => {
    return (
        <>
            <h3 className="header text-warning text-center">DEFAULT DEVICES</h3>
            <div className="card-group dashboard-container">
                <div className="card border-primary mb-3" style={{ width: "9rem" }}>
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8uFxrUDGCZiNyYZYx8LS0Ul2eIMJ-e-FuQ&usqp=CAU" alt="" ></img>
                    <div className="card-body text-primary justify-content-between">
                        <h5 className="card-title text-center text-dark">Освещение</h5>
                        <p className="card-text text-center">Превратите любой свет в интеллектуальный свет и интеллектуально управляйте такими интеллектуальными осветительными приборами, как Philips Hue, LIFX, Lutron и другими. Данная система управляет осветительными приборами, которые работают в зависимости от действий человека: уход из дома, возвращение домой и др.</p>
                        <p className="card-text"><small className="text-dark">Последнее обновление 3 месяца назад</small></p>
                        <a href="/defaultdevices/manage-lights" className="btn btn-primary">Управлять</a>
                    </div>
                </div>


                <div className="card border-primary mb-3" style={{ width: "9rem" }}>
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvPyZoH-JFIH39VrwNDhwcv62wxWedI6tjw&usqp=CAU" alt="" ></img>
                    <div className="card-body text-primary">
                        <h5 className="card-title text-center text-dark">Температура</h5>
                        <p className="card-text text-center">Устанавливайте температуру в доме с помощью специальных термостатов от любого устройства панели управления. Умный датчик температуры устанавливается в зонах, где необходимо управлять климатом. Вы можете контролировать температуру со смартфона и получать уведомления в случае резкого снижения или повышения температуры.</p>
                        <p className="card-text"><small className="text-dark">Последнее обновление 2 недели назад</small></p>
                        <a href="/defaultdevices/manage-temp" className="btn btn-primary">Управлять</a>
                    </div>
                </div>

                <div className="card border-primary mb-3" style={{ width: "9rem" }}>
                    <img className="card-img-top" src="https://media.istockphoto.com/vectors/humidity-icon-vector-id1277328164?b=1&k=6&m=1277328164&s=612x612&w=0&h=_iEBgXyExIbpmPzaDwk2fVOpOx8jrw0twGncsSr90Ks=" alt=""></img>
                    <div className="card-body text-primary">
                        <h5 className="card-title text-center text-dark">Влажность</h5>
                        <p className="card-text text-center">Автоматизируйте управление микроклиматом при помощи специального датчика температуры и влажности. Он предусматривает автоматическое включение кондиционера, когда становится жарко, или включение увлажнителя, когда воздух слишком сухой. Идеальная относительная влажность для здоровья и комфорта составляет от 40% до 60%.</p>
                        <p className="card-text"><small className="text-dark">Последнее обновление 7 месяцев назад</small></p>
                        <a href="/defaultdevices/manage-humid" className="btn btn-primary">Управлять</a>
                    </div>
                </div>

                <div className="card border-primary mb-3" style={{ width: "9rem" }}>
                    <img className="card-img-top" src="https://i.pinimg.com/originals/f2/e6/c4/f2e6c47863bee2a24880a4b692ac2929.jpg" alt=""></img>
                    <div className="card-body text-primary">
                        <h5 className="card-title text-center text-dark">Музыка</h5>
                        <p className="card-text text-center">Загружайте свою любимую музыку и плейлисты и позвольте каждому в доме управлять аудиосистемой. Данная аудиосистема позволяет слушать любимую музыку или радио в нескольких комнатах как по отдельности, так и одновременно. При этом управление системой осуществляется при помощи смартфона или компьютера.</p>
                        <p className="card-text"><small className="text-dark">Последнее обновление 1 минуту назад</small></p>
                        <a href="/defaultdevices/manage-music" className="btn btn-primary">Управлять</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DefaultDevices;