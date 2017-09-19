import { Router , Route , hashHistory } from 'react-router';
import React from 'react';
import Artcle from '../container/artcle';
import Story from '../container/story';
import App from '../App';
export const route = 
<Router>
    <Route path="/" component={App}>
        <Route path="artcle" component={Artcle}/>
        <Route path="story" component={Story}/>
    </Route>
</Router>