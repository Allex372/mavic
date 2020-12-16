import React, {Component} from 'react';
import './advantages.css'


class Advantages extends Component {
    render() {
        return (
            <div className={'main-advantages'}>
                    <p className={'text-style'}>Преимущества</p>

                <div className={'main-flex'}>

                    <div className={'small-flex'}>
                        <div className={'top-left'}>
                            <div id={'rectangel1'}></div>
                            <div id={'img1'}></div>
                            <p id={'big-letter1'}>Интеллектуальные
                                режимы</p>
                            <p id={'small-letter1'}>Mavic 2 унаследовал 6 стандартных режимов интеллектуальной съемки
                                QuickShot:Roket/Dronie/Circle/Helix/Boomerang/Asteroid.</p>
                            <p id={'numb1'}>1</p>
                        </div>
                        <div className={'lines'}>
                            <div className={'line1'}></div>
                            <div className={'line2'}></div>
                            <div className={'line3'}></div>
                        </div>

                        <div>
                            <div id={'rectangel2'}></div>
                            <div id={'img2'}></div>
                            <p id={'big-letter2'}>Active Track 2.0</p>
                            <p id={'small-letter2'}>Усовершенствованный режим второго поколения распознаёт и отслеживает объекты ещё точнее, быстрее и умнее.</p>
                            <p id={'numb2'}>2</p>
                        </div>
                    </div>

                    <div className={'small-flex'}>
                        <div>
                            <div id={'rectangel3'}></div>
                            <div id={'img3'}></div>
                            <p id={'big-letter3'}>Интеллектуальные
                                режимы</p>
                            <p id={'small-letter3'}>Mavic 2 поддерживает 4 режима
                                панорамной съёмки: сферическая,
                                180 градусов,
                                горизонтальная, вертикальная</p>
                            <p id={'numb3'}>3</p>
                        </div>

                        <div>
                            <div id={'rectangel4'}></div>
                            <div id={'img4'}></div>
                            <p id={'big-letter4'}>Крутая
                                камера!</p>
                            <p id={'small-letter4'}>Технология Hyperlapse в четырёх режимах исполнения.
                                Улучшенный фото режим HDR
                                Функция HyperLight для съёмки в условиях слабого освещения
                                4К съёмка
                            </p>
                            <p id={'numb4'}>4</p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Advantages;