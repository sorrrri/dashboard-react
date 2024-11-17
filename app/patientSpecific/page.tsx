import React from "react";
import SubHeader from "../../components/SubHeader";

const PatientSpecificPage = () => {
  return (
    <div className="container">
      <SubHeader />
      <div className="content patient_specific" id="patient_content_div">
        <aside>
          <div className="tab" id="patient_specific_tab">
            <span className="active" data-tab="standard">
              Outpatients
            </span>
            <span className="" data-tab="bedside">
              ICU Patients
            </span>
          </div>
          <div className="content">
            <div className="filter-container">
              <div className="inhtmlFormation-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
                <small>Select outpatients or ICU Patients. Check categories and type the drug name you want to search.</small>
              </div>
              <fieldset>
                <legend>Drug</legend>
                <div id="drugs"></div>
                <button id="button-add-drug">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                  </svg>
                </button>
              </fieldset>
              <fieldset>
                <legend>gender</legend>
                <ul>
                  <li>
                    <input type="radio" id="check-male" name="gender" value="0" checked />
                    <label htmlFor="check-male">male</label>
                  </li>
                  <li>
                    <input type="radio" id="check-female" name="gender" value="1" />
                    <label htmlFor="check-female">female</label>
                  </li>
                </ul>
              </fieldset>
              <fieldset>
                <legend>age</legend>
                <ul>
                  <li>
                    <input type="radio" id="check-age-01" name="age" value="1" checked />
                    <label htmlFor="check-age-01">20~40</label>
                  </li>
                  <li>
                    <input type="radio" id="check-age-02" name="age" value="2" />
                    <label htmlFor="check-age-02">40~60</label>
                  </li>
                  <li>
                    <input type="radio" id="check-age-03" name="age" value="3" />
                    <label htmlFor="check-age-03">60~80</label>
                  </li>
                  <li>
                    <input type="radio" id="check-age-04" name="age" value="4" />
                    <label htmlFor="check-age-04">80~100</label>
                  </li>
                  <li>
                    <input type="radio" id="check-age-05" name="age" value="5" />
                    <label htmlFor="check-age-05">100+</label>
                  </li>
                </ul>
              </fieldset>
              <fieldset>
                <legend>disease</legend>
                <ul>
                  <li>
                    <input type="radio" id="check-none" name="disease" value="none" checked />
                    <label htmlFor="check-none">none</label>
                  </li>
                  <li>
                    <input type="radio" id="check-infection" name="disease" value="infection" />
                    <label htmlFor="check-infection">infection</label>
                  </li>
                  <li>
                    <input type="radio" id="check-cancer" name="disease" value="cancer" />
                    <label htmlFor="check-cancer">cancer</label>
                  </li>
                  <li>
                    <input type="radio" id="check-cardiac" name="disease" value="cardiac" />
                    <label htmlFor="check-cardiac">cardiac</label>
                  </li>
                  <li>
                    <input type="radio" id="check-respiratory" name="disease" value="respiratory" />
                    <label htmlFor="check-respiratory">respiratory</label>
                  </li>
                  <li>
                    <input type="radio" id="check-trauma" name="disease" value="trauma" />
                    <label htmlFor="check-trauma">trauma</label>
                  </li>
                  <li>
                    <input type="radio" id="check-other" name="disease" value="other" />
                    <label htmlFor="check-other">other</label>
                  </li>
                </ul>
              </fieldset>
            </div>
            <div className="button-container">
              <button className="button-refresh">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 18 18">
                  <path d="M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z" />
                </svg>
              </button>
              <button className="button-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
              </button>
            </div>
          </div>
        </aside>
        <section className="tab-content-standard wrapper active" id="patient_list_div_wrap">
          <div className="title">
            <div>
              <h1>Patient Specific</h1>
              <p>Drug harmfulness by type.</p>
            </div>
            <div></div>
          </div>
          <div className="table">
            <div className="row th">
              <span>Rank</span>
              <span>Drug</span>
              <span id="HROR">OR</span>
              <span>CI</span>
              <span>P-val</span>
              <span>Count</span>
            </div>
            <div className="" id="patient_data_list">
              <div className="row">
                <span>조건으로 검색</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PatientSpecificPage;
