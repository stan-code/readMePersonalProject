import React from 'react'
import {Route} from 'react-router-dom'

import Header from './Header'
import Featured from './Featured'
import Foryou from './ForYou'
import Sidebar from './Sidebar'
import Article from './Article'
import ArticleSidebar from './ArticleSidebar'
import Comments from './Comments'
import SearchPage from './Searchpage'
import ProfilePage from './Profile'

const App = () => {
  return (
    <>
    <Route exact path="/" component={Sidebar} />
    <Route path="/" component={Header} />

     <div className="bodyContent">
    <Route exact path="/" component={Featured} />
    <Route exact path="/" component={Foryou} />
    <Route exact path="/" component={Featured} />
    </div>

    <Route exact path="/Search" component={SearchPage} />
    <Route exact path="/Search" component={Sidebar} />

    <Route exact path="/Profile" component={ProfilePage}/>
    <Route exact path="/Profile" component={Sidebar} />
    
   
    <div className="articleBodyContent">
      <div className="articleBackground">
      <div className="articleContentDivison">
      <Route exact path="/Article" component={Article} />
      <Route exact path="/Article" component={Comments} />
      </div>
    
      <div className="articleSidebarApp">
      <Route exact path="/Article" component={ArticleSidebar} />
      </div>
      </div>
    </div>

    </>
  )
}

export default App
