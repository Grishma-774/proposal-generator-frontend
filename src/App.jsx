import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import ProposalForm from './Pages/ProposalForm/ProposalForm'
import TemplateSelection from './Pages/TemplateSelection/TemplateSelection'
import Preview from './Pages/Preview/Preview'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/proposal-form" element={<ProposalForm/>} />
      <Route path="/templates" element={<TemplateSelection />} />
       <Route path="/preview" element={<Preview />} />
    </Routes>
  )
}

export default App

