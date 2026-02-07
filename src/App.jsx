import { useState } from 'react'
import './App.css'

function App() {
  // Resistor color code data
  const colorValues = {
    black: { value: 0, multiplier: 1, tolerance: null },
    brown: { value: 1, multiplier: 10, tolerance: 1 },
    red: { value: 2, multiplier: 100, tolerance: 2 },
    orange: { value: 3, multiplier: 1000, tolerance: null },
    yellow: { value: 4, multiplier: 10000, tolerance: null },
    green: { value: 5, multiplier: 100000, tolerance: 0.5 },
    blue: { value: 6, multiplier: 1000000, tolerance: 0.25 },
    violet: { value: 7, multiplier: 10000000, tolerance: 0.1 },
    grey: { value: 8, multiplier: 100000000, tolerance: 0.05 },
    white: { value: 9, multiplier: 1000000000, tolerance: null },
    gold: { value: null, multiplier: 0.1, tolerance: 5 },
    silver: { value: null, multiplier: 0.01, tolerance: 10 }
  }

  const [bands, setBands] = useState({
    band1: '',
    band2: '',
    band3: '',
    band4: ''
  })

  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleInputChange = (band, value) => {
    setBands(prev => ({
      ...prev,
      [band]: value
    }))
    // Clear previous results when changing inputs
    setResult(null)
    setError('')
  }

  const calculateResistance = () => {
    // Check if all bands are selected
    if (!bands.band1 || !bands.band2 || !bands.band3 || !bands.band4) {
      setError('Please select all resistor bands')
      setResult(null)
      return
    }

    // Get values from color codes
    const band1Value = colorValues[bands.band1].value
    const band2Value = colorValues[bands.band2].value
    const multiplier = colorValues[bands.band3].multiplier
    const tolerance = colorValues[bands.band4].tolerance

    // Calculate resistance
    const resistance = (band1Value * 10 + band2Value) * multiplier

    // Format the result with appropriate units
    let formattedResistance
    if (resistance >= 1000000) {
      formattedResistance = `${(resistance / 1000000).toFixed(2)} MΩ`
    } else if (resistance >= 1000) {
      formattedResistance = `${(resistance / 1000).toFixed(2)} kΩ`
    } else {
      formattedResistance = `${resistance} Ω`
    }

    setResult({
      value: resistance,
      formatted: formattedResistance,
      tolerance: tolerance
    })
    setError('')
  }

  const applyPreset = (preset) => {
    setBands(preset)
    setResult(null)
    setError('')
  }

  // Color options for dropdowns
  const digitColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
  const multiplierColors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'gold', 'silver']
  const toleranceColors = ['gold', 'silver'] // Only gold and silver for tolerance

  return (
    <div className="app">
      <div className="container">
        <main className="main">
        <h1>Resistor Color Code Calculator</h1>
        <p className="subtitle">Calculate resistance values from color bands</p>
        
        <div className="calculator-card">
          <div className="bands-container">
            <div className="band-section">
              <label htmlFor="band1">Band 1 (First Digit)</label>
              <select 
                id="band1"
                value={bands.band1} 
                onChange={(e) => handleInputChange('band1', e.target.value)}
              >
                <option value="">Select color</option>
                {digitColors.map(color => (
                  <option key={color} value={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="band-section">
              <label htmlFor="band2">Band 2 (Second Digit)</label>
              <select 
                id="band2"
                value={bands.band2} 
                onChange={(e) => handleInputChange('band2', e.target.value)}
              >
                <option value="">Select color</option>
                {digitColors.map(color => (
                  <option key={color} value={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="band-section">
              <label htmlFor="band3">Band 3 (Multiplier)</label>
              <select 
                id="band3"
                value={bands.band3} 
                onChange={(e) => handleInputChange('band3', e.target.value)}
              >
                <option value="">Select color</option>
                {multiplierColors.map(color => (
                  <option key={color} value={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="band-section">
              <label htmlFor="band4">Band 4 (Tolerance)</label>
              <select 
                id="band4"
                value={bands.band4} 
                onChange={(e) => handleInputChange('band4', e.target.value)}
              >
                <option value="">Select color</option>
                {toleranceColors.map(color => (
                  <option key={color} value={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="calculate-btn" onClick={calculateResistance}>
            Calculate Resistance
          </button>

          {error && <div className="error-message">{error}</div>}

          {result && (
            <div className="result-container">
              <h2>Calculated Resistance</h2>
              <div className="result-value">{result.formatted} ±{result.tolerance}%</div>
              <div className="result-details">
                <p>Exact value: {result.value} Ω</p>
                <p>Tolerance: ±{result.tolerance}%</p>
              </div>
            </div>
          )}
        </div>

        <div className="info-box">
          <h3>How to Read Resistor Color Codes</h3>
          <p><strong>4-Band Resistor Formula:</strong> (Band1 × 10 + Band2) × Multiplier</p>
          <p>Band 1 & 2: First two digits of the resistance value</p>
          <p>Band 3: Multiplier (power of 10)</p>
          <p>Band 4: Tolerance (accuracy percentage)</p>
        </div>
        </main>
      </div>
    </div>
  )
}

export default App