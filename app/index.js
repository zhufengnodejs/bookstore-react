import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import {BookList,BookAdd,BookDetail,App} from './components';

ReactDOM.render(<Router history={hashHistory}>
    <Route path="/" components={App}>
        <IndexRoute components={BookList}/>
        <Route path="add" components={BookAdd}/>
        <Route path="detail/:_id" components={BookDetail}/>
    </Route>
</Router>, document.getElementById('app'));