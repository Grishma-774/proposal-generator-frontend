
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ProposalForm.css'

function ProposalForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    companyName: '',
    companyLogo: null,
    clientName: '',
    clientEmail: '',
    clientCompany: '',
    clientAddress: '',
    projectTitle: '',
    projectDescription: '',
    projectScope: '',
    pricing: '',
    currency: 'INR',
    validity: '',
    terms: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleLogoChange = (e) => {
    setFormData({
      ...formData,
      companyLogo: e.target.files[0]
    })
  }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     if (!formData.companyName || !formData.clientName || !formData.projectTitle) {
//       alert('Please fill in the required fields.')
//       return
//     }

//     // Save proposal details for the next page
//     sessionStorage.setItem('proposalData', JSON.stringify({
//       ...formData,
//       companyLogo: null
//     }))

//     navigate('/templates')
//   }
const handleSubmit = (e) => {
  e.preventDefault()

  if (!formData.companyName || !formData.clientName || !formData.projectTitle) {
    alert('Please fill in the required fields.')
    return
  }

  // If no logo is uploaded, save proposal directly
  if (!formData.companyLogo) {
    sessionStorage.setItem('proposalData', JSON.stringify(formData))
    navigate('/templates')
    return
  }

  // Convert uploaded logo into Base64
  const reader = new FileReader()

  reader.onload = () => {
    const proposalData = {
      ...formData,
      companyLogo: reader.result
    }

    sessionStorage.setItem(
      'proposalData',
      JSON.stringify(proposalData)
    )

    navigate('/templates')
  }

  reader.onerror = () => {
    alert('Unable to read the company logo.')
  }

  reader.readAsDataURL(formData.companyLogo)
}
  return (
    <div className="proposal-form-page">

      <header className="form-header">
        <h2>Proposal Generator</h2>
        <span>Create Proposal</span>
      </header>

      <main className="form-container">

        <div className="form-heading">
          <h1>Create New Proposal</h1>
          <p>Enter the details below to create your business proposal.</p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Company Details */}
          <section className="form-section">
            <h2>Company Details</h2>

            <div className="form-group">
              <label>Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter your company name"
                required
              />
            </div>

            <div className="form-group">
              <label>Company Logo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
              />
            </div>
          </section>

          {/* Client Details */}
          <section className="form-section">
            <h2>Client Details</h2>

            <div className="form-group">
              <label>Client Name *</label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                placeholder="Enter client name"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Client Email</label>
                <input
                  type="email"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  placeholder="client@example.com"
                />
              </div>

              <div className="form-group">
                <label>Client Company</label>
                <input
                  type="text"
                  name="clientCompany"
                  value={formData.clientCompany}
                  onChange={handleChange}
                  placeholder="Enter client company"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Client Address</label>
              <textarea
                name="clientAddress"
                value={formData.clientAddress}
                onChange={handleChange}
                placeholder="Enter client address"
                rows="3"
              />
            </div>
          </section>

          {/* Project Details */}
          <section className="form-section">
            <h2>Project Details</h2>

            <div className="form-group">
              <label>Project Title *</label>
              <input
                type="text"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                placeholder="Enter project title"
                required
              />
            </div>

            <div className="form-group">
              <label>Project Description</label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Describe your project"
                rows="4"
              />
            </div>

            <div className="form-group">
              <label>Project Scope</label>
              <textarea
                name="projectScope"
                value={formData.projectScope}
                onChange={handleChange}
                placeholder="Describe the project scope and deliverables"
                rows="4"
              />
            </div>
          </section>

          {/* Pricing Details */}
          <section className="form-section">
            <h2>Pricing Details</h2>

            <div className="form-row">
              <div className="form-group">
                <label>Currency</label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                >
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Total Price *</label>
                <input
                  type="number"
                  name="pricing"
                  value={formData.pricing}
                  onChange={handleChange}
                  placeholder="Enter total price"
                  min="0"
                  required
                />
              </div>
            </div>
          </section>

          {/* Additional Details */}
          <section className="form-section">
            <h2>Additional Details</h2>

            <div className="form-group">
              <label>Proposal Valid Until</label>
              <input
                type="date"
                name="validity"
                value={formData.validity}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Terms and Conditions</label>
              <textarea
                name="terms"
                value={formData.terms}
                onChange={handleChange}
                placeholder="Enter terms and conditions"
                rows="4"
              />
            </div>
          </section>

          <div className="form-actions">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate('/')}
            >
              Back to Dashboard
            </button>

            <button type="submit" className="submit-btn">
              Continue to Templates →
            </button>
          </div>

        </form>
      </main>
    </div>
  )
}

export default ProposalForm
