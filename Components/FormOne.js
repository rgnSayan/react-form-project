import React from 'react'
import { Link } from 'react-router-dom'
import './FormOne.css'

function FormOne() {
    return (
        <div className="formOne">

            <div className="step">
                <div class="stepper-wrapper active">
                    <div class="stepper-item ">
                        <div class="step-counter">1</div>
                    </div>
                    <div class="stepper-item completed">
                        <div class="step-counter">2</div>
                    </div>
                    <div class="stepper-item ">
                        <div class="step-counter">3</div>
                    </div>
                    <div class="stepper-item">
                        <div class="step-counter">4</div>
                    </div>
                </div>
            </div>

            <div className="container">
                <form>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label>Product ID*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>

                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Product Name*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Brand Name*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> SKU Code*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Style Name*</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="grapefruit">A-Line</option>
                                <option value="lime">Batwing</option>
                                <option value="coconut">Blouse</option>
                                <option value="mango">Button Up</option>
                                <option value="grapefruit">Crop</option>
                                <option value="grapefruit">Boxy</option>
                                <option value="grapefruit">Cold Shoulder</option>
                                <option value="grapefruit">Cut Out</option>
                                <option value="grapefruit">Empire</option>
                                <option value="grapefruit">Henley</option>
                                <option value="grapefruit">Hooded</option>
                                <option value="grapefruit">Jersey</option>
                                <option value="grapefruit">Layered</option>
                                <option value="grapefruit">Nursing</option>
                                <option value="grapefruit">Peasant</option>
                                <option value="grapefruit">Peplum</option>
                                <option value="grapefruit">Poncho</option>
                                <option value="grapefruit">Ruffles</option>
                                <option value="grapefruit">Tie-Ups</option>
                                <option value="grapefruit">Tunic</option>
                                <option value="grapefruit">Tuxedo</option>
                                <option value="grapefruit">Wrap</option>
                                <option value="grapefruit">T-Shirt</option>
                                <option value="grapefruit">Long Line</option>
                                <option value="grapefruit">Polo</option>
                                <option value="grapefruit">Crop</option>
                                <option value="grapefruit">Casual</option>
                                <option value="grapefruit">Business Casual</option>
                                <option value="grapefruit">Body Suit</option>
                                <option value="grapefruit">Puff Sleeve</option>
                                <option value="grapefruit">Tank</option>
                                <option value="grapefruit">Camisole</option>
                            </select>
                        </div>
                    </div>

                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Gender*</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="grapefruit">Women</option>
                                <option value="lime">Men</option>
                                <option value="coconut">Baby Boys</option>
                                <option value="mango">Baby Girls</option>
                                <option value="grapefruit">Boy</option>
                                <option value="grapefruit">Girls</option>
                                <option value="grapefruit">Unisex Child</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Fitting Type*</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="grapefruit">Regular Fit</option>
                                <option value="lime">Slim Fit</option>
                                <option value="coconut">Loose Fit</option>
                                <option value="mango">Tailored Fit</option>
                                <option value="grapefruit">Western </option>
                                <option value="grapefruit">Overall</option>
                                <option value="grapefruit">Compression</option>
                                <option value="grapefruit">Fitted</option>
                                <option value="grapefruit">Regular</option>
                                <option value="grapefruit">Relaxed</option>
                                <option value="grapefruit">Stretch</option>
                                <option value="grapefruit">Slim</option>
                                <option value="grapefruit">Classic</option>
                                <option value="grapefruit">Loose</option>
                                <option value="grapefruit">Skinny</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Country Of Origin*</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="grapefruit">India</option>
                                <option value="lime">Bangladesh</option>
                                <option value="coconut">Sri Lanka</option>
                                <option value="mango">Pakistan</option>
                                <option value="grapefruit">Nepal</option>
                                <option value="grapefruit">China</option>
                                <option value="grapefruit">USA</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Manufacturer Details*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Packer Details*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Product Care Details*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Material Composition*</label>
                        </div>
                        <div className="label__input">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Collar Style</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="grapefruit">Classic Collar</option>
                                <option value="lime">Mandarin Collar</option>
                                <option value="coconut">Cutaway Collar</option>
                                <option value="mango">Button Down Collar</option>
                                <option value="grapefruit">Round Collar</option>
                                <option value="grapefruit">Banded Collar</option>
                                <option value="grapefruit">Club Collar</option>
                                <option value="grapefruit">Spread Collar</option>
                                <option value="lime">WingTip Collar</option>
                                <option value="coconut">Spread</option>
                                <option value="mango">Tap</option>
                                <option value="grapefruit">Cutaway</option>
                                <option value="grapefruit">Club</option>
                                <option value="grapefruit">Hidden Button Down</option>
                                <option value="coconut">Wing Tip</option>
                                <option value="mango">Band</option>
                                <option value="grapefruit">Straight Point</option>
                                <option value="grapefruit">Button Down</option>
                                <option value="grapefruit">Camp</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Neck Style*</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="grapefruit">Polo</option>
                                <option value="lime">Round Neck</option>
                                <option value="coconut">V - Neck</option>
                                <option value="mango">Henley</option>
                                <option value="grapefruit">Scoop Neck</option>
                                <option value="grapefruit">Button Front</option>
                                <option value="grapefruit">Crew Neck</option>
                                <option value="grapefruit">Turtle Neck</option>
                                <option value="lime">Collared</option>
                                <option value="coconut">Boat Neck</option>
                                <option value="mango">Hood</option>
                                <option value="grapefruit">Asymmetric Neck</option>
                                <option value="grapefruit">Cowl</option>
                                <option value="grapefruit">Halter</option>
                                <option value="coconut">Off Shoulder</option>
                                <option value="mango">On Shoulder</option>
                                <option value="grapefruit">Square Neck</option>
                                <option value="grapefruit">Strapless</option>
                                <option value="grapefruit">SweetHeart Neck</option>
                                <option value="grapefruit">Half Zip</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Pattern*</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="grapefruit">Embellished</option>
                                <option value="lime">Animal Print</option>
                                <option value="coconut">Cartoon</option>
                                <option value="mango">Abstract-Print</option>
                                <option value="grapefruit">All Over Print</option>
                                <option value="grapefruit">Checkered</option>
                                <option value="grapefruit">Aztec Print</option>
                                <option value="grapefruit">Camouflage</option>
                                <option value="lime">Striped</option>
                                <option value="coconut">Ombre</option>
                                <option value="mango">Hood</option>
                                <option value="grapefruit">Dobby Print</option>
                                <option value="grapefruit">Block Print</option>
                                <option value="grapefruit">Textured</option>
                                <option value="coconut">Graphic Print</option>
                                <option value="mango">Geometric Print</option>
                                <option value="grapefruit">Tribal</option>
                                <option value="grapefruit">Embroidered</option>
                                <option value="grapefruit">Floral</option>
                                <option value="grapefruit">Tie-Dye</option>
                                <option value="grapefruit">Polka Dot</option>
                                <option value="lime">Paisley</option>
                                <option value="coconut">Solid</option>
                                <option value="mango">Plaid</option>
                                <option value="grapefruit">Color Block</option>
                                <option value="grapefruit">Botanic Print</option>
                                <option value="grapefruit">Starred</option>
                                <option value="grapefruit">Self-Design</option>
                                <option value="lime">Ethnic Motifs</option>
                                <option value="coconut">Printed</option>
                                <option value="mango">Character Print</option>
                                <option value="grapefruit">Conversational</option>
                                <option value="grapefruit">Varsity</option>
                                <option value="grapefruit">Assorted</option>
                                <option value="coconut">Faded</option>
                                <option value="mango">Logo</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Size*</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="grapefruit">1</option>
                                <option value="lime">2</option>
                                <option value="coconut">3</option>
                                <option value="mango">4</option>
                                <option value="grapefruit">5</option>
                                <option value="grapefruit">6</option>
                                <option value="grapefruit">7</option>
                                <option value="grapefruit">8</option>
                                <option value="lime">9</option>
                                <option value="coconut">10</option>
                                <option value="mango">11</option>
                                <option value="grapefruit">12</option>
                                <option value="grapefruit">13</option>
                                <option value="grapefruit">14</option>
                                <option value="coconut">15</option>
                                <option value="mango">16</option>
                                <option value="grapefruit">17</option>
                                <option value="grapefruit">18</option>
                                <option value="grapefruit">19</option>
                                <option value="grapefruit">20</option>
                                <option value="grapefruit">21</option>
                                <option value="lime">22</option>
                                <option value="coconut">23</option>
                                <option value="mango">24</option>
                                <option value="grapefruit">25</option>
                                <option value="grapefruit">26</option>
                                <option value="grapefruit">27</option>
                                <option value="grapefruit">28</option>
                                <option value="lime">29</option>
                                <option value="coconut">30</option>
                                <option value="mango">31</option>
                                <option value="grapefruit">32</option>
                                <option value="grapefruit">33</option>
                                <option value="grapefruit">34</option>
                                <option value="coconut">35</option>
                                <option value="mango">36</option>
                                <option value="grapefruit">38</option>
                                <option value="grapefruit">39</option>
                                <option value="grapefruit">40</option>
                                <option value="coconut">42</option>
                                <option value="mango">44</option>
                                <option value="grapefruit">46</option>
                                <option value="grapefruit">48</option>
                                <option value="grapefruit">50</option>
                                <option value="coconut">52</option>
                                <option value="mango">54</option>
                                <option value="grapefruit">56</option>
                                <option value="grapefruit">58</option>
                                <option value="grapefruit">0-3 months</option>
                                <option value="coconut">10-11 months</option>
                                <option value="mango">11-12 months</option>
                                <option value="coconut">12-13 months</option>
                                <option value="mango">13-14 months</option>
                                <option value="coconut">15-16 months</option>
                                <option value="mango">16-17 months</option>
                                <option value="coconut">17-18 months</option>
                                <option value="mango">18-24 months</option>
                                <option value="coconut">2-3 years</option>
                                <option value="mango">24W x 30L</option>
                                <option value="mango">24W x 32L</option>
                                <option value="mango">25W x 30L</option>
                                <option value="mango">25W x 32L</option>
                                <option value="mango">26W x 30L</option>
                                <option value="mango">26W x 32L</option>
                                <option value="mango">9-10 years</option>
                                <option value="mango">Free Size</option>
                                <option value="mango">Large</option>
                                <option value="mango">Medium</option>
                                <option value="mango">Newborn</option>
                                <option value="mango">Small</option>
                                <option value="mango">X-Large</option>
                                <option value="mango">X-Small</option>
                                <option value="mango">XX-Large</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Sleeve Type*</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="grapefruit">SleeveLess</option>
                                <option value="lime">HalfSleeve</option>
                                <option value="coconut">FullSleeve</option>
                                <option value="mango">Abstract-Print</option>
                                <option value="grapefruit">3/4th Sleeve</option>
                                <option value="grapefruit">Lantern Sleeve</option>
                                <option value="grapefruit">Batwing Sleeve</option>
                                <option value="grapefruit">Cuff Sleeve</option>
                                <option value="lime">Long Sleeve</option>
                                <option value="coconut">Cape Sleeve</option>
                                <option value="mango">Raglan Sleeve</option>
                                <option value="grapefruit">3/4 Sleeve</option>
                                <option value="grapefruit">Short Sleeve</option>
                                <option value="grapefruit">Puff Sleeve</option>
                                <option value="coconut">Bell Sleeve</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Material Type*</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="grapefruit">Acrylic</option>
                                <option value="lime">AcrylicBlend</option>
                                <option value="coconut">Cashmere</option>
                                <option value="mango">CashmereBlend</option>
                                <option value="grapefruit">Corduroy</option>
                                <option value="grapefruit">Cotton</option>
                                <option value="grapefruit">CottonBlend</option>
                                <option value="grapefruit">Denim</option>
                                <option value="lime">Faux Fur</option>
                                <option value="coconut">Fleece</option>
                                <option value="mango">Jaguar</option>
                                <option value="grapefruit">Leather</option>
                                <option value="grapefruit">Modal</option>
                                <option value="grapefruit">Nylon</option>
                                <option value="coconut">ModalBlend</option>
                                <option value="mango">NylonBlend</option>
                                <option value="grapefruit">Polyester</option>
                                <option value="grapefruit">PolyesterBlend</option>
                                <option value="grapefruit">Polyurethane (PU)</option>
                                <option value="grapefruit">Rayon</option>
                                <option value="grapefruit">RayonBlend</option>
                                <option value="lime">Satin</option>
                                <option value="coconut">SatinBlend</option>
                                <option value="mango">Plaid</option>
                                <option value="grapefruit">Seude</option>
                                <option value="grapefruit">Silk</option>
                                <option value="grapefruit">SilkBlend</option>
                                <option value="grapefruit">Velvet</option>
                                <option value="lime">VelvetBlend</option>
                                <option value="coconut">ViscoseBlend</option>
                                <option value="mango">Wool</option>
                                <option value="grapefruit">WoolBlend</option>
                                <option value="grapefruit">Faux Leather</option>
                                <option value="grapefruit">Spandex</option>
                                <option value="coconut">PolyCotton</option>
                                <option value="mango">Rubber</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Age Range Description</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="lime">Baby</option>
                                <option value="lime">Kids</option>
                                <option value="lime">Adult</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Shirt Size System</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="lime">Alpha</option>
                                <option value="lime">Numeric</option>
                                <option value="lime">Age</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__form">
                        <div className="label__name">
                            <label> Shirt Size Class</label>
                        </div>
                        <div className="label__input">
                            <select>
                                <option selected disabled value="Select"></option>
                                <option value="lime">Alpha</option>
                                <option value="lime">Numeric</option>
                                <option value="lime">Age</option>
                            </select>
                        </div>
                    </div>
                    <div className="formOne__button">
                        <Link to="/">
                            <button type="button">PREVIOUS</button>
                        </Link>

                        <Link to="/form2">
                            <button type="button">NEXT</button>
                        </Link>

                    </div>
                </form>
            </div>


        </div>
    )
}

export default FormOne
