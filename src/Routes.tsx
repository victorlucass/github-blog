import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { BlogPage } from './Pages/Blog'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BlogPage />} />
      </Route>
    </Routes>
  )
}
