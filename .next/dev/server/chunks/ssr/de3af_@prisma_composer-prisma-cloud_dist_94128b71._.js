module.exports = [
"[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/secret-C__qAfZr-CUc_Mgbg.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>isGeneratedParamSource,
    "c",
    ()=>paramName,
    "i",
    ()=>isEnvParamSource,
    "l",
    ()=>secretName,
    "n",
    ()=>envSecret,
    "o",
    ()=>isOriginParamSource,
    "r",
    ()=>generatedParam,
    "s",
    ()=>paramBindingFor,
    "t",
    ()=>envParam,
    "u",
    ()=>serviceOrigin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__isParamSource$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export c as isParamSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__paramSource$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export p as paramSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__secretSource$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export _ as secretSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/casts.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript) <export t as blindCast>");
;
;
//#region ../../1-prisma-cloud/1-extensions/target/dist/secret-C__qAfZr.mjs
/**
* Brands the payload `envParam` builds. Core's `paramSource()` is a public
* SPI, so a user could bypass `envParam` and bind a raw `paramSource('x')`;
* the brand lets `paramName` reject such a source (or another target's) with
* a clear error instead of reading an absent `.name`.
*/ const PRISMA_CLOUD_PARAM_SOURCE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Symbol.for("prisma:prisma-cloud-param-source"));
const RESERVED_PARAM_PREFIX = "COMPOSER_";
/** The names Prisma Cloud owns: it seeds and manages them, so Composer never binds one. */ const PLATFORM_OWNED_PARAM_NAMES = /* @__PURE__ */ new Set([
    "DATABASE_URL",
    "DATABASE_URL_POOLED"
]);
/**
* Binds a param slot to a named Prisma Cloud platform env var — the non-secret
* sibling of `envSecret` (spec: env-sourced config params). The platform
* injects the value into the running instance per stage; the param's own
* schema validates it at boot, unredacted. The name may not use the
* framework's reserved `COMPOSER_` prefix or the platform-owned
* `DATABASE_URL(_POOLED)` keys — same parity as `envSecret`.
*/ function envParam(name) {
    if (typeof name !== "string" || name.length === 0) throw new Error("envParam() requires a non-empty platform env-var name, e.g. envParam('APP_ORIGIN').");
    if (name.startsWith(RESERVED_PARAM_PREFIX)) throw new Error(`envParam name "${name}" may not start with "${RESERVED_PARAM_PREFIX}" — that prefix is reserved for the framework's own generated config keys.`);
    if (PLATFORM_OWNED_PARAM_NAMES.has(name)) throw new Error(`envParam name "${name}" is reserved — ${[
        ...PLATFORM_OWNED_PARAM_NAMES
    ].join(" and ")} are seeded and managed by Prisma Cloud itself, so the framework refuses to bind them. Declare the database your service uses and read its url from that connection.`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__paramSource$3e$__["paramSource"])({
        [PRISMA_CLOUD_PARAM_SOURCE]: true,
        name
    });
}
/** True only for a payload that `envParam` built — i.e. one carrying the brand. */ function isEnvParamPayload(payload) {
    return typeof payload === "object" && payload !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(payload)[PRISMA_CLOUD_PARAM_SOURCE] === true;
}
/** True iff a resolved param value is an env-sourced pointer this target built (as opposed to a literal, or a foreign/raw `ParamSource`). */ function isEnvParamSource(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__isParamSource$3e$__["isParamSource"])(value) && isEnvParamPayload(value.payload);
}
/**
* Brands the payload `generatedParam` builds — a distinct brand from
* `envParam`'s, so `isGeneratedParamSource` and `isEnvParamSource` are mutually
* exclusive even though both are `ParamSource`s.
*/ const PRISMA_CLOUD_GENERATED_PARAM_SOURCE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Symbol.for("prisma:prisma-cloud-generated-param-source"));
const GENERATED_PARAM_DEFAULT_BYTES = 32;
const GENERATED_PARAM_MIN_BYTES = 16;
const GENERATED_PARAM_MAX_BYTES = 1024;
/**
* Binds an input leaf to a value the target GENERATES at deploy — the sibling
* of `envParam` whose value comes from deploy-time generation instead of the
* environment. The generated value is produced once and persisted in deploy
* state, so it is stable across redeploys (rotation is destroy/recreate). It is
* config, not a secret; `redacted` is an orthogonal facet (default `true`).
* `bytes` must be an integer between 16 and 1024 (default 32).
*/ function generatedParam(opts = {}) {
    const bytes = opts.bytes ?? GENERATED_PARAM_DEFAULT_BYTES;
    const redacted = opts.redacted ?? true;
    if (!Number.isInteger(bytes) || bytes < GENERATED_PARAM_MIN_BYTES || bytes > GENERATED_PARAM_MAX_BYTES) throw new Error(`generatedParam() bytes must be an integer between ${GENERATED_PARAM_MIN_BYTES} and ${GENERATED_PARAM_MAX_BYTES} (got ${String(bytes)}).`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__paramSource$3e$__["paramSource"])({
        [PRISMA_CLOUD_GENERATED_PARAM_SOURCE]: true,
        bytes,
        redacted
    });
}
/** True only for a payload that `generatedParam` built — i.e. one carrying the brand. */ function isGeneratedParamPayload(payload) {
    return typeof payload === "object" && payload !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(payload)[PRISMA_CLOUD_GENERATED_PARAM_SOURCE] === true;
}
/** True iff a resolved value is a generated-param source this target built (as opposed to a literal, an `envParam` source, or a foreign/raw `ParamSource`). */ function isGeneratedParamSource(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__isParamSource$3e$__["isParamSource"])(value) && isGeneratedParamPayload(value.payload);
}
const PRISMA_CLOUD_ORIGIN_PARAM_SOURCE = Symbol.for("prisma:prisma-cloud-origin-param-source");
/**
* Binds an input leaf to another service's public origin on the stage being deployed,
* e.g. `auth()`'s `baseUrl: serviceOrigin('web')`. `address` is the target's provision id.
*/ function serviceOrigin(address) {
    if (typeof address !== "string" || address.length === 0) throw new Error("serviceOrigin() requires the target service's deployment address, e.g. serviceOrigin('web').");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__p__as__paramSource$3e$__["paramSource"])({
        [PRISMA_CLOUD_ORIGIN_PARAM_SOURCE]: true,
        address
    });
}
/** True iff `value` was built by `serviceOrigin`. */ function isOriginParamSource(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__isParamSource$3e$__["isParamSource"])(value) && typeof value.payload === "object" && value.payload !== null && PRISMA_CLOUD_ORIGIN_PARAM_SOURCE in value.payload && value.payload[PRISMA_CLOUD_ORIGIN_PARAM_SOURCE] === true;
}
/**
* Reads the Prisma Cloud env-var name back out of a param binding's opaque
* source. A source not built by `envParam` (a raw `paramSource(...)` or
* another target's source) carries no name — reject it here. `paramName` runs
* in preflight and at serialize before any value ever crosses the wire, so a
* foreign source fails early and clearly rather than producing a broken
* deploy with an undefined name.
*/ function paramName(binding) {
    const { binding: bound } = binding;
    if (!isEnvParamSource(bound)) throw new Error(`param slot "${binding.slot}" of service "${binding.serviceAddress}" is bound to a source not created by envParam() — bind env-sourced params with envParam('NAME') from @prisma/composer-prisma-cloud.`);
    return bound.payload.name;
}
/**
* Finds the manifest entry for one service param slot. `serialize` calls this
* only after confirming `buildConfig` resolved the slot to a `ParamSource`
* (`isParamSource(value)`), so a miss here means `graph.params` and the
* resolved `Config` have drifted — a Load invariant violation, surfaced
* loudly rather than producing a pointer row with an undefined name.
*/ function paramBindingFor(bindings, serviceAddress, slot) {
    const binding = bindings.find((b)=>b.serviceAddress === serviceAddress && b.slot === slot);
    if (binding === void 0) throw new Error(`param slot "${slot}" of "${serviceAddress}" resolved to a source but has no bound entry in the manifest — Load should have recorded it.`);
    return binding;
}
/**
* Brands the payload `envSecret` builds. Core's `secretSource()` is a public
* SPI, so a user could bypass `envSecret` and bind a raw `secretSource('x')`;
* the brand lets `secretName` reject such a source (or another target's) with a
* clear error instead of reading an absent `.name`.
*/ const PRISMA_CLOUD_SECRET_SOURCE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Symbol.for("prisma:prisma-cloud-secret-source"));
const RESERVED_SECRET_PREFIX = "COMPOSER_";
/** The names Prisma Cloud owns: it seeds and manages them, so Composer never binds one. */ const PLATFORM_OWNED_SECRET_NAMES = /* @__PURE__ */ new Set([
    "DATABASE_URL",
    "DATABASE_URL_POOLED"
]);
/**
* Binds a secret slot to a named Prisma Cloud platform env var (ADR-0029). The
* value is provisioned out-of-band; only the name is carried. The name may not
* use the framework's reserved `COMPOSER_` prefix or the platform-owned
* `DATABASE_URL(_POOLED)` keys.
*/ function envSecret(name) {
    if (typeof name !== "string" || name.length === 0) throw new Error("envSecret() requires a non-empty platform env-var name, e.g. envSecret('STRIPE_SECRET_KEY').");
    if (name.startsWith(RESERVED_SECRET_PREFIX)) throw new Error(`envSecret name "${name}" may not start with "${RESERVED_SECRET_PREFIX}" — that prefix is reserved for the framework's own generated config keys.`);
    if (PLATFORM_OWNED_SECRET_NAMES.has(name)) throw new Error(`envSecret name "${name}" is reserved — ${[
        ...PLATFORM_OWNED_SECRET_NAMES
    ].join(" and ")} are seeded and managed by Prisma Cloud itself, so the framework refuses to bind them. Declare the database your service uses and read its url from that connection.`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$5f$__as__secretSource$3e$__["secretSource"])({
        [PRISMA_CLOUD_SECRET_SOURCE]: true,
        name
    });
}
/** True only for a payload that `envSecret` built — i.e. one carrying the brand. */ function isEnvSecretPayload(payload) {
    return typeof payload === "object" && payload !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(payload)[PRISMA_CLOUD_SECRET_SOURCE] === true;
}
/**
* Reads the Prisma Cloud env-var name back out of an opaque secret source —
* an `envSecret` leaf of an input binding (ADR-0042). A source not built by
* `envSecret` (a raw `secretSource(...)` or another target's source) carries
* no name — reject it here, with `where` naming the leaf's position, so a
* foreign source fails early and clearly rather than producing a broken
* deploy with an undefined name.
*/ function secretName(source, where) {
    const payload = source.payload;
    if (!isEnvSecretPayload(payload)) throw new Error(`${where} is bound to a secret source not created by envSecret() — bind secrets with envSecret('NAME') from @prisma/composer-prisma-cloud.`);
    return payload.name;
}
;
 //# sourceMappingURL=secret-C__qAfZr-CUc_Mgbg.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/serializer-CE3hLPYz-BnSjO4w7.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>encode,
    "c",
    ()=>paramEntries,
    "d",
    ()=>serializeInput,
    "f",
    ()=>stash,
    "i",
    ()=>deserialize,
    "l",
    ()=>readInput,
    "m",
    ()=>stashProviderParams,
    "n",
    ()=>configKey,
    "o",
    ()=>encodeParamPointer,
    "p",
    ()=>stashInput,
    "r",
    ()=>decodeParamPointer,
    "s",
    ()=>isParamPointerRow,
    "t",
    ()=>ORIGIN_KEY_NAME,
    "u",
    ()=>readOrigin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$secret$2d$C_$5f$qAfZr$2d$CUc_Mgbg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/secret-C__qAfZr-CUc_Mgbg.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__isParamSource$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export c as isParamSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__isSecretSource$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export u as isSecretSource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/casts.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
;
;
;
;
//#region ../../0-framework/0-foundation/foundation/dist/casts-DpaahrlC.mjs
/**
* **Last-resort escape hatch for unsafe type assertions. Not a sanctioned tool to reach for.**
*
* Before reaching for `blindCast`, **rewrite the surrounding code so the cast becomes
* unnecessary**: tighten an input type, add a runtime check that narrows via a type
* predicate, restructure a generic so the compiler can see the relationship you're
* asserting, or use {@link castAs} when the value already satisfies the target type.
* Only when no rewrite is feasible does `blindCast` become the right answer — and at
* that point, the `Reason` literal you supply must articulate the compromise in
* language a reviewer can evaluate.
*
* The reviewer **will** validate the `Reason`. If it doesn't hold up under scrutiny,
* that is not a signal to soften the reason; it is a signal to go back and solve the
* underlying type-system problem properly. An unconvincing justification is rework,
* not a free pass.
*
* `blindCast` is the auditable form of `as Foo` / `as unknown as Foo`: it bypasses
* the compiler's checks (the input type is `unknown`, the output type is whatever the
* caller asks for), but it forces the unsafety to be named at the call site instead of
* smuggled in via a bare `as`. The `Reason` type parameter exists only at compile
* time — it is not present in the emitted JavaScript — but it is grep-able and
* visible to future readers.
*
* @example
* ```typescript
* const stringValue = blindCast<
*   string,
*   "JSON.parse returns `unknown`; this field is documented to be a string in the API contract"
* >(parsed[key]);
* ```
*
* @typeParam TargetType - The type the caller is asserting the input has.
* @typeParam _Reason - A string literal describing why bypassing the type system is necessary here.
*                     Only meaningful at compile time. The reviewer evaluates whether it justifies the unsafety.
*/ function blindCast$1(input) {
    return input;
}
//#endregion
//#region ../../0-framework/0-foundation/foundation/dist/secret-DoWGmN7m.mjs
/**
* A value wrapper that redacts everywhere except the one explicit reader,
* `expose()`. Sensitivity is carried by the TYPE (`SecretBox<T>`), not a flag a
* sink must remember to check: `String(box)`, template interpolation,
* `JSON.stringify`, and `console.log`/`util.inspect` all print `[REDACTED]`, so
* a secret can't leak through an accidental log or serialization.
*
* Every box carries a brand property keyed by the registered symbol
* `Symbol.for('prisma:secret-box')`, which is what `isSecretString` checks. A
* symbol key is invisible to `JSON.stringify` and `Object.keys`, so the box's
* public shape still matches the platform's own `secrecy` type
* (pdp-control-plane).
*/ const REDACTED = "[REDACTED]";
const SECRET_BOX = blindCast$1(Symbol.for("prisma:secret-box"));
var SecretBox = class {
    [SECRET_BOX] = true;
    #value;
    constructor(value){
        this.#value = value;
    }
    /** The sole explicit door to the wrapped value. */ expose() {
        return this.#value;
    }
    toString() {
        return REDACTED;
    }
    toJSON() {
        return REDACTED;
    }
    valueOf() {
        return REDACTED;
    }
    [Symbol.toPrimitive]() {
        return REDACTED;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return REDACTED;
    }
};
//#endregion
//#region ../../1-prisma-cloud/1-extensions/target/dist/serializer-CE3hLPYz.mjs
/**
* Walks a node's own params, then each dependency input's connection params —
* the same enumeration order `configOf` uses, but carrying the raw
* `ConfigParam` (with its `serialize`/`deserialize`) instead of a pure-data
* projection.
*/ function paramEntries(node) {
    const entries = [];
    for (const [input, value] of Object.entries(node.inputs)){
        if (typeof value !== "object" || value === null) continue;
        const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(value).connection.params;
        for (const [name, param] of Object.entries(params))entries.push({
            owner: {
                input
            },
            name,
            param
        });
    }
    for (const [name, param] of Object.entries(node.params))entries.push({
        owner: "service",
        name,
        param
    });
    return entries;
}
const configKey = (address, d)=>{
    const segments = address.split(".").filter((s)=>s.length > 0);
    const owner = d.owner === "service" ? [] : [
        d.owner.input
    ];
    return [
        "COMPOSER",
        ...segments,
        ...owner,
        d.name
    ].join("_").toUpperCase();
};
/**
* Typed value → its stored string. Service-own literals are JSON-encoded; a
* dependency-input value is a provisioning ref at deploy (and a resolved
* string at boot) and passes through untouched — LANDMINE: JSON-encoding it
* would break the ordering edge Alchemy resolves through it.
*/ function encode(owner, value) {
    return owner === "service" ? JSON.stringify(value) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(value);
}
/** Reverses `encode`: JSON-parse a service-own value, take a dependency-input value raw. */ function decode(owner, raw) {
    return owner === "service" ? JSON.parse(raw) : raw;
}
const PARAM_POINTER_PREFIX = "@composer-param-pointer:";
/** True iff `raw` is a param pointer row (as opposed to a JSON-encoded literal). */ const isParamPointerRow = (raw)=>raw.startsWith(PARAM_POINTER_PREFIX);
/** Builds a param pointer row's stored value from the platform var NAME it points to. */ const encodeParamPointer = (name)=>`${PARAM_POINTER_PREFIX}${name}`;
/** Reverses `encodeParamPointer`: the platform var NAME a pointer row points to. */ const decodeParamPointer = (raw)=>raw.slice(24);
function coerce(raw, d, key) {
    if (!(raw !== void 0 && raw !== "")) {
        if (d.param.default !== void 0) return d.param.default;
        if (d.param.optional === true) return void 0;
        throw new Error(`missing required config param "${d.name}" (env ${key})`);
    }
    if (d.owner === "service" && isParamPointerRow(raw)) return coerceEnvSourcedParam(raw, d, key);
    try {
        return standardValidateSync(d.param.schema, decode(d.owner, raw));
    } catch (cause) {
        const message = cause instanceof Error ? cause.message : String(cause);
        throw new Error(`invalid value for config param "${d.name}" (env ${key}): ${message}`);
    }
}
/**
* Boot resolution for an env-sourced param: double-lookup (pointer → platform
* var), then the param's own schema on the raw string — no JSON decode, and
* no redaction (it's config, not a secret). An UNSET platform var is a loud
* boot failure naming both the param and the platform var; an EMPTY string is
* not special-cased here — it reaches the schema like any other value, so it
* passes iff the schema accepts it (deliberately unlike a literal param's own
* ""-means-absent rule, and unlike a secret's non-empty requirement).
*/ function coerceEnvSourcedParam(raw, d, key) {
    const platformVar = decodeParamPointer(raw);
    const value = process.env[platformVar];
    if (value === void 0) throw new Error(`env-sourced config param "${d.name}" (env ${key} → ${platformVar}) is unset: the platform variable "${platformVar}" was not injected — the deploy did not provision it.`);
    try {
        return standardValidateSync(d.param.schema, value);
    } catch (cause) {
        const message = cause instanceof Error ? cause.message : String(cause);
        throw new Error(`invalid value for env-sourced config param "${d.name}" (env ${key} → ${platformVar}): ${message}`);
    }
}
/**
* Boot: read each declared param from env by its key, reverse the param's own
* serialization (missing/invalid fails loudly), assemble the typed Config.
* The input document rides its own channel (readInput), not this one.
*/ const deserialize = (node, address)=>{
    const service = {};
    const inputs = {};
    for (const d of paramEntries(node)){
        const key = configKey(address, d);
        const value = coerce(process.env[key], d, key);
        if (d.owner === "service") service[d.name] = value;
        else {
            let bucket = inputs[d.owner.input];
            if (bucket === void 0) {
                bucket = {};
                inputs[d.owner.input] = bucket;
            }
            bucket[d.name] = value;
        }
    }
    return {
        service,
        inputs
    };
};
/**
* run()'s setup step: write the resolved config to the environment under
* address-free keys (configKey("", d) + each serialize suffix), which load()
* reads back with no address. Uses env, not a module variable, because a
* framework may fork worker processes that inherit env but not memory.
* Writes only these keys; nothing else is touched.
*/ const stash = (node, config)=>{
    for (const d of paramEntries(node)){
        const value = d.owner === "service" ? config.service[d.name] : config.inputs[d.owner.input]?.[d.name];
        if (value === void 0) continue;
        process.env[configKey("", d)] = encode(d.owner, value);
    }
};
/** The input document's own row name; its full key is COMPOSER_<addr>_INPUT. */ const INPUT_KEY_NAME = "INPUT";
/** The input document row's key for a service address. */ const inputKey = (address)=>configKey(address, {
        owner: "service",
        name: INPUT_KEY_NAME
    });
/**
* The platform var the deploy provisions for a generated input leaf's value:
* COMPOSER_<addr>_<KEY>_GENERATED, where <KEY> is the leaf's input-document
* path normalized the way `configKey` normalizes its keys (segments joined
* with "_", uppercased). Lives in the framework's reserved COMPOSER_ namespace
* (envParam/envSecret reject COMPOSER_ names), so it can never collide with a
* user-provisioned var.
*/ const generatedParamVarName = (address, path)=>{
    const segments = address.split(".").filter((s)=>s.length > 0);
    const pathSegments = path.split(".").filter((s)=>s.length > 0);
    return [
        "COMPOSER",
        ...segments,
        ...pathSegments,
        "GENERATED"
    ].join("_").toUpperCase();
};
const SECRET_MARKER = "$secret";
const GENERATED_MARKER = "$generated";
const ESCAPABLE_KEY = /^\$+(?:secret|generated)$/;
const ESCAPED_KEY = /^\$\$+(?:secret|generated)$/;
/** True for the framework's secret pointer: `{ "$secret": "<PLATFORM_VAR>" }` and nothing else. */ function isSecretPointer(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value) && Object.keys(value).length === 1 && SECRET_MARKER in value && typeof value[SECRET_MARKER] === "string";
}
/** True for the framework's generated pointer: `{ "$generated": "<PLATFORM_VAR>", "redacted": <bool> }` and nothing else. The `redacted` facet rides the pointer so boot — which is schema-blind — knows whether to box (§ 4.1). */ function isGeneratedPointer(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value) && Object.keys(value).length === 2 && GENERATED_MARKER in value && typeof value[GENERATED_MARKER] === "string" && "redacted" in value && typeof value["redacted"] === "boolean";
}
/** A plain data object (not an array, not a class instance) — the only object shape a binding/document may nest. */ function isPlainObject(value) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
    const proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
const ABSENT = Symbol("composer-input-absent");
/** Stands in for a `serviceOrigin()` leaf in deploy-time validation; boot validates the real one. */ const ORIGIN_SENTINEL = "https://origin.invalid";
/**
* Deploy guard (ADR-0041, closing review finding F02): every pointer var name a
* service's input binding produces — `$secret` names AND `$generated` names —
* must be distinct after normalization. Env var names compare case-insensitively
* (the platform uppercases), so two input paths whose names differ only in case
* would silently overwrite each other at deploy; fail loudly naming both. One
* general check over both pointer kinds, not a per-marker special case (it also
* covers the pre-existing `foo`/`FOO` class for secrets).
*/ function assertDistinctPointerNames(pointers, address) {
    const seen = /* @__PURE__ */ new Map();
    for (const pointer of pointers){
        const normalized = pointer.varName.toUpperCase();
        const prior = seen.get(normalized);
        if (prior !== void 0) throw new Error(`invalid input for service "${address}": input paths "${prior.path}" and "${pointer.path}" both resolve to the platform variable "${normalized}" — pointer variable names must be distinct (env var names compare case-insensitively).`);
        seen.set(normalized, pointer);
    }
}
/**
* Deploy: recursive descent over the provision-time binding (plain data).
* `envSecret` leaves become empty sentinel `SecretBox`es (the value never
* enters the deploy); `envParam` leaves read the deploy shell — unset or
* empty means the enclosing object key is OMITTED, and the schema arbitrates
* whether that absence is legal (ADR-0042). Everything non-plain (a class
* instance, a function, a raw SecretBox holding a value) is rejected loudly.
*/ function resolveInputBinding(binding, env, address = "") {
    const sentinels = /* @__PURE__ */ new Map();
    const generated = [];
    const pointers = [];
    const absent = [];
    const walk = (value, path)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$secret$2d$C_$5f$qAfZr$2d$CUc_Mgbg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"])(value)) {
            const varName = generatedParamVarName(address, path);
            generated.push({
                varName,
                bytes: 0,
                redacted: false,
                path,
                origin: value.payload.address
            });
            pointers.push({
                path,
                varName
            });
            return ORIGIN_SENTINEL;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$secret$2d$C_$5f$qAfZr$2d$CUc_Mgbg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(value)) {
            const { bytes, redacted } = value.payload;
            const varName = generatedParamVarName(address, path);
            generated.push({
                varName,
                bytes,
                redacted,
                path
            });
            pointers.push({
                path,
                varName
            });
            return redacted ? new SecretBox("") : "";
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__isSecretSource$3e$__["isSecretSource"])(value)) {
            const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$secret$2d$C_$5f$qAfZr$2d$CUc_Mgbg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(value, path === "" ? "the input binding root" : `input key "${path}"`);
            const sentinel = new SecretBox("");
            sentinels.set(sentinel, name);
            pointers.push({
                path,
                varName: name
            });
            return sentinel;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__isParamSource$3e$__["isParamSource"])(value)) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$secret$2d$C_$5f$qAfZr$2d$CUc_Mgbg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(value)) throw new Error(`input binding${path === "" ? "" : ` key "${path}"`} is bound to a param source not created by envParam() — bind env-sourced input values with envParam('NAME') from @prisma/composer-prisma-cloud.`);
            const raw = env[value.payload.name];
            if (raw === void 0 || raw === "") {
                absent.push(path === "" ? `(root) → ${value.payload.name}` : `${path} → ${value.payload.name}`);
                return ABSENT;
            }
            return raw;
        }
        if (Array.isArray(value)) return value.map((member, index)=>{
            const resolvedMember = walk(member, path === "" ? String(index) : `${path}.${index}`);
            if (resolvedMember === ABSENT) throw new Error(`input binding key "${path}[${index}]" is an env-bound array element whose variable is unset — an array position cannot be omitted; bind a literal or provision the variable.`);
            return resolvedMember;
        });
        if (isPlainObject(value)) {
            const out = {};
            for (const [key, member] of Object.entries(value)){
                const resolvedMember = walk(member, path === "" ? key : `${path}.${key}`);
                if (resolvedMember === ABSENT) continue;
                out[key] = resolvedMember;
            }
            return out;
        }
        if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") return value;
        throw new Error(`input binding${path === "" ? "" : ` key "${path}"`} holds a value that is not plain data (${typeof value === "object" ? "a non-plain object" : `a ${typeof value}`}) — a binding's leaves are literals, envParam(...), or envSecret(...) (ADR-0042). A secret VALUE (e.g. a SecretBox) never belongs in a binding — bind envSecret('NAME') instead.`);
    };
    const resolved = walk(binding, "");
    assertDistinctPointerNames(pointers, address);
    return {
        resolved: resolved === ABSENT ? void 0 : resolved,
        sentinels,
        generated,
        absent
    };
}
/**
* Deploy: resolve the binding, judge it with the service's own schema
* (secrets as opaque sentinel boxes), and serialize the defaults-applied
* VALIDATED output — pointers substituted back where the sentinels sit — into
* one JSON row. Returns `undefined` for a service with no input schema.
* A validation failure that mentions a secret leaf means either a
* misclassified binding (a literal where the schema wants a `SecretString`,
* or vice versa) or a schema refining on secret CONTENT — deploy-time
* validation sees only empty boxes, and the ADR forbids content refinements.
*/ function serializeInput(node, address, binding, env = process.env) {
    const schema = node.inputSchema;
    if (schema === void 0) {
        if (binding !== void 0) throw new Error(`service "${address}" has an input binding but declares no input schema — Load should have rejected it (ADR-0042).`);
        return;
    }
    if (binding === void 0) throw new Error(`service "${address}" declares an input schema but has no recorded input binding — Load should have required it (ADR-0042).`);
    const { resolved, sentinels, generated, absent } = resolveInputBinding(binding, env, address);
    let validated;
    try {
        validated = standardValidateSync(schema, resolved);
    } catch (cause) {
        const message = cause instanceof Error ? cause.message : String(cause);
        throw new Error(`invalid input for service "${address}": ${message}\n(Deploy-time validation sees each envSecret leaf as an opaque, empty SecretString box. A failure naming a secret field means the binding and schema disagree about its secretness, or the schema refines on secret content — which ADR-0042 forbids.)`);
    }
    const emittedSecrets = /* @__PURE__ */ new Set();
    const document = substitutePointers(validated, sentinels, generated, address, emittedSecrets);
    return {
        key: inputKey(address),
        value: JSON.stringify(document),
        absent,
        generated,
        secrets: [
            ...emittedSecrets
        ].sort()
    };
}
/**
* Walks the VALIDATED output, mapping each generated leaf (by input path) to
* its `{ "$generated": VAR, "redacted": <bool> }` pointer and each sentinel box
* (by identity) to its `{ "$secret": name }` pointer, escaping any user key that
* matches a reserved marker. The generated check runs FIRST, so a redacted
* generated leaf's sentinel box becomes `$generated`, never mistaken for a
* secret. The `redacted` facet rides the pointer so schema-blind boot knows
* whether to box. A `SecretString` the walk does not recognize came from the
* schema itself (a default or transform minting a box) — there is no platform
* var behind it, so it is rejected rather than serialized. The path format
* matches `resolveInputBinding`'s exactly, so generated leaves are found by path.
*/ function substitutePointers(value, sentinels, generated, address, emittedSecrets) {
    const generatedByPath = new Map(generated.map((leaf)=>[
            leaf.path,
            leaf
        ]));
    const walk = (v, path)=>{
        const leaf = generatedByPath.get(path);
        if (leaf !== void 0) return {
            [GENERATED_MARKER]: leaf.varName,
            redacted: leaf.redacted
        };
        if (v instanceof SecretBox) {
            const name = sentinels.get(v);
            if (name === void 0) throw new Error(`input key "${path}" of service "${address}" validated to a SecretString the binding did not supply — a schema must not mint secret boxes (a default/transform cannot name a platform variable); bind the field with envSecret('NAME') instead.`);
            emittedSecrets.add(name);
            return {
                [SECRET_MARKER]: name
            };
        }
        if (Array.isArray(v)) return v.map((m, i)=>walk(m, path === "" ? String(i) : `${path}.${i}`));
        if (isPlainObject(v)) {
            const out = {};
            for (const [key, member] of Object.entries(v)){
                if (member === void 0) continue;
                const written = ESCAPABLE_KEY.test(key) ? `$${key}` : key;
                out[written] = walk(member, path === "" ? key : `${path}.${key}`);
            }
            return out;
        }
        if (v === null || v === void 0 || typeof v === "string" || typeof v === "number" || typeof v === "boolean") return v;
        throw new Error(`input key "${path}" of service "${address}" validated to a value that cannot be serialized (a ${typeof v === "object" ? "non-plain object" : typeof v}) — the input document is plain JSON (ADR-0042).`);
    };
    return walk(value, "");
}
/**
* Boot: read the one input document row (address-free after run()'s
* re-stash), swap each `$secret` pointer for a redacting box over the named
* platform var, unescape reserved keys, validate with the service's own
* schema, and return the typed object. A missing row is a loud failure naming
* the env var — a deployed environment always writes it; a local harness must
* supply it (set the row to the serialized input document).
*/ function readInput(node, address) {
    const schema = node.inputSchema;
    if (schema === void 0) throw new Error(`input() called on service "${node.name}", which declares no input schema — declare \`input: <schema>\` on compute() to use it (ADR-0042).`);
    const key = inputKey(address);
    const raw = process.env[key];
    if (raw === void 0 || raw === "") throw new Error(`this service's input is not available (env ${key} is unset) — a deployed environment writes it automatically; a local harness must supply it like any other config value (set ${key} to the serialized input document).`);
    let parsed;
    try {
        parsed = JSON.parse(raw);
    } catch (cause) {
        const message = cause instanceof Error ? cause.message : String(cause);
        throw new Error(`this service's input document is not valid JSON (env ${key}): ${message} — a deployed environment writes it automatically; a local harness must supply the serialized input document (set ${key} to it).`);
    }
    const hydrated = hydrateInputDocument(parsed, key);
    try {
        return standardValidateSync(schema, hydrated);
    } catch (cause) {
        const message = cause instanceof Error ? cause.message : String(cause);
        throw new Error(`invalid input document (env ${key}): ${message}`);
    }
}
/** Reverses the document encoding: `$secret` pointers become redacting boxes; a `$generated` pointer becomes a box iff its `redacted` facet is true, a plain string otherwise; escaped reserved keys drop one "$". */ function hydrateInputDocument(value, key) {
    if (isSecretPointer(value)) {
        const name = value[SECRET_MARKER];
        const secret = process.env[name];
        if (secret === void 0 || secret === "") throw new Error(`secret input is not provisioned (env ${key} → ${name}): the platform var "${name}" is unset or empty.`);
        return new SecretBox(secret);
    }
    if (isGeneratedPointer(value)) {
        const varName = value[GENERATED_MARKER];
        const generated = process.env[varName];
        if (generated === void 0 || generated === "") throw new Error(`generated input is not provisioned (env ${key} → ${varName}): the platform variable "${varName}" is unset or empty — the deploy provisions this variable, so its absence means the deploy and the running service disagree.`);
        return value.redacted ? new SecretBox(generated) : generated;
    }
    if (Array.isArray(value)) return value.map((member)=>hydrateInputDocument(member, key));
    if (isPlainObject(value)) {
        const out = {};
        for (const [k, member] of Object.entries(value)){
            const read = ESCAPED_KEY.test(k) ? k.slice(1) : k;
            out[read] = hydrateInputDocument(member, key);
        }
        return out;
    }
    return value;
}
/**
* run()'s setup step for the input document: re-emit the row under its
* address-free key, so the address-free `readInput` reads identically. The
* document carries pointers, never values — the values stay only in their
* platform vars.
*/ const stashInput = (node, address)=>{
    if (node.inputSchema === void 0) return;
    const raw = process.env[inputKey(address)];
    if (raw === void 0) return;
    process.env[inputKey("")] = raw;
};
/**
* Boot: for each reserved provider param, read its address-scoped row through
* the same `coerce` a declared param uses (JSON-decode, schema-validate), and
* re-emit it address-free — `stash`'s counterpart for this separate
* declaration space. A param is declared optional here unconditionally: an
* absent row means "never provisioned" (local dev, tests, a provider with no
* registered value for this deploy), never a boot failure, so nothing is
* stashed and the runtime reader that owns this slot falls back to its own
* pass-through behavior.
*/ function stashProviderParams(entries, address) {
    for (const entry of entries){
        const d = {
            owner: "service",
            name: entry.name,
            param: {
                schema: entry.schema,
                optional: true
            }
        };
        const key = configKey(address, d);
        const value = coerce(process.env[key], d, key);
        if (value === void 0) continue;
        process.env[configKey("", d)] = encode("service", value);
    }
}
/** The framework-resolved origin row: COMPOSER_<addr>_ORIGIN. Written per
*  compute service at serialize — the service's own provisioned endpoint URL,
*  riding the reserved-provider-param machinery (`origin-key.ts`'s
*  `ORIGIN_PARAM`); never a declared param, never in config(). A harness with
*  no deploy behind it supplies it by setting `COMPOSER_ORIGIN` to the
*  JSON-encoded origin URL — exactly how the existing entrypoint tests supply
*  their other `COMPOSER_*` rows. */ const ORIGIN_KEY_NAME = "ORIGIN";
/**
* Reads this service's origin back out of the address-free stash
* `stashProviderParams` wrote for the ORIGIN entry. `COMPOSER_ORIGIN` unset is
* a loud failure — a deployed environment always writes it, so an unset row
* means either a local harness that hasn't supplied it or a boot() called
* before run().
*/ function readOrigin() {
    const d = {
        owner: "service",
        name: ORIGIN_KEY_NAME,
        param: {
            schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string"),
            optional: true
        }
    };
    const key = configKey("", d);
    const value = coerce(process.env[key], d, key);
    if (value === void 0) throw new Error("this service's origin is not available (env COMPOSER_ORIGIN is unset) — a deployed environment writes it automatically; a local harness must supply it like any other config value (set COMPOSER_ORIGIN to the JSON-encoded origin URL).");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(value);
}
/** Synchronous Standard Schema validation — see the matching note in core's `config.ts`. */ function standardValidateSync(schema, value) {
    const result = schema["~standard"].validate(value);
    if (result instanceof Promise) throw new Error("config param schema validation must be synchronous — async Standard Schema validators are not supported for config params");
    if (result.issues !== void 0) throw new Error(`config param validation failed: ${result.issues.map((issue)=>issue.message).join("; ")}`);
    return result.value;
}
;
 //# sourceMappingURL=serializer-CE3hLPYz-BnSjO4w7.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/provisioned-edges-CPrUiJ1K-DKbfx776.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>provisionedEdges,
    "i",
    ()=>STREAMS_API_KEY_ENV,
    "n",
    ()=>SELF_ORIGIN,
    "o",
    ()=>streamsApiKeyNeed,
    "r",
    ()=>STREAMS_API_KEY,
    "t",
    ()=>RESERVED_PROVIDER_PARAMS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$CE3hLPYz$2d$BnSjO4w7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/serializer-CE3hLPYz-BnSjO4w7.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__m__as__provisionNeed$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export m as provisionNeed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$service$2d$rpc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/service-rpc.mjs [app-rsc] (ecmascript)");
;
;
;
;
//#region ../../1-prisma-cloud/1-extensions/target/dist/provisioned-edges-CPrUiJ1K.mjs
/**
* The service's own origin as a reserved provider param (ADR-0031): the ONE
* brand and the ONE entry — shared by control.ts (which registers the
* deploy-side value function that resolves the provisioned service's
* `endpointDomain` — see its `selfOriginValue`) and compute.ts (which
* validates and stashes the row at boot through the generic
* `stashProviderParams` loop), so writer and reader cannot drift.
*
* Unlike the key-minting brands (`service-keys.ts`, `streams-keys.ts`) this
* brand has no provisioner and no consumer edges: the value derives from the
* service's OWN provisioned attributes, so control.ts registers it as a
* service-derived provider param (`descriptors/shared.ts`'s
* `ServiceProviderParam`) and the descriptor writes it for EVERY compute
* service, exposing or not.
*
* This module is reachable from the RUNTIME/authoring side — it must never
* import `@internal/lowering` or `effect`, or those tokens leak into a user
* service's bundle (the deploy-side value function lives in control.ts, the
* control-plane-only entry).
*/ /** ADR-0031's brand for the service's own origin — control.ts registers the deploy-side value function under this. */ const SELF_ORIGIN = Symbol.for("prisma:self-origin");
/**
* The reserved provider param for the origin row: the var name is `ORIGIN`,
* derived through `configKey` at both ends (`configKey(address, …)` at
* deploy, `configKey('', …)` — `COMPOSER_ORIGIN` — at boot, where
* `readOrigin` reads it back). `brand` is `SELF_ORIGIN` — control.ts looks
* its deploy-side value function up by this field.
*/ const ORIGIN_PARAM = {
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$CE3hLPYz$2d$BnSjO4w7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"],
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string"),
    brand: SELF_ORIGIN
};
/**
* RPC's reserved provider param (ADR-0030/ADR-0031): the declaration —
* name + schema + brand — for the accepted-keys set a provider stores, shared
* by `control.ts` (which registers the deploy-side `value(refs)` that mints
* and aggregates it — see its `rpcAcceptedKeysValue`) and `compute.ts` (which
* validates and stashes it at boot), so writer and reader cannot drift.
* Finding the edges themselves is `provisioned-edges.ts`'s generic,
* brand-blind scan — RPC is not special-cased anywhere in this target.
*
* This module is reachable from the RUNTIME/authoring side — it must never
* import `@internal/lowering` or `effect`, or those tokens leak into a user
* service's bundle (the deploy-side `value(refs)` lives in control.ts, the
* control-plane-only entry).
*/ /**
* The reserved provider param for RPC's accepted-keys set: the var name is
* `RPC_ACCEPTED_KEYS`, derived through `configKey` at both ends
* (`configKey(address, …)` at deploy, `configKey('', …)` at boot — the
* address-free form is `@internal/service-rpc`'s `RPC_ACCEPTED_KEYS_ENV`). `brand` is
* `RPC_PEER_KEY`, the same brand `perBindingToken()`'s need carries — control.ts
* looks its `value(refs)` up by this field.
*/ const RPC_ACCEPTED_KEYS_PARAM = {
    name: "RPC_ACCEPTED_KEYS",
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string[]"),
    brand: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$service$2d$rpc$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RPC_PEER_KEY"]
};
/** ADR-0031's need brand for the streams module's bearer key — control.ts registers the provisioner under this. */ const STREAMS_API_KEY = Symbol.for("prisma:streams/api-key");
/**
* The provisioning need `durableStreams()`'s `apiKey` param declares: an
* unguessable value the target mints ONCE PER PROVIDER (not per edge) —
* `@prisma/streams-server` authenticates a single `API_KEY`, so every
* consumer of one streams module must present the same value. Per-provider
* cardinality is provisioner policy (ADR-0031), invisible to core.
*/ const streamsApiKeyNeed = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__m__as__provisionNeed$3e$__["provisionNeed"])(STREAMS_API_KEY);
/**
* The reserved provider param for the streams bearer key: the var name is
* `STREAMS_API_KEY`. `brand` is `STREAMS_API_KEY` itself (the same symbol
* `streamsApiKeyNeed()`'s need carries) — control.ts looks its `value(refs)`
* up by this field.
*/ const STREAMS_API_KEY_PARAM = {
    name: "STREAMS_API_KEY",
    schema: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string"),
    brand: STREAMS_API_KEY
};
/** The address-free name compute.ts re-stashes to and the streams entrypoint reads. */ const STREAMS_API_KEY_ENV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$CE3hLPYz$2d$BnSjO4w7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])("", {
    owner: "service",
    name: STREAMS_API_KEY_PARAM.name
});
/**
* The list of provider-side reserved params the boot path validates and
* stashes (ADR-0031): every brand's `{name, schema, brand}` declaration,
* collected from that brand's own module (`service-keys.ts`,
* `streams-keys.ts`, `origin-key.ts`) so `compute.ts` names no brand itself.
*
* This list exists separately from `control.ts`'s deploy-side registry
* (`PROVIDER_PARAMS`) because `control.ts` is deploy-only code — it imports
* `@internal/lowering` and `effect` to mint values — and a booted service
* must never import it. This module is reachable from a user service's
* bundle through `compute.ts`, so it must never import `@internal/lowering`,
* `effect`, `alchemy`, or `control.ts`.
*
* This is the single source of which reserved provider params exist:
* control.ts builds `PROVIDER_PARAMS` by mapping over this list and looking
* up each entry's deploy-side value function (edge-derived `value(refs)` or
* service-derived `valueForService(provisioned, address)`) by its `brand`,
* throwing at module load if one is missing. Adding a brand means adding its
* entry here, plus its deploy-side value function in control.ts — a brand
* registered for deploy but absent here is no longer expressible, because
* deploy no longer names its own param set independently.
*/ const RESERVED_PROVIDER_PARAMS = [
    RPC_ACCEPTED_KEYS_PARAM,
    STREAMS_API_KEY_PARAM,
    ORIGIN_PARAM
];
/**
* Every provisioned edge in the graph. Core resolves and mints these (one
* value per edge, keyed by `edgeId`); this scan is how the target finds them
* again when it gathers a provider's inbound values.
*/ function provisionedEdges(graph) {
    const edges = [];
    for (const edge of graph.edges){
        if (edge.kind !== "dependency") continue;
        const consumer = graph.nodes.find((n)=>n.id === edge.to)?.node;
        if (consumer === void 0 || consumer.kind !== "service") continue;
        const slot = consumer.inputs[edge.input];
        if (slot === void 0) continue;
        for (const param of Object.values(slot.connection.params)){
            const brand = param.provision?.brand;
            if (brand === void 0) continue;
            edges.push({
                edgeId: `${edge.to}.${edge.input}`,
                consumerAddress: edge.to,
                input: edge.input,
                providerAddress: edge.from,
                brand
            });
            break;
        }
    }
    return edges;
}
;
 //# sourceMappingURL=provisioned-edges-CPrUiJ1K-DKbfx776.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/required-pack-head-CMMJ2LaU-CfWu5JMj.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>requiredPackHeadOf,
    "t",
    ()=>requiredPackHead
]);
//#region ../../1-prisma-cloud/1-extensions/target/dist/required-pack-head-CMMJ2LaU.mjs
/**
* A `postgres`-kind required contract carrying a pack-head claim instead
* of a contract value. Wireable to any `dataContract()` provider (wireability
* only); the deploy preflight enforces that the wired resource's PN config
* lists the pack at the required head.
*/ function requiredPackHead(req) {
    return Object.freeze({
        kind: "postgres",
        __cmp: {
            contractJson: void 0,
            requiredPackHead: req
        },
        satisfies: (required)=>{
            const other = requiredPackHeadOf(required);
            return other !== void 0 && other.packId === req.packId && other.headHash === req.headHash;
        }
    });
}
/** Reads `__cmp.requiredPackHead` off a Contract, defensively — `__cmp` is opaque to core, so nothing guarantees its shape without a runtime check. */ function requiredPackHeadOf(contract) {
    if (contract === void 0) return void 0;
    const cmp = contract.__cmp;
    if (typeof cmp !== "object" || cmp === null || !("requiredPackHead" in cmp)) return void 0;
    const req = cmp.requiredPackHead;
    if (typeof req !== "object" || req === null) return void 0;
    if (!("packId" in req) || typeof req.packId !== "string") return void 0;
    if (!("headHash" in req) || typeof req.headHash !== "string") return void 0;
    return {
        packId: req.packId,
        headHash: req.headHash
    };
}
;
 //# sourceMappingURL=required-pack-head-CMMJ2LaU-CfWu5JMj.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/index.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComputeService",
    ()=>ComputeService,
    "bucket",
    ()=>bucket,
    "bucketContract",
    ()=>bucketContract,
    "compute",
    ()=>compute,
    "credentialsContract",
    ()=>credentialsContract,
    "http",
    ()=>http,
    "rawPostgres",
    ()=>rawPostgres,
    "rawPostgresContract",
    ()=>rawPostgresContract,
    "s3Credentials",
    ()=>s3Credentials,
    "s3StoreService",
    ()=>s3StoreService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$secret$2d$C_$5f$qAfZr$2d$CUc_Mgbg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/secret-C__qAfZr-CUc_Mgbg.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$CE3hLPYz$2d$BnSjO4w7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/serializer-CE3hLPYz-BnSjO4w7.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$provisioned$2d$edges$2d$CPrUiJ1K$2d$DKbfx776$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/provisioned-edges-CPrUiJ1K-DKbfx776.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$required$2d$pack$2d$head$2d$CMMJ2LaU$2d$CfWu5JMj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/required-pack-head-CMMJ2LaU-CfWu5JMj.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__dependency$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export a as dependency>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__hydrateSync$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/dist-CR0-3j9o.mjs [app-rsc] (ecmascript) <export r as hydrateSync>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__number$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/dist-CR0-3j9o.mjs [app-rsc] (ecmascript) <export a as number>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__h__as__resource$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export h as resource>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__v__as__service$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export v as service>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/dist-CR0-3j9o.mjs [app-rsc] (ecmascript) <export c as string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/casts.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript) <export t as blindCast>");
;
;
;
;
;
;
//#region ../../1-prisma-cloud/1-extensions/target/dist/index.mjs
/**
* The contract a provisioned Bucket provides — deliberately kind-equal to the
* storage module's `s3Contract` (`kind: 's3'`). `satisfies` compares KIND,
* not identity (mirrors `rawPostgresContract`): a real bucket and the emulator
* are interchangeable at every `s3()` dependency slot. Cross-layer import of
* the storage module's contract is not allowed (layering: 2-shared-modules
* depends on 1-extensions, not the reverse), which is exactly the design
* rationale for kind-equality — the two contracts cooperate through their
* shared kind string, not through object identity.
*/ const bucketContract = Object.freeze({
    kind: "s3",
    __cmp: {
        url: "",
        bucket: "",
        accessKeyId: "",
        secretAccessKey: ""
    },
    satisfies: (required)=>required.kind === "s3"
});
function bucket(opts) {
    if (opts?.name !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__h__as__resource$3e$__["resource"])({
        name: opts.name,
        extension: "@prisma/composer-prisma-cloud",
        provides: bucketContract
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__dependency$3e$__["dependency"])({
        type: "s3",
        connection: {
            params: {
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])(),
                bucket: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])(),
                accessKeyId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])(),
                secretAccessKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])()
            },
            hydrate: (v)=>v
        },
        required: bucketContract
    });
}
const reservedParams = {
    port: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__number$3e$__["number"])({
        default: 3e3
    })
};
/**
* A Prisma Compute service — declarations only (deps + one input schema +
* build + the ports it exposes), no descriptor. The reserved `port` param
* rides its own channel (ADR-0042 leaves it untouched); a dependency named
* like it fails at authoring.
*
*   · run(address, boot) — the process controller: deserialize the platform
*     environment (keyed off `address`, the extension's ONE env read) into a
*     typed Config, re-emit it (and the input document row) under address-free
*     process-local stash keys, then call boot() to start the app's entry.
*   · load() / input() — called from inside the app's entry: read the stash;
*     load() hydrates + memoizes the deps, input() parses the input document,
*     replaces each `$secret` pointer with a redacting box over the named
*     platform var, validates with the declared schema, and memoizes (ADR-0042).
*   · origin() — this service's platform-assigned public origin, read from the
*     stash `run()` populates; memoized per process.
*   · port() — this service's resolved reserved port (the value `run()` routes
*     to and exports as PORT), read from that same stash via #processConfig();
*     defaults to 3000 when the platform binds none.
*
* The underlying node carries `extension: '@prisma/composer-prisma-cloud'` —
* the control-plane registry key `prisma-composer deploy` resolves through the
* app's `prisma-composer.config.ts` (ADR-0017). This module loads nothing at
* deploy time; nodes are pure data until run() or load() is called.
*/ var ComputeService = class {
    #resolved;
    #loadedDeps;
    #loadedInput;
    #origin;
    constructor(node){
        Object.assign(this, node);
    }
    #processConfig() {
        if (this.#resolved === void 0) this.#resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$CE3hLPYz$2d$BnSjO4w7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(this, "");
        return this.#resolved;
    }
    async run(address, boot) {
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$CE3hLPYz$2d$BnSjO4w7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(this, address);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$CE3hLPYz$2d$BnSjO4w7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["f"])(this, config);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$CE3hLPYz$2d$BnSjO4w7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["m"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$provisioned$2d$edges$2d$CPrUiJ1K$2d$DKbfx776$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"], address);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$CE3hLPYz$2d$BnSjO4w7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"])(this, address);
        const port = config.service["port"];
        if (typeof port === "number") process.env["PORT"] = String(port);
        process.env["HOST"] ??= "0.0.0.0";
        return boot();
    }
    load() {
        if (this.#loadedDeps === void 0) this.#loadedDeps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__hydrateSync$3e$__["hydrateSync"])(this, this.#processConfig()));
        return this.#loadedDeps;
    }
    input() {
        if (this.#loadedInput === void 0) this.#loadedInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$CE3hLPYz$2d$BnSjO4w7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(this, ""));
        return this.#loadedInput;
    }
    /** This service's platform-assigned public origin — read from the stash
	*  run() populates and memoized per process. Throws if called before run()
	*  has stashed it (readOrigin's pinned message). */ origin() {
        this.#origin ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$serializer$2d$CE3hLPYz$2d$BnSjO4w7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"])();
        return this.#origin;
    }
    /** This service's resolved reserved port — the value run() routes to and
	*  exports as PORT — read the same way load() reads the stash. Defaults to
	*  3000 when the platform binds none. */ port() {
        const port = this.#processConfig().service["port"];
        if (typeof port !== "number") throw new Error(`service "${this.name}" resolved a non-numeric port — the reserved port param is number({ default: 3000 }), so a stashed config always carries a number here.`);
        return port;
    }
};
const compute = (def)=>{
    for (const reserved of Object.keys(reservedParams))if (reserved in def.deps) throw new Error(`compute(): dependency "${reserved}" collides with the reserved service param of the same name — rename the dependency.`);
    const instance = new ComputeService((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__v__as__service$3e$__["service"])({
        name: def.name,
        extension: "@prisma/composer-prisma-cloud",
        type: "compute",
        inputs: def.deps,
        params: reservedParams,
        ...def.input !== void 0 ? {
            input: def.input
        } : {},
        build: def.build,
        ...def.expose !== void 0 ? {
            expose: def.expose
        } : {}
    }));
    Object.freeze(instance);
    return instance;
};
const defaultHttpClient = (cfg)=>({
        url: cfg.url,
        fetch: (path, init)=>fetch(new URL(path, cfg.url), init)
    });
/**
* A service-to-service dependency. Its binding (what `load()` returns) is a
* derived HttpClient — a thin URL-anchored fetch wrapper (fetch is standard
* across runtimes — no driver, no runtime coupling). http() is a
* protocol-owned kind: the framework owns the transport, so the client is
* kind-canonical and derived from the contract, with no user client in the
* declaration (ADR-0015). The typed generated client arrives with the
* interface primitive (a later extension point).
*/ const http = (opts)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__dependency$3e$__["dependency"])({
        name: opts.name,
        type: "http",
        connection: {
            params: {
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])()
            },
            hydrate: (v)=>defaultHttpClient({
                    url: v.url
                })
        }
    });
/**
* The contract a Postgres provides — and the contract its consumers require.
* `satisfies` compares KIND, not identity: an extension module can be duplicated
* across a workspace (same rationale as the Symbol.for node brand), and every
* duplicate's contract must still satisfy. `__cmp` is the connection config a
* postgres offers; core never inspects it.
*/ const rawPostgresContract = Object.freeze({
    kind: "raw-postgres",
    __cmp: {
        url: ""
    },
    satisfies: (required)=>required.kind === "raw-postgres"
});
function rawPostgres(opts) {
    if (opts?.name !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__h__as__resource$3e$__["resource"])({
        name: opts.name,
        extension: "@prisma/composer-prisma-cloud",
        provides: rawPostgresContract
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__dependency$3e$__["dependency"])({
        type: "raw-postgres",
        connection: {
            params: {
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])()
            },
            hydrate: (v)=>v
        },
        required: rawPostgresContract
    });
}
/**
* The contract the `s3-credentials` resource provides — a minted SigV4 key
* pair. `satisfies` compares KIND only (mirrors `rawPostgresContract`); `__cmp` is
* the config the resource offers, which core never inspects.
*/ const credentialsContract = Object.freeze({
    kind: "credentials",
    __cmp: {
        accessKeyId: "",
        secretAccessKey: ""
    },
    satisfies: (required)=>required.kind === "credentials"
});
function s3Credentials(opts) {
    if (opts?.name !== void 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__h__as__resource$3e$__["resource"])({
        name: opts.name,
        extension: "@prisma/composer-prisma-cloud",
        provides: credentialsContract
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__dependency$3e$__["dependency"])({
        type: "credentials",
        connection: {
            params: {
                accessKeyId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])(),
                secretAccessKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])()
            },
            hydrate: (v)=>v
        },
        required: credentialsContract
    });
}
/**
* The storage service authoring factory — a `compute` service routed to the
* `s3-store` lowering instead of `compute`'s. It is exactly `compute`'s
* runnable (run/load/input, deps, input schema, build, expose) with the
* routing `type` overridden to `'s3-store'`: nothing at runtime keys off
* `type` (the serializer keys off the deployment address and each param's
* owner/name, and `load`/`input` off deps/the input schema), so only the
* deploy-time descriptor lookup sees the override and routes to the
* extended-output lowering (§ 5). The return type is compute's exactly
* (including the reserved `port` param). The storage module (D4b) calls this
* with its `db`/`credentials` deps and `expose: { store: s3Contract }`.
*
* `compute()`'s result is a `ComputeService` instance — its run/load/input/
* origin methods live on the class prototype, not as the instance's own
* properties, so a plain object spread (`{ ...node }`) would silently drop
* them. Building a fresh `ComputeService` from the same data fields (which
* `{ ...node }` DOES copy — they're the node's own enumerable properties)
* with `type` overridden keeps every method intact.
*/ function s3StoreService(def) {
    const instance = new ComputeService({
        ...compute(def),
        type: "s3-store"
    });
    Object.freeze(instance);
    return instance;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/pg-connection-3qou2HW9-B2AemKe_.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>retryTransientConnect,
    "r",
    ()=>withConnectionRetry,
    "t",
    ()=>normalizeSslMode
]);
//#region ../../1-prisma-cloud/1-extensions/target/dist/pg-connection-3qou2HW9.mjs
/** Connection resilience helpers for Prisma Postgres cold-starts (FT-5226); no heavy imports (no `effect`/`alchemy`/`pg`), so the deploy lowerings, the postgres runtime client, and bun-runnable services (the storage store, via the pure `@internal/prisma-cloud/connection` subpath) all share one implementation. */ /** Network-level socket failures node-postgres surfaces as `err.code`. */ const TRANSIENT_CODES = /* @__PURE__ */ new Set([
    "ECONNREFUSED",
    "ECONNRESET",
    "ETIMEDOUT",
    "EPIPE",
    "ENOTFOUND",
    "EAI_AGAIN"
]);
/** Connection-establishment failure messages (no useful `err.code`). */ const TRANSIENT_MESSAGE_FRAGMENTS = [
    "upstream database",
    "connection terminated",
    "connection refused",
    "terminating connection",
    "server closed the connection",
    "connection timeout",
    "timeout expired"
];
/** Whether an error is a transient connection failure worth retrying, as opposed to a real query error that must surface at once. */ function isTransientConnectionError(error) {
    if (typeof error !== "object" || error === null) return false;
    const code = "code" in error && typeof error.code === "string" ? error.code : void 0;
    if (code !== void 0 && TRANSIENT_CODES.has(code)) return true;
    const message = "message" in error && typeof error.message === "string" ? error.message.toLowerCase() : "";
    return TRANSIENT_MESSAGE_FRAGMENTS.some((fragment)=>message.includes(fragment));
}
/**
* Rewrites a deprecating `sslmode` (`require`/`prefer`/`verify-ca`) to the
* explicit `verify-full` these already mean, silencing node-postgres's
* deprecation warning. `disable`/`no-verify`/unset are left untouched.
*/ function normalizeSslMode(url) {
    let parsed;
    try {
        parsed = new URL(url);
    } catch  {
        return url;
    }
    const sslmode = parsed.searchParams.get("sslmode");
    if (sslmode === "require" || sslmode === "prefer" || sslmode === "verify-ca") {
        parsed.searchParams.set("sslmode", "verify-full");
        return parsed.toString();
    }
    return url;
}
/**
* Retries an operation past a transient connection failure, bounded (default
* ~1 min). `shouldRetry` decides what's transient — defaults to retrying
* everything; the runtime client passes {@link isTransientConnectionError}.
*/ async function withConnectionRetry(operation, opts = {}) {
    const attempts = opts.attempts ?? 12;
    const delayMs = opts.delayMs ?? 5e3;
    const sleep = opts.sleep ?? ((ms)=>new Promise((resolve)=>setTimeout(resolve, ms)));
    const shouldRetry = opts.shouldRetry ?? (()=>true);
    let lastError;
    for(let attempt = 1; attempt <= attempts; attempt++)try {
        return await operation();
    } catch (error) {
        if (!shouldRetry(error)) throw error;
        lastError = error;
        if (attempt < attempts) await sleep(delayMs);
    }
    throw lastError;
}
/** Retries acquiring a connection past a transient cold-start; {@link withConnectionRetry} with {@link isTransientConnectionError} fixed as the predicate. */ function retryTransientConnect(acquire, opts = {}) {
    return withConnectionRetry(acquire, {
        ...opts,
        shouldRetry: isTransientConnectionError
    });
}
;
 //# sourceMappingURL=pg-connection-3qou2HW9-B2AemKe_.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/orm-postgres-ChW2Ewj7-Dnas0G3L.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "i",
    ()=>postgres,
    "n",
    ()=>dataContract,
    "r",
    ()=>isPostgresResourceNode,
    "t",
    ()=>PostgresResourceNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$required$2d$pack$2d$head$2d$CMMJ2LaU$2d$CfWu5JMj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/required-pack-head-CMMJ2LaU-CfWu5JMj.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$pg$2d$connection$2d$3qou2HW9$2d$B2AemKe_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/pg-connection-3qou2HW9-B2AemKe_.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__ResourceNodeBase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export i as ResourceNodeBase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__dependency$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export a as dependency>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__freezeNode$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/graph-BfKAg2Ap-LY3OAuK2.mjs [app-rsc] (ecmascript) <export o as freezeNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/dist-CR0-3j9o.mjs [app-rsc] (ecmascript) <export c as string>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/casts.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer@0.24.0_@ef_192843033c01cb1417b38af58b4d7d58/node_modules/@prisma/composer/dist/casts-DpaahrlC-C5XMnP9S.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$22$2e$0$2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/.pnpm/pg@8.22.0/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$postgres$40$8$2e$0$2e$0$2d$_eee674c5960251ebd82af228590d799e$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-postgres@8.0.0-_eee674c5960251ebd82af228590d799e/node_modules/@prisma/orm-postgres/dist/runtime.mjs [app-rsc] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$22$2e$0$2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$postgres$40$8$2e$0$2e$0$2d$_eee674c5960251ebd82af228590d799e$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$22$2e$0$2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$postgres$40$8$2e$0$2e$0$2d$_eee674c5960251ebd82af228590d799e$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
//#region ../../1-prisma-cloud/1-extensions/target/dist/orm-postgres-ChW2Ewj7.mjs
/**
* The `postgres` resource node: a core Resource node plus `config`, the
* `prisma.config.ts` path the deploy-only migration lowering loads to
* find the migrations directory — the app build never imports it.
*/ var PostgresResourceNode = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__ResourceNodeBase$3e$__["ResourceNodeBase"] {
    config;
    constructor(def){
        super({
            name: def.name,
            extension: "@prisma/composer-prisma-cloud",
            provides: def.contract
        });
        this.config = def.config;
        if (def.targetRef !== void 0) this.targetRef = def.targetRef;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__freezeNode$3e$__["freezeNode"])(this);
    }
};
/** Narrows `ctx.node` to a `postgres` resource node so the deploy lowering reads `config` without a bare cast. Structural, never `instanceof`. */ function isPostgresResourceNode(node) {
    return node.kind === "resource" && node.type === "postgres" && "config" in node && typeof node.config === "string";
}
function dataContract(contract) {
    const value = {
        kind: "postgres",
        __cmp: {
            contractJson: contract
        },
        satisfies: (required)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$required$2d$pack$2d$head$2d$CMMJ2LaU$2d$CfWu5JMj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(required) !== void 0) return true;
            const requiredHash = storageHashOf(required);
            return requiredHash !== void 0 && requiredHash === storageHashOf(value);
        }
    };
    return Object.freeze(value);
}
function postgres(arg) {
    if (!isPostgresContract(arg)) return new PostgresResourceNode(arg);
    const contract = arg;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$graph$2d$BfKAg2Ap$2d$LY3OAuK2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__dependency$3e$__["dependency"])({
        type: "postgres",
        connection: {
            params: {
                url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$dist$2d$CR0$2d$3j9o$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__c__as__string$3e$__["string"])()
            },
            hydrate: ({ url })=>bindLazyClient(contract, url)
        },
        required: contract
    });
}
function isPostgresContract(value) {
    return typeof value === "object" && value !== null && "kind" in value && value.kind === "postgres" && "__cmp" in value && "satisfies" in value;
}
/**
* The hydrated binding: `url` as delivered, `client` built by `buildClient`
* on first access. Construction stays out of hydrate because the runtime
* validates `contractJson` eagerly — deferring it keeps a bad contract from
* poisoning `load()` and spares URL-only consumers the cost (ADR-0040).
*/ function bindLazyClient(contract, url) {
    let client;
    return Object.freeze({
        url,
        get client () {
            client ??= buildClient(contract, url);
            return client;
        }
    });
}
/**
* Builds the typed Prisma ORM client over a connection pool that rides out
* a transient cold-start (FT-5226). We pass our own `pg.Pool` rather than a
* bare `url`: the runtime's bare-`url` connect is a one-shot that fails
* permanently, but a pool connects lazily on first query, so a bounded retry there suffices.
*/ function buildClient(contract, url) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$postgres$40$8$2e$0$2e$0$2d$_eee674c5960251ebd82af228590d799e$2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
        contractJson: contract.__cmp.contractJson,
        binding: {
            kind: "pgPool",
            pool: resilientPool(url)
        }
    });
}
/**
* A `pg.Pool` whose connection acquisition retries a transient cold-start
* (bounded ~1 min). Only `pool.connect()` is wrapped — a real query error
* still surfaces at once from `client.query()`.
*/ function resilientPool(url) {
    const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pg$40$8$2e$22$2e$0$2f$node_modules$2f$pg$29$__["default"].Pool({
        connectionString: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$pg$2d$connection$2d$3qou2HW9$2d$B2AemKe_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(url),
        connectionTimeoutMillis: 2e4,
        idleTimeoutMillis: 5e3
    });
    pool.on("error", (err)=>console.error("pg pool idle client error", err));
    const acquire = pool.connect.bind(pool);
    pool.connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$40$0$2e$24$2e$0_$40$ef_192843033c01cb1417b38af58b4d7d58$2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$casts$2d$DpaahrlC$2d$C5XMnP9S$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$pg$2d$connection$2d$3qou2HW9$2d$B2AemKe_$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(()=>acquire()));
    return pool;
}
/** Reads `__cmp.contractJson.storage.storageHash` off a `postgres` Contract, defensively — `__cmp` is opaque to core, so nothing guarantees its shape without a runtime check. */ function storageHashOf(contract) {
    if (contract === void 0) return void 0;
    const cmp = contract.__cmp;
    if (typeof cmp !== "object" || cmp === null || !("contractJson" in cmp)) return void 0;
    const contractJson = cmp.contractJson;
    if (typeof contractJson !== "object" || contractJson === null || !("storage" in contractJson)) return;
    const storage = contractJson.storage;
    if (typeof storage !== "object" || storage === null || !("storageHash" in storage)) return void 0;
    const hash = storage.storageHash;
    return typeof hash === "string" ? hash : void 0;
}
;
 //# sourceMappingURL=orm-postgres-ChW2Ewj7-Dnas0G3L.mjs.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/orm.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$required$2d$pack$2d$head$2d$CMMJ2LaU$2d$CfWu5JMj$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/required-pack-head-CMMJ2LaU-CfWu5JMj.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/orm-postgres-ChW2Ewj7-Dnas0G3L.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/orm-postgres-ChW2Ewj7-Dnas0G3L.mjs [app-rsc] (ecmascript) <export i as postgres>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "postgres",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/orm-postgres-ChW2Ewj7-Dnas0G3L.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/orm-postgres-ChW2Ewj7-Dnas0G3L.mjs [app-rsc] (ecmascript) <export n as dataContract>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "dataContract",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+composer-prisma-clo_24b58e407f875db7044a357e7ffe3441/node_modules/@prisma/composer-prisma-cloud/dist/orm-postgres-ChW2Ewj7-Dnas0G3L.mjs [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$composer$2d$prisma$2d$clo_24b58e407f875db7044a357e7ffe3441$2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=de3af_%40prisma_composer-prisma-cloud_dist_94128b71._.js.map