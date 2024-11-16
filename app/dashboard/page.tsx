"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "/styles/style.scss";

const DashboardPage = () => {
  useEffect(() => {
    // Load Google Charts library dynamically
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.type = "text/javascript";
      script.onload = () => {
        if (window.google && window.google.charts) {
          window.google.charts.load("current", { packages: ["corechart", "bar"] });
          window.google.charts.setOnLoadCallback(() => {
            drawCharts(); // 구글 차트가 로드된 후에 차트 그리기
          });
        }
      };
      document.body.appendChild(script);
    };

    const drawCharts = () => {
      drawStandardGenderChart();
      drawStandardColumnChart();
      drawBedsideGenderChart();
      drawBedsideColumnChart();
      drawStandardPatientChart();
      drawBedsidePatientChart();
    };

    // Load the Google Charts library if not already loaded
    if (!window.google || !window.google.charts) {
      loadGoogleCharts();
    } else {
      // If already loaded, directly load the chart packages and draw the charts
      window.google.charts.load("current", { packages: ["corechart", "bar"] });
      window.google.charts.setOnLoadCallback(() => {
        drawCharts();
      });
    }

    // Chart drawing functions
    const drawStandardGenderChart = () => {
      const data = window.google.visualization.arrayToDataTable([
        ["gender", "percentage"],
        ["male", 40],
        ["female", 60],
      ]);

      const options = {
        tooltip: { isHtml: true },
        backgroundColor: "transparent",
        colors: ["#8CC1D3", "#F9957F"],
        legend: "bottom",
        pieSliceText: "label",
        chartArea: { width: "90%", height: "50%" },
        animation: { duration: 1000, easing: "out", startup: true },
      };

      const chart = new window.google.visualization.PieChart(document.getElementById("standard_gender_chart"));
      chart.draw(data, options);
    };

    const drawStandardColumnChart = () => {
      const data = window.google.visualization.arrayToDataTable([
        ["Age", "male", "female"],
        ["20~40", 25, 26],
        ["40~60", 40, 37],
        ["60~80", 20, 25],
        ["80~100", 20, 9],
        ["100+", 10, 5],
      ]);

      const options = {
        tooltip: { isHtml: true },
        backgroundColor: "transparent",
        colors: ["#8CC1D3", "#F9957F"],
        legend: "bottom",
        chartArea: { width: "90%" },
        hAxis: {
          gridlines: { color: "#777" },
          minorGridlines: { color: "#333" },
        },
        animation: { duration: 1000, easing: "out", startup: true },
      };

      const chart = new window.google.visualization.ColumnChart(document.getElementById("standard_column_chart"));
      chart.draw(data, options);
    };

    const drawBedsideGenderChart = () => {
      const data = window.google.visualization.arrayToDataTable([
        ["gender", "percentage"],
        ["male", 40],
        ["female", 60],
      ]);

      const options = {
        tooltip: { isHtml: true },
        backgroundColor: "transparent",
        colors: ["#8CC1D3", "#F9957F"],
        legend: "bottom",
        width: "180px",
        pieSliceText: "label",
        chartArea: { width: "90%", height: "50%" },
        animation: { duration: 1000, easing: "out", startup: true },
      };

      const chart = new window.google.visualization.PieChart(document.getElementById("bedside_gender_chart"));
      chart.draw(data, options);
    };

    const drawBedsideColumnChart = () => {
      const data = window.google.visualization.arrayToDataTable([
        ["Age", "male", "female"],
        ["20~40", 25, 26],
        ["40~60", 40, 37],
        ["60~80", 20, 25],
        ["80~100", 20, 9],
        ["100+", 10, 5],
      ]);

      const options = {
        tooltip: { isHtml: true },
        backgroundColor: "transparent",
        colors: ["#8CC1D3", "#F9957F"],
        legend: "bottom",
        chartArea: {
          width: "90%",
        },
        hAxis: {
          gridlines: {
            color: "#777",
          },
          minorGridlines: {
            color: "#333",
          },
        },
        animation: {
          duration: 1000,
          easing: "out",
          startup: true,
        },
      };

      const chart = new window.google.visualization.ColumnChart(document.getElementById("bedside_column_chart"));
      chart.draw(data, options);
    };

    const drawStandardPatientChart = () => {
      const data = window.google.visualization.arrayToDataTable([
        ["Year", "ICU", "outpatient", "all"],
        ["2016", 3, 6, 9],
        ["2017", 2, 7, 9],
        ["2018", 3, 6, 9],
        ["2019", 4, 8, 12],
      ]);

      const options = {
        tooltip: { isHtml: true },
        isStacked: true,
        title: "Standard 8주 누적 환자 수",
        backgroundColor: "transparent",
        colors: ["#E7CC9D", "#ABCFD1", "#ABBEEC"],
        legend: "bottom",
        pointSize: 5,
        chartArea: { width: "90%" },
        hAxis: {
          gridlines: { color: "#777" },
          minorGridlines: { color: "#333" },
        },
        animation: { duration: 1000, easing: "out", startup: true },
      };

      const chart = new window.google.visualization.AreaChart(document.getElementById("standard_patient_chart"));
      chart.draw(data, options);
    };

    const drawBedsidePatientChart = () => {
      const data = window.google.visualization.arrayToDataTable([
        ["Year", "ICU", "outpatient", "all"],
        ["2016", 3, 6, 9],
        ["2017", 2, 7, 9],
        ["2018", 3, 6, 9],
        ["2019", 4, 8, 12],
      ]);

      const options = {
        tooltip: { isHtml: true },
        isStacked: true,
        title: "Bedside 8주 누적 환자 수",
        backgroundColor: "transparent",
        colors: ["#E7CC9D", "#ABCFD1", "#ABBEEC"],
        legend: "bottom",
        pointSize: 5,
        chartArea: { width: "90%" },
        hAxis: {
          gridlines: { color: "#777" },
          minorGridlines: { color: "#333" },
        },
        animation: { duration: 1000, easing: "out", startup: true },
      };

      const chart = new window.google.visualization.AreaChart(document.getElementById("bedside_patient_chart"));
      chart.draw(data, options);
    };
  }, []);
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
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
        <li>
          .<Link href="/patientSpecific">Patient specific</Link>
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

export default DashboardPage;
