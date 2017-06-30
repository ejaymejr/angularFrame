"use strict";
var router_1 = require("@angular/router");
var project_component_1 = require("./components/project.component");
var home_component_1 = require("./components/home.component");
var notfound_component_1 = require("./notfound.component");
var appRouter = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'project',
        component: project_component_1.ProjectComponent
    },
    {
        path: '404',
        component: notfound_component_1.NotFoundComponent
    },
    {
        path: '**',
        redirectTo: '404'
    },
];
exports.Router = router_1.RouterModule.forRoot(appRouter);
//# sourceMappingURL=router.component.js.map