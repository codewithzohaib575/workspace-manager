__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTaskModal: () => (/* binding */ CreateTaskModal)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "(app-pages-browser)/./src/store/index.ts");
/* harmony import */ var _store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/slices/uiSlice */ "(app-pages-browser)/./src/store/slices/uiSlice.ts");
/* harmony import */ var _store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/slices/taskSlice */ "(app-pages-browser)/./src/store/slices/taskSlice.ts");
/* harmony import */ var _components_ui_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/Modal */ "(app-pages-browser)/./src/components/ui/Modal.tsx");
/* __next_internal_client_entry_do_not_use__ CreateTaskModal auto */ 
var _s = $RefreshSig$();





function CreateTaskModal() {
    _s();
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
    const activeModal = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)({
        "CreateTaskModal.useAppSelector[activeModal]": (s)=>s.ui.activeModal
    }["CreateTaskModal.useAppSelector[activeModal]"]);
    const currentWorkspaceId = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)({
        "CreateTaskModal.useAppSelector[currentWorkspaceId]": (s)=>s.workspaces.currentWorkspaceId
    }["CreateTaskModal.useAppSelector[currentWorkspaceId]"]);
    const currentProjectId = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)({
        "CreateTaskModal.useAppSelector[currentProjectId]": (s)=>s.projects.currentProjectId
    }["CreateTaskModal.useAppSelector[currentProjectId]"]);
    const rawProjects = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)({
        "CreateTaskModal.useAppSelector": (s)=>s.projects.items
    }["CreateTaskModal.useAppSelector"]) || [];
    const projects = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)({
        "CreateTaskModal.useMemo[projects]": ()=>(rawProjects || []).filter({
                "CreateTaskModal.useMemo[projects]": (p)=>p.workspaceId === currentWorkspaceId
            }["CreateTaskModal.useMemo[projects]"])
    }["CreateTaskModal.useMemo[projects]"], [
        rawProjects,
        currentWorkspaceId
    ]);
    const users = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)({
        "CreateTaskModal.useAppSelector": (s)=>s.auth.users
    }["CreateTaskModal.useAppSelector"]) || [];
    const currentUser = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)({
        "CreateTaskModal.useAppSelector[currentUser]": (s)=>s.auth.currentUser
    }["CreateTaskModal.useAppSelector[currentUser]"]);
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [projectId, setProjectId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentProjectId ?? projects[0]?.id ?? '');
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('todo');
    const [priority, setPriority] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('medium');
    const [assigneeId, setAssigneeId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(currentUser?.id ?? '');
    const [dueDate, setDueDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    if (activeModal !== 'createTask') return null;
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!title.trim() || !projectId) return;
        const newTask = {
            id: `task-${Date.now().toString().slice(-6)}`,
            title: title.trim(),
            description: description.trim() || undefined,
            projectId,
            workspaceId: currentWorkspaceId ?? 'ws-1',
            status,
            priority,
            assigneeId: assigneeId || undefined,
            dueDate: dueDate ? new Date(dueDate).toISOString() : undefined,
            labels: [],
            subtasks: [],
            comments: [],
            attachments: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            createdBy: currentUser?.id ?? 'user-1',
            order: 0,
            isArchived: false
        };
        dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.addTask)(newTask));
        dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.closeModal)());
        dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.addToast)({
            id: String(Date.now()),
            title: 'Task Created',
            description: `"${newTask.title}" added successfully`,
            type: 'success'
        }));
        setTitle('');
        setDescription('');
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {
        open: true,
        onClose: ()=>dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.closeModal)()),
        title: "Create New Task",
        size: "md",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                            className: "text-xs font-semibold block mb-1",
                            style: {
                                color: 'var(--text-muted)'
                            },
                            children: "Task Title *"
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                            type: "text",
                            required: true,
                            value: title,
                            onChange: (e)=>setTitle(e.target.value),
                            placeholder: "e.g. Implement user authentication flow",
                            className: "input w-full text-sm",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                    className: "text-xs font-semibold block mb-1",
                                    style: {
                                        color: 'var(--text-muted)'
                                    },
                                    children: "Project *"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                                    value: projectId,
                                    onChange: (e)=>setProjectId(e.target.value),
                                    className: "select w-full text-xs",
                                    required: true,
                                    children: projects.map((p)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: p.id,
                                            children: [
                                                p.icon,
                                                " ",
                                                p.name
                                            ]
                                        }, p.id, true, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                    className: "text-xs font-semibold block mb-1",
                                    style: {
                                        color: 'var(--text-muted)'
                                    },
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                                    value: status,
                                    onChange: (e)=>setStatus(e.target.value),
                                    className: "select w-full text-xs",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "todo",
                                            children: "To Do"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "in_progress",
                                            children: "In Progress"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "in_review",
                                            children: "In Review"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "done",
                                            children: "Done"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                    className: "text-xs font-semibold block mb-1",
                                    style: {
                                        color: 'var(--text-muted)'
                                    },
                                    children: "Priority"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                                    value: priority,
                                    onChange: (e)=>setPriority(e.target.value),
                                    className: "select w-full text-xs",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "urgent",
                                            children: "\uD83D\uDD34 Urgent"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "high",
                                            children: "\uD83D\uDFE0 High"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "medium",
                                            children: "\uD83D\uDFE1 Medium"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "low",
                                            children: "\uD83D\uDFE2 Low"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "none",
                                            children: "⚪ None"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                    className: "text-xs font-semibold block mb-1",
                                    style: {
                                        color: 'var(--text-muted)'
                                    },
                                    children: "Assignee"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                                    value: assigneeId,
                                    onChange: (e)=>setAssigneeId(e.target.value),
                                    className: "select w-full text-xs",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "",
                                            children: "Unassigned"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        users.map((u)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                                value: u.id,
                                                children: u.name
                                            }, u.id, false, {
                                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                            className: "text-xs font-semibold block mb-1",
                            style: {
                                color: 'var(--text-muted)'
                            },
                            children: "Due Date"
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                            type: "date",
                            value: dueDate,
                            onChange: (e)=>setDueDate(e.target.value),
                            className: "input w-full text-xs"
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                            className: "text-xs font-semibold block mb-1",
                            style: {
                                color: 'var(--text-muted)'
                            },
                            children: "Description (Optional)"
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                            value: description,
                            onChange: (e)=>setDescription(e.target.value),
                            placeholder: "Add relevant links, notes, or acceptance criteria...",
                            rows: 3,
                            className: "textarea w-full text-xs"
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex justify-end gap-2 pt-2 border-t",
                    style: {
                        borderColor: 'var(--border)'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                            type: "button",
                            onClick: ()=>dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.closeModal)()),
                            className: "btn btn-secondary btn-sm",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                            type: "submit",
                            className: "btn btn-primary btn-sm",
                            children: "Create Task"
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\CreateTaskModal.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(CreateTaskModal, "dAK4yytr0Dd+wsJE8yeaKnw3Q9U=", false, function() {
    return [
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector
    ];
});
_c = CreateTaskModal;
var _c;
$RefreshReg$(_c, "CreateTaskModal");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Rhc2svQ3JlYXRlVGFza01vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ2U7QUFDSztBQUNYO0FBQ0w7QUFHdkMsU0FBU1E7O0lBQ2QsTUFBTUMsV0FBV1Asc0RBQWNBO0lBQy9CLE1BQU1RLGNBQWNQLHNEQUFjQTt1REFBQ1EsQ0FBQUEsSUFBS0EsRUFBRUMsRUFBRSxDQUFDRixXQUFXOztJQUN4RCxNQUFNRyxxQkFBcUJWLHNEQUFjQTs4REFBQ1EsQ0FBQUEsSUFBS0EsRUFBRUcsVUFBVSxDQUFDRCxrQkFBa0I7O0lBQzlFLE1BQU1FLG1CQUFtQlosc0RBQWNBOzREQUFDUSxDQUFBQSxJQUFLQSxFQUFFSyxRQUFRLENBQUNELGdCQUFnQjs7SUFDeEUsTUFBTUUsY0FBY2Qsc0RBQWNBOzBDQUFDUSxDQUFBQSxJQUFLQSxFQUFFSyxRQUFRLENBQUNFLEtBQUs7NENBQUssRUFBRTtJQUMvRCxNQUFNRixXQUFXZiw4Q0FBT0E7NkNBQUMsSUFBTSxDQUFDZ0IsZUFBZSxFQUFFLEVBQUVFLE1BQU07cURBQUNDLENBQUFBLElBQUtBLEVBQUVDLFdBQVcsS0FBS1I7OzRDQUFxQjtRQUFDSTtRQUFhSjtLQUFtQjtJQUN2SSxNQUFNUyxRQUFRbkIsc0RBQWNBOzBDQUFDUSxDQUFBQSxJQUFLQSxFQUFFWSxJQUFJLENBQUNELEtBQUs7NENBQUssRUFBRTtJQUNyRCxNQUFNRSxjQUFjckIsc0RBQWNBO3VEQUFDUSxDQUFBQSxJQUFLQSxFQUFFWSxJQUFJLENBQUNDLFdBQVc7O0lBRTFELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHMUIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDMkIsYUFBYUMsZUFBZSxHQUFHNUIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDNkIsV0FBV0MsYUFBYSxHQUFHOUIsK0NBQVFBLENBQUNlLG9CQUFvQkMsUUFBUSxDQUFDLEVBQUUsRUFB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dXNlclxcT25lRHJpdmVcXERlc2t0b3BcXEFpIEhhY2t0aG9uXFx3b3Jrc3BhY2UtbWFuYWdlclxcc3JjXFxjb21wb25lbnRzXFx0YXNrXFxDcmVhdGVUYXNrTW9kYWwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnQC9zdG9yZSc7XG5pbXBvcnQgeyBjbG9zZU1vZGFsLCBhZGRUb2FzdCB9IGZyb20gJ0Avc3RvcmUvc2xpY2VzL3VpU2xpY2UnO1xuaW1wb3J0IHsgYWRkVGFzayB9IGZyb20gJ0Avc3RvcmUvc2xpY2VzL3Rhc2tTbGljZSc7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9Nb2RhbCc7XG5pbXBvcnQgdHlwZSB7IFRhc2ssIFByaW9yaXR5LCBUYXNrU3RhdHVzIH0gZnJvbSAnQC90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVUYXNrTW9kYWwoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgYWN0aXZlTW9kYWwgPSB1c2VBcHBTZWxlY3RvcihzID0+IHMudWkuYWN0aXZlTW9kYWwpO1xuICBjb25zdCBjdXJyZW50V29ya3NwYWNlSWQgPSB1c2VBcHBTZWxlY3RvcihzID0+IHMud29ya3NwYWNlcy5jdXJyZW50V29ya3NwYWNlSWQpO1xuICBjb25zdCBjdXJyZW50UHJvamVjdElkID0gdXNlQXBwU2VsZWN0b3IocyA9PiBzLnByb2plY3RzLmN1cnJlbnRQcm9qZWN0SWQpO1xuICBjb25zdCByYXdQcm9qZWN0cyA9IHVzZUFwcFNlbGVjdG9yKHMgPT4gcy5wcm9qZWN0cy5pdGVtcykgfHwgW107XG4gIGNvbnN0IHByb2plY3RzID0gdXNlTWVtbygoKSA9PiAocmF3UHJvamVjdHMgfHwgW10pLmZpbHRlcihwID0+IHAud29ya3NwYWNlSWQgPT09IGN1cnJlbnRXb3Jrc3BhY2VJZCksIFtyYXdQcm9qZWN0cywgY3VycmVudFdvcmtzcGFjZUlkXSk7XG4gIGNvbnN0IHVzZXJzID0gdXNlQXBwU2VsZWN0b3IocyA9PiBzLmF1dGgudXNlcnMpIHx8IFtdO1xuICBjb25zdCBjdXJyZW50VXNlciA9IHVzZUFwcFNlbGVjdG9yKHMgPT4gcy5hdXRoLmN1cnJlbnRVc2VyKTtcblxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwcm9qZWN0SWQsIHNldFByb2plY3RJZF0gPSB1c2VTdGF0ZShjdXJyZW50UHJvamVjdElkID8/IHByb2plY3RzWzBdPy5pZCA/PyAnJyk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KCd0b2RvJyk7XG4gIGNvbnN0IFtwcmlvcml0eSwgc2V0UHJpb3JpdHldID0gdXNlU3RhdGU8UHJpb3JpdHk+KCdtZWRpdW0nKTtcbiAgY29uc3QgW2Fzc2lnbmVlSWQsIHNldEFzc2lnbmVlSWRdID0gdXNlU3RhdGUoY3VycmVudFVzZXI/LmlkID8/ICcnKTtcbiAgY29uc3QgW2R1ZURhdGUsIHNldER1ZURhdGVdID0gdXNlU3RhdGUoJycpO1xuXG4gIGlmIChhY3RpdmVNb2RhbCAhPT0gJ2NyZWF0ZVRhc2snKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGl0bGUudHJpbSgpIHx8ICFwcm9qZWN0SWQpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1Rhc2s6IFRhc2sgPSB7XG4gICAgICBpZDogYHRhc2stJHtEYXRlLm5vdygpLnRvU3RyaW5nKCkuc2xpY2UoLTYpfWAsXG4gICAgICB0aXRsZTogdGl0bGUudHJpbSgpLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnRyaW0oKSB8fCB1bmRlZmluZWQsXG4gICAgICBwcm9qZWN0SWQsXG4gICAgICB3b3Jrc3BhY2VJZDogY3VycmVudFdvcmtzcGFjZUlkID8/ICd3cy0xJyxcbiAgICAgIHN0YXR1cyxcbiAgICAgIHByaW9yaXR5LFxuICAgICAgYXNzaWduZWVJZDogYXNzaWduZWVJZCB8fCB1bmRlZmluZWQsXG4gICAgICBkdWVEYXRlOiBkdWVEYXRlID8gbmV3IERhdGUoZHVlRGF0ZSkudG9JU09TdHJpbmcoKSA6IHVuZGVmaW5lZCxcbiAgICAgIGxhYmVsczogW10sXG4gICAgICBzdWJ0YXNrczogW10sXG4gICAgICBjb21tZW50czogW10sXG4gICAgICBhdHRhY2htZW50czogW10sXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgY3JlYXRlZEJ5OiBjdXJyZW50VXNlcj8uaWQgPz8gJ3VzZXItMScsXG4gICAgICBvcmRlcjogMCxcbiAgICAgIGlzQXJjaGl2ZWQ6IGZhbHNlLFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChhZGRUYXNrKG5ld1Rhc2spKTtcbiAgICBkaXNwYXRjaChjbG9zZU1vZGFsKCkpO1xuICAgIGRpc3BhdGNoKGFkZFRvYXN0KHtcbiAgICAgIGlkOiBTdHJpbmcoRGF0ZS5ub3coKSksXG4gICAgICB0aXRsZTogJ1Rhc2sgQ3JlYXRlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogYFwiJHtuZXdUYXNrLnRpdGxlfVwiIGFkZGVkIHN1Y2Nlc3NmdWxseWAsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgfSkpO1xuXG4gICAgc2V0VGl0bGUoJycpO1xuICAgIHNldERlc2NyaXB0aW9uKCcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgb3Blbj17dHJ1ZX1cbiAgICAgIG9uQ2xvc2U9eygpID0+IGRpc3BhdGNoKGNsb3NlTW9kYWwoKSl9XG4gICAgICB0aXRsZT1cIkNyZWF0ZSBOZXcgVGFza1wiXG4gICAgICBzaXplPVwibWRcIlxuICAgID5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgYmxvY2sgbWItMVwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1tdXRlZCknIH19PlxuICAgICAgICAgICAgVGFzayBUaXRsZSAqXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gSW1wbGVtZW50IHVzZXIgYXV0aGVudGljYXRpb24gZmxvd1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCB3LWZ1bGwgdGV4dC1zbVwiXG4gICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTNcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCBibG9jayBtYi0xXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LW11dGVkKScgfX0+XG4gICAgICAgICAgICAgIFByb2plY3QgKlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3RJZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UHJvamVjdElkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0IHctZnVsbCB0ZXh0LXhzXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3Byb2plY3RzLm1hcChwID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17cC5pZH0gdmFsdWU9e3AuaWR9PlxuICAgICAgICAgICAgICAgICAge3AuaWNvbn0ge3AubmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIGJsb2NrIG1iLTFcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtbXV0ZWQpJyB9fT5cbiAgICAgICAgICAgICAgU3RhdHVzXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3Qgdy1mdWxsIHRleHQteHNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidG9kb1wiPlRvIERvPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbl9wcm9ncmVzc1wiPkluIFByb2dyZXNzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbl9yZXZpZXdcIj5JbiBSZXZpZXc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRvbmVcIj5Eb25lPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC0zXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgYmxvY2sgbWItMVwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1tdXRlZCknIH19PlxuICAgICAgICAgICAgICBQcmlvcml0eVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e3ByaW9yaXR5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQcmlvcml0eShlLnRhcmdldC52YWx1ZSBhcyBQcmlvcml0eSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdCB3LWZ1bGwgdGV4dC14c1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ1cmdlbnRcIj7wn5S0IFVyZ2VudDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPvCfn6AgSGlnaDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+8J+foSBNZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPvCfn6IgTG93PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub25lXCI+4pqqIE5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgYmxvY2sgbWItMVwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1tdXRlZCknIH19PlxuICAgICAgICAgICAgICBBc3NpZ25lZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e2Fzc2lnbmVlSWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEFzc2lnbmVlSWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3Qgdy1mdWxsIHRleHQteHNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+VW5hc3NpZ25lZDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7dXNlcnMubWFwKHUgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt1LmlkfSB2YWx1ZT17dS5pZH0+XG4gICAgICAgICAgICAgICAgICB7dS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgYmxvY2sgbWItMVwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1tdXRlZCknIH19PlxuICAgICAgICAgICAgRHVlIERhdGVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgdmFsdWU9e2R1ZURhdGV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXREdWVEYXRlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IHctZnVsbCB0ZXh0LXhzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgYmxvY2sgbWItMVwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1tdXRlZCknIH19PlxuICAgICAgICAgICAgRGVzY3JpcHRpb24gKE9wdGlvbmFsKVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCByZWxldmFudCBsaW5rcywgbm90ZXMsIG9yIGFjY2VwdGFuY2UgY3JpdGVyaWEuLi5cIlxuICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRhcmVhIHctZnVsbCB0ZXh0LXhzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTIgcHQtMiBib3JkZXItdFwiIHN0eWxlPXt7IGJvcmRlckNvbG9yOiAndmFyKC0tYm9yZGVyKScgfX0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChjbG9zZU1vZGFsKCkpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENyZWF0ZSBUYXNrXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VNZW1vIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImNsb3NlTW9kYWwiLCJhZGRUb2FzdCIsImFkZFRhc2siLCJNb2RhbCIsIkNyZWF0ZVRhc2tNb2RhbCIsImRpc3BhdGNoIiwiYWN0aXZlTW9kYWwiLCJzIiwidWkiLCJjdXJyZW50V29ya3NwYWNlSWQiLCJ3b3Jrc3BhY2VzIiwiY3VycmVudFByb2plY3RJZCIsInByb2plY3RzIiwicmF3UHJvamVjdHMiLCJpdGVtcyIsImZpbHRlciIsInAiLCJ3b3Jrc3BhY2VJZCIsInVzZXJzIiwiYXV0aCIsImN1cnJlbnRVc2VyIiwidGl0bGUiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJwcm9qZWN0SWQiLCJzZXRQcm9qZWN0SWQiLCJpZCIsInN0YXR1cyIsInNldFN0YXR1cyIsInByaW9yaXR5Iiwic2V0UHJpb3JpdHkiLCJhc3NpZ25lZUlkIiwic2V0QXNzaWduZWVJZCIsImR1ZURhdGUiLCJzZXREdWVEYXRlIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsIm5ld1Rhc2siLCJEYXRlIiwibm93IiwidG9TdHJpbmciLCJzbGljZSIsInVuZGVmaW5lZCIsInRvSVNPU3RyaW5nIiwibGFiZWxzIiwic3VidGFza3MiLCJjb21tZW50cyIsImF0dGFjaG1lbnRzIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiY3JlYXRlZEJ5Iiwib3JkZXIiLCJpc0FyY2hpdmVkIiwiU3RyaW5nIiwidHlwZSIsIm9wZW4iLCJvbkNsb3NlIiwic2l6ZSIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwic3R5bGUiLCJjb2xvciIsImlucHV0IiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJhdXRvRm9jdXMiLCJzZWxlY3QiLCJtYXAiLCJvcHRpb24iLCJpY29uIiwibmFtZSIsInUiLCJ0ZXh0YXJlYSIsInJvd3MiLCJib3JkZXJDb2xvciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/task/CreateTaskModal.tsx
