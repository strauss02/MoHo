import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Orchidea from './routes/Orchidea'
import HotelPage from './components/HotelPage'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="hotels">
          <Route
            index
            element={
              <main>
                <h1>Select a Hotel</h1>
              </main>
            }
          />
          <Route path=":hotelName" element={<HotelPage />} />
        </Route>
        <Route path="orchidea" element={<Orchidea />} />
        <Route
          path="*"
          element={
            <main>
              <h3>Sorry pal! nothing to see here (404)</h3>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
