import React, { useState } from 'react'

const MultiStepForm = () => {

    const [currentStep, setCurrentStep] = useState(1)
    const totalStep =3

    const stepTitles = {
        1: "Ticket Selection",
        2: "Attendee Details",
        3: "Ready"
      };

    const progressWidth = ((currentStep - 1) / (totalStep - 1)) * 100

     // Navigation handlers
  const handleCancel = () => {
    console.log('Form canceled');
    // Add your cancel logic here (e.g., close modal, reset form)
  };

  const handleSubmit = () => {
    console.log('Form submitted');
    setCurrentStep(3);
  };

  const handleBookAnother = () => {
    setCurrentStep(1);
  };

  const handleDownload = () => {
    console.log('Downloading ticket...');
    // Add download logic here
  };

  return (
    <div className="multi-step-form">
         <div className="header">


            <div className="main">

                <h1>{stepTitles[currentStep]}</h1>
                <div className="step-indicator">Step {currentStep}/{totalSteps}</div>

                <div className="progress-bar">
                    <div className="progress-line" style={{ width: `${progressWidth}%` }}></div>
                </div>
                <div className="form-container">
                    {currentStep === 1 && <Step1 />}
                    {currentStep === 2 && <Step2 onSubmit={handleSubmit} />}
                    {currentStep === 3 && <Step3 />}

                    <div className="progress">
                       {currentStep === 1 && (
                        <>
                            <button onClick={handleCancel}>Cancel</button>
                            <button onClick={() => setCurrentStep(2)}>Next</button>
                        </>
                        )}
                        
                        {currentStep === 2 && (
                        <>
                            <button onClick={() => setCurrentStep(1)}>Back</button>
                            <button type="submit" form="ticket-form">
                            GET MY FREE TICKET
                            </button>
                        </>
                        )}
                        
                        {currentStep === 3 && (
                        <>
                            <button onClick={handleBookAnother}>Book another ticket</button>
                            <button onClick={handleDownload}>Download ticket</button>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MultiStepForm