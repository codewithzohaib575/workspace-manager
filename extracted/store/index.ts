__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store),
/* harmony export */   useAppDispatch: () => (/* binding */ useAppDispatch),
/* harmony export */   useAppSelector: () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reduxjs/toolkit */ "(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _slices_authSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slices/authSlice */ "(app-pages-browser)/./src/store/slices/authSlice.ts");
/* harmony import */ var _slices_workspaceSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slices/workspaceSlice */ "(app-pages-browser)/./src/store/slices/workspaceSlice.ts");
/* harmony import */ var _slices_projectSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/projectSlice */ "(app-pages-browser)/./src/store/slices/projectSlice.ts");
/* harmony import */ var _slices_taskSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slices/taskSlice */ "(app-pages-browser)/./src/store/slices/taskSlice.ts");
/* harmony import */ var _slices_notificationSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slices/notificationSlice */ "(app-pages-browser)/./src/store/slices/notificationSlice.ts");
/* harmony import */ var _slices_activitySlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slices/activitySlice */ "(app-pages-browser)/./src/store/slices/activitySlice.ts");
/* harmony import */ var _slices_uiSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slices/uiSlice */ "(app-pages-browser)/./src/store/slices/uiSlice.ts");
/* harmony import */ var _lib_persistence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/persistence */ "(app-pages-browser)/./src/lib/persistence.ts");
/* __next_internal_client_entry_do_not_use__ store,useAppDispatch,useAppSelector auto */ 









// Load persisted state
const loadedState =  true ? (0,_lib_persistence__WEBPACK_IMPORTED_MODULE_7__.loadStateFromLocalStorage)() : 0;
// Debounce helper
function debounce(fn, delay) {
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>fn(...args), delay);
    };
}
// Persistence middleware
const persistenceMiddleware = (store)=>(next)=>(action)=>{
            const result = next(action);
            // Debounced save to avoid excessive writes
            debouncedSave(store.getState());
            return result;
        };
const debouncedSave = debounce((state)=>{
    // Only persist essential parts (exclude transient UI)
    const s = state;
    const toPersist = {
        auth: {
            currentUser: s.auth.currentUser,
            users: s.auth.users,
            isAuthenticated: s.auth.isAuthenticated,
            preferences: s.auth.preferences
        },
        workspaces: {
            items: s.workspaces.items,
            currentWorkspaceId: s.workspaces.currentWorkspaceId
        },
        projects: {
            items: s.projects.items,
            currentProjectId: s.projects.currentProjectId,
            currentView: s.projects.currentView
        },
        tasks: {
            items: s.tasks.items
        },
        notifications: {
            items: s.notifications.items
        },
        activity: {
            items: s.activity.items.slice(0, 100)
        },
        filters: {
            savedPresets: s.filters.savedPresets,
            sort: s.filters.sort,
            labels: s.filters.labels
        },
        ui: {
            sidebarCollapsed: s.ui.sidebarCollapsed,
            theme: s.ui.theme
        }
    };
    (0,_lib_persistence__WEBPACK_IMPORTED_MODULE_7__.saveStateToLocalStorage)(toPersist);
}, 500);
const rootReducer = {
    auth: _slices_authSlice__WEBPACK_IMPORTED_MODULE_0__["default"],
    workspaces: _slices_workspaceSlice__WEBPACK_IMPORTED_MODULE_1__["default"],
    projects: _slices_projectSlice__WEBPACK_IMPORTED_MODULE_2__["default"],
    tasks: _slices_taskSlice__WEBPACK_IMPORTED_MODULE_3__["default"],
    notifications: _slices_notificationSlice__WEBPACK_IMPORTED_MODULE_4__["default"],
    activity: _slices_activitySlice__WEBPACK_IMPORTED_MODULE_5__["default"],
    ui: _slices_uiSlice__WEBPACK_IMPORTED_MODULE_6__.uiReducer,
    filters: _slices_uiSlice__WEBPACK_IMPORTED_MODULE_6__.filterReducer,
    undoRedo: _slices_uiSlice__WEBPACK_IMPORTED_MODULE_6__.undoRedoReducer
};
// Merge loaded state with defaults
function mergeState(loaded) {
    if (!loaded || typeof loaded !== 'object') return undefined;
    const l = loaded;
    return {
        ...l,
        auth: {
            ..._slices_authSlice__WEBPACK_IMPORTED_MODULE_0__.authInitialState,
            ...l.auth || {},
            users: Array.isArray(l.auth?.users) && l.auth.users.length > 0 ? l.auth.users : _slices_authSlice__WEBPACK_IMPORTED_MODULE_0__.authInitialState.users
        },
        workspaces: {
            ...l.workspaces || {},
            items: Array.isArray(l.workspaces?.items) ? l.workspaces.items : []
        },
        projects: {
            ...l.projects || {},
            items: Array.isArray(l.projects?.items) ? l.projects.items : []
        },
        tasks: {
            ...l.tasks || {},
            items: Array.isArray(l.tasks?.items) ? l.tasks.items : []
        },
        notifications: {
            ...l.notifications || {},
            items: Array.isArray(l.notifications?.items) ? l.notifications.items : []
        },
        activity: {
            ...l.activity || {},
            items: Array.isArray(l.activity?.items) ? l.activity.items : []
        }
    };
}
const preloadedState = mergeState(loadedState);
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__.configureStore)({
    reducer: rootReducer,
    preloadedState: preloadedState,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'persist/PERSIST',
                    'persist/REHYDRATE'
                ]
            }
        }).concat(persistenceMiddleware)
});
const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TVUsUUFBUXpCLGdFQUFjQSxDQUFDO0lBQ2xDaUUsU0FBU1Q7SUFDVFEsZ0JBQWdCQTtJQUNoQkUsWUFBWSxDQUFDQyx1QkFDWEEscUJBQXFCO1lBQ25CQyxtQkFBbUI7Z0JBQ2pCQyxnQkFBZ0I7b0JBQUM7b0JBQW1CO2lCQUFvQjtZQUMxRDtRQUNGLEdBQUdDLE1BQU0sQ0FBQzlDO0FBQ2QsR0FBRztBQUlJLE1BQU0rQyxpQkFBaUIsSUFBTXRFLHdEQUFXQSxHQUFnQjtBQUN4RCxNQUFNdUUsaUJBQWtEdEUsb0RBQVdBLENBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcdXNlclxcT25lRHJpdmVcXERlc2t0b3BcXEFpIEhhY2t0aG9uXFx3b3Jrc3BhY2UtbWFuYWdlclxcc3JjXFxzdG9yZVxcaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIE1pZGRsZXdhcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciwgVHlwZWRVc2VTZWxlY3Rvckhvb2sgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgYXV0aFJlZHVjZXIsIHsgYXV0aEluaXRpYWxTdGF0ZSB9IGZyb20gJy4vc2xpY2VzL2F1dGhTbGljZSc7XG5pbXBvcnQgd29ya3NwYWNlUmVkdWNlciBmcm9tICcuL3NsaWNlcy93b3Jrc3BhY2VTbGljZSc7XG5pbXBvcnQgcHJvamVjdFJlZHVjZXIgZnJvbSAnLi9zbGljZXMvcHJvamVjdFNsaWNlJztcbmltcG9ydCB0YXNrUmVkdWNlciBmcm9tICcuL3NsaWNlcy90YXNrU2xpY2UnO1xuaW1wb3J0IG5vdGlmaWNhdGlvblJlZHVjZXIgZnJvbSAnLi9zbGljZXMvbm90aWZpY2F0aW9uU2xpY2UnO1xuaW1wb3J0IGFjdGl2aXR5UmVkdWNlciBmcm9tICcuL3NsaWNlcy9hY3Rpdml0eVNsaWNlJztcbmltcG9ydCB7IHVpUmVkdWNlciwgZmlsdGVyUmVkdWNlciwgdW5kb1JlZG9SZWR1Y2VyIH0gZnJvbSAnLi9zbGljZXMvdWlTbGljZSc7XG5pbXBvcnQgeyBzYXZlU3RhdGVUb0xvY2FsU3RvcmFnZSwgbG9hZFN0YXRlRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJ0AvbGliL3BlcnNpc3RlbmNlJztcblxuLy8gTG9hZCBwZXJzaXN0ZWQgc3RhdGVcbmNvbnN0IGxvYWRlZFN0YXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2FkU3RhdGVGcm9tTG9jYWxTdG9yYWdlKCkgOiB1bmRlZmluZWQ7XG5cbi8vIERlYm91bmNlIGhlbHBlclxuZnVuY3Rpb24gZGVib3VuY2U8VCBleHRlbmRzICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB2b2lkPihmbjogVCwgZGVsYXk6IG51bWJlcik6IFQge1xuICBsZXQgdGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuICByZXR1cm4gKCguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gZm4oLi4uYXJncyksIGRlbGF5KTtcbiAgfSkgYXMgVDtcbn1cblxuLy8gUGVyc2lzdGVuY2UgbWlkZGxld2FyZVxuY29uc3QgcGVyc2lzdGVuY2VNaWRkbGV3YXJlOiBNaWRkbGV3YXJlID0gc3RvcmUgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuICBjb25zdCByZXN1bHQgPSBuZXh0KGFjdGlvbik7XG4gIC8vIERlYm91bmNlZCBzYXZlIHRvIGF2b2lkIGV4Y2Vzc2l2ZSB3cml0ZXNcbiAgZGVib3VuY2VkU2F2ZShzdG9yZS5nZXRTdGF0ZSgpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IGRlYm91bmNlZFNhdmUgPSBkZWJvdW5jZSgoc3RhdGU6IHVua25vd24pID0+IHtcbiAgLy8gT25seSBwZXJzaXN0IGVzc2VudGlhbCBwYXJ0cyAoZXhjbHVkZSB0cmFuc2llbnQgVUkpXG4gIGNvbnN0IHMgPSBzdGF0ZSBhcyBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XG4gIGNvbnN0IHRvUGVyc2lzdCA9IHtcbiAgICBhdXRoOiB7XG4gICAgICBjdXJyZW50VXNlcjogcy5hdXRoLmN1cnJlbnRVc2VyLFxuICAgICAgdXNlcnM6IHMuYXV0aC51c2VycyxcbiAgICAgIGlzQXV0aGVudGljYXRlZDogcy5hdXRoLmlzQXV0aGVudGljYXRlZCxcbiAgICAgIHByZWZlcmVuY2VzOiBzLmF1dGgucHJlZmVyZW5jZXMsXG4gICAgfSxcbiAgICB3b3Jrc3BhY2VzOiB7IGl0ZW1zOiBzLndvcmtzcGFjZXMuaXRlbXMsIGN1cnJlbnRXb3Jrc3BhY2VJZDogcy53b3Jrc3BhY2VzLmN1cnJlbnRXb3Jrc3BhY2VJZCB9LFxuICAgIHByb2plY3RzOiB7IGl0ZW1zOiBzLnByb2plY3RzLml0ZW1zLCBjdXJyZW50UHJvamVjdElkOiBzLnByb2plY3RzLmN1cnJlbnRQcm9qZWN0SWQsIGN1cnJlbnRWaWV3OiBzLnByb2plY3RzLmN1cnJlbnRWaWV3IH0sXG4gICAgdGFza3M6IHsgaXRlbXM6IHMudGFza3MuaXRlbXMgfSxcbiAgICBub3RpZmljYXRpb25zOiB7IGl0ZW1zOiBzLm5vdGlmaWNhdGlvbnMuaXRlbXMgfSxcbiAgICBhY3Rpdml0eTogeyBpdGVtczogcy5hY3Rpdml0eS5pdGVtcy5zbGljZSgwLCAxMDApIH0sXG4gICAgZmlsdGVyczogeyBzYXZlZFByZXNldHM6IHMuZmlsdGVycy5zYXZlZFByZXNldHMsIHNvcnQ6IHMuZmlsdGVycy5zb3J0LCBsYWJlbHM6IHMuZmlsdGVycy5sYWJlbHMgfSxcbiAgICB1aTogeyBzaWRlYmFyQ29sbGFwc2VkOiBzLnVpLnNpZGViYXJDb2xsYXBzZWQsIHRoZW1lOiBzLnVpLnRoZW1lIH0sXG4gIH07XG4gIHNhdmVTdGF0ZVRvTG9jYWxTdG9yYWdlKHRvUGVyc2lzdCk7XG59LCA1MDApO1xuXG5jb25zdCByb290UmVkdWNlciA9IHtcbiAgYXV0aDogYXV0aFJlZHVjZXIsXG4gIHdvcmtzcGFjZXM6IHdvcmtzcGFjZVJlZHVjZXIsXG4gIHByb2plY3RzOiBwcm9qZWN0UmVkdWNlcixcbiAgdGFza3M6IHRhc2tSZWR1Y2VyLFxuICBub3RpZmljYXRpb25zOiBub3RpZmljYXRpb25SZWR1Y2VyLFxuICBhY3Rpdml0eTogYWN0aXZpdHlSZWR1Y2VyLFxuICB1aTogdWlSZWR1Y2VyLFxuICBmaWx0ZXJzOiBmaWx0ZXJSZWR1Y2VyLFxuICB1bmRvUmVkbzogdW5kb1JlZG9SZWR1Y2VyLFxufTtcblxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0ge1xuICBbSyBpbiBrZXlvZiB0eXBlb2Ygcm9vdFJlZHVjZXJdOiBSZXR1cm5UeXBlPCh0eXBlb2Ygcm9vdFJlZHVjZXIpW0tdPjtcbn07XG5cbi8vIE1lcmdlIGxvYWRlZCBzdGF0ZSB3aXRoIGRlZmF1bHRzXG5mdW5jdGlvbiBtZXJnZVN0YXRlKGxvYWRlZDogdW5rbm93bik6IFBhcnRpYWw8Um9vdFN0YXRlPiB8IHVuZGVmaW5lZCB7XG4gIGlmICghbG9hZGVkIHx8IHR5cGVvZiBsb2FkZWQgIT09ICdvYmplY3QnKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCBsID0gbG9hZGVkIGFzIFJlY29yZDxzdHJpbmcsIGFueT47XG4gIHJldHVybiB7XG4gICAgLi4ubCxcbiAgICBhdXRoOiB7XG4gICAgICAuLi5hdXRoSW5pdGlhbFN0YXRlLFxuICAgICAgLi4uKGwuYXV0aCB8fCB7fSksXG4gICAgICB1c2VyczogQXJyYXkuaXNBcnJheShsLmF1dGg/LnVzZXJzKSAmJiBsLmF1dGgudXNlcnMubGVuZ3RoID4gMCA/IGwuYXV0aC51c2VycyA6IGF1dGhJbml0aWFsU3RhdGUudXNlcnMsXG4gICAgfSxcbiAgICB3b3Jrc3BhY2VzOiB7XG4gICAgICAuLi4obC53b3Jrc3BhY2VzIHx8IHt9KSxcbiAgICAgIGl0ZW1zOiBBcnJheS5pc0FycmF5KGwud29ya3NwYWNlcz8uaXRlbXMpID8gbC53b3Jrc3BhY2VzLml0ZW1zIDogW10sXG4gICAgfSxcbiAgICBwcm9qZWN0czoge1xuICAgICAgLi4uKGwucHJvamVjdHMgfHwge30pLFxuICAgICAgaXRlbXM6IEFycmF5LmlzQXJyYXkobC5wcm9qZWN0cz8uaXRlbXMpID8gbC5wcm9qZWN0cy5pdGVtcyA6IFtdLFxuICAgIH0sXG4gICAgdGFza3M6IHtcbiAgICAgIC4uLihsLnRhc2tzIHx8IHt9KSxcbiAgICAgIGl0ZW1zOiBBcnJheS5pc0FycmF5KGwudGFza3M/Lml0ZW1zKSA/IGwudGFza3MuaXRlbXMgOiBbXSxcbiAgICB9LFxuICAgIG5vdGlmaWNhdGlvbnM6IHtcbiAgICAgIC4uLihsLm5vdGlmaWNhdGlvbnMgfHwge30pLFxuICAgICAgaXRlbXM6IEFycmF5LmlzQXJyYXkobC5ub3RpZmljYXRpb25zPy5pdGVtcykgPyBsLm5vdGlmaWNhdGlvbnMuaXRlbXMgOiBbXSxcbiAgICB9LFxuICAgIGFjdGl2aXR5OiB7XG4gICAgICAuLi4obC5hY3Rpdml0eSB8fCB7fSksXG4gICAgICBpdGVtczogQXJyYXkuaXNBcnJheShsLmFjdGl2aXR5Py5pdGVtcykgPyBsLmFjdGl2aXR5Lml0ZW1zIDogW10sXG4gICAgfSxcbiAgfSBhcyBQYXJ0aWFsPFJvb3RTdGF0ZT47XG59XG5cbmNvbnN0IHByZWxvYWRlZFN0YXRlID0gbWVyZ2VTdGF0ZShsb2FkZWRTdGF0ZSk7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXG4gIHByZWxvYWRlZFN0YXRlOiBwcmVsb2FkZWRTdGF0ZSBhcyBQYXJhbWV0ZXJzPHR5cGVvZiBjb25maWd1cmVTdG9yZT5bMF1bJ3ByZWxvYWRlZFN0YXRlJ10sXG4gIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XG4gICAgICBzZXJpYWxpemFibGVDaGVjazoge1xuICAgICAgICBpZ25vcmVkQWN0aW9uczogWydwZXJzaXN0L1BFUlNJU1QnLCAncGVyc2lzdC9SRUhZRFJBVEUnXSxcbiAgICAgIH0sXG4gICAgfSkuY29uY2F0KHBlcnNpc3RlbmNlTWlkZGxld2FyZSksXG59KTtcblxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XG5cbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuZXhwb3J0IGNvbnN0IHVzZUFwcFNlbGVjdG9yOiBUeXBlZFVzZVNlbGVjdG9ySG9vazxSb290U3RhdGU+ID0gdXNlU2VsZWN0b3I7XG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiYXV0aFJlZHVjZXIiLCJhdXRoSW5pdGlhbFN0YXRlIiwid29ya3NwYWNlUmVkdWNlciIsInByb2plY3RSZWR1Y2VyIiwidGFza1JlZHVjZXIiLCJub3RpZmljYXRpb25SZWR1Y2VyIiwiYWN0aXZpdHlSZWR1Y2VyIiwidWlSZWR1Y2VyIiwiZmlsdGVyUmVkdWNlciIsInVuZG9SZWRvUmVkdWNlciIsInNhdmVTdGF0ZVRvTG9jYWxTdG9yYWdlIiwibG9hZFN0YXRlRnJvbUxvY2FsU3RvcmFnZSIsImxvYWRlZFN0YXRlIiwidW5kZWZpbmVkIiwiZGVib3VuY2UiLCJmbiIsImRlbGF5IiwidGltZXIiLCJhcmdzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInBlcnNpc3RlbmNlTWlkZGxld2FyZSIsInN0b3JlIiwibmV4dCIsImFjdGlvbiIsInJlc3VsdCIsImRlYm91bmNlZFNhdmUiLCJnZXRTdGF0ZSIsInN0YXRlIiwicyIsInRvUGVyc2lzdCIsImF1dGgiLCJjdXJyZW50VXNlciIsInVzZXJzIiwiaXNBdXRoZW50aWNhdGVkIiwicHJlZmVyZW5jZXMiLCJ3b3Jrc3BhY2VzIiwiaXRlbXMiLCJjdXJyZW50V29ya3NwYWNlSWQiLCJwcm9qZWN0cyIsImN1cnJlbnRQcm9qZWN0SWQiLCJjdXJyZW50VmlldyIsInRhc2tzIiwibm90aWZpY2F0aW9ucyIsImFjdGl2aXR5Iiwic2xpY2UiLCJmaWx0ZXJzIiwic2F2ZWRQcmVzZXRzIiwic29ydCIsImxhYmVscyIsInVpIiwic2lkZWJhckNvbGxhcHNlZCIsInRoZW1lIiwicm9vdFJlZHVjZXIiLCJ1bmRvUmVkbyIsIm1lcmdlU3RhdGUiLCJsb2FkZWQiLCJsIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwicHJlbG9hZGVkU3RhdGUiLCJyZWR1Y2VyIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJpZ25vcmVkQWN0aW9ucyIsImNvbmNhdCIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/index.ts
