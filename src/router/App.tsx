
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Import Pages
import { Home } from '../Pages/Home'
import { ProjectDescription } from '../Pages/ProjectDescription'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:name" element={<ProjectDescription/>}/>
      </Routes>
    </BrowserRouter>
  )
}
