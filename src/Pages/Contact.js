import React, {Component} from 'react';
import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <div className={'main-contact'}>
                    <p className={'p-style'}>Контакты</p>
                    <div className={'main-flex-contact'}>
                        <div className={'flex-left'}>
                            <div className={'flex-left-info'}>
                                <p className={'title-letter'}>Киев</p>
                                <p className={'classic-letter'}>+8 (050) 567– 67 – 67</p>
                                <p className={'classic-letter'}>dgi.mavic2pro.kiev@mail.ru</p>
                            </div>
                            <div className={'flex-left-info'}>
                                <p className={'title-letter'}>Москва</p>
                                <p className={'classic-letter'}>+7 (499) 567– 67 – 67</p>
                                <p className={'classic-letter'}>dgi.mavic2pro.moscow@mail.ru</p>
                            </div>
                            <div className={'flex-left-info'}>
                                <p className={'title-letter'}>Минск</p>
                                <p className={'classic-letter'}>+3 (7517) 567– 67 – 67</p>
                                <p className={'classic-letter'}>dgi.mavic2pro.minsk@mail.ru</p>
                            </div>
                        </div>
                        <div className={'flex-center'}>
                            <p className={'title-letter'}>Остались вопросы? </p>
                            <p className={'classic-letter'}>Мы обязательно свяжемся с вами в течение двух рабочих дней</p>
                            <div className={'flex-center-inside'}>
                                <input className={'in1'} placeholder={'Ваше имя'}/>
                                <input className={'in2'} placeholder={'Ваш e-mail'}/>
                            </div>
                            <input className={'in3'} placeholder={'Что вас интересует?'}/>
                            <button className={'btn-send'}>
                                <div className={'btn-letter'}>Отправить</div>
                            </button>
                        </div>
                        <div className={'flex-right'}>
                            <div className={'facebook-img'}></div>
                            <div className={'youtube-img'}></div>
                            <div className={'instagram-img'}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;