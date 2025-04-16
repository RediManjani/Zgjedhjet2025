
import React, { useState } from "react";

const qarqet = [
  "Tiranë", "Durrës", "Fier", "Elbasan", "Vlorë", "Shkodër",
  "Korçë", "Berat", "Lezhë", "Dibër", "Gjirokastër", "Kukës"
];

const parties = ["PS", "ASHM", "KNSHB", "PM", "LB", "KAE", "PSD", "Tjetër"];

const initialMandates = () => {
  const data = {};
  qarqet.forEach(q => {
    data[q] = {};
    parties.forEach(p => data[q][p] = 0);
  });
  return data;
};

function App() {
  const [mandates, setMandates] = useState(initialMandates());

  const handleReset = () => {
    setMandates(initialMandates());
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: "center" }}>Zgjedhjet 2025</h1>
      <button onClick={handleReset} style={{ margin: "10px auto", display: "block", padding: "10px 20px" }}>
        🔄 Reset All Predictions
      </button>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {qarqet.map(qark => (
          <div key={qark} style={{ border: "1px solid #ccc", padding: 10, borderRadius: 8 }}>
            <h3>{qark}</h3>
            {parties.map(party => (
              <div key={party} style={{ marginBottom: 5 }}>
                <label>{party}: </label>
                <input
                  type="number"
                  value={mandates[qark][party]}
                  onChange={e => {
                    const newMandates = { ...mandates };
                    newMandates[qark][party] = parseInt(e.target.value) || 0;
                    setMandates(newMandates);
                  }}
                  style={{ width: 60 }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
