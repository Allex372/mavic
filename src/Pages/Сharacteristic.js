import React, {Component} from 'react';
import '../Pages/characteristic.css'

class Сharacteristic extends Component {
    render() {
        return (
            <div>
                <div className={'main-characteristic'}>
                    <p className={'title'}>Характеристики</p>

                    <div className={'main-center'}>
                        <div className={'top'}>
                            <div>
                                <p className={'big-letters'}>Dlog-M 10 бит</p>
                                <p className={'small-letters'}>Mavic 2 Pro поддерживает цветовой профиль Dlog-M 10 бит с более широким динамическим диапазоном, дающим больше возможностей для цветокоррекции.</p>
                            </div>
                            <div>
                                <p className={'big-letters'}>Матрица CMOS 1</p>
                                <p className={'small-letters'}>Зона активной работы новой 1-дюймовой матрицы CMOS в четыре раза превышает показатели Mavic Pro</p>
                            </div>
                        </div>

                        <div className={'down'}>
                            <div>
                                <p className={'big-letters'}>Камера Hasselblad</p>
                                <p className={'small-letters'}>Камера Hasselblad L1D-20С
                                    известны эргономичным дизайном
                                    и превосходным качеством изображений. </p>
                            </div>
                            <div>
                                <p className={'big-letters'}>Видео HDR</p>
                                <p className={'small-letters'}>Благодаря поддержке видео 4K HDR 10 бит, Mavic 2 Pro можно подсоединить к совместимому с HLG 4K ТВ и просматривать запись в полном цветовом спектре</p>
                            </div>
                        </div>
                    </div>
                    <div className={'copter-img'}></div>
                    <div id={'arrow1'}></div>
                    <div id={'arrow2'}></div>
                    <div id={'arrow3'}></div>
                    <div id={'arrow4'}></div>

                </div>
            </div>
        );
    }
}

export default Сharacteristic;