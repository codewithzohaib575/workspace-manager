__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskDetailModal: () => (/* binding */ TaskDetailModal)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "(app-pages-browser)/./src/store/index.ts");
/* harmony import */ var _store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/slices/uiSlice */ "(app-pages-browser)/./src/store/slices/uiSlice.ts");
/* harmony import */ var _store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/slices/taskSlice */ "(app-pages-browser)/./src/store/slices/taskSlice.ts");
/* harmony import */ var _components_ui_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/Modal */ "(app-pages-browser)/./src/components/ui/Modal.tsx");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui */ "(app-pages-browser)/./src/components/ui/index.tsx");
/* harmony import */ var _barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,CheckSquare,MessageSquare,Paperclip,Plus,Trash2,X!=!lucide-react */ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trash.mjs");
/* harmony import */ var _barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,CheckSquare,MessageSquare,Paperclip,Plus,Trash2,X!=!lucide-react */ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.mjs");
/* harmony import */ var _barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,CheckSquare,MessageSquare,Paperclip,Plus,Trash2,X!=!lucide-react */ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-alert.mjs");
/* harmony import */ var _barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,CheckSquare,MessageSquare,Paperclip,Plus,Trash2,X!=!lucide-react */ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/square-check-big.mjs");
/* harmony import */ var _barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,CheckSquare,MessageSquare,Paperclip,Plus,Trash2,X!=!lucide-react */ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.mjs");
/* harmony import */ var _barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,CheckSquare,MessageSquare,Paperclip,Plus,Trash2,X!=!lucide-react */ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/paperclip.mjs");
/* harmony import */ var _barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=AlertCircle,CheckSquare,MessageSquare,Paperclip,Plus,Trash2,X!=!lucide-react */ "(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/message-square.mjs");
/* __next_internal_client_entry_do_not_use__ TaskDetailModal auto */ 
var _s = $RefreshSig$();







function TaskDetailModal() {
    _s();
    const dispatch = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
    const activeTaskId = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)({
        "TaskDetailModal.useAppSelector[activeTaskId]": (s)=>s.ui.activeTaskId
    }["TaskDetailModal.useAppSelector[activeTaskId]"]);
    const task = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)({
        "TaskDetailModal.useAppSelector[task]": (s)=>s.tasks.items?.find({
                "TaskDetailModal.useAppSelector[task]": (t)=>t.id === activeTaskId
            }["TaskDetailModal.useAppSelector[task]"])
    }["TaskDetailModal.useAppSelector[task]"]);
    const projects = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)({
        "TaskDetailModal.useAppSelector": (s)=>s.projects.items
    }["TaskDetailModal.useAppSelector"]) || [];
    const users = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)({
        "TaskDetailModal.useAppSelector": (s)=>s.auth.users
    }["TaskDetailModal.useAppSelector"]) || [];
    const currentUser = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)({
        "TaskDetailModal.useAppSelector[currentUser]": (s)=>s.auth.currentUser
    }["TaskDetailModal.useAppSelector[currentUser]"]);
    const [newSubtaskTitle, setNewSubtaskTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [commentText, setCommentText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [isEditingTitle, setIsEditingTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [titleValue, setTitleValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [isEditingDesc, setIsEditingDesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [descValue, setDescValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [showDeleteConfirm, setShowDeleteConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    if (!task) return null;
    const project = projects?.find((p)=>p.id === task.projectId);
    const assignee = users?.find((u)=>u.id === task.assigneeId);
    const completedSubtasks = task.subtasks.filter((s)=>s.completed).length;
    const subtaskProgress = task.subtasks.length > 0 ? Math.round(completedSubtasks / task.subtasks.length * 100) : 0;
    const handleStatusChange = (status)=>{
        dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.updateTask)({
            id: task.id,
            updates: {
                status
            }
        }));
        dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.addToast)({
            id: String(Date.now()),
            title: 'Status Updated',
            description: `Task marked as ${status.replace('_', ' ')}`,
            type: 'success'
        }));
    };
    const handlePriorityChange = (priority)=>{
        dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.updateTask)({
            id: task.id,
            updates: {
                priority
            }
        }));
        dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.addToast)({
            id: String(Date.now()),
            title: 'Priority Updated',
            description: `Task priority set to ${priority}`,
            type: 'info'
        }));
    };
    const handleAssigneeChange = (assigneeId)=>{
        dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.updateTask)({
            id: task.id,
            updates: {
                assigneeId: assigneeId || undefined
            }
        }));
    };
    const handleDueDateChange = (dueDate)=>{
        dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.updateTask)({
            id: task.id,
            updates: {
                dueDate: dueDate || undefined
            }
        }));
    };
    const handleSaveTitle = ()=>{
        if (titleValue.trim() && titleValue !== task.title) {
            dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.updateTask)({
                id: task.id,
                updates: {
                    title: titleValue.trim()
                }
            }));
        }
        setIsEditingTitle(false);
    };
    const handleSaveDesc = ()=>{
        dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.updateTask)({
            id: task.id,
            updates: {
                description: descValue.trim()
            }
        }));
        setIsEditingDesc(false);
    };
    const handleAddSubtask = (e)=>{
        e.preventDefault();
        if (!newSubtaskTitle.trim()) return;
        const subtask = {
            id: 'sub-' + Date.now(),
            taskId: task.id,
            title: newSubtaskTitle.trim(),
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            order: task.subtasks.length
        };
        dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.addSubtask)({
            taskId: task.id,
            subtask
        }));
        setNewSubtaskTitle('');
    };
    const handleAddComment = (e)=>{
        e.preventDefault();
        if (!commentText.trim() || !currentUser) return;
        const comment = {
            id: 'cmt-' + Date.now(),
            taskId: task.id,
            authorId: currentUser.id,
            content: commentText.trim(),
            mentions: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            edited: false
        };
        dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.addComment)({
            taskId: task.id,
            comment
        }));
        setCommentText('');
        dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.addToast)({
            id: String(Date.now()),
            title: 'Comment Added',
            type: 'success'
        }));
    };
    const handleAddAttachment = ()=>{
        if (!currentUser) return;
        const mockFileNames = [
            'spec-v2.pdf',
            'dashboard-mockup.png',
            'notes.docx',
            'benchmark.csv'
        ];
        const randomName = mockFileNames[Math.floor(Math.random() * mockFileNames.length)];
        const attachment = {
            id: 'att-' + Date.now(),
            taskId: task.id,
            name: randomName,
            size: Math.floor(Math.random() * 4500000) + 120000,
            type: randomName.endsWith('.png') ? 'image/png' : 'application/pdf',
            storedInIndexedDB: false,
            uploadedAt: new Date().toISOString(),
            uploadedBy: currentUser.id
        };
        dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.addAttachment)({
            taskId: task.id,
            attachment
        }));
        dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.addToast)({
            id: String(Date.now()),
            title: 'File Attached',
            description: randomName,
            type: 'info'
        }));
    };
    const handleDeleteTask = ()=>{
        dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.deleteTask)(task.id));
        dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.closeTaskDetail)());
        dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.addToast)({
            id: String(Date.now()),
            title: 'Task Deleted',
            description: task.title,
            type: 'info'
        }));
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Modal__WEBPACK_IMPORTED_MODULE_5__.Modal, {
        open: true,
        onClose: ()=>dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.closeTaskDetail)()),
        size: "lg",
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "flex items-center justify-between border-b pb-4",
                    style: {
                        borderColor: 'var(--border)'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center gap-2 text-sm",
                            style: {
                                color: 'var(--text-muted)'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "font-semibold",
                                    style: {
                                        color: 'var(--gold)'
                                    },
                                    children: [
                                        project?.icon ?? '📋',
                                        " ",
                                        project?.name
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "font-mono text-xs",
                                    children: task.id
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    onClick: ()=>setShowDeleteConfirm(true),
                                    className: "p-1.5 rounded text-red-500 hover:bg-red-500/10 transition-colors",
                                    title: "Delete task",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    onClick: ()=>dispatch((0,_store_slices_uiSlice__WEBPACK_IMPORTED_MODULE_3__.closeTaskDetail)()),
                                    className: "p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors",
                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this),
                showDeleteConfirm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center gap-2 text-red-500 text-sm font-semibold",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this),
                                "Are you sure you want to delete this task?"
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    onClick: ()=>setShowDeleteConfirm(false),
                                    className: "px-3 py-1 text-xs rounded border",
                                    style: {
                                        borderColor: 'var(--border)'
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    onClick: handleDeleteTask,
                                    className: "px-3 py-1 text-xs rounded bg-red-600 text-white font-semibold hover:bg-red-700",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: isEditingTitle ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                type: "text",
                                value: titleValue,
                                onChange: (e)=>setTitleValue(e.target.value),
                                onKeyDown: (e)=>{
                                    if (e.key === 'Enter') handleSaveTitle();
                                    if (e.key === 'Escape') setIsEditingTitle(false);
                                },
                                className: "input text-lg font-bold w-full",
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                onClick: handleSaveTitle,
                                className: "btn btn-primary btn-sm",
                                children: "Save"
                            }, void 0, false, {
                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                        lineNumber: 211,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                        onClick: ()=>{
                            setTitleValue(task.title);
                            setIsEditingTitle(true);
                        },
                        className: "text-xl font-bold cursor-pointer hover:underline decoration-dashed",
                        style: {
                            color: 'var(--text-primary)'
                        },
                        title: "Click to edit title",
                        children: task.title
                    }, void 0, false, {
                        fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-4 p-3 rounded-lg border text-sm",
                    style: {
                        background: 'var(--surface-raised)',
                        borderColor: 'var(--border)'
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                    className: "text-xs font-semibold block mb-1",
                                    style: {
                                        color: 'var(--text-muted)'
                                    },
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                                    value: task.status,
                                    onChange: (e)=>handleStatusChange(e.target.value),
                                    className: "select text-xs w-full py-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "todo",
                                            children: "To Do"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "in_progress",
                                            children: "In Progress"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "in_review",
                                            children: "In Review"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 246,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "done",
                                            children: "Done"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "cancelled",
                                            children: "Cancelled"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 239,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                    className: "text-xs font-semibold block mb-1",
                                    style: {
                                        color: 'var(--text-muted)'
                                    },
                                    children: "Priority"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                                    value: task.priority,
                                    onChange: (e)=>handlePriorityChange(e.target.value),
                                    className: "select text-xs w-full py-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "urgent",
                                            children: "\uD83D\uDD34 Urgent"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "high",
                                            children: "\uD83D\uDFE0 High"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "medium",
                                            children: "\uD83D\uDFE1 Medium"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "low",
                                            children: "\uD83D\uDFE2 Low"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "none",
                                            children: "⚪ None"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 253,
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
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
                                    value: task.assigneeId ?? '',
                                    onChange: (e)=>handleAssigneeChange(e.target.value),
                                    className: "select text-xs w-full py-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                            value: "",
                                            children: "Unassigned"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        users.map((u)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                                                value: u.id,
                                                children: u.name
                                            }, u.id, false, {
                                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                lineNumber: 278,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 269,
                            columnNumber: 11
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
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                    type: "date",
                                    value: task.dueDate ? task.dueDate.split('T')[0] : '',
                                    onChange: (e)=>handleDueDateChange(e.target.value ? new Date(e.target.value).toISOString() : ''),
                                    className: "input text-xs w-full py-1"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                            className: "text-xs font-semibold block mb-1 uppercase tracking-wider",
                            style: {
                                color: 'var(--text-muted)'
                            },
                            children: "Description"
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this),
                        isEditingDesc ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                                    value: descValue,
                                    onChange: (e)=>setDescValue(e.target.value),
                                    rows: 4,
                                    className: "textarea w-full text-sm",
                                    placeholder: "Write task details, specifications, acceptance criteria...",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex justify-end gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                            onClick: ()=>setIsEditingDesc(false),
                                            className: "btn btn-secondary btn-sm",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                            onClick: handleSaveDesc,
                                            className: "btn btn-primary btn-sm",
                                            children: "Save Description"
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            onClick: ()=>{
                                setDescValue(task.description || '');
                                setIsEditingDesc(true);
                            },
                            className: "p-3 rounded-lg border text-sm min-h-[70px] cursor-pointer hover:border-gold/50 transition-colors",
                            style: {
                                background: 'var(--surface)',
                                borderColor: 'var(--border)'
                            },
                            children: task.description ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "whitespace-pre-wrap",
                                style: {
                                    color: 'var(--text-primary)'
                                },
                                children: task.description
                            }, void 0, false, {
                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                lineNumber: 322,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                className: "italic text-xs",
                                style: {
                                    color: 'var(--text-muted)'
                                },
                                children: "Add description or markdown notes..."
                            }, void 0, false, {
                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                lineNumber: 324,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 316,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                    lineNumber: 296,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
                                            size: 16,
                                            style: {
                                                color: 'var(--gold)'
                                            }
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 334,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                            className: "text-xs font-bold uppercase tracking-wider",
                                            style: {
                                                color: 'var(--text-muted)'
                                            },
                                            children: [
                                                "Subtasks (",
                                                completedSubtasks,
                                                "/",
                                                task.subtasks.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 333,
                                    columnNumber: 13
                                }, this),
                                task.subtasks.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "text-xs font-semibold",
                                    style: {
                                        color: 'var(--text-muted)'
                                    },
                                    children: [
                                        subtaskProgress,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 340,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 332,
                            columnNumber: 11
                        }, this),
                        task.subtasks.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "w-full bg-black/10 dark:bg-white/10 h-1.5 rounded-full overflow-hidden mb-3",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                className: "h-full transition-all duration-300 rounded-full",
                                style: {
                                    width: `${subtaskProgress}%`,
                                    background: subtaskProgress === 100 ? '#22c55e' : 'var(--gold)'
                                }
                            }, void 0, false, {
                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                lineNumber: 347,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "space-y-1 mb-3",
                            children: task.subtasks.map((st)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center justify-between p-2 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors group",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                                            className: "flex items-center gap-2.5 flex-1 cursor-pointer text-sm",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                                    type: "checkbox",
                                                    checked: st.completed,
                                                    onChange: ()=>dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.toggleSubtask)({
                                                            taskId: task.id,
                                                            subtaskId: st.id
                                                        })),
                                                    className: "w-4 h-4 rounded text-gold focus:ring-gold accent-gold"
                                                }, void 0, false, {
                                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: st.completed ? 'line-through text-muted' : 'text-primary',
                                                    children: st.title
                                                }, void 0, false, {
                                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 364,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                            onClick: ()=>dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.deleteSubtask)({
                                                    taskId: task.id,
                                                    subtaskId: st.id
                                                })),
                                            className: "opacity-0 group-hover:opacity-100 p-1 text-red-500 transition-opacity",
                                            title: "Remove subtask",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                lineNumber: 380,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 375,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, st.id, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                            onSubmit: handleAddSubtask,
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                    type: "text",
                                    value: newSubtaskTitle,
                                    onChange: (e)=>setNewSubtaskTitle(e.target.value),
                                    placeholder: "Add new subtask... (press Enter)",
                                    className: "input text-xs flex-1 py-1.5"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    type: "submit",
                                    className: "btn btn-secondary btn-sm flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 396,
                                            columnNumber: 15
                                        }, this),
                                        " Add"
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 395,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                            size: 16,
                                            style: {
                                                color: 'var(--gold)'
                                            }
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 405,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                            className: "text-xs font-bold uppercase tracking-wider",
                                            style: {
                                                color: 'var(--text-muted)'
                                            },
                                            children: [
                                                "Attachments (",
                                                task.attachments.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 406,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    onClick: handleAddAttachment,
                                    className: "text-xs text-gold hover:underline flex items-center gap-1 font-semibold",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, this),
                                        " Add File"
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 410,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
                            children: task.attachments.map((att)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                    className: "flex items-center justify-between p-2.5 rounded border text-xs",
                                    style: {
                                        background: 'var(--surface)',
                                        borderColor: 'var(--border)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                            className: "flex items-center gap-2 truncate",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                                    size: 13,
                                                    style: {
                                                        color: 'var(--text-muted)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                    lineNumber: 426,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    className: "font-semibold truncate",
                                                    children: att.name
                                                }, void 0, false, {
                                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                    style: {
                                                        color: 'var(--text-muted)'
                                                    },
                                                    children: [
                                                        "(",
                                                        (att.size / 1024).toFixed(0),
                                                        " KB)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 425,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                            onClick: ()=>dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.removeAttachment)({
                                                    taskId: task.id,
                                                    attachmentId: att.id
                                                })),
                                            className: "p-1 hover:text-red-500",
                                            title: "Remove",
                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                lineNumber: 437,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                            lineNumber: 432,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, att.id, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                    lineNumber: 402,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "flex items-center gap-2 mb-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
                                    size: 16,
                                    style: {
                                        color: 'var(--gold)'
                                    }
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 447,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                    className: "text-xs font-bold uppercase tracking-wider",
                                    style: {
                                        color: 'var(--text-muted)'
                                    },
                                    children: [
                                        "Comments (",
                                        task.comments.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 448,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                            className: "space-y-3 mb-4 max-h-56 overflow-y-auto pr-1",
                            children: [
                                task.comments.map((c)=>{
                                    const author = users?.find((u)=>u.id === c.authorId);
                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                        className: "p-3 rounded-lg border text-sm",
                                        style: {
                                            background: 'var(--surface)',
                                            borderColor: 'var(--border)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                className: "flex items-center justify-between mb-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui__WEBPACK_IMPORTED_MODULE_6__.Avatar, {
                                                                name: author?.name ?? 'User',
                                                                color: author?.color ?? '#888',
                                                                size: "xs"
                                                            }, void 0, false, {
                                                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                                lineNumber: 461,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                className: "font-semibold text-xs",
                                                                children: author?.name ?? 'User'
                                                            }, void 0, false, {
                                                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                                                className: "text-xs text-muted",
                                                                children: new Date(c.createdAt).toLocaleTimeString([], {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 21
                                                    }, this),
                                                    c.authorId === currentUser?.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                                        onClick: ()=>dispatch((0,_store_slices_taskSlice__WEBPACK_IMPORTED_MODULE_4__.deleteComment)({
                                                                taskId: task.id,
                                                                commentId: c.id
                                                            })),
                                                        className: "text-muted hover:text-red-500 p-0.5",
                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AlertCircle_CheckSquare_MessageSquare_Paperclip_Plus_Trash2_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                lineNumber: 459,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                                className: "text-xs leading-relaxed",
                                                style: {
                                                    color: 'var(--text-primary)'
                                                },
                                                children: c.content
                                            }, void 0, false, {
                                                fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                                lineNumber: 476,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, c.id, true, {
                                        fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                        lineNumber: 458,
                                        columnNumber: 17
                                    }, this);
                                }),
                                task.comments.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                                    className: "text-xs italic text-muted",
                                    children: "No comments yet. Start the conversation!"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 454,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                            onSubmit: handleAddComment,
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                                    type: "text",
                                    value: commentText,
                                    onChange: (e)=>setCommentText(e.target.value),
                                    placeholder: "Write a comment...",
                                    className: "input text-xs flex-1 py-1.5"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 487,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                                    type: "submit",
                                    className: "btn btn-primary btn-sm",
                                    children: "Post"
                                }, void 0, false, {
                                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                                    lineNumber: 494,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                            lineNumber: 486,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
                    lineNumber: 445,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "C:\\Users\\user\\OneDrive\\Desktop\\Ai Hackthon\\workspace-manager\\src\\components\\task\\TaskDetailModal.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(TaskDetailModal, "oW84h24t5V7d1oEJ5zXUbXjXfnI=", false, function() {
    return [
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector,
        _store__WEBPACK_IMPORTED_MODULE_2__.useAppSelector
    ];
});
_c = TaskDetailModal;
var _c;
$RefreshReg$(_c, "TaskDetailModal");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Rhc2svVGFza0RldGFpbE1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDd0I7QUFDVTtBQUlqQztBQUNZO0FBQ3VCO0FBSS9DO0FBR2YsU0FBU3VCOztJQUNkLE1BQU1DLFdBQVd2QixzREFBY0E7SUFDL0IsTUFBTXdCLGVBQWV2QixzREFBY0E7d0RBQUN3QixDQUFBQSxJQUFLQSxFQUFFQyxFQUFFLENBQUNGLFlBQVk7O0lBQzFELE1BQU1HLE9BQU8xQixzREFBY0E7Z0RBQUN3QixDQUFBQSxJQUFLQSxFQUFFRyxLQUFLLENBQUNDLEtBQUssRUFBRUM7d0RBQUtDLENBQUFBLElBQUtBLEVBQUVDLEVBQUUsS0FBS1I7OztJQUNuRSxNQUFNUyxXQUFXaEMsc0RBQWNBOzBDQUFDd0IsQ0FBQUEsSUFBS0EsRUFBRVEsUUFBUSxDQUFDSixLQUFLOzRDQUFLLEVBQUU7SUFDNUQsTUFBTUssUUFBUWpDLHNEQUFjQTswQ0FBQ3dCLENBQUFBLElBQUtBLEVBQUVVLElBQUksQ0FBQ0QsS0FBSzs0Q0FBSyxFQUFFO0lBQ3JELE1BQU1FLGNBQWNuQyxzREFBY0E7dURBQUN3QixDQUFBQSxJQUFLQSxFQUFFVSxJQUFJLENBQUNDLFdBQVc7O0lBRTFELE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR3ZDLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ3dDLGFBQWFDLGVBQWUsR0FBR3pDLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQzBDLGdCQUFnQkMsa0JBQWtCLEdBQUczQywrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUM0QyxZQUFZQyxjQUFjLEdBQUc3QywrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUM4QyxlQUFlQyxpQkFBaUIsR0FBRy9DLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2dELFdBQVdDLGFBQWEsR0FBR2pELCtDQUFRQSxDQUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRckU7R0FyZWdCN0Y7O1FBQ0d0QixrREFBY0E7UUFDVkMsa0RBQWNBO1FBQ3RCQSxrREFBY0E7UUFDVkEsa0RBQWNBO1FBQ2pCQSxrREFBY0E7UUFDUkEsa0RBQWNBOzs7S0FOcEJxQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1c2VyXFxPbmVEcml2ZVxcRGVza3RvcFxcQWkgSGFja3Rob25cXHdvcmtzcGFjZS1tYW5hZ2VyXFxzcmNcXGNvbXBvbmVudHNcXHRhc2tcXFRhc2tEZXRhaWxNb2RhbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdAL3N0b3JlJztcbmltcG9ydCB7IGNsb3NlVGFza0RldGFpbCwgYWRkVG9hc3QgfSBmcm9tICdAL3N0b3JlL3NsaWNlcy91aVNsaWNlJztcbmltcG9ydCB7XG4gIHVwZGF0ZVRhc2ssIGRlbGV0ZVRhc2ssIGFkZFN1YnRhc2ssIHRvZ2dsZVN1YnRhc2ssIGRlbGV0ZVN1YnRhc2ssXG4gIGFkZENvbW1lbnQsIGRlbGV0ZUNvbW1lbnQsIGFkZEF0dGFjaG1lbnQsIHJlbW92ZUF0dGFjaG1lbnRcbn0gZnJvbSAnQC9zdG9yZS9zbGljZXMvdGFza1NsaWNlJztcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL01vZGFsJztcbmltcG9ydCB7IEF2YXRhciwgU3RhdHVzQmFkZ2UsIFByaW9yaXR5QmFkZ2UgfSBmcm9tICdAL2NvbXBvbmVudHMvdWknO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXIsIFVzZXIsIFRhZywgQ2hlY2tTcXVhcmUsIE1lc3NhZ2VTcXVhcmUsIFBhcGVyY2xpcCxcbiAgVHJhc2gyLCBQbHVzLCBYLCBDbG9jaywgRXh0ZXJuYWxMaW5rLCBDaGVjaywgQWxlcnRDaXJjbGVcbn0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB0eXBlIHsgVGFza1N0YXR1cywgUHJpb3JpdHksIFN1YnRhc2ssIENvbW1lbnQsIEF0dGFjaG1lbnQgfSBmcm9tICdAL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFRhc2tEZXRhaWxNb2RhbCgpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCBhY3RpdmVUYXNrSWQgPSB1c2VBcHBTZWxlY3RvcihzID0+IHMudWkuYWN0aXZlVGFza0lkKTtcbiAgY29uc3QgdGFzayA9IHVzZUFwcFNlbGVjdG9yKHMgPT4gcy50YXNrcy5pdGVtcz8uZmluZCh0ID0+IHQuaWQgPT09IGFjdGl2ZVRhc2tJZCkpO1xuICBjb25zdCBwcm9qZWN0cyA9IHVzZUFwcFNlbGVjdG9yKHMgPT4gcy5wcm9qZWN0cy5pdGVtcykgfHwgW107XG4gIGNvbnN0IHVzZXJzID0gdXNlQXBwU2VsZWN0b3IocyA9PiBzLmF1dGgudXNlcnMpIHx8IFtdO1xuICBjb25zdCBjdXJyZW50VXNlciA9IHVzZUFwcFNlbGVjdG9yKHMgPT4gcy5hdXRoLmN1cnJlbnRVc2VyKTtcblxuICBjb25zdCBbbmV3U3VidGFza1RpdGxlLCBzZXROZXdTdWJ0YXNrVGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29tbWVudFRleHQsIHNldENvbW1lbnRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzRWRpdGluZ1RpdGxlLCBzZXRJc0VkaXRpbmdUaXRsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0aXRsZVZhbHVlLCBzZXRUaXRsZVZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzRWRpdGluZ0Rlc2MsIHNldElzRWRpdGluZ0Rlc2NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGVzY1ZhbHVlLCBzZXREZXNjVmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2hvd0RlbGV0ZUNvbmZpcm0sIHNldFNob3dEZWxldGVDb25maXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBpZiAoIXRhc2spIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cz8uZmluZChwID0+IHAuaWQgPT09IHRhc2sucHJvamVjdElkKTtcbiAgY29uc3QgYXNzaWduZWUgPSB1c2Vycz8uZmluZCh1ID0+IHUuaWQgPT09IHRhc2suYXNzaWduZWVJZCk7XG5cbiAgY29uc3QgY29tcGxldGVkU3VidGFza3MgPSB0YXNrLnN1YnRhc2tzLmZpbHRlcihzID0+IHMuY29tcGxldGVkKS5sZW5ndGg7XG4gIGNvbnN0IHN1YnRhc2tQcm9ncmVzcyA9IHRhc2suc3VidGFza3MubGVuZ3RoID4gMFxuICAgID8gTWF0aC5yb3VuZCgoY29tcGxldGVkU3VidGFza3MgLyB0YXNrLnN1YnRhc2tzLmxlbmd0aCkgKiAxMDApXG4gICAgOiAwO1xuXG4gIGNvbnN0IGhhbmRsZVN0YXR1c0NoYW5nZSA9IChzdGF0dXM6IHN0cmluZykgPT4ge1xuICAgIGRpc3BhdGNoKHVwZGF0ZVRhc2soeyBpZDogdGFzay5pZCwgdXBkYXRlczogeyBzdGF0dXMgfSB9KSk7XG4gICAgZGlzcGF0Y2goYWRkVG9hc3Qoe1xuICAgICAgaWQ6IFN0cmluZyhEYXRlLm5vdygpKSxcbiAgICAgIHRpdGxlOiAnU3RhdHVzIFVwZGF0ZWQnLFxuICAgICAgZGVzY3JpcHRpb246IGBUYXNrIG1hcmtlZCBhcyAke3N0YXR1cy5yZXBsYWNlKCdfJywgJyAnKX1gLFxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmlvcml0eUNoYW5nZSA9IChwcmlvcml0eTogUHJpb3JpdHkpID0+IHtcbiAgICBkaXNwYXRjaCh1cGRhdGVUYXNrKHsgaWQ6IHRhc2suaWQsIHVwZGF0ZXM6IHsgcHJpb3JpdHkgfSB9KSk7XG4gICAgZGlzcGF0Y2goYWRkVG9hc3Qoe1xuICAgICAgaWQ6IFN0cmluZyhEYXRlLm5vdygpKSxcbiAgICAgIHRpdGxlOiAnUHJpb3JpdHkgVXBkYXRlZCcsXG4gICAgICBkZXNjcmlwdGlvbjogYFRhc2sgcHJpb3JpdHkgc2V0IHRvICR7cHJpb3JpdHl9YCxcbiAgICAgIHR5cGU6ICdpbmZvJyxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXNzaWduZWVDaGFuZ2UgPSAoYXNzaWduZWVJZDogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2godXBkYXRlVGFzayh7IGlkOiB0YXNrLmlkLCB1cGRhdGVzOiB7IGFzc2lnbmVlSWQ6IGFzc2lnbmVlSWQgfHwgdW5kZWZpbmVkIH0gfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUR1ZURhdGVDaGFuZ2UgPSAoZHVlRGF0ZTogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2godXBkYXRlVGFzayh7IGlkOiB0YXNrLmlkLCB1cGRhdGVzOiB7IGR1ZURhdGU6IGR1ZURhdGUgfHwgdW5kZWZpbmVkIH0gfSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmVUaXRsZSA9ICgpID0+IHtcbiAgICBpZiAodGl0bGVWYWx1ZS50cmltKCkgJiYgdGl0bGVWYWx1ZSAhPT0gdGFzay50aXRsZSkge1xuICAgICAgZGlzcGF0Y2godXBkYXRlVGFzayh7IGlkOiB0YXNrLmlkLCB1cGRhdGVzOiB7IHRpdGxlOiB0aXRsZVZhbHVlLnRyaW0oKSB9IH0pKTtcbiAgICB9XG4gICAgc2V0SXNFZGl0aW5nVGl0bGUoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNhdmVEZXNjID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHVwZGF0ZVRhc2soeyBpZDogdGFzay5pZCwgdXBkYXRlczogeyBkZXNjcmlwdGlvbjogZGVzY1ZhbHVlLnRyaW0oKSB9IH0pKTtcbiAgICBzZXRJc0VkaXRpbmdEZXNjKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRTdWJ0YXNrID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIW5ld1N1YnRhc2tUaXRsZS50cmltKCkpIHJldHVybjtcbiAgICBjb25zdCBzdWJ0YXNrOiBTdWJ0YXNrID0ge1xuICAgICAgaWQ6ICdzdWItJyArIERhdGUubm93KCksXG4gICAgICB0YXNrSWQ6IHRhc2suaWQsXG4gICAgICB0aXRsZTogbmV3U3VidGFza1RpdGxlLnRyaW0oKSxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgb3JkZXI6IHRhc2suc3VidGFza3MubGVuZ3RoLFxuICAgIH07XG4gICAgZGlzcGF0Y2goYWRkU3VidGFzayh7IHRhc2tJZDogdGFzay5pZCwgc3VidGFzayB9KSk7XG4gICAgc2V0TmV3U3VidGFza1RpdGxlKCcnKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRDb21tZW50ID0gKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWNvbW1lbnRUZXh0LnRyaW0oKSB8fCAhY3VycmVudFVzZXIpIHJldHVybjtcbiAgICBjb25zdCBjb21tZW50OiBDb21tZW50ID0ge1xuICAgICAgaWQ6ICdjbXQtJyArIERhdGUubm93KCksXG4gICAgICB0YXNrSWQ6IHRhc2suaWQsXG4gICAgICBhdXRob3JJZDogY3VycmVudFVzZXIuaWQsXG4gICAgICBjb250ZW50OiBjb21tZW50VGV4dC50cmltKCksXG4gICAgICBtZW50aW9uczogW10sXG4gICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgZWRpdGVkOiBmYWxzZSxcbiAgICB9O1xuICAgIGRpc3BhdGNoKGFkZENvbW1lbnQoeyB0YXNrSWQ6IHRhc2suaWQsIGNvbW1lbnQgfSkpO1xuICAgIHNldENvbW1lbnRUZXh0KCcnKTtcbiAgICBkaXNwYXRjaChhZGRUb2FzdCh7XG4gICAgICBpZDogU3RyaW5nKERhdGUubm93KCkpLFxuICAgICAgdGl0bGU6ICdDb21tZW50IEFkZGVkJyxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkQXR0YWNobWVudCA9ICgpID0+IHtcbiAgICBpZiAoIWN1cnJlbnRVc2VyKSByZXR1cm47XG4gICAgY29uc3QgbW9ja0ZpbGVOYW1lcyA9IFsnc3BlYy12Mi5wZGYnLCAnZGFzaGJvYXJkLW1vY2t1cC5wbmcnLCAnbm90ZXMuZG9jeCcsICdiZW5jaG1hcmsuY3N2J107XG4gICAgY29uc3QgcmFuZG9tTmFtZSA9IG1vY2tGaWxlTmFtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9ja0ZpbGVOYW1lcy5sZW5ndGgpXTtcbiAgICBjb25zdCBhdHRhY2htZW50OiBBdHRhY2htZW50ID0ge1xuICAgICAgaWQ6ICdhdHQtJyArIERhdGUubm93KCksXG4gICAgICB0YXNrSWQ6IHRhc2suaWQsXG4gICAgICBuYW1lOiByYW5kb21OYW1lLFxuICAgICAgc2l6ZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDUwMDAwMCkgKyAxMjAwMDAsXG4gICAgICB0eXBlOiByYW5kb21OYW1lLmVuZHNXaXRoKCcucG5nJykgPyAnaW1hZ2UvcG5nJyA6ICdhcHBsaWNhdGlvbi9wZGYnLFxuICAgICAgc3RvcmVkSW5JbmRleGVkREI6IGZhbHNlLFxuICAgICAgdXBsb2FkZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgdXBsb2FkZWRCeTogY3VycmVudFVzZXIuaWQsXG4gICAgfTtcbiAgICBkaXNwYXRjaChhZGRBdHRhY2htZW50KHsgdGFza0lkOiB0YXNrLmlkLCBhdHRhY2htZW50IH0pKTtcbiAgICBkaXNwYXRjaChhZGRUb2FzdCh7XG4gICAgICBpZDogU3RyaW5nKERhdGUubm93KCkpLFxuICAgICAgdGl0bGU6ICdGaWxlIEF0dGFjaGVkJyxcbiAgICAgIGRlc2NyaXB0aW9uOiByYW5kb21OYW1lLFxuICAgICAgdHlwZTogJ2luZm8nLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVUYXNrID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKGRlbGV0ZVRhc2sodGFzay5pZCkpO1xuICAgIGRpc3BhdGNoKGNsb3NlVGFza0RldGFpbCgpKTtcbiAgICBkaXNwYXRjaChhZGRUb2FzdCh7XG4gICAgICBpZDogU3RyaW5nKERhdGUubm93KCkpLFxuICAgICAgdGl0bGU6ICdUYXNrIERlbGV0ZWQnLFxuICAgICAgZGVzY3JpcHRpb246IHRhc2sudGl0bGUsXG4gICAgICB0eXBlOiAnaW5mbycsXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsIG9wZW49e3RydWV9IG9uQ2xvc2U9eygpID0+IGRpc3BhdGNoKGNsb3NlVGFza0RldGFpbCgpKX0gc2l6ZT1cImxnXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICB7LyogSGVhZGVyIEJyZWFkY3J1bWIgJiBBY3Rpb25zICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBwYi00XCIgc3R5bGU9e3sgYm9yZGVyQ29sb3I6ICd2YXIoLS1ib3JkZXIpJyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc21cIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtbXV0ZWQpJyB9fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWdvbGQpJyB9fT57cHJvamVjdD8uaWNvbiA/PyAn8J+Tiyd9IHtwcm9qZWN0Py5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPi88L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC14c1wiPnt0YXNrLmlkfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0RlbGV0ZUNvbmZpcm0odHJ1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMS41IHJvdW5kZWQgdGV4dC1yZWQtNTAwIGhvdmVyOmJnLXJlZC01MDAvMTAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSB0YXNrXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRyYXNoMiBzaXplPXsxNn0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChjbG9zZVRhc2tEZXRhaWwoKSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMS41IHJvdW5kZWQgaG92ZXI6YmctYmxhY2svNSBkYXJrOmhvdmVyOmJnLXdoaXRlLzUgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8WCBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogRGVsZXRlIENvbmZpcm1hdGlvbiBBbGVydCAqL31cbiAgICAgICAge3Nob3dEZWxldGVDb25maXJtICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLWxnIGJnLXJlZC01MDAvMTAgYm9yZGVyIGJvcmRlci1yZWQtNTAwLzMwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXJlZC01MDAgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgIDxBbGVydENpcmNsZSBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRhc2s/XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEZWxldGVDb25maXJtKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEgdGV4dC14cyByb3VuZGVkIGJvcmRlclwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQ29sb3I6ICd2YXIoLS1ib3JkZXIpJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRGVsZXRlVGFza31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTEgdGV4dC14cyByb3VuZGVkIGJnLXJlZC02MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGhvdmVyOmJnLXJlZC03MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFRhc2sgVGl0bGUgKi99XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2lzRWRpdGluZ1RpdGxlID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlVmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGl0bGVWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHsgaWYgKGUua2V5ID09PSAnRW50ZXInKSBoYW5kbGVTYXZlVGl0bGUoKTsgaWYgKGUua2V5ID09PSAnRXNjYXBlJykgc2V0SXNFZGl0aW5nVGl0bGUoZmFsc2UpOyB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IHRleHQtbGcgZm9udC1ib2xkIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZVRpdGxlfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFRpdGxlVmFsdWUodGFzay50aXRsZSk7IHNldElzRWRpdGluZ1RpdGxlKHRydWUpOyB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmUgZGVjb3JhdGlvbi1kYXNoZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtcHJpbWFyeSknIH19XG4gICAgICAgICAgICAgIHRpdGxlPVwiQ2xpY2sgdG8gZWRpdCB0aXRsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0YXNrLnRpdGxlfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUXVpY2sgQXR0cmlidXRlcyBSb3cgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtNCBnYXAtNCBwLTMgcm91bmRlZC1sZyBib3JkZXIgdGV4dC1zbVwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICd2YXIoLS1zdXJmYWNlLXJhaXNlZCknLCBib3JkZXJDb2xvcjogJ3ZhcigtLWJvcmRlciknIH19PlxuICAgICAgICAgIHsvKiBTdGF0dXMgKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgYmxvY2sgbWItMVwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1tdXRlZCknIH19PlN0YXR1czwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXt0YXNrLnN0YXR1c31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlU3RhdHVzQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0IHRleHQteHMgdy1mdWxsIHB5LTFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidG9kb1wiPlRvIERvPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbl9wcm9ncmVzc1wiPkluIFByb2dyZXNzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbl9yZXZpZXdcIj5JbiBSZXZpZXc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRvbmVcIj5Eb25lPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjYW5jZWxsZWRcIj5DYW5jZWxsZWQ8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFByaW9yaXR5ICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIGJsb2NrIG1iLTFcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtbXV0ZWQpJyB9fT5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXt0YXNrLnByaW9yaXR5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVQcmlvcml0eUNoYW5nZShlLnRhcmdldC52YWx1ZSBhcyBQcmlvcml0eSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdCB0ZXh0LXhzIHctZnVsbCBweS0xXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVyZ2VudFwiPvCflLQgVXJnZW50PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+8J+foCBIaWdoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj7wn5+hIE1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+8J+foiBMb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5vbmVcIj7imqogTm9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQXNzaWduZWUgKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgYmxvY2sgbWItMVwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1tdXRlZCknIH19PkFzc2lnbmVlPC9sYWJlbD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e3Rhc2suYXNzaWduZWVJZCA/PyAnJ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlQXNzaWduZWVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3QgdGV4dC14cyB3LWZ1bGwgcHktMVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5VbmFzc2lnbmVkPC9vcHRpb24+XG4gICAgICAgICAgICAgIHt1c2Vycy5tYXAodSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3UuaWR9IHZhbHVlPXt1LmlkfT57dS5uYW1lfTwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIER1ZSBEYXRlICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIGJsb2NrIG1iLTFcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtbXV0ZWQpJyB9fT5EdWUgRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGFzay5kdWVEYXRlID8gdGFzay5kdWVEYXRlLnNwbGl0KCdUJylbMF0gOiAnJ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlRHVlRGF0ZUNoYW5nZShlLnRhcmdldC52YWx1ZSA/IG5ldyBEYXRlKGUudGFyZ2V0LnZhbHVlKS50b0lTT1N0cmluZygpIDogJycpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCB0ZXh0LXhzIHctZnVsbCBweS0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBEZXNjcmlwdGlvbiAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIGJsb2NrIG1iLTEgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LW11dGVkKScgfX0+XG4gICAgICAgICAgICBEZXNjcmlwdGlvblxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAge2lzRWRpdGluZ0Rlc2MgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY1ZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERlc2NWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcm93cz17NH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0YXJlYSB3LWZ1bGwgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSB0YXNrIGRldGFpbHMsIHNwZWNpZmljYXRpb25zLCBhY2NlcHRhbmNlIGNyaXRlcmlhLi4uXCJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmdEZXNjKGZhbHNlKX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlRGVzY30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbVwiPlNhdmUgRGVzY3JpcHRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldERlc2NWYWx1ZSh0YXNrLmRlc2NyaXB0aW9uIHx8ICcnKTsgc2V0SXNFZGl0aW5nRGVzYyh0cnVlKTsgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgYm9yZGVyIHRleHQtc20gbWluLWgtWzcwcHhdIGN1cnNvci1wb2ludGVyIGhvdmVyOmJvcmRlci1nb2xkLzUwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogJ3ZhcigtLXN1cmZhY2UpJywgYm9yZGVyQ29sb3I6ICd2YXIoLS1ib3JkZXIpJyB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dGFzay5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLXByZS13cmFwXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LXByaW1hcnkpJyB9fT57dGFzay5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXRhbGljIHRleHQteHNcIiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtbXV0ZWQpJyB9fT5BZGQgZGVzY3JpcHRpb24gb3IgbWFya2Rvd24gbm90ZXMuLi48L3A+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU3VidGFza3MgU2VjdGlvbiAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxDaGVja1NxdWFyZSBzaXplPXsxNn0gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1nb2xkKScgfX0gLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LW11dGVkKScgfX0+XG4gICAgICAgICAgICAgICAgU3VidGFza3MgKHtjb21wbGV0ZWRTdWJ0YXNrc30ve3Rhc2suc3VidGFza3MubGVuZ3RofSlcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dGFzay5zdWJ0YXNrcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LW11dGVkKScgfX0+e3N1YnRhc2tQcm9ncmVzc30lPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBQcm9ncmVzcyBCYXIgKi99XG4gICAgICAgICAge3Rhc2suc3VidGFza3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibGFjay8xMCBkYXJrOmJnLXdoaXRlLzEwIGgtMS41IHJvdW5kZWQtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogYCR7c3VidGFza1Byb2dyZXNzfSVgLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc3VidGFza1Byb2dyZXNzID09PSAxMDAgPyAnIzIyYzU1ZScgOiAndmFyKC0tZ29sZCknXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogU3VidGFzayBsaXN0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xIG1iLTNcIj5cbiAgICAgICAgICAgIHt0YXNrLnN1YnRhc2tzLm1hcChzdCA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e3N0LmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTIgcm91bmRlZCBob3ZlcjpiZy1ibGFjay81IGRhcms6aG92ZXI6Ymctd2hpdGUvNSB0cmFuc2l0aW9uLWNvbG9ycyBncm91cFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSBmbGV4LTEgY3Vyc29yLXBvaW50ZXIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3N0LmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IGRpc3BhdGNoKHRvZ2dsZVN1YnRhc2soeyB0YXNrSWQ6IHRhc2suaWQsIHN1YnRhc2tJZDogc3QuaWQgfSkpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IHJvdW5kZWQgdGV4dC1nb2xkIGZvY3VzOnJpbmctZ29sZCBhY2NlbnQtZ29sZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdC5jb21wbGV0ZWQgPyAnbGluZS10aHJvdWdoIHRleHQtbXV0ZWQnIDogJ3RleHQtcHJpbWFyeSd9PlxuICAgICAgICAgICAgICAgICAgICB7c3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChkZWxldGVTdWJ0YXNrKHsgdGFza0lkOiB0YXNrLmlkLCBzdWJ0YXNrSWQ6IHN0LmlkIH0pKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCBwLTEgdGV4dC1yZWQtNTAwIHRyYW5zaXRpb24tb3BhY2l0eVwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlbW92ZSBzdWJ0YXNrXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8WCBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBBZGQgU3VidGFzayBGb3JtICovfVxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVBZGRTdWJ0YXNrfSBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmV3U3VidGFza1RpdGxlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXROZXdTdWJ0YXNrVGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBuZXcgc3VidGFzay4uLiAocHJlc3MgRW50ZXIpXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgdGV4dC14cyBmbGV4LTEgcHktMS41XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgPFBsdXMgc2l6ZT17MTR9IC8+IEFkZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQXR0YWNobWVudHMgU2VjdGlvbiAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtYi0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxQYXBlcmNsaXAgc2l6ZT17MTZ9IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tZ29sZCknIH19IC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1tdXRlZCknIH19PlxuICAgICAgICAgICAgICAgIEF0dGFjaG1lbnRzICh7dGFzay5hdHRhY2htZW50cy5sZW5ndGh9KVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkQXR0YWNobWVudH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdvbGQgaG92ZXI6dW5kZXJsaW5lIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGx1cyBzaXplPXsxMn0gLz4gQWRkIEZpbGVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC0yXCI+XG4gICAgICAgICAgICB7dGFzay5hdHRhY2htZW50cy5tYXAoYXR0ID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17YXR0LmlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTIuNSByb3VuZGVkIGJvcmRlciB0ZXh0LXhzXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiAndmFyKC0tc3VyZmFjZSknLCBib3JkZXJDb2xvcjogJ3ZhcigtLWJvcmRlciknIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRydW5jYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8UGFwZXJjbGlwIHNpemU9ezEzfSBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtbXV0ZWQpJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0cnVuY2F0ZVwiPnthdHQubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXRleHQtbXV0ZWQpJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgKHsoYXR0LnNpemUgLyAxMDI0KS50b0ZpeGVkKDApfSBLQilcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChyZW1vdmVBdHRhY2htZW50KHsgdGFza0lkOiB0YXNrLmlkLCBhdHRhY2htZW50SWQ6IGF0dC5pZCB9KSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgaG92ZXI6dGV4dC1yZWQtNTAwXCJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8WCBzaXplPXsxM30gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIENvbW1lbnRzIFNlY3Rpb24gKi99XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBtYi0zXCI+XG4gICAgICAgICAgICA8TWVzc2FnZVNxdWFyZSBzaXplPXsxNn0gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1nb2xkKScgfX0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiIHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tdGV4dC1tdXRlZCknIH19PlxuICAgICAgICAgICAgICBDb21tZW50cyAoe3Rhc2suY29tbWVudHMubGVuZ3RofSlcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBDb21tZW50cyBMaXN0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIG1iLTQgbWF4LWgtNTYgb3ZlcmZsb3cteS1hdXRvIHByLTFcIj5cbiAgICAgICAgICAgIHt0YXNrLmNvbW1lbnRzLm1hcChjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYXV0aG9yID0gdXNlcnM/LmZpbmQodSA9PiB1LmlkID09PSBjLmF1dGhvcklkKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Yy5pZH0gY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbGcgYm9yZGVyIHRleHQtc21cIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAndmFyKC0tc3VyZmFjZSknLCBib3JkZXJDb2xvcjogJ3ZhcigtLWJvcmRlciknIH19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWItMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIG5hbWU9e2F1dGhvcj8ubmFtZSA/PyAnVXNlcid9IGNvbG9yPXthdXRob3I/LmNvbG9yID8/ICcjODg4J30gc2l6ZT1cInhzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteHNcIj57YXV0aG9yPy5uYW1lID8/ICdVc2VyJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUoYy5jcmVhdGVkQXQpLnRvTG9jYWxlVGltZVN0cmluZyhbXSwgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtjLmF1dGhvcklkID09PSBjdXJyZW50VXNlcj8uaWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGRlbGV0ZUNvbW1lbnQoeyB0YXNrSWQ6IHRhc2suaWQsIGNvbW1lbnRJZDogYy5pZCB9KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGhvdmVyOnRleHQtcmVkLTUwMCBwLTAuNVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFggc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbGVhZGluZy1yZWxheGVkXCIgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS10ZXh0LXByaW1hcnkpJyB9fT57Yy5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAge3Rhc2suY29tbWVudHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBpdGFsaWMgdGV4dC1tdXRlZFwiPk5vIGNvbW1lbnRzIHlldC4gU3RhcnQgdGhlIGNvbnZlcnNhdGlvbiE8L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEFkZCBDb21tZW50IElucHV0ICovfVxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVBZGRDb21tZW50fSBjbGFzc05hbWU9XCJmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudFRleHR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvbW1lbnRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIGNvbW1lbnQuLi5cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCB0ZXh0LXhzIGZsZXgtMSBweS0xLjVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc21cIj5cbiAgICAgICAgICAgICAgUG9zdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiY2xvc2VUYXNrRGV0YWlsIiwiYWRkVG9hc3QiLCJ1cGRhdGVUYXNrIiwiZGVsZXRlVGFzayIsImFkZFN1YnRhc2siLCJ0b2dnbGVTdWJ0YXNrIiwiZGVsZXRlU3VidGFzayIsImFkZENvbW1lbnQiLCJkZWxldGVDb21tZW50IiwiYWRkQXR0YWNobWVudCIsInJlbW92ZUF0dGFjaG1lbnQiLCJNb2RhbCIsIkF2YXRhciIsIkNoZWNrU3F1YXJlIiwiTWVzc2FnZVNxdWFyZSIsIlBhcGVyY2xpcCIsIlRyYXNoMiIsIlBsdXMiLCJYIiwiQWxlcnRDaXJjbGUiLCJUYXNrRGV0YWlsTW9kYWwiLCJkaXNwYXRjaCIsImFjdGl2ZVRhc2tJZCIsInMiLCJ1aSIsInRhc2siLCJ0YXNrcyIsIml0ZW1zIiwiZmluZCIsInQiLCJpZCIsInByb2plY3RzIiwidXNlcnMiLCJhdXRoIiwiY3VycmVudFVzZXIiLCJuZXdTdWJ0YXNrVGl0bGUiLCJzZXROZXdTdWJ0YXNrVGl0bGUiLCJjb21tZW50VGV4dCIsInNldENvbW1lbnRUZXh0IiwiaXNFZGl0aW5nVGl0bGUiLCJzZXRJc0VkaXRpbmdUaXRsZSIsInRpdGxlVmFsdWUiLCJzZXRUaXRsZVZhbHVlIiwiaXNFZGl0aW5nRGVzYyIsInNldElzRWRpdGluZ0Rlc2MiLCJkZXNjVmFsdWUiLCJzZXREZXNjVmFsdWUiLCJzaG93RGVsZXRlQ29uZmlybSIsInNldFNob3dEZWxldGVDb25maXJtIiwicHJvamVjdCIsInAiLCJwcm9qZWN0SWQiLCJhc3NpZ25lZSIsInUiLCJhc3NpZ25lZUlkIiwiY29tcGxldGVkU3VidGFza3MiLCJzdWJ0YXNrcyIsImZpbHRlciIsImNvbXBsZXRlZCIsImxlbmd0aCIsInN1YnRhc2tQcm9ncmVzcyIsIk1hdGgiLCJyb3VuZCIsImhhbmRsZVN0YXR1c0NoYW5nZSIsInN0YXR1cyIsInVwZGF0ZXMiLCJTdHJpbmciLCJEYXRlIiwibm93IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInJlcGxhY2UiLCJ0eXBlIiwiaGFuZGxlUHJpb3JpdHlDaGFuZ2UiLCJwcmlvcml0eSIsImhhbmRsZUFzc2lnbmVlQ2hhbmdlIiwidW5kZWZpbmVkIiwiaGFuZGxlRHVlRGF0ZUNoYW5nZSIsImR1ZURhdGUiLCJoYW5kbGVTYXZlVGl0bGUiLCJ0cmltIiwiaGFuZGxlU2F2ZURlc2MiLCJoYW5kbGVBZGRTdWJ0YXNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3VidGFzayIsInRhc2tJZCIsImNyZWF0ZWRBdCIsInRvSVNPU3RyaW5nIiwidXBkYXRlZEF0Iiwib3JkZXIiLCJoYW5kbGVBZGRDb21tZW50IiwiY29tbWVudCIsImF1dGhvcklkIiwiY29udGVudCIsIm1lbnRpb25zIiwiZWRpdGVkIiwiaGFuZGxlQWRkQXR0YWNobWVudCIsIm1vY2tGaWxlTmFtZXMiLCJyYW5kb21OYW1lIiwiZmxvb3IiLCJyYW5kb20iLCJhdHRhY2htZW50IiwibmFtZSIsInNpemUiLCJlbmRzV2l0aCIsInN0b3JlZEluSW5kZXhlZERCIiwidXBsb2FkZWRBdCIsInVwbG9hZGVkQnkiLCJoYW5kbGVEZWxldGVUYXNrIiwib3BlbiIsIm9uQ2xvc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJzcGFuIiwiaWNvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleURvd24iLCJrZXkiLCJhdXRvRm9jdXMiLCJoMiIsImJhY2tncm91bmQiLCJsYWJlbCIsInNlbGVjdCIsIm9wdGlvbiIsIm1hcCIsInNwbGl0IiwidGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJ3aWR0aCIsInN0IiwiY2hlY2tlZCIsInN1YnRhc2tJZCIsImZvcm0iLCJvblN1Ym1pdCIsImF0dGFjaG1lbnRzIiwiYXR0IiwidG9GaXhlZCIsImF0dGFjaG1lbnRJZCIsImNvbW1lbnRzIiwiYyIsImF1dGhvciIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJjb21tZW50SWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/task/TaskDetailModal.tsx
