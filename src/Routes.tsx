import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { BlogPage } from './Pages/Blog'
import { NotFound404 } from './Pages/NotFound404'
import { Post } from './Pages/Post'

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BlogPage />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  )
}
