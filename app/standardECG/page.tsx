import React from "react";
import SubHeader from "../../components/SubHeader";

const StandardECGPage = () => {
  return (
    <div className="container">
      <SubHeader />
      <div className="content standard_ecg">
        <div className="wrapper">
          <div className="title">
            <div>
              <h1>Standard 12-lead ECG</h1>
              <p>Drug harmfulness calculated from outpatients.</p>
            </div>
            <div className="search">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input type="search" placeholder="Search Drug name you want to know. ATC code, Drug Name ..." id="standard_ecg_search_val" />
            </div>
          </div>
          <div className="table">
            <div className="row th">
              <span>Rank</span>
              <span>Drug</span>
              <span>ATC Code</span>
              <span>OR</span>
              <span>CI</span>
              <span>P-val</span>
              <span>date</span>
              <span>count</span>
            </div>
            <div className="row">
              <span>1</span>
              <span>Spironolactone</span>
              <span>C03DA01</span>
              <span>2.11</span>
              <span>1.82-2.44</span>
              <span>0</span>
              <span>20/07/31</span>
              <span>1059</span>
            </div>
            <div className="row">
              <span>2</span>
              <span>Quetiapine</span>
              <span>N05AH04</span>
              <span>1.95</span>
              <span>1.58-2.4</span>
              <span>0</span>
              <span>20/07/31</span>
              <span>695</span>
            </div>
            <div className="row">
              <span>3</span>
              <span>Haloperidol</span>
              <span>N05AD01</span>
              <span>1.85</span>
              <span>1.48-2.3</span>
              <span>0</span>
              <span>20/07/31</span>
              <span>630</span>
            </div>
            <div className="row">
              <span>4</span>
              <span>Etomidate</span>
              <span>N01AX07</span>
              <span>1.85</span>
              <span>1.63-2.09</span>
              <span>0</span>
              <span>20/07/31</span>
              <span>630</span>
            </div>
            <div className="row">
              <span>5</span>
              <span>Perindopril</span>
              <span>C09AA04</span>
              <span>1.82</span>
              <span>1.5-2.19</span>
              <span>0</span>
              <span>20/07/31</span>
              <span>704</span>
            </div>
            <div className="row">
              <span>6</span>
              <span>Carbohydrates</span>
              <span>B05BA03</span>
              <span>1.7</span>
              <span>1.6-1.81</span>
              <span>0</span>
              <span>20/07/31</span>
              <span>5951</span>
            </div>
            <div className="row">
              <span>7</span>
              <span>Salbutamol</span>
              <span>R03AC02</span>
              <span>1.66</span>
              <span>1.44-1.92</span>
              <span>0</span>
              <span>20/07/31</span>
              <span>1118</span>
            </div>
            <div className="row">
              <span>8</span>
              <span>Nifedipine</span>
              <span>C08CA05</span>
              <span>1.6</span>
              <span>1.38-1.86</span>
              <span>0</span>
              <span>20/07/31</span>
              <span>1050</span>
            </div>
            <div className="row">
              <span>9</span>
              <span>Acetylcysteine</span>
              <span>R05CB01</span>
              <span>1.59</span>
              <span>1.49-1.71</span>
              <span>0</span>
              <span>20/07/31</span>
              <span>4976</span>
            </div>
            <div className="row">
              <span>10</span>
              <span>Ceftriaxone</span>
              <span>J01DD04</span>
              <span>1.59</span>
              <span>1.42-1.77</span>
              <span>0</span>
              <span>20/07/31</span>
              <span>2035</span>
            </div>
          </div>
          <div className="pagination">
            <ul>
              <li>
                <svg style={{ transform: "rotate(180deg)" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                  <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
                </svg>
              </li>
              <li className="active">1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
                </svg>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                  <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardECGPage;
