import React from 'react'
import './Step.css'

function Step() {
    return (
        <div className="step">
            <div class="stepper-wrapper active">
                <div class="stepper-item completed">
                    <div class="step-counter">1</div>
                </div>
                <div class="stepper-item ">
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
    )
}

export default Step
