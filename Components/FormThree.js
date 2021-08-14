import React from 'react'
import { Link } from 'react-router-dom'
import './FormThree.css'

function FormThree() {
    return (
        <div className="formThree">

            <div className="step">
                <div class="stepper-wrapper active">
                    <div class="stepper-item ">
                        <div class="step-counter">1</div>
                    </div>
                    <div class="stepper-item ">
                        <div class="step-counter">2</div>
                    </div>
                    <div class="stepper-item ">
                        <div class="step-counter">3</div>
                    </div>
                    <div class="stepper-item completed">
                        <div class="step-counter">4</div>
                    </div>
                </div>
            </div>

            <div className="container">
                <form>
                    <div className="formThree__form">
                        <div className="label__name">
                            <label>General</label>
                        </div>
                        <div className="label__input">
                            <input type="text" placeholder="ex:model name color type" />
                        </div>
                    </div>

                    <div className="formThree__form">
                        <div className="label__name">
                            <label>Product Details</label>
                        </div>
                        <div className="label__input">
                            <input type="text" placeholder="ex:sweat proof etc" />
                        </div>
                    </div>
                    <div className="formThree__form">
                        <div className="label__name">
                            <label>Sound Features</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formThree__form">
                        <div className="label__name">
                            <label>Connectivity Feature</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formThree__form">
                        <div className="label__name">
                            <label>Dimension</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formThree__form">
                        <div className="label__name">
                            <label>Warranty</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>

                    <div className="formThree__form">
                        <div className="label__name">
                            <label></label>
                        </div>
                        <div className="textField__input">
                            <textarea />
                        </div>
                    </div>

                    <div className="formThree__button">
                        <Link to="/form2">
                            <button type="button">PREVIOUS</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default FormThree
