"use client";
import SubHeader from "../../components/SubHeader";
import useGoogleCharts from "./useGoogleCharts";

const DashboardPage = () => {
  useGoogleCharts();
  return (
    <div className="container">
      <SubHeader />
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

export default DashboardPage;
