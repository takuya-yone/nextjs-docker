
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model articles
 * 
 */
export type articles = {
  article_id: number
  title: string
  contents: string
  username: string
  nice: number
  created_at: Date | null
}

/**
 * Model comments
 * 
 */
export type comments = {
  comment_id: number
  article_id: number
  message: string
  created_at: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Articles
 * const articles = await prisma.articles.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Articles
   * const articles = await prisma.articles.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.articles`: Exposes CRUD operations for the **articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.articlesDelegate<GlobalReject>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.commentsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    articles: 'articles',
    comments: 'comments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ArticlesCountOutputType
   */


  export type ArticlesCountOutputType = {
    comments: number
  }

  export type ArticlesCountOutputTypeSelect = {
    comments?: boolean
  }

  export type ArticlesCountOutputTypeGetPayload<S extends boolean | null | undefined | ArticlesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ArticlesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ArticlesCountOutputTypeArgs)
    ? ArticlesCountOutputType 
    : S extends { select: any } & (ArticlesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ArticlesCountOutputType ? ArticlesCountOutputType[P] : never
  } 
      : ArticlesCountOutputType




  // Custom InputTypes

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ArticlesCountOutputType
     */
    select?: ArticlesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model articles
   */


  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesAvgAggregateOutputType = {
    article_id: number | null
    nice: number | null
  }

  export type ArticlesSumAggregateOutputType = {
    article_id: number | null
    nice: number | null
  }

  export type ArticlesMinAggregateOutputType = {
    article_id: number | null
    title: string | null
    contents: string | null
    username: string | null
    nice: number | null
    created_at: Date | null
  }

  export type ArticlesMaxAggregateOutputType = {
    article_id: number | null
    title: string | null
    contents: string | null
    username: string | null
    nice: number | null
    created_at: Date | null
  }

  export type ArticlesCountAggregateOutputType = {
    article_id: number
    title: number
    contents: number
    username: number
    nice: number
    created_at: number
    _all: number
  }


  export type ArticlesAvgAggregateInputType = {
    article_id?: true
    nice?: true
  }

  export type ArticlesSumAggregateInputType = {
    article_id?: true
    nice?: true
  }

  export type ArticlesMinAggregateInputType = {
    article_id?: true
    title?: true
    contents?: true
    username?: true
    nice?: true
    created_at?: true
  }

  export type ArticlesMaxAggregateInputType = {
    article_id?: true
    title?: true
    contents?: true
    username?: true
    nice?: true
    created_at?: true
  }

  export type ArticlesCountAggregateInputType = {
    article_id?: true
    title?: true
    contents?: true
    username?: true
    nice?: true
    created_at?: true
    _all?: true
  }

  export type ArticlesAggregateArgs = {
    /**
     * Filter which articles to aggregate.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: Enumerable<articlesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type ArticlesGroupByArgs = {
    where?: articlesWhereInput
    orderBy?: Enumerable<articlesOrderByWithAggregationInput>
    by: ArticlesScalarFieldEnum[]
    having?: articlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _avg?: ArticlesAvgAggregateInputType
    _sum?: ArticlesSumAggregateInputType
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }


  export type ArticlesGroupByOutputType = {
    article_id: number
    title: string
    contents: string
    username: string
    nice: number
    created_at: Date | null
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends ArticlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type articlesSelect = {
    article_id?: boolean
    title?: boolean
    contents?: boolean
    username?: boolean
    nice?: boolean
    created_at?: boolean
    comments?: boolean | articles$commentsArgs
    _count?: boolean | ArticlesCountOutputTypeArgs
  }


  export type articlesInclude = {
    comments?: boolean | articles$commentsArgs
    _count?: boolean | ArticlesCountOutputTypeArgs
  }

  export type articlesGetPayload<S extends boolean | null | undefined | articlesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? articles :
    S extends undefined ? never :
    S extends { include: any } & (articlesArgs | articlesFindManyArgs)
    ? articles  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'comments' ? Array < commentsGetPayload<S['include'][P]>>  :
        P extends '_count' ? ArticlesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (articlesArgs | articlesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'comments' ? Array < commentsGetPayload<S['select'][P]>>  :
        P extends '_count' ? ArticlesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof articles ? articles[P] : never
  } 
      : articles


  type articlesCountArgs = 
    Omit<articlesFindManyArgs, 'select' | 'include'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface articlesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Articles that matches the filter.
     * @param {articlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends articlesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, articlesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'articles'> extends True ? Prisma__articlesClient<articlesGetPayload<T>> : Prisma__articlesClient<articlesGetPayload<T> | null, null>

    /**
     * Find one Articles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {articlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends articlesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, articlesFindUniqueOrThrowArgs>
    ): Prisma__articlesClient<articlesGetPayload<T>>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends articlesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, articlesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'articles'> extends True ? Prisma__articlesClient<articlesGetPayload<T>> : Prisma__articlesClient<articlesGetPayload<T> | null, null>

    /**
     * Find the first Articles that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends articlesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, articlesFindFirstOrThrowArgs>
    ): Prisma__articlesClient<articlesGetPayload<T>>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `article_id`
     * const articlesWithArticle_idOnly = await prisma.articles.findMany({ select: { article_id: true } })
     * 
    **/
    findMany<T extends articlesFindManyArgs>(
      args?: SelectSubset<T, articlesFindManyArgs>
    ): Prisma.PrismaPromise<Array<articlesGetPayload<T>>>

    /**
     * Create a Articles.
     * @param {articlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
    **/
    create<T extends articlesCreateArgs>(
      args: SelectSubset<T, articlesCreateArgs>
    ): Prisma__articlesClient<articlesGetPayload<T>>

    /**
     * Create many Articles.
     *     @param {articlesCreateManyArgs} args - Arguments to create many Articles.
     *     @example
     *     // Create many Articles
     *     const articles = await prisma.articles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends articlesCreateManyArgs>(
      args?: SelectSubset<T, articlesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Articles.
     * @param {articlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
    **/
    delete<T extends articlesDeleteArgs>(
      args: SelectSubset<T, articlesDeleteArgs>
    ): Prisma__articlesClient<articlesGetPayload<T>>

    /**
     * Update one Articles.
     * @param {articlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends articlesUpdateArgs>(
      args: SelectSubset<T, articlesUpdateArgs>
    ): Prisma__articlesClient<articlesGetPayload<T>>

    /**
     * Delete zero or more Articles.
     * @param {articlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends articlesDeleteManyArgs>(
      args?: SelectSubset<T, articlesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends articlesUpdateManyArgs>(
      args: SelectSubset<T, articlesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Articles.
     * @param {articlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
    **/
    upsert<T extends articlesUpsertArgs>(
      args: SelectSubset<T, articlesUpsertArgs>
    ): Prisma__articlesClient<articlesGetPayload<T>>

    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {articlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends articlesCountArgs>(
      args?: Subset<T, articlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArticlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticlesGroupByArgs['orderBy'] }
        : { orderBy?: ArticlesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArticlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__articlesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    comments<T extends articles$commentsArgs= {}>(args?: Subset<T, articles$commentsArgs>): Prisma.PrismaPromise<Array<commentsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * articles base type for findUnique actions
   */
  export type articlesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }

  /**
   * articles findUnique
   */
  export interface articlesFindUniqueArgs extends articlesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * articles findUniqueOrThrow
   */
  export type articlesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude | null
    /**
     * Filter, which articles to fetch.
     */
    where: articlesWhereUniqueInput
  }


  /**
   * articles base type for findFirst actions
   */
  export type articlesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: Enumerable<articlesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: Enumerable<ArticlesScalarFieldEnum>
  }

  /**
   * articles findFirst
   */
  export interface articlesFindFirstArgs extends articlesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * articles findFirstOrThrow
   */
  export type articlesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: Enumerable<articlesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of articles.
     */
    distinct?: Enumerable<ArticlesScalarFieldEnum>
  }


  /**
   * articles findMany
   */
  export type articlesFindManyArgs = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude | null
    /**
     * Filter, which articles to fetch.
     */
    where?: articlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of articles to fetch.
     */
    orderBy?: Enumerable<articlesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing articles.
     */
    cursor?: articlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` articles.
     */
    skip?: number
    distinct?: Enumerable<ArticlesScalarFieldEnum>
  }


  /**
   * articles create
   */
  export type articlesCreateArgs = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude | null
    /**
     * The data needed to create a articles.
     */
    data: XOR<articlesCreateInput, articlesUncheckedCreateInput>
  }


  /**
   * articles createMany
   */
  export type articlesCreateManyArgs = {
    /**
     * The data used to create many articles.
     */
    data: Enumerable<articlesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * articles update
   */
  export type articlesUpdateArgs = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude | null
    /**
     * The data needed to update a articles.
     */
    data: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
    /**
     * Choose, which articles to update.
     */
    where: articlesWhereUniqueInput
  }


  /**
   * articles updateMany
   */
  export type articlesUpdateManyArgs = {
    /**
     * The data used to update articles.
     */
    data: XOR<articlesUpdateManyMutationInput, articlesUncheckedUpdateManyInput>
    /**
     * Filter which articles to update
     */
    where?: articlesWhereInput
  }


  /**
   * articles upsert
   */
  export type articlesUpsertArgs = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude | null
    /**
     * The filter to search for the articles to update in case it exists.
     */
    where: articlesWhereUniqueInput
    /**
     * In case the articles found by the `where` argument doesn't exist, create a new articles with this data.
     */
    create: XOR<articlesCreateInput, articlesUncheckedCreateInput>
    /**
     * In case the articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<articlesUpdateInput, articlesUncheckedUpdateInput>
  }


  /**
   * articles delete
   */
  export type articlesDeleteArgs = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude | null
    /**
     * Filter which articles to delete.
     */
    where: articlesWhereUniqueInput
  }


  /**
   * articles deleteMany
   */
  export type articlesDeleteManyArgs = {
    /**
     * Filter which articles to delete
     */
    where?: articlesWhereInput
  }


  /**
   * articles.comments
   */
  export type articles$commentsArgs = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude | null
    where?: commentsWhereInput
    orderBy?: Enumerable<commentsOrderByWithRelationInput>
    cursor?: commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CommentsScalarFieldEnum>
  }


  /**
   * articles without action
   */
  export type articlesArgs = {
    /**
     * Select specific fields to fetch from the articles
     */
    select?: articlesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: articlesInclude | null
  }



  /**
   * Model comments
   */


  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    comment_id: number | null
    article_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    comment_id: number | null
    article_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    comment_id: number | null
    article_id: number | null
    message: string | null
    created_at: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    comment_id: number | null
    article_id: number | null
    message: string | null
    created_at: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    comment_id: number
    article_id: number
    message: number
    created_at: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    comment_id?: true
    article_id?: true
  }

  export type CommentsSumAggregateInputType = {
    comment_id?: true
    article_id?: true
  }

  export type CommentsMinAggregateInputType = {
    comment_id?: true
    article_id?: true
    message?: true
    created_at?: true
  }

  export type CommentsMaxAggregateInputType = {
    comment_id?: true
    article_id?: true
    message?: true
    created_at?: true
  }

  export type CommentsCountAggregateInputType = {
    comment_id?: true
    article_id?: true
    message?: true
    created_at?: true
    _all?: true
  }

  export type CommentsAggregateArgs = {
    /**
     * Filter which comments to aggregate.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: Enumerable<commentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs = {
    where?: commentsWhereInput
    orderBy?: Enumerable<commentsOrderByWithAggregationInput>
    by: CommentsScalarFieldEnum[]
    having?: commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }


  export type CommentsGroupByOutputType = {
    comment_id: number
    article_id: number
    message: string
    created_at: Date | null
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type commentsSelect = {
    comment_id?: boolean
    article_id?: boolean
    message?: boolean
    created_at?: boolean
    articles?: boolean | articlesArgs
  }


  export type commentsInclude = {
    articles?: boolean | articlesArgs
  }

  export type commentsGetPayload<S extends boolean | null | undefined | commentsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? comments :
    S extends undefined ? never :
    S extends { include: any } & (commentsArgs | commentsFindManyArgs)
    ? comments  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'articles' ? articlesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (commentsArgs | commentsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'articles' ? articlesGetPayload<S['select'][P]> :  P extends keyof comments ? comments[P] : never
  } 
      : comments


  type commentsCountArgs = 
    Omit<commentsFindManyArgs, 'select' | 'include'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface commentsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Comments that matches the filter.
     * @param {commentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends commentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, commentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'comments'> extends True ? Prisma__commentsClient<commentsGetPayload<T>> : Prisma__commentsClient<commentsGetPayload<T> | null, null>

    /**
     * Find one Comments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {commentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends commentsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, commentsFindUniqueOrThrowArgs>
    ): Prisma__commentsClient<commentsGetPayload<T>>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends commentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, commentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'comments'> extends True ? Prisma__commentsClient<commentsGetPayload<T>> : Prisma__commentsClient<commentsGetPayload<T> | null, null>

    /**
     * Find the first Comments that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends commentsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, commentsFindFirstOrThrowArgs>
    ): Prisma__commentsClient<commentsGetPayload<T>>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `comment_id`
     * const commentsWithComment_idOnly = await prisma.comments.findMany({ select: { comment_id: true } })
     * 
    **/
    findMany<T extends commentsFindManyArgs>(
      args?: SelectSubset<T, commentsFindManyArgs>
    ): Prisma.PrismaPromise<Array<commentsGetPayload<T>>>

    /**
     * Create a Comments.
     * @param {commentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
    **/
    create<T extends commentsCreateArgs>(
      args: SelectSubset<T, commentsCreateArgs>
    ): Prisma__commentsClient<commentsGetPayload<T>>

    /**
     * Create many Comments.
     *     @param {commentsCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comments = await prisma.comments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends commentsCreateManyArgs>(
      args?: SelectSubset<T, commentsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comments.
     * @param {commentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
    **/
    delete<T extends commentsDeleteArgs>(
      args: SelectSubset<T, commentsDeleteArgs>
    ): Prisma__commentsClient<commentsGetPayload<T>>

    /**
     * Update one Comments.
     * @param {commentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends commentsUpdateArgs>(
      args: SelectSubset<T, commentsUpdateArgs>
    ): Prisma__commentsClient<commentsGetPayload<T>>

    /**
     * Delete zero or more Comments.
     * @param {commentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends commentsDeleteManyArgs>(
      args?: SelectSubset<T, commentsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends commentsUpdateManyArgs>(
      args: SelectSubset<T, commentsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {commentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
    **/
    upsert<T extends commentsUpsertArgs>(
      args: SelectSubset<T, commentsUpsertArgs>
    ): Prisma__commentsClient<commentsGetPayload<T>>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends commentsCountArgs>(
      args?: Subset<T, commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__commentsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    articles<T extends articlesArgs= {}>(args?: Subset<T, articlesArgs>): Prisma__articlesClient<articlesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * comments base type for findUnique actions
   */
  export type commentsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }

  /**
   * comments findUnique
   */
  export interface commentsFindUniqueArgs extends commentsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * comments findUniqueOrThrow
   */
  export type commentsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude | null
    /**
     * Filter, which comments to fetch.
     */
    where: commentsWhereUniqueInput
  }


  /**
   * comments base type for findFirst actions
   */
  export type commentsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: Enumerable<commentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: Enumerable<CommentsScalarFieldEnum>
  }

  /**
   * comments findFirst
   */
  export interface commentsFindFirstArgs extends commentsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * comments findFirstOrThrow
   */
  export type commentsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: Enumerable<commentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comments.
     */
    distinct?: Enumerable<CommentsScalarFieldEnum>
  }


  /**
   * comments findMany
   */
  export type commentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude | null
    /**
     * Filter, which comments to fetch.
     */
    where?: commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comments to fetch.
     */
    orderBy?: Enumerable<commentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comments.
     */
    cursor?: commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comments.
     */
    skip?: number
    distinct?: Enumerable<CommentsScalarFieldEnum>
  }


  /**
   * comments create
   */
  export type commentsCreateArgs = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude | null
    /**
     * The data needed to create a comments.
     */
    data: XOR<commentsCreateInput, commentsUncheckedCreateInput>
  }


  /**
   * comments createMany
   */
  export type commentsCreateManyArgs = {
    /**
     * The data used to create many comments.
     */
    data: Enumerable<commentsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * comments update
   */
  export type commentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude | null
    /**
     * The data needed to update a comments.
     */
    data: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
    /**
     * Choose, which comments to update.
     */
    where: commentsWhereUniqueInput
  }


  /**
   * comments updateMany
   */
  export type commentsUpdateManyArgs = {
    /**
     * The data used to update comments.
     */
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyInput>
    /**
     * Filter which comments to update
     */
    where?: commentsWhereInput
  }


  /**
   * comments upsert
   */
  export type commentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude | null
    /**
     * The filter to search for the comments to update in case it exists.
     */
    where: commentsWhereUniqueInput
    /**
     * In case the comments found by the `where` argument doesn't exist, create a new comments with this data.
     */
    create: XOR<commentsCreateInput, commentsUncheckedCreateInput>
    /**
     * In case the comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commentsUpdateInput, commentsUncheckedUpdateInput>
  }


  /**
   * comments delete
   */
  export type commentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude | null
    /**
     * Filter which comments to delete.
     */
    where: commentsWhereUniqueInput
  }


  /**
   * comments deleteMany
   */
  export type commentsDeleteManyArgs = {
    /**
     * Filter which comments to delete
     */
    where?: commentsWhereInput
  }


  /**
   * comments without action
   */
  export type commentsArgs = {
    /**
     * Select specific fields to fetch from the comments
     */
    select?: commentsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: commentsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ArticlesScalarFieldEnum: {
    article_id: 'article_id',
    title: 'title',
    contents: 'contents',
    username: 'username',
    nice: 'nice',
    created_at: 'created_at'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    comment_id: 'comment_id',
    article_id: 'article_id',
    message: 'message',
    created_at: 'created_at'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type articlesWhereInput = {
    AND?: Enumerable<articlesWhereInput>
    OR?: Enumerable<articlesWhereInput>
    NOT?: Enumerable<articlesWhereInput>
    article_id?: IntFilter | number
    title?: StringFilter | string
    contents?: StringFilter | string
    username?: StringFilter | string
    nice?: IntFilter | number
    created_at?: DateTimeNullableFilter | Date | string | null
    comments?: CommentsListRelationFilter
  }

  export type articlesOrderByWithRelationInput = {
    article_id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    username?: SortOrder
    nice?: SortOrder
    created_at?: SortOrder
    comments?: commentsOrderByRelationAggregateInput
  }

  export type articlesWhereUniqueInput = {
    article_id?: number
  }

  export type articlesOrderByWithAggregationInput = {
    article_id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    username?: SortOrder
    nice?: SortOrder
    created_at?: SortOrder
    _count?: articlesCountOrderByAggregateInput
    _avg?: articlesAvgOrderByAggregateInput
    _max?: articlesMaxOrderByAggregateInput
    _min?: articlesMinOrderByAggregateInput
    _sum?: articlesSumOrderByAggregateInput
  }

  export type articlesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<articlesScalarWhereWithAggregatesInput>
    OR?: Enumerable<articlesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<articlesScalarWhereWithAggregatesInput>
    article_id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    contents?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    nice?: IntWithAggregatesFilter | number
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type commentsWhereInput = {
    AND?: Enumerable<commentsWhereInput>
    OR?: Enumerable<commentsWhereInput>
    NOT?: Enumerable<commentsWhereInput>
    comment_id?: IntFilter | number
    article_id?: IntFilter | number
    message?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
    articles?: XOR<ArticlesRelationFilter, articlesWhereInput>
  }

  export type commentsOrderByWithRelationInput = {
    comment_id?: SortOrder
    article_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    articles?: articlesOrderByWithRelationInput
  }

  export type commentsWhereUniqueInput = {
    comment_id?: number
  }

  export type commentsOrderByWithAggregationInput = {
    comment_id?: SortOrder
    article_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
    _count?: commentsCountOrderByAggregateInput
    _avg?: commentsAvgOrderByAggregateInput
    _max?: commentsMaxOrderByAggregateInput
    _min?: commentsMinOrderByAggregateInput
    _sum?: commentsSumOrderByAggregateInput
  }

  export type commentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<commentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<commentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<commentsScalarWhereWithAggregatesInput>
    comment_id?: IntWithAggregatesFilter | number
    article_id?: IntWithAggregatesFilter | number
    message?: StringWithAggregatesFilter | string
    created_at?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type articlesCreateInput = {
    title: string
    contents: string
    username: string
    nice: number
    created_at?: Date | string | null
    comments?: commentsCreateNestedManyWithoutArticlesInput
  }

  export type articlesUncheckedCreateInput = {
    article_id?: number
    title: string
    contents: string
    username: string
    nice: number
    created_at?: Date | string | null
    comments?: commentsUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type articlesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nice?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUpdateManyWithoutArticlesNestedInput
  }

  export type articlesUncheckedUpdateInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nice?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: commentsUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type articlesCreateManyInput = {
    article_id?: number
    title: string
    contents: string
    username: string
    nice: number
    created_at?: Date | string | null
  }

  export type articlesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nice?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesUncheckedUpdateManyInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nice?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateInput = {
    message: string
    created_at?: Date | string | null
    articles: articlesCreateNestedOneWithoutCommentsInput
  }

  export type commentsUncheckedCreateInput = {
    comment_id?: number
    article_id: number
    message: string
    created_at?: Date | string | null
  }

  export type commentsUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: articlesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type commentsUncheckedUpdateInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyInput = {
    comment_id?: number
    article_id: number
    message: string
    created_at?: Date | string | null
  }

  export type commentsUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    article_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type CommentsListRelationFilter = {
    every?: commentsWhereInput
    some?: commentsWhereInput
    none?: commentsWhereInput
  }

  export type commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type articlesCountOrderByAggregateInput = {
    article_id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    username?: SortOrder
    nice?: SortOrder
    created_at?: SortOrder
  }

  export type articlesAvgOrderByAggregateInput = {
    article_id?: SortOrder
    nice?: SortOrder
  }

  export type articlesMaxOrderByAggregateInput = {
    article_id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    username?: SortOrder
    nice?: SortOrder
    created_at?: SortOrder
  }

  export type articlesMinOrderByAggregateInput = {
    article_id?: SortOrder
    title?: SortOrder
    contents?: SortOrder
    username?: SortOrder
    nice?: SortOrder
    created_at?: SortOrder
  }

  export type articlesSumOrderByAggregateInput = {
    article_id?: SortOrder
    nice?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type ArticlesRelationFilter = {
    is?: articlesWhereInput
    isNot?: articlesWhereInput
  }

  export type commentsCountOrderByAggregateInput = {
    comment_id?: SortOrder
    article_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type commentsAvgOrderByAggregateInput = {
    comment_id?: SortOrder
    article_id?: SortOrder
  }

  export type commentsMaxOrderByAggregateInput = {
    comment_id?: SortOrder
    article_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type commentsMinOrderByAggregateInput = {
    comment_id?: SortOrder
    article_id?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type commentsSumOrderByAggregateInput = {
    comment_id?: SortOrder
    article_id?: SortOrder
  }

  export type commentsCreateNestedManyWithoutArticlesInput = {
    create?: XOR<Enumerable<commentsCreateWithoutArticlesInput>, Enumerable<commentsUncheckedCreateWithoutArticlesInput>>
    connectOrCreate?: Enumerable<commentsCreateOrConnectWithoutArticlesInput>
    createMany?: commentsCreateManyArticlesInputEnvelope
    connect?: Enumerable<commentsWhereUniqueInput>
  }

  export type commentsUncheckedCreateNestedManyWithoutArticlesInput = {
    create?: XOR<Enumerable<commentsCreateWithoutArticlesInput>, Enumerable<commentsUncheckedCreateWithoutArticlesInput>>
    connectOrCreate?: Enumerable<commentsCreateOrConnectWithoutArticlesInput>
    createMany?: commentsCreateManyArticlesInputEnvelope
    connect?: Enumerable<commentsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type commentsUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<Enumerable<commentsCreateWithoutArticlesInput>, Enumerable<commentsUncheckedCreateWithoutArticlesInput>>
    connectOrCreate?: Enumerable<commentsCreateOrConnectWithoutArticlesInput>
    upsert?: Enumerable<commentsUpsertWithWhereUniqueWithoutArticlesInput>
    createMany?: commentsCreateManyArticlesInputEnvelope
    set?: Enumerable<commentsWhereUniqueInput>
    disconnect?: Enumerable<commentsWhereUniqueInput>
    delete?: Enumerable<commentsWhereUniqueInput>
    connect?: Enumerable<commentsWhereUniqueInput>
    update?: Enumerable<commentsUpdateWithWhereUniqueWithoutArticlesInput>
    updateMany?: Enumerable<commentsUpdateManyWithWhereWithoutArticlesInput>
    deleteMany?: Enumerable<commentsScalarWhereInput>
  }

  export type commentsUncheckedUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<Enumerable<commentsCreateWithoutArticlesInput>, Enumerable<commentsUncheckedCreateWithoutArticlesInput>>
    connectOrCreate?: Enumerable<commentsCreateOrConnectWithoutArticlesInput>
    upsert?: Enumerable<commentsUpsertWithWhereUniqueWithoutArticlesInput>
    createMany?: commentsCreateManyArticlesInputEnvelope
    set?: Enumerable<commentsWhereUniqueInput>
    disconnect?: Enumerable<commentsWhereUniqueInput>
    delete?: Enumerable<commentsWhereUniqueInput>
    connect?: Enumerable<commentsWhereUniqueInput>
    update?: Enumerable<commentsUpdateWithWhereUniqueWithoutArticlesInput>
    updateMany?: Enumerable<commentsUpdateManyWithWhereWithoutArticlesInput>
    deleteMany?: Enumerable<commentsScalarWhereInput>
  }

  export type articlesCreateNestedOneWithoutCommentsInput = {
    create?: XOR<articlesCreateWithoutCommentsInput, articlesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: articlesCreateOrConnectWithoutCommentsInput
    connect?: articlesWhereUniqueInput
  }

  export type articlesUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<articlesCreateWithoutCommentsInput, articlesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: articlesCreateOrConnectWithoutCommentsInput
    upsert?: articlesUpsertWithoutCommentsInput
    connect?: articlesWhereUniqueInput
    update?: XOR<articlesUpdateWithoutCommentsInput, articlesUncheckedUpdateWithoutCommentsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type commentsCreateWithoutArticlesInput = {
    message: string
    created_at?: Date | string | null
  }

  export type commentsUncheckedCreateWithoutArticlesInput = {
    comment_id?: number
    message: string
    created_at?: Date | string | null
  }

  export type commentsCreateOrConnectWithoutArticlesInput = {
    where: commentsWhereUniqueInput
    create: XOR<commentsCreateWithoutArticlesInput, commentsUncheckedCreateWithoutArticlesInput>
  }

  export type commentsCreateManyArticlesInputEnvelope = {
    data: Enumerable<commentsCreateManyArticlesInput>
    skipDuplicates?: boolean
  }

  export type commentsUpsertWithWhereUniqueWithoutArticlesInput = {
    where: commentsWhereUniqueInput
    update: XOR<commentsUpdateWithoutArticlesInput, commentsUncheckedUpdateWithoutArticlesInput>
    create: XOR<commentsCreateWithoutArticlesInput, commentsUncheckedCreateWithoutArticlesInput>
  }

  export type commentsUpdateWithWhereUniqueWithoutArticlesInput = {
    where: commentsWhereUniqueInput
    data: XOR<commentsUpdateWithoutArticlesInput, commentsUncheckedUpdateWithoutArticlesInput>
  }

  export type commentsUpdateManyWithWhereWithoutArticlesInput = {
    where: commentsScalarWhereInput
    data: XOR<commentsUpdateManyMutationInput, commentsUncheckedUpdateManyWithoutCommentsInput>
  }

  export type commentsScalarWhereInput = {
    AND?: Enumerable<commentsScalarWhereInput>
    OR?: Enumerable<commentsScalarWhereInput>
    NOT?: Enumerable<commentsScalarWhereInput>
    comment_id?: IntFilter | number
    article_id?: IntFilter | number
    message?: StringFilter | string
    created_at?: DateTimeNullableFilter | Date | string | null
  }

  export type articlesCreateWithoutCommentsInput = {
    title: string
    contents: string
    username: string
    nice: number
    created_at?: Date | string | null
  }

  export type articlesUncheckedCreateWithoutCommentsInput = {
    article_id?: number
    title: string
    contents: string
    username: string
    nice: number
    created_at?: Date | string | null
  }

  export type articlesCreateOrConnectWithoutCommentsInput = {
    where: articlesWhereUniqueInput
    create: XOR<articlesCreateWithoutCommentsInput, articlesUncheckedCreateWithoutCommentsInput>
  }

  export type articlesUpsertWithoutCommentsInput = {
    update: XOR<articlesUpdateWithoutCommentsInput, articlesUncheckedUpdateWithoutCommentsInput>
    create: XOR<articlesCreateWithoutCommentsInput, articlesUncheckedCreateWithoutCommentsInput>
  }

  export type articlesUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nice?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type articlesUncheckedUpdateWithoutCommentsInput = {
    article_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    nice?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsCreateManyArticlesInput = {
    comment_id?: number
    message: string
    created_at?: Date | string | null
  }

  export type commentsUpdateWithoutArticlesInput = {
    message?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateWithoutArticlesInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type commentsUncheckedUpdateManyWithoutCommentsInput = {
    comment_id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}