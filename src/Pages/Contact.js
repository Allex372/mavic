import React, {Component} from 'react';
import './contact.css'
import {UserService} from "../services/UserService";

class Contact extends Component {



    myForm = React.createRef();



    send = (e)=>{
        e.preventDefault();
        let in1 = this.myForm.current[0].value;
        let in2 = this.myForm.current[1].value;
        let in3 = this.myForm.current[2].value;

        console.log('in1:' + in1)
        console.log('in2:' + in2)
        console.log('in3:' + in3)
    }



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
                            <div className={'title-text-form'}>
                                <p className={'title-letter'}>Остались вопросы? </p>
                                <p className={'classic-letter'}>Мы обязательно свяжемся с вами в течение двух рабочих
                                    дней</p>
                            </div>
                            <form className={'form'} action={'/saveData'} onSubmit={this.send} ref={this.myForm}>
                                <input className={'in1'} placeholder={'Ваше имя'}/>
                                <input className={'in2'} placeholder={'Ваш e-mail'}/>
                                <input className={'in3'} placeholder={'Что вас интересует?'}/><br/>
                                <button className={'btn-send'}>
                                    <div className={'btn-letter'}>Отправить</div>
                                </button>
                            </form>
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