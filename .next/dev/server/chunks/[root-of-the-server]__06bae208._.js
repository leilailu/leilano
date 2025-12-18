module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/ioredis [external] (ioredis, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("ioredis", () => require("ioredis"));

module.exports = mod;
}),
"[project]/lib/redis.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$ioredis__$5b$external$5d$__$28$ioredis$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/ioredis [external] (ioredis, cjs)");
;
function fixUrl(url) {
    if (!url) {
        return "";
    }
    if (url.startsWith("redis://") && !url.startsWith("redis://:")) {
        return url.replace("redis://", "redis://:");
    }
    if (url.startsWith("rediss://") && !url.startsWith("rediss://:")) {
        return url.replace("rediss://", "rediss://:");
    }
    return url;
}
class ClientRedis {
    static instance;
    constructor(){
        throw new Error("Use Singleton.getInstance()");
    }
    static getInstance() {
        if (!ClientRedis.instance) {
            ClientRedis.instance = new __TURBOPACK__imported__module__$5b$externals$5d2f$ioredis__$5b$external$5d$__$28$ioredis$2c$__cjs$29$__["default"](fixUrl(process.env.REDIS_URL));
        }
        return ClientRedis.instance;
    }
}
const __TURBOPACK__default__export__ = ClientRedis.getInstance();
}),
"[project]/lib/clearUrl.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const clearUrl = (url)=>{
    const { origin, pathname } = new URL(url);
    return `${origin}${pathname}`;
};
const __TURBOPACK__default__export__ = clearUrl;
}),
"[project]/lib/fetchComment.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>fetchComment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clearUrl$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/clearUrl.ts [api] (ecmascript)");
;
;
async function fetchComment(req, res) {
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clearUrl$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req.headers.referer);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"]) {
        return res.status(500).json({
            message: "Failed to connect to redis."
        });
    }
    try {
        // get data
        const rawComments = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].lrange(url, 0, -1);
        // string data to object
        const comments = rawComments.map((c)=>{
            const comment = JSON.parse(c);
            delete comment.user.email;
            return comment;
        });
        return res.status(200).json(comments);
    } catch (_) {
        return res.status(400).json({
            message: "Unexpected error occurred."
        });
    }
}
}),
"[externals]/nanoid [external] (nanoid, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("nanoid");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/getUser.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getUser
]);
async function getUser(token) {
    const response = await fetch(`https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/userinfo`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    return await response.json();
}
}),
"[project]/lib/createComment.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>createComments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$nanoid__$5b$external$5d$__$28$nanoid$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/nanoid [external] (nanoid, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$getUser$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/getUser.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clearUrl$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/clearUrl.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$nanoid__$5b$external$5d$__$28$nanoid$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$nanoid__$5b$external$5d$__$28$nanoid$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
async function createComments(req, res) {
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clearUrl$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req.headers.referer);
    const { text } = req.body;
    const { authorization } = req.headers;
    if (!text || !authorization) {
        return res.status(400).json({
            message: "Missing parameter."
        });
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"]) {
        return res.status(400).json({
            message: "Failed to connect to redis client."
        });
    }
    try {
        // verify user token
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$getUser$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(authorization);
        if (!user) return res.status(400).json({
            message: "Need authorization."
        });
        const { name, picture, sub, email } = user;
        const comment = {
            id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$nanoid__$5b$external$5d$__$28$nanoid$2c$__esm_import$29$__["nanoid"])(),
            created_at: Date.now(),
            url,
            text,
            user: {
                name,
                picture,
                sub,
                email
            }
        };
        // write data
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].lpush(url, JSON.stringify(comment));
        return res.status(200).json(comment);
    } catch (_) {
        return res.status(400).json({
            message: "Unexpected error occurred."
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/lib/deleteComment.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>deleteComments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$getUser$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/getUser.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clearUrl$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/clearUrl.ts [api] (ecmascript)");
;
;
;
async function deleteComments(req, res) {
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$clearUrl$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req.headers.referer);
    const { comment } = req.body;
    const { authorization } = req.headers;
    if (!comment || !authorization) {
        return res.status(400).json({
            message: "Missing parameter."
        });
    }
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"]) {
        return res.status(500).json({
            message: "Failed to connect to redis."
        });
    }
    try {
        // verify user token
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$getUser$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(authorization);
        if (!user) return res.status(400).json({
            message: "Invalid token."
        });
        comment.user.email = user.email;
        const isAdmin = ("TURBOPACK compile-time value", "leila.lu@live.com") === user.email;
        const isAuthor = user.sub === comment.user.sub;
        if (!isAdmin && !isAuthor) {
            return res.status(400).json({
                message: "Need authorization."
            });
        }
        // delete
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].lrem(url, 0, JSON.stringify(comment));
        return res.status(200).end();
    } catch (err) {
        return res.status(400);
    }
}
}),
"[project]/pages/api/comment.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchComment$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fetchComment.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$createComment$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/createComment.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$deleteComment$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/deleteComment.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$createComment$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$createComment$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function handler(req, res) {
    switch(req.method){
        case "GET":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fetchComment$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req, res);
        case "POST":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$createComment$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req, res);
        case "DELETE":
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$deleteComment$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req, res);
        default:
            return res.status(400).json({
                message: "Invalid method."
            });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06bae208._.js.map