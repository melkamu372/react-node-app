import React, { useState } from 'react';
import PersonalDetails from '../component/PersonalDetails';
import Education from '../component/Education';
import Experience from '../component/Experience';
import DisplayPersonalDetail from '../component/DisplayPeronalDetail';

function App() {
  const [person, setPerson] = useState({
    fullname: "",
    title: '',
    tel: "",
    email: "",
    address: "",
    about:""
  });

 const updatePerson = (updatedPerson) => {
    setPerson(updatedPerson);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Personal Information
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <PersonalDetails person={person} updatePerson={updatePerson} />
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Education
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Education />
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Experience
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Experience />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <DisplayPersonalDetail person={person} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;