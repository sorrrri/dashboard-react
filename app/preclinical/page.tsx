import React from "react";
import Link from 'next/link';
import '/styles/style.scss';

const dashboardPage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo"><Link href="/">DQTS</Link></div>
        <ul>
          <li className="language">
            <small className="lang lang-en" data-lang-type="en">EN</small>
            <small className="lang lang-kr" data-lang-type="ko">KR</small>
          </li>
          <li className="dark-light">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </li>
        </ul>
      </header>
      <ul className="navigation">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/tutorial">Tutorial</Link></li>
        <li><Link href="/standardECG">Standard 12-lead ECG</Link></li>
        <li><Link href="/icuECG">ICU continuous ECG</Link></li>
        <li><Link href="/patientSpecific">Patient specific</Link></li>
        <li className="active"><Link href="/preclinical">Preclinical risk evaluation</Link></li>
      </ul>
      <div className="content preclinical">
        <div className="wrapper">
          <div className="title">
            <div>
              <h1>Preclinical Risk Evaluation</h1>
              <p>Evaluated Drug effect to single ion-channel.</p>
            </div>
            <div></div>
          </div>
          <section className="tutorial">
            <div className="title">
              <p>We use data from drugs that are suspected of causing QT prolongation in hospitals and those
                that do not. Inhibition of calcium, potassium, and sodium channels of these drugs was
                measured in vitro. Based on the measured values, we learn the effects of inhibition of each
                channel on QT prolongation in several machine learning models. The machine learning model
                used on this page is currently pilot tested.
              </p>
              <p>The appropriate concentration of the drug used in the channel inhibition experiment is based
                on the prescription of the drug currently being used in the hospital, and further
                experiments are conducted at concentrations corresponding to 0.1 times and 10 times. Before
                calculating the risk of QT prolongation for a specific drug, we recommend that you first
                contact the Korea Institute of Toxicology for the appropriate concentration of the drug.
              </p>
            </div>
            <ul>
              <li>Models used: RandomForest</li>
              <li>Concentration unit: uM, Inhibition unit: %</li>
              <li>con1/2/3: Concentration multiply 0.1/1/10</li>
              <li>Result: 0(No QT prolongation) ~ 1(QT prolongation)</li>
            </ul>
          </section>
          <form action="" name="experimentForm">
            <section className="experiment">
              <div className="table">
                <div className="row th">
                  <span></span>
                  <span>Inhibition at con1</span>
                  <span>Inhibition at con2</span>
                  <span>Inhibition at con3</span>
                </div>
                <div className="row td">
                  <span>Ca</span>
                  <span>
                    <input type="number" required />
                  </span>
                  <span>
                    <input type="number" required />
                  </span>
                  <span>
                    <input type="number" required />
                  </span>
                </div>
                <div className="row td">
                  <span>Na</span>
                  <span>
                    <input type="number" required />
                  </span>
                  <span>
                    <input type="number" required />
                  </span>
                  <span>
                    <input type="number" required />
                  </span>
                </div>
                <div className="row td">
                  <span>K</span>
                  <span>
                    <input type="number" required />
                  </span>
                  <span>
                    <input type="number" required />
                  </span>
                  <span>
                    <input type="number" required />
                  </span>
                </div>
              </div>
              <div className="result">
                <button className="btn-result show" type="submit">get result</button>
                <ul>
                  <li>No QT prolongation</li>
                  <li className="refresh">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                      <path d="M9 13.5c-2.49 0-4.5-2.01-4.5-4.5S6.51 4.5 9 4.5c1.24 0 2.36.52 3.17 1.33L10 8h5V3l-1.76 1.76C12.15 3.68 10.66 3 9 3 5.69 3 3.01 5.69 3.01 9S5.69 15 9 15c2.97 0 5.43-2.16 5.9-5h-1.52c-.46 2-2.24 3.5-4.38 3.5z" />
                    </svg>
                  </li>
                </ul>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default dashboardPage;
