🔌 Resistor Color Code Calculator

A simple and interactive React-based web application that calculates the resistance value of a resistor using the standard 4-band resistor color code system.

🌐 Live Demo:
https://resistance-calculator-six.vercel.app/

📌 About the Project

The Resistor Color Code Calculator helps users understand how resistor color bands translate into numerical resistance values.
Users manually select the colors of each band, and the application calculates the resistance value along with tolerance using standard electronics rules.
This project is ideal for:
Electronics students
College mini projects
Learning React basics

Understanding resistor color codes
✨ Features
🎨 Manual selection of 4 resistor color bands
🧮 Accurate resistance calculation using standard formula
📐 Displays resistance in Ohms (Ω) with tolerance
🖥️ Clean and simple user interface
⚡ Instant calculation
📱 Responsive design

🧠 Working Principle
4-Band Resistor Logic
Band	Description
Band 1	First significant digit
Band 2	Second significant digit
Band 3	Multiplier
Band 4	Tolerance (Gold / Silver)
Formula Used
Resistance = (Band1 × 10 + Band2) × Multiplier

Example
Yellow (4)
Violet (7)
Red (×100)
Gold (±5%)
Result:
4.7 kΩ ±5%

🛠️ Tech Stack
React.js – Frontend framework
JavaScript – Logic & calculations
CSS – Styling
Vercel – Deploymen

📁 Project Structure
resistance-calculator/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── index.js
│   ├── App.css
│   └── components/
│
├── package.json
├── README.md
└── .gitignore

🚀 Getting Started (Run Locally)
1️⃣ Clone the Repository
git clone https://github.com/your-username/resistance-calculator.git
2️⃣ Install Dependencies
npm install
3️⃣ Start the Application
npm start
4️⃣ Open in Browser
http://localhost:3000

🧪 Sample Output
Resistance: 4700 Ω ±5%

🎓 Educational Value
This project demonstrates:
Understanding of resistor color codes
React state management
UI development
Logical problem-solving

🔮 Future Enhancements
Support for 5-band resistors
Visual resistor preview
Automatic unit conversion (Ω, kΩ, MΩ)

Dark mode UI

Animations for band selection
