"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 0] = "User";
    Roles[Roles["Admin"] = 1] = "Admin";
    Roles[Roles["SuperAdmin"] = 2] = "SuperAdmin";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
