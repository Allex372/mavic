import React, {Component} from 'react';
import './questions.css'

class Questions extends Component {

    state = {
        isSwitchOn1: false,
        isSwitchOn2: false,
        isSwitchOn3: false,
        isSwitchOn4: false
    }


    render() {
        let {isSwich1, isSwich2, isSwich3, isSwich4} = this.state
        return (
            <div>
                <div className={'main-questions'}>
                    <div className={'main-flex'}>

                        <p className={'style-p'}>Остались вопросы?</p>

                        <div className={'drop-down-questions'}>
                            <div className={'drop-down'}>
                                <div className={isSwich1 ? 'drop-down-first-active' : 'drop-down-first'}>
                                    <p className={'style-p-dropdown'}>Какие отличия между Mavic 2 Pro и Mavic 2
                                        Zoom?</p>
                                    <ul className={isSwich1 ? "active" : ""}>
                                        <li className={'li-text-style'}>Lorem ipsum dolor sit amet, consectetur
                                            adipisicing elit. Cum dignissimos hic magni molestiae mollitia nemo numquam
                                            possimus quam quidem tenetur.
                                        </li>
                                    </ul>
                                </div>
                                <button onClick={() => this.setState({isSwich1: !isSwich1})}
                                        className={isSwich1 ? 'button-drop-down-false' : 'button-drop-down-true'}>
                                </button>
                            </div>

                            <div>
                                <div className={'drop-down'}>
                                    <div className={isSwich2 ? 'drop-down-first-active' : 'drop-down-first'}>
                                        <p className={'style-p-dropdown'}>Какие отличия между Mavic 2 Pro и Mavic 2
                                            Zoom?</p>
                                        <ul className={isSwich2 ? "active" : ""}>
                                            <li className={'li-text-style'}>Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Soluta, voluptate?
                                            </li>
                                        </ul>
                                    </div>
                                    <button onClick={() => this.setState({isSwich2: !isSwich2})}
                                            className={isSwich2 ? 'button-drop-down-false' : 'button-drop-down-true'}>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className={'drop-down'}>
                                    <div className={isSwich3 ? 'drop-down-first-active' : 'drop-down-first'}>
                                        <p className={'style-p-dropdown'}>Какие отличия между Mavic 2 Pro и Mavic 2
                                            Zoom?</p>
                                        <ul className={isSwich3 ? "active" : ""}>
                                            <li className={'li-text-style'}>Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Soluta, voluptate?
                                            </li>
                                        </ul>
                                    </div>
                                    <button onClick={() => this.setState({isSwich3: !isSwich3})}
                                            className={isSwich3 ? 'button-drop-down-false' : 'button-drop-down-true'}>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className={'drop-down'}>
                                    <div className={isSwich4 ? 'drop-down-first-active' : 'drop-down-first'}>
                                        <p className={'style-p-dropdown'}>Какие отличия между Mavic 2 Pro и Mavic 2
                                            Zoom?</p>
                                        <ul className={isSwich4 ? "active" : ""}>
                                            <li className={'li-text-style'}>Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Soluta, voluptate?
                                            </li>
                                        </ul>
                                    </div>
                                    <button onClick={() => this.setState({isSwich4: !isSwich4})}
                                            className={isSwich4 ? 'button-drop-down-false' : 'button-drop-down-true'}>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={'square-img'}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Questions;