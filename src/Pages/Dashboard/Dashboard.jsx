
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Proposal Generator</h2>
        <span>Dashboard</span>
      </header>

      <main className="dashboard-content">
        <div className="welcome-section">
          <h1>Welcome to Proposal Generator</h1>
          <p>
            Create professional business proposals with
            customizable templates in just a few steps.
          </p>

          <button onClick={() => navigate('/proposal-form')}>
            + Create New Proposal
          </button>
        </div>

        <section className="dashboard-info">
          <h2>How it works</h2>

          <div className="steps-container">
            <div className="step-card">
              <h3>01</h3>
              <h4>Enter Details</h4>
              <p>
                Add your company, client and project information.
              </p>
            </div>

            <div className="step-card">
              <h3>02</h3>
              <h4>Choose Template</h4>
              <p>
                Select from three professional proposal designs.
              </p>
            </div>

            <div className="step-card">
              <h3>03</h3>
              <h4>Generate PDF</h4>
              <p>
                Preview your proposal and download it as a PDF.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
