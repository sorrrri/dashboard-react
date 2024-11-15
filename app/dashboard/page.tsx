import React from "react";
import Link from 'next/link';
import '/styles/style.scss';

const dashboardPage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo">
          <Link href="/">DQTS</Link>
        </div>
        <ul>
          <li className="language">
            <small className="lang lang-en" data-lang-type="en">
              EN
            </small>
            <small className="lang lang-kr" data-lang-type="ko">
              KR
            </small>
          </li>
          <li className="dark-light">
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </li>
        </ul>
      </header>
      <ul className="navigation">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="active">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/standardECG">Standard 12-lead ECG</Link>
        </li>
        <li>
          <Link href="/icuECG">ICU continuous ECG</Link>
        </li>
        <li>.
          <Link href="/patientSpecific">Patient specific</Link>
        </li>
        <li>
          <Link href="/preclinical">Preclinical risk evaluation</Link>
        </li>
      </ul>
      <div className="content dashboard">
        <div className="wrapper">
          <div className="title">
            <div>
              <h1>Dashboard</h1>
              <p>Accumulated patients in ajou university hospital.</p>
            </div>
            <div></div>
          </div>
          <div className="charts standard-charts">
            <div className="total-counter">
              <span>outpatients</span>
              <h1>387,525</h1>
            </div>
            <div className="chart-container">
              <div id="standard_gender_chart" className="chart"></div>
            </div>
            <div className="chart-container">
              <div id="standard_column_chart" className="chart"></div>
            </div>
            <div className="chart-container">
              <div id="standard_patient_chart" className="chart"></div>
            </div>
          </div>
          <div className="charts bedside-charts">
            <div className="total-counter">
              <span>ICU patients</span>
              <h1>2,416</h1>
            </div>
            <div className="chart-container">
              <div id="bedside_gender_chart" className="chart"></div>
            </div>
            <div className="chart-container">
              <div id="bedside_column_chart" className="chart"></div>
            </div>
            <div className="chart-container">
              <div id="bedside_patient_chart" className="chart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboardPage;
