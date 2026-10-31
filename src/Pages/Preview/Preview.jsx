
import { useNavigate } from 'react-router-dom'
import { generateProposalPDF } from '../../services/api'
import './Preview.css'

function Preview() {
  const navigate = useNavigate()

  // Get proposal details from sessionStorage
  const savedData = sessionStorage.getItem('proposalData')
  const proposal = savedData ? JSON.parse(savedData) : null

  // Get selected template
  const template = sessionStorage.getItem('selectedTemplate') || 'modern'

  if (!proposal) {
    return (
      <div className="preview-error">
        <h2>No proposal details found.</h2>
        <button onClick={() => navigate('/proposal-form')}>
          Create Proposal
        </button>
      </div>
    )
  }

  const currencySymbols = {
    INR: '₹',
    USD: '$',
    EUR: '€'
  }

  const price = `${currencySymbols[proposal.currency] || '₹'} ${Number(
    proposal.pricing || 0
  ).toLocaleString('en-IN')}`

  const handleDownload = async () => {
    try {
        await generateProposalPDF(proposal, template)
    } catch (error) {
        alert(error.message)
    }
  }
  return (
    <div className="preview-page">

      {/* Header */}
      <header className="preview-header">
        <h2>Proposal Generator</h2>
        <span>Proposal Preview</span>
      </header>

      <main className="preview-container">

        <div className="preview-heading">
          <div>
            <h1>Proposal Preview</h1>
            <p>Review your proposal before downloading.</p>
          </div>
        </div>

        {/* TEMPLATE 1: MODERN MINIMAL */}
        {template === 'modern' && (
          <div className="proposal-document modern-document">

            {/* <div className="modern-doc-header">
              <h2>{proposal.companyName}</h2>
              <span>BUSINESS PROPOSAL</span>
            </div> */}
            <div className="modern-doc-header">
                <div className="company-brand">
                    {proposal.companyLogo && (
                    <img
                        src={proposal.companyLogo}
                        alt="Company Logo"
                        className="preview-company-logo"
                    />
                    )}
                    <h2>{proposal.companyName}</h2>
                </div>

                <span>BUSINESS PROPOSAL</span>
            </div>

            <div className="modern-doc-title">
              <p>PROPOSAL FOR</p>
              <h1>{proposal.projectTitle}</h1>
              <div className="modern-doc-line"></div>
              <p>Prepared for {proposal.clientName}</p>
            </div>

            <div className="modern-doc-section">
              <h3>01. ABOUT THIS PROJECT</h3>
              <p>{proposal.projectDescription || 'Project description not provided.'}</p>
            </div>

            <div className="modern-doc-section">
              <h3>02. PROJECT SCOPE</h3>
              <p>{proposal.projectScope || 'Project scope not provided.'}</p>
            </div>

            <div className="modern-doc-price">
              <span>PROJECT INVESTMENT</span>
              <h2>{price}</h2>
            </div>

            <div className="modern-doc-footer">
              <div>
                <strong>Prepared for</strong>
                <p>{proposal.clientName}</p>
              </div>
              <div>
                <strong>Prepared by</strong>
                <p>{proposal.companyName}</p>
              </div>
            </div>

          </div>
        )}

        {/* TEMPLATE 2: CORPORATE */}
        {template === 'corporate' && (
          <div className="proposal-document corporate-document">

            {/* <aside className="corporate-doc-sidebar"> */}
            <aside className="corporate-doc-sidebar">
            {proposal.companyLogo && (
                <img
                src={proposal.companyLogo}
                alt="Company Logo"
                className="preview-company-logo"
                />
            )}

              <h2>{proposal.companyName}</h2>

              <div className="corporate-doc-divider"></div>

              <p>BUSINESS PROPOSAL</p>

              <div className="corporate-doc-client">
                <span>PREPARED FOR</span>
                <h3>{proposal.clientName}</h3>
                <p>{proposal.clientCompany}</p>
              </div>

              <div className="corporate-doc-footer">
                PROFESSIONAL PROPOSAL
              </div>
            </aside>

            <div className="corporate-doc-main">

              <div className="corporate-doc-title">
                <span>PROJECT PROPOSAL</span>
                <h1>{proposal.projectTitle}</h1>
              </div>

              <section>
                <h3>01 — PROJECT OVERVIEW</h3>
                <p>{proposal.projectDescription || 'Project description not provided.'}</p>
              </section>

              <section>
                <h3>02 — SCOPE OF WORK</h3>
                <p>{proposal.projectScope || 'Project scope not provided.'}</p>
              </section>

              <section className="corporate-doc-pricing">
                <h3>PROJECT COST</h3>
                <h2>{price}</h2>
              </section>

              <section>
                <h3>03 — TERMS AND CONDITIONS</h3>
                <p>{proposal.terms || 'Terms and conditions not specified.'}</p>
              </section>

              <div className="corporate-doc-validity">
                Valid until: {proposal.validity || 'Not specified'}
              </div>

            </div>
          </div>
        )}

        {/* TEMPLATE 3: CREATIVE */}
        {template === 'creative' && (
          <div className="proposal-document creative-document">

            {/* <div className="creative-doc-header">
              <span>{proposal.companyName}</span>
              <span>PROJECT PROPOSAL</span>
            </div> */}
            <div className="creative-doc-header">
                <div className="company-brand">
                    {proposal.companyLogo && (
                    <img
                        src={proposal.companyLogo}
                        alt="Company Logo"
                        className="preview-company-logo"
                    />
                    )}

                    <span>{proposal.companyName}</span>
                </div>

                <span>PROJECT PROPOSAL</span>
            </div>

            <div className="creative-doc-hero">
              <p>LET'S CREATE SOMETHING GREAT</p>
              <h1>{proposal.projectTitle}</h1>
              <div className="creative-doc-circle"></div>
              <span>PREPARED FOR {proposal.clientName}</span>
            </div>

            <div className="creative-doc-content">

              <div className="creative-doc-description">
                <span>01 / THE IDEA</span>
                <h2>Project Overview</h2>
                <p>{proposal.projectDescription || 'Project description not provided.'}</p>
              </div>

              <div className="creative-doc-scope">
                <span>02 / THE PLAN</span>
                <h2>What We'll Deliver</h2>
                <p>{proposal.projectScope || 'Project scope not provided.'}</p>
              </div>

            </div>

            <div className="creative-doc-price">
              <div>
                <span>03 / PROJECT INVESTMENT</span>
                <h2>{price}</h2>
              </div>
              <p>Prepared by {proposal.companyName}</p>
            </div>

            <div className="creative-doc-terms">
              <strong>Terms & Conditions</strong>
              <p>{proposal.terms || 'No additional terms specified.'}</p>
              <p>Valid until: {proposal.validity || 'Not specified'}</p>
            </div>

          </div>
        )}

        {/* Actions */}
        <div className="preview-actions">
          <button
            className="preview-back-btn"
            onClick={() => navigate('/templates')}
          >
            ← Back to Templates
          </button>

          <button
            className="preview-download-btn"
            onClick={handleDownload}
          >
            Download PDF →

          </button>
        </div>

      </main>
    </div>
  )
}

export default Preview
