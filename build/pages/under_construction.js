/* Copyright (c) 2017 Intel Corporation

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

var React = require('react');
var ReactDOM = require('react-dom');
var navbar = require('../components/navbar.js');
var Notice = require('../components/underConstruction.js');
var $ = require('jquery');

$('document').ready(function () {
    var activeTenant = datamanager.data.activeTenant;
    // Navigation bar
    var nprops = { logoutUrl: "/authenticate/logout" };
    // Data manager gets tenants which was passed through  routes:/tenant
    nprops.tenants = datamanager.data.tenants;
    nprops.activeTenant = activeTenant;
    nprops.back = {
        label: '< Back to [Overview]',
        url: '/tenant'
    };

    nprops.username = document.getElementById("main-top-navbar").getAttribute("attr-user");
    var n = React.createElement(navbar, nprops);
    ReactDOM.render(n, document.getElementById("main-top-navbar"));
    ReactDOM.render(React.createElement(Notice, null), document.getElementById('construction-notice'));
});