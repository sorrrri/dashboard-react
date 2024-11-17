import { useEffect } from "react";

// Custom hook for loading Google Charts and drawing charts
const useGoogleCharts = () => {
  useEffect(() => {
    const loadGoogleCharts = () => {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/charts/loader.js";
      script.type = "text/javascript";
      script.onload = () => {
        if (window.google && window.google.charts) {
          window.google.charts.load("current", { packages: ["corechart", "bar"] });
          window.google.charts.setOnLoadCallback(() => {
            drawCharts();
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
        hAxis: { gridlines: { color: "#777" }, minorGridlines: { color: "#333" } },
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
        chartArea: { width: "90%" },
        hAxis: { gridlines: { color: "#777" }, minorGridlines: { color: "#333" } },
        animation: { duration: 1000, easing: "out", startup: true },
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
        hAxis: { gridlines: { color: "#777" }, minorGridlines: { color: "#333" } },
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
        hAxis: { gridlines: { color: "#777" }, minorGridlines: { color: "#333" } },
        animation: { duration: 1000, easing: "out", startup: true },
      };
      const chart = new window.google.visualization.AreaChart(document.getElementById("bedside_patient_chart"));
      chart.draw(data, options);
    };

    // Load the Google Charts library if it's not loaded yet
    if (!window.google || !window.google.charts) {
      loadGoogleCharts();
    } else {
      // If already loaded, draw the charts directly
      window.google.charts.load("current", { packages: ["corechart", "bar"] });
      window.google.charts.setOnLoadCallback(() => {
        drawCharts();
      });
    }
  }, []);
};

export default useGoogleCharts;
