import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PersonDetailMain from '../container/detail/PersonDetailMain'
import PersonList from '../container/list/PersonListMain'
import Page404NotFound from '../container/Page404'

const RootRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={PersonList} />
        <Route path="/detail" Component={PersonDetailMain} />
        <Route path="*" Component={Page404NotFound} />
      </Routes>
    </Router>
  )
}

export default RootRoutes
