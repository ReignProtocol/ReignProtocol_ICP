/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"src\":\"/_next/static/media/logo.73881693.png\",\"height\":1248,\"width\":3674,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.73881693.png&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":3});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2xvZ28ucG5nIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxDQUFDLDhMQUE4TCIsInNvdXJjZXMiOlsid2VicGFjazovL2FnZ3JleS1kYXBwLWJvaWxlcnBsYXRlLy4vc3JjL2Fzc2V0cy9sb2dvLnBuZz9kZjNiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS9sb2dvLjczODgxNjkzLnBuZ1wiLFwiaGVpZ2h0XCI6MTI0OCxcIndpZHRoXCI6MzY3NCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGbWVkaWElMkZsb2dvLjczODgxNjkzLnBuZyZ3PTgmcT03MFwiLFwiYmx1cldpZHRoXCI6OCxcImJsdXJIZWlnaHRcIjozfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/logo.png\n");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ \"antd/lib/layout\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ \"antd/lib/button\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/modal */ \"antd/lib/modal\");\n/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/space */ \"antd/lib/space\");\n/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/typography */ \"antd/lib/typography\");\n/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @metamask/detect-provider */ \"@metamask/detect-provider\");\n/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _ant_design_icons_lib_icons_WalletOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/WalletOutlined */ \"@ant-design/icons/lib/icons/WalletOutlined\");\n/* harmony import */ var _ant_design_icons_lib_icons_WalletOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_WalletOutlined__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _context_WalletContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/context/WalletContext */ \"./src/context/WalletContext.js\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/assets/logo.png */ \"./src/assets/logo.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst { Header } = (antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default());\nconst { Text } = (antd_lib_typography__WEBPACK_IMPORTED_MODULE_7___default());\nconst WalletHeader = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();\n    const { selectedAddress, setSelectedAddress, balance, setBalance, connected, setConnected, visible, setVisible, connectWallet, disconnectWallet } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_context_WalletContext__WEBPACK_IMPORTED_MODULE_12__.WalletContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        const init = async ()=>{\n            const provider = await _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_9___default()();\n            if (provider) {\n                provider.on(\"chainChanged\", handleChainChanged);\n                provider.on(\"accountsChanged\", handleAccountsChanged);\n            }\n        };\n        init();\n        return ()=>{\n            if (window.ethereum.removeListener) {\n                window.ethereum.removeListener(\"chainChanged\", handleChainChanged);\n                window.ethereum.removeListener(\"accountsChanged\", handleAccountsChanged);\n            }\n        };\n    }, [\n        selectedAddress\n    ]);\n    const handleChainChanged = (_chainId)=>{\n        window.location.reload();\n    };\n    const handleAccountsChanged = async (accounts)=>{\n        if (accounts.length === 0) {\n            setSelectedAddress(null);\n            setBalance(null);\n            setConnected(false);\n        } else if (accounts[0] !== selectedAddress) {\n            setSelectedAddress(accounts[0]);\n            await updateBalance(accounts[0]);\n            setConnected(true);\n        }\n    };\n    async function updateBalance(account) {\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);\n        const balance = await provider.getBalance(account);\n        setBalance(ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatEther(balance));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n        style: {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-4 sm:gap-8 px-2  sm:px-4 md:px-6 py-2 relative items-center bg-transparent  text-neutral-700 dark:text-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"md:w-40 h-11 w-28 md:h-16 cursor-pointer\",\n                        src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_13__.LogoImage,\n                        alt: \"company logo\",\n                        onClick: ()=>navigate(\"/\")\n                    }, void 0, false, {\n                        fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                    lineNumber: 82,\n                    columnNumber: 14\n                }, undefined),\n                connected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_space__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    direction: \"horizontal\",\n                    align: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                display: \"flex\",\n                                flexDirection: \"column\",\n                                alignItems: \"end\",\n                                marginRight: \"10px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                    style: {\n                                        color: \"white\",\n                                        marginBottom: \"5px\"\n                                    },\n                                    children: selectedAddress.slice(0, 6) + \"...\" + selectedAddress.slice(-4)\n                                }, void 0, false, {\n                                    fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                    style: {\n                                        color: \"white\"\n                                    },\n                                    children: [\n                                        balance.slice(0, 5),\n                                        \" MATIC\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                            lineNumber: 96,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            type: \"primary\",\n                            shape: \"circle\",\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ant_design_icons_lib_icons_WalletOutlined__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, void 0, void 0),\n                            onClick: ()=>setVisible(true)\n                        }, void 0, false, {\n                            fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                    lineNumber: 95,\n                    columnNumber: 17\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    type: \"primary\",\n                    onClick: connectWallet,\n                    children: \"Connect Wallet\"\n                }, void 0, false, {\n                    fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                    lineNumber: 107,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_modal__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    title: \"Wallet Info\",\n                    open: visible,\n                    onCancel: ()=>setVisible(false),\n                    footer: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            onClick: disconnectWallet,\n                            children: \"Disconnect Wallet\"\n                        }, \"back\", false, void 0, void 0)\n                    ],\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_space__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        direction: \"vertical\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                children: [\n                                    \"Address: \",\n                                    selectedAddress\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                                lineNumber: 118,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                children: [\n                                    \"Balance: \",\n                                    balance,\n                                    \" MATIC\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                                lineNumber: 119,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"https://docs.shardeum.org/faucet/claim\",\n                                target: \"_blank\",\n                                children: \"Claim Testnet MATIC\"\n                            }, void 0, false, {\n                                fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                                lineNumber: 120,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                        lineNumber: 117,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n                    lineNumber: 109,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n            lineNumber: 81,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/components/Header.js\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletHeader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLENBQUMsR0FBRTt3Q0FBRzs7Ozs7Ozs7Ozs7OztzQ0FHNUIsOERBQUM5RCx3REFBTUE7NEJBQUMrRCxNQUFLOzRCQUFVQyxPQUFNOzRCQUFTQyxvQkFBTSw4REFBQzFELG9GQUFjQTs0QkFBSytDLFNBQVMsSUFBTWhDLFdBQVc7Ozs7Ozs7Ozs7OzhDQUc5Riw4REFBQ3RCLHdEQUFNQTtvQkFBQytELE1BQUs7b0JBQVVULFNBQVMvQjs4QkFBZTs7Ozs7OzhCQUVuRCw4REFBQ3RCLHVEQUFLQTtvQkFDRmlFLE9BQU07b0JBQ05DLE1BQU05QztvQkFDTitDLFVBQVUsSUFBTTlDLFdBQVc7b0JBQzNCK0MsUUFBUTtzQ0FDTiw4REFBQ3JFLHdEQUFNQTs0QkFBWXNELFNBQVM5QjtzQ0FBa0I7MkJBQWxDO3FCQUNiOzhCQUVELDRFQUFDdEIsdURBQUtBO3dCQUFDc0QsV0FBVTs7MENBQ2IsOERBQUM1Qzs7b0NBQUs7b0NBQVVHOzs7Ozs7OzBDQUNoQiw4REFBQ0g7O29DQUFLO29DQUFVSztvQ0FBUTs7Ozs7OzswQ0FDeEIsOERBQUNqQix3REFBTUE7Z0NBQUNzRSxNQUFLO2dDQUF5Q0MsUUFBTzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMxRjtBQUVBLGlFQUFlMUQsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FnZ3JleS1kYXBwLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzPzMzMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyBMYXlvdXQsIEJ1dHRvbiwgTW9kYWwsIFNwYWNlLCBUeXBvZ3JhcGh5IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGV0ZWN0RXRoZXJldW1Qcm92aWRlciBmcm9tICdAbWV0YW1hc2svZGV0ZWN0LXByb3ZpZGVyJztcbmltcG9ydCB7IFdhbGxldE91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgV2FsbGV0Q29udGV4dCB9IGZyb20gJ0AvY29udGV4dC9XYWxsZXRDb250ZXh0JztcbmltcG9ydCB7IExvZ29JbWFnZSB9IGZyb20gJ0AvYXNzZXRzL2xvZ28ucG5nJztcblxuY29uc3QgeyBIZWFkZXIgfSA9IExheW91dDtcbmNvbnN0IHsgVGV4dCB9ID0gVHlwb2dyYXBoeTtcblxuY29uc3QgV2FsbGV0SGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge1xuICAgIHNlbGVjdGVkQWRkcmVzcyxcbiAgICBzZXRTZWxlY3RlZEFkZHJlc3MsXG4gICAgYmFsYW5jZSxcbiAgICBzZXRCYWxhbmNlLFxuICAgIGNvbm5lY3RlZCxcbiAgICBzZXRDb25uZWN0ZWQsXG4gICAgdmlzaWJsZSxcbiAgICBzZXRWaXNpYmxlLFxuICAgIGNvbm5lY3RXYWxsZXQsXG4gICAgZGlzY29ubmVjdFdhbGxldFxuICB9ID0gdXNlQ29udGV4dChXYWxsZXRDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwcm92aWRlciA9IGF3YWl0IGRldGVjdEV0aGVyZXVtUHJvdmlkZXIoKTtcbiAgICAgIGlmIChwcm92aWRlcikge1xuICAgICAgICBwcm92aWRlci5vbignY2hhaW5DaGFuZ2VkJywgaGFuZGxlQ2hhaW5DaGFuZ2VkKTtcbiAgICAgICAgcHJvdmlkZXIub24oJ2FjY291bnRzQ2hhbmdlZCcsIGhhbmRsZUFjY291bnRzQ2hhbmdlZCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpbml0KCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGhhbmRsZUNoYWluQ2hhbmdlZCk7XG4gICAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbc2VsZWN0ZWRBZGRyZXNzXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhaW5DaGFuZ2VkID0gKF9jaGFpbklkKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFjY291bnRzQ2hhbmdlZCA9IGFzeW5jIChhY2NvdW50cykgPT4ge1xuICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNldFNlbGVjdGVkQWRkcmVzcyhudWxsKTtcbiAgICAgIHNldEJhbGFuY2UobnVsbCk7XG4gICAgICBzZXRDb25uZWN0ZWQoZmFsc2UpO1xuICAgIH0gZWxzZSBpZiAoYWNjb3VudHNbMF0gIT09IHNlbGVjdGVkQWRkcmVzcykge1xuICAgICAgc2V0U2VsZWN0ZWRBZGRyZXNzKGFjY291bnRzWzBdKTtcbiAgICAgIGF3YWl0IHVwZGF0ZUJhbGFuY2UoYWNjb3VudHNbMF0pO1xuICAgICAgc2V0Q29ubmVjdGVkKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVCYWxhbmNlKGFjY291bnQpIHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBwcm92aWRlci5nZXRCYWxhbmNlKGFjY291bnQpO1xuICAgIHNldEJhbGFuY2UoZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKGJhbGFuY2UpKTtcbiAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEhlYWRlciBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiBzdHlsZT17eyBoZWlnaHQ6ICcyNTZweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcsIG1hcmdpblRvcDogJzMwcHgnIH19IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8bmF2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcgfX0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHN0eWxlPXt7IGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT09ICcvJyA/ICcjQTRGRjAwJyA6ICd3aGl0ZScsIGN1cnNvcjogJ3BvaW50ZXInIH19PkhvbWU8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JwY1wiIHN0eWxlPXt7IGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT09ICcvcnBjJyA/ICcjQTRGRjAwJyA6ICd3aGl0ZScsIGN1cnNvcjogJ3BvaW50ZXInIH19PlJQQzwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmZ0XCIgc3R5bGU9e3sgY29sb3I6IHJvdXRlci5wYXRobmFtZSA9PT0gJy9uZnQnID8gJyNBNEZGMDAnIDogJ3doaXRlJywgY3Vyc29yOiAncG9pbnRlcicgIH19Pk5GVDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGVmaVwiIHN0eWxlPXt7IGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT09ICcvZGVmaScgPyAnI0E0RkYwMCcgOiAnd2hpdGUnLCBjdXJzb3I6ICdwb2ludGVyJyAgfX0+IERlRmkgIDwvTGluaz4gIFxuICAgICAgICAgICAgPC9uYXY+ICovfVxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IHNtOmdhcC04IHB4LTIgIHNtOnB4LTQgbWQ6cHgtNiBweS0yIHJlbGF0aXZlIGl0ZW1zLWNlbnRlciBiZy10cmFuc3BhcmVudCAgdGV4dC1uZXV0cmFsLTcwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOnctNDAgaC0xMSB3LTI4IG1kOmgtMTYgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvSW1hZ2V9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJjb21wYW55IGxvZ29cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCIvXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PiBcblxuXG5cblxuICAgICAgICAgICAge2Nvbm5lY3RlZCA/IChcbiAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2VuZCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJywgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRBZGRyZXNzLnNsaWNlKDAsIDYpICsgXCIuLi5cIiArIHNlbGVjdGVkQWRkcmVzcy5zbGljZSgtNCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFsYW5jZS5zbGljZSgwLDUpfSBNQVRJQ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwiY2lyY2xlXCIgaWNvbj17PFdhbGxldE91dGxpbmVkIC8+fSBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKHRydWUpfSAvPlxuICAgICAgICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtjb25uZWN0V2FsbGV0fT5Db25uZWN0IFdhbGxldDwvQnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIHRpdGxlPVwiV2FsbGV0IEluZm9cIlxuICAgICAgICAgICAgICAgIG9wZW49e3Zpc2libGV9XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHNldFZpc2libGUoZmFsc2UpfVxuICAgICAgICAgICAgICAgIGZvb3Rlcj17W1xuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9XCJiYWNrXCIgb25DbGljaz17ZGlzY29ubmVjdFdhbGxldH0+RGlzY29ubmVjdCBXYWxsZXQ8L0J1dHRvbj4sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U3BhY2UgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQ+QWRkcmVzczoge3NlbGVjdGVkQWRkcmVzc308L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0PkJhbGFuY2U6IHtiYWxhbmNlfSBNQVRJQzwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPVwiaHR0cHM6Ly9kb2NzLnNoYXJkZXVtLm9yZy9mYXVjZXQvY2xhaW1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5DbGFpbSBUZXN0bmV0IE1BVElDPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cblxuICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgIDwvSGVhZGVyPlxuICAgICk7XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdhbGxldEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiZXRoZXJzIiwiTGF5b3V0IiwiQnV0dG9uIiwiTW9kYWwiLCJTcGFjZSIsIlR5cG9ncmFwaHkiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiZGV0ZWN0RXRoZXJldW1Qcm92aWRlciIsIldhbGxldE91dGxpbmVkIiwidXNlUm91dGVyIiwiV2FsbGV0Q29udGV4dCIsIkxvZ29JbWFnZSIsIkhlYWRlciIsIlRleHQiLCJXYWxsZXRIZWFkZXIiLCJyb3V0ZXIiLCJzZWxlY3RlZEFkZHJlc3MiLCJzZXRTZWxlY3RlZEFkZHJlc3MiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiY29ubmVjdFdhbGxldCIsImRpc2Nvbm5lY3RXYWxsZXQiLCJpbml0IiwicHJvdmlkZXIiLCJvbiIsImhhbmRsZUNoYWluQ2hhbmdlZCIsImhhbmRsZUFjY291bnRzQ2hhbmdlZCIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVtb3ZlTGlzdGVuZXIiLCJfY2hhaW5JZCIsImxvY2F0aW9uIiwicmVsb2FkIiwiYWNjb3VudHMiLCJsZW5ndGgiLCJ1cGRhdGVCYWxhbmNlIiwiYWNjb3VudCIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldEJhbGFuY2UiLCJ1dGlscyIsImZvcm1hdEV0aGVyIiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsIm5hdmlnYXRlIiwiZGlyZWN0aW9uIiwiYWxpZ24iLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsIm1hcmdpbkJvdHRvbSIsInNsaWNlIiwidHlwZSIsInNoYXBlIiwiaWNvbiIsInRpdGxlIiwib3BlbiIsIm9uQ2FuY2VsIiwiZm9vdGVyIiwiaHJlZiIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header.js\n");

/***/ }),

/***/ "./src/context/WalletContext.js":
/*!**************************************!*\
  !*** ./src/context/WalletContext.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WalletContext: () => (/* binding */ WalletContext),\n/* harmony export */   WalletProvider: () => (/* binding */ WalletProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/modal */ \"antd/lib/modal\");\n/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/message */ \"antd/lib/message\");\n/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst WalletContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst desiredNetwork = 80002;\nconst WalletProvider = ({ children })=>{\n    const [selectedAddress, setSelectedAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [signer, setSigner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const updateBalance = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (account)=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);\n        const balance = await provider.getBalance(account);\n        setBalance(ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.utils.formatEther(balance));\n    }, []);\n    const connectWallet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        if (window.ethereum) {\n            try {\n                const provider = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.providers.Web3Provider(window.ethereum);\n                const chainId = await provider.getNetwork().then((network)=>network.chainId);\n                if (chainId !== desiredNetwork) {\n                    antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default().warning({\n                        title: \"Wrong Network\",\n                        content: \"Please connect to the Polygon Amoy network.\"\n                    });\n                    return;\n                }\n                // Set signer\n                const signerInstance = provider.getSigner();\n                setSigner(signerInstance);\n                const accounts = await window.ethereum.request({\n                    method: \"eth_requestAccounts\"\n                });\n                setSelectedAddress(accounts[0]);\n                await updateBalance(accounts[0]);\n                setConnected(true);\n            } catch (error) {\n                console.error(error);\n            }\n        } else {\n            antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default().error({\n                title: \"Metamask is not installed\",\n                content: \"Please install it from https://metamask.io\"\n            });\n        }\n    }, [\n        updateBalance\n    ]);\n    const disconnectWallet = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setSelectedAddress(null);\n        setBalance(null);\n        setConnected(false);\n        setSigner(null);\n        antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default().success(\"Wallet disconnected\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WalletContext.Provider, {\n        value: {\n            connected,\n            selectedAddress,\n            balance,\n            visible,\n            signer,\n            setConnected,\n            setVisible,\n            connectWallet,\n            disconnectWallet,\n            setSelectedAddress,\n            setBalance\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/context/WalletContext.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9XYWxsZXRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0U7QUFDcEM7QUFDTTtBQUFBO0FBRS9CLE1BQU1PLDhCQUFnQk4sb0RBQWFBLEdBQUc7QUFFN0MsTUFBTU8saUJBQWlCO0FBRWhCLE1BQU1DLGlCQUFpQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNhLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNpQixRQUFRQyxVQUFVLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNbUIsZ0JBQWdCbEIsa0RBQVdBLENBQUMsT0FBT21CO1FBQ3ZDLE1BQU1DLFdBQVcsSUFBSW5CLDBDQUFNQSxDQUFDb0IsU0FBUyxDQUFDQyxZQUFZLENBQUNDLE9BQU9DLFFBQVE7UUFDbEUsTUFBTWQsVUFBVSxNQUFNVSxTQUFTSyxVQUFVLENBQUNOO1FBQzFDUixXQUFXViwwQ0FBTUEsQ0FBQ3lCLEtBQUssQ0FBQ0MsV0FBVyxDQUFDakI7SUFDdEMsR0FBRyxFQUFFO0lBRUwsTUFBTWtCLGdCQUFnQjVCLGtEQUFXQSxDQUFDO1FBQ2hDLElBQUl1QixPQUFPQyxRQUFRLEVBQUU7WUFDbkIsSUFBSTtnQkFDRixNQUFNSixXQUFXLElBQUluQiwwQ0FBTUEsQ0FBQ29CLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPQyxRQUFRO2dCQUNsRSxNQUFNSyxVQUFVLE1BQU1ULFNBQ25CVSxVQUFVLEdBQ1ZDLElBQUksQ0FBQyxDQUFDQyxVQUFZQSxRQUFRSCxPQUFPO2dCQUNwQyxJQUFJQSxZQUFZeEIsZ0JBQWdCO29CQUM5QkgsNkRBQWEsQ0FBQzt3QkFDWmdDLE9BQU87d0JBQ1BDLFNBQVM7b0JBQ1g7b0JBQ0E7Z0JBQ0Y7Z0JBRUEsYUFBYTtnQkFDYixNQUFNQyxpQkFBaUJoQixTQUFTaUIsU0FBUztnQkFDekNwQixVQUFVbUI7Z0JBRVYsTUFBTUUsV0FBVyxNQUFNZixPQUFPQyxRQUFRLENBQUNlLE9BQU8sQ0FBQztvQkFDN0NDLFFBQVE7Z0JBQ1Y7Z0JBQ0EvQixtQkFBbUI2QixRQUFRLENBQUMsRUFBRTtnQkFDOUIsTUFBTXBCLGNBQWNvQixRQUFRLENBQUMsRUFBRTtnQkFDL0J6QixhQUFhO1lBQ2YsRUFBRSxPQUFPNEIsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNoQjtRQUNGLE9BQU87WUFDTHZDLDJEQUFXLENBQUM7Z0JBQ1ZnQyxPQUFPO2dCQUNQQyxTQUFTO1lBQ1g7UUFDRjtJQUNGLEdBQUc7UUFBQ2pCO0tBQWM7SUFFbEIsTUFBTXlCLG1CQUFtQjNDLGtEQUFXQSxDQUFDO1FBQ25DUyxtQkFBbUI7UUFDbkJFLFdBQVc7UUFDWEUsYUFBYTtRQUNiSSxVQUFVO1FBQ1ZkLCtEQUFlLENBQUM7SUFDbEIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDLGNBQWN5QyxRQUFRO1FBQ3JCQyxPQUFPO1lBQ0xsQztZQUNBSjtZQUNBRTtZQUNBSTtZQUNBRTtZQUNBSDtZQUNBRTtZQUNBYTtZQUNBZTtZQUNBbEM7WUFDQUU7UUFDRjtrQkFFQ0o7Ozs7OztBQUdQLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZ2dyZXktZGFwcC1ib2lsZXJwbGF0ZS8uL3NyYy9jb250ZXh0L1dhbGxldENvbnRleHQuanM/NDc4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBNb2RhbCwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XG5cbmV4cG9ydCBjb25zdCBXYWxsZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBkZXNpcmVkTmV0d29yayA9IDgwMDAyO1xuXG5leHBvcnQgY29uc3QgV2FsbGV0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZEFkZHJlc3MsIHNldFNlbGVjdGVkQWRkcmVzc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb25uZWN0ZWQsIHNldENvbm5lY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NpZ25lciwgc2V0U2lnbmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IHVwZGF0ZUJhbGFuY2UgPSB1c2VDYWxsYmFjayhhc3luYyAoYWNjb3VudCkgPT4ge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IHByb3ZpZGVyLmdldEJhbGFuY2UoYWNjb3VudCk7XG4gICAgc2V0QmFsYW5jZShldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoYmFsYW5jZSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY29ubmVjdFdhbGxldCA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICBjb25zdCBjaGFpbklkID0gYXdhaXQgcHJvdmlkZXJcbiAgICAgICAgICAuZ2V0TmV0d29yaygpXG4gICAgICAgICAgLnRoZW4oKG5ldHdvcmspID0+IG5ldHdvcmsuY2hhaW5JZCk7XG4gICAgICAgIGlmIChjaGFpbklkICE9PSBkZXNpcmVkTmV0d29yaykge1xuICAgICAgICAgIE1vZGFsLndhcm5pbmcoe1xuICAgICAgICAgICAgdGl0bGU6IFwiV3JvbmcgTmV0d29ya1wiLFxuICAgICAgICAgICAgY29udGVudDogXCJQbGVhc2UgY29ubmVjdCB0byB0aGUgUG9seWdvbiBBbW95IG5ldHdvcmsuXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHNpZ25lclxuICAgICAgICBjb25zdCBzaWduZXJJbnN0YW5jZSA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICBzZXRTaWduZXIoc2lnbmVySW5zdGFuY2UpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuICAgICAgICAgIG1ldGhvZDogXCJldGhfcmVxdWVzdEFjY291bnRzXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTZWxlY3RlZEFkZHJlc3MoYWNjb3VudHNbMF0pO1xuICAgICAgICBhd2FpdCB1cGRhdGVCYWxhbmNlKGFjY291bnRzWzBdKTtcbiAgICAgICAgc2V0Q29ubmVjdGVkKHRydWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIE1vZGFsLmVycm9yKHtcbiAgICAgICAgdGl0bGU6IFwiTWV0YW1hc2sgaXMgbm90IGluc3RhbGxlZFwiLFxuICAgICAgICBjb250ZW50OiBcIlBsZWFzZSBpbnN0YWxsIGl0IGZyb20gaHR0cHM6Ly9tZXRhbWFzay5pb1wiLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXBkYXRlQmFsYW5jZV0pO1xuXG4gIGNvbnN0IGRpc2Nvbm5lY3RXYWxsZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRBZGRyZXNzKG51bGwpO1xuICAgIHNldEJhbGFuY2UobnVsbCk7XG4gICAgc2V0Q29ubmVjdGVkKGZhbHNlKTtcbiAgICBzZXRTaWduZXIobnVsbCk7XG4gICAgbWVzc2FnZS5zdWNjZXNzKFwiV2FsbGV0IGRpc2Nvbm5lY3RlZFwiKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFdhbGxldENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNvbm5lY3RlZCxcbiAgICAgICAgc2VsZWN0ZWRBZGRyZXNzLFxuICAgICAgICBiYWxhbmNlLFxuICAgICAgICB2aXNpYmxlLFxuICAgICAgICBzaWduZXIsXG4gICAgICAgIHNldENvbm5lY3RlZCxcbiAgICAgICAgc2V0VmlzaWJsZSxcbiAgICAgICAgY29ubmVjdFdhbGxldCxcbiAgICAgICAgZGlzY29ubmVjdFdhbGxldCxcbiAgICAgICAgc2V0U2VsZWN0ZWRBZGRyZXNzLFxuICAgICAgICBzZXRCYWxhbmNlLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9XYWxsZXRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwiZXRoZXJzIiwiTW9kYWwiLCJtZXNzYWdlIiwiV2FsbGV0Q29udGV4dCIsImRlc2lyZWROZXR3b3JrIiwiV2FsbGV0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNlbGVjdGVkQWRkcmVzcyIsInNldFNlbGVjdGVkQWRkcmVzcyIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiY29ubmVjdGVkIiwic2V0Q29ubmVjdGVkIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJzaWduZXIiLCJzZXRTaWduZXIiLCJ1cGRhdGVCYWxhbmNlIiwiYWNjb3VudCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXRCYWxhbmNlIiwidXRpbHMiLCJmb3JtYXRFdGhlciIsImNvbm5lY3RXYWxsZXQiLCJjaGFpbklkIiwiZ2V0TmV0d29yayIsInRoZW4iLCJuZXR3b3JrIiwid2FybmluZyIsInRpdGxlIiwiY29udGVudCIsInNpZ25lckluc3RhbmNlIiwiZ2V0U2lnbmVyIiwiYWNjb3VudHMiLCJyZXF1ZXN0IiwibWV0aG9kIiwiZXJyb3IiLCJjb25zb2xlIiwiZGlzY29ubmVjdFdhbGxldCIsInN1Y2Nlc3MiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/WalletContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _context_WalletContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/WalletContext */ \"./src/context/WalletContext.js\");\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_WalletContext__WEBPACK_IMPORTED_MODULE_3__.WalletProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/pages/_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/pages/_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/roman/Desktop/ReignProtocol/frontend/src/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNpQjtBQUNVO0FBRXpELFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbkMscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDSixrRUFBY0E7OzhCQUNmLDhEQUFDRCwwREFBWUE7Ozs7OzhCQUNiLDhEQUFDRztvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWdncmV5LWRhcHAtYm9pbGVycGxhdGUvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IFdhbGxldEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IFdhbGxldFByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L1dhbGxldENvbnRleHQnO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxXYWxsZXRQcm92aWRlcj5cbiAgICAgIDxXYWxsZXRIZWFkZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvV2FsbGV0UHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJXYWxsZXRIZWFkZXIiLCJXYWxsZXRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@ant-design/icons/lib/icons/WalletOutlined":
/*!*************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/WalletOutlined" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons/lib/icons/WalletOutlined");

/***/ }),

/***/ "@metamask/detect-provider":
/*!********************************************!*\
  !*** external "@metamask/detect-provider" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@metamask/detect-provider");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/modal":
/*!*********************************!*\
  !*** external "antd/lib/modal" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/modal");

/***/ }),

/***/ "antd/lib/space":
/*!*********************************!*\
  !*** external "antd/lib/space" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/space");

/***/ }),

/***/ "antd/lib/typography":
/*!**************************************!*\
  !*** external "antd/lib/typography" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/typography");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();