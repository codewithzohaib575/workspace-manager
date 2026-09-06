__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_AppShell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/AppShell */ "(app-pages-browser)/./src/components/layout/AppShell.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "(app-pages-browser)/./src/store/index.ts");
/* harmony import */ var _store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/slices/authSlice */ "(app-pages-browser)/./src/store/slices/authSlice.ts");
/* harmony import */ var _store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/slices/uiSlice */ "(app-pages-browser)/./src/store/slices/uiSlice.ts");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui */ "(app-pages-browser)/./src/components/ui/index.tsx");
/* harmony import */ var _barrel_optimize_names_Check_Save_User_Users_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Save,User,Users!=!lucide-react */ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user.mjs");
/* harmony import */ var _barrel_optimize_names_Check_Save_User_Users_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Save,User,Users!=!lucide-react */ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/save.mjs");
/* harmony import */ var _barrel_optimize_names_Check_Save_User_Users_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Save,User,Users!=!lucide-react */ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/users.mjs");
/* harmony import */ var _barrel_optimize_names_Check_Save_User_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Check,Save,User,Users!=!lucide-react */ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/check.mjs");
/* __next_internal_client_entry_do_not_use__ default auto */ 
var _s = $RefreshSig$();







function ProfilePage() {
    _s();
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
    const currentUser = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)({
        "ProfilePage.useAppSelector[currentUser]": (s)=>s.auth.currentUser
    }["ProfilePage.useAppSelector[currentUser]"]);
    const users = (0,_store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)({
        "ProfilePage.useAppSelector": (s)=>s.auth.users
    }["ProfilePage.useAppSelector"]) || [];
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentUser?.name ?? '');
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentUser?.email ?? '');
    const handleSaveProfile = (e)=>{
        e.preventDefault();
        if (!name.trim()) return;
        dispatch((0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__.updateProfile)({
            name: name.trim(),
            email: email.trim()
        }));
        dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_5__.addToast)({
            id: String(Date.now()),
            title: 'Profile Updated',
            description: 'Your details have been saved',
            type: 'success'
        }));
    };
    const handleSwitchUser = (userId)=>{
        dispatch((0,_store_slices_authSlice__WEBPACK_IMPORTED_MODULE_4__.switchUser)(userId));
        const targetUser = users?.find((u)=>u.id === userId);
        if (targetUser) {
            setName(targetUser.name);
            setEmail(targetUser.email);
            dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_5__.addToast)({
                id: String(Date.now()),
                title: 'User Switched',
                description: `Now acting as ${targetUser.name}`,
                type: 'info'
            }));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_AppShell__WEBPACK_IMPORTED_MODULE_2__.AppShell, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "p-6 max-w-4xl mx-auto space-y-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "p-2 rounded-xl bg-gold/10 text-gold",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Save_User_Users_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                                    className: "text-xl font-bold",
                                    style: {
                                        color: 'var(--text-primary)'
                                    },
                                    children: "User Profile & Team Switcher"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-xs text-muted",
                                    children: "Manage your personal profile or simulate other teammates."
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                currentUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "p-5 rounded-xl border space-y-4 shadow-sm",
                    style: {
                        background: 'var(--surface)',
                        borderColor: 'var(--border)'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center gap-4 pb-4 border-b",
                            style: {
                                borderColor: 'var(--border)'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
                                    name: currentUser.name,
                                    color: currentUser.color,
                                    size: "lg"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                                            className: "text-base font-bold",
                                            style: {
                                                color: 'var(--text-primary)'
                                            },
                                            children: currentUser.name
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                            className: "text-xs text-muted",
                                            children: currentUser.email
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                            onSubmit: handleSaveProfile,
                            className: "space-y-3 max-w-md",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                            className: "text-xs font-semibold block mb-1 text-muted",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                            type: "text",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            className: "input text-xs w-full"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                            className: "text-xs font-semibold block mb-1 text-muted",
                                            children: "Email Address"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            className: "input text-xs w-full"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    type: "submit",
                                    className: "btn btn-primary btn-xs flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Save_User_Users_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        " Save Changes"
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "p-5 rounded-xl border space-y-4 shadow-sm",
                    style: {
                        background: 'var(--surface)',
                        borderColor: 'var(--border)'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center gap-2 font-bold text-sm",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Save_User_Users_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    size: 16,
                                    className: "text-gold"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    children: "Switch Teammate Persona (Demo Tool)"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                            className: "text-xs text-muted",
                            children: "Click any team member below to simulate their view and permissions."
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",
                            children: (users || []).map((u)=>{
                                const isActive = u.id === currentUser?.id;
                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    onClick: ()=>handleSwitchUser(u.id),
                                    className: `p-3 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${isActive ? 'border-gold bg-gold/10' : 'border-border hover:bg-black/5 dark:hover:bg-white/5'}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
                                                    name: u.name,
                                                    color: u.color,
                                                    size: "sm"
                                                }, void 0, false, {
                                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "text-xs font-bold",
                                                            children: u.name
                                                        }, void 0, false, {
                                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                            className: "text-[11px] text-muted",
                                                            children: u.email
                                                        }, void 0, false, {
                                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Check_Save_User_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                            size: 16,
                                            className: "text-gold flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, u.id, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\app\\profile\\page.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(ProfilePage, "IqOg6o59Oya+dk01QTynDczH3K4=", false, function() {
    return [
        _store__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,
        _store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,
        _store__WEBPACK_IMPORTED_MODULE_3__.useAppSelector
    ];
});
_c = ProfilePage;
var _c;
$RefreshReg$(_c, "ProfilePage");


;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDdUI7QUFDQztBQUNZO0FBQ25CO0FBQ1Q7QUFDZTtBQUV6QyxTQUFTWTs7SUFDdEIsTUFBTUMsV0FBV1gsc0RBQWNBO0lBQy9CLE1BQU1ZLGNBQWNYLHNEQUFjQTttREFBQ1ksQ0FBQUEsSUFBS0EsRUFBRUMsSUFBSSxDQUFDRixXQUFXOztJQUMxRCxNQUFNRyxRQUFRZCxzREFBY0E7c0NBQUNZLENBQUFBLElBQUtBLEVBQUVDLElBQUksQ0FBQ0MsS0FBSzt3Q0FBSyxFQUFFO0lBRXJELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHbkIsK0NBQVFBLENBQUNjLGFBQWFJLFFBQVE7SUFDdEQsTUFBTSxDQUFDRSxPQUFPQyxTQUFTLEdBQUdyQiwrQ0FBUUEsQ0FBQ2MsYUFBYU0sU0FBUztJQUV6RCxNQUFNRSxvQkFBb0IsQ0FBQ0M7UUFDekJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSSxDQUFDTixLQUFLTyxJQUFJLElBQUk7UUFFbEJaLFNBQVNSLHNFQUFhQSxDQUFDO1lBQUVhLE1BQU1BLEtBQUtPLElBQUk7WUFBSUwsT0FBT0EsTUFBTUssSUFBSTtRQUFHO1FBQ2hFWixTQUFTUCwrREFBUUEsQ0FBQztZQUNoQm9CLElBQUlDLE9BQU9DLEtBQUtDLEdBQUc7WUFDbkJDLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxNQUFNO1FBQ1I7SUFDRjtJQUVBLE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QnJCLFNBQVNULG1FQUFVQSxDQUFDOEI7UUFDcEIsTUFBTUMsYUFBYWxCLE9BQU9tQixLQUFLQyxDQUFBQSxJQUFLQSxFQUFFWCxFQUFFLEtBQUtRO1FBQzdDLElBQUlDLFlBQVk7WUFDZGhCLFFBQVFnQixXQUFXakIsSUFBSTtZQUN2QkcsU0FBU2MsV0FBV2YsS0FBSztZQUN6QlAsU0FBU1AsK0RBQVFBLENBQUM7Z0JBQ2hC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b0RBQUV5QixPQUFPTixFQUFFTSxLQUFLO29EQUFFSCxNQUFLOzs7Ozs7OERBQzNDLDhEQUFDRjs7c0VBQ0MsOERBQUNBOzREQUFJQyxXQUFVO3NFQUFxQkYsRUFBRW5CLElBQUk7Ozs7OztzRUFDMUMsOERBQUNvQjs0REFBSUMsV0FBVTtzRUFBMEJGLEVBQUVqQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBSW5Ec0MsMEJBQVksOERBQUNoRCxrR0FBS0E7NENBQUM4QixNQUFNOzRDQUFJRCxXQUFVOzs7Ozs7O21DQWRuQ0YsRUFBRVgsRUFBRTs7Ozs7NEJBaUJmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBbEl3QmQ7O1FBQ0xWLGtEQUFjQTtRQUNYQyxrREFBY0E7UUFDcEJBLGtEQUFjQTs7O0tBSE5TIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHVzZXJcXE9uZURyaXZlXFxEZXNrdG9wXFxBaSBIYWNrdGhvblxcd29ya3NwYWNlLW1hbmFnZXJcXHNyY1xcYXBwXFxwcm9maWxlXFxwYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcFNoZWxsIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9BcHBTaGVsbCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCB7IHN3aXRjaFVzZXIsIHVwZGF0ZVByb2ZpbGUgfSBmcm9tICdAL3N0b3JlL3NsaWNlcy9hdXRoU2xpY2UnO1xuaW1wb3J0IHsgYWRkVG9hc3QgfSBmcm9tICdAL3N0b3JlL3NsaWNlcy91aVNsaWNlJztcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ0AvY29tcG9uZW50cy91aSc7XG5pbXBvcnQgeyBVc2VyLCBVc2VycywgQ2hlY2ssIFNhdmUgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlUGFnZSgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCBjdXJyZW50VXNlciA9IHVzZUFwcFNlbGVjdG9yKHMgPT4gcy5hdXRoLmN1cnJlbnRVc2VyKTtcbiAgY29uc3QgdXNlcnMgPSB1c2VBcHBTZWxlY3RvcihzID0+IHMuYXV0aC51c2VycykgfHwgW107XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoY3VycmVudFVzZXI/Lm5hbWUgPz8gJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKGN1cnJlbnRVc2VyPy5lbWFpbCA/PyAnJyk7XG5cbiAgY29uc3QgaGFuZGxlU2F2ZVByb2ZpbGUgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghbmFtZS50cmltKCkpIHJldHVybjtcblxuICAgIGRpc3BhdGNoKHVwZGF0ZVByb2ZpbGUoeyBuYW1lOiBuYW1lLnRyaW0oKSwgZW1haWw6IGVtYWlsLnRyaW0oKSB9KSk7XG4gICAgZGlzcGF0Y2goYWRkVG9hc3Qoe1xuICAgICAgaWQ6IFN0cmluZyhEYXRlLm5vdygpKSxcbiAgICAgIHRpdGxlOiAnUHJvZmlsZSBVcGRhdGVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnWW91ciBkZXRhaWxzIGhhdmUgYmVlbiBzYXZlZCcsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN3aXRjaFVzZXIgPSAodXNlcklkOiBzdHJpbmcpID0+IHtcbiAgICBkaXNwYXRjaChzd2l0Y2hVc2VyKHVzZXJJZCkpO1xuICAgIGNvbnN0IHRhcmdldFVzZXIgPSB1c2Vycz8uZmluZCh1ID0+IHUuaWQgPT09IHVzZXJJZCk7XG4gICAgaWYgKHRhcmdldFVzZXIpIHtcbiAgICAgIHNldE5hbWUodGFyZ2V0VXNlci5uYW1lKTtcbiAgICAgIHNldEVtYWlsKHRhcmdldFVzZXIuZW1haWwpO1xuICAgICAgZGlzcGF0Y2goYWRkVG9hc3Qoe1xuICAgICAgICBpZDogU3RyaW5nKERhdGUubm93KCkpLFxuICAgICAgICB0aXRsZTogJ1VzZXIgU3dpdGNoZWQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogYE5vdyBhY3RpbmcgYXMgJHt0YXJnZXRVc2VyLm5hbWV9YCxcbiAgICAgICAgdHlwZTogJ2luZm8nLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBTaGVsbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IG1heC13LTR4bCBteC1hdXRvIHNwYWNlLXktNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC14bCBiZy1nb2xkLzEwIHRleHQtZ29sZFwiPlxuICAgICAgICAgICAgPFVzZXIgc2l6ZT17MjB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1wcmltYXJ5KScgfX0+XG4gICAgICAgICAgICAgIFVzZXIgUHJvZmlsZSAmIFRlYW0gU3dpdGNoZXJcbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtbXV0ZWRcIj5NYW5hZ2UgeW91ciBwZXJzb25hbCBwcm9maWxlIG9yIHNpbXVsYXRlIG90aGVyIHRlYW1tYXRlcy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBDdXJyZW50IFVzZXIgQ2FyZCAqL31cbiAgICAgICAge2N1cnJlbnRVc2VyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLXhsIGJvcmRlciBzcGFjZS15LTQgc2hhZG93LXNtXCIgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3ZhcigtLXN1cmZhY2UpJywgYm9yZGVyQ29sb3I6ICd2YXIoLS1ib3JkZXIpJyB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcGItNCBib3JkZXItYlwiIHN0eWxlPXt7IGJvcmRlckNvbG9yOiAndmFyKC0tYm9yZGVyKScgfX0+XG4gICAgICAgICAgICAgIDxBdmF0YXIgbmFtZT17Y3VycmVudFVzZXIubmFtZX0gY29sb3I9e2N1cnJlbnRVc2VyLmNvbG9yfSBzaXplPVwibGdcIiAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ib2xkXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LXByaW1hcnkpJyB9fT5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50VXNlci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkXCI+e2N1cnJlbnRVc2VyLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVNhdmVQcm9maWxlfSBjbGFzc05hbWU9XCJzcGFjZS15LTMgbWF4LXctbWRcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIGJsb2NrIG1iLTEgdGV4dC1tdXRlZFwiPkZ1bGwgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgdGV4dC14cyB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCBibG9jayBtYi0xIHRleHQtbXV0ZWRcIj5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCB0ZXh0LXhzIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14cyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxuICAgICAgICAgICAgICAgIDxTYXZlIHNpemU9ezEzfSAvPiBTYXZlIENoYW5nZXNcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFN3aXRjaCBQZXJzb25hIC8gVGVhbW1hdGUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQteGwgYm9yZGVyIHNwYWNlLXktNCBzaGFkb3ctc21cIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAndmFyKC0tc3VyZmFjZSknLCBib3JkZXJDb2xvcjogJ3ZhcigtLWJvcmRlciknIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZm9udC1ib2xkIHRleHQtc21cIj5cbiAgICAgICAgICAgIDxVc2VycyBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1nb2xkXCIgLz5cbiAgICAgICAgICAgIDxzcGFuPlN3aXRjaCBUZWFtbWF0ZSBQZXJzb25hIChEZW1vIFRvb2wpPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZFwiPlxuICAgICAgICAgICAgQ2xpY2sgYW55IHRlYW0gbWVtYmVyIGJlbG93IHRvIHNpbXVsYXRlIHRoZWlyIHZpZXcgYW5kIHBlcm1pc3Npb25zLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBnYXAtM1wiPlxuICAgICAgICAgICAgeyh1c2VycyB8fCBbXSkubWFwKHUgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IHUuaWQgPT09IGN1cnJlbnRVc2VyPy5pZDtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e3UuaWR9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTd2l0Y2hVc2VyKHUuaWQpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0zIHJvdW5kZWQtbGcgYm9yZGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWFsbCAke1xuICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZSA/ICdib3JkZXItZ29sZCBiZy1nb2xkLzEwJyA6ICdib3JkZXItYm9yZGVyIGhvdmVyOmJnLWJsYWNrLzUgZGFyazpob3ZlcjpiZy13aGl0ZS81J1xuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgbmFtZT17dS5uYW1lfSBjb2xvcj17dS5jb2xvcn0gc2l6ZT1cInNtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkXCI+e3UubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtbXV0ZWRcIj57dS5lbWFpbH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge2lzQWN0aXZlICYmIDxDaGVjayBzaXplPXsxNn0gY2xhc3NOYW1lPVwidGV4dC1nb2xkIGZsZXgtc2hyaW5rLTBcIiAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQXBwU2hlbGw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJBcHBTaGVsbCIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzd2l0Y2hVc2VyIiwidXBkYXRlUHJvZmlsZSIsImFkZFRvYXN0IiwiQXZhdGFyIiwiVXNlciIsIlVzZXJzIiwiQ2hlY2siLCJTYXZlIiwiUHJvZmlsZVBhZ2UiLCJkaXNwYXRjaCIsImN1cnJlbnRVc2VyIiwicyIsImF1dGgiLCJ1c2VycyIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsImhhbmRsZVNhdmVQcm9maWxlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImlkIiwiU3RyaW5nIiwiRGF0ZSIsIm5vdyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0eXBlIiwiaGFuZGxlU3dpdGNoVXNlciIsInVzZXJJZCIsInRhcmdldFVzZXIiLCJmaW5kIiwidSIsImRpdiIsImNsYXNzTmFtZSIsInNpemUiLCJoMSIsInN0eWxlIiwiY29sb3IiLCJwIiwiYmFja2dyb3VuZCIsImJvcmRlckNvbG9yIiwiaDMiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInNwYW4iLCJtYXAiLCJpc0FjdGl2ZSIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx
