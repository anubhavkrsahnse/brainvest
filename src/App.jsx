import DisclaimerHeader from './components/DisclaimerHeader.jsx'
import TargetScrolly from './components/TargetScrolly.jsx'
import MasterDashboard from './components/MasterDashboard.jsx'
import ReturnsTracker from './components/ReturnsTracker.jsx'
import USStocksModule from './components/USStocksModule.jsx'
import IPOModule from './components/IPOModule.jsx'
import ETFModule from './components/ETFModule.jsx'

export default function App() {
  return (
    <>
      <DisclaimerHeader />
      <TargetScrolly />
      <MasterDashboard />
      <ReturnsTracker />
      <USStocksModule />
      <IPOModule />
      <ETFModule />
      <footer>
        brAInvest is an educational project. Nothing here is investment advice. The creator is NOT SEBI registered.
        <br />
        Data sources are cited per data point (NSE, Yahoo Finance, Google Sheets, Zerodha contract notes via Gmail).
        Past or targeted returns (incl. the 17% illustration) do not guarantee future results.
      </footer>
    </>
  )
}
