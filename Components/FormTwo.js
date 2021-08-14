import React from 'react'
import './FormTwo.css'
import { Link } from 'react-router-dom'

function FormTwo() {
    return (
        <div className="formTwo">
            <div className="step">
                <div class="stepper-wrapper active">
                    <div class="stepper-item ">
                        <div class="step-counter">1</div>
                    </div>
                    <div class="stepper-item ">
                        <div class="step-counter">2</div>
                    </div>
                    <div class="stepper-item  completed">
                        <div class="step-counter">3</div>
                    </div>
                    <div class="stepper-item">
                        <div class="step-counter">4</div>
                    </div>
                </div>
            </div>

            <div className="container">
                <form>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Product Tax Code*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>

                    <div className="formTwo__form">
                        <div className="label__nameNew">
                            <label>Shipping Box*</label>
                        </div>
                        <div className="label__inputNew">
                            <input type="text" />
                            <button type="button">Notice</button>
                        </div>
                    </div>

                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Shipping Barcode*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Selling Price*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Shipping Time*</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="lime">Yes</option>
                                <option value="lime">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Gift Message ?</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="lime">Yes</option>
                                <option value="lime">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Gift Wrap ?</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="lime">Yes</option>
                                <option value="lime">No</option>
                            </select>
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Offer Price*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Product Tax Code*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Offer Start Date</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Offer End Date</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>In Stock Qty*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>HSN Code*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Luxury Cess*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Local Charges*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Zonal Charges*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>National Charges*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formTwo__form">
                        <div className="label__name">
                            <label>Product GST %*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>

                    <div className="formTwo__button">
                        <Link to="/form1">
                            <button type="button">PREVIOUS</button>
                        </Link>

                        <Link to="/form3">
                            <button type="button">NEXT</button>
                        </Link>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormTwo
