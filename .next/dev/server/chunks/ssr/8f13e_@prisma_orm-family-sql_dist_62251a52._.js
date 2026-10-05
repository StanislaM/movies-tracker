module.exports = [
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>PreparedParamRef,
    "B",
    ()=>frozenCodecRef,
    "C",
    ()=>LiteralExpr,
    "D",
    ()=>OrExpr,
    "E",
    ()=>OperationExpr,
    "F",
    ()=>SubqueryExpr,
    "G",
    ()=>whereExprKinds,
    "H",
    ()=>isQueryAst,
    "I",
    ()=>TableSource,
    "L",
    ()=>UpdateAst,
    "M",
    ()=>RawExpr,
    "N",
    ()=>RawQueryAst,
    "O",
    ()=>OrderByItem,
    "P",
    ()=>SelectAst,
    "R",
    ()=>WindowFuncExpr,
    "S",
    ()=>ListExpression,
    "T",
    ()=>NullCheckExpr,
    "U",
    ()=>isWhereExpr,
    "V",
    ()=>isAggregateFn,
    "W",
    ()=>queryAstKinds,
    "_",
    ()=>InsertAst,
    "a",
    ()=>CastExpr,
    "b",
    ()=>JsonArrayAggExpr,
    "c",
    ()=>DeleteAst,
    "d",
    ()=>DoUpdateSetConflictAction,
    "f",
    ()=>EqColJoinOn,
    "g",
    ()=>IdentifierRef,
    "h",
    ()=>FunctionSource,
    "i",
    ()=>CaseExpr,
    "j",
    ()=>ProjectionItem,
    "k",
    ()=>ParamRef,
    "l",
    ()=>DerivedTableSource,
    "m",
    ()=>FunctionCallExpr,
    "n",
    ()=>AndExpr,
    "o",
    ()=>ColumnRef,
    "p",
    ()=>ExistsExpr,
    "r",
    ()=>BinaryExpr,
    "s",
    ()=>DefaultValueExpr,
    "t",
    ()=>AggregateExpr,
    "u",
    ()=>DoNothingConflictAction,
    "v",
    ()=>InsertOnConflict,
    "w",
    ()=>NotExpr,
    "x",
    ()=>JsonObjectExpr,
    "y",
    ()=>JoinAst,
    "z",
    ()=>aggregateFnNames
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-rsc] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-rsc] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
;
;
;
//#region ../../../2-sql/4-lanes/relational-core/dist/types-ZNKYVjLr.mjs
function isJsonArray(value) {
    return Array.isArray(value);
}
function freezeJsonValue(value) {
    if (value === null || typeof value !== "object") return;
    if (isJsonArray(value)) for (const item of value)freezeJsonValue(item);
    else for (const item of Object.values(value))freezeJsonValue(item);
    Object.freeze(value);
}
function frozenCodecRef(codec) {
    const typeParams = codec.typeParams === void 0 ? void 0 : structuredClone(codec.typeParams);
    if (typeParams !== void 0) freezeJsonValue(typeParams);
    return Object.freeze({
        codecId: codec.codecId,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("typeParams", typeParams),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("many", codec.many)
    });
}
/**
* The closed SQL aggregate alphabet: every function name an {@link AggregateExpr} can carry, and so the set renderers are exhaustive over. Aggregate operation names are an open namespace; an operation outside the alphabet reaches SQL only through a descriptor's lowering hook, which builds its expression from existing nodes.
*/ const aggregateFnNames = /* @__PURE__ */ new Set([
    "count",
    "sum",
    "avg",
    "min",
    "max"
]);
/** Whether `name` is in the closed SQL aggregate alphabet, and so lowers to a plain {@link AggregateExpr} without a descriptor-supplied hook. */ function isAggregateFn(name) {
    return aggregateFnNames.has(name);
}
const toAnyExpressionVisitor = {
    columnRef: (expr)=>expr,
    identifierRef: (expr)=>expr,
    subquery: (expr)=>expr,
    operation: (expr)=>expr,
    aggregate: (expr)=>expr,
    windowFunc: (expr)=>expr,
    functionCall: (expr)=>expr,
    cast: (expr)=>expr,
    case: (expr)=>expr,
    jsonObject: (expr)=>expr,
    jsonArrayAgg: (expr)=>expr,
    binary: (expr)=>expr,
    and: (expr)=>expr,
    or: (expr)=>expr,
    exists: (expr)=>expr,
    nullCheck: (expr)=>expr,
    not: (expr)=>expr,
    literal: (expr)=>expr,
    param: (expr)=>expr,
    preparedParam: (expr)=>expr,
    list: (expr)=>expr,
    rawExpr: (expr)=>expr
};
function frozenArrayCopy(values) {
    return Object.freeze([
        ...values
    ]);
}
function frozenOptionalRecordCopy(value) {
    return value === void 0 ? void 0 : Object.freeze({
        ...value
    });
}
function frozenRecordCopy(record) {
    return Object.freeze({
        ...record
    });
}
function freezeRows(rows) {
    return Object.freeze(rows.map((row)=>Object.freeze({
            ...row
        })));
}
function combineAll(folder, thunks) {
    let result = folder.empty;
    for (const thunk of thunks){
        if (folder.isAbsorbing?.(result)) return result;
        result = folder.combine(result, thunk());
    }
    return result;
}
function rewriteComparable(value, rewriter) {
    switch(value.kind){
        case "param-ref":
            return rewriter.paramRef ? rewriter.paramRef(value) : value;
        case "prepared-param-ref":
            return rewriter.preparedParamRef ? rewriter.preparedParamRef(value) : value;
        case "literal":
            return rewriter.literal ? rewriter.literal(value) : value;
        case "list":
            if (rewriter.list) return rewriter.list(value);
            return value.rewrite(rewriter);
        default:
            return value.rewrite(rewriter);
    }
}
function foldComparable(value, folder) {
    switch(value.kind){
        case "param-ref":
            return folder.paramRef ? folder.paramRef(value) : folder.empty;
        case "prepared-param-ref":
            return folder.preparedParamRef ? folder.preparedParamRef(value) : folder.empty;
        case "literal":
            return folder.literal ? folder.literal(value) : folder.empty;
        case "list":
            return value.fold(folder);
        default:
            return value.fold(folder);
    }
}
function collectColumnRefsWith(node) {
    return node.fold({
        empty: [],
        combine: (a, b)=>[
                ...a,
                ...b
            ],
        columnRef: (columnRef)=>[
                columnRef
            ],
        select: (ast)=>ast.collectColumnRefs()
    });
}
function collectParamRefsWith(node) {
    return node.fold({
        empty: [],
        combine: (a, b)=>[
                ...a,
                ...b
            ],
        paramRef: (paramRef)=>[
                paramRef
            ],
        preparedParamRef: (paramRef)=>[
                paramRef
            ],
        select: (ast)=>ast.collectParamRefs()
    });
}
function rewriteTableSource(table, rewriter) {
    return rewriter.tableSource ? rewriter.tableSource(table) : table;
}
function rewriteProjectionItem(item, rewriter) {
    const rewrittenExpr = item.expr.kind === "literal" ? rewriter.literal ? rewriter.literal(item.expr) : item.expr : item.expr.rewrite(rewriter);
    return new ProjectionItem(item.alias, rewrittenExpr, item.codec);
}
function rewriteInsertValue(value, rewriter) {
    switch(value.kind){
        case "param-ref":
            return rewriter.paramRef ? rewriteParamRefForInsert(value, rewriter) : value;
        case "prepared-param-ref":
            return rewriter.preparedParamRef ? rewriter.preparedParamRef(value) : value;
        case "column-ref":
            return rewriter.columnRef ? rewriteColumnRefForInsert(value, rewriter) : value;
        case "default-value":
            return value;
        case "raw-expr":
            return value;
    }
}
function rewriteParamRefForInsert(value, rewriter) {
    const rewritten = rewriter.paramRef ? rewriter.paramRef(value) : value;
    return rewritten.kind === "param-ref" ? rewritten : value;
}
function rewriteColumnRefForInsert(value, rewriter) {
    const rewritten = rewriter.columnRef ? rewriter.columnRef(value) : value;
    return rewritten.kind === "column-ref" ? rewritten : value;
}
function rewriteInsertRow(row, rewriter) {
    const result = {};
    for (const [key, value] of Object.entries(row))result[key] = rewriteInsertValue(value, rewriter);
    return result;
}
function rewriteUpdateSet(set, rewriter) {
    const result = {};
    for (const [key, value] of Object.entries(set))result[key] = value.rewrite(rewriter);
    return result;
}
function rewriteLimitOffset(value, rewriter) {
    if (value === void 0 || typeof value === "number") return value;
    return value.rewrite(rewriter);
}
function rewriteOnConflict(onConflict, rewriter) {
    const columns = onConflict.columns.map((columnRef)=>{
        const rewritten = rewriter.columnRef ? rewriter.columnRef(columnRef) : columnRef;
        return rewritten.kind === "column-ref" ? rewritten : columnRef;
    });
    if (onConflict.action.kind === "do-nothing") return new InsertOnConflict(columns, new DoNothingConflictAction());
    return new InsertOnConflict(columns, new DoUpdateSetConflictAction(rewriteUpdateSet(onConflict.action.set, rewriter)));
}
var AstNode = class {
    freeze() {
        Object.freeze(this);
    }
};
var QueryAst = class extends AstNode {
};
var FromSource = class extends AstNode {
};
var Expression = class extends AstNode {
    collectColumnRefs() {
        return collectColumnRefsWith(this);
    }
    collectParamRefs() {
        return collectParamRefsWith(this);
    }
    baseColumnRef() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`${this.constructor.name} does not expose a base column reference`);
    }
    #asAnyExpression() {
        return this.accept(toAnyExpressionVisitor);
    }
    toExpr() {
        return this.#asAnyExpression();
    }
    not() {
        return new NotExpr(this.#asAnyExpression());
    }
};
var TableSource = class TableSource extends FromSource {
    kind = "table-source";
    name;
    alias;
    /**
	* Resolved storage namespace coordinate for this table, stamped when the
	* table proxy constructs the AST. Renderers qualify via the namespace
	* concretion's `qualifyTable()` using this id — never by re-resolving the
	* bare table name at render time.
	*/ namespaceId;
    constructor(name, alias, namespaceId){
        super();
        this.name = name;
        this.alias = alias;
        this.namespaceId = namespaceId;
    }
    static named(name, alias, namespaceId) {
        const source = new TableSource(name, alias, namespaceId);
        source.freeze();
        return source;
    }
    rewrite(rewriter) {
        return rewriter.tableSource ? rewriter.tableSource(this) : this;
    }
    toFromSource() {
        return this;
    }
};
var DerivedTableSource = class DerivedTableSource extends FromSource {
    kind = "derived-table-source";
    alias;
    query;
    constructor(alias, query){
        super();
        this.alias = alias;
        this.query = query;
        this.freeze();
    }
    static as(alias, query) {
        return new DerivedTableSource(alias, query);
    }
    rewrite(rewriter) {
        return new DerivedTableSource(this.alias, this.query.rewrite(rewriter));
    }
    toFromSource() {
        return this;
    }
};
var FunctionSource = class FunctionSource extends FromSource {
    kind = "function-source";
    fn;
    args;
    alias;
    columnAliases;
    ordinality;
    constructor(fn, args, alias, ordinality = false){
        super();
        if (alias?.columnAliases?.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.AST_INVALID", "FunctionSource column aliases must not be empty", {
            meta: {
                kind: "function-source",
                field: "columnAliases"
            }
        });
        this.fn = fn;
        this.args = frozenArrayCopy(args);
        this.alias = alias?.alias;
        this.columnAliases = alias?.columnAliases === void 0 ? void 0 : frozenArrayCopy(alias.columnAliases);
        this.ordinality = ordinality;
        this.freeze();
    }
    static of(fn, args, alias) {
        return new FunctionSource(fn, args, alias);
    }
    #aliasOptions() {
        if (this.alias === void 0) return void 0;
        return {
            alias: this.alias,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("columnAliases", this.columnAliases)
        };
    }
    withOrdinality() {
        if (this.ordinality) return this;
        return new FunctionSource(this.fn, this.args, this.#aliasOptions(), true);
    }
    rewrite(rewriter) {
        const rewrittenArgs = this.args.map((arg)=>rewriteComparable(arg, rewriter));
        if (rewrittenArgs.every((arg, i)=>arg === this.args[i])) return this;
        return new FunctionSource(this.fn, rewrittenArgs, this.#aliasOptions(), this.ordinality);
    }
    toFromSource() {
        return this;
    }
};
var ColumnRef = class ColumnRef extends Expression {
    kind = "column-ref";
    table;
    column;
    constructor(table, column){
        super();
        this.table = table;
        this.column = column;
        this.freeze();
    }
    static of(table, column) {
        return new ColumnRef(table, column);
    }
    accept(visitor) {
        return visitor.columnRef(this);
    }
    rewrite(rewriter) {
        return rewriter.columnRef ? rewriter.columnRef(this) : this;
    }
    fold(folder) {
        return folder.columnRef ? folder.columnRef(this) : folder.empty;
    }
    baseColumnRef() {
        return this;
    }
};
var IdentifierRef = class IdentifierRef extends Expression {
    kind = "identifier-ref";
    name;
    constructor(name){
        super();
        this.name = name;
        this.freeze();
    }
    static of(name) {
        return new IdentifierRef(name);
    }
    accept(visitor) {
        return visitor.identifierRef(this);
    }
    rewrite(rewriter) {
        return rewriter.identifierRef ? rewriter.identifierRef(this) : this;
    }
    fold(folder) {
        return folder.identifierRef ? folder.identifierRef(this) : folder.empty;
    }
};
var ParamRef = class ParamRef extends Expression {
    kind = "param-ref";
    value;
    name;
    /**
	* Codec identity carried by every column-bound `ParamRef`. The encode-side dispatch path materialises the per-instance codec through `contractCodecs.forCodecRef(codec)` — content-keyed memoisation on `(codecId, canonicalize(typeParams))` keeps repeated lookups for the same logical column on one shared {@link Codec}.
	*
	* `codec` may be `undefined` for `ParamRef`s constructed without a column-bound site (literals, transient builder state); the runtime treats those as untyped passthroughs.
	*/ codec;
    constructor(value, options){
        super();
        this.value = value;
        this.name = options?.name;
        this.codec = options?.codec ? frozenCodecRef(options.codec) : void 0;
        this.freeze();
    }
    static of(value, options) {
        return new ParamRef(value, options);
    }
    accept(visitor) {
        return visitor.param(this);
    }
    rewrite(rewriter) {
        return rewriter.paramRef ? rewriter.paramRef(this) : this;
    }
    fold(folder) {
        return folder.paramRef ? folder.paramRef(this) : folder.empty;
    }
};
/**
* Bind-site placeholder: occupies the same positions as `ParamRef` in the
* AST, but carries no value — the value is supplied per-execute by the
* `statement.query(target, params)` caller and matched to this node by
* `name`.
*/ var PreparedParamRef = class PreparedParamRef extends Expression {
    kind = "prepared-param-ref";
    name;
    codec;
    nullable;
    constructor(name, codec, nullable = false){
        super();
        this.name = name;
        this.codec = frozenCodecRef(codec);
        this.nullable = nullable;
        this.freeze();
    }
    static of(name, codec, nullable = false) {
        return new PreparedParamRef(name, codec, nullable);
    }
    accept(visitor) {
        return visitor.preparedParam(this);
    }
    rewrite(rewriter) {
        return rewriter.preparedParamRef ? rewriter.preparedParamRef(this) : this;
    }
    fold(folder) {
        return folder.preparedParamRef ? folder.preparedParamRef(this) : folder.empty;
    }
};
var DefaultValueExpr = class extends AstNode {
    kind = "default-value";
    constructor(){
        super();
        this.freeze();
    }
};
var LiteralExpr = class LiteralExpr extends Expression {
    kind = "literal";
    value;
    constructor(value){
        super();
        this.value = value;
        this.freeze();
    }
    static of(value) {
        return new LiteralExpr(value);
    }
    accept(visitor) {
        return visitor.literal(this);
    }
    rewrite(rewriter) {
        return rewriter.literal ? rewriter.literal(this) : this;
    }
    fold(folder) {
        return folder.literal ? folder.literal(this) : folder.empty;
    }
};
var SubqueryExpr = class SubqueryExpr extends Expression {
    kind = "subquery";
    query;
    constructor(query){
        super();
        this.query = query;
        this.freeze();
    }
    static of(query) {
        return new SubqueryExpr(query);
    }
    accept(visitor) {
        return visitor.subquery(this);
    }
    rewrite(rewriter) {
        const query = this.query.rewrite(rewriter);
        return new SubqueryExpr(query);
    }
    fold(folder) {
        return folder.select ? folder.select(this.query) : folder.empty;
    }
};
var OperationExpr = class OperationExpr extends Expression {
    kind = "operation";
    method;
    self;
    args;
    returns;
    lowering;
    constructor(options){
        super();
        this.method = options.method;
        this.self = options.self;
        this.args = frozenArrayCopy(options.args ?? []);
        this.returns = options.returns;
        this.lowering = options.lowering;
        this.freeze();
    }
    accept(visitor) {
        return visitor.operation(this);
    }
    rewrite(rewriter) {
        return new OperationExpr({
            method: this.method,
            self: this.self.rewrite(rewriter),
            args: this.args.map((arg)=>rewriteComparable(arg, rewriter)),
            returns: this.returns,
            lowering: this.lowering
        });
    }
    fold(folder) {
        return combineAll(folder, [
            ()=>this.self.fold(folder),
            ...this.args.map((arg)=>()=>foldComparable(arg, folder))
        ]);
    }
    baseColumnRef() {
        return this.self.baseColumnRef();
    }
};
var RawExpr = class extends Expression {
    kind = "raw-expr";
    parts;
    returns;
    constructor(options){
        super();
        this.parts = frozenArrayCopy(options.parts);
        this.returns = options.returns;
        this.freeze();
    }
    accept(visitor) {
        return visitor.rawExpr(this);
    }
    rewrite(rewriter) {
        return rewriter.rawExpr ? rewriter.rawExpr(this) : this;
    }
    fold(folder) {
        if (folder.rawExpr) return folder.rawExpr(this);
        return combineAll(folder, this.parts.filter((p)=>typeof p !== "string").map((p)=>()=>p.fold(folder)));
    }
};
var AggregateExpr = class AggregateExpr extends Expression {
    kind = "aggregate";
    fn;
    expr;
    constructor(fn, expr){
        super();
        if (fn !== "count" && expr === void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("ORM.ARGUMENT_INVALID", `Aggregate function "${fn}" requires an expression`, {
            meta: {
                fn
            }
        });
        this.fn = fn;
        this.expr = expr;
        this.freeze();
    }
    static count(expr) {
        return new AggregateExpr("count", expr);
    }
    static sum(expr) {
        return new AggregateExpr("sum", expr);
    }
    static avg(expr) {
        return new AggregateExpr("avg", expr);
    }
    static min(expr) {
        return new AggregateExpr("min", expr);
    }
    static max(expr) {
        return new AggregateExpr("max", expr);
    }
    accept(visitor) {
        return visitor.aggregate(this);
    }
    rewrite(rewriter) {
        return this.expr === void 0 ? this : new AggregateExpr(this.fn, this.expr.rewrite(rewriter));
    }
    fold(folder) {
        return this.expr ? this.expr.fold(folder) : folder.empty;
    }
};
/**
* Window function call: `fn(args) OVER (PARTITION BY ... ORDER BY ...)`.
*
* Both `partitionBy` and `orderBy` are optional; an empty `OVER ()`
* clause is legal SQL but rarely useful. For `ROW_NUMBER`, `RANK`, and
* `DENSE_RANK` the standard mandates an `ORDER BY` for deterministic
* results — callers are expected to provide one, but the AST does not
* enforce it.
*
* The `args` slot exists for future window function additions that take
* arguments (e.g. `COUNT(*) OVER`, `SUM(x) OVER`); `ROW_NUMBER` and the
* other ranking functions take no arguments.
*/ var WindowFuncExpr = class WindowFuncExpr extends Expression {
    kind = "window-func";
    fn;
    args;
    partitionBy;
    orderBy;
    constructor(options){
        super();
        this.fn = options.fn;
        this.args = options.args && options.args.length > 0 ? frozenArrayCopy(options.args) : [];
        this.partitionBy = options.partitionBy && options.partitionBy.length > 0 ? frozenArrayCopy(options.partitionBy) : void 0;
        this.orderBy = options.orderBy && options.orderBy.length > 0 ? frozenArrayCopy(options.orderBy) : void 0;
        this.freeze();
    }
    static rowNumber(options) {
        return new WindowFuncExpr({
            fn: "row_number",
            ...options
        });
    }
    accept(visitor) {
        return visitor.windowFunc(this);
    }
    rewrite(rewriter) {
        return new WindowFuncExpr({
            fn: this.fn,
            args: this.args.map((arg)=>arg.rewrite(rewriter)),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("partitionBy", this.partitionBy?.map((expr)=>expr.rewrite(rewriter))),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("orderBy", this.orderBy?.map((orderItem)=>orderItem.rewrite(rewriter)))
        });
    }
    fold(folder) {
        return combineAll(folder, [
            ...this.args.map((arg)=>()=>arg.fold(folder)),
            ...(this.partitionBy ?? []).map((expr)=>()=>expr.fold(folder)),
            ...(this.orderBy ?? []).map((orderItem)=>()=>orderItem.expr.fold(folder))
        ]);
    }
};
var FunctionCallExpr = class FunctionCallExpr extends Expression {
    kind = "function-call";
    fn;
    args;
    constructor(fn, args){
        super();
        this.fn = fn;
        this.args = frozenArrayCopy(args);
        this.freeze();
    }
    static of(fn, args) {
        return new FunctionCallExpr(fn, args);
    }
    accept(visitor) {
        return visitor.functionCall(this);
    }
    rewrite(rewriter) {
        return new FunctionCallExpr(this.fn, this.args.map((arg)=>arg.rewrite(rewriter)));
    }
    fold(folder) {
        return combineAll(folder, this.args.map((arg)=>()=>arg.fold(folder)));
    }
};
var CastExpr = class CastExpr extends Expression {
    kind = "cast";
    expr;
    targetType;
    constructor(expr, targetType){
        super();
        this.expr = expr;
        this.targetType = targetType;
        this.freeze();
    }
    static as(expr, targetType) {
        return new CastExpr(expr, targetType);
    }
    accept(visitor) {
        return visitor.cast(this);
    }
    rewrite(rewriter) {
        return new CastExpr(this.expr.rewrite(rewriter), this.targetType);
    }
    fold(folder) {
        return this.expr.fold(folder);
    }
};
var CaseExpr = class CaseExpr extends Expression {
    kind = "case";
    branches;
    elseExpr;
    constructor(branches, elseExpr){
        super();
        if (branches.length === 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.AST_INVALID", "CaseExpr requires at least one branch", {
            meta: {
                kind: "case",
                field: "branches"
            }
        });
        this.branches = Object.freeze(branches.map((branch)=>Object.freeze({
                condition: branch.condition,
                value: branch.value
            })));
        this.elseExpr = elseExpr;
        this.freeze();
    }
    static of(branches, elseExpr) {
        return new CaseExpr(branches, elseExpr);
    }
    accept(visitor) {
        return visitor.case(this);
    }
    rewrite(rewriter) {
        return new CaseExpr(this.branches.map((branch)=>({
                condition: branch.condition.rewrite(rewriter),
                value: branch.value.rewrite(rewriter)
            })), this.elseExpr?.rewrite(rewriter));
    }
    fold(folder) {
        const elseExpr = this.elseExpr;
        return combineAll(folder, [
            ...this.branches.flatMap((branch)=>[
                    ()=>branch.condition.fold(folder),
                    ()=>branch.value.fold(folder)
                ]),
            ...elseExpr === void 0 ? [] : [
                ()=>elseExpr.fold(folder)
            ]
        ]);
    }
};
var JsonObjectExpr = class JsonObjectExpr extends Expression {
    kind = "json-object";
    entries;
    constructor(entries){
        super();
        this.entries = frozenArrayCopy(entries.map((entry)=>Object.freeze({
                ...entry
            })));
        this.freeze();
    }
    static entry(key, value) {
        return {
            key,
            value
        };
    }
    static fromEntries(entries) {
        return new JsonObjectExpr(entries);
    }
    accept(visitor) {
        return visitor.jsonObject(this);
    }
    rewrite(rewriter) {
        return new JsonObjectExpr(this.entries.map((entry)=>({
                key: entry.key,
                value: entry.value.rewrite(rewriter)
            })));
    }
    fold(folder) {
        return combineAll(folder, this.entries.map((entry)=>()=>entry.value.fold(folder)));
    }
};
var OrderByItem = class OrderByItem extends AstNode {
    kind = "order-by-item";
    expr;
    dir;
    constructor(expr, dir){
        super();
        this.expr = expr;
        this.dir = dir;
        this.freeze();
    }
    static asc(expr) {
        return new OrderByItem(expr, "asc");
    }
    static desc(expr) {
        return new OrderByItem(expr, "desc");
    }
    rewrite(rewriter) {
        return new OrderByItem(this.expr.rewrite(rewriter), this.dir);
    }
    /**
	* A new frozen item with the sort direction flipped and `expr` unchanged.
	* Integrations that own pagination (e.g. backward cursor pagination) use
	* this to reverse a user's sort order without reaching into the AST.
	*/ reverse() {
        return new OrderByItem(this.expr, this.dir === "asc" ? "desc" : "asc");
    }
};
var JsonArrayAggExpr = class JsonArrayAggExpr extends Expression {
    kind = "json-array-agg";
    expr;
    onEmpty;
    orderBy;
    constructor(expr, onEmpty = "null", orderBy){
        super();
        this.expr = expr;
        this.onEmpty = onEmpty;
        this.orderBy = orderBy && orderBy.length > 0 ? frozenArrayCopy(orderBy) : void 0;
        this.freeze();
    }
    static of(expr, onEmpty = "null", orderBy) {
        return new JsonArrayAggExpr(expr, onEmpty, orderBy);
    }
    accept(visitor) {
        return visitor.jsonArrayAgg(this);
    }
    rewrite(rewriter) {
        return new JsonArrayAggExpr(this.expr.rewrite(rewriter), this.onEmpty, this.orderBy?.map((orderItem)=>orderItem.rewrite(rewriter)));
    }
    fold(folder) {
        return combineAll(folder, [
            ()=>this.expr.fold(folder),
            ...(this.orderBy ?? []).map((orderItem)=>()=>orderItem.expr.fold(folder))
        ]);
    }
};
var ListExpression = class ListExpression extends Expression {
    kind = "list";
    values;
    constructor(values){
        super();
        this.values = frozenArrayCopy(values);
        this.freeze();
    }
    static of(values) {
        return new ListExpression(values);
    }
    static fromValues(values) {
        return new ListExpression(values.map((value)=>new LiteralExpr(value)));
    }
    accept(visitor) {
        return visitor.list(this);
    }
    rewrite(rewriter) {
        if (rewriter.list) return rewriter.list(this);
        return new ListExpression(this.values.map((value)=>value.rewrite(rewriter)));
    }
    fold(folder) {
        if (folder.list) return folder.list(this);
        return combineAll(folder, this.values.map((value)=>()=>value.fold(folder)));
    }
};
var BinaryExpr = class BinaryExpr extends Expression {
    kind = "binary";
    op;
    left;
    right;
    constructor(op, left, right){
        super();
        this.op = op;
        this.left = left;
        this.right = right;
        this.freeze();
    }
    static eq(left, right) {
        return new BinaryExpr("eq", left, right);
    }
    static neq(left, right) {
        return new BinaryExpr("neq", left, right);
    }
    static gt(left, right) {
        return new BinaryExpr("gt", left, right);
    }
    static lt(left, right) {
        return new BinaryExpr("lt", left, right);
    }
    static gte(left, right) {
        return new BinaryExpr("gte", left, right);
    }
    static lte(left, right) {
        return new BinaryExpr("lte", left, right);
    }
    static like(left, right) {
        return new BinaryExpr("like", left, right);
    }
    static in(left, right) {
        return new BinaryExpr("in", left, right);
    }
    static notIn(left, right) {
        return new BinaryExpr("notIn", left, right);
    }
    accept(visitor) {
        return visitor.binary(this);
    }
    rewrite(rewriter) {
        return new BinaryExpr(this.op, rewriteComparable(this.left, rewriter), rewriteComparable(this.right, rewriter));
    }
    fold(folder) {
        return combineAll(folder, [
            ()=>foldComparable(this.left, folder),
            ()=>foldComparable(this.right, folder)
        ]);
    }
};
var AndExpr = class AndExpr extends Expression {
    kind = "and";
    exprs;
    constructor(exprs){
        super();
        this.exprs = frozenArrayCopy(exprs);
        this.freeze();
    }
    static of(exprs) {
        return new AndExpr(exprs);
    }
    static true() {
        return new AndExpr([]);
    }
    accept(visitor) {
        return visitor.and(this);
    }
    rewrite(rewriter) {
        return new AndExpr(this.exprs.map((expr)=>expr.rewrite(rewriter)));
    }
    fold(folder) {
        return combineAll(folder, this.exprs.map((expr)=>()=>expr.fold(folder)));
    }
};
var OrExpr = class OrExpr extends Expression {
    kind = "or";
    exprs;
    constructor(exprs){
        super();
        this.exprs = frozenArrayCopy(exprs);
        this.freeze();
    }
    static of(exprs) {
        return new OrExpr(exprs);
    }
    static false() {
        return new OrExpr([]);
    }
    accept(visitor) {
        return visitor.or(this);
    }
    rewrite(rewriter) {
        return new OrExpr(this.exprs.map((expr)=>expr.rewrite(rewriter)));
    }
    fold(folder) {
        return combineAll(folder, this.exprs.map((expr)=>()=>expr.fold(folder)));
    }
};
var ExistsExpr = class ExistsExpr extends Expression {
    kind = "exists";
    notExists;
    subquery;
    constructor(subquery, notExists = false){
        super();
        this.notExists = notExists;
        this.subquery = subquery;
        this.freeze();
    }
    static exists(subquery) {
        return new ExistsExpr(subquery, false);
    }
    static notExists(subquery) {
        return new ExistsExpr(subquery, true);
    }
    accept(visitor) {
        return visitor.exists(this);
    }
    rewrite(rewriter) {
        return new ExistsExpr(this.subquery.rewrite(rewriter), this.notExists);
    }
    fold(folder) {
        return folder.select ? folder.select(this.subquery) : folder.empty;
    }
};
var NullCheckExpr = class NullCheckExpr extends Expression {
    kind = "null-check";
    expr;
    isNull;
    constructor(expr, isNull){
        super();
        this.expr = expr;
        this.isNull = isNull;
        this.freeze();
    }
    static isNull(expr) {
        return new NullCheckExpr(expr, true);
    }
    static isNotNull(expr) {
        return new NullCheckExpr(expr, false);
    }
    accept(visitor) {
        return visitor.nullCheck(this);
    }
    rewrite(rewriter) {
        return new NullCheckExpr(this.expr.rewrite(rewriter), this.isNull);
    }
    fold(folder) {
        return this.expr.fold(folder);
    }
};
var NotExpr = class NotExpr extends Expression {
    kind = "not";
    expr;
    constructor(expr){
        super();
        this.expr = expr;
        this.freeze();
    }
    toWhereExpr() {
        return this;
    }
    accept(visitor) {
        return visitor.not(this);
    }
    rewrite(rewriter) {
        return new NotExpr(this.expr.rewrite(rewriter));
    }
    fold(folder) {
        return this.expr.fold(folder);
    }
};
var EqColJoinOn = class EqColJoinOn extends AstNode {
    kind = "eq-col-join-on";
    left;
    right;
    constructor(left, right){
        super();
        this.left = left;
        this.right = right;
        this.freeze();
    }
    static of(left, right) {
        return new EqColJoinOn(left, right);
    }
    rewrite(rewriter) {
        return rewriter.eqColJoinOn ? rewriter.eqColJoinOn(this) : this;
    }
};
var JoinAst = class JoinAst extends AstNode {
    kind = "join";
    joinType;
    source;
    lateral;
    on;
    constructor(joinType, source, on, lateral = false){
        super();
        this.joinType = joinType;
        this.source = source;
        this.lateral = lateral;
        this.on = on;
        this.freeze();
    }
    static inner(source, on, lateral = false) {
        return new JoinAst("inner", source, on, lateral);
    }
    static left(source, on, lateral = false) {
        return new JoinAst("left", source, on, lateral);
    }
    static right(source, on, lateral = false) {
        return new JoinAst("right", source, on, lateral);
    }
    static full(source, on, lateral = false) {
        return new JoinAst("full", source, on, lateral);
    }
    rewrite(rewriter) {
        return new JoinAst(this.joinType, this.source.rewrite(rewriter), this.on.kind === "eq-col-join-on" ? this.on.rewrite(rewriter) : this.on.rewrite(rewriter), this.lateral);
    }
};
var ProjectionItem = class ProjectionItem extends AstNode {
    kind = "projection-item";
    alias;
    expr;
    /**
	* Codec identity for any known projected result, whether read directly from a contract column or forwarded through a query wrapper. Decode-side dispatch resolves the per-instance codec through `contractCodecs.forCodecRef(codec)` — content-keyed memoisation collapses repeated lookups for the same logical result onto one shared {@link Codec}.
	*
	* Stays `undefined` only when the projected result's codec is unknown, such as computed expressions, subqueries, or raw aliases whose decoded type the runtime cannot infer.
	*/ codec;
    constructor(alias, expr, codec){
        super();
        this.alias = alias;
        this.expr = expr;
        this.codec = codec ? frozenCodecRef(codec) : void 0;
        this.freeze();
    }
    static of(alias, expr, codec) {
        return new ProjectionItem(alias, expr, codec);
    }
    withCodec(codec) {
        return new ProjectionItem(this.alias, this.expr, codec);
    }
};
var SelectAst = class SelectAst extends QueryAst {
    kind = "select";
    from;
    joins;
    projection;
    where;
    orderBy;
    distinct;
    distinctOn;
    groupBy;
    having;
    limit;
    offset;
    selectAllIntent;
    constructor(options){
        super();
        this.from = options.from;
        this.joins = options.joins && options.joins.length > 0 ? frozenArrayCopy(options.joins) : void 0;
        this.projection = frozenArrayCopy(options.projection);
        this.where = options.where;
        this.orderBy = options.orderBy && options.orderBy.length > 0 ? frozenArrayCopy(options.orderBy) : void 0;
        this.distinct = options.distinct;
        this.distinctOn = options.distinctOn && options.distinctOn.length > 0 ? frozenArrayCopy(options.distinctOn) : void 0;
        this.groupBy = options.groupBy && options.groupBy.length > 0 ? frozenArrayCopy(options.groupBy) : void 0;
        this.having = options.having;
        this.limit = options.limit;
        this.offset = options.offset;
        this.selectAllIntent = frozenOptionalRecordCopy(options.selectAllIntent);
        this.freeze();
    }
    static from(from) {
        return new SelectAst({
            from,
            joins: void 0,
            projection: [],
            where: void 0,
            orderBy: void 0,
            distinct: void 0,
            distinctOn: void 0,
            groupBy: void 0,
            having: void 0,
            limit: void 0,
            offset: void 0,
            selectAllIntent: void 0
        });
    }
    static noFrom() {
        return new SelectAst({
            joins: void 0,
            projection: [],
            where: void 0,
            orderBy: void 0,
            distinct: void 0,
            distinctOn: void 0,
            groupBy: void 0,
            having: void 0,
            limit: void 0,
            offset: void 0,
            selectAllIntent: void 0
        });
    }
    toOptions() {
        return {
            ...this.from !== void 0 ? {
                from: this.from
            } : {},
            joins: this.joins,
            projection: this.projection,
            where: this.where,
            orderBy: this.orderBy,
            distinct: this.distinct,
            distinctOn: this.distinctOn,
            groupBy: this.groupBy,
            having: this.having,
            limit: this.limit,
            offset: this.offset,
            selectAllIntent: this.selectAllIntent
        };
    }
    withFrom(from) {
        return new SelectAst({
            ...this.toOptions(),
            from
        });
    }
    withJoins(joins) {
        return new SelectAst({
            ...this.toOptions(),
            joins: joins.length > 0 ? joins : void 0
        });
    }
    withProjection(projection) {
        return new SelectAst({
            ...this.toOptions(),
            projection
        });
    }
    addProjection(alias, expr) {
        return new SelectAst({
            ...this.toOptions(),
            projection: [
                ...this.projection,
                new ProjectionItem(alias, expr)
            ]
        });
    }
    withWhere(where) {
        return new SelectAst({
            ...this.toOptions(),
            where
        });
    }
    withOrderBy(orderBy) {
        return new SelectAst({
            ...this.toOptions(),
            orderBy: orderBy.length > 0 ? orderBy : void 0
        });
    }
    withDistinct(enabled = true) {
        return new SelectAst({
            ...this.toOptions(),
            distinct: enabled ? true : void 0
        });
    }
    withDistinctOn(distinctOn) {
        return new SelectAst({
            ...this.toOptions(),
            distinctOn: distinctOn.length > 0 ? distinctOn : void 0
        });
    }
    withGroupBy(groupBy) {
        return new SelectAst({
            ...this.toOptions(),
            groupBy: groupBy.length > 0 ? groupBy : void 0
        });
    }
    withHaving(having) {
        return new SelectAst({
            ...this.toOptions(),
            having
        });
    }
    withLimit(limit) {
        return new SelectAst({
            ...this.toOptions(),
            limit
        });
    }
    withOffset(offset) {
        return new SelectAst({
            ...this.toOptions(),
            offset
        });
    }
    withSelectAllIntent(selectAllIntent) {
        return new SelectAst({
            ...this.toOptions(),
            selectAllIntent
        });
    }
    rewrite(rewriter) {
        const rewrittenFrom = this.from?.rewrite(rewriter);
        const rewritten = new SelectAst({
            ...rewrittenFrom !== void 0 ? {
                from: rewrittenFrom
            } : {},
            joins: this.joins?.map((join)=>join.rewrite(rewriter)),
            projection: this.projection.map((projection)=>new ProjectionItem(projection.alias, projection.expr.kind === "literal" ? rewriter.literal ? rewriter.literal(projection.expr) : projection.expr : projection.expr.rewrite(rewriter), projection.codec)),
            where: this.where?.rewrite(rewriter),
            orderBy: this.orderBy?.map((orderItem)=>orderItem.rewrite(rewriter)),
            distinct: this.distinct,
            distinctOn: this.distinctOn?.map((expr)=>expr.rewrite(rewriter)),
            groupBy: this.groupBy?.map((expr)=>expr.rewrite(rewriter)),
            having: this.having?.rewrite(rewriter),
            limit: rewriteLimitOffset(this.limit, rewriter),
            offset: rewriteLimitOffset(this.offset, rewriter),
            selectAllIntent: this.selectAllIntent
        });
        return rewriter.select ? rewriter.select(rewritten) : rewritten;
    }
    collectColumnRefs() {
        const refs = [];
        const pushRefs = (columns)=>{
            refs.push(...columns);
        };
        if (this.from?.kind === "derived-table-source") pushRefs(this.from.query.collectColumnRefs());
        else if (this.from?.kind === "function-source") for (const arg of this.from.args)pushRefs(arg.collectColumnRefs());
        for (const projection of this.projection)if (!(projection.expr.kind === "literal")) pushRefs(projection.expr.collectColumnRefs());
        if (this.where) pushRefs(this.where.collectColumnRefs());
        if (this.having) pushRefs(this.having.collectColumnRefs());
        for (const orderItem of this.orderBy ?? [])pushRefs(orderItem.expr.collectColumnRefs());
        for (const expr of this.distinctOn ?? [])pushRefs(expr.collectColumnRefs());
        for (const expr of this.groupBy ?? [])pushRefs(expr.collectColumnRefs());
        for (const join of this.joins ?? []){
            if (join.source.kind === "derived-table-source") pushRefs(join.source.query.collectColumnRefs());
            else if (join.source.kind === "function-source") for (const arg of join.source.args)pushRefs(arg.collectColumnRefs());
            if (join.on.kind === "eq-col-join-on") refs.push(join.on.left, join.on.right);
            else pushRefs(join.on.collectColumnRefs());
        }
        if (typeof this.limit === "object") pushRefs(this.limit.collectColumnRefs());
        if (typeof this.offset === "object") pushRefs(this.offset.collectColumnRefs());
        return refs;
    }
    collectParamRefs() {
        const refs = [];
        const pushRefs = (params)=>{
            refs.push(...params);
        };
        if (this.from?.kind === "derived-table-source") pushRefs(this.from.query.collectParamRefs());
        else if (this.from?.kind === "function-source") for (const arg of this.from.args)pushRefs(arg.collectParamRefs());
        for (const projection of this.projection)if (!(projection.expr.kind === "literal")) pushRefs(projection.expr.collectParamRefs());
        if (this.where) pushRefs(this.where.collectParamRefs());
        if (this.having) pushRefs(this.having.collectParamRefs());
        for (const orderItem of this.orderBy ?? [])pushRefs(orderItem.expr.collectParamRefs());
        for (const expr of this.distinctOn ?? [])pushRefs(expr.collectParamRefs());
        for (const expr of this.groupBy ?? [])pushRefs(expr.collectParamRefs());
        for (const join of this.joins ?? []){
            if (join.source.kind === "derived-table-source") pushRefs(join.source.query.collectParamRefs());
            else if (join.source.kind === "function-source") for (const arg of join.source.args)pushRefs(arg.collectParamRefs());
            if (!(join.on.kind === "eq-col-join-on")) pushRefs(join.on.collectParamRefs());
        }
        if (typeof this.limit === "object") pushRefs(this.limit.collectParamRefs());
        if (typeof this.offset === "object") pushRefs(this.offset.collectParamRefs());
        return refs;
    }
    toQueryAst() {
        return this;
    }
};
var InsertOnConflictAction = class extends AstNode {
};
var DoNothingConflictAction = class extends InsertOnConflictAction {
    kind = "do-nothing";
    constructor(){
        super();
        this.freeze();
    }
    toInsertOnConflictAction() {
        return this;
    }
};
var DoUpdateSetConflictAction = class extends InsertOnConflictAction {
    kind = "do-update-set";
    set;
    constructor(set){
        super();
        this.set = frozenRecordCopy(set);
        this.freeze();
    }
    toInsertOnConflictAction() {
        return this;
    }
};
var InsertOnConflict = class InsertOnConflict extends AstNode {
    kind = "insert-on-conflict";
    columns;
    action;
    constructor(columns, action){
        super();
        this.columns = frozenArrayCopy(columns);
        this.action = action;
        this.freeze();
    }
    static on(columns) {
        return new InsertOnConflict(columns, new DoNothingConflictAction());
    }
    /**
	* Skip a row that collides with any unique constraint on the table, without
	* naming one. The renderer chooses the dialect; Postgres and SQLite emit
	* `ON CONFLICT DO NOTHING`.
	*/ static doNothing() {
        return new InsertOnConflict([], new DoNothingConflictAction());
    }
    doNothing() {
        return new InsertOnConflict(this.columns, new DoNothingConflictAction());
    }
    doUpdateSet(set) {
        return new InsertOnConflict(this.columns, new DoUpdateSetConflictAction(set));
    }
};
var InsertAst = class InsertAst extends QueryAst {
    kind = "insert";
    table;
    rows;
    onConflict;
    returning;
    constructor(table, rows = [
        {}
    ], onConflict, returning){
        super();
        this.table = table;
        this.rows = freezeRows(rows);
        this.onConflict = onConflict;
        this.returning = returning && returning.length > 0 ? frozenArrayCopy(returning) : void 0;
        this.freeze();
    }
    static into(table) {
        return new InsertAst(table);
    }
    withRows(rows) {
        return new InsertAst(this.table, rows.map((row)=>({
                ...row
            })), this.onConflict, this.returning);
    }
    withReturning(returning) {
        return new InsertAst(this.table, this.rows.map((row)=>({
                ...row
            })), this.onConflict, returning);
    }
    withOnConflict(onConflict) {
        return new InsertAst(this.table, this.rows.map((row)=>({
                ...row
            })), onConflict, this.returning);
    }
    rewrite(rewriter) {
        return new InsertAst(rewriteTableSource(this.table, rewriter), this.rows.map((row)=>rewriteInsertRow(row, rewriter)), this.onConflict ? rewriteOnConflict(this.onConflict, rewriter) : void 0, this.returning?.map((item)=>rewriteProjectionItem(item, rewriter)));
    }
    collectParamRefs() {
        const refs = [];
        for (const row of this.rows)for (const value of Object.values(row))if (value.kind === "param-ref" || value.kind === "prepared-param-ref") refs.push(value);
        else if (value.kind === "raw-expr") refs.push(...value.collectParamRefs());
        if (this.onConflict?.action.kind === "do-update-set") {
            for (const value of Object.values(this.onConflict.action.set))if (value.kind === "param-ref" || value.kind === "prepared-param-ref") refs.push(value);
        }
        for (const item of this.returning ?? [])if (item.expr.kind !== "literal") refs.push(...item.expr.collectParamRefs());
        return refs;
    }
    toQueryAst() {
        return this;
    }
};
var UpdateAst = class UpdateAst extends QueryAst {
    kind = "update";
    table;
    set;
    where;
    returning;
    constructor(table, set = {}, where, returning){
        super();
        this.table = table;
        this.set = frozenRecordCopy(set);
        this.where = where;
        this.returning = returning && returning.length > 0 ? frozenArrayCopy(returning) : void 0;
        this.freeze();
    }
    static table(table) {
        return new UpdateAst(table);
    }
    withSet(set) {
        return new UpdateAst(this.table, set, this.where, this.returning);
    }
    withWhere(where) {
        return new UpdateAst(this.table, this.set, where, this.returning);
    }
    withReturning(returning) {
        return new UpdateAst(this.table, this.set, this.where, returning);
    }
    rewrite(rewriter) {
        return new UpdateAst(rewriteTableSource(this.table, rewriter), rewriteUpdateSet(this.set, rewriter), this.where?.rewrite(rewriter), this.returning?.map((item)=>rewriteProjectionItem(item, rewriter)));
    }
    collectParamRefs() {
        const refs = [];
        for (const value of Object.values(this.set))refs.push(...value.collectParamRefs());
        if (this.where) refs.push(...this.where.collectParamRefs());
        for (const item of this.returning ?? [])if (item.expr.kind !== "literal") refs.push(...item.expr.collectParamRefs());
        return refs;
    }
    toQueryAst() {
        return this;
    }
};
var DeleteAst = class DeleteAst extends QueryAst {
    kind = "delete";
    table;
    where;
    returning;
    constructor(table, where, returning){
        super();
        this.table = table;
        this.where = where;
        this.returning = returning && returning.length > 0 ? frozenArrayCopy(returning) : void 0;
        this.freeze();
    }
    static from(table) {
        return new DeleteAst(table);
    }
    withWhere(where) {
        return new DeleteAst(this.table, where, this.returning);
    }
    withReturning(returning) {
        return new DeleteAst(this.table, this.where, returning);
    }
    rewrite(rewriter) {
        return new DeleteAst(rewriteTableSource(this.table, rewriter), this.where?.rewrite(rewriter), this.returning?.map((item)=>rewriteProjectionItem(item, rewriter)));
    }
    collectParamRefs() {
        const refs = [];
        if (this.where) refs.push(...this.where.collectParamRefs());
        for (const item of this.returning ?? [])if (item.expr.kind !== "literal") refs.push(...item.expr.collectParamRefs());
        return refs;
    }
    toQueryAst() {
        return this;
    }
};
/**
* The one column name a declared result cannot carry. Writing `__proto__` onto
* an object literal sets that object's prototype instead of adding a property,
* so a column so named would disappear between the declaration and the decoded
* row — and the row type would still promise it. Every other name that shadows
* something on `Object.prototype` (`constructor`, `prototype`) is an ordinary
* own property when assigned, and passes through as declared.
*/ const RESERVED_RESULT_COLUMN = "__proto__";
function frozenRawQueryResult(result) {
    if (result.kind === "affected-count") return Object.freeze({
        kind: "affected-count"
    });
    const columns = {};
    for (const [name, column] of Object.entries(result.columns)){
        if (name === RESERVED_RESULT_COLUMN) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.AST_INVALID", `A raw query result cannot declare a "${RESERVED_RESULT_COLUMN}" column: alias the column in SQL and declare the alias instead`, {
            meta: {
                kind: "raw-query",
                field: "result.columns",
                column: name
            }
        });
        columns[name] = Object.freeze({
            codecId: column.codecId,
            nullable: column.nullable
        });
    }
    return Object.freeze({
        kind: "rows",
        columns: Object.freeze(columns)
    });
}
/**
* Raw-SQL statement AST node: a whole query authored as a template, carrying
* the same `parts` representation as {@link RawExpr} (literal SQL fragments
* interleaved with interpolated expressions and `ParamRef`s) plus the result
* the author declared for it.
*
* The shared `parts` shape is what lets a row-returning raw query be spliced
* into another raw template: the inner parts are concatenated into the outer
* list, so parameters keep their template order and lowering walks one flat
* sequence.
*/ var RawQueryAst = class RawQueryAst extends QueryAst {
    kind = "raw-query";
    parts;
    result;
    constructor(options){
        super();
        this.parts = frozenArrayCopy(options.parts);
        this.result = frozenRawQueryResult(options.result);
        this.freeze();
    }
    static rows(parts, columns) {
        return new RawQueryAst({
            parts,
            result: {
                kind: "rows",
                columns
            }
        });
    }
    static affectedCount(parts) {
        return new RawQueryAst({
            parts,
            result: {
                kind: "affected-count"
            }
        });
    }
    rewrite(rewriter) {
        return new RawQueryAst({
            parts: this.parts.map((part)=>typeof part === "string" ? part : rewriteComparable(part, rewriter)),
            result: this.result
        });
    }
    collectParamRefs() {
        const refs = [];
        for (const part of this.parts)if (typeof part !== "string") refs.push(...part.collectParamRefs());
        return refs;
    }
    toQueryAst() {
        return this;
    }
};
const queryAstKinds = /* @__PURE__ */ new Set([
    "select",
    "insert",
    "update",
    "delete",
    "raw-query"
]);
const whereExprKinds = /* @__PURE__ */ new Set([
    "binary",
    "and",
    "or",
    "exists",
    "null-check",
    "not"
]);
function isQueryAst(value) {
    return typeof value === "object" && value !== null && "kind" in value && typeof value.kind === "string" && queryAstKinds.has(value.kind);
}
function isWhereExpr(value) {
    return typeof value === "object" && value !== null && "kind" in value && typeof value.kind === "string" && whereExprKinds.has(value.kind);
}
;
 //# sourceMappingURL=types-ZNKYVjLr-DzjvSHKB.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>sqlCharDescriptor,
    "B",
    ()=>sqlIntDecode,
    "C",
    ()=>isNumeralText,
    "D",
    ()=>signedRange,
    "E",
    ()=>printJsonBody,
    "F",
    ()=>sqlFloatDecodeJson,
    "G",
    ()=>sqlTextDescriptor,
    "H",
    ()=>sqlIntEncode,
    "I",
    ()=>sqlFloatDescriptor,
    "J",
    ()=>sqlVarcharDecode,
    "K",
    ()=>sqlTextEncode,
    "L",
    ()=>sqlFloatEncode,
    "M",
    ()=>sqlCharRenderOutputType,
    "N",
    ()=>sqlFloatColumn,
    "O",
    ()=>sqlCharColumn,
    "P",
    ()=>sqlFloatDecode,
    "R",
    ()=>sqlFloatEncodeJson,
    "S",
    ()=>isNonFiniteText,
    "T",
    ()=>parseJsonBody,
    "U",
    ()=>sqlTextColumn,
    "V",
    ()=>sqlIntDescriptor,
    "W",
    ()=>sqlTextDecode,
    "X",
    ()=>sqlVarcharEncode,
    "Y",
    ()=>sqlVarcharDescriptor,
    "Z",
    ()=>sqlVarcharRenderOutputType,
    "_",
    ()=>SqlVarcharCodec,
    "a",
    ()=>SQL_FLOAT_CODEC_ID,
    "b",
    ()=>createNumberClassifier,
    "c",
    ()=>SQL_VARCHAR_CODEC_ID,
    "d",
    ()=>SqlFloatCodec,
    "f",
    ()=>SqlFloatDescriptor,
    "g",
    ()=>SqlTextDescriptor,
    "h",
    ()=>SqlTextCodec,
    "i",
    ()=>SQL_CHAR_CODEC_ID,
    "j",
    ()=>sqlCharEncode,
    "k",
    ()=>sqlCharDecode,
    "l",
    ()=>SqlCharCodec,
    "m",
    ()=>SqlIntDescriptor,
    "n",
    ()=>JsonDocumentProjection,
    "o",
    ()=>SQL_INT_CODEC_ID,
    "p",
    ()=>SqlIntCodec,
    "q",
    ()=>sqlVarcharColumn,
    "r",
    ()=>NativeJsonValueProjection,
    "s",
    ()=>SQL_TEXT_CODEC_ID,
    "t",
    ()=>CodecJsonValueProjection,
    "u",
    ()=>SqlCharDescriptor,
    "v",
    ()=>SqlVarcharDescriptor,
    "w",
    ()=>numeralText,
    "x",
    ()=>escapePslString,
    "y",
    ()=>canonicalNumeralText,
    "z",
    ()=>sqlIntColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-rsc] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__CodecDescriptorTemplateImpl$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/codec-BWFxotS7.mjs [app-rsc] (ecmascript) <export n as CodecDescriptorTemplateImpl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__CodecImpl$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/codec-BWFxotS7.mjs [app-rsc] (ecmascript) <export r as CodecImpl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__column$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/codec-BWFxotS7.mjs [app-rsc] (ecmascript) <export i as column>");
;
;
;
;
//#region ../../../2-sql/4-lanes/relational-core/dist/exports/ast.mjs
const INTEGER_TEXT = /^-?\d+$/;
const DECIMAL_TEXT = /^-?\d+\.\d+$/;
const NON_FINITE_WORDS = /* @__PURE__ */ new Set([
    "NaN",
    "Infinity",
    "-Infinity"
]);
const DECIMAL_NUMERAL = /^(-?)0*(\d+)(\.\d+)?$/;
/** Whether `text` is a whole number or a decimal as a contract source writes one. */ function isNumeralText(text) {
    return INTEGER_TEXT.test(text) || DECIMAL_TEXT.test(text);
}
/** Whether `text` is one of the three words a floating-point value is written as. */ function isNonFiniteText(text) {
    return NON_FINITE_WORDS.has(text);
}
/**
* A written numeral as the contract stores it. Leading zeros and the sign of zero never change a
* number, so they go; trailing zeros stay, because a type without a scale keeps them.
*/ function canonicalNumeralText(text) {
    const numeral = DECIMAL_NUMERAL.exec(text);
    if (numeral === null) return text;
    const [, sign = "", whole = "", fraction = ""] = numeral;
    const digits = `${whole}${fraction}`;
    return /^[0.]+$/.test(digits) ? digits : `${sign}${digits}`;
}
/**
* A number as a contract source writes it: no exponent, because no schema language has that syntax,
* so the decimal point moves to where the exponent puts it. A non-finite number is its own word.
*/ function numeralText(value) {
    const [coefficient = "", exponent] = String(value).split("e");
    if (exponent === void 0) return coefficient;
    const sign = coefficient.startsWith("-") ? "-" : "";
    const [whole = "", fraction = ""] = coefficient.slice(sign.length).split(".");
    const digits = `${whole}${fraction}`;
    const point = whole.length + Number(exponent);
    if (point <= 0) return `${sign}0.${"0".repeat(-point)}${digits}`;
    if (point >= digits.length) return `${sign}${digits}${"0".repeat(point - digits.length)}`;
    return `${sign}${digits.slice(0, point)}.${digits.slice(point)}`;
}
/** A string as a contract source writes it, with the escapes its string reader resolves. */ function escapePslString(value) {
    return value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
}
/** The range of a signed integer of `bits` bits. */ function signedRange(bits) {
    const half = 2n ** (BigInt(bits) - 1n);
    return {
        min: -half,
        max: half - 1n
    };
}
/**
* The classifier one target's plain-number authoring entry carries: it reads the digits and says
* which of the target's types the value is, in that type's canonical form. `undefined` means no
* type of this target holds the number.
*/ function createNumberClassifier(spec) {
    const as = (classification, value)=>classification === void 0 ? void 0 : {
            type: classification.type,
            value
        };
    return (text)=>{
        if (NON_FINITE_WORDS.has(text)) return as(spec.words, spec.words?.form === "number" ? Number(text) : text);
        if (DECIMAL_TEXT.test(text)) {
            const canonical = canonicalNumeralText(text);
            return as(spec.fraction, spec.fraction?.form === "number" ? Number(canonical) : canonical);
        }
        if (!INTEGER_TEXT.test(text)) return void 0;
        const digits = BigInt(text);
        const classification = spec.integers.find(({ min, max })=>digits >= min && digits <= max) ?? spec.largerWhole;
        return as(classification, classification?.form === "number" ? Number(digits) : digits.toString());
    };
}
/**
* Read a JSON body into the document it holds.
*
* `JSON.parse` reads a numeral too large for a double as `Infinity`, and `JSON.stringify` writes
* that back as `null`, so a document holding one would not be the document stored; it is refused
* here instead, naming where the number is.
*/ function parseJsonBody(text) {
    let value;
    try {
        value = JSON.parse(text);
    } catch (error) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.INVALID_JSON_LITERAL", error instanceof Error ? error.message : String(error), {
            why: "The body is not a JSON document.",
            fix: "Write a JSON document."
        });
    }
    const overflowed = nonFiniteNumberIn(value, "");
    if (overflowed !== void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.INVALID_JSON_LITERAL", `${overflowed.path} is ${overflowed.value}, which JSON cannot write back: the number in the text is outside the range a JSON number holds.`, {
        why: "JSON.parse reads a numeral too large for a double as Infinity, which JSON.stringify writes back as null.",
        fix: "Write a number JSON can hold, or write it as text."
    });
    return value;
}
/** Write a document as the body of a JSON literal. */ function printJsonBody(value) {
    return JSON.stringify(value);
}
function nonFiniteNumberIn(value, path) {
    if (typeof value === "number") return Number.isFinite(value) ? void 0 : {
        path: path === "" ? "The value" : path,
        value
    };
    if (Array.isArray(value)) {
        for (const [index, element] of value.entries()){
            const found = nonFiniteNumberIn(element, `${path}[${index}]`);
            if (found !== void 0) return found;
        }
        return;
    }
    if (typeof value === "object" && value !== null) for (const [key, member] of Object.entries(value)){
        const found = nonFiniteNumberIn(member, path === "" ? key : `${path}.${key}`);
        if (found !== void 0) return found;
    }
}
var JsonValueProjection = class {
    value;
    constructor(value){
        this.value = value;
    }
    fold(folder) {
        return this.value.fold(folder);
    }
    collectColumnRefs() {
        return this.value.collectColumnRefs();
    }
    collectParamRefs() {
        return this.value.collectParamRefs();
    }
    freeze() {
        Object.freeze(this);
    }
};
var CodecJsonValueProjection = class CodecJsonValueProjection extends JsonValueProjection {
    kind = "codec";
    codec;
    constructor(value, codec){
        super(value);
        this.codec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"])(codec);
        this.freeze();
    }
    accept(visitor) {
        return visitor.codec(this);
    }
    rewrite(rewriter) {
        return new CodecJsonValueProjection(this.value.rewrite(rewriter), this.codec);
    }
};
var NativeJsonValueProjection = class NativeJsonValueProjection extends JsonValueProjection {
    kind = "native";
    constructor(value){
        super(value);
        this.freeze();
    }
    accept(visitor) {
        return visitor.native(this);
    }
    rewrite(rewriter) {
        return new NativeJsonValueProjection(this.value.rewrite(rewriter));
    }
};
var JsonDocumentProjection = class JsonDocumentProjection extends JsonValueProjection {
    kind = "document";
    constructor(value){
        super(value);
        this.freeze();
    }
    accept(visitor) {
        return visitor.document(this);
    }
    rewrite(rewriter) {
        return new JsonDocumentProjection(this.value.rewrite(rewriter));
    }
};
const SQL_CHAR_CODEC_ID = "sql/char@1";
const SQL_VARCHAR_CODEC_ID = "sql/varchar@1";
const SQL_INT_CODEC_ID = "sql/int@1";
const SQL_FLOAT_CODEC_ID = "sql/float@1";
const SQL_TEXT_CODEC_ID = "sql/text@1";
const sqlCharEncode = (value)=>value;
const sqlCharDecode = (wire)=>wire.trimEnd();
const sqlCharRenderOutputType = (typeParams)=>{
    const length = typeParams.length;
    if (length === void 0) return void 0;
    if (typeof length !== "number" || !Number.isFinite(length) || !Number.isInteger(length)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.TYPE_PARAMS_INVALID", `renderOutputType: expected integer "length" in typeParams for Char, got ${String(length)}`, {
        meta: {
            codec: SQL_CHAR_CODEC_ID,
            param: "length",
            received: String(length)
        }
    });
    return `Char<${length}>`;
};
const sqlVarcharEncode = (value)=>value;
const sqlVarcharDecode = (wire)=>wire;
const sqlVarcharRenderOutputType = (typeParams)=>{
    const length = typeParams.length;
    if (length === void 0) return void 0;
    if (typeof length !== "number" || !Number.isFinite(length) || !Number.isInteger(length)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.TYPE_PARAMS_INVALID", `renderOutputType: expected integer "length" in typeParams for Varchar, got ${String(length)}`, {
        meta: {
            codec: SQL_VARCHAR_CODEC_ID,
            param: "length",
            received: String(length)
        }
    });
    return `Varchar<${length}>`;
};
const sqlIntEncode = (value)=>value;
const sqlIntDecode = (wire)=>wire;
const sqlFloatEncode = (value)=>value;
const sqlFloatDecode = (wire)=>wire;
/**
* JSON has no spelling for a non-finite number, and a database that holds one
* emits it as a string — PostgreSQL writes `"NaN"` and `"Infinity"`. This
* codec's application type is `number`, so both directions reject rather than
* carry a value that type cannot hold.
*/ const sqlFloatEncodeJson = (value)=>{
    if (!Number.isFinite(value)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.ENCODE_FAILED", `${SQL_FLOAT_CODEC_ID} application value must be a finite number, got ${value}`, {
        meta: {
            codec: SQL_FLOAT_CODEC_ID
        }
    });
    return value;
};
const sqlFloatDecodeJson = (json)=>{
    if (typeof json !== "number" || !Number.isFinite(json)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.DECODE_FAILED", `Expected a finite number for ${SQL_FLOAT_CODEC_ID}, got ${JSON.stringify(json)}`, {
        meta: {
            codec: SQL_FLOAT_CODEC_ID
        }
    });
    return json;
};
const sqlTextEncode = (value)=>value;
const sqlTextDecode = (wire)=>wire;
const lengthParamsSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "length?": "number.integer > 0"
});
var SqlTextCodec = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__CodecImpl$3e$__["CodecImpl"] {
    async encode(value, _ctx) {
        return sqlTextEncode(value);
    }
    async decode(wire, _ctx) {
        return sqlTextDecode(wire);
    }
    encodeJson(value) {
        return value;
    }
    decodeJson(json) {
        return json;
    }
};
var SqlTextDescriptor = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__CodecDescriptorTemplateImpl$3e$__["CodecDescriptorTemplateImpl"] {
    codecId = SQL_TEXT_CODEC_ID;
    traits = [
        "equality",
        "order",
        "textual"
    ];
    targetTypes = [
        "text"
    ];
    paramsSchema = void 0;
    factory() {
        return ()=>new SqlTextCodec(this);
    }
};
const sqlTextDescriptor = new SqlTextDescriptor();
const sqlTextColumn = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__column$3e$__["column"])(sqlTextDescriptor.factory(), sqlTextDescriptor.codecId, void 0, "text");
var SqlIntCodec = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__CodecImpl$3e$__["CodecImpl"] {
    async encode(value, _ctx) {
        return sqlIntEncode(value);
    }
    async decode(wire, _ctx) {
        return sqlIntDecode(wire);
    }
    encodeJson(value) {
        return value;
    }
    decodeJson(json) {
        return json;
    }
};
var SqlIntDescriptor = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__CodecDescriptorTemplateImpl$3e$__["CodecDescriptorTemplateImpl"] {
    codecId = SQL_INT_CODEC_ID;
    traits = [
        "equality",
        "order",
        "numeric"
    ];
    targetTypes = [
        "int"
    ];
    paramsSchema = void 0;
    factory() {
        return ()=>new SqlIntCodec(this);
    }
};
const sqlIntDescriptor = new SqlIntDescriptor();
const sqlIntColumn = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__column$3e$__["column"])(sqlIntDescriptor.factory(), sqlIntDescriptor.codecId, void 0, "int");
var SqlFloatCodec = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__CodecImpl$3e$__["CodecImpl"] {
    async encode(value, _ctx) {
        return sqlFloatEncode(value);
    }
    async decode(wire, _ctx) {
        return sqlFloatDecode(wire);
    }
    encodeJson(value) {
        return sqlFloatEncodeJson(value);
    }
    decodeJson(json) {
        return sqlFloatDecodeJson(json);
    }
};
var SqlFloatDescriptor = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__CodecDescriptorTemplateImpl$3e$__["CodecDescriptorTemplateImpl"] {
    codecId = SQL_FLOAT_CODEC_ID;
    traits = [
        "equality",
        "order",
        "numeric"
    ];
    targetTypes = [
        "float"
    ];
    paramsSchema = void 0;
    factory() {
        return ()=>new SqlFloatCodec(this);
    }
};
const sqlFloatDescriptor = new SqlFloatDescriptor();
const sqlFloatColumn = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__column$3e$__["column"])(sqlFloatDescriptor.factory(), sqlFloatDescriptor.codecId, void 0, "float");
var SqlCharCodec = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__CodecImpl$3e$__["CodecImpl"] {
    async encode(value, _ctx) {
        return sqlCharEncode(value);
    }
    async decode(wire, _ctx) {
        return sqlCharDecode(wire);
    }
    encodeJson(value) {
        return value;
    }
    decodeJson(json) {
        return json;
    }
};
var SqlCharDescriptor = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__CodecDescriptorTemplateImpl$3e$__["CodecDescriptorTemplateImpl"] {
    codecId = SQL_CHAR_CODEC_ID;
    traits = [
        "equality",
        "order",
        "textual"
    ];
    targetTypes = [
        "char"
    ];
    paramsSchema = lengthParamsSchema;
    renderOutputType(params) {
        return sqlCharRenderOutputType(params);
    }
    factory(_params) {
        return ()=>new SqlCharCodec(this);
    }
};
const sqlCharDescriptor = new SqlCharDescriptor();
const sqlCharColumn = (params = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__column$3e$__["column"])(sqlCharDescriptor.factory(params), sqlCharDescriptor.codecId, params, "char");
var SqlVarcharCodec = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__CodecImpl$3e$__["CodecImpl"] {
    async encode(value, _ctx) {
        return sqlVarcharEncode(value);
    }
    async decode(wire, _ctx) {
        return sqlVarcharDecode(wire);
    }
    encodeJson(value) {
        return value;
    }
    decodeJson(json) {
        return json;
    }
};
var SqlVarcharDescriptor = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__CodecDescriptorTemplateImpl$3e$__["CodecDescriptorTemplateImpl"] {
    codecId = SQL_VARCHAR_CODEC_ID;
    traits = [
        "equality",
        "order",
        "textual"
    ];
    targetTypes = [
        "varchar"
    ];
    paramsSchema = lengthParamsSchema;
    renderOutputType(params) {
        return sqlVarcharRenderOutputType(params);
    }
    factory(_params) {
        return ()=>new SqlVarcharCodec(this);
    }
};
const sqlVarcharDescriptor = new SqlVarcharDescriptor();
const sqlVarcharColumn = (params = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$codec$2d$BWFxotS7$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__column$3e$__["column"])(sqlVarcharDescriptor.factory(params), sqlVarcharDescriptor.codecId, params, "varchar");
;
 //# sourceMappingURL=ast-CEGv-zzk.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export i as SQL_CHAR_CODEC_ID>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SQL_CHAR_CODEC_ID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export a as SQL_FLOAT_CODEC_ID>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SQL_FLOAT_CODEC_ID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export o as SQL_INT_CODEC_ID>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SQL_INT_CODEC_ID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export s as SQL_TEXT_CODEC_ID>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SQL_TEXT_CODEC_ID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export c as SQL_VARCHAR_CODEC_ID>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SQL_VARCHAR_CODEC_ID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export i as CaseExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaseExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export o as ColumnRef>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ColumnRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export l as DerivedTableSource>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DerivedTableSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export h as FunctionSource>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["h"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export b as JsonArrayAggExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JsonArrayAggExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["b"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export C as LiteralExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiteralExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export r as NativeJsonValueProjection>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NativeJsonValueProjection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export T as NullCheckExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NullCheckExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["T"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export O as OrderByItem>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderByItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["O"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export j as ProjectionItem>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectionItem",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["j"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export P as SelectAst>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectAst",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["P"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export F as SubqueryExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubqueryExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["F"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export S as isNonFiniteText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNonFiniteText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["S"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export w as numeralText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "numeralText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["w"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>computeIndexContentHash,
    "c",
    ()=>formatWireName,
    "d",
    ()=>namingOfLiveName,
    "f",
    ()=>normalizeIndexOptionValue,
    "g",
    ()=>truncateToWireNamePrefixBytes,
    "h",
    ()=>parseWireName,
    "i",
    ()=>computeCheckContentHash,
    "l",
    ()=>nameOf,
    "m",
    ()=>parseNaming,
    "n",
    ()=>assertWireNamePrefixLength,
    "o",
    ()=>defaultIndexName,
    "p",
    ()=>normalizeSqlBody,
    "r",
    ()=>composeCheckWirePrefix,
    "s",
    ()=>derivedCheckPrefixes,
    "t",
    ()=>WIRE_NAME_PREFIX_MAX_BYTES,
    "u",
    ()=>namingOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-rsc] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/contract-validation-error-DEiWp_EI-CRwtUgRw.mjs [app-rsc] (ecmascript) <export t as ContractValidationError>");
;
;
;
//#region ../../../2-sql/1-core/schema-ir/dist/naming-DKr4TJd7.mjs
function defaultIndexName(tableName, columns) {
    return `${tableName}_${columns.join("_")}_idx`;
}
/** The flat name the union describes. Inverse of {@link namingOf}. */ function nameOf(naming) {
    return naming.kind === "wire" ? formatWireName(naming.prefix, naming.hash) : naming.name;
}
/**
* The naming a name-identified node was built with, read back off the flat
* pair it stores. Inverse of {@link nameOf}, and total for that
* reason: the constructor derived `name` from the union, so the two agree.
* Flat data arriving from outside the process goes through
* {@link parseNaming} instead.
*/ function namingOf(name, prefix) {
    if (prefix === void 0) return {
        kind: "exact",
        name
    };
    return {
        kind: "wire",
        prefix,
        hash: name.slice(prefix.length + 1)
    };
}
/**
* Reads naming out of flat stored data — deserialized contract JSON and the
* literals a user may hand-edit, the one place a name and a prefix can still
* disagree. Throws when a declared prefix does not parse back out of the name.
*/ function parseNaming(name, prefix) {
    if (prefix === void 0) return {
        kind: "exact",
        name
    };
    const parsed = parseWireName(name);
    if (parsed === void 0 || parsed.prefix !== prefix) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`"${name}": prefix "${prefix}" does not match the wire name (expected "${formatWireName(prefix, "<8hex>")}").`, "storage");
    return {
        kind: "wire",
        prefix: parsed.prefix,
        hash: parsed.hash
    };
}
/**
* The naming an object read out of a live catalog has: a wire-shaped name
* gets the wire arm so the rename pass can pair it by prefix, and every
* other name is exact.
*
* The wire answer is a claim about the name's SHAPE only — the hash is
* deliberately not recomputed from the object's content here. Nothing
* downstream reads it as more than that: the differ always asks the
* contract-derived side to choose the comparison, so a shape-only wire
* claim on the introspected side never suppresses a body comparison, and
* `contract infer` recomputes the hash independently before it will emit an
* index as wire-named.
*/ function namingOfLiveName(name) {
    const wire = parseWireName(name);
    return wire === void 0 ? {
        kind: "exact",
        name
    } : {
        kind: "wire",
        prefix: wire.prefix,
        hash: wire.hash
    };
}
const WIRE_NAME_PATTERN = /^(.+)_([0-9a-f]{8})$/;
/**
* Assembles a wire name from its user-supplied prefix and its 8-hex
* content-hash suffix. This module owns the `<prefix>_<hash>` format on both
* sides — construction here and parsing in {@link parseWireName} — so the two
* never drift.
*/ function formatWireName(prefix, hash) {
    return `${prefix}_${hash}`;
}
/**
* Splits a wire name (`<prefix>_<8hex>`) into its prefix and content-hash
* suffix. Returns `undefined` when the name does not follow the wire-name
* shape (e.g. an object created outside the toolchain) — callers treat such
* names as all-prefix. Consumed by introspection (prefix extraction) and by
* rename pairing (same hash, different prefix).
*/ function parseWireName(name) {
    const match = WIRE_NAME_PATTERN.exec(name);
    const prefix = match?.[1];
    const hash = match?.[2];
    if (prefix === void 0 || hash === void 0) return void 0;
    return {
        prefix,
        hash
    };
}
/**
* Stabilizes an authored SQL body (index expression, partial-index predicate,
* RLS policy predicate) for hashing: trim, and collapse runs of internal
* whitespace to a single space.
*
* This is deliberately minimal. The content hash is the equivalence relation
* for a wire-named object, and the wire name (prefix + hash) is the only
* thing ever compared — the hash is never recomputed from an introspected
* body, so there is no need to match the database's reprinted form. Minimal
* normalization also protects the no-collision property: aggressive rewriting
* (lowercasing, paren-stripping, cast-alias folding) risks collapsing two
* distinct bodies onto one hash.
*
* The normalizer is a stability commitment: any change re-suffixes all wire names.
*/ function normalizeSqlBody(sql) {
    return sql.replace(/\s+/g, " ").trim();
}
/**
* Returns the first 8 lowercase hex characters of the SHA-256 digest over the
* canonical content tuple for a check constraint:
*
*   [normalizeSqlBody(expression)]
*
* The predicate is the whole of a check's content — the constraint name,
* schema, and table are orthogonal to its equivalence. The one-element tuple
* keeps the encoding in the same shape as the index and RLS tuples so a member
* can be added later without re-reading which encoding a kind uses.
*
* The tuple order and encoding are a stability commitment: any change
* re-suffixes every wire name.
*/ function computeCheckContentHash(expression) {
    const tuple = JSON.stringify([
        normalizeSqlBody(expression)
    ]);
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(tuple).digest("hex").slice(0, 8);
}
/** The trailing segment a check's wire-name prefix carries, per kind. */ const CHECK_KIND_SUFFIX = {
    membership: "check",
    elementNotNull: "elem_not_null"
};
/**
* Composes the wire-name prefix of a derived CHECK constraint:
* `${table}_${column}_${kindSuffix}`, capped at the wire-name byte budget.
* Shared by contract authoring (naming emitted checks) and `contract infer`
* (recomputing the name a derived check would carry), so truncated and
* multibyte prefixes match by construction.
*/ function composeCheckWirePrefix(tableName, columnName, kind) {
    return truncateToWireNamePrefixBytes(`${tableName}_${columnName}_${CHECK_KIND_SUFFIX[kind]}`);
}
/**
* Every {@link CheckKind} value, read off {@link CHECK_KIND_SUFFIX}'s own keys
* so the enumeration can never drift out of step with it.
*/ const CHECK_KINDS = Object.keys(CHECK_KIND_SUFFIX).filter((kind)=>kind in CHECK_KIND_SUFFIX);
/**
* The wire-name prefixes derivation could produce for `tableName`: every
* {@link composeCheckWirePrefix} result crossing each of `columnNames` with
* each {@link CheckKind}. A check is derived iff its prefix is a member of
* this set.
*
* This is the prefix SHAPE only, not the full name-with-hash: it does not
* know which kind a specific column's type would actually derive (that needs
* the target's `renderCheckExpressions` hook, which callers of this function
* do not have in hand), so every column is conservatively treated as capable
* of producing every kind.
*/ function derivedCheckPrefixes(tableName, columnNames) {
    const prefixes = /* @__PURE__ */ new Set();
    for (const columnName of columnNames)for (const kind of CHECK_KINDS)prefixes.add(composeCheckWirePrefix(tableName, columnName, kind));
    return prefixes;
}
/**
* Returns the first 8 lowercase hex characters of the SHA-256 digest over the
* canonical content tuple for an index:
*
*   [normalizeSqlBody(expression), normalizeSqlBody(where), columns, unique, type, sortedOptions]
*
* Columns hash in authored order — column order is semantic in an index.
* Option values are `String()`-coerced (matching the loose option equality
* used for diffing) so a hash computed from typed contract values agrees with
* one recomputed from introspected reloptions strings. The prefix, schema,
* and table are excluded (they are orthogonal to index equivalence).
*
* The tuple order and encoding are a stability commitment with the same
* status as the RLS tuple: any change re-suffixes every wire name.
*/ /**
* Canonicalizes one index option VALUE to the `on`/`off` boolean spelling:
* JS booleans and the common catalog spellings (`pg_class.reloptions`
* stores whatever spelling the DDL used, so a live index may carry
* `'true'`/`'false'` or `'on'`/`'off'`) all map to one form; everything
* else via `String()` (fully specified for numbers, so no platform
* variance). Shared by the wire-name hash tuple, the node's option
* equality, and the DDL renderer, so an authored `{ fastupdate: true }`
* agrees with a live index created under any boolean spelling.
*/ function normalizeIndexOptionValue(value) {
    if (value === true || value === "true" || value === "on") return "on";
    if (value === false || value === "false" || value === "off") return "off";
    return String(value);
}
function computeIndexContentHash(parts) {
    const sortedOptions = Object.entries(parts.options ?? {}).map(([key, value])=>[
            key,
            normalizeIndexOptionValue(value)
        ]).sort(([a], [b])=>a < b ? -1 : a > b ? 1 : 0);
    const tuple = JSON.stringify([
        normalizeSqlBody(parts.expression ?? ""),
        normalizeSqlBody(parts.where ?? ""),
        parts.columns ?? [],
        parts.unique,
        parts.type ?? "",
        sortedOptions
    ]);
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(tuple).digest("hex").slice(0, 8);
}
/**
* Postgres truncates identifiers at `NAMEDATALEN - 1` = 63 **bytes**, not
* characters, and the wire name appends a 9-byte `_<8hex>` suffix — so a
* prefix is bounded at 54 bytes. A prefix of non-ASCII characters can sit well
* under 54 characters and still overrun: the database would silently truncate
* the name, leaving the declared object permanently unmatchable against the
* live one.
*/ const WIRE_NAME_PREFIX_MAX_BYTES = 54;
const utf8 = new TextEncoder();
/** UTF-8 byte length — the unit Postgres measures identifiers in. */ function byteLength(value) {
    return utf8.encode(value).length;
}
/**
* Rejects a wire-name prefix over {@link WIRE_NAME_PREFIX_MAX_BYTES}.
* `subject` opens the error message (e.g. `defineContract: policy prefix`).
*/ function assertWireNamePrefixLength(prefix, subject) {
    if (byteLength(prefix) > 54) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.WIRE_NAME_PREFIX_TOO_LONG", `${subject} "${prefix}" exceeds the 54-byte maximum (Postgres identifiers cap at 63 bytes and the wire name appends a 9-byte hash suffix).`, {
        meta: {
            prefix,
            maxBytes: 54
        }
    });
}
/**
* Shortens a DERIVED wire-name prefix to {@link WIRE_NAME_PREFIX_MAX_BYTES},
* cutting on a code-point boundary so a multibyte character is never split.
* Only derived prefixes truncate — an authored one throws
* ({@link assertWireNamePrefixLength}), because its author can shorten it.
*/ function truncateToWireNamePrefixBytes(prefix) {
    if (byteLength(prefix) <= 54) return prefix;
    let out = "";
    let bytes = 0;
    for (const character of prefix){
        const size = byteLength(character);
        if (bytes + size > 54) break;
        out += character;
        bytes += size;
    }
    return out;
}
;
 //# sourceMappingURL=naming-DKr4TJd7-Cszhq9RV.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/storage-table-ZzbR-xzQ-BRoTQE_2.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>PrimaryKey,
    "c",
    ()=>StorageTable,
    "i",
    ()=>Index,
    "l",
    ()=>UniqueConstraint,
    "n",
    ()=>ForeignKey,
    "o",
    ()=>SqlNode,
    "r",
    ()=>ForeignKeyReference,
    "s",
    ()=>StorageColumn,
    "t",
    ()=>CheckConstraint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/contract-validation-error-DEiWp_EI-CRwtUgRw.mjs [app-rsc] (ecmascript) <export t as ContractValidationError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__IRNodeBase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/ir-CV5d1FJ0.mjs [app-rsc] (ecmascript) <export t as IRNodeBase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/ir-CV5d1FJ0.mjs [app-rsc] (ecmascript) <export u as freezeNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-rsc] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$id$2d$asbWpwMw$2d$3yxn$2d$tRe$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__asNamespaceId$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/namespace-id-asbWpwMw-3yxn-tRe.mjs [app-rsc] (ecmascript) <export t as asNamespaceId>");
;
;
;
;
;
//#region ../../../2-sql/1-core/contract/dist/storage-table-ZzbR-xzQ.mjs
/**
* SQL family IR node base. Carries the family-level `kind` discriminator
* `'sql'` and inherits the framework's `freezeNode` affordance.
*
* Single family-level discriminator (not per-leaf) reflects the fact that
* SQL IR has no polymorphic dispatch today — verifiers and serializers
* walk by structural position (`storage.tables[name].columns[name]`),
* not by inspecting `kind`. The abstract bar for per-leaf discriminators
* isn't earned until a future polymorphic consumer arrives.
*
* `kind` is installed as a non-enumerable own property on every instance,
* which keeps three things clean simultaneously:
*
* - `JSON.stringify(node)` produces the canonical pre-lift JSON envelope
*   shape (no `kind` field), so emitted contract.json files and the
*   `validateSqlContractFully` arktype schemas stay unchanged.
* - Test assertions that use `toEqual({...})` against the pre-lift flat
*   shape continue to pass — only enumerable own properties are
*   compared.
* - Direct access (`node.kind`) and runtime narrowing
*   (`if (node.kind === 'sql')`) still work, so future polymorphic
*   dispatch can begin reading `kind` without a runtime change.
*
* Future per-leaf overrides land cleanly: a class that gains a
* polymorphic-dispatch consumer (e.g. an enum type instance walked
* alongside other types) overrides `kind` with its narrower literal
* at that leaf level. Per-leaf overrides will use enumerable kind
* (matching the Mongo per-class-discriminator precedent) because they
* encode dispatch-relevant information that callers need to see in
* JSON envelopes; the family-level `'sql'` is uniform across all SQL
* IR and carries no dispatch-relevant information.
*/ var SqlNode = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__IRNodeBase$3e$__["IRNodeBase"] {
    kind;
    constructor(){
        super();
        Object.defineProperty(this, "kind", {
            value: "sql",
            writable: false,
            enumerable: false,
            configurable: true
        });
    }
};
/**
* SQL Contract IR node for a table-level check constraint, name-identified:
* `name` is the full physical name; a present `prefix` marks the constraint as
* wire-named (`name` is `formatWireName(prefix, <8hex>)` over the expression's
* content hash), an absent `prefix` marks it exact (the name is adopted
* verbatim). This is the convention indexes and RLS policies already use — see
* ADR 234, "Content-addressed wire names for Postgres-normalized objects".
*
* The predicate is opaque: one SQL string, never parsed and never rendered
* from structured parts. A database reprints predicates in its own normalized
* form, so a wire-named check is compared by name — the hash already commits
* to the expression the contract declared.
*/ var CheckConstraint = class CheckConstraint extends SqlNode {
    name;
    expression;
    constructor(input){
        super();
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(input.naming);
        if (name.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"]("CheckConstraint: every check constraint carries a full physical name.", "storage");
        this.name = name;
        if (input.naming.kind === "wire") this.prefix = input.naming.prefix;
        this.expression = input.expression;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    /**
	* Normalizes either shape into an instance: an existing `CheckConstraint`
	* passes through, canonical input is constructed. Callers that accept
	* "instance or input" go through this, so the constructor keeps one
	* canonical shape instead of widening to a union.
	*/ static from(value) {
        return value instanceof CheckConstraint ? value : new CheckConstraint(value);
    }
};
/**
* SQL Contract IR node for a table-level secondary index, name-identified:
* `name` is the full physical name; a present `prefix` marks the index as
* wire-named (`name` is `formatWireName(prefix, <8hex>)`), an absent `prefix`
* marks it exact (the name is adopted verbatim).
*
* `expression`, `where`, and `unique` are genuine SQL-family attributes —
* functional and partial indexes are standard SQL supported natively by
* Postgres and SQLite alike, and the family IR must be able to represent
* anything any SQL target can introspect. A target declining to AUTHOR them
* (SQLite's rejection at namespace construction) is a capability decision,
* not evidence of target-specificity.
*
* Note that this class shadows the global TypeScript `Index` lib type
* at the family-shared name; consumer files that need both should
* alias one (e.g.
* `import { Index as SqlIndexNode } from '@internal/sql-contract/types'`).
*/ var Index = class Index extends SqlNode {
    name;
    unique;
    constructor(input){
        super();
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(input.naming);
        if (name.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"]("Index: every index carries a full physical name; an expression index must be explicitly named (a default name cannot be derived from an expression).", "storage");
        if (input.columns === void 0 === (input.expression === void 0)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Index "${name}": exactly one of columns or expression must be set.`, "storage");
        this.name = name;
        this.unique = input.unique;
        if (input.naming.kind === "wire") this.prefix = input.naming.prefix;
        if (input.columns !== void 0) this.columns = input.columns;
        if (input.expression !== void 0) this.expression = input.expression;
        if (input.where !== void 0) this.where = input.where;
        if (input.type !== void 0) this.type = input.type;
        if (input.options !== void 0) this.options = input.options;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    static from(value) {
        return value instanceof Index ? value : new Index(value);
    }
};
/**
* SQL Contract IR node for one side (source or target) of a foreign-key
* declaration. Carries the full coordinate: namespace, table, and columns.
*
* Cross-space discrimination is based on `spaceId` presence: absent means
* local (same contract-space); present means cross-space (the referenced
* table lives in the contract-space identified by `spaceId`).
*
* For local references `spaceId` is absent from JSON, keeping the serialized
* shape byte-identical to contracts authored before cross-space support was
* added. For cross-space references `spaceId` appears in JSON so round-trips
* are lossless.
*
* Use `UNBOUND_NAMESPACE_ID` from `@internal/framework-components/ir`
* as the sentinel `namespaceId` for single-namespace (unbound) references.
*/ var ForeignKeyReference = class ForeignKeyReference extends SqlNode {
    namespaceId;
    tableName;
    columns;
    constructor(input){
        super();
        this.namespaceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$namespace$2d$id$2d$asbWpwMw$2d$3yxn$2d$tRe$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__asNamespaceId$3e$__["asNamespaceId"])(input.namespaceId);
        this.tableName = input.tableName;
        this.columns = input.columns;
        if (input.spaceId !== void 0) this.spaceId = input.spaceId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    static from(value) {
        return value instanceof ForeignKeyReference ? value : new ForeignKeyReference(value);
    }
};
/**
* SQL Contract IR node for a table-level foreign-key declaration — the
* referential constraint only (source, target, `onDelete`/`onUpdate`).
*
* A persisted `foreignKeys[]` entry always denotes a real constraint: whether
* to emit the constraint at all, and whether to back it with an index, are
* authoring-time decisions (PSL `@relation(index:)`, TS `fk({ constraint,
* index })`) resolved once at `contract emit` — a `constraint: false` FK
* simply has no entry here, and a backing index (if any) is its own discrete,
* named entry in the table's `indexes[]`.
*
* Each FK carries explicit `source` and `target` {@link ForeignKeyReference}
* coordinates (namespace, table, columns). For single-namespace contracts the
* sentinel `UNBOUND_NAMESPACE_ID` appears on both sides.
*
* The nested references are normalised to {@link ForeignKeyReference}
* instances inside the constructor so downstream walks see a uniform AST
* regardless of whether the input was a JSON literal or an already-constructed
* class instance.
*/ var ForeignKey = class ForeignKey extends SqlNode {
    source;
    target;
    constructor(input){
        super();
        this.source = ForeignKeyReference.from(input.source);
        this.target = ForeignKeyReference.from(input.target);
        if (input.name !== void 0) this.name = input.name;
        if (input.onDelete !== void 0) this.onDelete = input.onDelete;
        if (input.onUpdate !== void 0) this.onUpdate = input.onUpdate;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    static from(value) {
        return value instanceof ForeignKey ? value : new ForeignKey(value);
    }
};
/**
* SQL Contract IR node for a table's primary-key constraint.
*/ var PrimaryKey = class PrimaryKey extends SqlNode {
    columns;
    constructor(input){
        super();
        this.columns = input.columns;
        if (input.name !== void 0) this.name = input.name;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    static from(value) {
        return value instanceof PrimaryKey ? value : new PrimaryKey(value);
    }
};
/**
* SQL Contract IR node for a single column entry in `StorageTable.columns`.
*
* Single concrete family-shared class — every SQL target reads the
* same column shape today, so there is no per-target subclass. The
* class type accepts any caller that constructs via
* `new StorageColumn(input)`; literal construction sites must pass
* through the constructor or the family-base hydration walker.
*
* The column's `name` is not on the class — columns are keyed by name
* in the parent `StorageTable.columns: Record<string, StorageColumn>`
* map, so a `name` field would be redundant with the key.
*/ var StorageColumn = class StorageColumn extends SqlNode {
    nativeType;
    codecId;
    nullable;
    constructor(input){
        super();
        this.nativeType = input.nativeType;
        this.codecId = input.codecId;
        this.nullable = input.nullable;
        if (input.many !== void 0) this.many = input.many;
        if (input.noCheck !== void 0) this.noCheck = input.noCheck;
        if (input.typeParams !== void 0) this.typeParams = input.typeParams;
        if (input.typeRef !== void 0) this.typeRef = input.typeRef;
        if (input.default !== void 0) this.default = input.default;
        if (input.control !== void 0) this.control = input.control;
        if (input.valueSet !== void 0) this.valueSet = input.valueSet;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    static from(value) {
        return value instanceof StorageColumn ? value : new StorageColumn(value);
    }
};
/**
* SQL Contract IR node for a table-level unique constraint.
*/ var UniqueConstraint = class UniqueConstraint extends SqlNode {
    columns;
    constructor(input){
        super();
        this.columns = input.columns;
        if (input.name !== void 0) this.name = input.name;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    static from(value) {
        return value instanceof UniqueConstraint ? value : new UniqueConstraint(value);
    }
};
/**
* SQL Contract IR node for a single table entry in a namespace's
* `tables` map.
*
* The constructor normalises nested IR-class fields (columns, primary
* key, uniques, indexes, foreign keys) into the appropriate class
* instances so downstream walks see a uniform AST regardless of whether
* the input was a JSON literal or an already-constructed class.
*
* The table's `name` is not on the class — tables are keyed by name in
* the parent namespace's `tables: Record<string, StorageTable>` map.
*/ var StorageTable = class StorageTable extends SqlNode {
    columns;
    uniques;
    indexes;
    foreignKeys;
    constructor(input){
        super();
        this.columns = Object.freeze(Object.fromEntries(Object.entries(input.columns).map(([name, col])=>[
                name,
                StorageColumn.from(col)
            ])));
        if (input.primaryKey !== void 0) this.primaryKey = PrimaryKey.from(input.primaryKey);
        this.uniques = Object.freeze(input.uniques.map(UniqueConstraint.from));
        this.indexes = Object.freeze(input.indexes.map(Index.from));
        this.foreignKeys = Object.freeze(input.foreignKeys.map(ForeignKey.from));
        if (input.control !== void 0) this.control = input.control;
        if (input.checks !== void 0 && input.checks.length > 0) this.checks = Object.freeze(input.checks.map(CheckConstraint.from));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    /**
	* Runtime guard that a namespace `table` entry is really a `StorageTable`.
	* The compiler already types the entry as `StorageTable`, but a
	* freshly-deserialized contract may carry plain JSON at that slot until
	* hydration; this duck-types the structural shape. Accepts `undefined` so
	* optional-chained entry lookups pass straight through.
	*/ static is(value) {
        if (typeof value !== "object" || value === null) return false;
        return "columns" in value && "uniques" in value && "indexes" in value && "foreignKeys" in value;
    }
    static assert(value, coordinate) {
        if (!StorageTable.is(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Expected a StorageTable at ${coordinate}`);
    }
};
;
 //# sourceMappingURL=storage-table-ZzbR-xzQ-BRoTQE_2.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/storage-table-ZzbR-xzQ-BRoTQE_2.mjs [app-rsc] (ecmascript) <export o as SqlNode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$storage$2d$table$2d$ZzbR$2d$xzQ$2d$BRoTQE_2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$storage$2d$table$2d$ZzbR$2d$xzQ$2d$BRoTQE_2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/storage-table-ZzbR-xzQ-BRoTQE_2.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export r as BinaryExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BinaryExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export a as CastExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CastExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export m as FunctionCallExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionCallExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["m"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export D as OrExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["D"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export l as SqlCharCodec>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlCharCodec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export d as SqlFloatCodec>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlFloatCodec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export p as SqlIntCodec>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlIntCodec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export _ as SqlVarcharCodec>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlVarcharCodec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["_"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export A as sqlCharDescriptor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sqlCharDescriptor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["A"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export I as sqlFloatDescriptor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sqlFloatDescriptor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export V as sqlIntDescriptor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sqlIntDescriptor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["V"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export G as sqlTextDescriptor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sqlTextDescriptor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["G"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export Y as sqlVarcharDescriptor>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sqlVarcharDescriptor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Y"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/contract-errors-BCN6RVI5-5IHBF_lg.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>contractError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-rsc] (ecmascript) <export o as structuredError>");
;
//#region ../../../2-sql/1-core/contract/dist/contract-errors-BCN6RVI5.mjs
function contractError(code, message, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])(code, message, options);
}
;
 //# sourceMappingURL=contract-errors-BCN6RVI5-5IHBF_lg.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/resolve-storage-table-DZsfnzeW.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>resolveStorageTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/contract-errors-BCN6RVI5-5IHBF_lg.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__l__as__entityAt$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/ir-CV5d1FJ0.mjs [app-rsc] (ecmascript) <export l as entityAt>");
;
;
//#region ../../../2-sql/1-core/contract/dist/resolve-storage-table.mjs
/**
* Resolve a bare storage table name to its namespace coordinate and table IR.
*
* When `namespaceId` is supplied, the table is resolved strictly within that
* namespace (no scan). When omitted, a bare name unique across namespaces
* resolves to its sole namespace; a bare name declared in more than one
* namespace throws a fail-fast diagnostic naming the candidate namespaces
* rather than silently selecting the first match.
*/ function resolveStorageTable(storage, tableName, namespaceId) {
    if (namespaceId !== void 0) {
        const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__l__as__entityAt$3e$__["entityAt"])(storage, {
            namespaceId,
            entityKind: "table",
            entityName: tableName
        });
        return table === void 0 ? void 0 : {
            namespaceId,
            table
        };
    }
    const matches = [];
    for (const candidateNamespaceId of Object.keys(storage.namespaces)){
        const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__l__as__entityAt$3e$__["entityAt"])(storage, {
            namespaceId: candidateNamespaceId,
            entityKind: "table",
            entityName: tableName
        });
        if (table !== void 0) matches.push({
            namespaceId: candidateNamespaceId,
            table
        });
    }
    if (matches.length > 1) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("CONTRACT.TABLE_AMBIGUOUS", `Storage table "${tableName}" is ambiguous across namespaces [${matches.map((match)=>match.namespaceId).sort().join(", ")}]; qualify it with a namespace coordinate.`, {
        meta: {
            tableName,
            candidates: matches.map((match)=>match.namespaceId).sort()
        }
    });
    return matches[0];
}
;
 //# sourceMappingURL=resolve-storage-table-DZsfnzeW.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-D0B65hip.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>SqlNamespaceBase,
    "c",
    ()=>isMaterializedSqlNamespace,
    "d",
    ()=>toStorageTypeInstance,
    "l",
    ()=>isSqlAuthoringContributions,
    "n",
    ()=>DEFAULT_FK_CONSTRAINT,
    "o",
    ()=>SqlStorage,
    "r",
    ()=>DEFAULT_FK_INDEX,
    "s",
    ()=>applyFkDefaults,
    "t",
    ()=>CODEC_INSTANCE_KIND,
    "u",
    ()=>isStorageTypeInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$storage$2d$table$2d$ZzbR$2d$xzQ$2d$BRoTQE_2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/storage-table-ZzbR-xzQ-BRoTQE_2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__NamespaceBase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/ir-CV5d1FJ0.mjs [app-rsc] (ecmascript) <export n as NamespaceBase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/ir-CV5d1FJ0.mjs [app-rsc] (ecmascript) <export u as freezeNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/is-plain-record-CUofyVQ7-DWEzdhIx.mjs [app-rsc] (ecmascript) <export t as isPlainRecord>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-rsc] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DXmHIbAr$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__RelationKeys$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/runtime-DXmHIbAr.mjs [app-rsc] (ecmascript) <export r as RelationKeys>");
;
;
;
;
//#region ../../../2-sql/1-core/contract/dist/types.mjs
/**
* Sentinel kind for the legacy codec-triple shape persisted under
* `SqlStorage.types`. Plain JSON-clean object literals carry this
* discriminator so the polymorphic slot dispatch can route them down
* the codec path while target-specific IR class instances (e.g. the
* Postgres enum class) keep their own narrower `kind` literal.
*/ const CODEC_INSTANCE_KIND = "codec-instance";
/**
* Stamp the codec-instance `kind` discriminator on a caller-supplied
* codec triple. Idempotent: input that already carries the discriminator
* passes through unchanged. Missing `typeParams` is normalised to `{}`.
*/ function toStorageTypeInstance(input) {
    return {
        kind: CODEC_INSTANCE_KIND,
        codecId: input.codecId,
        nativeType: input.nativeType,
        typeParams: input.typeParams ?? {}
    };
}
/**
* Type-guard for codec-typed entries on the polymorphic
* `SqlStorage.types` slot. Distinguishes `StorageTypeInstance` from
* any class-instance kinds a target pack contributes.
*/ function isStorageTypeInstance(value) {
    if (typeof value !== "object" || value === null) return false;
    return value.kind === CODEC_INSTANCE_KIND;
}
/**
* Narrows framework `AuthoringContributions` to the SQL-family shape by testing
* for the SQL-specific `createNamespace` capability.
*/ function isSqlAuthoringContributions(authoring) {
    if (authoring === void 0 || !Object.hasOwn(authoring, "createNamespace")) return false;
    return typeof Reflect.get(authoring, "createNamespace") === "function";
}
/**
* Abstract SQL family namespace base class. Target concretions (`PostgresSchema`,
* `SqliteDatabase`, …) extend this — it is never instantiated directly.
* `entries` is the open ADR 224 dictionary: `entries[entityKind][entityName]`
* addresses any entity.
*/ var SqlNamespaceBase = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__NamespaceBase$3e$__["NamespaceBase"] {
};
/**
* Realm-safe guard for hydrated `SqlNamespaceBase` concretions. Checks
* `qualifyTable` structurally instead of `instanceof NamespaceBase`, so it
* survives duplicate-module boundaries (e.g. dist e2e where the target and
* the family carry separate copies of `@internal/framework-components`).
*
* Every concrete `SqlNamespaceBase` subclass (`PostgresSchema`, `SqliteDatabase`,
* `TestSqlNamespace`, …) implements `qualifyTable`. Raw `SqlNamespaceInput`
* objects (`{ id, entries }`) do not.
*/ function isMaterializedSqlNamespace(x) {
    if (typeof x !== "object" || x === null || !("qualifyTable" in x)) return false;
    return typeof x.qualifyTable === "function";
}
var SqlStorage = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$storage$2d$table$2d$ZzbR$2d$xzQ$2d$BRoTQE_2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"] {
    storageHash;
    namespaces;
    constructor(input){
        super();
        this.storageHash = input.storageHash;
        this.namespaces = Object.freeze(input.namespaces);
        if (input.types !== void 0) this.types = Object.freeze(Object.fromEntries(Object.entries(input.types).map(([name, ti])=>[
                name,
                normaliseTypeEntry(name, ti)
            ])));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
};
/**
* Strict polymorphic-slot dispatch for `SqlStorage.types` entries.
* Every entry must carry a `kind: 'codec-instance'` discriminator or
* be an already-constructed `StorageTypeInstance`. Untagged or
* unrecognised inputs throw a diagnostic naming the entry and its
* `kind`, so format drift surfaces loudly at the deserializer
* boundary instead of slipping past the seam and corrupting
* downstream IR walks.
*
* Codec-triple authors that have an untagged shape on hand can call
* `toStorageTypeInstance(...)` (which stamps the `'codec-instance'`
* discriminator) before constructing `SqlStorage`. On-disk reads
* cross `familyInstance.deserializeContract` first; the structural
* arktype schema rejects untagged entries earlier, so this throw
* only fires for in-memory authoring bugs.
*/ function normaliseTypeEntry(name, entry) {
    if (isStorageTypeInstance(entry)) {
        if ("typeParams" in entry) return entry;
        return toStorageTypeInstance(entry);
    }
    const rawKind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(entry) ? entry["kind"] : void 0;
    const kindDescription = rawKind === void 0 ? "missing `kind` discriminator" : `unrecognised \`kind\` discriminator ${JSON.stringify(rawKind)}`;
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`storage.types[${JSON.stringify(name)}] has ${kindDescription}; expected ${JSON.stringify("codec-instance")}. Untagged codec triples should be wrapped with toStorageTypeInstance(...) before construction.`);
}
const DEFAULT_FK_CONSTRAINT = true;
const DEFAULT_FK_INDEX = true;
function applyFkDefaults(fk, overrideDefaults) {
    return {
        constraint: fk.constraint ?? overrideDefaults?.constraint ?? true,
        index: fk.index ?? overrideDefaults?.index ?? true
    };
}
;
 //# sourceMappingURL=types-D0B65hip.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/codec-descriptor-registry-ECZ4ohtG.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>codecRefForStorageColumn,
    "t",
    ()=>buildCodecDescriptorRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$resolve$2d$storage$2d$table$2d$DZsfnzeW$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/resolve-storage-table-DZsfnzeW.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$D0B65hip$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-D0B65hip.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-rsc] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-rsc] (ecmascript) <export t as blindCast>");
;
;
;
;
//#region ../../../2-sql/4-lanes/relational-core/dist/exports/codec-descriptor-registry.mjs
/**
* Derive the canonical {@link CodecRef} for a `(table, column)` pair against a {@link SqlStorage}. This is the build-time path every column-bound `ParamRef` / `ProjectionItem` uses to stamp its `codec` slot before the AST is handed to the runtime — the runtime resolver then materialises a memoised {@link import('@internal/sql-relational-core/ast').Codec} for the same `CodecRef` via `forCodecRef`.
*
* Resolution rules over namespace `entries.table[table].columns[column]`:
*
* - `typeRef` column → `{codecId, typeParams}` from `storage.types[typeRef]` (multiple columns sharing the typeRef share one ref → one memoised codec).
* - inline `typeParams` column → `{codecId, typeParams}` from the column itself.
* - non-parameterized column → `{codecId}` with `typeParams` undefined.
*
* Returns `undefined` when the table or column is unknown, or when a `typeRef` column references a `storage.types` entry that does not exist.
*
* `namespaceId` leads the coordinate args and is always supplied: every
* model/table sits in an explicit namespace, so the table is resolved strictly
* within that namespace (see {@link resolveStorageTable}).
*/ function codecRefForStorageColumn(storage, namespaceId, tableName, columnName) {
    const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$resolve$2d$storage$2d$table$2d$DZsfnzeW$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(storage, tableName, namespaceId);
    if (resolved === void 0) return void 0;
    const columnDef = resolved.table.columns[columnName];
    if (!columnDef) return void 0;
    if (columnDef.typeRef !== void 0) {
        const instance = storage.types?.[columnDef.typeRef];
        if (!instance) return void 0;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$D0B65hip$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["u"])(instance)) {
            const instanceParams = instance.typeParams;
            return instanceParams !== void 0 && Object.keys(instanceParams).length > 0 ? {
                codecId: instance.codecId,
                typeParams: instanceParams
            } : {
                codecId: instance.codecId
            };
        }
        return;
    }
    if (columnDef.typeParams !== void 0 && Object.keys(columnDef.typeParams).length > 0) {
        const typeParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(columnDef.typeParams);
        return columnDef.many ? {
            codecId: columnDef.codecId,
            typeParams,
            many: true
        } : {
            codecId: columnDef.codecId,
            typeParams
        };
    }
    return columnDef.many ? {
        codecId: columnDef.codecId,
        many: true
    } : {
        codecId: columnDef.codecId
    };
}
/**
* Build a {@link CodecDescriptorRegistry} from a flat descriptor list.
*
* Used by:
* - Each codec-shipping package's `core/registry.ts` to expose a package-scoped registry as the public consumer surface (replacing raw descriptor-array exports). See ADR 208.
* - The runtime's `buildExecutionContext` to construct the contract-bound combined registry from every contributor's `codecs:` slot.
*
* The descriptor map is heterogeneous in `P` — each codec id has its own params shape. The public {@link CodecDescriptorRegistry} interface widens to `CodecDescriptor<unknown>` and consumers narrow per codec id at the call site (the descriptor's `paramsSchema` validates JSON-sourced params before the factory ever sees them, so the runtime narrow is safe). The cast at registration goes through `unknown` because
* `CodecDescriptor<P>` is invariant in `P` (the `factory` and `renderOutputType` slots use `P` contravariantly).
*/ function buildCodecDescriptorRegistry(allDescriptors, storage) {
    const byId = /* @__PURE__ */ new Map();
    const byTargetType = /* @__PURE__ */ new Map();
    for (const descriptor of allDescriptors){
        if (byId.has(descriptor.codecId)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.DUPLICATE_CODEC", `Duplicate codec descriptor id: '${descriptor.codecId}' — registered twice during registry construction. Each codecId must be contributed by exactly one component (target / adapter / extension pack).`, {
            meta: {
                codecId: descriptor.codecId
            }
        });
        const widened = descriptor;
        byId.set(descriptor.codecId, widened);
        for (const targetType of descriptor.targetTypes){
            const list = byTargetType.get(targetType);
            if (list) list.push(widened);
            else byTargetType.set(targetType, [
                widened
            ]);
        }
    }
    return {
        descriptorFor (codecId) {
            return byId.get(codecId);
        },
        codecRefForColumn (namespaceId, table, column) {
            if (!storage) return void 0;
            return codecRefForStorageColumn(storage, namespaceId, table, column);
        },
        *values () {
            yield* byId.values();
        },
        byTargetType (targetType) {
            return byTargetType.get(targetType) ?? Object.freeze([]);
        }
    };
}
;
 //# sourceMappingURL=codec-descriptor-registry-ECZ4ohtG.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/codec-descriptor-registry-ECZ4ohtG.mjs [app-rsc] (ecmascript) <export t as buildCodecDescriptorRegistry>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCodecDescriptorRegistry",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$codec$2d$descriptor$2d$registry$2d$ECZ4ohtG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$codec$2d$descriptor$2d$registry$2d$ECZ4ohtG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/codec-descriptor-registry-ECZ4ohtG.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export I as TableSource>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableSource",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-D0B65hip.mjs [app-rsc] (ecmascript) <locals> <export a as SqlNamespaceBase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlNamespaceBase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$D0B65hip$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$D0B65hip$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-D0B65hip.mjs [app-rsc] (ecmascript) <locals>");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript) <export l as nameOf>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nameOf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript) <export m as parseNaming>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseNaming",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["m"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/serialized-index-nBTwanKy-_ddEK4tk.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>isStorageValueSet,
    "n",
    ()=>checkConstraintInputFromSerialized,
    "r",
    ()=>indexInputFromSerialized,
    "t",
    ()=>StorageValueSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$storage$2d$table$2d$ZzbR$2d$xzQ$2d$BRoTQE_2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/storage-table-ZzbR-xzQ-BRoTQE_2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/contract-validation-error-DEiWp_EI-CRwtUgRw.mjs [app-rsc] (ecmascript) <export t as ContractValidationError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/ir-CV5d1FJ0.mjs [app-rsc] (ecmascript) <export u as freezeNode>");
;
;
;
;
//#region ../../../2-sql/1-core/contract/dist/serialized-index-nBTwanKy.mjs
/**
* SQL Contract IR node for a value-set entry in a namespace's `valueSet`
* map (`SqlNamespace.entries.valueSet`).
*
* A value-set records the ordered set of permitted codec-encoded values for
* an enum-like column restriction. It does not carry a `codecId` — the
* column that references it already holds the codec; the value-set holds
* only the permitted values.
*
* The node's `kind` is enumerable (`'valueSet'`) so the JSON envelope
* carries the discriminator and the serializer hydration walker can
* dispatch on it. This follows the per-leaf enumerable-kind convention
* established in the SQL-node comment (future polymorphic dispatch on
* namespace entries needs the discriminator in JSON).
*
* The entry's name is not on the class — value-sets are keyed by name in
* the parent namespace's `valueSet: Record<string, StorageValueSet>` map.
*/ var StorageValueSet = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$storage$2d$table$2d$ZzbR$2d$xzQ$2d$BRoTQE_2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"] {
    kind = "valueSet";
    values;
    constructor(input){
        super();
        this.values = Object.freeze([
            ...input.values
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
};
function isStorageValueSet(value) {
    if (typeof value !== "object" || value === null) return false;
    return "kind" in value && value.kind === "valueSet" && "values" in value;
}
/**
* Hydrates one stored check constraint into constructor input. `parseNaming`
* is what rejects a hand-edited file whose `prefix` and `name` disagree.
*/ function checkConstraintInputFromSerialized(flat) {
    return {
        naming: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["m"])(flat.name, flat.prefix),
        expression: flat.expression
    };
}
/**
* Hydrates one stored index into constructor input. The parameter is typed
* but the values are whatever the file held, so each field the union depends
* on is checked here rather than downstream — by the time `Index` sees the
* data it is already a valid union.
*/ function indexInputFromSerialized(flat) {
    if (flat.name === void 0 || flat.name.length === 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"]("Index: every index carries a full physical name; an expression index must be explicitly named (a default name cannot be derived from an expression).", "storage");
    if (flat.columns === void 0 === (flat.expression === void 0)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Index "${flat.name}": exactly one of columns or expression must be set.`, "storage");
    const carried = {
        naming: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["m"])(flat.name, flat.prefix),
        where: flat.where,
        unique: flat.unique,
        type: flat.type,
        options: flat.options
    };
    return flat.expression !== void 0 ? {
        ...carried,
        expression: flat.expression
    } : {
        ...carried,
        columns: flat.columns ?? []
    };
}
;
 //# sourceMappingURL=serialized-index-nBTwanKy-_ddEK4tk.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/entity-kinds-D7vwoN_T-CCBwFJy0.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>ForeignKeyReferenceSchema,
    "c",
    ()=>IndexSchema,
    "d",
    ()=>StorageValueSetSchema,
    "f",
    ()=>composeSqlEntityKinds,
    "i",
    ()=>ColumnDefaultSchema,
    "l",
    ()=>ReferentialActionSchema,
    "m",
    ()=>valueSetEntityKind,
    "n",
    ()=>ColumnDefaultFunctionSchema,
    "o",
    ()=>ForeignKeySchema,
    "p",
    ()=>tableEntityKind,
    "r",
    ()=>ColumnDefaultLiteralSchema,
    "s",
    ()=>ForeignKeySourceSchema,
    "t",
    ()=>CheckConstraintSchema,
    "u",
    ()=>StorageTableSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/contract-errors-BCN6RVI5-5IHBF_lg.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$storage$2d$table$2d$ZzbR$2d$xzQ$2d$BRoTQE_2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/storage-table-ZzbR-xzQ-BRoTQE_2.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$serialized$2d$index$2d$nBTwanKy$2d$_ddEK4tk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/serialized-index-nBTwanKy-_ddEK4tk.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
;
;
;
;
;
//#region ../../../2-sql/1-core/contract/dist/entity-kinds-D7vwoN_T.mjs
const literalKindSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("'literal'");
const functionKindSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("'function'");
const ControlPolicySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("'managed' | 'tolerated' | 'external' | 'observed'");
const ColumnDefaultLiteralSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    kind: literalKindSchema,
    value: "string | number | boolean | null | unknown[] | Record<string, unknown>"
});
const ColumnDefaultFunctionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    kind: functionKindSchema,
    expression: "string"
});
const ColumnDefaultSchema = ColumnDefaultLiteralSchema.or(ColumnDefaultFunctionSchema);
const StorageColumnSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    nativeType: "string",
    codecId: "string",
    nullable: "boolean",
    "many?": "boolean",
    "typeParams?": "Record<string, unknown>",
    "typeRef?": "string",
    "default?": ColumnDefaultSchema,
    "control?": ControlPolicySchema,
    "valueSet?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        plane: "'storage'",
        namespaceId: "string",
        entityKind: "'valueSet'",
        entityName: "string",
        "spaceId?": "string"
    }),
    "noCheck?": "(\"membership\" | \"elementNotNull\")[]"
}).narrow((col, ctx)=>{
    if (col.typeParams !== void 0 && col.typeRef !== void 0) return ctx.mustBe("a column with either typeParams or typeRef, not both");
    if (col.noCheck !== void 0) {
        if (col.noCheck.length === 0) return ctx.mustBe("a column whose noCheck array is non-empty (omit the key when enforced)");
        for(let i = 1; i < col.noCheck.length; i += 1){
            const previous = col.noCheck[i - 1];
            const current = col.noCheck[i];
            if (previous !== void 0 && current !== void 0 && previous >= current) return ctx.mustBe("a column whose noCheck kinds are unique and sorted ascending lexicographically");
        }
    }
    return true;
});
/**
* Storage value-set entry under `storage.namespaces[id].entries.valueSet[name]`.
* Carries a `kind: 'valueSet'` discriminator (enumerable, survives JSON) and an
* ordered `values` array of codec-encoded permitted values.
*/ const StorageValueSetSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    kind: "'valueSet'",
    values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string | number | boolean | null | unknown[] | Record<string, unknown>").array().readonly()
});
const PrimaryKeySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    columns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    "name?": "string"
});
const UniqueConstraintSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    columns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    "name?": "string"
});
const IndexSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    name: "string",
    "prefix?": "string",
    "columns?": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    "expression?": "string",
    "where?": "string",
    unique: "boolean",
    "type?": "string",
    "options?": "Record<string, unknown>"
});
const ForeignKeyReferenceSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    namespaceId: "string",
    tableName: "string",
    columns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    "spaceId?": "string"
});
const ForeignKeySourceSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    namespaceId: "string",
    tableName: "string",
    columns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly()
});
const ReferentialActionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type("'noAction' | 'restrict' | 'cascade' | 'setNull' | 'setDefault'");
const ForeignKeySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    source: ForeignKeySourceSchema,
    target: ForeignKeyReferenceSchema,
    "name?": "string",
    "onDelete?": ReferentialActionSchema,
    "onUpdate?": ReferentialActionSchema
});
const CheckConstraintSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    name: "string",
    "prefix?": "string",
    expression: "string"
});
const StorageTableSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    columns: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "[string]": StorageColumnSchema
    }),
    "primaryKey?": PrimaryKeySchema,
    uniques: UniqueConstraintSchema.array().readonly(),
    indexes: IndexSchema.array().readonly(),
    foreignKeys: ForeignKeySchema.array().readonly(),
    "control?": ControlPolicySchema,
    "checks?": CheckConstraintSchema.array().readonly()
});
const tableEntityKind = {
    kind: "table",
    schema: StorageTableSchema,
    construct: (input)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$storage$2d$table$2d$ZzbR$2d$xzQ$2d$BRoTQE_2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"]({
            ...input,
            indexes: input.indexes.map((i)=>i instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$storage$2d$table$2d$ZzbR$2d$xzQ$2d$BRoTQE_2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"] ? i : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$serialized$2d$index$2d$nBTwanKy$2d$_ddEK4tk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(i)),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("checks", input.checks?.map((c)=>c instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$storage$2d$table$2d$ZzbR$2d$xzQ$2d$BRoTQE_2$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"] ? c : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$serialized$2d$index$2d$nBTwanKy$2d$_ddEK4tk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(c)))
        })
};
const valueSetEntityKind = {
    kind: "valueSet",
    schema: StorageValueSetSchema,
    construct: (input)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$serialized$2d$index$2d$nBTwanKy$2d$_ddEK4tk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"](input)
};
/**
* Assembles the `kind → descriptor` registry for SQL namespaces: the built-in
* `table` and `valueSet` kinds plus any target `packKinds`. This builds the
* lookup table — it does not touch contract data. `hydrateNamespaceEntities`
* later consumes this registry to turn a namespace's raw entries into IR
* instances, and `createSqlContractSchema` derives validation from the same
* registry. Throws on a duplicate kind.
*/ function composeSqlEntityKinds(packKinds = []) {
    const kinds = /* @__PURE__ */ new Map([
        [
            "table",
            tableEntityKind
        ],
        [
            "valueSet",
            valueSetEntityKind
        ]
    ]);
    for (const descriptor of packKinds){
        if (kinds.has(descriptor.kind)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("CONTRACT.PACK_CONTRIBUTION_INVALID", `composeSqlEntityKinds: duplicate entity kind "${descriptor.kind}" — each kind may be registered only once`, {
            meta: {
                entityKind: descriptor.kind
            }
        });
        kinds.set(descriptor.kind, descriptor);
    }
    return kinds;
}
;
 //# sourceMappingURL=entity-kinds-D7vwoN_T-CCBwFJy0.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/entity-kinds-D7vwoN_T-CCBwFJy0.mjs [app-rsc] (ecmascript) <export f as composeSqlEntityKinds>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "composeSqlEntityKinds",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$entity$2d$kinds$2d$D7vwoN_T$2d$CCBwFJy0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["f"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$entity$2d$kinds$2d$D7vwoN_T$2d$CCBwFJy0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/entity-kinds-D7vwoN_T-CCBwFJy0.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ddl-types-DOgOmDOh-Cs_MY05h.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>ForeignKeyConstraint,
    "c",
    ()=>PrimaryKeyConstraint,
    "i",
    ()=>DdlNode,
    "l",
    ()=>UniqueConstraint,
    "n",
    ()=>DdlColumn,
    "o",
    ()=>FunctionColumnDefault,
    "r",
    ()=>DdlColumnDefault,
    "s",
    ()=>LiteralColumnDefault,
    "t",
    ()=>CheckExpressionConstraint,
    "u",
    ()=>isDdlNode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-rsc] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$types$2d$DG4qHrT8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__l__as__isColumnDefaultLiteralInputValue$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/types-DG4qHrT8.mjs [app-rsc] (ecmascript) <export l as isColumnDefaultLiteralInputValue>");
;
;
//#region ../../../2-sql/4-lanes/relational-core/dist/ddl-types-DOgOmDOh.mjs
var DdlColumnDefault = class {
    freeze() {
        Object.freeze(this);
    }
};
var LiteralColumnDefault = class extends DdlColumnDefault {
    kind = "literal";
    value;
    constructor(value){
        super();
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$types$2d$DG4qHrT8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__l__as__isColumnDefaultLiteralInputValue$3e$__["isColumnDefaultLiteralInputValue"])(value)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("CONTRACT.DEFAULT_INVALID", "Invalid column default literal value");
        this.value = value;
        this.freeze();
    }
    accept(visitor, ctx) {
        return visitor.literal(this, ctx);
    }
};
var FunctionColumnDefault = class extends DdlColumnDefault {
    kind = "function";
    expression;
    constructor(expression){
        super();
        this.expression = expression;
        this.freeze();
    }
    accept(visitor, ctx) {
        return visitor.function(this, ctx);
    }
};
var DdlColumn = class {
    name;
    type;
    notNull;
    primaryKey;
    default;
    /** Codec identity for this column. When present, the DDL walker resolves the codec via `codecLookup.get(codecRef.codecId)` and runs the literal default through both declared conversions in order — `codec.encode(codec.decodeJson(default.value), {})` — to obtain the wire value it inlines into the DDL string. The read-back is what makes the pair sound: a contract stores a literal default in the codec's canonical JSON, which is not always the application value `encode` takes (`pg/int8@1` stores decimal text for a `bigint`). A `Date` is the one authored value JSON has no notation for, so it arrives as itself and skips `decodeJson`. When absent, literal defaults follow RawSqlLiteral wire-scalar semantics (string / number / boolean / bigint / null / Uint8Array / Date inlined directly). */ codecRef;
    constructor(options){
        this.name = options.name;
        this.type = options.type;
        this.notNull = options.notNull;
        this.primaryKey = options.primaryKey;
        this.default = options.default;
        this.codecRef = options.codecRef;
        Object.freeze(this);
    }
};
var DdlNode = class {
    /**
	* Structural brand: every DDL node answers `true`. Lets {@link isDdlNode}
	* recognise any `DdlNode` subclass — including target-contributed kinds —
	* without a central kind registry that subclasses would have to register
	* into.
	*/ isDdlNode() {
        return true;
    }
    freeze() {
        Object.freeze(this);
    }
    collectParamRefs() {
        return [];
    }
};
function isDdlNode(value) {
    return typeof value === "object" && value !== null && "isDdlNode" in value && typeof value.isDdlNode === "function";
}
/**
* A composite (or single-column) PRIMARY KEY constraint on a `CreateTable`
* node. When `name` is set, the adapter renders `CONSTRAINT <name> PRIMARY KEY
* (…)`; otherwise it renders an anonymous `PRIMARY KEY (…)`.
*
* Frozen on construction — immutable after creation.
*/ var PrimaryKeyConstraint = class {
    kind = "primary-key";
    columns;
    name;
    constructor(options){
        this.columns = Object.freeze([
            ...options.columns
        ]);
        this.name = options.name;
        Object.freeze(this);
    }
};
/**
* A FOREIGN KEY constraint on a `CreateTable` node. `onDelete` and `onUpdate`
* use the same `ReferentialAction` vocabulary already used by the migration
* planner and the contract IR — no parallel string enum.
*
* Frozen on construction — immutable after creation.
*/ var ForeignKeyConstraint = class {
    kind = "foreign-key";
    columns;
    refTable;
    refColumns;
    onDelete;
    onUpdate;
    name;
    constructor(options){
        this.columns = Object.freeze([
            ...options.columns
        ]);
        this.refTable = options.refTable;
        this.refColumns = Object.freeze([
            ...options.refColumns
        ]);
        this.onDelete = options.onDelete;
        this.onUpdate = options.onUpdate;
        this.name = options.name;
        Object.freeze(this);
    }
};
/**
* A table-level UNIQUE constraint on a `CreateTable` node. When `name` is
* set, the adapter renders `CONSTRAINT <name> UNIQUE (…)`; otherwise it
* renders an anonymous `UNIQUE (…)`.
*
* Frozen on construction — immutable after creation.
*/ var UniqueConstraint = class {
    kind = "unique";
    columns;
    name;
    constructor(options){
        this.columns = Object.freeze([
            ...options.columns
        ]);
        this.name = options.name;
        Object.freeze(this);
    }
};
/**
* A table-level CHECK constraint carrying a raw SQL predicate expression. Used
* for checks that are not enum value-set restrictions — e.g. the element-non-null
* constraint on a scalar-array column (`array_position(col, NULL) IS NULL`).
* The `expression` is emitted verbatim, so callers must supply safe,
* pre-validated SQL.
*
* Frozen on construction — immutable after creation.
*/ var CheckExpressionConstraint = class {
    kind = "check-expression";
    name;
    expression;
    constructor(options){
        this.name = options.name;
        this.expression = options.expression;
        Object.freeze(this);
    }
};
;
 //# sourceMappingURL=ddl-types-DOgOmDOh-Cs_MY05h.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/relational-core__contract-free.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CfConflictClause",
    ()=>CfConflictClause,
    "CfExpr",
    ()=>CfExpr,
    "CfExprSelectQuery",
    ()=>CfExprSelectQuery,
    "CfInsertQuery",
    ()=>CfInsertQuery,
    "CfSelectQuery",
    ()=>CfSelectQuery,
    "CfUpdateQuery",
    ()=>CfUpdateQuery,
    "CfUpsertBuilder",
    ()=>CfUpsertBuilder,
    "CfUpsertQuery",
    ()=>CfUpsertQuery,
    "cfExpr",
    ()=>cfExpr,
    "cfTable",
    ()=>cfTable,
    "checkExpression",
    ()=>checkExpression,
    "col",
    ()=>col,
    "exprSelect",
    ()=>exprSelect,
    "fn",
    ()=>fn,
    "foreignKey",
    ()=>foreignKey,
    "lit",
    ()=>lit,
    "primaryKey",
    ()=>primaryKey,
    "table",
    ()=>table,
    "unique",
    ()=>unique
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ddl-types-DOgOmDOh-Cs_MY05h.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-rsc] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-rsc] (ecmascript) <export t as blindCast>");
;
;
;
;
//#region ../../../2-sql/4-lanes/relational-core/dist/exports/contract-free.mjs
function lit(value) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"](value);
}
function fn(expression) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"](expression);
}
function col(name, type, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]({
        name,
        type,
        ...options
    });
}
function primaryKey(columns, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"]({
        columns,
        ...options
    });
}
function foreignKey(columns, refTable, refColumns, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"]({
        columns,
        refTable,
        refColumns,
        ...options
    });
}
function unique(columns, options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]({
        columns,
        ...options
    });
}
function checkExpression(name, expression) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]({
        name,
        expression
    });
}
/**
* A composable WHERE / ON expression. Wraps an `AnyExpression` and exposes
* fluent boolean combinators, mirroring the spirit of `sql-builder`'s
* `Expression` interface without the contract-bound type machinery.
*/ var CfExpr = class CfExpr {
    ast;
    constructor(ast){
        this.ast = ast;
    }
    and(other) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"].of([
            this.ast,
            other.ast
        ]));
    }
    or(other) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["D"].of([
            this.ast,
            other.ast
        ]));
    }
    not() {
        return new CfExpr(this.ast.not());
    }
    isNull() {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["T"].isNull(this.ast));
    }
    isNotNull() {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["T"].isNotNull(this.ast));
    }
    eqLit(value) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"].eq(this.ast, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].of(value)));
    }
    gtLit(value) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"].gt(this.ast, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].of(value)));
    }
    eqParam(value, codecId) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"].eq(this.ast, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"].of(value, {
            codec: {
                codecId
            }
        })));
    }
    eqExpr(other) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"].eq(this.ast, other.ast));
    }
};
const cfExpr = {
    countStar () {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"].count());
    },
    lit (value) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"].of(value));
    },
    identifierRef (name) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["g"].of(name));
    },
    param (value, codecId) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"].of(value, {
            codec: {
                codecId
            }
        }));
    },
    /**
	* Catalog function call lowered via a `'function'`-strategy template
	* (e.g. `to_regclass({{self}})`). Owns the `OperationExpr` assembly so
	* target packages only supply vocabulary: template, codec'd operands,
	* and return spec.
	*/ fn (options) {
        return new CfExpr(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["E"]({
            method: options.method,
            self: options.self.ast,
            args: options.args?.map((arg)=>arg.ast),
            returns: options.returns,
            lowering: {
                targetFamily: "sql",
                template: options.template
            }
        }));
    },
    columnRef (qualifier, name) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"].of(qualifier, name));
    },
    allOf (exprs) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"].of(exprs.map((expr)=>expr.ast)));
    },
    /**
	* Opaque DB-side SQL expression (e.g. `current_schema()`) carried as a
	* `RawExpr`. For zero-operand catalog functions where a `'function'`
	* lowering template has nothing to substitute.
	*/ raw (sql, returns) {
        return new CfExpr(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["M"]({
            parts: [
                sql
            ],
            returns
        }));
    },
    exists (query) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"].exists(query.build()));
    },
    notExists (query) {
        return new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"].notExists(query.build()));
    }
};
/** Aliased table source for catalog queries (no namespace coordinate). */ function cfTable(name, alias) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I"].named(name, alias);
}
var CfExprSelectQuery = class CfExprSelectQuery {
    src;
    projectionItems;
    whereExpr;
    joinItems;
    limitValue;
    constructor(src, projectionItems, whereExpr, joinItems = [], limitValue = void 0){
        this.src = src;
        this.projectionItems = projectionItems;
        this.whereExpr = whereExpr;
        this.joinItems = joinItems;
        this.limitValue = limitValue;
    }
    from(source) {
        return new CfExprSelectQuery(source, this.projectionItems, this.whereExpr, this.joinItems, this.limitValue);
    }
    join(source, on) {
        return new CfExprSelectQuery(this.src, this.projectionItems, this.whereExpr, [
            ...this.joinItems,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["y"].inner(source, on.ast)
        ], this.limitValue);
    }
    leftJoin(source, on) {
        return new CfExprSelectQuery(this.src, this.projectionItems, this.whereExpr, [
            ...this.joinItems,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["y"].left(source, on.ast)
        ], this.limitValue);
    }
    project(alias, expr) {
        return new CfExprSelectQuery(this.src, [
            ...this.projectionItems,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["j"].of(alias, expr.ast)
        ], this.whereExpr, this.joinItems, this.limitValue);
    }
    where(expr) {
        return new CfExprSelectQuery(this.src, this.projectionItems, expr, this.joinItems, this.limitValue);
    }
    limit(value) {
        return new CfExprSelectQuery(this.src, this.projectionItems, this.whereExpr, this.joinItems, value);
    }
    build() {
        if (this.joinItems.length > 0 && this.src === void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("ORM.ARGUMENT_INVALID", "CfExprSelectQuery: cannot add a JOIN without a FROM clause");
        const base = this.src !== void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["P"].from(this.src).withProjection(this.projectionItems) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["P"].noFrom().withProjection(this.projectionItems);
        const withJoins = this.joinItems.length > 0 ? base.withJoins(this.joinItems) : base;
        const withWhere = this.whereExpr !== void 0 ? withJoins.withWhere(this.whereExpr.ast) : withJoins;
        return this.limitValue !== void 0 ? withWhere.withLimit(this.limitValue) : withWhere;
    }
};
function exprSelect() {
    return new CfExprSelectQuery(void 0, [], void 0);
}
var CfInsertQuery = class CfInsertQuery {
    src;
    schema;
    rowValues;
    returningItems;
    constructor(src, schema, rowValues, returningItems = void 0){
        this.src = src;
        this.schema = schema;
        this.rowValues = rowValues;
        this.returningItems = returningItems;
    }
    returning(...columns) {
        return new CfInsertQuery(this.src, this.schema, this.rowValues, columns.map((col)=>col.toProjectionItem()));
    }
    build() {
        const row = buildInsertRow(this.schema, this.rowValues);
        const ast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["_"].into(this.src).withRows([
            row
        ]);
        return this.returningItems ? ast.withReturning(this.returningItems) : ast;
    }
};
var CfUpsertBuilder = class {
    src;
    schema;
    rowValues;
    constructor(src, schema, rowValues){
        this.src = src;
        this.schema = schema;
        this.rowValues = rowValues;
    }
    onConflict(...columns) {
        return new CfConflictClause(this.src, this.schema, this.rowValues, [
            ...columns
        ]);
    }
};
var CfConflictClause = class {
    src;
    schema;
    rowValues;
    conflictCols;
    constructor(src, schema, rowValues, conflictCols){
        this.src = src;
        this.schema = schema;
        this.rowValues = rowValues;
        this.conflictCols = conflictCols;
    }
    doUpdate(setOrCallback) {
        const set = typeof setOrCallback === "function" ? setOrCallback(buildExcludedProxy(this.schema)) : setOrCallback;
        return new CfUpsertQuery(this.src, this.schema, this.rowValues, this.conflictCols, set);
    }
    doNothing() {
        return new CfUpsertQuery(this.src, this.schema, this.rowValues, this.conflictCols, void 0);
    }
};
var CfUpsertQuery = class {
    src;
    schema;
    rowValues;
    conflictCols;
    updateSet;
    constructor(src, schema, rowValues, conflictCols, updateSet){
        this.src = src;
        this.schema = schema;
        this.rowValues = rowValues;
        this.conflictCols = conflictCols;
        this.updateSet = updateSet;
    }
    build() {
        const row = buildInsertRow(this.schema, this.rowValues);
        const conflictRefs = this.conflictCols.map((col)=>col.toRef());
        const onConflict = this.updateSet === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["v"].on(conflictRefs).doNothing() : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["v"].on(conflictRefs).doUpdateSet(buildSetMap(this.schema, this.updateSet));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["_"].into(this.src).withRows([
            row
        ]).withOnConflict(onConflict);
    }
};
var CfUpdateQuery = class CfUpdateQuery {
    src;
    schema;
    setValues;
    whereExpr;
    returningItems;
    constructor(src, schema, setValues = void 0, whereExpr = void 0, returningItems = void 0){
        this.src = src;
        this.schema = schema;
        this.setValues = setValues;
        this.whereExpr = whereExpr;
        this.returningItems = returningItems;
    }
    set(values) {
        return new CfUpdateQuery(this.src, this.schema, values, this.whereExpr, this.returningItems);
    }
    where(expr) {
        return new CfUpdateQuery(this.src, this.schema, this.setValues, expr, this.returningItems);
    }
    returning(...columns) {
        return new CfUpdateQuery(this.src, this.schema, this.setValues, this.whereExpr, columns.map((col)=>col.toProjectionItem()));
    }
    build() {
        const set = buildSetMap(this.schema, this.setValues);
        const base = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["L"].table(this.src).withSet(set);
        const withWhere = this.whereExpr ? base.withWhere(this.whereExpr.ast) : base;
        return this.returningItems ? withWhere.withReturning(this.returningItems) : withWhere;
    }
};
var CfSelectQuery = class CfSelectQuery {
    src;
    projectionItems;
    whereExpr;
    orderByItems;
    constructor(src, projectionItems, whereExpr = void 0, orderByItems = []){
        this.src = src;
        this.projectionItems = projectionItems;
        this.whereExpr = whereExpr;
        this.orderByItems = orderByItems;
    }
    where(expr) {
        return new CfSelectQuery(this.src, this.projectionItems, expr, this.orderByItems);
    }
    orderBy(column, dir = "asc") {
        const item = dir === "asc" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["O"].asc(column.toRef()) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["O"].desc(column.toRef());
        return new CfSelectQuery(this.src, this.projectionItems, this.whereExpr, [
            ...this.orderByItems,
            item
        ]);
    }
    build() {
        const base = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["P"].from(this.src).withProjection(this.projectionItems);
        const withWhere = this.whereExpr ? base.withWhere(this.whereExpr.ast) : base;
        return this.orderByItems.length > 0 ? withWhere.withOrderBy(this.orderByItems) : withWhere;
    }
};
/**
* Declare a control-plane table once, binding column codecs at declaration time.
* Returns a `TableHandle` whose column properties compose expressions directly
* without per-call-site codec or column-name threading.
*
* ```ts
* const marker = pgTable({ name: 'marker', schema: 'prisma_contract' }, {
*   space:      text(),
*   core_hash:  text(),
*   updated_at: timestamptz(),
* });
*
* const query = marker.update()
*   .set({ core_hash: newHash, updated_at: NOW })
*   .where(marker.space.eq(space).and(marker.core_hash.eq(expectedFrom)))
*   .returning(marker.space)
*   .build();
* ```
*/ function table(source, schema) {
    const proxies = {};
    for (const [col, desc] of Object.entries(schema))proxies[col] = makeColumnProxy(source.alias ?? source.name, col, desc);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
        ...proxies,
        source,
        insert: (row)=>new CfInsertQuery(source, schema, row),
        upsert: (row)=>new CfUpsertBuilder(source, schema, row),
        update: ()=>new CfUpdateQuery(source, schema),
        select: (...cols)=>new CfSelectQuery(source, cols.map((col)=>col.toProjectionItem()))
    });
}
function makeColumnProxy(tableName, columnName, desc) {
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"].of(tableName, columnName);
    return {
        codecId: desc.codecId,
        nullable: desc.nullable,
        columnName,
        tableName,
        eq: (value)=>value === null ? new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["T"].isNull(ref)) : new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"].eq(ref, toSetExpression(value, desc))),
        neq: (value)=>value === null ? new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["T"].isNotNull(ref)) : new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"].neq(ref, toSetExpression(value, desc))),
        isNull: ()=>new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["T"].isNull(ref)),
        isNotNull: ()=>new CfExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["T"].isNotNull(ref)),
        toRef: ()=>ref,
        toProjectionItem: (alias = columnName)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["j"].of(alias, ref, {
                codecId: desc.codecId
            })
    };
}
function buildExcludedProxy(schema) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(Object.fromEntries(Object.keys(schema).map((col)=>[
            col,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"].of("excluded", col)
        ])));
}
function isExpressionSource(value) {
    return typeof value === "object" && value !== null && "toExpr" in value && typeof value.toExpr === "function";
}
function toInsertValue(value, desc) {
    if (isExpressionSource(value)) {
        const expr = value.toExpr();
        if (expr.kind === "column-ref" || expr.kind === "param-ref" || expr.kind === "prepared-param-ref" || expr.kind === "raw-expr") return expr;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"].of(value, {
        codec: {
            codecId: desc.codecId
        }
    });
}
function toSetExpression(value, desc) {
    if (isExpressionSource(value)) return value.toExpr();
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"].of(value, {
        codec: {
            codecId: desc.codecId
        }
    });
}
function buildInsertRow(schema, values) {
    const row = {};
    const rawValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(values);
    for (const [col, desc] of Object.entries(schema))row[col] = toInsertValue(rawValues[col], desc);
    return row;
}
function buildSetMap(schema, values) {
    if (values === void 0) return {};
    const set = {};
    const rawSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(schema);
    const rawValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(values);
    for (const [col, value] of Object.entries(rawValues)){
        const desc = rawSchema[col];
        if (desc !== void 0) set[col] = toSetExpression(value, desc);
    }
    return set;
}
;
 //# sourceMappingURL=relational-core__contract-free.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript) <export p as normalizeSqlBody>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeSqlBody",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript) <export n as assertWireNamePrefixLength>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertWireNamePrefixLength",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/timestamp-now-generator-CVrEeaJp-Bt_PHBSf.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>temporalStringAuthoringPresets,
    "i",
    ()=>temporalCodecPresetWithPrecision,
    "n",
    ()=>temporalAuthoringPresets,
    "o",
    ()=>timestampNowControlDescriptor,
    "r",
    ()=>temporalCodecPreset,
    "t",
    ()=>TIMESTAMP_NOW_GENERATOR_ID
]);
//#region ../../../2-sql/9-family/dist/timestamp-now-generator-CVrEeaJp.mjs
/**
* Canonical id for the wall-clock-now mutation default generator.
*
* Owned by `family-sql` because that's where the generator lives. The
* id flows out from here to (1) the control-plane descriptor and the
* temporal field-preset pair below, (2) the runtime-plane sibling
* `timestamp-now-runtime-generator.ts`, and (3) authoring surfaces
* (PSL `temporal.updatedAt()`, TS `field.temporal.updatedAt()`) via
* the descriptor flow. Co-locating the constant with its only owner
* keeps the framework layer free of concrete generator ids.
*/ const TIMESTAMP_NOW_GENERATOR_ID = "timestampNow";
/**
* Builds the canonical control-plane descriptor for the wall-clock-now
* mutation default generator. The descriptor's `id` and `buildPhases`
* are target-agnostic so PSL `temporal.updatedAt()` and TS
* `field.temporal.updatedAt()` lower to byte-identical contracts.
*
* `applicableCodecIds` is omitted: `timestampNow` is preset-only (not
* reachable via `@default(timestampNow())` lowering), and the codec is
* co-registered by the preset descriptor itself, so the
* `@default(...)` compatibility check has no role to play here.
*/ function timestampNowControlDescriptor() {
    return {
        id: TIMESTAMP_NOW_GENERATOR_ID,
        buildPhases: ()=>({
                onCreate: {
                    kind: "generator",
                    id: TIMESTAMP_NOW_GENERATOR_ID
                },
                onUpdate: {
                    kind: "generator",
                    id: TIMESTAMP_NOW_GENERATOR_ID
                }
            })
    };
}
/**
* Builds the canonical `temporal.{createdAt,updatedAt}` field-preset pair
* for a SQL target. `createdAt` lowers to an execution generator on `onCreate`;
* `updatedAt` lowers to the same generator on both `onCreate` and
* `onUpdate` (RD: "last modified time", non-null). Targets supply the
* codec/native-type pair that matches their timestamp column; everything
* else is shared so PSL `temporal.updatedAt()` and TS
* `field.temporal.updatedAt()` lower to byte-identical contracts across
* targets by construction.
*/ /* @__NO_SIDE_EFFECTS__ */ function temporalAuthoringPresets(input) {
    const { codecId, nativeType } = input;
    const generatorId = input.generatorId ?? "timestampNow";
    return {
        createdAt: {
            kind: "fieldPreset",
            output: {
                codecId,
                nativeType,
                executionDefaults: {
                    onCreate: {
                        kind: "generator",
                        id: generatorId
                    }
                }
            }
        },
        updatedAt: {
            kind: "fieldPreset",
            output: {
                codecId,
                nativeType,
                executionDefaults: {
                    onCreate: {
                        kind: "generator",
                        id: generatorId
                    },
                    onUpdate: {
                        kind: "generator",
                        id: generatorId
                    }
                }
            }
        }
    };
}
function temporalStringAuthoringPresets(input) {
    const presets = /* @__PURE__ */ temporalAuthoringPresets(input);
    return {
        createdAtString: presets.createdAt,
        updatedAtString: presets.updatedAt
    };
}
const TEMPORAL_PRECISION_ARG = {
    name: "precision",
    kind: "number",
    optional: true,
    integer: true,
    minimum: 0
};
const TEMPORAL_ON_CREATE_ARG = {
    name: "onCreate",
    kind: "option",
    values: [
        "now"
    ],
    optional: true
};
const TEMPORAL_ON_UPDATE_ARG = {
    name: "onUpdate",
    kind: "option",
    values: [
        "now"
    ],
    optional: true
};
/**
* Selects a generator descriptor for the preset's `now` token. The token is preset vocabulary; the
* generator id never appears in a user's spelling (ADR 169 — these generators are preset-only).
*/ function temporalPhaseTemplate(index, generatorId) {
    return {
        kind: "select",
        index,
        cases: {
            now: {
                kind: "generator",
                id: generatorId
            }
        }
    };
}
/**
* Builds a `temporal.<codec>` field preset for a codec that takes a precision
* parameter (`pg/timestamp-temporal@1`, `pg/timestamptz-temporal@1`). Arguments change field
* properties only — never the codec, which the caller fixes here.
*
* All three arguments are optional: omitting `precision` omits `typeParams`
* entirely, and omitting a phase omits that phase (both omitted omits
* `executionDefaults`).
*/ /* @__NO_SIDE_EFFECTS__ */ function temporalCodecPresetWithPrecision(input) {
    const generatorId = input.generatorId ?? "timestampNow";
    return {
        kind: "fieldPreset",
        args: [
            TEMPORAL_PRECISION_ARG,
            TEMPORAL_ON_CREATE_ARG,
            TEMPORAL_ON_UPDATE_ARG
        ],
        output: {
            codecId: input.codecId,
            nativeType: input.nativeType,
            typeParams: {
                precision: {
                    kind: "arg",
                    index: 0
                }
            },
            executionDefaults: {
                onCreate: temporalPhaseTemplate(1, generatorId),
                onUpdate: temporalPhaseTemplate(2, generatorId)
            }
        }
    };
}
/**
* Builds a `temporal.<codec>` field preset for a codec with no type
* parameters (`sqlite/datetime@1`). As with the precision-bearing variant,
* both phase arguments are optional and omitting one omits that phase.
*/ /* @__NO_SIDE_EFFECTS__ */ function temporalCodecPreset(input) {
    return {
        kind: "fieldPreset",
        args: [
            TEMPORAL_ON_CREATE_ARG,
            TEMPORAL_ON_UPDATE_ARG
        ],
        output: {
            codecId: input.codecId,
            nativeType: input.nativeType,
            executionDefaults: {
                onCreate: temporalPhaseTemplate(0, TIMESTAMP_NOW_GENERATOR_ID),
                onUpdate: temporalPhaseTemplate(1, TIMESTAMP_NOW_GENERATOR_ID)
            }
        }
    };
}
;
 //# sourceMappingURL=timestamp-now-generator-CVrEeaJp-Bt_PHBSf.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/timestamp-now-generator-CVrEeaJp-Bt_PHBSf.mjs [app-rsc] (ecmascript) <export t as TIMESTAMP_NOW_GENERATOR_ID>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TIMESTAMP_NOW_GENERATOR_ID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$CVrEeaJp$2d$Bt_PHBSf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$CVrEeaJp$2d$Bt_PHBSf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/timestamp-now-generator-CVrEeaJp-Bt_PHBSf.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/timestamp-now-generator-CVrEeaJp-Bt_PHBSf.mjs [app-rsc] (ecmascript) <export n as temporalAuthoringPresets>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "temporalAuthoringPresets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$CVrEeaJp$2d$Bt_PHBSf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$CVrEeaJp$2d$Bt_PHBSf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/timestamp-now-generator-CVrEeaJp-Bt_PHBSf.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/timestamp-now-generator-CVrEeaJp-Bt_PHBSf.mjs [app-rsc] (ecmascript) <export i as temporalCodecPresetWithPrecision>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "temporalCodecPresetWithPrecision",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$CVrEeaJp$2d$Bt_PHBSf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$CVrEeaJp$2d$Bt_PHBSf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/timestamp-now-generator-CVrEeaJp-Bt_PHBSf.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/timestamp-now-generator-CVrEeaJp-Bt_PHBSf.mjs [app-rsc] (ecmascript) <export a as temporalStringAuthoringPresets>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "temporalStringAuthoringPresets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$CVrEeaJp$2d$Bt_PHBSf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$CVrEeaJp$2d$Bt_PHBSf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/timestamp-now-generator-CVrEeaJp-Bt_PHBSf.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/index-naming-Cj1Anq-T-w1JL7-EM.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>isAuthoredIndexInput,
    "r",
    ()=>lowerAuthoredIndex,
    "t",
    ()=>exactNameBodyWarning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/contract-errors-BCN6RVI5-5IHBF_lg.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$framework$2d$authoring$2d$bUu_R58O$2d$Cr$2d$Mz1dC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__flushAuthoringWarnings$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/framework-authoring-bUu_R58O-Cr-Mz1dC.mjs [app-rsc] (ecmascript) <export o as flushAuthoringWarnings>");
;
;
;
//#region ../../../2-sql/1-core/contract/dist/index-naming-Cj1Anq-T.mjs
/**
* Narrows the opaque payload a contributed model attribute returns under
* `index` (see `AuthoringModelAttributeIndexOutput`). The framework hands the
* value through untyped because an index's shape belongs to the family; this
* is the SQL family's boundary check. It proves the structure only — the
* name/map and expression rules stay where `@@index` enforces them, in
* {@link lowerAuthoredIndex}.
*/ function isAuthoredIndexInput(value) {
    if (typeof value !== "object" || value === null) return false;
    const candidate = {
        ...value
    };
    if (typeof candidate["expression"] === "string" === (Array.isArray(candidate["columns"]) && candidate["columns"].every((element)=>typeof element === "string"))) return false;
    if (!isOptionalString(candidate["where"])) return false;
    if (!isOptionalString(candidate["map"])) return false;
    if (!isOptionalString(candidate["name"])) return false;
    if (candidate["unique"] !== void 0 && typeof candidate["unique"] !== "boolean") return false;
    if (candidate["type"] === void 0) return candidate["options"] === void 0;
    if (typeof candidate["type"] !== "string") return false;
    const options = candidate["options"];
    return options === void 0 || typeof options === "object" && options !== null && !Array.isArray(options);
}
function isOptionalString(value) {
    return value === void 0 || typeof value === "string";
}
const EXACT_NAME_BODY_PREAMBLE = "Drift detection compares the authored SQL text byte-for-byte against Postgres's reprinted form, which is only reliable when the text was captured by contract infer.";
/**
* Per-subject remediation: an index or check moves to wire naming via
* `name:`; a policy has no such parameter — dropping `@@map` makes the
* block's head the wire prefix.
*/ const EXACT_NAME_BODY_REMEDIATION = {
    index: "For hand-authored definitions, use name: and let Prisma 8 manage the physical name; to migrate an adopted object to wire naming, replace map: with name: (keeping the body text unchanged) and apply the resulting rename migration.",
    policy: "For hand-authored definitions, drop @@map and let the policy block's head name the policy; to migrate an adopted policy to wire naming, remove @@map (keeping the body text unchanged) and apply the resulting rename migration.",
    check: "For hand-authored definitions, use name: and let Prisma 8 manage the physical name; to migrate an adopted check to wire naming, replace map: with name: (keeping the body text unchanged) and apply the resulting rename migration."
};
/** What the user actually wrote, per subject: index and check `map:`, policy `@@map`. */ const EXACT_NAME_FEATURE = {
    index: "map:",
    policy: "@@map",
    check: "map:"
};
const EXACT_NAME_BODY_WARNING_CODE = "PN_EXACT_NAME_BODY_COMPARISON";
/**
* Mints the exact-name body-comparison warning for a `map:`-named object
* carrying a hand-authorable SQL body — fully formed, so the transport and
* the flush stay generic. `subject` distinguishes the index, policy, and
* check callers that mint this same warning; the feature name and the
* remediation are subject-specific end to end, so a batched summary
* (grouped on code + summary) is true of every object it covers.
*/ function exactNameBodyWarning(subject, exactName) {
    const item = `${subject} "${exactName}"`;
    const feature = EXACT_NAME_FEATURE[subject];
    const tail = `with a SQL body. ${EXACT_NAME_BODY_PREAMBLE} ${EXACT_NAME_BODY_REMEDIATION[subject]}`;
    return {
        code: EXACT_NAME_BODY_WARNING_CODE,
        message: `${item} uses ${feature} ${tail}`,
        item,
        summary: `objects use ${feature} ${tail}`
    };
}
/**
* Lowers an authored index into the name-identified entity `contract.json`
* persists: exact mode adopts `map` verbatim (no prefix, no hash); wire
* mode appends the content-hash suffix to the authored or default prefix.
* The cross-field guards are the shared enforcement backstop for both
* authoring surfaces (PSL pre-empts them with span-anchored diagnostics).
*/ function lowerAuthoredIndex(tableName, authored, warnings) {
    if (authored.columns === void 0 === (authored.expression === void 0)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("CONTRACT.ARGUMENT_INVALID", `Index on table "${tableName}": an index takes either fields (columns) or an expression — exactly one, not both.`);
    if (authored.map !== void 0 && authored.name !== void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("CONTRACT.ARGUMENT_INVALID", `Index "${authored.map}" on table "${tableName}": map and name are mutually exclusive — map adopts an exact physical name, name is a wire prefix.`);
    if (authored.expression !== void 0 && authored.name === void 0 && authored.map === void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("CONTRACT.ARGUMENT_INVALID", `Index on table "${tableName}": an expression index requires an explicit name (name:) or exact physical name (map:) — a default name cannot be derived from an expression.`);
    if (authored.options !== void 0 && authored.type === void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("CONTRACT.ARGUMENT_INVALID", `Index on table "${tableName}": options requires an explicit type — an index with options but no type cannot round-trip through contract infer (the emitted type: would change the wire name).`);
    const unique = authored.unique ?? false;
    if (authored.map !== void 0) {
        if (authored.expression !== void 0 || authored.where !== void 0) {
            const warning = exactNameBodyWarning("index", authored.map);
            if (warnings !== void 0) warnings.push(warning);
            else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$framework$2d$authoring$2d$bUu_R58O$2d$Cr$2d$Mz1dC$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__flushAuthoringWarnings$3e$__["flushAuthoringWarnings"])([
                warning
            ]);
        }
        const carried = {
            naming: {
                kind: "exact",
                name: authored.map
            },
            where: authored.where,
            unique,
            type: authored.type,
            options: authored.options
        };
        return authored.expression !== void 0 ? {
            ...carried,
            expression: authored.expression
        } : {
            ...carried,
            columns: authored.columns ?? []
        };
    }
    const prefix = authored.name ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"])(tableName, authored.columns ?? []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(prefix, "index prefix");
    const carried = {
        naming: {
            kind: "wire",
            prefix,
            hash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])({
                ...authored.columns !== void 0 && {
                    columns: authored.columns
                },
                ...authored.expression !== void 0 && {
                    expression: authored.expression
                },
                ...authored.where !== void 0 && {
                    where: authored.where
                },
                unique,
                ...authored.type !== void 0 && {
                    type: authored.type
                },
                ...authored.options !== void 0 && {
                    options: authored.options
                }
            })
        },
        where: authored.where,
        unique,
        type: authored.type,
        options: authored.options
    };
    return authored.expression !== void 0 ? {
        ...carried,
        expression: authored.expression
    } : {
        ...carried,
        columns: authored.columns ?? []
    };
}
;
 //# sourceMappingURL=index-naming-Cj1Anq-T-w1JL7-EM.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/index-naming-Cj1Anq-T-w1JL7-EM.mjs [app-rsc] (ecmascript) <export t as exactNameBodyWarning>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exactNameBodyWarning",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$index$2d$naming$2d$Cj1Anq$2d$T$2d$w1JL7$2d$EM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$index$2d$naming$2d$Cj1Anq$2d$T$2d$w1JL7$2d$EM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/index-naming-Cj1Anq-T-w1JL7-EM.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ddl-types-DOgOmDOh-Cs_MY05h.mjs [app-rsc] (ecmascript) <export i as DdlNode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DdlNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ddl-types-DOgOmDOh-Cs_MY05h.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>SqlColumnIR,
    "c",
    ()=>SqlSchemaIR,
    "d",
    ()=>SqlUniqueIR,
    "f",
    ()=>assertNode,
    "h",
    ()=>relationalNodeGranularity,
    "i",
    ()=>SqlColumnDefaultIR,
    "l",
    ()=>SqlSchemaIRNode,
    "m",
    ()=>relationalNodeEntityKind,
    "n",
    ()=>RelationalSchemaNodeKind,
    "o",
    ()=>SqlForeignKeyIR,
    "p",
    ()=>defineNonEnumerable,
    "r",
    ()=>SqlCheckConstraintIR,
    "s",
    ()=>SqlIndexIR,
    "t",
    ()=>PrimaryKey,
    "u",
    ()=>SqlTableIR
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__IRNodeBase$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/ir-CV5d1FJ0.mjs [app-rsc] (ecmascript) <export t as IRNodeBase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/ir-CV5d1FJ0.mjs [app-rsc] (ecmascript) <export u as freezeNode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/internal-error-ChGYPVpq-DhUD05u0.mjs [app-rsc] (ecmascript) <export t as InternalError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonical$2d$stringify$2d$DY4NaAJi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalStringify$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/canonical-stringify-DY4NaAJi.mjs [app-rsc] (ecmascript) <export t as canonicalStringify>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$array$2d$equal$2d$28xupwIB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isArrayEqual$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/array-equal-28xupwIB.mjs [app-rsc] (ecmascript) <export t as isArrayEqual>");
;
;
;
;
;
;
;
//#region ../../../2-sql/1-core/schema-ir/dist/types-DvrIPGUN.mjs
/**
* The `nodeKind` discriminant for each relational schema-diff leaf node.
* Each node carries a unique value; the differ pairs siblings by `id`, and
* these kinds distinguish the node types that appear as `PostgresTableSchemaNode`
* children (columns, primary key, foreign keys, uniques, indexes, checks) from
* each other and from the RLS policy/role kinds a target defines separately.
*/ const RelationalSchemaNodeKind = {
    schema: "sql-schema",
    table: "sql-table",
    column: "sql-column",
    columnDefault: "sql-column-default",
    primaryKey: "sql-primary-key",
    foreignKey: "sql-foreign-key",
    unique: "sql-unique",
    index: "sql-index",
    check: "sql-check-constraint"
};
/**
* The one real map from a relational `nodeKind` to the framework-neutral
* {@link DiffSubjectGranularity} its diff issues carry — the SQL family's
* post-diff filters (issue category, strict-mode gating) and the framework
* aggregate's unclaimed-elements sweep key on the granularity, never on the
* `nodeKind` spelling and never on anything stamped on the node. Resolution
* is by `nodeKind` equality against this map, not a suffix string match.
* Target-specific node kinds (Postgres namespace/table/policy/role) are
* outside this family layer's vocabulary and map their own kinds directly.
*/ const RELATIONAL_NODE_GRANULARITY = {
    [RelationalSchemaNodeKind.schema]: "structural",
    [RelationalSchemaNodeKind.table]: "entity",
    [RelationalSchemaNodeKind.column]: "field",
    [RelationalSchemaNodeKind.columnDefault]: "auxiliary",
    [RelationalSchemaNodeKind.primaryKey]: "auxiliary",
    [RelationalSchemaNodeKind.foreignKey]: "auxiliary",
    [RelationalSchemaNodeKind.unique]: "auxiliary",
    [RelationalSchemaNodeKind.index]: "auxiliary",
    [RelationalSchemaNodeKind.check]: "auxiliary"
};
function isRelationalSchemaNodeKind(nodeKind) {
    return Object.hasOwn(RELATIONAL_NODE_GRANULARITY, nodeKind);
}
/**
* Looks up the subject granularity for a relational `nodeKind`. Throws for a
* `nodeKind` outside this map (a target-specific kind, e.g. Postgres's
* namespace/table/policy/role) — those map their own kinds directly rather
* than through this family-level map.
*/ function relationalNodeGranularity(nodeKind) {
    if (!isRelationalSchemaNodeKind(nodeKind)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`relationalNodeGranularity: unrecognized relational node kind "${nodeKind}"`);
    return RELATIONAL_NODE_GRANULARITY[nodeKind];
}
/**
* The one real map from a relational `nodeKind` to its storage `entityKind`
* — the same vocabulary the contract storage's `entries` dictionary keys use
* (`elementCoordinates` walks it). Only the whole-table kind has an entity of
* its own; every other relational node (a column, an index, …) is nested
* under one and maps to nothing here.
*/ const RELATIONAL_NODE_ENTITY_KIND = {
    [RelationalSchemaNodeKind.table]: "table"
};
/**
* Looks up the storage `entityKind` for a relational `nodeKind` — sibling of
* {@link relationalNodeGranularity}, resolved by `nodeKind` equality against
* {@link RELATIONAL_NODE_ENTITY_KIND}. `undefined` for a target-specific kind
* (targets map their own kinds directly) or a relational kind with no entity
* of its own.
*/ function relationalNodeEntityKind(nodeKind) {
    return isRelationalSchemaNodeKind(nodeKind) ? RELATIONAL_NODE_ENTITY_KIND[nodeKind] : void 0;
}
/**
* SQL Schema IR node base. Carries the family-level
* `kind = 'sql-schema-ir'` discriminator and inherits the framework's
* `freezeNode` affordance.
*
* SQL Schema IR represents the actual database state as discovered by
* introspection (the parallel to SQL Contract IR, which represents the
* desired state).
*
* The discriminator is installed as a non-enumerable own property,
* matching the SqlNode pattern. This keeps `JSON.stringify(node)`
* canonical (no `kind` field), keeps `toEqual({...})` test assertions
* against pre-lift flat shapes passing, and keeps `node.kind` readable
* for dispatch.
*
* Both `kind` and `nodeKind` are required: every concrete leaf is a node
* the generic differ can pair and compare, so every leaf must declare which
* node it is. `nodeKind` has no default here — every direct subclass sets its
* own literal value (the relational leaves via `RelationalSchemaNodeKind`,
* target concretions via their own vocabulary, e.g. `PostgresSchemaNodeKind`).
*/ var SqlSchemaIRNode = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__IRNodeBase$3e$__["IRNodeBase"] {
    constructor(){
        super();
        Object.defineProperty(this, "kind", {
            value: "sql-schema-ir",
            writable: false,
            enumerable: false,
            configurable: false
        });
    }
};
/**
* Asserts `node` matches `predicate`, narrowing its type to `T`. The one
* shared implementation every node class's `static assert` and `isEqualTo`
* reach for, instead of each hand-writing its own throw: the message names
* the class the caller expected.
*/ function assertNode(node, className, predicate) {
    if (node === void 0 || !predicate(node)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`Expected a ${className} but got nodeKind=${node?.nodeKind ?? "undefined"}`);
}
/**
* Defines a non-enumerable own property, the same treatment `kind` gets
* above: a derivation-time render-support field stays out of
* `JSON.stringify`, `toEqual({...})` structural assertions, and spreads,
* while remaining directly readable (`node.field`) for the one consumer
* that resolves it at plan time. A no-op when `value` is `undefined` — the
* property is simply absent, matching every other optional field on these
* nodes.
*/ function defineNonEnumerable(target, key, value) {
    if (value === void 0) return;
    Object.defineProperty(target, key, {
        value,
        enumerable: false,
        writable: false,
        configurable: false
    });
}
/**
* Primary-key Schema IR node. Mirrors the Contract IR `PrimaryKey`
* shape (same `columns` + optional `name`) so verification can compare
* intent and actual structurally. Defined here independently to avoid
* a sql-schema-ir -> sql-contract dependency.
*
* Implements `DiffableNode` so a primary key is directly a table's diff-tree
* child. `id` is a fixed sentinel — a table has at most one primary key, so
* there is never a sibling to disambiguate against. `isEqualTo` compares the
* column tuple; the PK's own `name` is a database-assigned label with no
* semantic weight, so it is not compared (mirrors the policy node's
* name-insensitivity to non-identifying detail).
*/ var PrimaryKey = class PrimaryKey extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.primaryKey;
    columns;
    constructor(input){
        super();
        this.columns = input.columns;
        if (input.name !== void 0) this.name = input.name;
        defineNonEnumerable(this, "dependsOn", input.dependsOn);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return "primary-key";
    }
    children() {
        return [];
    }
    static from(value) {
        return value instanceof PrimaryKey ? value : new PrimaryKey(value);
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.primaryKey;
    }
    isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "PrimaryKey", PrimaryKey.is);
        return this.columns.length === node.columns.length && this.columns.every((c, i)=>c === node.columns[i]);
    }
};
/**
* Schema IR node for a table-level check constraint, carried as an opaque
* predicate. The expression is never parsed — a database reprints predicates
* in its own normalized form, so any structured reading of it would drift.
*
* Implements `DiffableNode` so a check is directly a table's diff-tree child;
* `id` is `check:<name>`. `isEqualTo` is mode-selected by the receiver's
* `prefix` (the differ always calls `expected.isEqualTo(actual)`): a
* wire-named receiver compares ids only — the wire name's hash already
* commits to the predicate — while an exact-named receiver byte-compares the
* expression, which is reliable precisely when both sides came from the same
* reprint.
*/ var SqlCheckConstraintIR = class SqlCheckConstraintIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.check;
    name;
    expression;
    constructor(input){
        super();
        this.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(input.naming);
        if (input.naming.kind === "wire") this.prefix = input.naming.prefix;
        this.expression = input.expression;
        defineNonEnumerable(this, "dependsOn", input.dependsOn);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return `check:${this.name}`;
    }
    children() {
        return [];
    }
    static from(value) {
        return value instanceof SqlCheckConstraintIR ? value : new SqlCheckConstraintIR(value);
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.check;
    }
    isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlCheckConstraintIR", SqlCheckConstraintIR.is);
        if (this.prefix !== void 0) return this.id === node.id;
        return this.expression === node.expression;
    }
};
/**
* Structural equality for two resolved column defaults, ported from the relational walk's
* `columnDefaultsEqual` normalized branch: kinds must match; literal values are normalized (Date
* and temporal-typed strings to ISO instants, with a timestamp that has no zone read as UTC; a
* 64-bit-integer native type's safe-integer number to its decimal-text spelling; a numeric native
* type's number to its decimal text, and when the type has a modifier, its decimal text to its
* digits without zeros that do not change the value; a list element by element under its element
* type) then compared canonically (JSON objects match their canonical string form); function
* expressions compare case- and whitespace-insensitively.
*
* `nativeType` provides the normalization context (the actual side's resolved native type in a diff
* comparison). A target that reads a raw expression as a literal does so before this comparison,
* through its `resolveDefault` hook.
*/ function resolvedDefaultsEqual(expected, actual, nativeType) {
    if (expected.kind !== actual.kind) return false;
    if (expected.kind === "literal" && actual.kind === "literal") return literalValuesEqual(normalizeLiteralValue(expected.value, nativeType), normalizeLiteralValue(actual.value, nativeType));
    if (expected.kind === "function" && actual.kind === "function") return normalizeFunctionExpression(expected.expression) === normalizeFunctionExpression(actual.expression);
    return false;
}
function normalizeFunctionExpression(expression) {
    return expression.toLowerCase().replace(/\s+/g, "");
}
function isTemporalNativeType(nativeType) {
    if (!nativeType) return false;
    const normalized = nativeType.toLowerCase();
    return normalized.includes("timestamp") || normalized === "date";
}
function isInt64NativeType(nativeType) {
    if (!nativeType) return false;
    const normalized = nativeType.toLowerCase();
    return normalized === "int8" || normalized === "bigint";
}
/**
* A numeric type with a modifier (`numeric(10,2)`) stores every value at its scale, so zeros that
* do not change the value do not count. Without one, the value keeps the scale it was written with.
*/ const DECIMAL_NATIVE_TYPE = /^(?:numeric|decimal)(\(\d+(?:,\s*\d+)?\))?$/i;
const DECIMAL_NUMERAL = /^(-?)(\d+)(?:\.(\d+))?$/;
const EXPONENT_NUMERAL = /^(-?)(\d+)(?:\.(\d+))?[eE]([+-]?\d+)$/;
/**
* The plain decimal spelling of a value, so that a number JavaScript prints as `1e-7` or `1e+21`
* can be compared with the decimal text a numeric column stores. No digit is added or dropped;
* only the decimal point moves.
*/ function decimalText(value) {
    const text = String(value);
    const numeral = EXPONENT_NUMERAL.exec(text);
    if (numeral === null) return text;
    const [, sign = "", whole = "", fraction = "", exponent = "0"] = numeral;
    const digits = `${whole}${fraction}`;
    const point = whole.length + Number(exponent);
    if (point <= 0) return `${sign}0.${"0".repeat(-point)}${digits}`;
    if (point >= digits.length) return `${sign}${digits}${"0".repeat(point - digits.length)}`;
    return `${sign}${digits.slice(0, point)}.${digits.slice(point)}`;
}
function decimalDigits(value) {
    const numeral = DECIMAL_NUMERAL.exec(decimalText(value));
    if (numeral === null) return value;
    const whole = (numeral[2] ?? "").replace(/^0+(?=\d)/, "");
    const fraction = (numeral[3] ?? "").replace(/0+$/, "");
    const digits = fraction === "" ? whole : `${whole}.${fraction}`;
    return digits === "0" ? digits : `${numeral[1] ?? ""}${digits}`;
}
/**
* A timestamp as Postgres prints it, with or without an offset: `2024-01-01 00:00:00`,
* `0001-01-01 00:00:00+00`, `2024-01-02 03:04:05+05:30`. It is rebuilt as an ISO string before
* `Date` reads it, because `Date` reads this spelling without a zone as host-local time and reads a
* year below 100 as 19xx or 20xx. A value without a zone is a wall-clock time, and the contract
* spells the same wall time as an ISO instant, so it is read as UTC.
*/ const POSTGRES_TIMESTAMP = /^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?)(?:([+-]\d{2})(?::?(\d{2}))?)?$/;
function parseTemporal(value) {
    const timestamp = POSTGRES_TIMESTAMP.exec(value);
    if (timestamp === null) return new Date(value);
    const [, date, time, offsetHours, offsetMinutes = "00"] = timestamp;
    const zone = offsetHours === void 0 ? "Z" : `${offsetHours}:${offsetMinutes}`;
    return /* @__PURE__ */ new Date(`${date}T${time}${zone}`);
}
function normalizeLiteralValue(value, nativeType) {
    if (Array.isArray(value) && nativeType?.endsWith("[]")) {
        const elementType = nativeType.slice(0, -2);
        return value.map((element)=>normalizeLiteralValue(element, elementType));
    }
    if (value instanceof Date) return value.toISOString();
    if (typeof value === "string" && isTemporalNativeType(nativeType)) {
        const parsed = parseTemporal(value);
        if (!Number.isNaN(parsed.getTime())) return parsed.toISOString();
    }
    if (typeof value === "number" && Number.isSafeInteger(value) && isInt64NativeType(nativeType)) return String(value);
    const decimalType = nativeType === void 0 ? null : DECIMAL_NATIVE_TYPE.exec(nativeType);
    if ((typeof value === "number" || typeof value === "string") && decimalType !== null) return decimalType[1] === void 0 ? decimalText(value) : decimalDigits(value);
    return value;
}
function literalValuesEqual(a, b) {
    if (a === b) return true;
    if (typeof a === "object" && a !== null && typeof b === "object" && b !== null) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonical$2d$stringify$2d$DY4NaAJi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalStringify$3e$__["canonicalStringify"])(a) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonical$2d$stringify$2d$DY4NaAJi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalStringify$3e$__["canonicalStringify"])(b);
    if (typeof a === "object" && a !== null && typeof b === "string") try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonical$2d$stringify$2d$DY4NaAJi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalStringify$3e$__["canonicalStringify"])(a) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonical$2d$stringify$2d$DY4NaAJi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalStringify$3e$__["canonicalStringify"])(JSON.parse(b));
    } catch  {
        return false;
    }
    if (typeof a === "string" && typeof b === "object" && b !== null) try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonical$2d$stringify$2d$DY4NaAJi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalStringify$3e$__["canonicalStringify"])(JSON.parse(a)) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonical$2d$stringify$2d$DY4NaAJi$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__canonicalStringify$3e$__["canonicalStringify"])(b);
    } catch  {
        return false;
    }
    return false;
}
/**
* Schema-diff node for a column's default value. The default is the one
* column attribute with an extra/missing/drift lifecycle of its own, so it
* is a child node of the column rather than a compared attribute: an
* undeclared live default surfaces as `not-expected`, a declared default the
* database lacks as `not-found`, and a divergent value as `not-equal` — the
* three reasons cover the legacy `extra_default` / `default_missing` /
* `default_mismatch` vocabulary with no attribute inspection.
*
* `id` is a fixed sentinel — a column has at most one default. Built
* transiently by `SqlColumnIR.children()` from the column's own fields;
* never constructed by derivation or introspection directly.
*/ var SqlColumnDefaultIR = class SqlColumnDefaultIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.columnDefault;
    constructor(input){
        super();
        if (input.resolved !== void 0) this.resolved = input.resolved;
        if (input.raw !== void 0) this.raw = input.raw;
        if (input.nativeTypeContext !== void 0) this.nativeTypeContext = input.nativeTypeContext;
        defineNonEnumerable(this, "authored", input.authored);
        defineNonEnumerable(this, "many", input.many);
        defineNonEnumerable(this, "codecRef", input.codecRef);
        defineNonEnumerable(this, "codecBaseNativeType", input.codecBaseNativeType);
        defineNonEnumerable(this, "codecNamedType", input.codecNamedType);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return "default";
    }
    children() {
        return [];
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.columnDefault;
    }
    /**
	* Structured comparison with `this` as the expected side: both sides
	* resolved compare per the relational walk's `columnDefaultsEqual`
	* semantics; a declared expected default against an unparseable actual
	* (raw present, no resolved parse) is a mismatch; two raw-only nodes fall
	* back to raw string equality.
	*/ isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlColumnDefaultIR", SqlColumnDefaultIR.is);
        if (this.resolved !== void 0 && node.resolved !== void 0) return resolvedDefaultsEqual(this.resolved, node.resolved, node.nativeTypeContext ?? this.nativeTypeContext);
        if (this.resolved !== void 0 || node.resolved !== void 0) return false;
        return this.raw === node.raw;
    }
};
/**
* Schema IR node for a single column on a table, as observed by
* introspection. Unlike the Contract IR `StorageColumn`, this carries
* the column's `name` (Schema IR columns are returned as arrays from
* introspection queries; the parent table re-keys them into a record
* for downstream consumers).
*
* Implements `DiffableNode` so a column is directly a table's diff-tree
* child: `id` is the column name (unique among a table's columns); `isEqualTo`
* compares this column's own attributes only — never children, since a
* column is a leaf. When both sides carry `resolvedNativeType` (stamped at
* derivation/introspection), the comparison uses the resolved values —
* resolved native type, nullability, and structured default equality per
* the relational walk's `columnDefaultsEqual` semantics, with `this` as the
* expected side. Otherwise it falls back to comparing raw fields.
*/ var SqlColumnIR = class SqlColumnIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.column;
    name;
    nativeType;
    nullable;
    constructor(input){
        super();
        this.name = input.name;
        this.nativeType = input.nativeType;
        this.nullable = input.nullable;
        if (input.default !== void 0) this.default = input.default;
        if (input.annotations !== void 0) this.annotations = input.annotations;
        if (input.many !== void 0) this.many = input.many;
        if (input.resolvedNativeType !== void 0) this.resolvedNativeType = input.resolvedNativeType;
        if (input.resolvedDefault !== void 0) this.resolvedDefault = input.resolvedDefault;
        defineNonEnumerable(this, "authoredDefault", input.authoredDefault);
        defineNonEnumerable(this, "codecRef", input.codecRef);
        defineNonEnumerable(this, "codecBaseNativeType", input.codecBaseNativeType);
        defineNonEnumerable(this, "codecNamedType", input.codecNamedType);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return `column:${this.name}`;
    }
    /**
	* The column's default, when declared/present, is the column's one child
	* node — it has an extra/missing/drift lifecycle of its own, so the differ
	* recurses to it rather than `isEqualTo` comparing it. Built transiently
	* from this column's own fields.
	*/ children() {
        if (this.resolvedDefault === void 0 && this.default === void 0) return [];
        return [
            new SqlColumnDefaultIR({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("resolved", this.resolvedDefault),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("raw", this.default),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("authored", this.authoredDefault),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("nativeTypeContext", this.resolvedNativeType),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("many", this.many ?? this.codecRef?.many),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("codecRef", this.codecRef),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("codecBaseNativeType", this.codecBaseNativeType),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("codecNamedType", this.codecNamedType)
            })
        ];
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.column;
    }
    /**
	* Compares the column's own attributes only — the default lives on the
	* child node. When both sides carry `resolvedNativeType`, the resolved
	* value governs (array-ness rides on its `[]` suffix); otherwise raw
	* fields compare.
	*/ isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlColumnIR", SqlColumnIR.is);
        if (this.resolvedNativeType !== void 0 && node.resolvedNativeType !== void 0) return this.resolvedNativeType === node.resolvedNativeType && this.nullable === node.nullable;
        return this.nativeType === node.nativeType && this.nullable === node.nullable && Boolean(this.many) === Boolean(node.many);
    }
};
/**
* Schema IR node for a foreign-key constraint as observed by
* introspection. The `referencedTable` / `referencedColumns` field
* names match the introspection vocabulary (`pg_constraint.confkey`,
* etc.) and intentionally differ from the Contract IR's nested
* `references: { table, columns }` shape so that the verifier's
* structural comparison stays explicit about which side it's reading.
*
* Implements `DiffableNode` so a foreign key is directly a table's diff-tree
* child. Foreign keys are frequently unnamed (introspection may not carry a
* constraint name, and the contract side never invents one), so `id` is
* derived from the referencing/referenced coordinates rather than `name` —
* the same tuple that makes two FK constraints the same constraint. This
* also serves as the comparison key: two FKs with the same coordinates are
* paired by the differ, and `isEqualTo` then compares the remaining
* attribute — the referential actions.
*/ var SqlForeignKeyIR = class SqlForeignKeyIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.foreignKey;
    columns;
    referencedTable;
    referencedColumns;
    constructor(input){
        super();
        this.columns = input.columns;
        this.referencedTable = input.referencedTable;
        this.referencedColumns = input.referencedColumns;
        if (input.referencedSchema !== void 0) this.referencedSchema = input.referencedSchema;
        if (input.name !== void 0) this.name = input.name;
        if (input.onDelete !== void 0) this.onDelete = input.onDelete;
        if (input.onUpdate !== void 0) this.onUpdate = input.onUpdate;
        if (input.annotations !== void 0) this.annotations = input.annotations;
        const resolvedReferencedNamespace = input.resolvedReferencedNamespace ?? input.referencedSchema;
        if (resolvedReferencedNamespace !== void 0) this.resolvedReferencedNamespace = resolvedReferencedNamespace;
        defineNonEnumerable(this, "dependsOn", input.dependsOn);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        const referencedNamespace = this.resolvedReferencedNamespace ?? "";
        return `foreign-key:${this.columns.join(",")}->${referencedNamespace}.${this.referencedTable}(${this.referencedColumns.join(",")})`;
    }
    children() {
        return [];
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.foreignKey;
    }
    /**
	* Referential-action comparison with `this` as the expected side, matching
	* the relational walk's `getReferentialActionMismatches`: `noAction` is the
	* database default and equivalent to an undeclared action, and drift is
	* flagged only when the expected side declares a (normalized) action.
	*/ isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlForeignKeyIR", SqlForeignKeyIR.is);
        return referentialActionMatches(this.onDelete, node.onDelete) && referentialActionMatches(this.onUpdate, node.onUpdate);
    }
};
function referentialActionMatches(expected, actual) {
    const normalizedExpected = expected === "noAction" ? void 0 : expected;
    if (normalizedExpected === void 0) return true;
    return normalizedExpected === (actual === "noAction" ? void 0 : actual);
}
/**
* Schema IR node for a secondary index as observed by introspection.
* Unlike the Contract IR `Index`, the Schema IR carries an explicit
* `unique` field — introspection sees the underlying index regardless
* of whether the user expressed it as `@@index` or `@@unique`, and the
* verifier needs to distinguish them when comparing to the Contract.
*
* Implements `DiffableNode` so an index is directly a table's diff-tree
* child. Indexes are name-identified: every index — contract-derived or
* introspected — carries its full physical name, and `id` is that name.
* Names are catalog-unique per schema, so two indexes legitimately sharing
* one column tuple (a unique index beside a redundant plain index) are two
* distinct siblings, and expression indexes need no column tuple at all.
*
* `isEqualTo` is selected by the receiver (the differ always calls
* `expected.isEqualTo(actual)`) and delegates to {@link contentEquals} —
* the single node-owned content relation: both modes compare `unique`
* strict, `type` and option values through the named normalization seams,
* and `columns` ordered-strict when both sides carry them; an exact-named
* receiver (`prefix === undefined`) additionally byte-compares
* `expression`/`where` (both sides are reprints in the supported flow —
* normalizing would only mask real drift); a wire-named receiver never
* compares bodies (the wire-name hash already commits to them).
*
* `expression`, `where`, and `unique` are genuine SQL-family attributes —
* functional and partial indexes are standard SQL that any SQL target may
* introspect, so the family node must represent them; a target declining
* to author them is a capability decision, not target-specificity.
*/ var SqlIndexIR = class SqlIndexIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.index;
    name;
    unique;
    constructor(input){
        super();
        const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"])(input.naming);
        if (input.columns === void 0 === (input.expression === void 0)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$internal$2d$error$2d$ChGYPVpq$2d$DhUD05u0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__InternalError$3e$__["InternalError"](`SqlIndexIR "${name}": exactly one of columns or expression must be set.`);
        this.name = name;
        this.unique = input.unique;
        if (input.naming.kind === "wire") this.prefix = input.naming.prefix;
        if (input.columns !== void 0) this.columns = input.columns;
        if (input.expression !== void 0) this.expression = input.expression;
        if (input.where !== void 0) this.where = input.where;
        const normalizedType = normalizeIndexType(input.type);
        if (normalizedType !== void 0) this.type = normalizedType;
        if (input.options !== void 0) this.options = input.options;
        if (input.annotations !== void 0) this.annotations = input.annotations;
        defineNonEnumerable(this, "dependsOn", input.dependsOn);
        defineNonEnumerable(this, "partial", input.partial);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return `index:${this.name}`;
    }
    children() {
        return [];
    }
    static from(value) {
        return value instanceof SqlIndexIR ? value : new SqlIndexIR(value);
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.index;
    }
    /**
	* Mode-selected structural equality — see the class doc. Delegates to the
	* single node-owned relation: `columns` compare ordered-strict when both
	* sides carry them; an exact receiver (`prefix === undefined`)
	* byte-compares `expression ?? ''` and `where ?? ''`; a wire-named receiver
	* never compares bodies (the wire-name hash already commits to them).
	*/ isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlIndexIR", SqlIndexIR.is);
        return this.contentEquals(node, {
            columnPresence: "when-both-defined",
            bodies: this.prefix !== void 0 ? "ignored" : "verbatim"
        });
    }
    /**
	* The single index content-equality relation — every comparer (the differ
	* via {@link isEqualTo}, the planner's rename content-pairing) calls this
	* with its mode-appropriate strictness rather than growing a parallel
	* relation:
	*
	* - `columnPresence: 'when-both-defined'` (the differ's rule) compares
	*   the tuples ordered-strict only when both sides carry them — a paired
	*   node's identity already agreed, so a column node meeting an
	*   expression node skips the tuple.
	* - `columnPresence: 'matching'` (the rename-pairing rule) additionally
	*   requires presence to agree: a column index never pairs an expression
	*   index.
	* - `bodies: 'verbatim'` byte-compares `expression ?? ''` / `where ?? ''`
	*   (absent ≡ empty, no normalization — both sides are reprints in the
	*   supported flow); `bodies: 'ignored'` skips them (wire identity —
	*   the wire-name hash commits to the content).
	*
	* `unique` compares strictly; `type` and option VALUES compare through
	* the named normalization seams below.
	*/ contentEquals(other, strictness) {
        const columnsEqual = strictness.columnPresence === "matching" ? this.columns === void 0 === (other.columns === void 0) && (this.columns === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$array$2d$equal$2d$28xupwIB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isArrayEqual$3e$__["isArrayEqual"])(this.columns, other.columns ?? [])) : this.columns === void 0 || other.columns === void 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$array$2d$equal$2d$28xupwIB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isArrayEqual$3e$__["isArrayEqual"])(this.columns, other.columns);
        if (!(this.unique === other.unique && normalizeIndexType(this.type) === normalizeIndexType(other.type) && indexOptionsEqual(this.options, other.options) && columnsEqual)) return false;
        if (strictness.bodies === "ignored") return true;
        return (this.expression ?? "") === (other.expression ?? "") && (this.where ?? "") === (other.where ?? "");
    }
};
/**
* The btree-default normalization seam: the default access method (`btree`
* in every supported SQL target) normalizes to absent. Applied at
* construction — every derivation path (contract tree, introspection, flat
* family tree) builds through the class, so both compare sides are
* symmetric by definition — and again inside
* {@link SqlIndexIR.contentEquals} so the relation holds for any input.
* The contract JSON and the wire-name content hash keep the authored
* spelling: `@@index([a], type: "btree")` and `@@index([a])` are distinct
* wire names — but content-equal after normalization, so a spelling change
* between them converges as a rename via the planner's content
* pairing (the hashes differ, so hash pairing never pairs them).
*/ function normalizeIndexType(type) {
    return type === "btree" ? void 0 : type;
}
/**
* Option-bag equality: same key set, values compared through
* {@link normalizeIndexOptionValue} — Postgres introspection returns
* reloptions values as catalog-reprint strings (`'70'`, `'on'`) while
* contract option leaves are typed (number, boolean, string).
*/ function indexOptionsEqual(a, b) {
    const aKeys = a ? Object.keys(a).sort() : [];
    const bKeys = b ? Object.keys(b).sort() : [];
    if (aKeys.length !== bKeys.length) return false;
    for(let i = 0; i < aKeys.length; i += 1)if (aKeys[i] !== bKeys[i]) return false;
    if (aKeys.length === 0) return true;
    for (const key of aKeys)if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["f"])(a?.[key]) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["f"])(b?.[key])) return false;
    return true;
}
/**
* Schema IR node for a table-level unique constraint as observed by
* introspection.
*
* Implements `DiffableNode` so a unique constraint is directly a table's
* diff-tree child. Unique constraints are frequently unnamed, so `id` is
* derived from the column tuple rather than `name` — the column tuple is
* also what makes two unique constraints the same constraint, so it doubles
* as the pairing key. There are no further attributes to compare once
* columns are equal (the differ pairs on `id`), so `isEqualTo` is identity.
*/ var SqlUniqueIR = class SqlUniqueIR extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.unique;
    columns;
    constructor(input){
        super();
        this.columns = [
            ...input.columns
        ];
        if (input.name !== void 0) this.name = input.name;
        if (input.annotations !== void 0) this.annotations = input.annotations;
        defineNonEnumerable(this, "dependsOn", input.dependsOn);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return `unique:${this.columns.join(",")}`;
    }
    children() {
        return [];
    }
    static is(node) {
        return node.nodeKind === RelationalSchemaNodeKind.unique;
    }
    isEqualTo(other) {
        const node = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(other);
        assertNode(node, "SqlUniqueIR", SqlUniqueIR.is);
        return this.id === node.id;
    }
};
/**
* Schema IR node for a single table as observed by introspection.
*
* Unlike the Contract IR `StorageTable`, this carries the table's
* `name` — introspection queries return tables as arrays and the
* verifier keys them into `SqlSchemaIR.tables` afterwards, so the name
* stays on the table object for downstream call sites that walk
* `Object.values(schema.tables)`.
*
* The constructor normalises nested IR-class fields so downstream
* walks see a uniform AST regardless of whether the input was a
* plain-data literal (from introspection) or already-constructed
* class instances.
*
* Implements `DiffableNode` so a flat (single-schema) tree is directly
* diffable: `id` is the table name; `isEqualTo` is identity (the table's
* structural drift is entirely expressed by its children); `children()`
* yields every column, the primary key (when present), every foreign key,
* unique, index, and check constraint — the same composition and order as
* the Postgres table node, minus policies.
*/ var SqlTableIR = class extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.table;
    name;
    columns;
    foreignKeys;
    uniques;
    indexes;
    constructor(input){
        super();
        this.name = input.name;
        this.columns = Object.freeze(Object.fromEntries(Object.entries(input.columns).map(([key, col])=>[
                key,
                col instanceof SqlColumnIR ? col : new SqlColumnIR(col)
            ])));
        this.foreignKeys = Object.freeze(input.foreignKeys.map((fk)=>fk instanceof SqlForeignKeyIR ? fk : new SqlForeignKeyIR(fk)));
        this.uniques = Object.freeze(input.uniques.map((u)=>u instanceof SqlUniqueIR ? u : new SqlUniqueIR(u)));
        this.indexes = Object.freeze(input.indexes.map(SqlIndexIR.from));
        if (input.primaryKey !== void 0) this.primaryKey = PrimaryKey.from(input.primaryKey);
        if (input.annotations !== void 0) this.annotations = input.annotations;
        if (input.checks !== void 0 && input.checks.length > 0) this.checks = Object.freeze(input.checks.map(SqlCheckConstraintIR.from));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return this.name;
    }
    isEqualTo(other) {
        return this.id === other.id;
    }
    children() {
        return [
            ...Object.values(this.columns),
            ...this.primaryKey ? [
                this.primaryKey
            ] : [],
            ...this.foreignKeys,
            ...this.uniques,
            ...this.indexes,
            ...this.checks ?? []
        ];
    }
};
/**
* Root Schema IR node representing the complete database schema as
* observed by introspection. Target-agnostic; used by both verifiers
* (compare against intended Contract storage) and migration planners
* (derive operations needed to reconcile).
*
* The constructor normalises nested `SqlTableIR` instances so
* downstream walks see a uniform AST regardless of whether the input
* was a plain-data literal or already-constructed class instances.
*
* Implements `DiffableNode` as the root of a flat (single-schema) diff
* tree: `id` is the fixed sentinel `'database'` (roots have no siblings),
* `isEqualTo` is identity (a container has no own attributes), and
* `children()` yields the table nodes.
*/ var SqlSchemaIR = class extends SqlSchemaIRNode {
    nodeKind = RelationalSchemaNodeKind.schema;
    tables;
    constructor(input){
        super();
        this.tables = Object.freeze(Object.fromEntries(Object.entries(input.tables).map(([key, t])=>[
                key,
                t instanceof SqlTableIR ? t : new SqlTableIR(t)
            ])));
        if (input.annotations !== void 0) this.annotations = input.annotations;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__u__as__freezeNode$3e$__["freezeNode"])(this);
    }
    get id() {
        return "database";
    }
    isEqualTo(other) {
        return this.id === other.id;
    }
    children() {
        return Object.values(this.tables);
    }
};
;
 //# sourceMappingURL=types-DvrIPGUN-wxavfzyJ.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export t as PrimaryKey>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrimaryKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export r as SqlCheckConstraintIR>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlCheckConstraintIR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export a as SqlColumnIR>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlColumnIR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export o as SqlForeignKeyIR>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlForeignKeyIR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export s as SqlIndexIR>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlIndexIR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export l as SqlSchemaIRNode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlSchemaIRNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export d as SqlUniqueIR>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlUniqueIR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export f as assertNode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["f"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export m as relationalNodeEntityKind>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "relationalNodeEntityKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["m"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export h as relationalNodeGranularity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "relationalNodeGranularity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["h"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export p as defineNonEnumerable>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defineNonEnumerable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/validators-CR2v1106.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>createSqlStorageSchema,
    "c",
    ()=>validateModel,
    "d",
    ()=>validateSqlStorageConsistency,
    "f",
    ()=>validateStorage,
    "i",
    ()=>createSqlContractSchema,
    "l",
    ()=>validateModelStorageReferences,
    "n",
    ()=>checkSqlDefaultBody,
    "o",
    ()=>reservedSqlDefaultBody,
    "p",
    ()=>validateStorageSemantics,
    "r",
    ()=>createNamespaceEntrySchema,
    "s",
    ()=>resolveSqlToOneRelationStorage,
    "t",
    ()=>ContractEnumSchema,
    "u",
    ()=>validateSqlContractFully
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/contract-errors-BCN6RVI5-5IHBF_lg.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$entity$2d$kinds$2d$D7vwoN_T$2d$CCBwFJy0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/entity-kinds-D7vwoN_T-CCBwFJy0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/contract-validation-error-DEiWp_EI-CRwtUgRw.mjs [app-rsc] (ecmascript) <export t as ContractValidationError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/is-plain-record-CUofyVQ7-DWEzdhIx.mjs [app-rsc] (ecmascript) <export t as isPlainRecord>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$types$2d$DG4qHrT8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__CrossReferenceSchema$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/types-DG4qHrT8.mjs [app-rsc] (ecmascript) <export t as CrossReferenceSchema>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$validate$2d$domain$2d$CaT6wlDH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__validateContractDomain$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/validate-domain-CaT6wlDH.mjs [app-rsc] (ecmascript) <export t as validateContractDomain>");
;
;
;
;
;
;
;
;
;
;
//#region ../../../2-sql/1-core/contract/dist/validators.mjs
const UNSAFE_DEFAULT_BODY = /;|--|\/\*|\$\$|\bSELECT\b/i;
/** Returns undefined when the body may be rendered as `DEFAULT (<body>)`, else the reason. */ function checkSqlDefaultBody(body) {
    return UNSAFE_DEFAULT_BODY.test(body) ? "Default SQL must not contain semicolons, SQL comment tokens, dollar-quoting, or subqueries." : void 0;
}
/**
* Names the Prisma default function a raw SQL body spells exactly, ignoring surrounding whitespace. The planners treat the contract expressions `now()` and `autoincrement()` as those functions, so a raw body with that text would not be used as written.
*/ function reservedSqlDefaultBody(body) {
    switch(body.trim()){
        case "now()":
            return "now";
        case "autoincrement()":
            return "autoincrement";
        default:
            return;
    }
}
function sameColumns(left, right) {
    return left.length === right.length && left.every((column, index)=>column === right[index]);
}
/**
* The storage facts behind a same-space to-one relation's nullability: which side owns the
* foreign key, and whether each local column is nullable.
*/ function resolveSqlToOneRelationStorage(contract, modelStorage, relation) {
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(contract.storage.namespaces[modelStorage.namespaceId]?.entries.table?.[modelStorage.table]);
    const columns = relation.on.localFields.map((fieldName)=>{
        const columnName = modelStorage.fields[fieldName]?.column;
        const column = columnName === void 0 ? void 0 : table?.columns[columnName];
        return {
            name: columnName ?? fieldName,
            nullable: column?.nullable ?? true
        };
    });
    const columnNames = columns.map((column)=>column.name);
    return {
        ownsForeignKey: relation.cardinality === "N:1" || (table?.foreignKeys ?? []).some((foreignKey)=>sameColumns(foreignKey.source.columns, columnNames)),
        columns
    };
}
const generatorKindSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("'generator'");
const ControlPolicySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("'managed' | 'tolerated' | 'external' | 'observed'");
const ExecutionMutationDefaultValueSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    kind: generatorKindSchema,
    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string").narrow((value, ctx)=>{
        return /^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(value) ? true : ctx.mustBe("a flat generator id");
    }),
    "params?": "Record<string, unknown>"
});
const ExecutionSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    executionHash: "string",
    mutations: {
        "+": "reject",
        defaults: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            "+": "reject",
            ref: {
                "+": "reject",
                namespace: "string",
                table: "string",
                column: "string"
            },
            "onCreate?": ExecutionMutationDefaultValueSchema,
            "onUpdate?": ExecutionMutationDefaultValueSchema
        }).array().readonly()
    }
});
const DomainEnumRefSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    plane: "'domain'",
    namespaceId: "string",
    entityKind: "'enum'",
    entityName: "string",
    "spaceId?": "string"
});
/** Document-scoped `storage.types`: codec triples only. */ const DocumentScopedStorageTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].declare().type({
    kind: "'codec-instance'",
    codecId: "string",
    nativeType: "string",
    "typeParams?": "Record<string, unknown>"
});
/**
* Domain enum entry under `domain.namespaces[id].enum[name]`.
* Carries the codec id and an ordered `members` array of `{name, value}` pairs.
*/ const ContractEnumSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    codecId: "string",
    members: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        name: "string",
        value: "string | number | boolean | null | unknown[] | Record<string, unknown>"
    }).array().readonly()
});
/**
* Derives a schema map from a descriptor map: maps each kind's key to its
* `schema` field. Used by validation functions to validate entries.
*/ function schemaViewOf(kinds) {
    return new Map([
        ...kinds
    ].map(([k, d])=>[
            k,
            d.schema
        ]));
}
const DEFAULT_SQL_KINDS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$entity$2d$kinds$2d$D7vwoN_T$2d$CCBwFJy0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["f"])();
/**
* Builds the per-namespace entry schema for `storage.namespaces[id]`.
*
* Validation is descriptor-driven: the `kinds` map carries both the schema
* (used here for structural validation) and the construct function (used at
* hydration time). An unregistered key fails validation naming the kind and
* the namespace id, so validation fails closed.
*/ function createNamespaceEntrySchema(kinds) {
    const schemas = schemaViewOf(kinds);
    const knownKinds = new Set(kinds.keys());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "+": "reject",
        id: "string",
        "kind?": "string",
        entries: "object"
    }).narrow((ns, ctx)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(ns.entries)) return ctx.mustBe("an entries object");
        for (const [key, innerMap] of Object.entries(ns.entries)){
            if (!knownKinds.has(key)) return ctx.reject({
                expected: `entries key "${key}" in namespace "${ns.id}" is not a registered entity kind`
            });
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(innerMap)) return ctx.reject({
                expected: `entries["${key}"] in namespace "${ns.id}" must be an object`
            });
            const entrySchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(schemas.get(key));
            for (const [, value] of Object.entries(innerMap)){
                const parsed = entrySchema(value);
                if (parsed instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) return ctx.reject({
                    expected: parsed.summary
                });
            }
        }
        return true;
    });
}
/**
* Builds the storage schema. Pack contributions reach the per-namespace
* entry shape through {@link createNamespaceEntrySchema}; the
* document-scoped `storage.types` field (codec triples only) and the
* storage hash stay family-shared.
*/ function createSqlStorageSchema(kinds) {
    const namespaceEntry = createNamespaceEntrySchema(kinds);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "+": "reject",
        storageHash: "string",
        "types?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            "[string]": DocumentScopedStorageTypeSchema
        }),
        "namespaces?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            "[string]": namespaceEntry
        })
    });
}
const StorageSchema = createSqlStorageSchema(DEFAULT_SQL_KINDS);
/**
* Any entries entity that declares both a `tableName` and a physical `name`
* (e.g. a target's RLS policy entities) shares one physical-name space per
* table: two such entries of one kind on the same table would collide as
* DDL (`CREATE POLICY "<name>" ON <table>` fails on the second), while the
* same name on different tables is legal. Structural — no entry-kind
* vocabulary; `table` entries are keyed by name already and are excluded.
*/ function validateTableScopedEntryNames(storage, errors) {
    for (const [namespaceId, ns] of Object.entries(storage.namespaces)){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(ns.entries)) continue;
        for (const [entriesKind, slot] of Object.entries(ns.entries)){
            if (entriesKind === "table" || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(slot)) continue;
            const seen = /* @__PURE__ */ new Map();
            for (const entity of Object.values(slot)){
                if (typeof entity !== "object" || entity === null) continue;
                const record = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(entity);
                const name = record["name"];
                const tableName = record["tableName"];
                if (typeof name !== "string" || typeof tableName !== "string") continue;
                const key = JSON.stringify([
                    tableName,
                    name
                ]);
                seen.set(key, (seen.get(key) ?? 0) + 1);
                if (seen.get(key) === 2) errors.push(`Namespace "${namespaceId}" table "${tableName}": ${entriesKind} "${name}" is declared multiple times`);
            }
        }
    }
}
function eachStorageTable(storage) {
    return Object.entries(storage.namespaces).flatMap(([namespaceId, ns])=>Object.entries(ns.entries["table"] ?? {}).map(([tableName, table])=>({
                namespaceId,
                tableName,
                table
            })));
}
function findDuplicateValue(values) {
    const seen = /* @__PURE__ */ new Set();
    for (const value of values){
        if (seen.has(value)) return value;
        seen.add(value);
    }
}
/** A column may appear at most once in one index's element tuple. */ function rejectRepeatedIndexColumns(indexes, coordinate, errors) {
    for (const index of indexes){
        const duplicateColumn = findDuplicateValue(index.columns ?? []);
        if (duplicateColumn !== void 0) errors.push(`${coordinate}: index contains duplicate column "${duplicateColumn}"`);
    }
}
/**
* Two wire-named indexes with the same content are one index written twice —
* the content hash is their identity, so neither spelling can survive. An
* exact-named index is identified by its name instead, so content twins under
* two names are legal and a repeated name is rejected by the named-object
* check.
*/ function rejectDuplicateWireNamedIndexContent(indexes, coordinate, errors) {
    const seenContent = /* @__PURE__ */ new Set();
    for (const index of indexes){
        if (index.prefix === void 0) continue;
        const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"])(index);
        if (seenContent.has(content)) {
            errors.push(`${coordinate}: duplicate index definition on columns [${(index.columns ?? []).join(", ")}]`);
            continue;
        }
        seenContent.add(content);
    }
}
/**
* Two wire-named checks with the same predicate are one check written twice —
* the content hash is their identity, so neither spelling can survive, and
* whitespace variants of one predicate collapse onto the same hash. An
* exact-named check is identified by its name instead, so content twins under
* two names are legal (the legacy shape a database adopts from) and a repeated
* name is rejected by the named-object check.
*/ function rejectDuplicateWireNamedCheckContent(checks, coordinate, errors) {
    const seenContent = /* @__PURE__ */ new Set();
    for (const check of checks){
        if (check.prefix === void 0) continue;
        const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(check.expression);
        if (seenContent.has(content)) {
            errors.push(`${coordinate}: duplicate check constraint definition (expression "${check.expression}")`);
            continue;
        }
        seenContent.add(content);
    }
}
function isContractFieldType(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(value)) return false;
    const kind = value["kind"];
    if (kind === "scalar") {
        if (typeof value["codecId"] !== "string") return false;
        const typeParams = value["typeParams"];
        if (typeParams !== void 0 && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(typeParams)) return false;
        return true;
    }
    if (kind === "valueObject") return typeof value["name"] === "string";
    if (kind === "union") {
        const members = value["members"];
        if (!Array.isArray(members)) return false;
        return members.every((m)=>isContractFieldType(m));
    }
    return false;
}
const ModelFieldSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    nullable: "boolean",
    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("unknown").narrow((value, ctx)=>isContractFieldType(value) ? true : ctx.mustBe("scalar, valueObject, or union field type")),
    "many?": "true",
    "dict?": "true",
    "valueSet?": DomainEnumRefSchema
});
const ModelStorageSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    table: "string",
    namespaceId: "string",
    fields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "[string]": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            column: "string",
            "codecId?": "string",
            "nullable?": "boolean"
        })
    })
});
const ContractRelationThroughSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    table: "string",
    namespaceId: "string",
    parentColumns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    childColumns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    targetColumns: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly()
});
const ContractRelationOnSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    localFields: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly(),
    targetFields: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].string.array().readonly()
});
const ContractManyToManyRelationSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$types$2d$DG4qHrT8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__CrossReferenceSchema$3e$__["CrossReferenceSchema"],
    cardinality: "'N:M'",
    on: ContractRelationOnSchema,
    through: ContractRelationThroughSchema
});
const ContractToOneRelationSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$types$2d$DG4qHrT8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__CrossReferenceSchema$3e$__["CrossReferenceSchema"],
    cardinality: "'1:1' | 'N:1'",
    "nullable?": "boolean",
    on: ContractRelationOnSchema
});
const ContractToManyRelationSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$types$2d$DG4qHrT8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__CrossReferenceSchema$3e$__["CrossReferenceSchema"],
    cardinality: "'1:N'",
    on: ContractRelationOnSchema
});
const ContractReferenceRelationSchema = ContractManyToManyRelationSchema.or(ContractToOneRelationSchema).or(ContractToManyRelationSchema);
const ContractEmbedRelationSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "+": "reject",
    to: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$types$2d$DG4qHrT8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__CrossReferenceSchema$3e$__["CrossReferenceSchema"],
    cardinality: "'1:1' | '1:N'"
});
const ContractRelationSchema = ContractReferenceRelationSchema.or(ContractEmbedRelationSchema);
const ModelSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    storage: ModelStorageSchema,
    "fields?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "[string]": ModelFieldSchema
    }),
    "relations?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "[string]": ContractRelationSchema
    }),
    "discriminator?": "unknown",
    "variants?": "unknown",
    "base?": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$types$2d$DG4qHrT8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__CrossReferenceSchema$3e$__["CrossReferenceSchema"],
    "owner?": "string"
});
const ContractMetaSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "[string]": "unknown"
});
/**
* Builds the full SQL contract schema. The storage subtree threads
* pack contributions through {@link createSqlStorageSchema}; the rest
* of the contract envelope is family-shared.
*/ function createSqlContractSchema(kinds) {
    const storage = createSqlStorageSchema(kinds);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "+": "reject",
        target: "string",
        targetFamily: "'sql'",
        "coreHash?": "string",
        profileHash: "string",
        "capabilities?": "Record<string, Record<string, boolean>>",
        "extensions?": "Record<string, unknown>",
        "meta?": ContractMetaSchema,
        "defaultControlPolicy?": ControlPolicySchema,
        "roots?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            "[string]": __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$types$2d$DG4qHrT8$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__CrossReferenceSchema$3e$__["CrossReferenceSchema"]
        }),
        domain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
            namespaces: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
                "[string]": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
                    models: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
                        "[string]": ModelSchema
                    }),
                    "valueObjects?": "Record<string, unknown>",
                    "enum?": (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
                        "[string]": ContractEnumSchema
                    })
                })
            })
        }),
        storage,
        "execution?": ExecutionSchema
    });
}
const SqlContractSchema = createSqlContractSchema(DEFAULT_SQL_KINDS);
/**
* Validates the structural shape of SqlStorage using Arktype. Pure
* structural check: namespace IR is never materialized here (that needs
* a target concretion via the serializer hydration path), so this throws
* on invalid input and constructs nothing.
*
* @param value - The storage value to validate
* @throws Error if the storage structure is invalid
*/ function validateStorage(value) {
    const result = StorageSchema(value);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) {
        const errors = result.map((p)=>p.message);
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("CONTRACT.VALIDATION_FAILED", `Storage validation failed: ${errors.join("; ")}`, {
            meta: {
                errors
            }
        });
    }
}
function validateModel(value) {
    const result = ModelSchema(value);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) {
        const errors = result.map((p)=>p.message);
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$errors$2d$BCN6RVI5$2d$5IHBF_lg$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("CONTRACT.VALIDATION_FAILED", `Model validation failed: ${errors.join("; ")}`, {
            meta: {
                errors
            }
        });
    }
    return result;
}
/**
* Structural arktype validation of an SQL contract envelope. Internal
* helper for {@link validateSqlContractFully} — exposed only inside
* this module, since the family seam-of-record is the
* `SqlContractSerializerBase.deserializeContract` SPI.
*/ function validateSqlContractStructure(value, contractSchema) {
    if (typeof value !== "object" || value === null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"]("Contract structural validation failed: value must be an object", "structural");
    const rawValue = value;
    if (rawValue.targetFamily !== void 0 && rawValue.targetFamily !== "sql") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Unsupported target family: ${rawValue.targetFamily}`, "structural");
    const contractResult = contractSchema(value);
    if (contractResult instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Contract structural validation failed: ${contractResult.map((p)=>p.message).join("; ")}`, "structural");
    return contractResult;
}
/**
* Validates semantic constraints on SqlStorage that cannot be expressed in Arktype schemas.
*
* Returns an array of human-readable error strings. Empty array = valid.
*
* Currently checks:
* - duplicate named primary key / unique / index / foreign key objects within a table
* - duplicate unique, index, or foreign key declarations within a table
* - duplicate columns within primary key / unique / index definitions
* - nullable columns in primary key definitions
* - `setNull` referential action on a non-nullable FK column (would fail at runtime)
* - `setDefault` referential action on a non-nullable FK column without a DEFAULT (would fail at runtime)
*/ function validateStorageSemantics(storage) {
    const errors = [];
    validateTableScopedEntryNames(storage, errors);
    for (const { namespaceId, tableName, table: rawTable } of eachStorageTable(storage)){
        const table = rawTable;
        const namedObjects = /* @__PURE__ */ new Map();
        const registerNamedObject = (kind, name)=>{
            if (!name) return;
            namedObjects.set(name, [
                ...namedObjects.get(name) ?? [],
                kind
            ]);
        };
        registerNamedObject("primary key", table.primaryKey?.name);
        for (const unique of table.uniques)registerNamedObject("unique constraint", unique.name);
        for (const index of table.indexes)registerNamedObject("index", index.name);
        for (const fk of table.foreignKeys)registerNamedObject("foreign key", fk.name);
        for (const check of table.checks ?? [])registerNamedObject("check constraint", check.name);
        for (const [name, kinds] of namedObjects)if (kinds.length > 1) errors.push(`Namespace "${namespaceId}" table "${tableName}": named object "${name}" is declared multiple times (${kinds.join(", ")})`);
        if (table.primaryKey) {
            const duplicateColumn = findDuplicateValue(table.primaryKey.columns);
            if (duplicateColumn !== void 0) errors.push(`Namespace "${namespaceId}" table "${tableName}": primary key contains duplicate column "${duplicateColumn}"`);
            for (const columnName of table.primaryKey.columns)if (table.columns[columnName]?.nullable === true) errors.push(`Namespace "${namespaceId}" table "${tableName}": primary key column "${columnName}" is nullable; primary key columns must be NOT NULL`);
        }
        const seenUniqueDefinitions = /* @__PURE__ */ new Set();
        for (const unique of table.uniques){
            const duplicateColumn = findDuplicateValue(unique.columns);
            if (duplicateColumn !== void 0) errors.push(`Namespace "${namespaceId}" table "${tableName}": unique constraint contains duplicate column "${duplicateColumn}"`);
            const signature = JSON.stringify({
                columns: unique.columns
            });
            if (seenUniqueDefinitions.has(signature)) {
                errors.push(`Namespace "${namespaceId}" table "${tableName}": duplicate unique constraint definition on columns [${unique.columns.join(", ")}]`);
                continue;
            }
            seenUniqueDefinitions.add(signature);
        }
        const tableCoordinate = `Namespace "${namespaceId}" table "${tableName}"`;
        rejectRepeatedIndexColumns(table.indexes, tableCoordinate, errors);
        rejectDuplicateWireNamedIndexContent(table.indexes, tableCoordinate, errors);
        const seenForeignKeyDefinitions = /* @__PURE__ */ new Set();
        for (const fk of table.foreignKeys){
            const signature = JSON.stringify({
                source: fk.source,
                target: fk.target,
                onDelete: fk.onDelete ?? null,
                onUpdate: fk.onUpdate ?? null
            });
            if (seenForeignKeyDefinitions.has(signature)) {
                errors.push(`Namespace "${namespaceId}" table "${tableName}": duplicate foreign key definition on columns [${fk.source.columns.join(", ")}]`);
                continue;
            }
            seenForeignKeyDefinitions.add(signature);
        }
        for (const fk of table.foreignKeys)for (const colName of fk.source.columns){
            const column = table.columns[colName];
            if (!column) continue;
            if (fk.onDelete === "setNull" && !column.nullable) errors.push(`Namespace "${namespaceId}" table "${tableName}": onDelete setNull on foreign key column "${colName}" which is NOT NULL`);
            if (fk.onUpdate === "setNull" && !column.nullable) errors.push(`Namespace "${namespaceId}" table "${tableName}": onUpdate setNull on foreign key column "${colName}" which is NOT NULL`);
            if (fk.onDelete === "setDefault" && !column.nullable && column.default === void 0) errors.push(`Namespace "${namespaceId}" table "${tableName}": onDelete setDefault on foreign key column "${colName}" which is NOT NULL and has no DEFAULT`);
            if (fk.onUpdate === "setDefault" && !column.nullable && column.default === void 0) errors.push(`Namespace "${namespaceId}" table "${tableName}": onUpdate setDefault on foreign key column "${colName}" which is NOT NULL and has no DEFAULT`);
        }
        rejectDuplicateWireNamedCheckContent(table.checks ?? [], tableCoordinate, errors);
    }
    return errors;
}
/**
* SQL storage logical-consistency checks: every model.storage.table
* resolves to a real table, every model.storage.fields[*].column
* resolves to a real column, and value-object fields land on JSON-native
* columns. Throws `ContractValidationError` on the first mismatch.
*/ function validateModelStorageReferences(contract) {
    for (const [namespaceId, namespace] of Object.entries(contract.domain.namespaces)){
        const models = namespace.models;
        for (const [modelName, model] of Object.entries(models)){
            const qualifiedName = `${namespaceId}:${modelName}`;
            const storageNamespaceId = model.storage.namespaceId;
            if (storageNamespaceId !== namespaceId) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Model "${qualifiedName}" storage.namespaceId "${storageNamespaceId}" does not match domain namespace "${namespaceId}"`, "storage");
            const storageTable = model.storage.table;
            const rawTable = contract.storage.namespaces[storageNamespaceId]?.entries.table?.[storageTable];
            if (rawTable === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Model "${qualifiedName}" references non-existent table "${storageNamespaceId}.${storageTable}"`, "storage");
            const table = rawTable;
            const columnNames = new Set(Object.keys(table.columns));
            for (const [fieldName, field] of Object.entries(model.storage.fields))if (!columnNames.has(field.column)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Model "${qualifiedName}" field "${fieldName}" references non-existent column "${field.column}" in table "${storageTable}"`, "storage");
            const JSON_NATIVE_TYPES = /* @__PURE__ */ new Set([
                "json",
                "jsonb"
            ]);
            for (const [fieldName, domainField] of Object.entries(model.fields ?? {})){
                if (domainField.type?.kind !== "valueObject") continue;
                const storageField = model.storage.fields[fieldName];
                if (!storageField) continue;
                const column = table.columns[storageField.column];
                if (!column) continue;
                if (!JSON_NATIVE_TYPES.has(column.nativeType)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Model "${qualifiedName}" field "${fieldName}" is a value object but storage column "${storageField.column}" has nativeType "${column.nativeType}" (expected json or jsonb)`, "storage");
            }
        }
    }
}
/**
* Cross-table consistency checks for SQL storage: primary key, unique,
* index, and foreign key column references resolve to real columns;
* NOT NULL columns don't carry a literal `null` default; FK column
* counts match their referenced columns. Throws on the first mismatch.
*/ function validateSqlStorageConsistency(contract) {
    for (const { namespaceId, tableName, table: rawTable } of eachStorageTable(contract.storage)){
        const table = rawTable;
        const columnNames = new Set(Object.keys(table.columns));
        if (table.primaryKey) {
            for (const colName of table.primaryKey.columns)if (!columnNames.has(colName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" primaryKey references non-existent column "${colName}"`, "storage");
        }
        for (const unique of table.uniques)for (const colName of unique.columns)if (!columnNames.has(colName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" unique constraint references non-existent column "${colName}"`, "storage");
        for (const index of table.indexes)for (const colName of index.columns ?? [])if (!columnNames.has(colName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" index references non-existent column "${colName}"`, "storage");
        for (const [colName, column] of Object.entries(table.columns))if (!column.nullable && column.default?.kind === "literal" && column.default.value === null) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" column "${colName}" is NOT NULL but has a literal null default`, "storage");
        for (const fk of table.foreignKeys){
            if (fk.source.namespaceId !== namespaceId || fk.source.tableName !== tableName) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" contains foreignKey with mismatched source coordinates (${fk.source.namespaceId}.${fk.source.tableName})`, "storage");
            for (const colName of fk.source.columns)if (!columnNames.has(colName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" foreignKey references non-existent column "${colName}"`, "storage");
            if (fk.target.spaceId === void 0) {
                const referencedRaw = contract.storage.namespaces[fk.target.namespaceId]?.entries.table?.[fk.target.tableName];
                if (referencedRaw === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" foreignKey references non-existent table "${fk.target.namespaceId}.${fk.target.tableName}"`, "storage");
                const referencedColumnNames = new Set(Object.keys(referencedRaw.columns));
                for (const colName of fk.target.columns)if (!referencedColumnNames.has(colName)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" foreignKey references non-existent column "${colName}" in table "${fk.target.tableName}"`, "storage");
            }
            if (fk.source.columns.length !== fk.target.columns.length) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace "${namespaceId}" table "${tableName}" foreignKey column count (${fk.source.columns.length}) does not match referenced column count (${fk.target.columns.length})`, "storage");
        }
    }
}
/**
* Full SQL contract validation: structural (arktype) +
* framework-shared domain + SQL storage logical-consistency + SQL
* storage semantic + model ↔ storage reference checks. Throws
* `ContractValidationError` on the first failure. Returns the
* validated flat-data shape; IR class hydration happens in the SPI
* base on top of this helper.
*/ function validateSqlContractFully(value, options) {
    const validated = validateSqlContractStructure(typeof value === "object" && value !== null ? (()=>{
        const { schemaVersion: _, _generated: _g, ...rest } = value;
        return rest;
    })() : value, options?.contractSchema ?? SqlContractSchema);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$validate$2d$domain$2d$CaT6wlDH$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__validateContractDomain$3e$__["validateContractDomain"])({
        roots: validated.roots,
        domain: validated.domain
    });
    validateSqlStorageConsistency(validated);
    const semanticErrors = validateStorageSemantics(validated.storage);
    if (semanticErrors.length > 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Contract semantic validation failed: ${semanticErrors.join("; ")}`, "storage");
    validateModelStorageReferences(validated);
    validateRelationThroughConsistency(validated);
    validateToOneRelationNullabilityAgainstStorage(validated);
    return validated;
}
/**
* A same-space to-one relation that states `nullable` must agree with its local FK columns:
* nullable exactly when one of them is nullable (a column that cannot be resolved counts as
* nullable). A relation without the flag is left to hydration, which derives it the same way.
*/ function validateToOneRelationNullabilityAgainstStorage(contract) {
    for (const [namespaceId, namespace] of Object.entries(contract.domain.namespaces))for (const [modelName, model] of Object.entries(namespace.models)){
        const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(model.storage);
        for (const [relationName, relation] of Object.entries(model.relations)){
            if (!("on" in relation && (relation.cardinality === "1:1" || relation.cardinality === "N:1") && relation.to.space === void 0) || relation.nullable === void 0) continue;
            const location = `Relation "${relationName}" on model "${namespaceId}:${modelName}"`;
            const { ownsForeignKey, columns } = resolveSqlToOneRelationStorage(contract, storage, relation);
            if (!ownsForeignKey) {
                if (relation.nullable) continue;
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`${location} is required but does not own the foreign key, so nothing in storage guarantees the related row exists`, "storage");
            }
            const anyNullable = columns.some((column)=>column.nullable);
            if (relation.nullable === anyNullable) continue;
            const columnList = columns.filter((column)=>column.nullable !== relation.nullable).map((column)=>`"${column.name}"`).join(", ");
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](relation.nullable ? `${location} is nullable but every local FK column is NOT NULL (columns ${columnList})` : `${location} is required but a local FK column is nullable (columns ${columnList})`, "storage");
        }
    }
}
/** Storage column lookup for through-consistency validation. */ function lookupStorageColumn(contract, namespaceId, tableName, columnName) {
    const rawTable = contract.storage.namespaces[namespaceId]?.entries.table?.[tableName];
    if (rawTable === void 0) return;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(rawTable).columns[columnName];
}
/**
* Two storage columns share a type when their `nativeType` and `typeParams`
* match. The contract is canonicalized, so `typeParams` key order is stable and
* a JSON comparison is exact. `codecId` and `nullable` are intentionally not
* compared: they do not change the database-level type that governs a join.
*/ function sameStorageType(a, b) {
    return a.nativeType === b.nativeType && JSON.stringify(a.typeParams ?? null) === JSON.stringify(b.typeParams ?? null);
}
function describeColumnType(column) {
    return column.typeParams === void 0 ? column.nativeType : `${column.nativeType} ${JSON.stringify(column.typeParams)}`;
}
/**
* Validates one side of an N:M join: the junction columns and the model
* columns they pair against positionally must be equal in number, exist in
* their tables, and share the same storage type (`nativeType` + `typeParams`).
* The junction's storage foreign keys already guarantee this for user-declared
* FK constraints, but `through` is a logical descriptor never tied to them by
* the rest of validation — and the TS builder accepts explicit join columns
* without requiring a junction FK at all — so this checks the columns directly
* against storage, one path regardless of how the junction was authored.
*
* Joined columns must be the *same* storage type, not merely compatible:
* relying on implicit conversion (e.g. `text`↔`character`) is unsafe on writes
* — `character(n)` space-padding makes such coercions non-associative — and no
* ADR sanctions heterogeneous junction columns. Equality is the conservative
* default; it can be relaxed deliberately if a real use case ever appears.
*/ function validateThroughJoinSide(input) {
    const fail = (detail)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Many-to-many relation "${input.qualifiedName}" ${detail}`, "storage");
    if (input.junctionColumns.length !== input.modelColumns.length) throw fail(`pairs ${input.junctionColumnsLabel} (${input.junctionColumns.length}) with ${input.modelColumnsLabel} (${input.modelColumns.length}) of differing length; they join positionally and must match.`);
    for (const [index, junctionColumnName] of input.junctionColumns.entries()){
        const modelColumnRef = input.modelColumns[index];
        if (modelColumnRef === void 0) continue;
        const junctionColumn = lookupStorageColumn(input.contract, input.junctionNamespaceId, input.junctionTable, junctionColumnName);
        if (junctionColumn === void 0) throw fail(`${input.junctionColumnsLabel} references column "${junctionColumnName}" absent from junction table "${input.junctionNamespaceId}.${input.junctionTable}".`);
        const model = input.model;
        if (model === void 0) continue;
        let modelColumnName = modelColumnRef;
        if (model.fieldToColumn !== void 0) {
            const mapped = model.fieldToColumn[modelColumnRef];
            if (mapped === void 0) throw fail(`${input.modelColumnsLabel} references field "${modelColumnRef}" absent from model on table "${model.namespaceId}.${model.table}".`);
            modelColumnName = mapped.column;
        }
        const modelColumn = lookupStorageColumn(input.contract, model.namespaceId, model.table, modelColumnName);
        if (modelColumn === void 0) throw fail(`${input.modelColumnsLabel} references column "${modelColumnName}" absent from table "${model.namespaceId}.${model.table}".`);
        if (!sameStorageType(junctionColumn, modelColumn)) throw fail(`joins "${input.junctionTable}.${junctionColumnName}" (${describeColumnType(junctionColumn)}) with "${model.table}.${modelColumnName}" (${describeColumnType(modelColumn)}) of differing storage type; junction columns must match the type of the column they reference.`);
    }
}
/**
* Validates that every N:M relation's `through` descriptor is consistent with
* the storage columns it joins: both join sides match in column count,
* reference columns that exist in their tables, and pair columns of the same
* storage type. Without this, a `through` that disagrees with storage surfaces
* as a silently wrong JOIN at query time rather than a validation error here.
*/ function validateRelationThroughConsistency(contract) {
    for (const [namespaceId, namespace] of Object.entries(contract.domain.namespaces))for (const [modelName, model] of Object.entries(namespace.models))for (const [relationName, relation] of Object.entries(model.relations)){
        if (relation.cardinality !== "N:M") continue;
        const qualifiedName = `${namespaceId}.${modelName}.${relationName}`;
        const { on, through } = relation;
        const modelStorage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(model.storage);
        validateThroughJoinSide({
            contract,
            qualifiedName,
            modelColumns: on.localFields,
            modelColumnsLabel: "on.localFields",
            model: {
                namespaceId,
                table: modelStorage.table,
                fieldToColumn: modelStorage.fields
            },
            junctionColumns: through.parentColumns,
            junctionColumnsLabel: "through.parentColumns",
            junctionNamespaceId: through.namespaceId,
            junctionTable: through.table
        });
        const targetModel = relation.to.space === void 0 ? contract.domain.namespaces[relation.to.namespace]?.models[relation.to.model] : void 0;
        const targetModelSide = targetModel === void 0 ? void 0 : {
            namespaceId: relation.to.namespace,
            table: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(targetModel.storage).table
        };
        validateThroughJoinSide({
            contract,
            qualifiedName,
            modelColumns: through.targetColumns,
            modelColumnsLabel: "through.targetColumns",
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("model", targetModelSide),
            junctionColumns: through.childColumns,
            junctionColumnsLabel: "through.childColumns",
            junctionNamespaceId: through.namespaceId,
            junctionTable: through.table
        });
    }
}
;
 //# sourceMappingURL=validators-CR2v1106.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/validators-CR2v1106.mjs [app-rsc] (ecmascript) <export n as checkSqlDefaultBody>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkSqlDefaultBody",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$CR2v1106$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$CR2v1106$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/validators-CR2v1106.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/util-DQQgv2j1-D6INZaRG.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>compact,
    "t",
    ()=>collectOrderedParamRefs
]);
//#region ../../../2-sql/4-lanes/relational-core/dist/util-DQQgv2j1.mjs
function compact(o) {
    const out = {};
    for (const [k, v] of Object.entries(o)){
        if (v === void 0 || v === null) continue;
        if (Array.isArray(v) && v.length === 0) continue;
        out[k] = v;
    }
    return out;
}
/**
* Walks an AST's parameter references in first-encounter order and dedupes
* by ParamRef identity. The single canonical helper used by every consumer
* that aligns `plan.params` with metadata-by-index — the SQL builder lane,
* the SQL ORM client, the SQL runtime encoder, and the Postgres renderer's
* `$N` index map — so the four walks cannot drift in dedupe semantics.
*
* SQLite's `?`-placeholder renderer intentionally does NOT use this helper
* because it needs one params entry per occurrence in the SQL.
*/ function collectOrderedParamRefs(ast) {
    const seen = /* @__PURE__ */ new Set();
    const ordered = [];
    for (const ref of ast.collectParamRefs()){
        if (seen.has(ref)) continue;
        seen.add(ref);
        ordered.push(ref);
    }
    return Object.freeze(ordered);
}
;
 //# sourceMappingURL=util-DQQgv2j1-D6INZaRG.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/util-DQQgv2j1-D6INZaRG.mjs [app-rsc] (ecmascript) <export t as collectOrderedParamRefs>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectOrderedParamRefs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$util$2d$DQQgv2j1$2d$D6INZaRG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$util$2d$DQQgv2j1$2d$D6INZaRG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/util-DQQgv2j1-D6INZaRG.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export M as RawExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RawExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["M"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ddl-types-DOgOmDOh-Cs_MY05h.mjs [app-rsc] (ecmascript) <export u as isDdlNode>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDdlNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ddl$2d$types$2d$DOgOmDOh$2d$Cs_MY05h$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ddl-types-DOgOmDOh-Cs_MY05h.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript) <export d as namingOfLiveName>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "namingOfLiveName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["d"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$naming$2d$DKr4TJd7$2d$Cszhq9RV$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/naming-DKr4TJd7-Cszhq9RV.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript) <export n as RelationalSchemaNodeKind>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelationalSchemaNodeKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$DvrIPGUN$2d$wxavfzyJ$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-DvrIPGUN-wxavfzyJ.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/referential-action-sql-DSqkrySN.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>REFERENTIAL_ACTION_SQL
]);
//#region ../../../2-sql/1-core/contract/dist/referential-action-sql.mjs
/**
* Maps each `ReferentialAction` value to the SQL keyword used in ON DELETE /
* ON UPDATE clauses. Shared across the migration planner and adapter DDL
* renderers — single source of truth for the action → SQL mapping.
*/ const REFERENTIAL_ACTION_SQL = {
    noAction: "NO ACTION",
    restrict: "RESTRICT",
    cascade: "CASCADE",
    setNull: "SET NULL",
    setDefault: "SET DEFAULT"
};
;
 //# sourceMappingURL=referential-action-sql-DSqkrySN.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/referential-action-sql-DSqkrySN.mjs [app-rsc] (ecmascript) <export t as REFERENTIAL_ACTION_SQL>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REFERENTIAL_ACTION_SQL",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$referential$2d$action$2d$sql$2d$DSqkrySN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$referential$2d$action$2d$sql$2d$DSqkrySN$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/referential-action-sql-DSqkrySN.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/errors-B5g0xWro-mWH2C07F.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>sqlFamilyError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-rsc] (ecmascript) <export o as structuredError>");
;
//#region ../../../2-sql/9-family/dist/errors-B5g0xWro.mjs
function sqlFamilyError(code, message, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])(code, message, options);
}
;
 //# sourceMappingURL=errors-B5g0xWro-mWH2C07F.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/verify-BVk5bjdH-BXgGLM2U.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>parseContractMarkerRow,
    "t",
    ()=>collectSupportedCodecTypeIds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$errors$2d$B5g0xWro$2d$mWH2C07F$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/errors-B5g0xWro-mWH2C07F.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-rsc] (ecmascript) <export t as blindCast>");
;
;
;
//#region ../../../2-sql/9-family/dist/verify-BVk5bjdH.mjs
const MetaSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    "[string]": "unknown"
});
function parseMeta(meta) {
    if (meta === null || meta === void 0) return {};
    let parsed;
    if (typeof meta === "string") try {
        parsed = JSON.parse(meta);
    } catch  {
        return {};
    }
    else parsed = meta;
    const result = MetaSchema(parsed);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) return {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(result);
}
/**
* SQLite stores `contract_json` as TEXT, so the wire shape is a JSON string;
* Postgres uses `jsonb` and returns an already-parsed value. Normalize both
* here so `ContractMarkerRecord.contractJson` is always the structured form.
*/ function parseContractJson(value) {
    if (value === null || value === void 0) return null;
    if (typeof value !== "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(value);
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(JSON.parse(value));
    } catch  {
        return null;
    }
}
const ContractMarkerRowSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    core_hash: "string",
    profile_hash: "string",
    "contract_json?": "unknown | null",
    "canonical_version?": "number | null",
    "updated_at?": "Date | string",
    "app_tag?": "string | null",
    "meta?": "unknown | null",
    invariants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])("string").array()
});
/**
* Parses a contract marker row from database query result.
* This is SQL-specific parsing logic (handles SQL row structure with snake_case columns).
*/ function parseContractMarkerRow(row) {
    const result = ContractMarkerRowSchema(row);
    if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) {
        const messages = result.map((p)=>p.message).join("; ");
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$errors$2d$B5g0xWro$2d$mWH2C07F$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("CONTRACT.MARKER_ROW_CORRUPT", `Invalid contract marker row: ${messages}`, {
            why: "The contract marker row read from the database does not match the expected marker shape.",
            fix: "Re-sign the database with `prisma db sign`, or repair the marker table.",
            nextActions: [
                {
                    kind: "run-command",
                    label: "Re-sign the database",
                    command: "{bin} db sign"
                },
                {
                    kind: "user-choice",
                    label: "Repair the marker table by hand",
                    reason: messages
                }
            ],
            meta: {
                issues: messages
            }
        });
    }
    const updatedAt = result.updated_at ? result.updated_at instanceof Date ? result.updated_at : new Date(result.updated_at) : /* @__PURE__ */ new Date();
    return {
        storageHash: result.core_hash,
        profileHash: result.profile_hash,
        contractJson: parseContractJson(result.contract_json),
        canonicalVersion: result.canonical_version ?? null,
        updatedAt,
        appTag: result.app_tag ?? null,
        meta: parseMeta(result.meta),
        invariants: result.invariants
    };
}
/**
* Collects supported codec type IDs from adapter and extension manifests.
* Returns a sorted, unique array of type IDs that are declared in the manifests.
* This enables coverage checks by comparing contract column types against supported types.
*
* Note: This extracts type IDs from manifest type imports, not from runtime codec registries.
* The manifests declare which codec types are available, but the actual type IDs
* are defined in the codec-types TypeScript modules that are imported.
*
* For MVP, we return an empty array since extracting type IDs from TypeScript modules
* would require runtime evaluation or static analysis. This can be enhanced later.
*/ function collectSupportedCodecTypeIds(descriptors) {
    return [];
}
;
 //# sourceMappingURL=verify-BVk5bjdH-BXgGLM2U.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/verify-BVk5bjdH-BXgGLM2U.mjs [app-rsc] (ecmascript) <export n as parseContractMarkerRow>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseContractMarkerRow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$verify$2d$BVk5bjdH$2d$BXgGLM2U$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$verify$2d$BVk5bjdH$2d$BXgGLM2U$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/verify-BVk5bjdH-BXgGLM2U.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/dist-C_q1_QR9.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>createSqlOperationRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$operations$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/operations.mjs [app-rsc] (ecmascript)");
;
//#region ../../../2-sql/1-core/operations/dist/index.mjs
function createSqlOperationRegistry() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$operations$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOperationRegistry"])();
}
;
 //# sourceMappingURL=dist-C_q1_QR9.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/middleware-CMr4CHNz-DHIUdxlm.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>createSqlParamRefMutator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$util$2d$DQQgv2j1$2d$D6INZaRG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/util-DQQgv2j1-D6INZaRG.mjs [app-rsc] (ecmascript)");
;
//#region ../../../2-sql/4-lanes/relational-core/dist/middleware-CMr4CHNz.mjs
/**
* Build a {@link SqlParamRefMutatorInternal} for the given lowered plan.
*
* The mutator captures `plan.params` by reference and walks
* `plan.ast` (via `collectOrderedParamRefs`) on demand to build
* entries. Mutations write to a lazily-allocated working copy so the
* fast path (no mutation) preserves bit-for-bit reference identity to
* the original `plan.params`.
*
* Threading: `plan.ast` carries the canonical `ParamRef` ordering used
* by every consumer (renderer's `$N` index map, encode-side metadata
* walk, etc.). The mutator's `entries()` yields the same order so
* middleware that filters by codec id sees ParamRefs in the order the
* runtime will encode them.
*/ function createSqlParamRefMutator(plan) {
    const originalParams = plan.params;
    const refs = plan.ast ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$util$2d$DQQgv2j1$2d$D6INZaRG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(plan.ast) : [];
    let workingParams;
    const indexOfRef = (handle)=>{
        return refs.indexOf(handle);
    };
    const ensureWorkingParams = ()=>{
        if (!workingParams) workingParams = [
            ...originalParams
        ];
        return workingParams;
    };
    const writeAt = (index, value)=>{
        const buffer = ensureWorkingParams();
        buffer[index] = value;
    };
    function* entries() {
        const view = workingParams ?? originalParams;
        for(let i = 0; i < refs.length; i++){
            const ref = refs[i];
            if (!ref) continue;
            const handle = ref;
            let value;
            let codecId;
            if (ref.kind === "param-ref") {
                value = i < view.length ? view[i] : ref.value;
                codecId = ref.codec?.codecId;
            } else {
                value = i < view.length ? view[i] : void 0;
                codecId = ref.codec.codecId;
            }
            yield {
                ref: handle,
                value,
                codecId
            };
        }
    }
    function replaceValue(handle, newValue) {
        const index = indexOfRef(handle);
        if (index < 0) return;
        writeAt(index, newValue);
    }
    function replaceValues(updates) {
        for (const { ref, newValue } of updates){
            const index = indexOfRef(ref);
            if (index < 0) continue;
            writeAt(index, newValue);
        }
    }
    return {
        entries,
        replaceValue,
        replaceValues,
        currentParams () {
            if (!workingParams) return originalParams;
            return Object.freeze([
                ...workingParams
            ]);
        }
    };
}
;
 //# sourceMappingURL=middleware-CMr4CHNz-DHIUdxlm.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/aggregate-descriptor-registry-DzThdoju.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>isSqlAggregateDescriptor,
    "t",
    ()=>buildSqlAggregateDescriptorRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/structured-error-BXbihKQ-.mjs [app-rsc] (ecmascript) <export o as structuredError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$capabilities$2d$ByvrTdNS$2d$BGxo8i2x$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__aggregateDescriptorKey$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/capabilities-ByvrTdNS-BGxo8i2x.mjs [app-rsc] (ecmascript) <export t as aggregateDescriptorKey>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$capabilities$2d$ByvrTdNS$2d$BGxo8i2x$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__isAggregateDescriptor$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/capabilities-ByvrTdNS-BGxo8i2x.mjs [app-rsc] (ecmascript) <export n as isAggregateDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$capabilities$2d$ByvrTdNS$2d$BGxo8i2x$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__isAnyInputAggregateDescriptor$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/capabilities-ByvrTdNS-BGxo8i2x.mjs [app-rsc] (ecmascript) <export r as isAnyInputAggregateDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$capabilities$2d$ByvrTdNS$2d$BGxo8i2x$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__isNoInputAggregateDescriptor$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/capabilities-ByvrTdNS-BGxo8i2x.mjs [app-rsc] (ecmascript) <export i as isNoInputAggregateDescriptor>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$components$2d$Dzqm9cyw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__settleAggregateOverloads$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/components-Dzqm9cyw.mjs [app-rsc] (ecmascript) <export t as settleAggregateOverloads>");
;
;
;
;
//#region ../../../2-sql/4-lanes/relational-core/dist/exports/aggregate-descriptor-registry.mjs
/** Structural validation of a contributed SQL aggregate descriptor: the declarative shape plus a callable lowering hook where one is declared. */ function isSqlAggregateDescriptor(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$capabilities$2d$ByvrTdNS$2d$BGxo8i2x$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__isAggregateDescriptor$3e$__["isAggregateDescriptor"])(value)) return false;
    return !("lower" in value) || value.lower === void 0 || typeof value.lower === "function";
}
function namedOutputRef(output, input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"])({
        codecId: output.codecId,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("typeParams", output.typeParams?.(input))
    });
}
/** The descriptor's own answer for a result set carrying no row, carried into resolution unchanged. */ function resultNullability(descriptor) {
    return descriptor.nullable ? {
        nullable: true
    } : {
        nullable: false,
        emptyResultJson: descriptor.emptyResultJson
    };
}
/**
* Validate every contributed aggregate descriptor and settle its matches against the composed codec set.
*
* Validation covers the descriptor's own shape, the lowering rule — an operation outside the closed SQL aggregate alphabet must carry a `lower` hook, there being no plain `AggregateExpr` form for it — a second claim on one `(operation, input)` pair, and two trait descriptors that both claim a registered codec for one operation — the last of which only a composed stack can detect, which is why it is settled here rather than at contribution.
*/ function buildSqlAggregateDescriptorRegistry(descriptors, codecDescriptors) {
    const validated = [];
    const claimedKeys = /* @__PURE__ */ new Set();
    for (const candidate of descriptors){
        if (!isSqlAggregateDescriptor(candidate)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.AGGREGATE_DESCRIPTOR_INVALID", `Contributed value ${describeCandidate(candidate)} is not a valid SQL aggregate descriptor.`, {
            why: "Aggregate resolution reads a declared operation, input match, result codec, and nullability — plus, for a non-nullable result, the empty-result value; a lowering hook, where present, must be callable.",
            fix: "Declare `operation`, `input` (`none` / `any` / `codec` / `trait`), `output` (`self` / `codec`), and `nullable` on the descriptor, adding `emptyResultJson` where `nullable` is false.",
            meta: {
                descriptor: describeCandidate(candidate)
            }
        });
        const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$capabilities$2d$ByvrTdNS$2d$BGxo8i2x$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__aggregateDescriptorKey$3e$__["aggregateDescriptorKey"])(candidate);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["V"])(candidate.operation) && candidate.lower === void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.AGGREGATE_LOWERING_MISSING", `Aggregate descriptor '${key}' declares operation '${candidate.operation}', which is outside the SQL aggregate alphabet (${[
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"]
        ].join(", ")}) and carries no lowering hook.`, {
            why: "An operation in the alphabet lowers to a plain aggregate call; renderers know no other operation, so any other name must build its expression through a `lower` hook from existing nodes.",
            fix: "Declare a `lower` hook on the descriptor, or use an operation name from the SQL aggregate alphabet.",
            meta: {
                operation: candidate.operation,
                key
            }
        });
        if (claimedKeys.has(key)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.DUPLICATE_AGGREGATE_DESCRIPTOR", `Duplicate aggregate descriptor for '${key}'.`, {
            why: "Each operation/input pair resolves to exactly one result codec, so exactly one component may claim it.",
            fix: "Remove the duplicate target, adapter, or extension contribution.",
            meta: {
                key
            }
        });
        claimedKeys.add(key);
        validated.push(candidate);
    }
    const settled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$components$2d$Dzqm9cyw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__settleAggregateOverloads$3e$__["settleAggregateOverloads"])(validated, codecDescriptors.values());
    const ambiguity = settled.ambiguities[0];
    if (ambiguity !== void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.AMBIGUOUS_AGGREGATE_DESCRIPTOR", `Ambiguous aggregate descriptors for '${ambiguity.operation}' over codec '${ambiguity.codecId}': traits ${ambiguity.traits.join(", ")} all claim it.`, {
        why: "A codec advertising several claimed traits leaves the result codec undetermined.",
        fix: `Contribute an exact descriptor for '${ambiguity.operation}' over '${ambiguity.codecId}', or narrow the overlapping trait contributions.`,
        meta: {
            operation: ambiguity.operation,
            codecId: ambiguity.codecId,
            traits: ambiguity.traits
        }
    });
    for (const descriptor of validated){
        const outputCodecId = descriptor.output.kind === "codec" ? descriptor.output.codecId : descriptor.input.kind === "codec" ? descriptor.input.codecId : void 0;
        if (outputCodecId !== void 0 && codecDescriptors.descriptorFor(outputCodecId) === void 0) {
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$capabilities$2d$ByvrTdNS$2d$BGxo8i2x$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__aggregateDescriptorKey$3e$__["aggregateDescriptorKey"])(descriptor);
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$structured$2d$error$2d$BXbihKQ$2d2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__o__as__structuredError$3e$__["structuredError"])("RUNTIME.AGGREGATE_OUTPUT_CODEC_MISSING", `Aggregate descriptor '${key}' names result codec '${outputCodecId}', which the composed stack does not register.`, {
                why: "A resolved aggregate decodes its result through the declared codec; a codec the stack does not compose cannot decode anything.",
                fix: "Register the codec on the composed stack, or declare a result codec the stack composes.",
                meta: {
                    operation: descriptor.operation,
                    key,
                    outputCodecId
                }
            });
        }
    }
    const tables = /* @__PURE__ */ new Map();
    for (const [operation, entry] of settled.operations)tables.set(operation, {
        withoutInput: resolveWithoutInput(operation, entry.noInput) ?? resolveWithoutInput(operation, entry.anyInput),
        byCodecId: entry.byCodecId,
        anyInput: entry.anyInput
    });
    return {
        resolve (operation, input) {
            const table = tables.get(operation);
            if (table === void 0) return void 0;
            if (input === void 0) return table.withoutInput;
            const descriptor = table.byCodecId.get(input.codecId) ?? table.anyInput;
            if (descriptor === void 0) return void 0;
            return {
                operation,
                output: descriptor.output.kind === "self" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["B"])(input) : namedOutputRef(descriptor.output, input),
                ...resultNullability(descriptor),
                lower: descriptor.lower
            };
        },
        *values () {
            yield* validated;
        }
    };
}
/**
* Resolve the overload that answers a call carrying no input. Both kinds that qualify name their result codec outright, there being no input codec to reuse.
*/ function resolveWithoutInput(operation, descriptor) {
    if (descriptor === void 0) return void 0;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$capabilities$2d$ByvrTdNS$2d$BGxo8i2x$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__isNoInputAggregateDescriptor$3e$__["isNoInputAggregateDescriptor"])(descriptor) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$capabilities$2d$ByvrTdNS$2d$BGxo8i2x$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__r__as__isAnyInputAggregateDescriptor$3e$__["isAnyInputAggregateDescriptor"])(descriptor)) return;
    return {
        operation,
        output: namedOutputRef(descriptor.output, void 0),
        ...resultNullability(descriptor),
        lower: descriptor.lower
    };
}
function describeCandidate(value) {
    if (typeof value === "object" && value !== null && "operation" in value) return `'${String(value.operation)}'`;
    return `of type ${typeof value}`;
}
;
 //# sourceMappingURL=aggregate-descriptor-registry-DzThdoju.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/prepared-query-BJr50wPm-ChoqfJbX.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>runPreparedQuery,
    "n",
    ()=>preparedStatementQuery,
    "r",
    ()=>runPreparedExecute,
    "t",
    ()=>preparedStatementExecute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-rsc] (ecmascript) <export n as invariant>");
;
//#region ../../../2-sql/5-runtime/dist/prepared-query-BJr50wPm.mjs
const preparedStatementExecute = Symbol("preparedStatementExecute");
function isPreparedStatementExecuteTarget(target) {
    return preparedStatementExecute in target;
}
function runPreparedExecute(target, statement, params, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(isPreparedStatementExecuteTarget(target), "RuntimeQueryable is missing the prepared statement execute bridge");
    return target[preparedStatementExecute](statement, params, options);
}
const preparedStatementQuery = Symbol("preparedStatementQuery");
function isPreparedStatementQueryTarget(target) {
    return preparedStatementQuery in target;
}
function runPreparedQuery(target, statement, params, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(isPreparedStatementQueryTarget(target), "RuntimeQueryable is missing the prepared statement query bridge");
    return target[preparedStatementQuery](statement, params, options);
}
;
 //# sourceMappingURL=prepared-query-BJr50wPm-ChoqfJbX.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export c as B>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export i as I>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export a as L>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "L",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["a"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export o as R>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "R",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript) <export s as z>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "z",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$ast$2d$CEGv$2d$zzk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/ast-CEGv-zzk.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript) <export t as AggregateExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AggregateExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/runtime-DfvE_FqD.mjs [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>timestampNowRuntimeGenerator,
    "r",
    ()=>runtime_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$CVrEeaJp$2d$Bt_PHBSf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/timestamp-now-generator-CVrEeaJp-Bt_PHBSf.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$default$2d$namespace$2d$D4vCwkXg$2d$BEZbN38y$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__UNBOUND_DOMAIN_NAMESPACE_ID$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/default-namespace-D4vCwkXg-BEZbN38y.mjs [app-rsc] (ecmascript) <export t as UNBOUND_DOMAIN_NAMESPACE_ID>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$resolve$2d$domain$2d$model$2d$BovPAsW2$2d$8rwyzjxp$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__resolveDomainModel$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/resolve-domain-model-BovPAsW2-8rwyzjxp.mjs [app-rsc] (ecmascript) <export t as resolveDomainModel>");
;
;
//#region ../../../2-sql/9-family/dist/runtime.mjs
/**
* Creates a SQL execution-plane family instance.
*
* This will be renamed to `createSqlExecutionFamilyInstance()` as part of `TML-1842`.
*/ function createSqlRuntimeFamilyInstance() {
    return {
        familyId: "sql"
    };
}
/**
* SQL execution-plane family descriptor.
*
* Note: this is currently named `sqlRuntimeFamilyDescriptor` because the execution plane
* framework types are still using the `Runtime*` naming (`RuntimeFamilyDescriptor`, etc.).
*
* This will be renamed to `sqlExecutionFamilyDescriptor` as part of `TML-1842`.
*/ const sqlRuntimeFamilyDescriptor = {
    kind: "family",
    id: "sql",
    familyId: "sql",
    version: "0.0.1",
    create () {
        return createSqlRuntimeFamilyInstance();
    }
};
Object.freeze(sqlRuntimeFamilyDescriptor);
/**
* Builds the canonical runtime-plane generator for the wall-clock-now
* mutation default. Returns `new Date()`; semantics are target-agnostic
* so all SQL targets share this single implementation.
*
* Declares `stability: 'query'` so a single ORM bulk operation
* (e.g. `createAll([...])`) shares one timestamp across every row and
* every timestamp-defaulted column. Matches Prisma 6's `@updatedAt`
* semantics: one `new Date()` per lowered mutation, not per row.
*
* Lives in a runtime-plane-only module so the control-plane
* `timestamp-now-generator.ts` (descriptor + authoring presets) stays
* free of `@internal/sql-runtime` imports.
*/ function timestampNowRuntimeGenerator() {
    return {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$timestamp$2d$now$2d$generator$2d$CVrEeaJp$2d$Bt_PHBSf$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"],
        generate: ()=>/* @__PURE__ */ new Date(),
        stability: "query"
    };
}
var runtime_default = sqlRuntimeFamilyDescriptor;
;
 //# sourceMappingURL=runtime-DfvE_FqD.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/runtime-DfvE_FqD.mjs [app-rsc] (ecmascript) <locals> <export i as timestampNowRuntimeGenerator>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timestampNowRuntimeGenerator",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2d$DfvE_FqD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["i"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$runtime$2d$DfvE_FqD$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/runtime-DfvE_FqD.mjs [app-rsc] (ecmascript) <locals>");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/plan-Dh0LbYIv-Crx5-ThG.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>planFromAst
]);
//#region ../../../2-sql/4-lanes/relational-core/dist/plan-Dh0LbYIv.mjs
/**
* Wraps an `AnyQueryAst` (typically a `RawQueryAst`, minted by a raw statement
* terminator or package-internally by an extension's migration factory) in a
* fully-populated `SqlQueryPlan` whose `meta` is sourced from the supplied
* contract.
*
* Centralising the envelope here means consumers (raw statement terminators,
* cipherstash migration factories) cannot drift on `storageHash` /
* `target` / `targetFamily`, which would otherwise surface as a subtle
* `assertContractMatches` failure inside `dataTransform`. `params` defaults
* to `[]` because parameters embedded in the AST as `ParamRef`s are resolved
* at lowering time (`encodeParams` walks `plan.ast.collectParamRefs()`),
* not at plan-construction time.
*
* The default `laneId` of `'raw'` reflects raw-SQL plans' standard lane tag;
* callers (e.g. a future `sql-raw-factory`) may override to differentiate
* the plan's provenance.
*/ function planFromAst(ast, contract, laneId = "raw") {
    return {
        ast,
        params: [],
        meta: {
            target: contract.target,
            targetFamily: contract.targetFamily,
            storageHash: contract.storage.storageHash,
            lane: laneId
        }
    };
}
;
 //# sourceMappingURL=plan-Dh0LbYIv-Crx5-ThG.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/expression-DqrE3myO.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>param,
    "i",
    ()=>isExpression,
    "n",
    ()=>codecOf,
    "o",
    ()=>toExpr,
    "r",
    ()=>createRawSql,
    "t",
    ()=>buildOperation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$plan$2d$Dh0LbYIv$2d$Crx5$2d$ThG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/plan-Dh0LbYIv-Crx5-ThG.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/runtime-error-BA9d7XjZ-BlT8t6LB.mjs [app-rsc] (ecmascript) <export n as runtimeError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/assertions-Dw1lZz_Q.mjs [app-rsc] (ecmascript) <export n as invariant>");
;
;
;
;
//#region ../../../2-sql/4-lanes/relational-core/dist/exports/expression.mjs
/**
* Resolve a raw value or an Expression into an AST expression node.
*
* When `value` is an object with a callable `buildAst`, the AST it wraps is returned. Otherwise the value is embedded as a ParamRef tagged with the caller-supplied {@link CodecRef} (when known). The runtime resolves the ref via `contractCodecs.forCodecRef(codec)`; content-keyed memoisation collapses repeated lookups for the same logical column onto one shared codec.
*
* Operation implementations that compare a column-bound expression to a user value derive the column's {@link CodecRef} from the column-bound side (via {@link codecOf}) and forward it here so encode-side dispatch resolves to the per-instance codec for parameterized codec ids (`vector(1024)` vs. `vector(1536)`).
*/ function toExpr(value, codec) {
    if (isExpression(value)) return value.buildAst();
    if (codec === void 0) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.PARAM_REF_CODEC_REQUIRED", `Cannot construct a ParamRef for a ${value === null ? "null" : typeof value} value without an explicit codec. Provide a CodecRef at the call site or use a column-bound builder path.`);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"].of(value, {
        codec
    });
}
/**
* Construct a `ParamRef` for a value whose codec identity is known at call time. Use this when interpolating a value into a raw SQL expression and the codec cannot be inferred from context — e.g. `param(myDate, { codecId: 'pg/timestamptz-temporal@1' })`.
*/ function param(value, opts) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"].of(value, {
        codec: {
            codecId: opts.codecId
        }
    });
}
/**
* Derive the {@link CodecRef} carried by an expression-like value.
*
* Resolution order:
* 1. `wrapper.returnType.codec` — scope-level codec when the scope was built from contract storage.
* 2. `{ codecId: wrapper.returnType.codecId }` — minimal ref derived from the expression's declared codec id (covers synthetic expressions like `count()` whose returnType has a known codec id but no explicit column binding).
*
* Returns `undefined` for raw scalar values (non-expression-like).
*/ function codecOf(value) {
    if (!isExpression(value)) return void 0;
    return value.returnType?.codec ?? (value.returnType?.codecId ? {
        codecId: value.returnType.codecId
    } : void 0);
}
function isExpression(value) {
    return typeof value === "object" && value !== null && "buildAst" in value && typeof value.buildAst === "function";
}
/**
* Construct an OperationExpr AST node and wrap it as a typed Expression. Operation implementations use this to turn their user-facing arguments into the AST node the compilation pipeline eventually lowers to SQL.
*/ function buildOperation(spec) {
    const [self, ...rest] = spec.args;
    const op = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["E"]({
        method: spec.method,
        self,
        args: rest.length > 0 ? rest : void 0,
        returns: spec.returns,
        lowering: spec.lowering
    });
    return {
        returnType: spec.returns,
        buildAst: ()=>op
    };
}
function resolveInterpolation(adapter, value) {
    if (isExpression(value)) return value.buildAst();
    if (value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"]) return value;
    if (typeof value === "number" || typeof value === "bigint" || typeof value === "string" || typeof value === "boolean" || value instanceof Uint8Array) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"].of(value, {
        codec: {
            codecId: adapter.inferCodec(value)
        }
    });
    throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$error$2d$BA9d7XjZ$2d$BlT8t6LB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__runtimeError$3e$__["runtimeError"])("RUNTIME.RAW_SQL_UNSUPPORTED_INTERPOLATION", "unsupported JS value type for raw-SQL interpolation: wrap this value in `param(...)` with an explicit codec");
}
function isRawRowQuery(value) {
    return typeof value === "object" && value !== null && "buildAst" in value && typeof value.buildAst === "function" && "build" in value && typeof value.build === "function";
}
function templateParts(adapter, strings, values) {
    const parts = [
        strings[0] ?? ""
    ];
    values.forEach((value, i)=>{
        if (isRawRowQuery(value)) parts.push(...value.buildAst().parts);
        else parts.push(resolveInterpolation(adapter, value));
        parts.push(strings[i + 1] ?? "");
    });
    return parts;
}
/**
* Normalizes each authored entry to a {@link RawQueryColumn}. The record is
* assembled with `Object.fromEntries`, which defines each key as an own
* property: a spec built at runtime with a `__proto__` key reaches the AST,
* which refuses it by name, rather than silently setting the record's
* prototype and leaving the column to vanish.
*/ function resolveRowSpec(spec) {
    return Object.fromEntries(Object.entries(spec).map(([name, entry])=>[
            name,
            typeof entry === "string" ? {
                codecId: entry,
                nullable: false
            } : {
                codecId: entry.codecId,
                nullable: entry.nullable ?? false
            }
        ]));
}
function createRawSql(adapter, planContext) {
    if (planContext === void 0) return (strings, ...values)=>new RawSqlBuilderImpl(templateParts(adapter, strings, values));
    const context = planContext;
    return (strings, ...values)=>new RawSqlStatementBuilderImpl(templateParts(adapter, strings, values), context);
}
var RawSqlBuilderImpl = class {
    parts;
    constructor(parts){
        this.parts = parts;
    }
    returns(spec) {
        const codecId = typeof spec === "string" ? spec : spec.codecId;
        const nullable = typeof spec === "string" ? false : spec.nullable ?? false;
        const paramSpec = {
            codecId,
            nullable
        };
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["M"]({
            parts: this.parts,
            returns: paramSpec
        });
        return {
            returnType: {
                codecId,
                nullable
            },
            buildAst: ()=>node
        };
    }
};
var RawSqlStatementBuilderImpl = class extends RawSqlBuilderImpl {
    planContext;
    constructor(parts, planContext){
        super(parts);
        this.planContext = planContext;
    }
    returnsRow(spec) {
        const node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["N"].rows(this.parts, resolveRowSpec(spec));
        const result = node.result;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$assertions$2d$Dw1lZz_Q$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__invariant$3e$__["invariant"])(result.kind === "rows", "RawQueryAst.rows built a non-rows result");
        return {
            returns: result.columns,
            buildAst: ()=>node,
            build: ()=>this.planFor(node)
        };
    }
    affectedCount() {
        const node = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["N"].affectedCount(this.parts);
        return {
            build: ()=>this.planFor(node)
        };
    }
    planFor(node) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$plan$2d$Dh0LbYIv$2d$Crx5$2d$ThG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(node, this.planContext.contract, this.planContext.laneId);
    }
};
;
 //# sourceMappingURL=expression-DqrE3myO.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/builder__runtime.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpressionImpl",
    ()=>ExpressionImpl,
    "createAggregateFunctions",
    ()=>createAggregateFunctions,
    "createFieldProxy",
    ()=>createFieldProxy,
    "createFunctions",
    ()=>createFunctions,
    "createRawLane",
    ()=>createRawLane,
    "sql",
    ()=>sql
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-ZNKYVjLr-DzjvSHKB.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$util$2d$DQQgv2j1$2d$D6INZaRG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/util-DQQgv2j1-D6INZaRG.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/expression-DqrE3myO.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$codec$2d$descriptor$2d$registry$2d$ECZ4ohtG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/codec-descriptor-registry-ECZ4ohtG.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DXmHIbAr$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__assertAnnotationsApplicable$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/runtime-DXmHIbAr.mjs [app-rsc] (ecmascript) <export a as assertAnnotationsApplicable>");
;
;
;
;
;
//#region ../../../2-sql/4-lanes/sql-builder/dist/runtime/index.mjs
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
*/ function blindCast(input) {
    return input;
}
/**
* Returns an object with the key/value if value is defined, otherwise an empty object.
*
* Use with spread to conditionally include optional properties while satisfying
* exactOptionalPropertyTypes. This is explicit about which properties are optional
* and won't inadvertently strip other undefined values.
*
* @example
* ```typescript
* // Instead of:
* const obj = {
*   required: 'value',
*   ...(optional ? { optional } : {}),
* };
*
* // Use:
* const obj = {
*   required: 'value',
*   ...ifDefined('optional', optional),
* };
* ```
*/ function ifDefined(key, value) {
    return value !== void 0 ? blindCast({
        [key]: value
    }) : {};
}
function structuredError(code, message, options) {
    const error = options?.cause !== void 0 ? new Error(message, {
        cause: options.cause
    }) : new Error(message);
    Object.defineProperty(error, "name", {
        value: "StructuredError",
        configurable: true
    });
    return Object.assign(error, {
        code,
        ...ifDefined("why", options?.why),
        ...ifDefined("fix", options?.fix),
        ...ifDefined("nextActions", options?.nextActions),
        ...ifDefined("where", options?.where),
        ...ifDefined("severity", options?.severity),
        ...ifDefined("meta", options?.meta),
        ...ifDefined("docsUrl", options?.docsUrl)
    });
}
/**
* Runtime wrapper around a relational-core AST expression node. Carries ScopeField metadata (codecId, nullable) so aggregate-like combinators can propagate the input codec onto their result.
*
* `returnType.codec` records the column-bound codec ref when the field-proxy knows the binding — both the namespaced form (`f.user.email` → `ColumnRef`) and the top-level shortcut (`f.email` → `IdentifierRef`) stamp the ref derived from contract storage. `codecOf(expression)` exposes it for operation implementations forwarding the ref to `toExpr`.
*
* `projectionAst` carries the descriptor-lowered rendering of the expression, where a target declares one (e.g. SQLite's `CAST(count(*) AS TEXT)`). Lowering exists to carry the value across the driver boundary, so only the projection site consumes it — predicate and ordering positions (`buildAst()`) keep the plain form, where the rendering would change SQL semantics.
*/ var ExpressionImpl = class {
    ast;
    projectionAst;
    returnType;
    constructor(ast, returnType, projectionAst){
        this.ast = ast;
        this.returnType = returnType;
        this.projectionAst = projectionAst;
    }
    buildAst() {
        return this.ast;
    }
    buildProjectionAst() {
        return this.projectionAst ?? this.ast;
    }
};
/**
* An aggregate whose operation lies outside the SQL aggregate alphabet: the expression exists only in its descriptor-lowered form, so only the projection may consume it.
*
* Predicate and ordering positions build the plain form through `buildAst()` and are refused at authoring time — the lowered rendering exists to carry the value across the driver boundary, and comparing or sorting by it inside the database would change SQL semantics (a textual rendering compares lexicographically).
*/ var ProjectionOnlyExpressionImpl = class extends ExpressionImpl {
    operation;
    constructor(operation, lowered, returnType){
        super(lowered, returnType, lowered);
        this.operation = operation;
    }
    buildAst() {
        throw structuredError("ORM.AGGREGATE_PROJECTION_ONLY", `Aggregate operation '${this.operation}' is projection-only: it has no plain SQL form for HAVING, ORDER BY, or comparison positions.`, {
            why: "An operation outside the SQL aggregate alphabet reaches SQL only through its descriptor's lowering hook — a rendering for the driver boundary. HAVING and ORDER BY compare the value inside the database, where that rendering would change SQL semantics.",
            fix: `Project '${this.operation}' in a select and filter or order on the projected value, or use an operation from the SQL aggregate alphabet.`,
            meta: {
                operation: this.operation
            }
        });
    }
};
/**
* The AST to project for an expression: the descriptor-lowered form when the expression carries one, the plain form otherwise. `resolveSelectArgs` calls this where a lane expression becomes a `ProjectionItem` — the one place the value crosses the driver boundary.
*/ function projectionAstOf(expr) {
    return expr instanceof ExpressionImpl ? expr.buildProjectionAst() : expr.buildAst();
}
function createFieldProxy(scope) {
    return new Proxy(blindCast({}), {
        get (_target, prop) {
            if (Object.hasOwn(scope.topLevel, prop)) {
                const topField = scope.topLevel[prop];
                if (topField) return new ExpressionImpl(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["g"].of(prop), topField);
            }
            if (Object.hasOwn(scope.namespaces, prop)) {
                const nsFields = scope.namespaces[prop];
                if (nsFields) return createNamespaceProxy(prop, nsFields);
            }
        }
    });
}
function createNamespaceProxy(namespaceName, fields) {
    return new Proxy({}, {
        get (_target, prop) {
            if (Object.hasOwn(fields, prop)) {
                const field = fields[prop];
                if (field) return new ExpressionImpl(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"].of(namespaceName, prop), field);
            }
        }
    });
}
/**
* A bug in Prisma 8, not a user error. Never catch this except at the
* outermost boundary for crash reporting — an InternalError means an invariant
* broke and the process cannot reliably continue. User-facing failures use
* `structuredError` with a dotted code instead.
*/ var InternalError = class extends Error {
    isPrismaInternalError = true;
    constructor(message, options){
        super(message, options?.cause !== void 0 ? {
            cause: options.cause
        } : void 0);
        this.name = "InternalError";
    }
};
/**
* Asserts that a value is defined (not null or undefined).
* Use for invariants where the value should always exist at runtime.
*
* @throws Error if value is null or undefined
*
* @example
* ```typescript
* const table = storage.namespaces[namespaceId].entries.table[tableName];
* assertDefined(table, `Table "${tableName}" not found`);
* // table is now narrowed to non-nullable
* ```
*/ function assertDefined(value, message) {
    if (value === null || value === void 0) throw new InternalError(message);
}
const BOOL_FIELD = {
    codecId: "pg/bool@1",
    nullable: false
};
const resolve = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"];
/**
* Resolve a binary-comparison operand into an AST expression, threading the column-bound side's {@link CodecRef} to the raw-value side.
*
* For `fns.eq(f.email, 'alice@example.com')`, `f.email` is the column-bound expression carrying a `ColumnRef` AST and a `CodecRef` derived from contract storage; the raw string operand has no codec context. By deriving the codec context from the column-bound side and forwarding it via `toExpr(value, codec)`, the resulting `ParamRef` carries the `CodecRef` that encode-side dispatch needs to materialise the per-instance codec for parameterized codec ids (`vector(1024)` vs. `vector(1536)`).
*/ function resolveOperand(operand, otherCodec) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(operand)) return operand.buildAst();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"])(operand, otherCodec);
}
/**
* Resolves an Expression via `buildAst()`, or wraps a raw value as a `LiteralExpr` — an SQL literal inlined into the query text, not a bound parameter.
*
* Used for `and` / `or` operands. The usual operand is an `Expression<bool>` (e.g. the result of `fns.eq`), which this function passes through by calling `buildAst()`. The only time the raw-value branch fires is when the caller writes `fns.and(true, x)` or similar — inlining `TRUE`/`FALSE` literals lets the SQL planner statically simplify `TRUE AND x` to `x`, which it cannot do for an opaque `ParamRef`.
*/ function toLiteralExpr(value) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(value)) return value.buildAst();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["C"](value);
}
function boolExpr(astNode) {
    return new ExpressionImpl(astNode, BOOL_FIELD);
}
function binaryWithSharedCodec(a, b, build) {
    const aCodec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(a);
    return build(resolveOperand(a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(b)), resolveOperand(b, aCodec));
}
function eq(a, b) {
    if (b === null) return boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["T"].isNull(resolve(a)));
    if (a === null) return boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["T"].isNull(resolve(b)));
    return boolExpr(binaryWithSharedCodec(a, b, (l, r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"]("eq", l, r)));
}
function ne(a, b) {
    if (b === null) return boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["T"].isNotNull(resolve(a)));
    if (a === null) return boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["T"].isNotNull(resolve(b)));
    return boolExpr(binaryWithSharedCodec(a, b, (l, r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"]("neq", l, r)));
}
function comparison(a, b, op) {
    return boolExpr(binaryWithSharedCodec(a, b, (l, r)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"](op, l, r)));
}
function inOrNotIn(expr, valuesOrSubquery, op) {
    const left = expr.buildAst();
    const leftCodec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(expr);
    const binaryFn = op === "in" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"].in : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"].notIn;
    if (Array.isArray(valuesOrSubquery)) {
        const refs = valuesOrSubquery.map((v)=>resolveOperand(v, leftCodec));
        return boolExpr(binaryFn(left, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["S"].of(refs)));
    }
    return boolExpr(binaryFn(left, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["F"].of(valuesOrSubquery.buildAst())));
}
/**
* Build an aggregate through the target's own answer for it.
*
* What an aggregate returns is neither the input's codec nor a fixed id: a
* target widens `sum` over small integers, takes `avg` somewhere else again,
* and may want the result rendered a particular way. All three come from the
* registry, and the result carries the codec it declared so decoding resolves
* through the ordinary path.
*
* The declared rendering (`lower`) exists to carry the value across the driver
* boundary — a projection concern. It is carried beside the plain form so only
* the projection site consumes it; HAVING and ORDER BY compare the value inside
* the database, where the rendering would change SQL semantics (SQLite's
* `CAST(count(*) AS TEXT)` compares and sorts lexicographically).
*
* A pair the target declares no overload for is rejected outright. The typed
* surface already makes it inexpressible; this backs that up for dynamic
* invocation, instead of executing SQL whose result no declaration types or
* decodes — SQLite's `sum` over text, which reads whatever leading numbers the
* rows happened to hold, is the shape of value that path would hand back.
*
* An operation outside the SQL aggregate alphabet has no plain form at all:
* its whole expression is what the lowering hook builds, so the result is
* projection-only and refuses predicate and ordering positions.
*/ function aggregate(aggregates, operation, expr) {
    const field = expr?.returnType;
    const inputCodec = field === void 0 ? void 0 : field.codec ?? {
        codecId: field.codecId
    };
    const resolved = aggregates.resolve(operation, inputCodec);
    if (resolved === void 0) throw structuredError("ORM.AGGREGATE_UNSUPPORTED", inputCodec === void 0 ? `The composed target declares no '${operation}' aggregate for a call without an input.` : `The composed target declares no '${operation}' aggregate over codec '${inputCodec.codecId}'.`, {
        why: "An aggregate result decodes through the codec its target declares; an undeclared pair has no declared result to type or decode.",
        fix: `Aggregate an input the target declares '${operation}' for, or contribute an aggregate descriptor for this pair.`,
        meta: {
            operation,
            ...ifDefined("inputCodecId", inputCodec?.codecId)
        }
    });
    const inputAst = expr?.buildAst();
    const returnType = {
        codecId: resolved.output.codecId,
        nullable: resolved.nullable,
        codec: resolved.output
    };
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["V"])(operation)) {
        assertDefined(resolved.lower, `registry resolved '${operation}' outside the SQL aggregate alphabet without a lowering hook`);
        return new ProjectionOnlyExpressionImpl(operation, resolved.lower({
            expr: inputAst,
            inputCodec
        }), returnType);
    }
    const ast = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"](operation, inputAst);
    const projectionAst = resolved.lower?.({
        expr: inputAst,
        inputCodec
    });
    return new ExpressionImpl(ast, returnType, projectionAst);
}
function createBuiltinFunctions(rawCodecInferer) {
    return {
        eq: (a, b)=>eq(a, b),
        ne: (a, b)=>ne(a, b),
        gt: (a, b)=>comparison(a, b, "gt"),
        gte: (a, b)=>comparison(a, b, "gte"),
        lt: (a, b)=>comparison(a, b, "lt"),
        lte: (a, b)=>comparison(a, b, "lte"),
        and: (...exprs)=>boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"].of(exprs.map(toLiteralExpr))),
        or: (...exprs)=>boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["D"].of(exprs.map(toLiteralExpr))),
        exists: (subquery)=>boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"].exists(subquery.buildAst())),
        notExists: (subquery)=>boolExpr(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["p"].notExists(subquery.buildAst())),
        in: (expr, valuesOrSubquery)=>inOrNotIn(expr, valuesOrSubquery, "in"),
        notIn: (expr, valuesOrSubquery)=>inOrNotIn(expr, valuesOrSubquery, "notIn"),
        raw: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(rawCodecInferer)
    };
}
/**
* The aggregate implementations, one per operation the registry contributes,
* erased.
*
* The method set is the registry's operation vocabulary — the runtime mirror
* of the contract's emitted aggregate map, both settled from the same
* contributed descriptors. What each returns is the contract's answer — a
* function of the target's map and the input's codec — which no runtime value
* can state. The typed surface is `AggregateFunctions<QC>`, applied where
* these are handed out.
*/ function createAggregateOnlyFunctions(aggregates) {
    const methods = /* @__PURE__ */ new Map();
    for (const { operation } of aggregates.values()){
        if (methods.has(operation)) continue;
        methods.set(operation, (expr)=>aggregate(aggregates, operation, expr));
    }
    return Object.fromEntries(methods);
}
function createFunctions(operations, rawCodecInferer) {
    const builtins = createBuiltinFunctions(rawCodecInferer);
    return new Proxy(blindCast({}), {
        get (_target, prop) {
            if (Object.hasOwn(builtins, prop)) return blindCast(builtins)[prop];
            const op = operations[prop];
            if (op) return op.impl;
        }
    });
}
function createAggregateFunctions(operations, rawCodecInferer, aggregateRegistry) {
    const baseFns = createFunctions(operations, rawCodecInferer);
    const aggregates = createAggregateOnlyFunctions(aggregateRegistry);
    return new Proxy(blindCast({}), {
        get (_target, prop) {
            if (Object.hasOwn(aggregates, prop)) return aggregates[prop];
            return blindCast(baseFns)[prop];
        }
    });
}
/**
* Builds the raw lane a client exposes as `db.raw`.
*
* The tag binds the adapter's codec inferer and the contract here, once. An
* authoring site then carries only its template, its row spec, and a
* terminator.
*
* The row type is phantom: no value holds it. The target-agnostic tag types it
* as `unknown`, and the contract says what each declared column decodes to.
*/ function createRawLane(options) {
    const tag = blindCast((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["r"])(options.rawCodecInferer, {
        contract: options.context.contract
    }));
    return Object.freeze({
        sql: tag
    });
}
function resolveTableInNamespace(storage, namespaceId, tableName) {
    const namespace = storage.namespaces[namespaceId];
    if (namespace === void 0) return void 0;
    const tables = namespace.entries.table;
    if (tables === void 0 || !Object.hasOwn(tables, tableName)) return void 0;
    return tables[tableName];
}
var BuilderBase = class {
    ctx;
    constructor(ctx){
        this.ctx = ctx;
    }
    _gate(required, methodName, method) {
        return (...args)=>{
            assertCapability(this.ctx, required, methodName);
            return method(...args);
        };
    }
};
/**
* Derive the canonical {@link CodecRef} for a `(table, column)` from the builder context's storage. Returns `undefined` when the builder context has no storage attached or when the column is unknown to the contract.
*/ function codecRefFor(ctx, namespaceId, tableName, columnName) {
    if (!ctx.storage) return void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$codec$2d$descriptor$2d$registry$2d$ECZ4ohtG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(ctx.storage, namespaceId, tableName, columnName);
}
function emptyState(from, scope) {
    return {
        from,
        joins: [],
        projections: [],
        where: [],
        orderBy: [],
        groupBy: [],
        having: void 0,
        limit: void 0,
        offset: void 0,
        distinct: void 0,
        distinctOn: void 0,
        scope,
        rowFields: {},
        annotations: /* @__PURE__ */ new Map()
    };
}
function cloneState(state, overrides) {
    return {
        ...state,
        ...overrides
    };
}
function combineWhereExprs(exprs) {
    if (exprs.length === 0) return void 0;
    if (exprs.length === 1) return exprs[0];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"].of(exprs);
}
function buildSelectAst(state) {
    const where = combineWhereExprs(state.where);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["P"]({
        from: state.from,
        joins: state.joins.length > 0 ? state.joins : void 0,
        projection: state.projections,
        where,
        orderBy: state.orderBy.length > 0 ? state.orderBy : void 0,
        distinct: state.distinct,
        distinctOn: state.distinctOn && state.distinctOn.length > 0 ? state.distinctOn : void 0,
        groupBy: state.groupBy.length > 0 ? state.groupBy : void 0,
        having: state.having,
        limit: state.limit,
        offset: state.offset,
        selectAllIntent: void 0
    });
}
function buildQueryPlan(ast, ctx, annotations) {
    const paramValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$util$2d$DQQgv2j1$2d$D6INZaRG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])(ast).map((r)=>r.kind === "param-ref" ? r.value : void 0);
    const annotationsRecord = annotations !== void 0 && annotations.size > 0 ? Object.freeze(Object.fromEntries(annotations)) : void 0;
    const meta = Object.freeze({
        target: ctx.target,
        storageHash: ctx.storageHash,
        lane: "dsl",
        ...ifDefined("annotations", annotationsRecord)
    });
    return Object.freeze({
        ast,
        params: paramValues,
        meta
    });
}
function buildPlan(state, ctx) {
    return buildQueryPlan(buildSelectAst(state), ctx, state.annotations);
}
function tableToScope(alias, table, options) {
    const storage = options?.storage;
    const lookupName = options?.tableName;
    const namespaceId = options?.namespaceId;
    const fields = {};
    for (const [colName, col] of Object.entries(table.columns)){
        const codec = storage && lookupName && namespaceId !== void 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$codec$2d$descriptor$2d$registry$2d$ECZ4ohtG$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"])(storage, namespaceId, lookupName, colName) : void 0;
        fields[colName] = {
            codecId: col.codecId,
            nullable: col.nullable,
            ...col.many ? {
                many: true
            } : {},
            ...codec !== void 0 ? {
                codec
            } : {}
        };
    }
    return {
        topLevel: {
            ...fields
        },
        namespaces: {
            [alias]: fields
        }
    };
}
function mergeScopes(a, b) {
    const topLevel = {};
    for (const [k, v] of Object.entries(a.topLevel))if (!(k in b.topLevel)) topLevel[k] = v;
    for (const [k, v] of Object.entries(b.topLevel))if (!(k in a.topLevel)) topLevel[k] = v;
    return {
        topLevel,
        namespaces: {
            ...a.namespaces,
            ...b.namespaces
        }
    };
}
function nullableScope(scope) {
    const mkNullable = (tbl)=>{
        const result = {};
        for (const [k, v] of Object.entries(tbl))result[k] = {
            codecId: v.codecId,
            nullable: true,
            ...v.codec !== void 0 ? {
                codec: v.codec
            } : {}
        };
        return result;
    };
    const namespaces = {};
    for (const [k, v] of Object.entries(scope.namespaces))namespaces[k] = mkNullable(v);
    return {
        topLevel: mkNullable(scope.topLevel),
        namespaces
    };
}
function orderByScopeOf(scope, rowFields) {
    return {
        topLevel: {
            ...scope.topLevel,
            ...rowFields
        },
        namespaces: scope.namespaces
    };
}
function assertCapability(ctx, required, methodName) {
    for (const [ns, keys] of Object.entries(required))for (const key of Object.keys(keys))if (!ctx.capabilities[ns]?.[key]) throw structuredError("ORM.CAPABILITY_MISSING", `${methodName}() requires capability ${ns}.${key}`, {
        meta: {
            method: methodName,
            capability: `${ns}.${key}`
        }
    });
}
function resolveSelectArgs(args, scope, ctx) {
    const projections = [];
    const newRowFields = {};
    if (args.length === 0) return {
        projections,
        newRowFields
    };
    if (typeof args[0] === "string" && (args.length === 1 || typeof args[1] !== "function")) {
        for (const colName of args){
            const field = scope.topLevel[colName];
            if (!field) throw structuredError("ORM.COLUMN_UNKNOWN", `Column "${colName}" not found in scope`, {
                meta: {
                    column: colName
                }
            });
            projections.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["j"].of(colName, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["g"].of(colName), field.codec));
            newRowFields[colName] = field;
        }
        return {
            projections,
            newRowFields
        };
    }
    if (typeof args[0] === "string" && typeof args[1] === "function") {
        const alias = args[0];
        const exprFn = args[1];
        const fns = createAggregateFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer, ctx.aggregates);
        const result = exprFn(createFieldProxy(scope), fns);
        const field = result.returnType;
        projections.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["j"].of(alias, projectionAstOf(result), field.codec));
        newRowFields[alias] = field;
        return {
            projections,
            newRowFields
        };
    }
    if (typeof args[0] === "function") {
        const callbackFn = args[0];
        const fns = createAggregateFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer, ctx.aggregates);
        const record = callbackFn(createFieldProxy(scope), fns);
        for (const [key, expr] of Object.entries(record)){
            const field = expr.returnType;
            projections.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["j"].of(key, projectionAstOf(expr), field.codec));
            newRowFields[key] = field;
        }
        return {
            projections,
            newRowFields
        };
    }
    throw structuredError("ORM.ARGUMENT_INVALID", "Invalid .select() arguments");
}
function resolveOrderBy(arg, options, scope, rowFields, ctx, useAggregateFns) {
    const dir = options?.direction ?? "asc";
    if (typeof arg === "string") {
        if (!(arg in orderByScopeOf(scope, rowFields).topLevel)) throw structuredError("ORM.COLUMN_UNKNOWN", `Column "${arg}" not found in scope for orderBy`, {
            meta: {
                column: arg
            }
        });
        const expr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["g"].of(arg);
        return dir === "asc" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["O"].asc(expr) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["O"].desc(expr);
    }
    if (typeof arg === "function") {
        const combined = orderByScopeOf(scope, rowFields);
        const fns = useAggregateFns ? createAggregateFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer, ctx.aggregates) : createFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer);
        const result = arg(createFieldProxy(combined), fns);
        return dir === "asc" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["O"].asc(result.buildAst()) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["O"].desc(result.buildAst());
    }
    throw structuredError("ORM.ARGUMENT_INVALID", "Invalid orderBy argument");
}
function resolveGroupBy(args, scope, rowFields, ctx) {
    if (typeof args[0] === "string") {
        const combined = orderByScopeOf(scope, rowFields);
        return args.map((colName)=>{
            if (!(colName in combined.topLevel)) throw structuredError("ORM.COLUMN_UNKNOWN", `Column "${colName}" not found in scope for groupBy`, {
                meta: {
                    column: colName
                }
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["g"].of(colName);
        });
    }
    if (typeof args[0] === "function") {
        const combined = orderByScopeOf(scope, rowFields);
        const fns = createFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer);
        return [
            args[0](createFieldProxy(combined), fns).buildAst()
        ];
    }
    throw structuredError("ORM.ARGUMENT_INVALID", "Invalid groupBy arguments");
}
function resolveDistinctOn(args, scope, rowFields, ctx) {
    if (args.length === 1 && typeof args[0] === "function") {
        const combined = orderByScopeOf(scope, rowFields);
        const fns = createFunctions(ctx.queryOperationTypes, ctx.rawCodecInferer);
        return [
            args[0](createFieldProxy(combined), fns).buildAst()
        ];
    }
    const combined = orderByScopeOf(scope, rowFields);
    return args.map((colName)=>{
        if (!(colName in combined.topLevel)) throw structuredError("ORM.COLUMN_UNKNOWN", `Column "${colName}" not found in scope for distinctOn`, {
            meta: {
                column: colName
            }
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["g"].of(colName);
    });
}
var QueryBase = class extends BuilderBase {
    state;
    constructor(state, ctx){
        super(ctx);
        this.state = state;
    }
    distinctOn = this._gate({
        postgres: {
            distinctOn: true
        }
    }, "distinctOn", (...args)=>{
        const exprs = resolveDistinctOn(args, this.state.scope, this.state.rowFields, this.ctx);
        return this.clone(cloneState(this.state, {
            distinctOn: [
                ...this.state.distinctOn ?? [],
                ...exprs
            ]
        }));
    });
    limit(count) {
        const limit = typeof count === "number" ? count : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"])(count);
        return this.clone(cloneState(this.state, {
            limit
        }));
    }
    offset(count) {
        const offset = typeof count === "number" ? count : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"])(count);
        return this.clone(cloneState(this.state, {
            offset
        }));
    }
    distinct() {
        return this.clone(cloneState(this.state, {
            distinct: true
        }));
    }
    /**
	* Attach one or more annotations to this query plan.
	*
	* Read builders (`SelectQueryImpl`, `GroupedQueryImpl`) accept
	* annotations whose declared `applicableTo` includes `'read'`.
	* The type-level `As & ValidAnnotations<'read', As>` gate rejects
	* write-only annotations at the call site; the runtime check below
	* fails closed for callers that bypass the type gate (cast / `any`).
	*
	* Multiple `.annotate(...)` calls compose; duplicate namespaces use
	* last-write-wins. The accumulated annotations are merged into
	* `plan.meta.annotations` at `.build()` time, alongside any framework-
	* internal metadata under reserved namespaces (e.g. `codecs`).
	*
	* Chainable in any position (before / after `.where`, `.select`,
	* `.limit`, etc.); the returned builder has the same row type.
	*/ annotate(...annotations) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DXmHIbAr$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__assertAnnotationsApplicable$3e$__["assertAnnotationsApplicable"])(annotations, "read", "sql-dsl.annotate");
        const next = new Map(this.state.annotations);
        for (const annotation of annotations)next.set(annotation.namespace, annotation);
        return this.clone(cloneState(this.state, {
            annotations: next
        }));
    }
    groupBy(...args) {
        const exprs = resolveGroupBy(args, this.state.scope, this.state.rowFields, this.ctx);
        return new GroupedQueryImpl(cloneState(this.state, {
            groupBy: [
                ...this.state.groupBy,
                ...exprs
            ]
        }), this.ctx);
    }
    as(alias) {
        const ast = buildSelectAst(this.state);
        const derivedSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"].as(alias, ast);
        const scope = {
            topLevel: this.state.rowFields,
            namespaces: {
                [alias]: this.state.rowFields
            }
        };
        return {
            getJoinOuterScope: ()=>scope,
            buildAst: ()=>derivedSource
        };
    }
    getRowFields() {
        return this.state.rowFields;
    }
    buildAst() {
        return buildSelectAst(this.state);
    }
    build() {
        return buildPlan(this.state, this.ctx);
    }
};
var SelectQueryImpl = class SelectQueryImpl extends QueryBase {
    clone(state) {
        return new SelectQueryImpl(state, this.ctx);
    }
    select(...args) {
        const { projections, newRowFields } = resolveSelectArgs(args, this.state.scope, this.ctx);
        return new SelectQueryImpl(cloneState(this.state, {
            projections: [
                ...this.state.projections,
                ...projections
            ],
            rowFields: {
                ...this.state.rowFields,
                ...newRowFields
            }
        }), this.ctx);
    }
    where(expr) {
        const result = expr(createFieldProxy(this.state.scope), createFunctions(this.ctx.queryOperationTypes, this.ctx.rawCodecInferer));
        return new SelectQueryImpl(cloneState(this.state, {
            where: [
                ...this.state.where,
                result.buildAst()
            ]
        }), this.ctx);
    }
    orderBy(arg, options) {
        const item = resolveOrderBy(arg, options, this.state.scope, this.state.rowFields, this.ctx, false);
        return this.clone(cloneState(this.state, {
            orderBy: [
                ...this.state.orderBy,
                item
            ]
        }));
    }
};
var GroupedQueryImpl = class GroupedQueryImpl extends QueryBase {
    clone(state) {
        return new GroupedQueryImpl(state, this.ctx);
    }
    having(expr) {
        const combined = orderByScopeOf(this.state.scope, this.state.rowFields);
        const fns = createAggregateFunctions(this.ctx.queryOperationTypes, this.ctx.rawCodecInferer, this.ctx.aggregates);
        const result = expr(createFieldProxy(combined), fns);
        return new GroupedQueryImpl(cloneState(this.state, {
            having: result.buildAst()
        }), this.ctx);
    }
    orderBy(arg, options) {
        const item = resolveOrderBy(arg, options, this.state.scope, this.state.rowFields, this.ctx, true);
        return this.clone(cloneState(this.state, {
            orderBy: [
                ...this.state.orderBy,
                item
            ]
        }));
    }
};
var JoinedTablesImpl = class JoinedTablesImpl extends BuilderBase {
    #state;
    constructor(state, ctx){
        super(ctx);
        this.#state = state;
    }
    lateralJoin = this._gate({
        sql: {
            lateral: true
        }
    }, "lateralJoin", (alias, builder)=>{
        const { derivedSource, lateralScope } = this.#buildLateral(alias, builder);
        const resultScope = mergeScopes(this.#state.scope, lateralScope);
        return this.#addLateralJoin("inner", resultScope, derivedSource);
    });
    outerLateralJoin = this._gate({
        sql: {
            lateral: true
        }
    }, "outerLateralJoin", (alias, builder)=>{
        const { derivedSource, lateralScope } = this.#buildLateral(alias, builder);
        const resultScope = mergeScopes(this.#state.scope, nullableScope(lateralScope));
        return this.#addLateralJoin("left", resultScope, derivedSource);
    });
    select(...args) {
        const { projections, newRowFields } = resolveSelectArgs(args, this.#state.scope, this.ctx);
        return new SelectQueryImpl(cloneState(this.#state, {
            projections: [
                ...this.#state.projections,
                ...projections
            ],
            rowFields: {
                ...this.#state.rowFields,
                ...newRowFields
            }
        }), this.ctx);
    }
    innerJoin(other, on) {
        const targetScope = mergeScopes(this.#state.scope, other.getJoinOuterScope());
        return this.#addJoin(other, "inner", targetScope, on);
    }
    outerLeftJoin(other, on) {
        const targetScope = mergeScopes(this.#state.scope, nullableScope(other.getJoinOuterScope()));
        return this.#addJoin(other, "left", targetScope, on);
    }
    outerRightJoin(other, on) {
        const targetScope = mergeScopes(nullableScope(this.#state.scope), other.getJoinOuterScope());
        return this.#addJoin(other, "right", targetScope, on);
    }
    outerFullJoin(other, on) {
        const targetScope = mergeScopes(nullableScope(this.#state.scope), nullableScope(other.getJoinOuterScope()));
        return this.#addJoin(other, "full", targetScope, on);
    }
    #addJoin(other, joinType, resultScope, onExpr) {
        const onResult = onExpr(createFieldProxy(mergeScopes(this.#state.scope, other.getJoinOuterScope())), createFunctions(this.ctx.queryOperationTypes, this.ctx.rawCodecInferer));
        const joinAst = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["y"](joinType, other.buildAst(), onResult.buildAst());
        return new JoinedTablesImpl(cloneState(this.#state, {
            joins: [
                ...this.#state.joins,
                joinAst
            ],
            scope: resultScope
        }), this.ctx);
    }
    #buildLateral(alias, builderFn) {
        const subquery = builderFn({
            from: (other)=>{
                const otherScope = other.getJoinOuterScope();
                const parentMerged = mergeScopes(this.#state.scope, otherScope);
                return new SelectQueryImpl(emptyState(other.buildAst(), parentMerged), this.ctx);
            }
        });
        const subqueryAst = subquery.buildAst();
        const derivedSource = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["l"].as(alias, subqueryAst);
        const subqueryRowFields = subquery.getRowFields();
        return {
            derivedSource,
            lateralScope: {
                topLevel: subqueryRowFields,
                namespaces: {
                    [alias]: subqueryRowFields
                }
            }
        };
    }
    #addLateralJoin(joinType, resultScope, derivedSource) {
        const joinAst = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["y"](joinType, derivedSource, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"].of([]), true);
        return new JoinedTablesImpl(cloneState(this.#state, {
            joins: [
                ...this.#state.joins,
                joinAst
            ],
            scope: resultScope
        }), this.ctx);
    }
};
/**
* Validates and merges a variadic annotations call into a builder's
* accumulated user-annotations map. Used by `.annotate(...)` on each of
* the three mutation builders (`InsertQueryImpl`, `UpdateQueryImpl`,
* `DeleteQueryImpl`); the read builders share the same logic via
* `QueryBase.annotate()` in `./query-impl.ts`.
*
* Runs `assertAnnotationsApplicable` at call time (not at `.build()`) so
* inapplicable annotations forced through casts surface immediately
* rather than at plan-construction time.
*/ function mergeWriteAnnotations(current, annotations) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$runtime$2d$DXmHIbAr$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__assertAnnotationsApplicable$3e$__["assertAnnotationsApplicable"])(annotations, "write", "sql-dsl.annotate");
    const next = new Map(current);
    for (const annotation of annotations)next.set(annotation.namespace, annotation);
    return next;
}
function buildParamValues(values, namespaceId, table, tableName, op, ctx) {
    const params = {};
    for (const [col, value] of Object.entries(values)){
        const codec = table.columns[col] ? codecRefFor(ctx, namespaceId, tableName, col) : void 0;
        params[col] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"].of(value, codec ? {
            codec
        } : void 0);
    }
    for (const def of ctx.applyMutationDefaults({
        op,
        namespace: namespaceId,
        table: tableName,
        values
    })){
        const codec = table.columns[def.column] ? codecRefFor(ctx, namespaceId, tableName, def.column) : void 0;
        params[def.column] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"].of(def.value, codec ? {
            codec
        } : void 0);
    }
    return params;
}
function buildReturningProjections(tableName, columns, rowFields) {
    return columns.map((col)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["j"].of(col, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"].of(tableName, col), rowFields[col]?.codec));
}
function evaluateWhere(whereCallback, scope, queryOperationTypes, rawCodecInferer) {
    return whereCallback(createFieldProxy(scope), createFunctions(queryOperationTypes, rawCodecInferer)).buildAst();
}
function evaluateUpdateCallback(callback, scope, queryOperationTypes, rawCodecInferer) {
    const result = callback(createFieldProxy(scope), createFunctions(queryOperationTypes, rawCodecInferer));
    const set = {};
    for (const [col, expr] of Object.entries(result))if (expr !== void 0) set[col] = expr.buildAst();
    return set;
}
function buildSetExpressions(exprs, namespaceId, table, tableName, op, ctx) {
    const set = {
        ...exprs
    };
    for (const def of ctx.applyMutationDefaults({
        op,
        namespace: namespaceId,
        table: tableName,
        values: exprs
    }))if (!(def.column in set)) {
        const codec = table.columns[def.column] ? codecRefFor(ctx, namespaceId, tableName, def.column) : void 0;
        set[def.column] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["k"].of(def.value, ifDefined("codec", codec));
    }
    return set;
}
var InsertQueryImpl = class InsertQueryImpl extends BuilderBase {
    #tableSource;
    #tableName;
    #namespaceId;
    #table;
    #scope;
    #rows;
    #returningColumns;
    #rowFields;
    #annotations;
    constructor(tableSource, namespaceId, table, scope, rows, ctx, returningColumns = [], rowFields = {}, annotations = /* @__PURE__ */ new Map()){
        super(ctx);
        this.#tableSource = tableSource;
        this.#tableName = tableSource.name;
        this.#namespaceId = namespaceId;
        this.#table = table;
        this.#scope = scope;
        this.#rows = rows;
        this.#returningColumns = returningColumns;
        this.#rowFields = rowFields;
        this.#annotations = annotations;
    }
    returning = this._gate({
        sql: {
            returning: true
        }
    }, "returning", (...columns)=>{
        const newRowFields = {};
        for (const col of columns){
            const field = this.#scope.topLevel[col];
            if (!field) throw structuredError("ORM.COLUMN_UNKNOWN", `Column "${col}" not found in scope`, {
                meta: {
                    column: col
                }
            });
            newRowFields[col] = field;
        }
        return new InsertQueryImpl(this.#tableSource, this.#namespaceId, this.#table, this.#scope, this.#rows, this.ctx, columns, newRowFields, this.#annotations);
    });
    /**
	* Attach one or more write-typed annotations to this query plan.
	* The type-level `As & ValidAnnotations<'write', As>` gate rejects
	* read-only annotations at the call site; the runtime check fails
	* closed for callers that bypass the type gate. See `QueryBase.annotate`
	* in `./query-impl.ts` for the read-builder counterpart.
	*/ annotate(...annotations) {
        return new InsertQueryImpl(this.#tableSource, this.#namespaceId, this.#table, this.#scope, this.#rows, this.ctx, this.#returningColumns, this.#rowFields, mergeWriteAnnotations(this.#annotations, annotations));
    }
    build() {
        if (this.#rows.length === 0) throw structuredError("ORM.MUTATION_DATA_MISSING", "insert() called with an empty row array — at least one row is required");
        const paramRows = this.#rows.map((rowValues)=>buildParamValues(rowValues, this.#namespaceId, this.#table, this.#tableName, "create", this.ctx));
        let ast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["_"].into(this.#tableSource).withRows(paramRows);
        if (this.#returningColumns.length > 0) ast = ast.withReturning(buildReturningProjections(this.#tableName, this.#returningColumns, this.#rowFields));
        return buildQueryPlan(ast, this.ctx, this.#annotations);
    }
};
var UpdateQueryImpl = class UpdateQueryImpl extends BuilderBase {
    #tableSource;
    #tableName;
    #scope;
    #setExpressions;
    #whereExprs;
    #returningColumns;
    #rowFields;
    #annotations;
    constructor(tableSource, scope, setExpressions, ctx, whereExprs = [], returningColumns = [], rowFields = {}, annotations = /* @__PURE__ */ new Map()){
        super(ctx);
        this.#tableSource = tableSource;
        this.#tableName = tableSource.name;
        this.#scope = scope;
        this.#setExpressions = setExpressions;
        this.#whereExprs = whereExprs;
        this.#returningColumns = returningColumns;
        this.#rowFields = rowFields;
        this.#annotations = annotations;
    }
    where(expr) {
        const result = expr(createFieldProxy(this.#scope), createFunctions(this.ctx.queryOperationTypes, this.ctx.rawCodecInferer));
        return new UpdateQueryImpl(this.#tableSource, this.#scope, this.#setExpressions, this.ctx, [
            ...this.#whereExprs,
            result.buildAst()
        ], this.#returningColumns, this.#rowFields, this.#annotations);
    }
    returning = this._gate({
        sql: {
            returning: true
        }
    }, "returning", (...columns)=>{
        const newRowFields = {};
        for (const col of columns){
            const field = this.#scope.topLevel[col];
            if (!field) throw structuredError("ORM.COLUMN_UNKNOWN", `Column "${col}" not found in scope`, {
                meta: {
                    column: col
                }
            });
            newRowFields[col] = field;
        }
        return new UpdateQueryImpl(this.#tableSource, this.#scope, this.#setExpressions, this.ctx, this.#whereExprs, columns, newRowFields, this.#annotations);
    });
    /**
	* Attach one or more write-typed annotations to this query plan.
	* See `InsertQueryImpl.annotate` for semantics; the runtime check
	* fails closed for callers that bypass the type-level gate.
	*/ annotate(...annotations) {
        return new UpdateQueryImpl(this.#tableSource, this.#scope, this.#setExpressions, this.ctx, this.#whereExprs, this.#returningColumns, this.#rowFields, mergeWriteAnnotations(this.#annotations, annotations));
    }
    build() {
        let ast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["L"].table(this.#tableSource).withSet(this.#setExpressions).withWhere(combineWhereExprs(this.#whereExprs));
        if (this.#returningColumns.length > 0) ast = ast.withReturning(buildReturningProjections(this.#tableName, this.#returningColumns, this.#rowFields));
        return buildQueryPlan(ast, this.ctx, this.#annotations);
    }
};
var DeleteQueryImpl = class DeleteQueryImpl extends BuilderBase {
    #tableSource;
    #tableName;
    #scope;
    #whereCallbacks;
    #returningColumns;
    #rowFields;
    #annotations;
    constructor(tableSource, scope, ctx, whereCallbacks = [], returningColumns = [], rowFields = {}, annotations = /* @__PURE__ */ new Map()){
        super(ctx);
        this.#tableSource = tableSource;
        this.#tableName = tableSource.name;
        this.#scope = scope;
        this.#whereCallbacks = whereCallbacks;
        this.#returningColumns = returningColumns;
        this.#rowFields = rowFields;
        this.#annotations = annotations;
    }
    where(expr) {
        return new DeleteQueryImpl(this.#tableSource, this.#scope, this.ctx, [
            ...this.#whereCallbacks,
            expr
        ], this.#returningColumns, this.#rowFields, this.#annotations);
    }
    returning = this._gate({
        sql: {
            returning: true
        }
    }, "returning", (...columns)=>{
        const newRowFields = {};
        for (const col of columns){
            const field = this.#scope.topLevel[col];
            if (!field) throw structuredError("ORM.COLUMN_UNKNOWN", `Column "${col}" not found in scope`, {
                meta: {
                    column: col
                }
            });
            newRowFields[col] = field;
        }
        return new DeleteQueryImpl(this.#tableSource, this.#scope, this.ctx, this.#whereCallbacks, columns, newRowFields, this.#annotations);
    });
    /**
	* Attach one or more write-typed annotations to this query plan.
	* See `InsertQueryImpl.annotate` for semantics.
	*/ annotate(...annotations) {
        return new DeleteQueryImpl(this.#tableSource, this.#scope, this.ctx, this.#whereCallbacks, this.#returningColumns, this.#rowFields, mergeWriteAnnotations(this.#annotations, annotations));
    }
    build() {
        const whereExpr = combineWhereExprs(this.#whereCallbacks.map((cb)=>evaluateWhere(cb, this.#scope, this.ctx.queryOperationTypes, this.ctx.rawCodecInferer)));
        let ast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["c"].from(this.#tableSource).withWhere(whereExpr);
        if (this.#returningColumns.length > 0) ast = ast.withReturning(buildReturningProjections(this.#tableName, this.#returningColumns, this.#rowFields));
        return buildQueryPlan(ast, this.ctx, this.#annotations);
    }
};
function tableSourceForProxy(tableName, alias, namespaceId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$ZNKYVjLr$2d$DzjvSHKB$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I"].named(tableName, alias !== tableName ? alias : void 0, namespaceId);
}
var TableProxyImpl = class TableProxyImpl extends BuilderBase {
    #tableName;
    #table;
    #namespaceId;
    #fromSource;
    #scope;
    constructor(tableName, table, alias, ctx, namespaceId){
        super(ctx);
        this.#tableName = tableName;
        this.#table = table;
        this.#namespaceId = namespaceId;
        this.#scope = tableToScope(alias, table, {
            storage: ctx.storage,
            tableName,
            namespaceId
        });
        this.#fromSource = tableSourceForProxy(tableName, alias, namespaceId);
    }
    /**
	* The table's columns, each as the codec descriptor a raw row spec reads.
	* The declared type resolves each column's output through the contract; the
	* value carries what the storage table states.
	*/ get columns() {
        const refs = Object.fromEntries(Object.entries(this.#table.columns).map(([name, column])=>[
                name,
                {
                    codecId: column.codecId,
                    nullable: column.nullable
                }
            ]));
        return blindCast(Object.freeze(refs));
    }
    lateralJoin = this._gate({
        sql: {
            lateral: true
        }
    }, "lateralJoin", (alias, builder)=>{
        return this.#toJoined().lateralJoin(alias, builder);
    });
    outerLateralJoin = this._gate({
        sql: {
            lateral: true
        }
    }, "outerLateralJoin", (alias, builder)=>{
        return this.#toJoined().outerLateralJoin(alias, builder);
    });
    getJoinOuterScope() {
        return this.#scope;
    }
    buildAst() {
        return this.#fromSource;
    }
    as(newAlias) {
        return new TableProxyImpl(this.#tableName, this.#table, newAlias, this.ctx, this.#namespaceId);
    }
    select(...args) {
        return new SelectQueryImpl(emptyState(this.#fromSource, this.#scope), this.ctx).select(...args);
    }
    innerJoin(other, on) {
        return this.#toJoined().innerJoin(other, on);
    }
    outerLeftJoin(other, on) {
        return this.#toJoined().outerLeftJoin(other, on);
    }
    outerRightJoin(other, on) {
        return this.#toJoined().outerRightJoin(other, on);
    }
    outerFullJoin(other, on) {
        return this.#toJoined().outerFullJoin(other, on);
    }
    insert(rows) {
        return new InsertQueryImpl(this.#fromSource, this.#namespaceId, this.#table, this.#scope, rows, this.ctx);
    }
    update(setOrCallback) {
        if (typeof setOrCallback === "function") {
            const setExpressions = buildSetExpressions(evaluateUpdateCallback(setOrCallback, this.#scope, this.ctx.queryOperationTypes, this.ctx.rawCodecInferer), this.#namespaceId, this.#table, this.#tableName, "update", this.ctx);
            return new UpdateQueryImpl(this.#fromSource, this.#scope, setExpressions, this.ctx);
        }
        const setExpressions = buildParamValues(setOrCallback, this.#namespaceId, this.#table, this.#tableName, "update", this.ctx);
        return new UpdateQueryImpl(this.#fromSource, this.#scope, setExpressions, this.ctx);
    }
    delete() {
        return new DeleteQueryImpl(this.#fromSource, this.#scope, this.ctx);
    }
    #toJoined() {
        return new JoinedTablesImpl(emptyState(this.#fromSource, this.#scope), this.ctx);
    }
};
function sql(options) {
    const { context, rawCodecInferer } = options;
    const ctx = {
        capabilities: context.contract.capabilities,
        queryOperationTypes: context.queryOperations.entries(),
        target: context.contract.target ?? "unknown",
        storageHash: context.contract.storage.storageHash ?? "unknown",
        storage: context.contract.storage,
        applyMutationDefaults: (options)=>context.applyMutationDefaults(options),
        rawCodecInferer,
        aggregates: context.aggregateDescriptors
    };
    const { storage } = context.contract;
    return new Proxy(blindCast({}), {
        get (_target, prop) {
            if (typeof prop !== "string") return;
            if (!Object.hasOwn(storage.namespaces, prop)) return;
            const namespaceId = prop;
            return new Proxy({}, {
                get (_facetTarget, tableName) {
                    if (typeof tableName !== "string") return;
                    const table = resolveTableInNamespace(storage, namespaceId, tableName);
                    if (table) return new TableProxyImpl(tableName, table, tableName, ctx, namespaceId);
                }
            });
        }
    });
}
;
 //# sourceMappingURL=builder__runtime.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/contract-view-BMR5IWk4.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>buildSqlSchemaQualifiedView,
    "r",
    ()=>buildSqlSingleNamespaceView,
    "t",
    ()=>SQL_BUILTIN_KINDS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__buildNamespacedEntities$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/ir-CV5d1FJ0.mjs [app-rsc] (ecmascript) <export i as buildNamespacedEntities>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__buildSingleNamespaceView$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/ir-CV5d1FJ0.mjs [app-rsc] (ecmascript) <export a as buildSingleNamespaceView>");
;
//#region ../../../2-sql/1-core/contract/dist/contract-view.mjs
/**
* The SQL family's statically-named built-in entity kinds. `table` and
* `valueSet` are promoted to top-level view accessors; pack-contributed kinds
* (e.g. `policy`) stay under `.entries`.
*/ const SQL_BUILTIN_KINDS = [
    "table",
    "valueSet"
];
/**
* Builds the single-namespace SQL view: unwraps the sole namespace's SQL
* built-in kinds (`table`, `valueSet`) to the root, attaches the namespace-keyed
* `namespace` map, and layers both over the deserialized contract. Targets with
* one default namespace (SQLite) call this directly; Postgres qualifies by
* schema.
*/ function buildSqlSingleNamespaceView(contract) {
    const rootAccessors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a__as__buildSingleNamespaceView$3e$__["buildSingleNamespaceView"])(contract.storage, SQL_BUILTIN_KINDS);
    const namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__buildNamespacedEntities$3e$__["buildNamespacedEntities"])(contract.storage, SQL_BUILTIN_KINDS);
    return {
        ...contract,
        ...rootAccessors,
        namespace
    };
}
/**
* Builds the schema-qualified SQL view: attaches the namespace-keyed `namespace`
* map over the deserialized contract. Postgres uses this.
*/ function buildSqlSchemaQualifiedView(contract) {
    const namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__i__as__buildNamespacedEntities$3e$__["buildNamespacedEntities"])(contract.storage, SQL_BUILTIN_KINDS);
    return {
        ...contract,
        namespace
    };
}
;
 //# sourceMappingURL=contract-view-BMR5IWk4.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/contract-view-BMR5IWk4.mjs [app-rsc] (ecmascript) <export n as buildSqlSchemaQualifiedView>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSqlSchemaQualifiedView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$view$2d$BMR5IWk4$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$contract$2d$view$2d$BMR5IWk4$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/contract-view-BMR5IWk4.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/canonicalization-hooks-dmXkOR4a.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>sqlContractCanonicalizationHooks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2d$CCPBeUuk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__createPreserveEmptyPredicate$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/canonicalization-path-match-CNgHuwM_-CCPBeUuk.mjs [app-rsc] (ecmascript) <export t as createPreserveEmptyPredicate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$hashing$2d$utils$2d$DQgS3nOe$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__createStorageSort$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/hashing-utils-DQgS3nOe.mjs [app-rsc] (ecmascript) <export n as createStorageSort>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2d$CCPBeUuk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__matchesPathPattern$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/canonicalization-path-match-CNgHuwM_-CCPBeUuk.mjs [app-rsc] (ecmascript) <export n as matchesPathPattern>");
;
//#region ../../../2-sql/1-core/contract/dist/canonicalization-hooks.mjs
const preserveEmptyPatterns = [
    [
        "storage",
        "namespaces",
        "*",
        "entries",
        "table"
    ],
    [
        "storage",
        "namespaces",
        "*",
        "entries",
        "table",
        "*"
    ],
    [
        "storage",
        "namespaces",
        "*",
        "entries",
        "table",
        "*",
        [
            "uniques",
            "indexes",
            "foreignKeys"
        ]
    ],
    [
        "storage",
        "namespaces",
        "*",
        "entries",
        "table",
        "*",
        "indexes",
        "unique"
    ],
    [
        "storage",
        "namespaces",
        "*",
        "entries",
        "table",
        "*",
        "columns",
        "*",
        "default",
        "value"
    ]
];
const columnDefaultValuePrefix = [
    "storage",
    "namespaces",
    "*",
    "entries",
    "table",
    "*",
    "columns",
    "*",
    "default",
    "value"
];
const isColumnDefaultValuePath = (path)=>path.length >= columnDefaultValuePrefix.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2d$CCPBeUuk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__matchesPathPattern$3e$__["matchesPathPattern"])(path.slice(0, columnDefaultValuePrefix.length), columnDefaultValuePrefix);
const sortTargets = [
    {
        path: [
            "namespaces",
            "*",
            "entries",
            "table",
            "*"
        ],
        arrayKeys: [
            "checks",
            "indexes",
            "uniques"
        ]
    }
];
const matchesPreserveEmptyPattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$canonicalization$2d$path$2d$match$2d$CNgHuwM_$2d$CCPBeUuk$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__createPreserveEmptyPredicate$3e$__["createPreserveEmptyPredicate"])(preserveEmptyPatterns);
const shouldPreserveEmpty = (path)=>isColumnDefaultValuePath(path) || matchesPreserveEmptyPattern(path);
const sqlContractCanonicalizationHooks = {
    shouldPreserveEmpty,
    sortStorage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$hashing$2d$utils$2d$DQgS3nOe$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__n__as__createStorageSort$3e$__["createStorageSort"])(sortTargets)
};
;
 //# sourceMappingURL=canonicalization-hooks-dmXkOR4a.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/sql-contract-serializer-0a4k494z-QYmio7Uz.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "n",
    ()=>SqlContractSerializerBase,
    "t",
    ()=>SqlContractSerializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$canonicalization$2d$hooks$2d$dmXkOR4a$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/canonicalization-hooks-dmXkOR4a.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$entity$2d$kinds$2d$D7vwoN_T$2d$CCBwFJy0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/entity-kinds-D7vwoN_T-CCBwFJy0.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$D0B65hip$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/types-D0B65hip.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$CR2v1106$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/validators-CR2v1106.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$errors$2d$B5g0xWro$2d$mWH2C07F$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/errors-B5g0xWro-mWH2C07F.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/contract-validation-error-DEiWp_EI-CRwtUgRw.mjs [app-rsc] (ecmascript) <export t as ContractValidationError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__hydrateNamespaceEntities$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/ir-CV5d1FJ0.mjs [app-rsc] (ecmascript) <export d as hydrateNamespaceEntities>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/defined-BQWA85QH-BRSBMULx.mjs [app-rsc] (ecmascript) <export t as ifDefined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/arktype@2.2.7/node_modules/arktype/out/keywords/keywords.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/casts-DpaahrlC-Bd5n2coI.mjs [app-rsc] (ecmascript) <export t as blindCast>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/contract-authoring.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-framework@8.0.0-rc.12_typescript@5.9.3/node_modules/@prisma/orm-framework/dist/is-plain-record-CUofyVQ7-DWEzdhIx.mjs [app-rsc] (ecmascript) <export t as isPlainRecord>");
;
;
;
;
;
;
;
;
;
;
;
;
//#region ../../../2-sql/9-family/dist/sql-contract-serializer-0a4k494z.mjs
const NamespaceRawSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
    id: "string",
    "kind?": "string",
    entries: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"])({
        "+": "ignore"
    })
});
/**
* A `contract.json` written before to-one relations recorded `nullable` (rc.9 and earlier)
* loads with the flag derived from storage: nullable when any local FK column is nullable or
* cannot be resolved.
*/ function withSqlToOneRelationNullability(contract) {
    const domain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$authoring$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDerivedToOneRelationNullability"])(contract.domain, ({ model, relation })=>{
        const { ownsForeignKey, columns } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$CR2v1106$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["s"])(contract, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(model.storage), relation);
        return {
            ownsReference: ownsForeignKey,
            localFieldNullability: columns.map((column)=>column.nullable)
        };
    });
    return {
        ...contract,
        domain
    };
}
/**
* SQL family `ContractSerializer` abstract base. Carries the SQL-shared
* deserialization pipeline:
*
* 1. `parseSqlContractStructure` validates the on-disk JSON envelope
*    against the SQL contract arktype schema (`validateSqlContractFully`)
*    and returns the validated flat-data shape.
* 2. `hydrateSqlStorage` walks the validated `storage` subtree and
*    constructs the family-shared SQL Contract IR class hierarchy
*    (`SqlStorage` -> `StorageTable` -> `StorageColumn` / `PrimaryKey`
*    / …). The rest of the contract envelope is JSON-clean primitive
*    data and passes through unchanged.
* 3. `constructTargetContract` is the target-specific extension hook;
*    defaults to identity. Targets that need to attach target-only
*    fields (e.g. target-specific derived storage fields) override it.
*
* Default `serializeContract` is identity over the contract — concrete
* SQL targets ship JSON-clean class instances, so the contract value
* can be stringified directly. The non-enumerable family-level `kind`
* discriminator on `SqlNode` instances stays out of the persisted
* envelope automatically. Targets that need to canonicalize on the way
* out (key ordering, dropping computed-only fields) override
* `serializeContract` directly.
*/ var SqlContractSerializerBase = class {
    entityHydrationRegistry;
    contractSchema;
    entryKinds;
    constructor(entityHydrationRegistry = /* @__PURE__ */ new Map(), packEntityKinds = []){
        this.entityHydrationRegistry = entityHydrationRegistry;
        this.entryKinds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$entity$2d$kinds$2d$D7vwoN_T$2d$CCBwFJy0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["f"])(packEntityKinds);
        this.contractSchema = packEntityKinds.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$CR2v1106$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i"])(this.entryKinds) : void 0;
    }
    deserializeContract(json) {
        const validated = withSqlToOneRelationNullability(this.parseSqlContractStructure(json));
        const hydrated = this.hydrateSqlStorage(validated);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(this.constructTargetContract(hydrated));
    }
    serializeContract(contract) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(contract);
    }
    shouldPreserveEmpty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$canonicalization$2d$hooks$2d$dmXkOR4a$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"].shouldPreserveEmpty;
    sortStorage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$canonicalization$2d$hooks$2d$dmXkOR4a$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"].sortStorage;
    hashCanonicalizationHooks = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$canonicalization$2d$hooks$2d$dmXkOR4a$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"];
    parseSqlContractStructure(json) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$validators$2d$CR2v1106$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["u"])(json, this.contractSchema !== void 0 ? {
            contractSchema: this.contractSchema
        } : void 0);
    }
    hydrateSqlStorage(validated) {
        const types = validated.storage.types;
        const hydratedTypes = types !== void 0 ? Object.fromEntries(Object.entries(types).map(([name, entry])=>[
                name,
                this.hydrateStorageTypeEntry(entry)
            ])) : void 0;
        const rawNamespaces = validated.storage.namespaces;
        if (rawNamespaces === void 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"]("Contract storage.namespaces is required after structural validation", "structural");
        const hydratedNamespaces = this.hydrateSqlNamespaceMap((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(rawNamespaces));
        return {
            ...validated,
            storage: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$D0B65hip$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["o"]({
                storageHash: validated.storage.storageHash,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$defined$2d$BQWA85QH$2d$BRSBMULx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ifDefined$3e$__["ifDefined"])("types", hydratedTypes),
                namespaces: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(hydratedNamespaces)
            })
        };
    }
    hydrateSqlNamespaceMap(namespaces) {
        return Object.fromEntries(Object.entries(namespaces).map(([nsId, namespaceEntryRaw])=>{
            const namespaceHydrated = this.hydrateSqlNamespaceEntry(nsId, namespaceEntryRaw);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$types$2d$D0B65hip$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["c"])(namespaceHydrated)) throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$errors$2d$B5g0xWro$2d$mWH2C07F$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"])("CONTRACT.PACK_CONTRIBUTION_INVALID", `Target serializer bug: hydrateSqlNamespaceEntry for namespace "${nsId}" returned a non-NamespaceBase value. Override hydrateSqlNamespaceEntry to produce a target namespace concretion.`, {
                why: "The target contract serializer hydrated a namespace into a value that is not a materialized namespace concretion.",
                fix: "Fix the target package: its hydrateSqlNamespaceEntry override must return a target namespace concretion.",
                meta: {
                    namespaceId: nsId
                }
            });
            return [
                nsId,
                namespaceHydrated
            ];
        }));
    }
    hydrateSqlNamespaceEntry(nsId, raw) {
        const id = typeof raw["id"] === "string" ? raw["id"] : nsId;
        const parsed = NamespaceRawSchema({
            ...raw,
            id
        });
        if (parsed instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$arktype$40$2$2e$2$2e$7$2f$node_modules$2f$arktype$2f$out$2f$keywords$2f$keywords$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["type"].errors) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$contract$2d$validation$2d$error$2d$DEiWp_EI$2d$CRwtUgRw$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__ContractValidationError$3e$__["ContractValidationError"](`Namespace hydration failed: ${parsed.map((p)=>p.message).join("; ")}`, "structural");
        const entriesRaw = parsed.entries;
        const rawEntriesMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(entriesRaw) ? entriesRaw : {};
        const entriesInput = {};
        for (const [key, innerMap] of Object.entries(rawEntriesMap))entriesInput[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(innerMap) ? innerMap : Object.freeze({});
        const entriesOutput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$ir$2d$CV5d1FJ0$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__d__as__hydrateNamespaceEntities$3e$__["hydrateNamespaceEntities"])(entriesInput, this.entryKinds, "fail", id);
        if (!Object.hasOwn(entriesOutput, "table")) entriesOutput["table"] = {};
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])({
            id,
            entries: entriesOutput
        });
    }
    hydrateStorageTypeEntry(entry) {
        if (typeof entry !== "object" || entry === null) return entry;
        const kind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$is$2d$plain$2d$record$2d$CUofyVQ7$2d$DWEzdhIx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__isPlainRecord$3e$__["isPlainRecord"])(entry) ? entry["kind"] : void 0;
        if (typeof kind !== "string") return entry;
        const factory = this.entityHydrationRegistry.get(kind);
        if (factory === void 0) return entry;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(factory(entry));
    }
    constructTargetContract(hydrated) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(hydrated);
    }
    /**
	* Serializes a namespace's `entries` dict by walking every enumerable
	* kind — no kind is named here, mirroring the generic hydrate walk in
	* `hydrateSqlNamespaceEntry` above. `table` is the SQL family's one
	* universal base kind (every namespace carries it), so it is always
	* emitted, even when empty; every other kind — target- or
	* pack-contributed — is emitted only when it holds at least one entry.
	* A kind carried non-enumerable on `entries` is excluded here for free,
	* since `Object.entries` honors enumerability.
	*/ serializeNamespaceEntries(entries) {
        const out = {
            table: this.serializeEntries(entries["table"] ?? {})
        };
        for (const [kind, record] of Object.entries(entries)){
            if (kind === "table" || record == null || Object.keys(record).length === 0) continue;
            out[kind] = this.serializeEntries(record);
        }
        return out;
    }
    serializeEntries(entries) {
        const out = {};
        for (const [name, entry] of Object.entries(entries))out[name] = this.serializeJsonObject(entry);
        return out;
    }
    serializeJsonObject(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(this.serializeJsonValue(value));
    }
    serializeJsonValue(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$framework$40$8$2e$0$2e$0$2d$rc$2e$12_typescript$40$5$2e$9$2e$3$2f$node_modules$2f40$prisma$2f$orm$2d$framework$2f$dist$2f$casts$2d$DpaahrlC$2d$Bd5n2coI$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__blindCast$3e$__["blindCast"])(JSON.parse(JSON.stringify(value)));
    }
};
/**
* Default SQL family `ContractSerializer` concretion. Inherits the
* full SQL-shared deserialization pipeline (structural validation +
* IR-class hydration) without pack-registered `storage.types`
* hydration factories — targets that emit polymorphic JSON outside the
* codec-typed envelope wire a target-specific subclass with a populated
* registry (see Postgres). Family-level call sites instantiate this
* default directly when no target serializer is supplied.
*
* Because this serializer has no target concretion, deserialization of
* contracts that include namespace entries from JSON will throw unless
* the caller provides pre-hydrated `NamespaceBase` instances. Production
* paths always supply a target-specific serializer.
*/ var SqlContractSerializer = class extends SqlContractSerializerBase {
    constructor(){
        super(/* @__PURE__ */ new Map());
    }
};
;
 //# sourceMappingURL=sql-contract-serializer-0a4k494z-QYmio7Uz.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/sql-contract-serializer-0a4k494z-QYmio7Uz.mjs [app-rsc] (ecmascript) <export n as SqlContractSerializerBase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlContractSerializerBase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$contract$2d$serializer$2d$0a4k494z$2d$QYmio7Uz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$sql$2d$contract$2d$serializer$2d$0a4k494z$2d$QYmio7Uz$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/sql-contract-serializer-0a4k494z-QYmio7Uz.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/canonicalization-hooks-dmXkOR4a.mjs [app-rsc] (ecmascript) <export t as sqlContractCanonicalizationHooks>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sqlContractCanonicalizationHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$canonicalization$2d$hooks$2d$dmXkOR4a$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$canonicalization$2d$hooks$2d$dmXkOR4a$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/canonicalization-hooks-dmXkOR4a.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/expression-DqrE3myO.mjs [app-rsc] (ecmascript) <export t as buildOperation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildOperation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/expression-DqrE3myO.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/expression-DqrE3myO.mjs [app-rsc] (ecmascript) <export o as toExpr>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toExpr",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["o"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$expression$2d$DqrE3myO$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/expression-DqrE3myO.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/dist-x6jvtkKM.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i",
    ()=>isUniqueConstraintViolation,
    "n",
    ()=>SqlQueryError,
    "r",
    ()=>UNIQUE_VIOLATION_SQLSTATE,
    "t",
    ()=>SqlConnectionError
]);
//#region ../../../2-sql/1-core/errors/dist/index.mjs
/**
* SQL query error for query-related failures (syntax errors, constraint violations, permissions).
*/ var SqlQueryError = class SqlQueryError extends Error {
    static ERROR_NAME = "SqlQueryError";
    kind = "sql_query";
    sqlState;
    constraint;
    table;
    column;
    detail;
    constructor(message, options){
        super(message, {
            cause: options?.cause
        });
        this.name = SqlQueryError.ERROR_NAME;
        this.sqlState = options?.sqlState;
        this.constraint = options?.constraint;
        this.table = options?.table;
        this.column = options?.column;
        this.detail = options?.detail;
    }
    /**
	* Type predicate to check if an error is a SqlQueryError.
	*/ static is(error) {
        return typeof error === "object" && error !== null && Object.hasOwn(error, "kind") && error.kind === "sql_query";
    }
};
/**
* SQLSTATE for a unique-constraint / primary-key violation — the SQL-standard
* `unique_violation` class. Drivers normalize their target-specific codes (e.g.
* Postgres `23505`, SQLite `SQLITE_CONSTRAINT_UNIQUE`/`PRIMARYKEY`) onto this
* value on {@link SqlQueryError.sqlState}, so consumers classify violations
* without knowing any target-specific error shape.
*/ const UNIQUE_VIOLATION_SQLSTATE = "23505";
/**
* Whether an error is a unique-constraint (or primary-key) violation, decided
* solely from the driver-normalized {@link SqlQueryError.sqlState}. Raw driver
* errors that were never normalized are not classified — callers run behind the
* driver, which always normalizes before the error escapes.
*/ function isUniqueConstraintViolation(error) {
    return SqlQueryError.is(error) && error.sqlState === "23505";
}
/**
* SQL connection error (timeouts, connection resets, etc.).
*/ var SqlConnectionError = class SqlConnectionError extends Error {
    static ERROR_NAME = "SqlConnectionError";
    kind = "sql_connection";
    transient;
    constructor(message, options){
        super(message, {
            cause: options?.cause
        });
        this.name = SqlConnectionError.ERROR_NAME;
        this.transient = options?.transient;
    }
    /**
	* Type predicate to check if an error is a SqlConnectionError.
	*/ static is(error) {
        return typeof error === "object" && error !== null && Object.hasOwn(error, "kind") && error.kind === "sql_connection";
    }
};
;
 //# sourceMappingURL=dist-x6jvtkKM.mjs.map
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/dist-x6jvtkKM.mjs [app-rsc] (ecmascript) <export t as SqlConnectionError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlConnectionError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$x6jvtkKM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["t"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$x6jvtkKM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/dist-x6jvtkKM.mjs [app-rsc] (ecmascript)");
}),
"[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/dist-x6jvtkKM.mjs [app-rsc] (ecmascript) <export n as SqlQueryError>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqlQueryError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$x6jvtkKM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["n"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$prisma$2b$orm$2d$family$2d$sql$40$8$2e$0$2e$_fe8b39737722c7b3def89960da0ac5c3$2f$node_modules$2f40$prisma$2f$orm$2d$family$2d$sql$2f$dist$2f$dist$2d$x6jvtkKM$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@prisma+orm-family-sql@8.0._fe8b39737722c7b3def89960da0ac5c3/node_modules/@prisma/orm-family-sql/dist/dist-x6jvtkKM.mjs [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=8f13e_%40prisma_orm-family-sql_dist_62251a52._.js.map