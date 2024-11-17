import React from "react";
import SubHeader from "../../components/SubHeader";

const StandardECGPage = () => {
  return (
    <div className="container">
      <SubHeader />
      <div className="content">
        <div className="wrapper">
          <div className="title">
            <div>
              <h1>Tutorial</h1>
              <p></p>
            </div>
            <div></div>
          </div>
          <section className="tutorial">
            <div className="title">
              <h3>Standard 12-lead ECG</h3>
              <ul>
                <li>case: patients who took the drug to be analyzed within 7 days before undergoing electrocardiography.</li>
                <li>control: Patients who have not taken the drug to be analyzed within 7 days before undergoing electrocardiography.</li>
              </ul>
            </div>
            <ul>
              <li>
                Define patient groups based on whether or not QT prolongation occurs in electrocardiogram records measured from portable devices(male: QTc 450ms, female: QTc
                460ms).
              </li>
              <li>Extract drug prescription records and age, sex, and comorbidity within 7 days from patient medical record.</li>
              <li>Drugs less than a certain frequency are excluded in order of frequency and cardiovascular risk classNameification by drug.</li>
              <li>
                In order to select a control group, we proceeded with propensity score matching for existing drugs with unknown risk and performed covariates(sex, age, Potassium,
                Calcium, Myocardial infarction, Congestive heart failure, Ischemic stroke, Hemorrhagic stroke, Diabetes Removed the effects of mellitus, Hypothyroidism, Renal
                disease, AIDS HIV, Alcohol abuse, drug abuse, liver disease, severe liver disease, rank1-4 drug sum (count)).
              </li>
              <li>Odds ratio and significant derivation of QT prolongation between patient and control for each drug through logistic regression analysis.</li>
            </ul>
          </section>
          <section className="tutorial">
            <div className="title">
              <h3>ICU continuous ECG</h3>
              <ul>
                <li>Exposure group: Patients who took the drug to be analyzed and continuously measured ECG before and after it.</li>
                <li>Non-exposed group: Patients who did not take the drug to be analyzed and continuously measured ECG before and after it.</li>
              </ul>
            </div>
            <ul>
              <li>
                From August 2016 to August 2018, only the first hospitalization of patients admitted for 24 hours or more and 30 days or less among patients with electrocardiograms
                collected through the patient monitoring in the intensive care unit.
              </li>
              <li>Drugs used in 3% or more of the patient group are extracted and fluid-based drugs are excluded from analysis.</li>
              <li>
                Among the above drugs, drugs that have already been identified for cardiovascular risk are selected as matching drugs, and drugs that have not been identified are
                selected for analysis.
              </li>
              <li>
                Inquiry about QT prolongation through ECG data for 12 hours after the first administration time for each drug to be analyzed. However, QT prolongation is excluded
                at the time of the first administration.
              </li>
              <li>
                To match the period from ICU admission to the time of drug use, the patient&apos;s record is divided into 12 hours, and the time point closest to the first
                administration time in the exposure group is matched to set the observation reference point in the non-exposure group.
              </li>
              <li>
                Propensity score matching for the most recent measured lab value among the target drug, diagnosis prior to the first administration time, and 7 days after the first
                administration time.
              </li>
              <li>
                Derivation of hazard ratio and significance for the occurrence of QT prolongation between exposed and non-exposed groups for each drug through Cox regression
                analysis.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StandardECGPage;
