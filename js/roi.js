"use strict";

showRoiOnly();

function showMetricsOnly() {
    document.getElementById('metricsBlock').style.display = "block";
    document.getElementById('roiBlock').style.display = "none";
    document.getElementById('caseBlock').style.display = "none";
}

function showRoiOnly() {
    document.getElementById('metricsBlock').style.display = "none";
    document.getElementById('roiBlock').style.display = "block";
    document.getElementById('caseBlock').style.display = "none";
}

function showCaseOnly() {
    document.getElementById('metricsBlock').style.display = "none";
    document.getElementById('roiBlock').style.display = "none";
    document.getElementById('caseBlock').style.display = "block";
}