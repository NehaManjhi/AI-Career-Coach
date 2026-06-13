let reportData = "";

function generateAdvice() {

let role = document.getElementById("role").value.toLowerCase();

let output = document.getElementById("output");

if(role === "data analyst") {

reportData = `
CAREER REPORT

Role: Data Analyst

Career Score: 85/100

Skills Required:
- SQL
- Excel
- Power BI
- Python

Interview Questions:
1. What is SQL Join?
2. Explain Power BI.
3. Difference between INNER and LEFT JOIN?

Learning Roadmap:
Excel → SQL → Power BI → Python → Portfolio

Skill Gap Analysis:
- Python
- Pandas
- Data Visualization
`;

output.innerHTML = `
<div class="card">
<h2>📊 Career Score : 85/100</h2>

<div class="progress-container">
<div class="progress-bar" style="width:85%">
85%
</div>
</div>
</div>

<div class="card">
<h3>🛠 Skills Required</h3>
SQL, Excel, Power BI, Python
</div>

<div class="card">
<h3>🎯 Interview Questions</h3>
1. What is SQL Join?<br>
2. Explain Power BI.<br>
3. Difference between INNER and LEFT JOIN?
</div>

<div class="card">
<h3>🗺 Learning Roadmap</h3>
Excel → SQL → Power BI → Python → Portfolio
</div>

<div class="card">
<h3>⚠ Skill Gap Analysis</h3>
<div class="skill-gap">
<ul>
<li>Python</li>
<li>Pandas</li>
<li>Data Visualization</li>
</ul>
</div>
</div>
`;
}

else if(role === "business analyst") {

reportData = `
CAREER REPORT

Role: Business Analyst

Career Score: 80/100

Skills Required:
- Excel
- SQL
- Power BI
- Requirement Gathering

Learning Roadmap:
Excel → SQL → Power BI → Business Analysis

Skill Gap Analysis:
- Agile
- Stakeholder Management
- Requirement Documentation
`;

output.innerHTML = `
<div class="card">
<h2>📊 Career Score : 80/100</h2>

<div class="progress-container">
<div class="progress-bar" style="width:80%">
80%
</div>
</div>
</div>

<div class="card">
<h3>🛠 Skills Required</h3>
Excel, SQL, Power BI, Requirement Gathering
</div>

<div class="card">
<h3>🗺 Learning Roadmap</h3>
Excel → SQL → Power BI → Business Analysis
</div>

<div class="card">
<h3>⚠ Skill Gap Analysis</h3>
<div class="skill-gap">
<ul>
<li>Agile</li>
<li>Stakeholder Management</li>
<li>Requirement Documentation</li>
</ul>
</div>
</div>
`;
}

else if(role === "web developer") {

reportData = `
CAREER REPORT

Role: Web Developer

Career Score: 82/100

Skills Required:
- HTML
- CSS
- JavaScript
- React

Learning Roadmap:
HTML → CSS → JavaScript → React

Skill Gap Analysis:
- React
- Node.js
- Git & GitHub
`;

output.innerHTML = `
<div class="card">
<h2>📊 Career Score : 82/100</h2>

<div class="progress-container">
<div class="progress-bar" style="width:82%">
82%
</div>
</div>
</div>

<div class="card">
<h3>🛠 Skills Required</h3>
HTML, CSS, JavaScript, React
</div>

<div class="card">
<h3>🗺 Learning Roadmap</h3>
HTML → CSS → JavaScript → React
</div>

<div class="card">
<h3>⚠ Skill Gap Analysis</h3>
<div class="skill-gap">
<ul>
<li>React</li>
<li>Node.js</li>
<li>Git & GitHub</li>
</ul>
</div>
</div>
`;
}

else if(role === "data scientist") {

reportData = `
CAREER REPORT

Role: Data Scientist

Career Score: 88/100

Skills Required:
- Python
- Machine Learning
- SQL
- Statistics

Learning Roadmap:
Python → Statistics → Machine Learning → Deep Learning

Skill Gap Analysis:
- Deep Learning
- TensorFlow
- NLP
`;

output.innerHTML = `
<div class="card">
<h2>📊 Career Score : 88/100</h2>

<div class="progress-container">
<div class="progress-bar" style="width:88%">
88%
</div>
</div>
</div>

<div class="card">
<h3>🛠 Skills Required</h3>
Python, Machine Learning, SQL, Statistics
</div>

<div class="card">
<h3>🗺 Learning Roadmap</h3>
Python → Statistics → Machine Learning → Deep Learning
</div>

<div class="card">
<h3>⚠ Skill Gap Analysis</h3>
<div class="skill-gap">
<ul>
<li>Deep Learning</li>
<li>TensorFlow</li>
<li>NLP</li>
</ul>
</div>
</div>
`;
}

else {

reportData = "";

output.innerHTML = `
<div class="card">
<h2>❌ Role Not Found</h2>
</div>
`;
}
}

function downloadReport() {

if(reportData === "") {
alert("Please generate a report first.");
return;
}

let blob = new Blob(
[reportData],
{ type: "text/plain" }
);

let a = document.createElement("a");

a.href = URL.createObjectURL(blob);

a.download = "Career_Report.txt";

a.click();
}