(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/contexts/AppContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AppProvider": (()=>AppProvider),
    "useApp": (()=>useApp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AppContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AppProvider({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppProvider.useEffect": ()=>{
            // Check for existing session
            const checkSession = {
                "AppProvider.useEffect.checkSession": async ()=>{
                    try {
                        // TODO: In production, verify session with backend
                        const savedUser = localStorage.getItem('user');
                        if (savedUser) {
                            setUser(JSON.parse(savedUser));
                        }
                    } catch (error) {
                        console.error('Session check failed:', error);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["AppProvider.useEffect.checkSession"];
            checkSession();
        }
    }["AppProvider.useEffect"], []);
    const login = async (phone, email)=>{
        try {
            setIsLoading(true);
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phone,
                    email
                })
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            const data = await response.json();
            // Create temporary user object
            // In production, this would come from your backend
            const newUser = {
                id: 'temp-' + Date.now(),
                phone,
                email,
                nativeLanguage: '',
                isVerified: false
            };
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));
            // Redirect to language selection if not set
            if (!newUser.nativeLanguage) {
                router.push('/language-selection');
            } else {
                router.push('/chat');
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        } finally{
            setIsLoading(false);
        }
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem('user');
        router.push('/');
    };
    const updateLanguage = async (language)=>{
        if (!user) return;
        try {
            setIsLoading(true);
            const response = await fetch('/api/translate', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: user.id,
                    nativeLanguage: language
                })
            });
            if (!response.ok) {
                throw new Error('Failed to update language');
            }
            const updatedUser = {
                ...user,
                nativeLanguage: language
            };
            setUser(updatedUser);
            localStorage.setItem('user', JSON.stringify(updatedUser));
            // Redirect to chat after language is set
            router.push('/chat');
        } catch (error) {
            console.error('Language update error:', error);
            throw error;
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppContext.Provider, {
        value: {
            user,
            setUser,
            isLoading,
            login,
            logout,
            updateLanguage
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/AppContext.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(AppProvider, "tZTulkvxNCIy72YUhaDqXHUCOtk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AppProvider;
function useApp() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
} // Example usage:
 /*
// In _app.tsx or layout.tsx:
<AppProvider>
  <Component {...pageProps} />
</AppProvider>

// In any component:
const { user, login, logout, updateLanguage } = useApp()

// Login
await login('+1234567890', 'user@example.com')

// Update language
await updateLanguage('es')

// Access user info
console.log(user?.nativeLanguage)

// Logout
logout()
*/ 
_s1(useApp, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AppProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_contexts_AppContext_tsx_669e0969._.js.map