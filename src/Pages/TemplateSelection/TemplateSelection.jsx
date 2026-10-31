

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TemplateSelection.css'

function TemplateSelection() {
  const navigate = useNavigate()
  const [selectedTemplate, setSelectedTemplate] = useState('modern')

  const templates = [
    {
      id: 'modern',
      name: 'Modern Minimal',
      description: 'Clean typography, spacious sections and a minimal layout.'
    },
    {
      id: 'corporate',
      name: 'Corporate Professional',
      description: 'Formal structure with a sidebar and organized information.'
    },
    {
      id: 'creative',
      name: 'Creative Layout',
      description: 'Bold headings, visual sections and highlighted pricing.'
    }
  ]

  const handleContinue = () => {
    sessionStorage.setItem('selectedTemplate', selectedTemplate)
    navigate('/preview')
  }

  return (
    <div className="template-page">

      <header className="template-header">
        <h2>Proposal Generator</h2>
        <span>Select Template</span>
      </header>

      <main className="template-container">

        <div className="template-heading">
          <h1>Choose Your Proposal Template</h1>
          <p>Select a design for your business proposal.</p>
        </div>

        <div className="template-grid">

          {/* Template 1 - Modern Minimal */}
          <div
            className={`template-card ${
              selectedTemplate === 'modern' ? 'selected' : ''
            }`}
            onClick={() => setSelectedTemplate('modern')}
          >
            <div className="template-preview modern-preview">

              <div className="modern-logo">YOUR LOGO</div>

              <h2>BUSINESS<br />PROPOSAL</h2>

              <div className="modern-line"></div>

              <p>Prepared for Client Name</p>

              <div className="modern-footer">
                PROJECT DETAILS
              </div>

            </div>

            <div className="template-details">
              <h3>Modern Minimal</h3>
              <p>Clean typography and spacious layout.</p>

              <button type="button">
                {selectedTemplate === 'modern' ? 'Selected ✓' : 'Select Template'}
              </button>
            </div>
          </div>

          {/* Template 2 - Corporate */}
          <div
            className={`template-card ${
              selectedTemplate === 'corporate' ? 'selected' : ''
            }`}
            onClick={() => setSelectedTemplate('corporate')}
          >
            <div className="template-preview corporate-preview">

              <div className="corporate-sidebar">
                <div className="corporate-logo">LOGO</div>
                <div className="corporate-side-line"></div>
                <div className="corporate-side-line"></div>
                <div className="corporate-side-line"></div>
              </div>

              <div className="corporate-content">
                <h2>PROPOSAL</h2>
                <div className="corporate-line"></div>

                <h4>01. INTRODUCTION</h4>
                <div className="corporate-text"></div>
                <div className="corporate-text short"></div>

                <h4>02. PROJECT SCOPE</h4>
                <div className="corporate-text"></div>
                <div className="corporate-text short"></div>

                <div className="corporate-price">
                  TOTAL: ₹ 00,000
                </div>
              </div>

            </div>

            <div className="template-details">
              <h3>Corporate Professional</h3>
              <p>Formal sidebar and structured sections.</p>

              <button type="button">
                {selectedTemplate === 'corporate' ? 'Selected ✓' : 'Select Template'}
              </button>
            </div>
          </div>

          {/* Template 3 - Creative */}
          <div
            className={`template-card ${
              selectedTemplate === 'creative' ? 'selected' : ''
            }`}
            onClick={() => setSelectedTemplate('creative')}
          >
            <div className="template-preview creative-preview">

              <div className="creative-top">
                <span>CREATIVE STUDIO</span>
                <span>2026</span>
              </div>

              <div className="creative-title">
                LET'S BUILD<br />
                SOMETHING<br />
                <span>GREAT.</span>
              </div>

              <div className="creative-shape"></div>

              <div className="creative-bottom">
                <div>
                  <h4>PROJECT</h4>
                  <p>Project Description</p>
                </div>

                <div className="creative-price">
                  ₹ 00,000
                </div>
              </div>

            </div>

            <div className="template-details">
              <h3>Creative Layout</h3>
              <p>Bold headings and visual content sections.</p>

              <button type="button">
                {selectedTemplate === 'creative' ? 'Selected ✓' : 'Select Template'}
              </button>
            </div>
          </div>

        </div>

        <div className="template-actions">

          <button
            className="back-btn"
            onClick={() => navigate('/proposal-form')}
          >
            Back
          </button>

          <button
            className="continue-btn"
            onClick={handleContinue}
          >
            Continue to Preview →
          </button>

        </div>

      </main>
    </div>
  )
}

export default TemplateSelection
