
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Family
 * 
 */
export type Family = $Result.DefaultSelection<Prisma.$FamilyPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model FeeLog
 * 
 */
export type FeeLog = $Result.DefaultSelection<Prisma.$FeeLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  PRINCIPAL: 'PRINCIPAL',
  STAFF: 'STAFF'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.family`: Exposes CRUD operations for the **Family** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Families
    * const families = await prisma.family.findMany()
    * ```
    */
  get family(): Prisma.FamilyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feeLog`: Exposes CRUD operations for the **FeeLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeeLogs
    * const feeLogs = await prisma.feeLog.findMany()
    * ```
    */
  get feeLog(): Prisma.FeeLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Branch: 'Branch',
    Family: 'Family',
    Student: 'Student',
    Payment: 'Payment',
    FeeLog: 'FeeLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "branch" | "family" | "student" | "payment" | "feeLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Family: {
        payload: Prisma.$FamilyPayload<ExtArgs>
        fields: Prisma.FamilyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findFirst: {
            args: Prisma.FamilyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findMany: {
            args: Prisma.FamilyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>[]
          }
          create: {
            args: Prisma.FamilyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          createMany: {
            args: Prisma.FamilyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FamilyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          update: {
            args: Prisma.FamilyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          deleteMany: {
            args: Prisma.FamilyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FamilyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          aggregate: {
            args: Prisma.FamilyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamily>
          }
          groupBy: {
            args: Prisma.FamilyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      FeeLog: {
        payload: Prisma.$FeeLogPayload<ExtArgs>
        fields: Prisma.FeeLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeeLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeeLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeLogPayload>
          }
          findFirst: {
            args: Prisma.FeeLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeeLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeLogPayload>
          }
          findMany: {
            args: Prisma.FeeLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeLogPayload>[]
          }
          create: {
            args: Prisma.FeeLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeLogPayload>
          }
          createMany: {
            args: Prisma.FeeLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeeLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeLogPayload>
          }
          update: {
            args: Prisma.FeeLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeLogPayload>
          }
          deleteMany: {
            args: Prisma.FeeLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeeLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeeLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeeLogPayload>
          }
          aggregate: {
            args: Prisma.FeeLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeeLog>
          }
          groupBy: {
            args: Prisma.FeeLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeeLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeeLogCountArgs<ExtArgs>
            result: $Utils.Optional<FeeLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    branch?: BranchOmit
    family?: FamilyOmit
    student?: StudentOmit
    payment?: PaymentOmit
    feeLog?: FeeLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    enrolledStudents: number
    receivedPayments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledStudents?: boolean | UserCountOutputTypeCountEnrolledStudentsArgs
    receivedPayments?: boolean | UserCountOutputTypeCountReceivedPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrolledStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    staff: number
    students: number
    families: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | BranchCountOutputTypeCountStaffArgs
    students?: boolean | BranchCountOutputTypeCountStudentsArgs
    families?: boolean | BranchCountOutputTypeCountFamiliesArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountFamiliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyWhereInput
  }


  /**
   * Count Type FamilyCountOutputType
   */

  export type FamilyCountOutputType = {
    children: number
    payments: number
    feeLogs: number
  }

  export type FamilyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | FamilyCountOutputTypeCountChildrenArgs
    payments?: boolean | FamilyCountOutputTypeCountPaymentsArgs
    feeLogs?: boolean | FamilyCountOutputTypeCountFeeLogsArgs
  }

  // Custom InputTypes
  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyCountOutputType
     */
    select?: FamilyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountFeeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeLogWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    feeLogs: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feeLogs?: boolean | StudentCountOutputTypeCountFeeLogsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountFeeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    branchId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    branchId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    branchId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    branchId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    username: number
    password: number
    phone: number
    role: number
    branchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    branchId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    branchId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    phone?: true
    role?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    phone?: true
    role?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    phone?: true
    role?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    username: string
    password: string
    phone: string | null
    role: $Enums.Role
    branchId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | User$branchArgs<ExtArgs>
    principalBranch?: boolean | User$principalBranchArgs<ExtArgs>
    enrolledStudents?: boolean | User$enrolledStudentsArgs<ExtArgs>
    receivedPayments?: boolean | User$receivedPaymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "username" | "password" | "phone" | "role" | "branchId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | User$branchArgs<ExtArgs>
    principalBranch?: boolean | User$principalBranchArgs<ExtArgs>
    enrolledStudents?: boolean | User$enrolledStudentsArgs<ExtArgs>
    receivedPayments?: boolean | User$receivedPaymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs> | null
      principalBranch: Prisma.$BranchPayload<ExtArgs> | null
      enrolledStudents: Prisma.$StudentPayload<ExtArgs>[]
      receivedPayments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      username: string
      password: string
      phone: string | null
      role: $Enums.Role
      branchId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends User$branchArgs<ExtArgs> = {}>(args?: Subset<T, User$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    principalBranch<T extends User$principalBranchArgs<ExtArgs> = {}>(args?: Subset<T, User$principalBranchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enrolledStudents<T extends User$enrolledStudentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrolledStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedPayments<T extends User$receivedPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly branchId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.branch
   */
  export type User$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * User.principalBranch
   */
  export type User$principalBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * User.enrolledStudents
   */
  export type User$enrolledStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * User.receivedPayments
   */
  export type User$receivedPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchAvgAggregateOutputType = {
    id: number | null
    principalId: number | null
  }

  export type BranchSumAggregateOutputType = {
    id: number | null
    principalId: number | null
  }

  export type BranchMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    principalId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    principalId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    address: number
    principalId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BranchAvgAggregateInputType = {
    id?: true
    principalId?: true
  }

  export type BranchSumAggregateInputType = {
    id?: true
    principalId?: true
  }

  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    principalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    principalId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    principalId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _avg?: BranchAvgAggregateInputType
    _sum?: BranchSumAggregateInputType
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: number
    name: string
    address: string
    principalId: number | null
    createdAt: Date
    updatedAt: Date
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    principalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    principal?: boolean | Branch$principalArgs<ExtArgs>
    staff?: boolean | Branch$staffArgs<ExtArgs>
    students?: boolean | Branch$studentsArgs<ExtArgs>
    families?: boolean | Branch$familiesArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>



  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    principalId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "principalId" | "createdAt" | "updatedAt", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    principal?: boolean | Branch$principalArgs<ExtArgs>
    staff?: boolean | Branch$staffArgs<ExtArgs>
    students?: boolean | Branch$studentsArgs<ExtArgs>
    families?: boolean | Branch$familiesArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      principal: Prisma.$UserPayload<ExtArgs> | null
      staff: Prisma.$UserPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      families: Prisma.$FamilyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string
      principalId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
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
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    principal<T extends Branch$principalArgs<ExtArgs> = {}>(args?: Subset<T, Branch$principalArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staff<T extends Branch$staffArgs<ExtArgs> = {}>(args?: Subset<T, Branch$staffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Branch$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    families<T extends Branch$familiesArgs<ExtArgs> = {}>(args?: Subset<T, Branch$familiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'Int'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly address: FieldRef<"Branch", 'String'>
    readonly principalId: FieldRef<"Branch", 'Int'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly updatedAt: FieldRef<"Branch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.principal
   */
  export type Branch$principalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Branch.staff
   */
  export type Branch$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Branch.students
   */
  export type Branch$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Branch.families
   */
  export type Branch$familiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    where?: FamilyWhereInput
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    cursor?: FamilyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model Family
   */

  export type AggregateFamily = {
    _count: FamilyCountAggregateOutputType | null
    _avg: FamilyAvgAggregateOutputType | null
    _sum: FamilySumAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  export type FamilyAvgAggregateOutputType = {
    id: number | null
    balance: Decimal | null
    branchId: number | null
  }

  export type FamilySumAggregateOutputType = {
    id: number | null
    balance: Decimal | null
    branchId: number | null
  }

  export type FamilyMinAggregateOutputType = {
    id: number | null
    fatherName: string | null
    fatherPhone: string | null
    fatherOccupation: string | null
    balance: Decimal | null
    branchId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamilyMaxAggregateOutputType = {
    id: number | null
    fatherName: string | null
    fatherPhone: string | null
    fatherOccupation: string | null
    balance: Decimal | null
    branchId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FamilyCountAggregateOutputType = {
    id: number
    fatherName: number
    fatherPhone: number
    fatherOccupation: number
    balance: number
    branchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FamilyAvgAggregateInputType = {
    id?: true
    balance?: true
    branchId?: true
  }

  export type FamilySumAggregateInputType = {
    id?: true
    balance?: true
    branchId?: true
  }

  export type FamilyMinAggregateInputType = {
    id?: true
    fatherName?: true
    fatherPhone?: true
    fatherOccupation?: true
    balance?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamilyMaxAggregateInputType = {
    id?: true
    fatherName?: true
    fatherPhone?: true
    fatherOccupation?: true
    balance?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FamilyCountAggregateInputType = {
    id?: true
    fatherName?: true
    fatherPhone?: true
    fatherOccupation?: true
    balance?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FamilyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Family to aggregate.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Families
    **/
    _count?: true | FamilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamilyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamilySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyMaxAggregateInputType
  }

  export type GetFamilyAggregateType<T extends FamilyAggregateArgs> = {
        [P in keyof T & keyof AggregateFamily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamily[P]>
      : GetScalarType<T[P], AggregateFamily[P]>
  }




  export type FamilyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyWhereInput
    orderBy?: FamilyOrderByWithAggregationInput | FamilyOrderByWithAggregationInput[]
    by: FamilyScalarFieldEnum[] | FamilyScalarFieldEnum
    having?: FamilyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyCountAggregateInputType | true
    _avg?: FamilyAvgAggregateInputType
    _sum?: FamilySumAggregateInputType
    _min?: FamilyMinAggregateInputType
    _max?: FamilyMaxAggregateInputType
  }

  export type FamilyGroupByOutputType = {
    id: number
    fatherName: string
    fatherPhone: string
    fatherOccupation: string | null
    balance: Decimal
    branchId: number
    createdAt: Date
    updatedAt: Date
    _count: FamilyCountAggregateOutputType | null
    _avg: FamilyAvgAggregateOutputType | null
    _sum: FamilySumAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  type GetFamilyGroupByPayload<T extends FamilyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyGroupByOutputType[P]>
        }
      >
    >


  export type FamilySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fatherName?: boolean
    fatherPhone?: boolean
    fatherOccupation?: boolean
    balance?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    children?: boolean | Family$childrenArgs<ExtArgs>
    payments?: boolean | Family$paymentsArgs<ExtArgs>
    feeLogs?: boolean | Family$feeLogsArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["family"]>



  export type FamilySelectScalar = {
    id?: boolean
    fatherName?: boolean
    fatherPhone?: boolean
    fatherOccupation?: boolean
    balance?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FamilyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fatherName" | "fatherPhone" | "fatherOccupation" | "balance" | "branchId" | "createdAt" | "updatedAt", ExtArgs["result"]["family"]>
  export type FamilyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    children?: boolean | Family$childrenArgs<ExtArgs>
    payments?: boolean | Family$paymentsArgs<ExtArgs>
    feeLogs?: boolean | Family$feeLogsArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FamilyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Family"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      children: Prisma.$StudentPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      feeLogs: Prisma.$FeeLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fatherName: string
      fatherPhone: string
      fatherOccupation: string | null
      balance: Prisma.Decimal
      branchId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["family"]>
    composites: {}
  }

  type FamilyGetPayload<S extends boolean | null | undefined | FamilyDefaultArgs> = $Result.GetResult<Prisma.$FamilyPayload, S>

  type FamilyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FamilyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamilyCountAggregateInputType | true
    }

  export interface FamilyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Family'], meta: { name: 'Family' } }
    /**
     * Find zero or one Family that matches the filter.
     * @param {FamilyFindUniqueArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamilyFindUniqueArgs>(args: SelectSubset<T, FamilyFindUniqueArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Family that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FamilyFindUniqueOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamilyFindUniqueOrThrowArgs>(args: SelectSubset<T, FamilyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamilyFindFirstArgs>(args?: SelectSubset<T, FamilyFindFirstArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Family that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamilyFindFirstOrThrowArgs>(args?: SelectSubset<T, FamilyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Families that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Families
     * const families = await prisma.family.findMany()
     * 
     * // Get first 10 Families
     * const families = await prisma.family.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyWithIdOnly = await prisma.family.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamilyFindManyArgs>(args?: SelectSubset<T, FamilyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Family.
     * @param {FamilyCreateArgs} args - Arguments to create a Family.
     * @example
     * // Create one Family
     * const Family = await prisma.family.create({
     *   data: {
     *     // ... data to create a Family
     *   }
     * })
     * 
     */
    create<T extends FamilyCreateArgs>(args: SelectSubset<T, FamilyCreateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Families.
     * @param {FamilyCreateManyArgs} args - Arguments to create many Families.
     * @example
     * // Create many Families
     * const family = await prisma.family.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamilyCreateManyArgs>(args?: SelectSubset<T, FamilyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Family.
     * @param {FamilyDeleteArgs} args - Arguments to delete one Family.
     * @example
     * // Delete one Family
     * const Family = await prisma.family.delete({
     *   where: {
     *     // ... filter to delete one Family
     *   }
     * })
     * 
     */
    delete<T extends FamilyDeleteArgs>(args: SelectSubset<T, FamilyDeleteArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Family.
     * @param {FamilyUpdateArgs} args - Arguments to update one Family.
     * @example
     * // Update one Family
     * const family = await prisma.family.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamilyUpdateArgs>(args: SelectSubset<T, FamilyUpdateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Families.
     * @param {FamilyDeleteManyArgs} args - Arguments to filter Families to delete.
     * @example
     * // Delete a few Families
     * const { count } = await prisma.family.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamilyDeleteManyArgs>(args?: SelectSubset<T, FamilyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Families
     * const family = await prisma.family.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamilyUpdateManyArgs>(args: SelectSubset<T, FamilyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Family.
     * @param {FamilyUpsertArgs} args - Arguments to update or create a Family.
     * @example
     * // Update or create a Family
     * const family = await prisma.family.upsert({
     *   create: {
     *     // ... data to create a Family
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Family we want to update
     *   }
     * })
     */
    upsert<T extends FamilyUpsertArgs>(args: SelectSubset<T, FamilyUpsertArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyCountArgs} args - Arguments to filter Families to count.
     * @example
     * // Count the number of Families
     * const count = await prisma.family.count({
     *   where: {
     *     // ... the filter for the Families we want to count
     *   }
     * })
    **/
    count<T extends FamilyCountArgs>(
      args?: Subset<T, FamilyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamilyAggregateArgs>(args: Subset<T, FamilyAggregateArgs>): Prisma.PrismaPromise<GetFamilyAggregateType<T>>

    /**
     * Group by Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupByArgs} args - Group by arguments.
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
      T extends FamilyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyGroupByArgs['orderBy'] }
        : { orderBy?: FamilyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FamilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Family model
   */
  readonly fields: FamilyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Family.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    children<T extends Family$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Family$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Family$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Family$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feeLogs<T extends Family$feeLogsArgs<ExtArgs> = {}>(args?: Subset<T, Family$feeLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Family model
   */
  interface FamilyFieldRefs {
    readonly id: FieldRef<"Family", 'Int'>
    readonly fatherName: FieldRef<"Family", 'String'>
    readonly fatherPhone: FieldRef<"Family", 'String'>
    readonly fatherOccupation: FieldRef<"Family", 'String'>
    readonly balance: FieldRef<"Family", 'Decimal'>
    readonly branchId: FieldRef<"Family", 'Int'>
    readonly createdAt: FieldRef<"Family", 'DateTime'>
    readonly updatedAt: FieldRef<"Family", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Family findUnique
   */
  export type FamilyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findUniqueOrThrow
   */
  export type FamilyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findFirst
   */
  export type FamilyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findFirstOrThrow
   */
  export type FamilyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findMany
   */
  export type FamilyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Families to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family create
   */
  export type FamilyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to create a Family.
     */
    data: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
  }

  /**
   * Family createMany
   */
  export type FamilyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Families.
     */
    data: FamilyCreateManyInput | FamilyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Family update
   */
  export type FamilyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to update a Family.
     */
    data: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
    /**
     * Choose, which Family to update.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family updateMany
   */
  export type FamilyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Families.
     */
    data: XOR<FamilyUpdateManyMutationInput, FamilyUncheckedUpdateManyInput>
    /**
     * Filter which Families to update
     */
    where?: FamilyWhereInput
    /**
     * Limit how many Families to update.
     */
    limit?: number
  }

  /**
   * Family upsert
   */
  export type FamilyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The filter to search for the Family to update in case it exists.
     */
    where: FamilyWhereUniqueInput
    /**
     * In case the Family found by the `where` argument doesn't exist, create a new Family with this data.
     */
    create: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
    /**
     * In case the Family was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
  }

  /**
   * Family delete
   */
  export type FamilyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter which Family to delete.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family deleteMany
   */
  export type FamilyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Families to delete
     */
    where?: FamilyWhereInput
    /**
     * Limit how many Families to delete.
     */
    limit?: number
  }

  /**
   * Family.children
   */
  export type Family$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Family.payments
   */
  export type Family$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Family.feeLogs
   */
  export type Family$feeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
    where?: FeeLogWhereInput
    orderBy?: FeeLogOrderByWithRelationInput | FeeLogOrderByWithRelationInput[]
    cursor?: FeeLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeeLogScalarFieldEnum | FeeLogScalarFieldEnum[]
  }

  /**
   * Family without action
   */
  export type FamilyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Family
     */
    omit?: FamilyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
    admissionFee: Decimal | null
    monthlyFee: Decimal | null
    annualCharges: Decimal | null
    academyFee: Decimal | null
    labMiscFee: Decimal | null
    branchId: number | null
    familyId: number | null
    enrolledById: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
    admissionFee: Decimal | null
    monthlyFee: Decimal | null
    annualCharges: Decimal | null
    academyFee: Decimal | null
    labMiscFee: Decimal | null
    branchId: number | null
    familyId: number | null
    enrolledById: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    admissionNo: string | null
    referenceNo: string | null
    name: string | null
    dateOfBirth: string | null
    formBNicNo: string | null
    previousSchool: string | null
    caste: string | null
    religion: string | null
    gender: string | null
    classAdmitted: string | null
    referenceInSchool: string | null
    specialInfo: string | null
    guardianName: string | null
    guardianRelation: string | null
    houseNo: string | null
    streetNo: string | null
    blockPhase: string | null
    mohallahColony: string | null
    cell1: string | null
    cell2: string | null
    whatsapp: string | null
    schoolLeavingCert: boolean | null
    characterCert: boolean | null
    birthCert: boolean | null
    admissionFee: Decimal | null
    monthlyFee: Decimal | null
    annualCharges: Decimal | null
    academyFee: Decimal | null
    labMiscFee: Decimal | null
    branchId: number | null
    familyId: number | null
    enrolledById: number | null
    admissionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    admissionNo: string | null
    referenceNo: string | null
    name: string | null
    dateOfBirth: string | null
    formBNicNo: string | null
    previousSchool: string | null
    caste: string | null
    religion: string | null
    gender: string | null
    classAdmitted: string | null
    referenceInSchool: string | null
    specialInfo: string | null
    guardianName: string | null
    guardianRelation: string | null
    houseNo: string | null
    streetNo: string | null
    blockPhase: string | null
    mohallahColony: string | null
    cell1: string | null
    cell2: string | null
    whatsapp: string | null
    schoolLeavingCert: boolean | null
    characterCert: boolean | null
    birthCert: boolean | null
    admissionFee: Decimal | null
    monthlyFee: Decimal | null
    annualCharges: Decimal | null
    academyFee: Decimal | null
    labMiscFee: Decimal | null
    branchId: number | null
    familyId: number | null
    enrolledById: number | null
    admissionDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    admissionNo: number
    referenceNo: number
    name: number
    dateOfBirth: number
    formBNicNo: number
    previousSchool: number
    caste: number
    religion: number
    gender: number
    classAdmitted: number
    referenceInSchool: number
    specialInfo: number
    guardianName: number
    guardianRelation: number
    houseNo: number
    streetNo: number
    blockPhase: number
    mohallahColony: number
    cell1: number
    cell2: number
    whatsapp: number
    schoolLeavingCert: number
    characterCert: number
    birthCert: number
    admissionFee: number
    monthlyFee: number
    annualCharges: number
    academyFee: number
    labMiscFee: number
    branchId: number
    familyId: number
    enrolledById: number
    admissionDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
    admissionFee?: true
    monthlyFee?: true
    annualCharges?: true
    academyFee?: true
    labMiscFee?: true
    branchId?: true
    familyId?: true
    enrolledById?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
    admissionFee?: true
    monthlyFee?: true
    annualCharges?: true
    academyFee?: true
    labMiscFee?: true
    branchId?: true
    familyId?: true
    enrolledById?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    admissionNo?: true
    referenceNo?: true
    name?: true
    dateOfBirth?: true
    formBNicNo?: true
    previousSchool?: true
    caste?: true
    religion?: true
    gender?: true
    classAdmitted?: true
    referenceInSchool?: true
    specialInfo?: true
    guardianName?: true
    guardianRelation?: true
    houseNo?: true
    streetNo?: true
    blockPhase?: true
    mohallahColony?: true
    cell1?: true
    cell2?: true
    whatsapp?: true
    schoolLeavingCert?: true
    characterCert?: true
    birthCert?: true
    admissionFee?: true
    monthlyFee?: true
    annualCharges?: true
    academyFee?: true
    labMiscFee?: true
    branchId?: true
    familyId?: true
    enrolledById?: true
    admissionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    admissionNo?: true
    referenceNo?: true
    name?: true
    dateOfBirth?: true
    formBNicNo?: true
    previousSchool?: true
    caste?: true
    religion?: true
    gender?: true
    classAdmitted?: true
    referenceInSchool?: true
    specialInfo?: true
    guardianName?: true
    guardianRelation?: true
    houseNo?: true
    streetNo?: true
    blockPhase?: true
    mohallahColony?: true
    cell1?: true
    cell2?: true
    whatsapp?: true
    schoolLeavingCert?: true
    characterCert?: true
    birthCert?: true
    admissionFee?: true
    monthlyFee?: true
    annualCharges?: true
    academyFee?: true
    labMiscFee?: true
    branchId?: true
    familyId?: true
    enrolledById?: true
    admissionDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    admissionNo?: true
    referenceNo?: true
    name?: true
    dateOfBirth?: true
    formBNicNo?: true
    previousSchool?: true
    caste?: true
    religion?: true
    gender?: true
    classAdmitted?: true
    referenceInSchool?: true
    specialInfo?: true
    guardianName?: true
    guardianRelation?: true
    houseNo?: true
    streetNo?: true
    blockPhase?: true
    mohallahColony?: true
    cell1?: true
    cell2?: true
    whatsapp?: true
    schoolLeavingCert?: true
    characterCert?: true
    birthCert?: true
    admissionFee?: true
    monthlyFee?: true
    annualCharges?: true
    academyFee?: true
    labMiscFee?: true
    branchId?: true
    familyId?: true
    enrolledById?: true
    admissionDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    admissionNo: string
    referenceNo: string | null
    name: string
    dateOfBirth: string | null
    formBNicNo: string | null
    previousSchool: string | null
    caste: string | null
    religion: string | null
    gender: string | null
    classAdmitted: string | null
    referenceInSchool: string | null
    specialInfo: string | null
    guardianName: string | null
    guardianRelation: string | null
    houseNo: string | null
    streetNo: string | null
    blockPhase: string | null
    mohallahColony: string | null
    cell1: string | null
    cell2: string | null
    whatsapp: string | null
    schoolLeavingCert: boolean
    characterCert: boolean
    birthCert: boolean
    admissionFee: Decimal
    monthlyFee: Decimal
    annualCharges: Decimal
    academyFee: Decimal
    labMiscFee: Decimal
    branchId: number
    familyId: number
    enrolledById: number | null
    admissionDate: Date
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admissionNo?: boolean
    referenceNo?: boolean
    name?: boolean
    dateOfBirth?: boolean
    formBNicNo?: boolean
    previousSchool?: boolean
    caste?: boolean
    religion?: boolean
    gender?: boolean
    classAdmitted?: boolean
    referenceInSchool?: boolean
    specialInfo?: boolean
    guardianName?: boolean
    guardianRelation?: boolean
    houseNo?: boolean
    streetNo?: boolean
    blockPhase?: boolean
    mohallahColony?: boolean
    cell1?: boolean
    cell2?: boolean
    whatsapp?: boolean
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: boolean
    monthlyFee?: boolean
    annualCharges?: boolean
    academyFee?: boolean
    labMiscFee?: boolean
    branchId?: boolean
    familyId?: boolean
    enrolledById?: boolean
    admissionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    enrolledBy?: boolean | Student$enrolledByArgs<ExtArgs>
    feeLogs?: boolean | Student$feeLogsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    admissionNo?: boolean
    referenceNo?: boolean
    name?: boolean
    dateOfBirth?: boolean
    formBNicNo?: boolean
    previousSchool?: boolean
    caste?: boolean
    religion?: boolean
    gender?: boolean
    classAdmitted?: boolean
    referenceInSchool?: boolean
    specialInfo?: boolean
    guardianName?: boolean
    guardianRelation?: boolean
    houseNo?: boolean
    streetNo?: boolean
    blockPhase?: boolean
    mohallahColony?: boolean
    cell1?: boolean
    cell2?: boolean
    whatsapp?: boolean
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: boolean
    monthlyFee?: boolean
    annualCharges?: boolean
    academyFee?: boolean
    labMiscFee?: boolean
    branchId?: boolean
    familyId?: boolean
    enrolledById?: boolean
    admissionDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admissionNo" | "referenceNo" | "name" | "dateOfBirth" | "formBNicNo" | "previousSchool" | "caste" | "religion" | "gender" | "classAdmitted" | "referenceInSchool" | "specialInfo" | "guardianName" | "guardianRelation" | "houseNo" | "streetNo" | "blockPhase" | "mohallahColony" | "cell1" | "cell2" | "whatsapp" | "schoolLeavingCert" | "characterCert" | "birthCert" | "admissionFee" | "monthlyFee" | "annualCharges" | "academyFee" | "labMiscFee" | "branchId" | "familyId" | "enrolledById" | "admissionDate" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    enrolledBy?: boolean | Student$enrolledByArgs<ExtArgs>
    feeLogs?: boolean | Student$feeLogsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      family: Prisma.$FamilyPayload<ExtArgs>
      enrolledBy: Prisma.$UserPayload<ExtArgs> | null
      feeLogs: Prisma.$FeeLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      admissionNo: string
      referenceNo: string | null
      name: string
      dateOfBirth: string | null
      formBNicNo: string | null
      previousSchool: string | null
      caste: string | null
      religion: string | null
      gender: string | null
      classAdmitted: string | null
      referenceInSchool: string | null
      specialInfo: string | null
      guardianName: string | null
      guardianRelation: string | null
      houseNo: string | null
      streetNo: string | null
      blockPhase: string | null
      mohallahColony: string | null
      cell1: string | null
      cell2: string | null
      whatsapp: string | null
      schoolLeavingCert: boolean
      characterCert: boolean
      birthCert: boolean
      admissionFee: Prisma.Decimal
      monthlyFee: Prisma.Decimal
      annualCharges: Prisma.Decimal
      academyFee: Prisma.Decimal
      labMiscFee: Prisma.Decimal
      branchId: number
      familyId: number
      enrolledById: number | null
      admissionDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    family<T extends FamilyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyDefaultArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    enrolledBy<T extends Student$enrolledByArgs<ExtArgs> = {}>(args?: Subset<T, Student$enrolledByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    feeLogs<T extends Student$feeLogsArgs<ExtArgs> = {}>(args?: Subset<T, Student$feeLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly admissionNo: FieldRef<"Student", 'String'>
    readonly referenceNo: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly dateOfBirth: FieldRef<"Student", 'String'>
    readonly formBNicNo: FieldRef<"Student", 'String'>
    readonly previousSchool: FieldRef<"Student", 'String'>
    readonly caste: FieldRef<"Student", 'String'>
    readonly religion: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'String'>
    readonly classAdmitted: FieldRef<"Student", 'String'>
    readonly referenceInSchool: FieldRef<"Student", 'String'>
    readonly specialInfo: FieldRef<"Student", 'String'>
    readonly guardianName: FieldRef<"Student", 'String'>
    readonly guardianRelation: FieldRef<"Student", 'String'>
    readonly houseNo: FieldRef<"Student", 'String'>
    readonly streetNo: FieldRef<"Student", 'String'>
    readonly blockPhase: FieldRef<"Student", 'String'>
    readonly mohallahColony: FieldRef<"Student", 'String'>
    readonly cell1: FieldRef<"Student", 'String'>
    readonly cell2: FieldRef<"Student", 'String'>
    readonly whatsapp: FieldRef<"Student", 'String'>
    readonly schoolLeavingCert: FieldRef<"Student", 'Boolean'>
    readonly characterCert: FieldRef<"Student", 'Boolean'>
    readonly birthCert: FieldRef<"Student", 'Boolean'>
    readonly admissionFee: FieldRef<"Student", 'Decimal'>
    readonly monthlyFee: FieldRef<"Student", 'Decimal'>
    readonly annualCharges: FieldRef<"Student", 'Decimal'>
    readonly academyFee: FieldRef<"Student", 'Decimal'>
    readonly labMiscFee: FieldRef<"Student", 'Decimal'>
    readonly branchId: FieldRef<"Student", 'Int'>
    readonly familyId: FieldRef<"Student", 'Int'>
    readonly enrolledById: FieldRef<"Student", 'Int'>
    readonly admissionDate: FieldRef<"Student", 'DateTime'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.enrolledBy
   */
  export type Student$enrolledByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Student.feeLogs
   */
  export type Student$feeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
    where?: FeeLogWhereInput
    orderBy?: FeeLogOrderByWithRelationInput | FeeLogOrderByWithRelationInput[]
    cursor?: FeeLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeeLogScalarFieldEnum | FeeLogScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    familyId: number | null
    amount: Decimal | null
    receivedById: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    familyId: number | null
    amount: Decimal | null
    receivedById: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    familyId: number | null
    amount: Decimal | null
    method: string | null
    remarks: string | null
    receivedById: number | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    familyId: number | null
    amount: Decimal | null
    method: string | null
    remarks: string | null
    receivedById: number | null
    paidAt: Date | null
    createdAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    familyId: number
    amount: number
    method: number
    remarks: number
    receivedById: number
    paidAt: number
    createdAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    familyId?: true
    amount?: true
    receivedById?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    familyId?: true
    amount?: true
    receivedById?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    familyId?: true
    amount?: true
    method?: true
    remarks?: true
    receivedById?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    familyId?: true
    amount?: true
    method?: true
    remarks?: true
    receivedById?: true
    paidAt?: true
    createdAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    familyId?: true
    amount?: true
    method?: true
    remarks?: true
    receivedById?: true
    paidAt?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    familyId: number
    amount: Decimal
    method: string | null
    remarks: string | null
    receivedById: number | null
    paidAt: Date
    createdAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyId?: boolean
    amount?: boolean
    method?: boolean
    remarks?: boolean
    receivedById?: boolean
    paidAt?: boolean
    createdAt?: boolean
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    receivedBy?: boolean | Payment$receivedByArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    familyId?: boolean
    amount?: boolean
    method?: boolean
    remarks?: boolean
    receivedById?: boolean
    paidAt?: boolean
    createdAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "familyId" | "amount" | "method" | "remarks" | "receivedById" | "paidAt" | "createdAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    receivedBy?: boolean | Payment$receivedByArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      family: Prisma.$FamilyPayload<ExtArgs>
      receivedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      familyId: number
      amount: Prisma.Decimal
      method: string | null
      remarks: string | null
      receivedById: number | null
      paidAt: Date
      createdAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    family<T extends FamilyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyDefaultArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receivedBy<T extends Payment$receivedByArgs<ExtArgs> = {}>(args?: Subset<T, Payment$receivedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly familyId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly remarks: FieldRef<"Payment", 'String'>
    readonly receivedById: FieldRef<"Payment", 'Int'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.receivedBy
   */
  export type Payment$receivedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model FeeLog
   */

  export type AggregateFeeLog = {
    _count: FeeLogCountAggregateOutputType | null
    _avg: FeeLogAvgAggregateOutputType | null
    _sum: FeeLogSumAggregateOutputType | null
    _min: FeeLogMinAggregateOutputType | null
    _max: FeeLogMaxAggregateOutputType | null
  }

  export type FeeLogAvgAggregateOutputType = {
    id: number | null
    familyId: number | null
    studentId: number | null
    amount: Decimal | null
  }

  export type FeeLogSumAggregateOutputType = {
    id: number | null
    familyId: number | null
    studentId: number | null
    amount: Decimal | null
  }

  export type FeeLogMinAggregateOutputType = {
    id: number | null
    familyId: number | null
    studentId: number | null
    amount: Decimal | null
    type: string | null
    description: string | null
    billedAt: Date | null
    createdAt: Date | null
  }

  export type FeeLogMaxAggregateOutputType = {
    id: number | null
    familyId: number | null
    studentId: number | null
    amount: Decimal | null
    type: string | null
    description: string | null
    billedAt: Date | null
    createdAt: Date | null
  }

  export type FeeLogCountAggregateOutputType = {
    id: number
    familyId: number
    studentId: number
    amount: number
    type: number
    description: number
    billedAt: number
    createdAt: number
    _all: number
  }


  export type FeeLogAvgAggregateInputType = {
    id?: true
    familyId?: true
    studentId?: true
    amount?: true
  }

  export type FeeLogSumAggregateInputType = {
    id?: true
    familyId?: true
    studentId?: true
    amount?: true
  }

  export type FeeLogMinAggregateInputType = {
    id?: true
    familyId?: true
    studentId?: true
    amount?: true
    type?: true
    description?: true
    billedAt?: true
    createdAt?: true
  }

  export type FeeLogMaxAggregateInputType = {
    id?: true
    familyId?: true
    studentId?: true
    amount?: true
    type?: true
    description?: true
    billedAt?: true
    createdAt?: true
  }

  export type FeeLogCountAggregateInputType = {
    id?: true
    familyId?: true
    studentId?: true
    amount?: true
    type?: true
    description?: true
    billedAt?: true
    createdAt?: true
    _all?: true
  }

  export type FeeLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeLog to aggregate.
     */
    where?: FeeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeLogs to fetch.
     */
    orderBy?: FeeLogOrderByWithRelationInput | FeeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeeLogs
    **/
    _count?: true | FeeLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeeLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeeLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeeLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeeLogMaxAggregateInputType
  }

  export type GetFeeLogAggregateType<T extends FeeLogAggregateArgs> = {
        [P in keyof T & keyof AggregateFeeLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeeLog[P]>
      : GetScalarType<T[P], AggregateFeeLog[P]>
  }




  export type FeeLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeeLogWhereInput
    orderBy?: FeeLogOrderByWithAggregationInput | FeeLogOrderByWithAggregationInput[]
    by: FeeLogScalarFieldEnum[] | FeeLogScalarFieldEnum
    having?: FeeLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeeLogCountAggregateInputType | true
    _avg?: FeeLogAvgAggregateInputType
    _sum?: FeeLogSumAggregateInputType
    _min?: FeeLogMinAggregateInputType
    _max?: FeeLogMaxAggregateInputType
  }

  export type FeeLogGroupByOutputType = {
    id: number
    familyId: number
    studentId: number | null
    amount: Decimal
    type: string
    description: string | null
    billedAt: Date
    createdAt: Date
    _count: FeeLogCountAggregateOutputType | null
    _avg: FeeLogAvgAggregateOutputType | null
    _sum: FeeLogSumAggregateOutputType | null
    _min: FeeLogMinAggregateOutputType | null
    _max: FeeLogMaxAggregateOutputType | null
  }

  type GetFeeLogGroupByPayload<T extends FeeLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeeLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeeLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeeLogGroupByOutputType[P]>
            : GetScalarType<T[P], FeeLogGroupByOutputType[P]>
        }
      >
    >


  export type FeeLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    familyId?: boolean
    studentId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    billedAt?: boolean
    createdAt?: boolean
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    student?: boolean | FeeLog$studentArgs<ExtArgs>
  }, ExtArgs["result"]["feeLog"]>



  export type FeeLogSelectScalar = {
    id?: boolean
    familyId?: boolean
    studentId?: boolean
    amount?: boolean
    type?: boolean
    description?: boolean
    billedAt?: boolean
    createdAt?: boolean
  }

  export type FeeLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "familyId" | "studentId" | "amount" | "type" | "description" | "billedAt" | "createdAt", ExtArgs["result"]["feeLog"]>
  export type FeeLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    student?: boolean | FeeLog$studentArgs<ExtArgs>
  }

  export type $FeeLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeeLog"
    objects: {
      family: Prisma.$FamilyPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      familyId: number
      studentId: number | null
      amount: Prisma.Decimal
      type: string
      description: string | null
      billedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["feeLog"]>
    composites: {}
  }

  type FeeLogGetPayload<S extends boolean | null | undefined | FeeLogDefaultArgs> = $Result.GetResult<Prisma.$FeeLogPayload, S>

  type FeeLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeeLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeeLogCountAggregateInputType | true
    }

  export interface FeeLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeeLog'], meta: { name: 'FeeLog' } }
    /**
     * Find zero or one FeeLog that matches the filter.
     * @param {FeeLogFindUniqueArgs} args - Arguments to find a FeeLog
     * @example
     * // Get one FeeLog
     * const feeLog = await prisma.feeLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeeLogFindUniqueArgs>(args: SelectSubset<T, FeeLogFindUniqueArgs<ExtArgs>>): Prisma__FeeLogClient<$Result.GetResult<Prisma.$FeeLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeeLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeeLogFindUniqueOrThrowArgs} args - Arguments to find a FeeLog
     * @example
     * // Get one FeeLog
     * const feeLog = await prisma.feeLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeeLogFindUniqueOrThrowArgs>(args: SelectSubset<T, FeeLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeeLogClient<$Result.GetResult<Prisma.$FeeLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeLogFindFirstArgs} args - Arguments to find a FeeLog
     * @example
     * // Get one FeeLog
     * const feeLog = await prisma.feeLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeeLogFindFirstArgs>(args?: SelectSubset<T, FeeLogFindFirstArgs<ExtArgs>>): Prisma__FeeLogClient<$Result.GetResult<Prisma.$FeeLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeeLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeLogFindFirstOrThrowArgs} args - Arguments to find a FeeLog
     * @example
     * // Get one FeeLog
     * const feeLog = await prisma.feeLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeeLogFindFirstOrThrowArgs>(args?: SelectSubset<T, FeeLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeeLogClient<$Result.GetResult<Prisma.$FeeLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeeLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeeLogs
     * const feeLogs = await prisma.feeLog.findMany()
     * 
     * // Get first 10 FeeLogs
     * const feeLogs = await prisma.feeLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feeLogWithIdOnly = await prisma.feeLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeeLogFindManyArgs>(args?: SelectSubset<T, FeeLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeeLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeeLog.
     * @param {FeeLogCreateArgs} args - Arguments to create a FeeLog.
     * @example
     * // Create one FeeLog
     * const FeeLog = await prisma.feeLog.create({
     *   data: {
     *     // ... data to create a FeeLog
     *   }
     * })
     * 
     */
    create<T extends FeeLogCreateArgs>(args: SelectSubset<T, FeeLogCreateArgs<ExtArgs>>): Prisma__FeeLogClient<$Result.GetResult<Prisma.$FeeLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeeLogs.
     * @param {FeeLogCreateManyArgs} args - Arguments to create many FeeLogs.
     * @example
     * // Create many FeeLogs
     * const feeLog = await prisma.feeLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeeLogCreateManyArgs>(args?: SelectSubset<T, FeeLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FeeLog.
     * @param {FeeLogDeleteArgs} args - Arguments to delete one FeeLog.
     * @example
     * // Delete one FeeLog
     * const FeeLog = await prisma.feeLog.delete({
     *   where: {
     *     // ... filter to delete one FeeLog
     *   }
     * })
     * 
     */
    delete<T extends FeeLogDeleteArgs>(args: SelectSubset<T, FeeLogDeleteArgs<ExtArgs>>): Prisma__FeeLogClient<$Result.GetResult<Prisma.$FeeLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeeLog.
     * @param {FeeLogUpdateArgs} args - Arguments to update one FeeLog.
     * @example
     * // Update one FeeLog
     * const feeLog = await prisma.feeLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeeLogUpdateArgs>(args: SelectSubset<T, FeeLogUpdateArgs<ExtArgs>>): Prisma__FeeLogClient<$Result.GetResult<Prisma.$FeeLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeeLogs.
     * @param {FeeLogDeleteManyArgs} args - Arguments to filter FeeLogs to delete.
     * @example
     * // Delete a few FeeLogs
     * const { count } = await prisma.feeLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeeLogDeleteManyArgs>(args?: SelectSubset<T, FeeLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeeLogs
     * const feeLog = await prisma.feeLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeeLogUpdateManyArgs>(args: SelectSubset<T, FeeLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeeLog.
     * @param {FeeLogUpsertArgs} args - Arguments to update or create a FeeLog.
     * @example
     * // Update or create a FeeLog
     * const feeLog = await prisma.feeLog.upsert({
     *   create: {
     *     // ... data to create a FeeLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeeLog we want to update
     *   }
     * })
     */
    upsert<T extends FeeLogUpsertArgs>(args: SelectSubset<T, FeeLogUpsertArgs<ExtArgs>>): Prisma__FeeLogClient<$Result.GetResult<Prisma.$FeeLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeeLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeLogCountArgs} args - Arguments to filter FeeLogs to count.
     * @example
     * // Count the number of FeeLogs
     * const count = await prisma.feeLog.count({
     *   where: {
     *     // ... the filter for the FeeLogs we want to count
     *   }
     * })
    **/
    count<T extends FeeLogCountArgs>(
      args?: Subset<T, FeeLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeeLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeeLogAggregateArgs>(args: Subset<T, FeeLogAggregateArgs>): Prisma.PrismaPromise<GetFeeLogAggregateType<T>>

    /**
     * Group by FeeLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeeLogGroupByArgs} args - Group by arguments.
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
      T extends FeeLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeeLogGroupByArgs['orderBy'] }
        : { orderBy?: FeeLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FeeLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeeLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeeLog model
   */
  readonly fields: FeeLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeeLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeeLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    family<T extends FamilyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyDefaultArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends FeeLog$studentArgs<ExtArgs> = {}>(args?: Subset<T, FeeLog$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeeLog model
   */
  interface FeeLogFieldRefs {
    readonly id: FieldRef<"FeeLog", 'Int'>
    readonly familyId: FieldRef<"FeeLog", 'Int'>
    readonly studentId: FieldRef<"FeeLog", 'Int'>
    readonly amount: FieldRef<"FeeLog", 'Decimal'>
    readonly type: FieldRef<"FeeLog", 'String'>
    readonly description: FieldRef<"FeeLog", 'String'>
    readonly billedAt: FieldRef<"FeeLog", 'DateTime'>
    readonly createdAt: FieldRef<"FeeLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeeLog findUnique
   */
  export type FeeLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
    /**
     * Filter, which FeeLog to fetch.
     */
    where: FeeLogWhereUniqueInput
  }

  /**
   * FeeLog findUniqueOrThrow
   */
  export type FeeLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
    /**
     * Filter, which FeeLog to fetch.
     */
    where: FeeLogWhereUniqueInput
  }

  /**
   * FeeLog findFirst
   */
  export type FeeLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
    /**
     * Filter, which FeeLog to fetch.
     */
    where?: FeeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeLogs to fetch.
     */
    orderBy?: FeeLogOrderByWithRelationInput | FeeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeLogs.
     */
    cursor?: FeeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeLogs.
     */
    distinct?: FeeLogScalarFieldEnum | FeeLogScalarFieldEnum[]
  }

  /**
   * FeeLog findFirstOrThrow
   */
  export type FeeLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
    /**
     * Filter, which FeeLog to fetch.
     */
    where?: FeeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeLogs to fetch.
     */
    orderBy?: FeeLogOrderByWithRelationInput | FeeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeeLogs.
     */
    cursor?: FeeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeeLogs.
     */
    distinct?: FeeLogScalarFieldEnum | FeeLogScalarFieldEnum[]
  }

  /**
   * FeeLog findMany
   */
  export type FeeLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
    /**
     * Filter, which FeeLogs to fetch.
     */
    where?: FeeLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeeLogs to fetch.
     */
    orderBy?: FeeLogOrderByWithRelationInput | FeeLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeeLogs.
     */
    cursor?: FeeLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeeLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeeLogs.
     */
    skip?: number
    distinct?: FeeLogScalarFieldEnum | FeeLogScalarFieldEnum[]
  }

  /**
   * FeeLog create
   */
  export type FeeLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
    /**
     * The data needed to create a FeeLog.
     */
    data: XOR<FeeLogCreateInput, FeeLogUncheckedCreateInput>
  }

  /**
   * FeeLog createMany
   */
  export type FeeLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeeLogs.
     */
    data: FeeLogCreateManyInput | FeeLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeeLog update
   */
  export type FeeLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
    /**
     * The data needed to update a FeeLog.
     */
    data: XOR<FeeLogUpdateInput, FeeLogUncheckedUpdateInput>
    /**
     * Choose, which FeeLog to update.
     */
    where: FeeLogWhereUniqueInput
  }

  /**
   * FeeLog updateMany
   */
  export type FeeLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeeLogs.
     */
    data: XOR<FeeLogUpdateManyMutationInput, FeeLogUncheckedUpdateManyInput>
    /**
     * Filter which FeeLogs to update
     */
    where?: FeeLogWhereInput
    /**
     * Limit how many FeeLogs to update.
     */
    limit?: number
  }

  /**
   * FeeLog upsert
   */
  export type FeeLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
    /**
     * The filter to search for the FeeLog to update in case it exists.
     */
    where: FeeLogWhereUniqueInput
    /**
     * In case the FeeLog found by the `where` argument doesn't exist, create a new FeeLog with this data.
     */
    create: XOR<FeeLogCreateInput, FeeLogUncheckedCreateInput>
    /**
     * In case the FeeLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeeLogUpdateInput, FeeLogUncheckedUpdateInput>
  }

  /**
   * FeeLog delete
   */
  export type FeeLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
    /**
     * Filter which FeeLog to delete.
     */
    where: FeeLogWhereUniqueInput
  }

  /**
   * FeeLog deleteMany
   */
  export type FeeLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeeLogs to delete
     */
    where?: FeeLogWhereInput
    /**
     * Limit how many FeeLogs to delete.
     */
    limit?: number
  }

  /**
   * FeeLog.student
   */
  export type FeeLog$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * FeeLog without action
   */
  export type FeeLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeeLog
     */
    select?: FeeLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeeLog
     */
    omit?: FeeLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeeLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    username: 'username',
    password: 'password',
    phone: 'phone',
    role: 'role',
    branchId: 'branchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    principalId: 'principalId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const FamilyScalarFieldEnum: {
    id: 'id',
    fatherName: 'fatherName',
    fatherPhone: 'fatherPhone',
    fatherOccupation: 'fatherOccupation',
    balance: 'balance',
    branchId: 'branchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FamilyScalarFieldEnum = (typeof FamilyScalarFieldEnum)[keyof typeof FamilyScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    admissionNo: 'admissionNo',
    referenceNo: 'referenceNo',
    name: 'name',
    dateOfBirth: 'dateOfBirth',
    formBNicNo: 'formBNicNo',
    previousSchool: 'previousSchool',
    caste: 'caste',
    religion: 'religion',
    gender: 'gender',
    classAdmitted: 'classAdmitted',
    referenceInSchool: 'referenceInSchool',
    specialInfo: 'specialInfo',
    guardianName: 'guardianName',
    guardianRelation: 'guardianRelation',
    houseNo: 'houseNo',
    streetNo: 'streetNo',
    blockPhase: 'blockPhase',
    mohallahColony: 'mohallahColony',
    cell1: 'cell1',
    cell2: 'cell2',
    whatsapp: 'whatsapp',
    schoolLeavingCert: 'schoolLeavingCert',
    characterCert: 'characterCert',
    birthCert: 'birthCert',
    admissionFee: 'admissionFee',
    monthlyFee: 'monthlyFee',
    annualCharges: 'annualCharges',
    academyFee: 'academyFee',
    labMiscFee: 'labMiscFee',
    branchId: 'branchId',
    familyId: 'familyId',
    enrolledById: 'enrolledById',
    admissionDate: 'admissionDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    familyId: 'familyId',
    amount: 'amount',
    method: 'method',
    remarks: 'remarks',
    receivedById: 'receivedById',
    paidAt: 'paidAt',
    createdAt: 'createdAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const FeeLogScalarFieldEnum: {
    id: 'id',
    familyId: 'familyId',
    studentId: 'studentId',
    amount: 'amount',
    type: 'type',
    description: 'description',
    billedAt: 'billedAt',
    createdAt: 'createdAt'
  };

  export type FeeLogScalarFieldEnum = (typeof FeeLogScalarFieldEnum)[keyof typeof FeeLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    username: 'username',
    password: 'password',
    phone: 'phone'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const BranchOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address'
  };

  export type BranchOrderByRelevanceFieldEnum = (typeof BranchOrderByRelevanceFieldEnum)[keyof typeof BranchOrderByRelevanceFieldEnum]


  export const FamilyOrderByRelevanceFieldEnum: {
    fatherName: 'fatherName',
    fatherPhone: 'fatherPhone',
    fatherOccupation: 'fatherOccupation'
  };

  export type FamilyOrderByRelevanceFieldEnum = (typeof FamilyOrderByRelevanceFieldEnum)[keyof typeof FamilyOrderByRelevanceFieldEnum]


  export const StudentOrderByRelevanceFieldEnum: {
    admissionNo: 'admissionNo',
    referenceNo: 'referenceNo',
    name: 'name',
    dateOfBirth: 'dateOfBirth',
    formBNicNo: 'formBNicNo',
    previousSchool: 'previousSchool',
    caste: 'caste',
    religion: 'religion',
    gender: 'gender',
    classAdmitted: 'classAdmitted',
    referenceInSchool: 'referenceInSchool',
    specialInfo: 'specialInfo',
    guardianName: 'guardianName',
    guardianRelation: 'guardianRelation',
    houseNo: 'houseNo',
    streetNo: 'streetNo',
    blockPhase: 'blockPhase',
    mohallahColony: 'mohallahColony',
    cell1: 'cell1',
    cell2: 'cell2',
    whatsapp: 'whatsapp'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const PaymentOrderByRelevanceFieldEnum: {
    method: 'method',
    remarks: 'remarks'
  };

  export type PaymentOrderByRelevanceFieldEnum = (typeof PaymentOrderByRelevanceFieldEnum)[keyof typeof PaymentOrderByRelevanceFieldEnum]


  export const FeeLogOrderByRelevanceFieldEnum: {
    type: 'type',
    description: 'description'
  };

  export type FeeLogOrderByRelevanceFieldEnum = (typeof FeeLogOrderByRelevanceFieldEnum)[keyof typeof FeeLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    branchId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    principalBranch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    enrolledStudents?: StudentListRelationFilter
    receivedPayments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    principalBranch?: BranchOrderByWithRelationInput
    enrolledStudents?: StudentOrderByRelationAggregateInput
    receivedPayments?: PaymentOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    branchId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    principalBranch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
    enrolledStudents?: StudentListRelationFilter
    receivedPayments?: PaymentListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    branchId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: IntFilter<"Branch"> | number
    name?: StringFilter<"Branch"> | string
    address?: StringFilter<"Branch"> | string
    principalId?: IntNullableFilter<"Branch"> | number | null
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    principal?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    staff?: UserListRelationFilter
    students?: StudentListRelationFilter
    families?: FamilyListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    principalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    principal?: UserOrderByWithRelationInput
    staff?: UserOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    families?: FamilyOrderByRelationAggregateInput
    _relevance?: BranchOrderByRelevanceInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    principalId?: number
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    address?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    principal?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    staff?: UserListRelationFilter
    students?: StudentListRelationFilter
    families?: FamilyListRelationFilter
  }, "id" | "principalId">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    principalId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BranchCountOrderByAggregateInput
    _avg?: BranchAvgOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
    _sum?: BranchSumOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Branch"> | number
    name?: StringWithAggregatesFilter<"Branch"> | string
    address?: StringWithAggregatesFilter<"Branch"> | string
    principalId?: IntNullableWithAggregatesFilter<"Branch"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
  }

  export type FamilyWhereInput = {
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    id?: IntFilter<"Family"> | number
    fatherName?: StringFilter<"Family"> | string
    fatherPhone?: StringFilter<"Family"> | string
    fatherOccupation?: StringNullableFilter<"Family"> | string | null
    balance?: DecimalFilter<"Family"> | Decimal | DecimalJsLike | number | string
    branchId?: IntFilter<"Family"> | number
    createdAt?: DateTimeFilter<"Family"> | Date | string
    updatedAt?: DateTimeFilter<"Family"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    children?: StudentListRelationFilter
    payments?: PaymentListRelationFilter
    feeLogs?: FeeLogListRelationFilter
  }

  export type FamilyOrderByWithRelationInput = {
    id?: SortOrder
    fatherName?: SortOrder
    fatherPhone?: SortOrder
    fatherOccupation?: SortOrderInput | SortOrder
    balance?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    children?: StudentOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    feeLogs?: FeeLogOrderByRelationAggregateInput
    _relevance?: FamilyOrderByRelevanceInput
  }

  export type FamilyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fatherPhone_branchId?: FamilyFatherPhoneBranchIdCompoundUniqueInput
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    fatherName?: StringFilter<"Family"> | string
    fatherPhone?: StringFilter<"Family"> | string
    fatherOccupation?: StringNullableFilter<"Family"> | string | null
    balance?: DecimalFilter<"Family"> | Decimal | DecimalJsLike | number | string
    branchId?: IntFilter<"Family"> | number
    createdAt?: DateTimeFilter<"Family"> | Date | string
    updatedAt?: DateTimeFilter<"Family"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    children?: StudentListRelationFilter
    payments?: PaymentListRelationFilter
    feeLogs?: FeeLogListRelationFilter
  }, "id" | "fatherPhone_branchId">

  export type FamilyOrderByWithAggregationInput = {
    id?: SortOrder
    fatherName?: SortOrder
    fatherPhone?: SortOrder
    fatherOccupation?: SortOrderInput | SortOrder
    balance?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FamilyCountOrderByAggregateInput
    _avg?: FamilyAvgOrderByAggregateInput
    _max?: FamilyMaxOrderByAggregateInput
    _min?: FamilyMinOrderByAggregateInput
    _sum?: FamilySumOrderByAggregateInput
  }

  export type FamilyScalarWhereWithAggregatesInput = {
    AND?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    OR?: FamilyScalarWhereWithAggregatesInput[]
    NOT?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Family"> | number
    fatherName?: StringWithAggregatesFilter<"Family"> | string
    fatherPhone?: StringWithAggregatesFilter<"Family"> | string
    fatherOccupation?: StringNullableWithAggregatesFilter<"Family"> | string | null
    balance?: DecimalWithAggregatesFilter<"Family"> | Decimal | DecimalJsLike | number | string
    branchId?: IntWithAggregatesFilter<"Family"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Family"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Family"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    admissionNo?: StringFilter<"Student"> | string
    referenceNo?: StringNullableFilter<"Student"> | string | null
    name?: StringFilter<"Student"> | string
    dateOfBirth?: StringNullableFilter<"Student"> | string | null
    formBNicNo?: StringNullableFilter<"Student"> | string | null
    previousSchool?: StringNullableFilter<"Student"> | string | null
    caste?: StringNullableFilter<"Student"> | string | null
    religion?: StringNullableFilter<"Student"> | string | null
    gender?: StringNullableFilter<"Student"> | string | null
    classAdmitted?: StringNullableFilter<"Student"> | string | null
    referenceInSchool?: StringNullableFilter<"Student"> | string | null
    specialInfo?: StringNullableFilter<"Student"> | string | null
    guardianName?: StringNullableFilter<"Student"> | string | null
    guardianRelation?: StringNullableFilter<"Student"> | string | null
    houseNo?: StringNullableFilter<"Student"> | string | null
    streetNo?: StringNullableFilter<"Student"> | string | null
    blockPhase?: StringNullableFilter<"Student"> | string | null
    mohallahColony?: StringNullableFilter<"Student"> | string | null
    cell1?: StringNullableFilter<"Student"> | string | null
    cell2?: StringNullableFilter<"Student"> | string | null
    whatsapp?: StringNullableFilter<"Student"> | string | null
    schoolLeavingCert?: BoolFilter<"Student"> | boolean
    characterCert?: BoolFilter<"Student"> | boolean
    birthCert?: BoolFilter<"Student"> | boolean
    admissionFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    branchId?: IntFilter<"Student"> | number
    familyId?: IntFilter<"Student"> | number
    enrolledById?: IntNullableFilter<"Student"> | number | null
    admissionDate?: DateTimeFilter<"Student"> | Date | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    family?: XOR<FamilyScalarRelationFilter, FamilyWhereInput>
    enrolledBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    feeLogs?: FeeLogListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    admissionNo?: SortOrder
    referenceNo?: SortOrderInput | SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    formBNicNo?: SortOrderInput | SortOrder
    previousSchool?: SortOrderInput | SortOrder
    caste?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    classAdmitted?: SortOrderInput | SortOrder
    referenceInSchool?: SortOrderInput | SortOrder
    specialInfo?: SortOrderInput | SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianRelation?: SortOrderInput | SortOrder
    houseNo?: SortOrderInput | SortOrder
    streetNo?: SortOrderInput | SortOrder
    blockPhase?: SortOrderInput | SortOrder
    mohallahColony?: SortOrderInput | SortOrder
    cell1?: SortOrderInput | SortOrder
    cell2?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    schoolLeavingCert?: SortOrder
    characterCert?: SortOrder
    birthCert?: SortOrder
    admissionFee?: SortOrder
    monthlyFee?: SortOrder
    annualCharges?: SortOrder
    academyFee?: SortOrder
    labMiscFee?: SortOrder
    branchId?: SortOrder
    familyId?: SortOrder
    enrolledById?: SortOrderInput | SortOrder
    admissionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    family?: FamilyOrderByWithRelationInput
    enrolledBy?: UserOrderByWithRelationInput
    feeLogs?: FeeLogOrderByRelationAggregateInput
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    admissionNo?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    referenceNo?: StringNullableFilter<"Student"> | string | null
    name?: StringFilter<"Student"> | string
    dateOfBirth?: StringNullableFilter<"Student"> | string | null
    formBNicNo?: StringNullableFilter<"Student"> | string | null
    previousSchool?: StringNullableFilter<"Student"> | string | null
    caste?: StringNullableFilter<"Student"> | string | null
    religion?: StringNullableFilter<"Student"> | string | null
    gender?: StringNullableFilter<"Student"> | string | null
    classAdmitted?: StringNullableFilter<"Student"> | string | null
    referenceInSchool?: StringNullableFilter<"Student"> | string | null
    specialInfo?: StringNullableFilter<"Student"> | string | null
    guardianName?: StringNullableFilter<"Student"> | string | null
    guardianRelation?: StringNullableFilter<"Student"> | string | null
    houseNo?: StringNullableFilter<"Student"> | string | null
    streetNo?: StringNullableFilter<"Student"> | string | null
    blockPhase?: StringNullableFilter<"Student"> | string | null
    mohallahColony?: StringNullableFilter<"Student"> | string | null
    cell1?: StringNullableFilter<"Student"> | string | null
    cell2?: StringNullableFilter<"Student"> | string | null
    whatsapp?: StringNullableFilter<"Student"> | string | null
    schoolLeavingCert?: BoolFilter<"Student"> | boolean
    characterCert?: BoolFilter<"Student"> | boolean
    birthCert?: BoolFilter<"Student"> | boolean
    admissionFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    branchId?: IntFilter<"Student"> | number
    familyId?: IntFilter<"Student"> | number
    enrolledById?: IntNullableFilter<"Student"> | number | null
    admissionDate?: DateTimeFilter<"Student"> | Date | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    family?: XOR<FamilyScalarRelationFilter, FamilyWhereInput>
    enrolledBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    feeLogs?: FeeLogListRelationFilter
  }, "id" | "admissionNo">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    admissionNo?: SortOrder
    referenceNo?: SortOrderInput | SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    formBNicNo?: SortOrderInput | SortOrder
    previousSchool?: SortOrderInput | SortOrder
    caste?: SortOrderInput | SortOrder
    religion?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    classAdmitted?: SortOrderInput | SortOrder
    referenceInSchool?: SortOrderInput | SortOrder
    specialInfo?: SortOrderInput | SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianRelation?: SortOrderInput | SortOrder
    houseNo?: SortOrderInput | SortOrder
    streetNo?: SortOrderInput | SortOrder
    blockPhase?: SortOrderInput | SortOrder
    mohallahColony?: SortOrderInput | SortOrder
    cell1?: SortOrderInput | SortOrder
    cell2?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    schoolLeavingCert?: SortOrder
    characterCert?: SortOrder
    birthCert?: SortOrder
    admissionFee?: SortOrder
    monthlyFee?: SortOrder
    annualCharges?: SortOrder
    academyFee?: SortOrder
    labMiscFee?: SortOrder
    branchId?: SortOrder
    familyId?: SortOrder
    enrolledById?: SortOrderInput | SortOrder
    admissionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    admissionNo?: StringWithAggregatesFilter<"Student"> | string
    referenceNo?: StringNullableWithAggregatesFilter<"Student"> | string | null
    name?: StringWithAggregatesFilter<"Student"> | string
    dateOfBirth?: StringNullableWithAggregatesFilter<"Student"> | string | null
    formBNicNo?: StringNullableWithAggregatesFilter<"Student"> | string | null
    previousSchool?: StringNullableWithAggregatesFilter<"Student"> | string | null
    caste?: StringNullableWithAggregatesFilter<"Student"> | string | null
    religion?: StringNullableWithAggregatesFilter<"Student"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Student"> | string | null
    classAdmitted?: StringNullableWithAggregatesFilter<"Student"> | string | null
    referenceInSchool?: StringNullableWithAggregatesFilter<"Student"> | string | null
    specialInfo?: StringNullableWithAggregatesFilter<"Student"> | string | null
    guardianName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    guardianRelation?: StringNullableWithAggregatesFilter<"Student"> | string | null
    houseNo?: StringNullableWithAggregatesFilter<"Student"> | string | null
    streetNo?: StringNullableWithAggregatesFilter<"Student"> | string | null
    blockPhase?: StringNullableWithAggregatesFilter<"Student"> | string | null
    mohallahColony?: StringNullableWithAggregatesFilter<"Student"> | string | null
    cell1?: StringNullableWithAggregatesFilter<"Student"> | string | null
    cell2?: StringNullableWithAggregatesFilter<"Student"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"Student"> | string | null
    schoolLeavingCert?: BoolWithAggregatesFilter<"Student"> | boolean
    characterCert?: BoolWithAggregatesFilter<"Student"> | boolean
    birthCert?: BoolWithAggregatesFilter<"Student"> | boolean
    admissionFee?: DecimalWithAggregatesFilter<"Student"> | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalWithAggregatesFilter<"Student"> | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalWithAggregatesFilter<"Student"> | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalWithAggregatesFilter<"Student"> | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalWithAggregatesFilter<"Student"> | Decimal | DecimalJsLike | number | string
    branchId?: IntWithAggregatesFilter<"Student"> | number
    familyId?: IntWithAggregatesFilter<"Student"> | number
    enrolledById?: IntNullableWithAggregatesFilter<"Student"> | number | null
    admissionDate?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    familyId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: StringNullableFilter<"Payment"> | string | null
    remarks?: StringNullableFilter<"Payment"> | string | null
    receivedById?: IntNullableFilter<"Payment"> | number | null
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    family?: XOR<FamilyScalarRelationFilter, FamilyWhereInput>
    receivedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    familyId?: SortOrder
    amount?: SortOrder
    method?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    receivedById?: SortOrderInput | SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    family?: FamilyOrderByWithRelationInput
    receivedBy?: UserOrderByWithRelationInput
    _relevance?: PaymentOrderByRelevanceInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    familyId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: StringNullableFilter<"Payment"> | string | null
    remarks?: StringNullableFilter<"Payment"> | string | null
    receivedById?: IntNullableFilter<"Payment"> | number | null
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    family?: XOR<FamilyScalarRelationFilter, FamilyWhereInput>
    receivedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    familyId?: SortOrder
    amount?: SortOrder
    method?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    receivedById?: SortOrderInput | SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    familyId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    receivedById?: IntNullableWithAggregatesFilter<"Payment"> | number | null
    paidAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type FeeLogWhereInput = {
    AND?: FeeLogWhereInput | FeeLogWhereInput[]
    OR?: FeeLogWhereInput[]
    NOT?: FeeLogWhereInput | FeeLogWhereInput[]
    id?: IntFilter<"FeeLog"> | number
    familyId?: IntFilter<"FeeLog"> | number
    studentId?: IntNullableFilter<"FeeLog"> | number | null
    amount?: DecimalFilter<"FeeLog"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"FeeLog"> | string
    description?: StringNullableFilter<"FeeLog"> | string | null
    billedAt?: DateTimeFilter<"FeeLog"> | Date | string
    createdAt?: DateTimeFilter<"FeeLog"> | Date | string
    family?: XOR<FamilyScalarRelationFilter, FamilyWhereInput>
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }

  export type FeeLogOrderByWithRelationInput = {
    id?: SortOrder
    familyId?: SortOrder
    studentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    billedAt?: SortOrder
    createdAt?: SortOrder
    family?: FamilyOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    _relevance?: FeeLogOrderByRelevanceInput
  }

  export type FeeLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeeLogWhereInput | FeeLogWhereInput[]
    OR?: FeeLogWhereInput[]
    NOT?: FeeLogWhereInput | FeeLogWhereInput[]
    familyId?: IntFilter<"FeeLog"> | number
    studentId?: IntNullableFilter<"FeeLog"> | number | null
    amount?: DecimalFilter<"FeeLog"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"FeeLog"> | string
    description?: StringNullableFilter<"FeeLog"> | string | null
    billedAt?: DateTimeFilter<"FeeLog"> | Date | string
    createdAt?: DateTimeFilter<"FeeLog"> | Date | string
    family?: XOR<FamilyScalarRelationFilter, FamilyWhereInput>
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }, "id">

  export type FeeLogOrderByWithAggregationInput = {
    id?: SortOrder
    familyId?: SortOrder
    studentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    billedAt?: SortOrder
    createdAt?: SortOrder
    _count?: FeeLogCountOrderByAggregateInput
    _avg?: FeeLogAvgOrderByAggregateInput
    _max?: FeeLogMaxOrderByAggregateInput
    _min?: FeeLogMinOrderByAggregateInput
    _sum?: FeeLogSumOrderByAggregateInput
  }

  export type FeeLogScalarWhereWithAggregatesInput = {
    AND?: FeeLogScalarWhereWithAggregatesInput | FeeLogScalarWhereWithAggregatesInput[]
    OR?: FeeLogScalarWhereWithAggregatesInput[]
    NOT?: FeeLogScalarWhereWithAggregatesInput | FeeLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeeLog"> | number
    familyId?: IntWithAggregatesFilter<"FeeLog"> | number
    studentId?: IntNullableWithAggregatesFilter<"FeeLog"> | number | null
    amount?: DecimalWithAggregatesFilter<"FeeLog"> | Decimal | DecimalJsLike | number | string
    type?: StringWithAggregatesFilter<"FeeLog"> | string
    description?: StringNullableWithAggregatesFilter<"FeeLog"> | string | null
    billedAt?: DateTimeWithAggregatesFilter<"FeeLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"FeeLog"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutStaffInput
    principalBranch?: BranchCreateNestedOneWithoutPrincipalInput
    enrolledStudents?: StudentCreateNestedManyWithoutEnrolledByInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceivedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    branchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    principalBranch?: BranchUncheckedCreateNestedOneWithoutPrincipalInput
    enrolledStudents?: StudentUncheckedCreateNestedManyWithoutEnrolledByInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceivedByInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutStaffNestedInput
    principalBranch?: BranchUpdateOneWithoutPrincipalNestedInput
    enrolledStudents?: StudentUpdateManyWithoutEnrolledByNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceivedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    principalBranch?: BranchUncheckedUpdateOneWithoutPrincipalNestedInput
    enrolledStudents?: StudentUncheckedUpdateManyWithoutEnrolledByNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceivedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    branchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateInput = {
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    principal?: UserCreateNestedOneWithoutPrincipalBranchInput
    staff?: UserCreateNestedManyWithoutBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
    families?: FamilyCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: number
    name: string
    address: string
    principalId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: UserUncheckedCreateNestedManyWithoutBranchInput
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
    families?: FamilyUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    principal?: UserUpdateOneWithoutPrincipalBranchNestedInput
    staff?: UserUpdateManyWithoutBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
    families?: FamilyUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    principalId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: UserUncheckedUpdateManyWithoutBranchNestedInput
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
    families?: FamilyUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: number
    name: string
    address: string
    principalId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BranchUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    principalId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyCreateInput = {
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutFamiliesInput
    children?: StudentCreateNestedManyWithoutFamilyInput
    payments?: PaymentCreateNestedManyWithoutFamilyInput
    feeLogs?: FeeLogCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateInput = {
    id?: number
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    branchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: StudentUncheckedCreateNestedManyWithoutFamilyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutFamilyInput
    feeLogs?: FeeLogUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUpdateInput = {
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutFamiliesNestedInput
    children?: StudentUpdateManyWithoutFamilyNestedInput
    payments?: PaymentUpdateManyWithoutFamilyNestedInput
    feeLogs?: FeeLogUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: StudentUncheckedUpdateManyWithoutFamilyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutFamilyNestedInput
    feeLogs?: FeeLogUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyCreateManyInput = {
    id?: number
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    branchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyUpdateManyMutationInput = {
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutStudentsInput
    family: FamilyCreateNestedOneWithoutChildrenInput
    enrolledBy?: UserCreateNestedOneWithoutEnrolledStudentsInput
    feeLogs?: FeeLogCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    branchId: number
    familyId: number
    enrolledById?: number | null
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    feeLogs?: FeeLogUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutStudentsNestedInput
    family?: FamilyUpdateOneRequiredWithoutChildrenNestedInput
    enrolledBy?: UserUpdateOneWithoutEnrolledStudentsNestedInput
    feeLogs?: FeeLogUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    enrolledById?: NullableIntFieldUpdateOperationsInput | number | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feeLogs?: FeeLogUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    branchId: number
    familyId: number
    enrolledById?: number | null
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    enrolledById?: NullableIntFieldUpdateOperationsInput | number | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    method?: string | null
    remarks?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
    family: FamilyCreateNestedOneWithoutPaymentsInput
    receivedBy?: UserCreateNestedOneWithoutReceivedPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    familyId: number
    amount: Decimal | DecimalJsLike | number | string
    method?: string | null
    remarks?: string | null
    receivedById?: number | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutPaymentsNestedInput
    receivedBy?: UserUpdateOneWithoutReceivedPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    receivedById?: NullableIntFieldUpdateOperationsInput | number | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    familyId: number
    amount: Decimal | DecimalJsLike | number | string
    method?: string | null
    remarks?: string | null
    receivedById?: number | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    receivedById?: NullableIntFieldUpdateOperationsInput | number | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeLogCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    type: string
    description?: string | null
    billedAt?: Date | string
    createdAt?: Date | string
    family: FamilyCreateNestedOneWithoutFeeLogsInput
    student?: StudentCreateNestedOneWithoutFeeLogsInput
  }

  export type FeeLogUncheckedCreateInput = {
    id?: number
    familyId: number
    studentId?: number | null
    amount: Decimal | DecimalJsLike | number | string
    type: string
    description?: string | null
    billedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeeLogUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    billedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutFeeLogsNestedInput
    student?: StudentUpdateOneWithoutFeeLogsNestedInput
  }

  export type FeeLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    billedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeLogCreateManyInput = {
    id?: number
    familyId: number
    studentId?: number | null
    amount: Decimal | DecimalJsLike | number | string
    type: string
    description?: string | null
    billedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeeLogUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    billedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    billedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BranchNullableScalarRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type FamilyListRelationFilter = {
    every?: FamilyWhereInput
    some?: FamilyWhereInput
    none?: FamilyWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchOrderByRelevanceInput = {
    fields: BranchOrderByRelevanceFieldEnum | BranchOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    principalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchAvgOrderByAggregateInput = {
    id?: SortOrder
    principalId?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    principalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    principalId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BranchSumOrderByAggregateInput = {
    id?: SortOrder
    principalId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BranchScalarRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type FeeLogListRelationFilter = {
    every?: FeeLogWhereInput
    some?: FeeLogWhereInput
    none?: FeeLogWhereInput
  }

  export type FeeLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyOrderByRelevanceInput = {
    fields: FamilyOrderByRelevanceFieldEnum | FamilyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FamilyFatherPhoneBranchIdCompoundUniqueInput = {
    fatherPhone: string
    branchId: number
  }

  export type FamilyCountOrderByAggregateInput = {
    id?: SortOrder
    fatherName?: SortOrder
    fatherPhone?: SortOrder
    fatherOccupation?: SortOrder
    balance?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    branchId?: SortOrder
  }

  export type FamilyMaxOrderByAggregateInput = {
    id?: SortOrder
    fatherName?: SortOrder
    fatherPhone?: SortOrder
    fatherOccupation?: SortOrder
    balance?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilyMinOrderByAggregateInput = {
    id?: SortOrder
    fatherName?: SortOrder
    fatherPhone?: SortOrder
    fatherOccupation?: SortOrder
    balance?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FamilySumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    branchId?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FamilyScalarRelationFilter = {
    is?: FamilyWhereInput
    isNot?: FamilyWhereInput
  }

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    admissionNo?: SortOrder
    referenceNo?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrder
    formBNicNo?: SortOrder
    previousSchool?: SortOrder
    caste?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    classAdmitted?: SortOrder
    referenceInSchool?: SortOrder
    specialInfo?: SortOrder
    guardianName?: SortOrder
    guardianRelation?: SortOrder
    houseNo?: SortOrder
    streetNo?: SortOrder
    blockPhase?: SortOrder
    mohallahColony?: SortOrder
    cell1?: SortOrder
    cell2?: SortOrder
    whatsapp?: SortOrder
    schoolLeavingCert?: SortOrder
    characterCert?: SortOrder
    birthCert?: SortOrder
    admissionFee?: SortOrder
    monthlyFee?: SortOrder
    annualCharges?: SortOrder
    academyFee?: SortOrder
    labMiscFee?: SortOrder
    branchId?: SortOrder
    familyId?: SortOrder
    enrolledById?: SortOrder
    admissionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
    admissionFee?: SortOrder
    monthlyFee?: SortOrder
    annualCharges?: SortOrder
    academyFee?: SortOrder
    labMiscFee?: SortOrder
    branchId?: SortOrder
    familyId?: SortOrder
    enrolledById?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    admissionNo?: SortOrder
    referenceNo?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrder
    formBNicNo?: SortOrder
    previousSchool?: SortOrder
    caste?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    classAdmitted?: SortOrder
    referenceInSchool?: SortOrder
    specialInfo?: SortOrder
    guardianName?: SortOrder
    guardianRelation?: SortOrder
    houseNo?: SortOrder
    streetNo?: SortOrder
    blockPhase?: SortOrder
    mohallahColony?: SortOrder
    cell1?: SortOrder
    cell2?: SortOrder
    whatsapp?: SortOrder
    schoolLeavingCert?: SortOrder
    characterCert?: SortOrder
    birthCert?: SortOrder
    admissionFee?: SortOrder
    monthlyFee?: SortOrder
    annualCharges?: SortOrder
    academyFee?: SortOrder
    labMiscFee?: SortOrder
    branchId?: SortOrder
    familyId?: SortOrder
    enrolledById?: SortOrder
    admissionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    admissionNo?: SortOrder
    referenceNo?: SortOrder
    name?: SortOrder
    dateOfBirth?: SortOrder
    formBNicNo?: SortOrder
    previousSchool?: SortOrder
    caste?: SortOrder
    religion?: SortOrder
    gender?: SortOrder
    classAdmitted?: SortOrder
    referenceInSchool?: SortOrder
    specialInfo?: SortOrder
    guardianName?: SortOrder
    guardianRelation?: SortOrder
    houseNo?: SortOrder
    streetNo?: SortOrder
    blockPhase?: SortOrder
    mohallahColony?: SortOrder
    cell1?: SortOrder
    cell2?: SortOrder
    whatsapp?: SortOrder
    schoolLeavingCert?: SortOrder
    characterCert?: SortOrder
    birthCert?: SortOrder
    admissionFee?: SortOrder
    monthlyFee?: SortOrder
    annualCharges?: SortOrder
    academyFee?: SortOrder
    labMiscFee?: SortOrder
    branchId?: SortOrder
    familyId?: SortOrder
    enrolledById?: SortOrder
    admissionDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
    admissionFee?: SortOrder
    monthlyFee?: SortOrder
    annualCharges?: SortOrder
    academyFee?: SortOrder
    labMiscFee?: SortOrder
    branchId?: SortOrder
    familyId?: SortOrder
    enrolledById?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PaymentOrderByRelevanceInput = {
    fields: PaymentOrderByRelevanceFieldEnum | PaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    remarks?: SortOrder
    receivedById?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    amount?: SortOrder
    receivedById?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    remarks?: SortOrder
    receivedById?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    remarks?: SortOrder
    receivedById?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    amount?: SortOrder
    receivedById?: SortOrder
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type FeeLogOrderByRelevanceInput = {
    fields: FeeLogOrderByRelevanceFieldEnum | FeeLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FeeLogCountOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    billedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FeeLogAvgOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
  }

  export type FeeLogMaxOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    billedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FeeLogMinOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    description?: SortOrder
    billedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type FeeLogSumOrderByAggregateInput = {
    id?: SortOrder
    familyId?: SortOrder
    studentId?: SortOrder
    amount?: SortOrder
  }

  export type BranchCreateNestedOneWithoutStaffInput = {
    create?: XOR<BranchCreateWithoutStaffInput, BranchUncheckedCreateWithoutStaffInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStaffInput
    connect?: BranchWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutPrincipalInput = {
    create?: XOR<BranchCreateWithoutPrincipalInput, BranchUncheckedCreateWithoutPrincipalInput>
    connectOrCreate?: BranchCreateOrConnectWithoutPrincipalInput
    connect?: BranchWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutEnrolledByInput = {
    create?: XOR<StudentCreateWithoutEnrolledByInput, StudentUncheckedCreateWithoutEnrolledByInput> | StudentCreateWithoutEnrolledByInput[] | StudentUncheckedCreateWithoutEnrolledByInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutEnrolledByInput | StudentCreateOrConnectWithoutEnrolledByInput[]
    createMany?: StudentCreateManyEnrolledByInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutReceivedByInput = {
    create?: XOR<PaymentCreateWithoutReceivedByInput, PaymentUncheckedCreateWithoutReceivedByInput> | PaymentCreateWithoutReceivedByInput[] | PaymentUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReceivedByInput | PaymentCreateOrConnectWithoutReceivedByInput[]
    createMany?: PaymentCreateManyReceivedByInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedOneWithoutPrincipalInput = {
    create?: XOR<BranchCreateWithoutPrincipalInput, BranchUncheckedCreateWithoutPrincipalInput>
    connectOrCreate?: BranchCreateOrConnectWithoutPrincipalInput
    connect?: BranchWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedManyWithoutEnrolledByInput = {
    create?: XOR<StudentCreateWithoutEnrolledByInput, StudentUncheckedCreateWithoutEnrolledByInput> | StudentCreateWithoutEnrolledByInput[] | StudentUncheckedCreateWithoutEnrolledByInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutEnrolledByInput | StudentCreateOrConnectWithoutEnrolledByInput[]
    createMany?: StudentCreateManyEnrolledByInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutReceivedByInput = {
    create?: XOR<PaymentCreateWithoutReceivedByInput, PaymentUncheckedCreateWithoutReceivedByInput> | PaymentCreateWithoutReceivedByInput[] | PaymentUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReceivedByInput | PaymentCreateOrConnectWithoutReceivedByInput[]
    createMany?: PaymentCreateManyReceivedByInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BranchUpdateOneWithoutStaffNestedInput = {
    create?: XOR<BranchCreateWithoutStaffInput, BranchUncheckedCreateWithoutStaffInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStaffInput
    upsert?: BranchUpsertWithoutStaffInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutStaffInput, BranchUpdateWithoutStaffInput>, BranchUncheckedUpdateWithoutStaffInput>
  }

  export type BranchUpdateOneWithoutPrincipalNestedInput = {
    create?: XOR<BranchCreateWithoutPrincipalInput, BranchUncheckedCreateWithoutPrincipalInput>
    connectOrCreate?: BranchCreateOrConnectWithoutPrincipalInput
    upsert?: BranchUpsertWithoutPrincipalInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutPrincipalInput, BranchUpdateWithoutPrincipalInput>, BranchUncheckedUpdateWithoutPrincipalInput>
  }

  export type StudentUpdateManyWithoutEnrolledByNestedInput = {
    create?: XOR<StudentCreateWithoutEnrolledByInput, StudentUncheckedCreateWithoutEnrolledByInput> | StudentCreateWithoutEnrolledByInput[] | StudentUncheckedCreateWithoutEnrolledByInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutEnrolledByInput | StudentCreateOrConnectWithoutEnrolledByInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutEnrolledByInput | StudentUpsertWithWhereUniqueWithoutEnrolledByInput[]
    createMany?: StudentCreateManyEnrolledByInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutEnrolledByInput | StudentUpdateWithWhereUniqueWithoutEnrolledByInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutEnrolledByInput | StudentUpdateManyWithWhereWithoutEnrolledByInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutReceivedByNestedInput = {
    create?: XOR<PaymentCreateWithoutReceivedByInput, PaymentUncheckedCreateWithoutReceivedByInput> | PaymentCreateWithoutReceivedByInput[] | PaymentUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReceivedByInput | PaymentCreateOrConnectWithoutReceivedByInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReceivedByInput | PaymentUpsertWithWhereUniqueWithoutReceivedByInput[]
    createMany?: PaymentCreateManyReceivedByInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReceivedByInput | PaymentUpdateWithWhereUniqueWithoutReceivedByInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReceivedByInput | PaymentUpdateManyWithWhereWithoutReceivedByInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BranchUncheckedUpdateOneWithoutPrincipalNestedInput = {
    create?: XOR<BranchCreateWithoutPrincipalInput, BranchUncheckedCreateWithoutPrincipalInput>
    connectOrCreate?: BranchCreateOrConnectWithoutPrincipalInput
    upsert?: BranchUpsertWithoutPrincipalInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutPrincipalInput, BranchUpdateWithoutPrincipalInput>, BranchUncheckedUpdateWithoutPrincipalInput>
  }

  export type StudentUncheckedUpdateManyWithoutEnrolledByNestedInput = {
    create?: XOR<StudentCreateWithoutEnrolledByInput, StudentUncheckedCreateWithoutEnrolledByInput> | StudentCreateWithoutEnrolledByInput[] | StudentUncheckedCreateWithoutEnrolledByInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutEnrolledByInput | StudentCreateOrConnectWithoutEnrolledByInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutEnrolledByInput | StudentUpsertWithWhereUniqueWithoutEnrolledByInput[]
    createMany?: StudentCreateManyEnrolledByInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutEnrolledByInput | StudentUpdateWithWhereUniqueWithoutEnrolledByInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutEnrolledByInput | StudentUpdateManyWithWhereWithoutEnrolledByInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutReceivedByNestedInput = {
    create?: XOR<PaymentCreateWithoutReceivedByInput, PaymentUncheckedCreateWithoutReceivedByInput> | PaymentCreateWithoutReceivedByInput[] | PaymentUncheckedCreateWithoutReceivedByInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReceivedByInput | PaymentCreateOrConnectWithoutReceivedByInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReceivedByInput | PaymentUpsertWithWhereUniqueWithoutReceivedByInput[]
    createMany?: PaymentCreateManyReceivedByInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReceivedByInput | PaymentUpdateWithWhereUniqueWithoutReceivedByInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReceivedByInput | PaymentUpdateManyWithWhereWithoutReceivedByInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPrincipalBranchInput = {
    create?: XOR<UserCreateWithoutPrincipalBranchInput, UserUncheckedCreateWithoutPrincipalBranchInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrincipalBranchInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutBranchInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type FamilyCreateNestedManyWithoutBranchInput = {
    create?: XOR<FamilyCreateWithoutBranchInput, FamilyUncheckedCreateWithoutBranchInput> | FamilyCreateWithoutBranchInput[] | FamilyUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FamilyCreateOrConnectWithoutBranchInput | FamilyCreateOrConnectWithoutBranchInput[]
    createMany?: FamilyCreateManyBranchInputEnvelope
    connect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type FamilyUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<FamilyCreateWithoutBranchInput, FamilyUncheckedCreateWithoutBranchInput> | FamilyCreateWithoutBranchInput[] | FamilyUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FamilyCreateOrConnectWithoutBranchInput | FamilyCreateOrConnectWithoutBranchInput[]
    createMany?: FamilyCreateManyBranchInputEnvelope
    connect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutPrincipalBranchNestedInput = {
    create?: XOR<UserCreateWithoutPrincipalBranchInput, UserUncheckedCreateWithoutPrincipalBranchInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrincipalBranchInput
    upsert?: UserUpsertWithoutPrincipalBranchInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrincipalBranchInput, UserUpdateWithoutPrincipalBranchInput>, UserUncheckedUpdateWithoutPrincipalBranchInput>
  }

  export type UserUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutBranchInput | StudentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutBranchInput | StudentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutBranchInput | StudentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type FamilyUpdateManyWithoutBranchNestedInput = {
    create?: XOR<FamilyCreateWithoutBranchInput, FamilyUncheckedCreateWithoutBranchInput> | FamilyCreateWithoutBranchInput[] | FamilyUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FamilyCreateOrConnectWithoutBranchInput | FamilyCreateOrConnectWithoutBranchInput[]
    upsert?: FamilyUpsertWithWhereUniqueWithoutBranchInput | FamilyUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: FamilyCreateManyBranchInputEnvelope
    set?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    disconnect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    delete?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    connect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    update?: FamilyUpdateWithWhereUniqueWithoutBranchInput | FamilyUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: FamilyUpdateManyWithWhereWithoutBranchInput | FamilyUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: FamilyScalarWhereInput | FamilyScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput> | StudentCreateWithoutBranchInput[] | StudentUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutBranchInput | StudentCreateOrConnectWithoutBranchInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutBranchInput | StudentUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: StudentCreateManyBranchInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutBranchInput | StudentUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutBranchInput | StudentUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type FamilyUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<FamilyCreateWithoutBranchInput, FamilyUncheckedCreateWithoutBranchInput> | FamilyCreateWithoutBranchInput[] | FamilyUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: FamilyCreateOrConnectWithoutBranchInput | FamilyCreateOrConnectWithoutBranchInput[]
    upsert?: FamilyUpsertWithWhereUniqueWithoutBranchInput | FamilyUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: FamilyCreateManyBranchInputEnvelope
    set?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    disconnect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    delete?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    connect?: FamilyWhereUniqueInput | FamilyWhereUniqueInput[]
    update?: FamilyUpdateWithWhereUniqueWithoutBranchInput | FamilyUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: FamilyUpdateManyWithWhereWithoutBranchInput | FamilyUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: FamilyScalarWhereInput | FamilyScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutFamiliesInput = {
    create?: XOR<BranchCreateWithoutFamiliesInput, BranchUncheckedCreateWithoutFamiliesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutFamiliesInput
    connect?: BranchWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutFamilyInput = {
    create?: XOR<StudentCreateWithoutFamilyInput, StudentUncheckedCreateWithoutFamilyInput> | StudentCreateWithoutFamilyInput[] | StudentUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutFamilyInput | StudentCreateOrConnectWithoutFamilyInput[]
    createMany?: StudentCreateManyFamilyInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutFamilyInput = {
    create?: XOR<PaymentCreateWithoutFamilyInput, PaymentUncheckedCreateWithoutFamilyInput> | PaymentCreateWithoutFamilyInput[] | PaymentUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFamilyInput | PaymentCreateOrConnectWithoutFamilyInput[]
    createMany?: PaymentCreateManyFamilyInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FeeLogCreateNestedManyWithoutFamilyInput = {
    create?: XOR<FeeLogCreateWithoutFamilyInput, FeeLogUncheckedCreateWithoutFamilyInput> | FeeLogCreateWithoutFamilyInput[] | FeeLogUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FeeLogCreateOrConnectWithoutFamilyInput | FeeLogCreateOrConnectWithoutFamilyInput[]
    createMany?: FeeLogCreateManyFamilyInputEnvelope
    connect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<StudentCreateWithoutFamilyInput, StudentUncheckedCreateWithoutFamilyInput> | StudentCreateWithoutFamilyInput[] | StudentUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutFamilyInput | StudentCreateOrConnectWithoutFamilyInput[]
    createMany?: StudentCreateManyFamilyInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<PaymentCreateWithoutFamilyInput, PaymentUncheckedCreateWithoutFamilyInput> | PaymentCreateWithoutFamilyInput[] | PaymentUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFamilyInput | PaymentCreateOrConnectWithoutFamilyInput[]
    createMany?: PaymentCreateManyFamilyInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FeeLogUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<FeeLogCreateWithoutFamilyInput, FeeLogUncheckedCreateWithoutFamilyInput> | FeeLogCreateWithoutFamilyInput[] | FeeLogUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FeeLogCreateOrConnectWithoutFamilyInput | FeeLogCreateOrConnectWithoutFamilyInput[]
    createMany?: FeeLogCreateManyFamilyInputEnvelope
    connect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BranchUpdateOneRequiredWithoutFamiliesNestedInput = {
    create?: XOR<BranchCreateWithoutFamiliesInput, BranchUncheckedCreateWithoutFamiliesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutFamiliesInput
    upsert?: BranchUpsertWithoutFamiliesInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutFamiliesInput, BranchUpdateWithoutFamiliesInput>, BranchUncheckedUpdateWithoutFamiliesInput>
  }

  export type StudentUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<StudentCreateWithoutFamilyInput, StudentUncheckedCreateWithoutFamilyInput> | StudentCreateWithoutFamilyInput[] | StudentUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutFamilyInput | StudentCreateOrConnectWithoutFamilyInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutFamilyInput | StudentUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: StudentCreateManyFamilyInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutFamilyInput | StudentUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutFamilyInput | StudentUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<PaymentCreateWithoutFamilyInput, PaymentUncheckedCreateWithoutFamilyInput> | PaymentCreateWithoutFamilyInput[] | PaymentUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFamilyInput | PaymentCreateOrConnectWithoutFamilyInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutFamilyInput | PaymentUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: PaymentCreateManyFamilyInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutFamilyInput | PaymentUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutFamilyInput | PaymentUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FeeLogUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<FeeLogCreateWithoutFamilyInput, FeeLogUncheckedCreateWithoutFamilyInput> | FeeLogCreateWithoutFamilyInput[] | FeeLogUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FeeLogCreateOrConnectWithoutFamilyInput | FeeLogCreateOrConnectWithoutFamilyInput[]
    upsert?: FeeLogUpsertWithWhereUniqueWithoutFamilyInput | FeeLogUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: FeeLogCreateManyFamilyInputEnvelope
    set?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    disconnect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    delete?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    connect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    update?: FeeLogUpdateWithWhereUniqueWithoutFamilyInput | FeeLogUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: FeeLogUpdateManyWithWhereWithoutFamilyInput | FeeLogUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: FeeLogScalarWhereInput | FeeLogScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<StudentCreateWithoutFamilyInput, StudentUncheckedCreateWithoutFamilyInput> | StudentCreateWithoutFamilyInput[] | StudentUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutFamilyInput | StudentCreateOrConnectWithoutFamilyInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutFamilyInput | StudentUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: StudentCreateManyFamilyInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutFamilyInput | StudentUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutFamilyInput | StudentUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<PaymentCreateWithoutFamilyInput, PaymentUncheckedCreateWithoutFamilyInput> | PaymentCreateWithoutFamilyInput[] | PaymentUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFamilyInput | PaymentCreateOrConnectWithoutFamilyInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutFamilyInput | PaymentUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: PaymentCreateManyFamilyInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutFamilyInput | PaymentUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutFamilyInput | PaymentUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FeeLogUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<FeeLogCreateWithoutFamilyInput, FeeLogUncheckedCreateWithoutFamilyInput> | FeeLogCreateWithoutFamilyInput[] | FeeLogUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: FeeLogCreateOrConnectWithoutFamilyInput | FeeLogCreateOrConnectWithoutFamilyInput[]
    upsert?: FeeLogUpsertWithWhereUniqueWithoutFamilyInput | FeeLogUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: FeeLogCreateManyFamilyInputEnvelope
    set?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    disconnect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    delete?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    connect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    update?: FeeLogUpdateWithWhereUniqueWithoutFamilyInput | FeeLogUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: FeeLogUpdateManyWithWhereWithoutFamilyInput | FeeLogUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: FeeLogScalarWhereInput | FeeLogScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutStudentsInput = {
    create?: XOR<BranchCreateWithoutStudentsInput, BranchUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStudentsInput
    connect?: BranchWhereUniqueInput
  }

  export type FamilyCreateNestedOneWithoutChildrenInput = {
    create?: XOR<FamilyCreateWithoutChildrenInput, FamilyUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutChildrenInput
    connect?: FamilyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEnrolledStudentsInput = {
    create?: XOR<UserCreateWithoutEnrolledStudentsInput, UserUncheckedCreateWithoutEnrolledStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledStudentsInput
    connect?: UserWhereUniqueInput
  }

  export type FeeLogCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeeLogCreateWithoutStudentInput, FeeLogUncheckedCreateWithoutStudentInput> | FeeLogCreateWithoutStudentInput[] | FeeLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeLogCreateOrConnectWithoutStudentInput | FeeLogCreateOrConnectWithoutStudentInput[]
    createMany?: FeeLogCreateManyStudentInputEnvelope
    connect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
  }

  export type FeeLogUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<FeeLogCreateWithoutStudentInput, FeeLogUncheckedCreateWithoutStudentInput> | FeeLogCreateWithoutStudentInput[] | FeeLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeLogCreateOrConnectWithoutStudentInput | FeeLogCreateOrConnectWithoutStudentInput[]
    createMany?: FeeLogCreateManyStudentInputEnvelope
    connect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BranchUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<BranchCreateWithoutStudentsInput, BranchUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutStudentsInput
    upsert?: BranchUpsertWithoutStudentsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutStudentsInput, BranchUpdateWithoutStudentsInput>, BranchUncheckedUpdateWithoutStudentsInput>
  }

  export type FamilyUpdateOneRequiredWithoutChildrenNestedInput = {
    create?: XOR<FamilyCreateWithoutChildrenInput, FamilyUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutChildrenInput
    upsert?: FamilyUpsertWithoutChildrenInput
    connect?: FamilyWhereUniqueInput
    update?: XOR<XOR<FamilyUpdateToOneWithWhereWithoutChildrenInput, FamilyUpdateWithoutChildrenInput>, FamilyUncheckedUpdateWithoutChildrenInput>
  }

  export type UserUpdateOneWithoutEnrolledStudentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrolledStudentsInput, UserUncheckedCreateWithoutEnrolledStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledStudentsInput
    upsert?: UserUpsertWithoutEnrolledStudentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrolledStudentsInput, UserUpdateWithoutEnrolledStudentsInput>, UserUncheckedUpdateWithoutEnrolledStudentsInput>
  }

  export type FeeLogUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeeLogCreateWithoutStudentInput, FeeLogUncheckedCreateWithoutStudentInput> | FeeLogCreateWithoutStudentInput[] | FeeLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeLogCreateOrConnectWithoutStudentInput | FeeLogCreateOrConnectWithoutStudentInput[]
    upsert?: FeeLogUpsertWithWhereUniqueWithoutStudentInput | FeeLogUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeeLogCreateManyStudentInputEnvelope
    set?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    disconnect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    delete?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    connect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    update?: FeeLogUpdateWithWhereUniqueWithoutStudentInput | FeeLogUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeeLogUpdateManyWithWhereWithoutStudentInput | FeeLogUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeeLogScalarWhereInput | FeeLogScalarWhereInput[]
  }

  export type FeeLogUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<FeeLogCreateWithoutStudentInput, FeeLogUncheckedCreateWithoutStudentInput> | FeeLogCreateWithoutStudentInput[] | FeeLogUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: FeeLogCreateOrConnectWithoutStudentInput | FeeLogCreateOrConnectWithoutStudentInput[]
    upsert?: FeeLogUpsertWithWhereUniqueWithoutStudentInput | FeeLogUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: FeeLogCreateManyStudentInputEnvelope
    set?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    disconnect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    delete?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    connect?: FeeLogWhereUniqueInput | FeeLogWhereUniqueInput[]
    update?: FeeLogUpdateWithWhereUniqueWithoutStudentInput | FeeLogUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: FeeLogUpdateManyWithWhereWithoutStudentInput | FeeLogUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: FeeLogScalarWhereInput | FeeLogScalarWhereInput[]
  }

  export type FamilyCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<FamilyCreateWithoutPaymentsInput, FamilyUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutPaymentsInput
    connect?: FamilyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedPaymentsInput = {
    create?: XOR<UserCreateWithoutReceivedPaymentsInput, UserUncheckedCreateWithoutReceivedPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type FamilyUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<FamilyCreateWithoutPaymentsInput, FamilyUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutPaymentsInput
    upsert?: FamilyUpsertWithoutPaymentsInput
    connect?: FamilyWhereUniqueInput
    update?: XOR<XOR<FamilyUpdateToOneWithWhereWithoutPaymentsInput, FamilyUpdateWithoutPaymentsInput>, FamilyUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneWithoutReceivedPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedPaymentsInput, UserUncheckedCreateWithoutReceivedPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPaymentsInput
    upsert?: UserUpsertWithoutReceivedPaymentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedPaymentsInput, UserUpdateWithoutReceivedPaymentsInput>, UserUncheckedUpdateWithoutReceivedPaymentsInput>
  }

  export type FamilyCreateNestedOneWithoutFeeLogsInput = {
    create?: XOR<FamilyCreateWithoutFeeLogsInput, FamilyUncheckedCreateWithoutFeeLogsInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutFeeLogsInput
    connect?: FamilyWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutFeeLogsInput = {
    create?: XOR<StudentCreateWithoutFeeLogsInput, StudentUncheckedCreateWithoutFeeLogsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFeeLogsInput
    connect?: StudentWhereUniqueInput
  }

  export type FamilyUpdateOneRequiredWithoutFeeLogsNestedInput = {
    create?: XOR<FamilyCreateWithoutFeeLogsInput, FamilyUncheckedCreateWithoutFeeLogsInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutFeeLogsInput
    upsert?: FamilyUpsertWithoutFeeLogsInput
    connect?: FamilyWhereUniqueInput
    update?: XOR<XOR<FamilyUpdateToOneWithWhereWithoutFeeLogsInput, FamilyUpdateWithoutFeeLogsInput>, FamilyUncheckedUpdateWithoutFeeLogsInput>
  }

  export type StudentUpdateOneWithoutFeeLogsNestedInput = {
    create?: XOR<StudentCreateWithoutFeeLogsInput, StudentUncheckedCreateWithoutFeeLogsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutFeeLogsInput
    upsert?: StudentUpsertWithoutFeeLogsInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutFeeLogsInput, StudentUpdateWithoutFeeLogsInput>, StudentUncheckedUpdateWithoutFeeLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BranchCreateWithoutStaffInput = {
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    principal?: UserCreateNestedOneWithoutPrincipalBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
    families?: FamilyCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutStaffInput = {
    id?: number
    name: string
    address: string
    principalId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
    families?: FamilyUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutStaffInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutStaffInput, BranchUncheckedCreateWithoutStaffInput>
  }

  export type BranchCreateWithoutPrincipalInput = {
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: UserCreateNestedManyWithoutBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
    families?: FamilyCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutPrincipalInput = {
    id?: number
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: UserUncheckedCreateNestedManyWithoutBranchInput
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
    families?: FamilyUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutPrincipalInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutPrincipalInput, BranchUncheckedCreateWithoutPrincipalInput>
  }

  export type StudentCreateWithoutEnrolledByInput = {
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutStudentsInput
    family: FamilyCreateNestedOneWithoutChildrenInput
    feeLogs?: FeeLogCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutEnrolledByInput = {
    id?: number
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    branchId: number
    familyId: number
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    feeLogs?: FeeLogUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutEnrolledByInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutEnrolledByInput, StudentUncheckedCreateWithoutEnrolledByInput>
  }

  export type StudentCreateManyEnrolledByInputEnvelope = {
    data: StudentCreateManyEnrolledByInput | StudentCreateManyEnrolledByInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutReceivedByInput = {
    amount: Decimal | DecimalJsLike | number | string
    method?: string | null
    remarks?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
    family: FamilyCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutReceivedByInput = {
    id?: number
    familyId: number
    amount: Decimal | DecimalJsLike | number | string
    method?: string | null
    remarks?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutReceivedByInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutReceivedByInput, PaymentUncheckedCreateWithoutReceivedByInput>
  }

  export type PaymentCreateManyReceivedByInputEnvelope = {
    data: PaymentCreateManyReceivedByInput | PaymentCreateManyReceivedByInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutStaffInput = {
    update: XOR<BranchUpdateWithoutStaffInput, BranchUncheckedUpdateWithoutStaffInput>
    create: XOR<BranchCreateWithoutStaffInput, BranchUncheckedCreateWithoutStaffInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutStaffInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutStaffInput, BranchUncheckedUpdateWithoutStaffInput>
  }

  export type BranchUpdateWithoutStaffInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    principal?: UserUpdateOneWithoutPrincipalBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
    families?: FamilyUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    principalId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
    families?: FamilyUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUpsertWithoutPrincipalInput = {
    update: XOR<BranchUpdateWithoutPrincipalInput, BranchUncheckedUpdateWithoutPrincipalInput>
    create: XOR<BranchCreateWithoutPrincipalInput, BranchUncheckedCreateWithoutPrincipalInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutPrincipalInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutPrincipalInput, BranchUncheckedUpdateWithoutPrincipalInput>
  }

  export type BranchUpdateWithoutPrincipalInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: UserUpdateManyWithoutBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
    families?: FamilyUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutPrincipalInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: UserUncheckedUpdateManyWithoutBranchNestedInput
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
    families?: FamilyUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutEnrolledByInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutEnrolledByInput, StudentUncheckedUpdateWithoutEnrolledByInput>
    create: XOR<StudentCreateWithoutEnrolledByInput, StudentUncheckedCreateWithoutEnrolledByInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutEnrolledByInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutEnrolledByInput, StudentUncheckedUpdateWithoutEnrolledByInput>
  }

  export type StudentUpdateManyWithWhereWithoutEnrolledByInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutEnrolledByInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: IntFilter<"Student"> | number
    admissionNo?: StringFilter<"Student"> | string
    referenceNo?: StringNullableFilter<"Student"> | string | null
    name?: StringFilter<"Student"> | string
    dateOfBirth?: StringNullableFilter<"Student"> | string | null
    formBNicNo?: StringNullableFilter<"Student"> | string | null
    previousSchool?: StringNullableFilter<"Student"> | string | null
    caste?: StringNullableFilter<"Student"> | string | null
    religion?: StringNullableFilter<"Student"> | string | null
    gender?: StringNullableFilter<"Student"> | string | null
    classAdmitted?: StringNullableFilter<"Student"> | string | null
    referenceInSchool?: StringNullableFilter<"Student"> | string | null
    specialInfo?: StringNullableFilter<"Student"> | string | null
    guardianName?: StringNullableFilter<"Student"> | string | null
    guardianRelation?: StringNullableFilter<"Student"> | string | null
    houseNo?: StringNullableFilter<"Student"> | string | null
    streetNo?: StringNullableFilter<"Student"> | string | null
    blockPhase?: StringNullableFilter<"Student"> | string | null
    mohallahColony?: StringNullableFilter<"Student"> | string | null
    cell1?: StringNullableFilter<"Student"> | string | null
    cell2?: StringNullableFilter<"Student"> | string | null
    whatsapp?: StringNullableFilter<"Student"> | string | null
    schoolLeavingCert?: BoolFilter<"Student"> | boolean
    characterCert?: BoolFilter<"Student"> | boolean
    birthCert?: BoolFilter<"Student"> | boolean
    admissionFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFilter<"Student"> | Decimal | DecimalJsLike | number | string
    branchId?: IntFilter<"Student"> | number
    familyId?: IntFilter<"Student"> | number
    enrolledById?: IntNullableFilter<"Student"> | number | null
    admissionDate?: DateTimeFilter<"Student"> | Date | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutReceivedByInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutReceivedByInput, PaymentUncheckedUpdateWithoutReceivedByInput>
    create: XOR<PaymentCreateWithoutReceivedByInput, PaymentUncheckedCreateWithoutReceivedByInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutReceivedByInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutReceivedByInput, PaymentUncheckedUpdateWithoutReceivedByInput>
  }

  export type PaymentUpdateManyWithWhereWithoutReceivedByInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutReceivedByInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    familyId?: IntFilter<"Payment"> | number
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    method?: StringNullableFilter<"Payment"> | string | null
    remarks?: StringNullableFilter<"Payment"> | string | null
    receivedById?: IntNullableFilter<"Payment"> | number | null
    paidAt?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type UserCreateWithoutPrincipalBranchInput = {
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutStaffInput
    enrolledStudents?: StudentCreateNestedManyWithoutEnrolledByInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceivedByInput
  }

  export type UserUncheckedCreateWithoutPrincipalBranchInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    branchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: StudentUncheckedCreateNestedManyWithoutEnrolledByInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceivedByInput
  }

  export type UserCreateOrConnectWithoutPrincipalBranchInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrincipalBranchInput, UserUncheckedCreateWithoutPrincipalBranchInput>
  }

  export type UserCreateWithoutBranchInput = {
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    principalBranch?: BranchCreateNestedOneWithoutPrincipalInput
    enrolledStudents?: StudentCreateNestedManyWithoutEnrolledByInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceivedByInput
  }

  export type UserUncheckedCreateWithoutBranchInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    principalBranch?: BranchUncheckedCreateNestedOneWithoutPrincipalInput
    enrolledStudents?: StudentUncheckedCreateNestedManyWithoutEnrolledByInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceivedByInput
  }

  export type UserCreateOrConnectWithoutBranchInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserCreateManyBranchInputEnvelope = {
    data: UserCreateManyBranchInput | UserCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutBranchInput = {
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    family: FamilyCreateNestedOneWithoutChildrenInput
    enrolledBy?: UserCreateNestedOneWithoutEnrolledStudentsInput
    feeLogs?: FeeLogCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutBranchInput = {
    id?: number
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    familyId: number
    enrolledById?: number | null
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    feeLogs?: FeeLogUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutBranchInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput>
  }

  export type StudentCreateManyBranchInputEnvelope = {
    data: StudentCreateManyBranchInput | StudentCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type FamilyCreateWithoutBranchInput = {
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: StudentCreateNestedManyWithoutFamilyInput
    payments?: PaymentCreateNestedManyWithoutFamilyInput
    feeLogs?: FeeLogCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateWithoutBranchInput = {
    id?: number
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: StudentUncheckedCreateNestedManyWithoutFamilyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutFamilyInput
    feeLogs?: FeeLogUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyCreateOrConnectWithoutBranchInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutBranchInput, FamilyUncheckedCreateWithoutBranchInput>
  }

  export type FamilyCreateManyBranchInputEnvelope = {
    data: FamilyCreateManyBranchInput | FamilyCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPrincipalBranchInput = {
    update: XOR<UserUpdateWithoutPrincipalBranchInput, UserUncheckedUpdateWithoutPrincipalBranchInput>
    create: XOR<UserCreateWithoutPrincipalBranchInput, UserUncheckedCreateWithoutPrincipalBranchInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrincipalBranchInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrincipalBranchInput, UserUncheckedUpdateWithoutPrincipalBranchInput>
  }

  export type UserUpdateWithoutPrincipalBranchInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutStaffNestedInput
    enrolledStudents?: StudentUpdateManyWithoutEnrolledByNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceivedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPrincipalBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: StudentUncheckedUpdateManyWithoutEnrolledByNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceivedByNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
  }

  export type UserUpdateManyWithWhereWithoutBranchInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBranchInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    branchId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutBranchInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutBranchInput, StudentUncheckedUpdateWithoutBranchInput>
    create: XOR<StudentCreateWithoutBranchInput, StudentUncheckedCreateWithoutBranchInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutBranchInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutBranchInput, StudentUncheckedUpdateWithoutBranchInput>
  }

  export type StudentUpdateManyWithWhereWithoutBranchInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutBranchInput>
  }

  export type FamilyUpsertWithWhereUniqueWithoutBranchInput = {
    where: FamilyWhereUniqueInput
    update: XOR<FamilyUpdateWithoutBranchInput, FamilyUncheckedUpdateWithoutBranchInput>
    create: XOR<FamilyCreateWithoutBranchInput, FamilyUncheckedCreateWithoutBranchInput>
  }

  export type FamilyUpdateWithWhereUniqueWithoutBranchInput = {
    where: FamilyWhereUniqueInput
    data: XOR<FamilyUpdateWithoutBranchInput, FamilyUncheckedUpdateWithoutBranchInput>
  }

  export type FamilyUpdateManyWithWhereWithoutBranchInput = {
    where: FamilyScalarWhereInput
    data: XOR<FamilyUpdateManyMutationInput, FamilyUncheckedUpdateManyWithoutBranchInput>
  }

  export type FamilyScalarWhereInput = {
    AND?: FamilyScalarWhereInput | FamilyScalarWhereInput[]
    OR?: FamilyScalarWhereInput[]
    NOT?: FamilyScalarWhereInput | FamilyScalarWhereInput[]
    id?: IntFilter<"Family"> | number
    fatherName?: StringFilter<"Family"> | string
    fatherPhone?: StringFilter<"Family"> | string
    fatherOccupation?: StringNullableFilter<"Family"> | string | null
    balance?: DecimalFilter<"Family"> | Decimal | DecimalJsLike | number | string
    branchId?: IntFilter<"Family"> | number
    createdAt?: DateTimeFilter<"Family"> | Date | string
    updatedAt?: DateTimeFilter<"Family"> | Date | string
  }

  export type BranchCreateWithoutFamiliesInput = {
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    principal?: UserCreateNestedOneWithoutPrincipalBranchInput
    staff?: UserCreateNestedManyWithoutBranchInput
    students?: StudentCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutFamiliesInput = {
    id?: number
    name: string
    address: string
    principalId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: UserUncheckedCreateNestedManyWithoutBranchInput
    students?: StudentUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutFamiliesInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutFamiliesInput, BranchUncheckedCreateWithoutFamiliesInput>
  }

  export type StudentCreateWithoutFamilyInput = {
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutStudentsInput
    enrolledBy?: UserCreateNestedOneWithoutEnrolledStudentsInput
    feeLogs?: FeeLogCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutFamilyInput = {
    id?: number
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    branchId: number
    enrolledById?: number | null
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    feeLogs?: FeeLogUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutFamilyInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutFamilyInput, StudentUncheckedCreateWithoutFamilyInput>
  }

  export type StudentCreateManyFamilyInputEnvelope = {
    data: StudentCreateManyFamilyInput | StudentCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutFamilyInput = {
    amount: Decimal | DecimalJsLike | number | string
    method?: string | null
    remarks?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
    receivedBy?: UserCreateNestedOneWithoutReceivedPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutFamilyInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    method?: string | null
    remarks?: string | null
    receivedById?: number | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutFamilyInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutFamilyInput, PaymentUncheckedCreateWithoutFamilyInput>
  }

  export type PaymentCreateManyFamilyInputEnvelope = {
    data: PaymentCreateManyFamilyInput | PaymentCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type FeeLogCreateWithoutFamilyInput = {
    amount: Decimal | DecimalJsLike | number | string
    type: string
    description?: string | null
    billedAt?: Date | string
    createdAt?: Date | string
    student?: StudentCreateNestedOneWithoutFeeLogsInput
  }

  export type FeeLogUncheckedCreateWithoutFamilyInput = {
    id?: number
    studentId?: number | null
    amount: Decimal | DecimalJsLike | number | string
    type: string
    description?: string | null
    billedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeeLogCreateOrConnectWithoutFamilyInput = {
    where: FeeLogWhereUniqueInput
    create: XOR<FeeLogCreateWithoutFamilyInput, FeeLogUncheckedCreateWithoutFamilyInput>
  }

  export type FeeLogCreateManyFamilyInputEnvelope = {
    data: FeeLogCreateManyFamilyInput | FeeLogCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutFamiliesInput = {
    update: XOR<BranchUpdateWithoutFamiliesInput, BranchUncheckedUpdateWithoutFamiliesInput>
    create: XOR<BranchCreateWithoutFamiliesInput, BranchUncheckedCreateWithoutFamiliesInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutFamiliesInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutFamiliesInput, BranchUncheckedUpdateWithoutFamiliesInput>
  }

  export type BranchUpdateWithoutFamiliesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    principal?: UserUpdateOneWithoutPrincipalBranchNestedInput
    staff?: UserUpdateManyWithoutBranchNestedInput
    students?: StudentUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutFamiliesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    principalId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: UserUncheckedUpdateManyWithoutBranchNestedInput
    students?: StudentUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutFamilyInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutFamilyInput, StudentUncheckedUpdateWithoutFamilyInput>
    create: XOR<StudentCreateWithoutFamilyInput, StudentUncheckedCreateWithoutFamilyInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutFamilyInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutFamilyInput, StudentUncheckedUpdateWithoutFamilyInput>
  }

  export type StudentUpdateManyWithWhereWithoutFamilyInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutFamilyInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutFamilyInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutFamilyInput, PaymentUncheckedUpdateWithoutFamilyInput>
    create: XOR<PaymentCreateWithoutFamilyInput, PaymentUncheckedCreateWithoutFamilyInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutFamilyInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutFamilyInput, PaymentUncheckedUpdateWithoutFamilyInput>
  }

  export type PaymentUpdateManyWithWhereWithoutFamilyInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutFamilyInput>
  }

  export type FeeLogUpsertWithWhereUniqueWithoutFamilyInput = {
    where: FeeLogWhereUniqueInput
    update: XOR<FeeLogUpdateWithoutFamilyInput, FeeLogUncheckedUpdateWithoutFamilyInput>
    create: XOR<FeeLogCreateWithoutFamilyInput, FeeLogUncheckedCreateWithoutFamilyInput>
  }

  export type FeeLogUpdateWithWhereUniqueWithoutFamilyInput = {
    where: FeeLogWhereUniqueInput
    data: XOR<FeeLogUpdateWithoutFamilyInput, FeeLogUncheckedUpdateWithoutFamilyInput>
  }

  export type FeeLogUpdateManyWithWhereWithoutFamilyInput = {
    where: FeeLogScalarWhereInput
    data: XOR<FeeLogUpdateManyMutationInput, FeeLogUncheckedUpdateManyWithoutFamilyInput>
  }

  export type FeeLogScalarWhereInput = {
    AND?: FeeLogScalarWhereInput | FeeLogScalarWhereInput[]
    OR?: FeeLogScalarWhereInput[]
    NOT?: FeeLogScalarWhereInput | FeeLogScalarWhereInput[]
    id?: IntFilter<"FeeLog"> | number
    familyId?: IntFilter<"FeeLog"> | number
    studentId?: IntNullableFilter<"FeeLog"> | number | null
    amount?: DecimalFilter<"FeeLog"> | Decimal | DecimalJsLike | number | string
    type?: StringFilter<"FeeLog"> | string
    description?: StringNullableFilter<"FeeLog"> | string | null
    billedAt?: DateTimeFilter<"FeeLog"> | Date | string
    createdAt?: DateTimeFilter<"FeeLog"> | Date | string
  }

  export type BranchCreateWithoutStudentsInput = {
    name: string
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    principal?: UserCreateNestedOneWithoutPrincipalBranchInput
    staff?: UserCreateNestedManyWithoutBranchInput
    families?: FamilyCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    address: string
    principalId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staff?: UserUncheckedCreateNestedManyWithoutBranchInput
    families?: FamilyUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutStudentsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutStudentsInput, BranchUncheckedCreateWithoutStudentsInput>
  }

  export type FamilyCreateWithoutChildrenInput = {
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutFamiliesInput
    payments?: PaymentCreateNestedManyWithoutFamilyInput
    feeLogs?: FeeLogCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateWithoutChildrenInput = {
    id?: number
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    branchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutFamilyInput
    feeLogs?: FeeLogUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyCreateOrConnectWithoutChildrenInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutChildrenInput, FamilyUncheckedCreateWithoutChildrenInput>
  }

  export type UserCreateWithoutEnrolledStudentsInput = {
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutStaffInput
    principalBranch?: BranchCreateNestedOneWithoutPrincipalInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceivedByInput
  }

  export type UserUncheckedCreateWithoutEnrolledStudentsInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    branchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    principalBranch?: BranchUncheckedCreateNestedOneWithoutPrincipalInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceivedByInput
  }

  export type UserCreateOrConnectWithoutEnrolledStudentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrolledStudentsInput, UserUncheckedCreateWithoutEnrolledStudentsInput>
  }

  export type FeeLogCreateWithoutStudentInput = {
    amount: Decimal | DecimalJsLike | number | string
    type: string
    description?: string | null
    billedAt?: Date | string
    createdAt?: Date | string
    family: FamilyCreateNestedOneWithoutFeeLogsInput
  }

  export type FeeLogUncheckedCreateWithoutStudentInput = {
    id?: number
    familyId: number
    amount: Decimal | DecimalJsLike | number | string
    type: string
    description?: string | null
    billedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeeLogCreateOrConnectWithoutStudentInput = {
    where: FeeLogWhereUniqueInput
    create: XOR<FeeLogCreateWithoutStudentInput, FeeLogUncheckedCreateWithoutStudentInput>
  }

  export type FeeLogCreateManyStudentInputEnvelope = {
    data: FeeLogCreateManyStudentInput | FeeLogCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type BranchUpsertWithoutStudentsInput = {
    update: XOR<BranchUpdateWithoutStudentsInput, BranchUncheckedUpdateWithoutStudentsInput>
    create: XOR<BranchCreateWithoutStudentsInput, BranchUncheckedCreateWithoutStudentsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutStudentsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutStudentsInput, BranchUncheckedUpdateWithoutStudentsInput>
  }

  export type BranchUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    principal?: UserUpdateOneWithoutPrincipalBranchNestedInput
    staff?: UserUpdateManyWithoutBranchNestedInput
    families?: FamilyUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    principalId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: UserUncheckedUpdateManyWithoutBranchNestedInput
    families?: FamilyUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type FamilyUpsertWithoutChildrenInput = {
    update: XOR<FamilyUpdateWithoutChildrenInput, FamilyUncheckedUpdateWithoutChildrenInput>
    create: XOR<FamilyCreateWithoutChildrenInput, FamilyUncheckedCreateWithoutChildrenInput>
    where?: FamilyWhereInput
  }

  export type FamilyUpdateToOneWithWhereWithoutChildrenInput = {
    where?: FamilyWhereInput
    data: XOR<FamilyUpdateWithoutChildrenInput, FamilyUncheckedUpdateWithoutChildrenInput>
  }

  export type FamilyUpdateWithoutChildrenInput = {
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutFamiliesNestedInput
    payments?: PaymentUpdateManyWithoutFamilyNestedInput
    feeLogs?: FeeLogUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutFamilyNestedInput
    feeLogs?: FeeLogUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type UserUpsertWithoutEnrolledStudentsInput = {
    update: XOR<UserUpdateWithoutEnrolledStudentsInput, UserUncheckedUpdateWithoutEnrolledStudentsInput>
    create: XOR<UserCreateWithoutEnrolledStudentsInput, UserUncheckedCreateWithoutEnrolledStudentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrolledStudentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrolledStudentsInput, UserUncheckedUpdateWithoutEnrolledStudentsInput>
  }

  export type UserUpdateWithoutEnrolledStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutStaffNestedInput
    principalBranch?: BranchUpdateOneWithoutPrincipalNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceivedByNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrolledStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    principalBranch?: BranchUncheckedUpdateOneWithoutPrincipalNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceivedByNestedInput
  }

  export type FeeLogUpsertWithWhereUniqueWithoutStudentInput = {
    where: FeeLogWhereUniqueInput
    update: XOR<FeeLogUpdateWithoutStudentInput, FeeLogUncheckedUpdateWithoutStudentInput>
    create: XOR<FeeLogCreateWithoutStudentInput, FeeLogUncheckedCreateWithoutStudentInput>
  }

  export type FeeLogUpdateWithWhereUniqueWithoutStudentInput = {
    where: FeeLogWhereUniqueInput
    data: XOR<FeeLogUpdateWithoutStudentInput, FeeLogUncheckedUpdateWithoutStudentInput>
  }

  export type FeeLogUpdateManyWithWhereWithoutStudentInput = {
    where: FeeLogScalarWhereInput
    data: XOR<FeeLogUpdateManyMutationInput, FeeLogUncheckedUpdateManyWithoutStudentInput>
  }

  export type FamilyCreateWithoutPaymentsInput = {
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutFamiliesInput
    children?: StudentCreateNestedManyWithoutFamilyInput
    feeLogs?: FeeLogCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateWithoutPaymentsInput = {
    id?: number
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    branchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: StudentUncheckedCreateNestedManyWithoutFamilyInput
    feeLogs?: FeeLogUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyCreateOrConnectWithoutPaymentsInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutPaymentsInput, FamilyUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutReceivedPaymentsInput = {
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    branch?: BranchCreateNestedOneWithoutStaffInput
    principalBranch?: BranchCreateNestedOneWithoutPrincipalInput
    enrolledStudents?: StudentCreateNestedManyWithoutEnrolledByInput
  }

  export type UserUncheckedCreateWithoutReceivedPaymentsInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    branchId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    principalBranch?: BranchUncheckedCreateNestedOneWithoutPrincipalInput
    enrolledStudents?: StudentUncheckedCreateNestedManyWithoutEnrolledByInput
  }

  export type UserCreateOrConnectWithoutReceivedPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedPaymentsInput, UserUncheckedCreateWithoutReceivedPaymentsInput>
  }

  export type FamilyUpsertWithoutPaymentsInput = {
    update: XOR<FamilyUpdateWithoutPaymentsInput, FamilyUncheckedUpdateWithoutPaymentsInput>
    create: XOR<FamilyCreateWithoutPaymentsInput, FamilyUncheckedCreateWithoutPaymentsInput>
    where?: FamilyWhereInput
  }

  export type FamilyUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: FamilyWhereInput
    data: XOR<FamilyUpdateWithoutPaymentsInput, FamilyUncheckedUpdateWithoutPaymentsInput>
  }

  export type FamilyUpdateWithoutPaymentsInput = {
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutFamiliesNestedInput
    children?: StudentUpdateManyWithoutFamilyNestedInput
    feeLogs?: FeeLogUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: StudentUncheckedUpdateManyWithoutFamilyNestedInput
    feeLogs?: FeeLogUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type UserUpsertWithoutReceivedPaymentsInput = {
    update: XOR<UserUpdateWithoutReceivedPaymentsInput, UserUncheckedUpdateWithoutReceivedPaymentsInput>
    create: XOR<UserCreateWithoutReceivedPaymentsInput, UserUncheckedCreateWithoutReceivedPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedPaymentsInput, UserUncheckedUpdateWithoutReceivedPaymentsInput>
  }

  export type UserUpdateWithoutReceivedPaymentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneWithoutStaffNestedInput
    principalBranch?: BranchUpdateOneWithoutPrincipalNestedInput
    enrolledStudents?: StudentUpdateManyWithoutEnrolledByNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    principalBranch?: BranchUncheckedUpdateOneWithoutPrincipalNestedInput
    enrolledStudents?: StudentUncheckedUpdateManyWithoutEnrolledByNestedInput
  }

  export type FamilyCreateWithoutFeeLogsInput = {
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutFamiliesInput
    children?: StudentCreateNestedManyWithoutFamilyInput
    payments?: PaymentCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateWithoutFeeLogsInput = {
    id?: number
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    branchId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: StudentUncheckedCreateNestedManyWithoutFamilyInput
    payments?: PaymentUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyCreateOrConnectWithoutFeeLogsInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutFeeLogsInput, FamilyUncheckedCreateWithoutFeeLogsInput>
  }

  export type StudentCreateWithoutFeeLogsInput = {
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    branch: BranchCreateNestedOneWithoutStudentsInput
    family: FamilyCreateNestedOneWithoutChildrenInput
    enrolledBy?: UserCreateNestedOneWithoutEnrolledStudentsInput
  }

  export type StudentUncheckedCreateWithoutFeeLogsInput = {
    id?: number
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    branchId: number
    familyId: number
    enrolledById?: number | null
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateOrConnectWithoutFeeLogsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutFeeLogsInput, StudentUncheckedCreateWithoutFeeLogsInput>
  }

  export type FamilyUpsertWithoutFeeLogsInput = {
    update: XOR<FamilyUpdateWithoutFeeLogsInput, FamilyUncheckedUpdateWithoutFeeLogsInput>
    create: XOR<FamilyCreateWithoutFeeLogsInput, FamilyUncheckedCreateWithoutFeeLogsInput>
    where?: FamilyWhereInput
  }

  export type FamilyUpdateToOneWithWhereWithoutFeeLogsInput = {
    where?: FamilyWhereInput
    data: XOR<FamilyUpdateWithoutFeeLogsInput, FamilyUncheckedUpdateWithoutFeeLogsInput>
  }

  export type FamilyUpdateWithoutFeeLogsInput = {
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutFamiliesNestedInput
    children?: StudentUpdateManyWithoutFamilyNestedInput
    payments?: PaymentUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateWithoutFeeLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: StudentUncheckedUpdateManyWithoutFamilyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type StudentUpsertWithoutFeeLogsInput = {
    update: XOR<StudentUpdateWithoutFeeLogsInput, StudentUncheckedUpdateWithoutFeeLogsInput>
    create: XOR<StudentCreateWithoutFeeLogsInput, StudentUncheckedCreateWithoutFeeLogsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutFeeLogsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutFeeLogsInput, StudentUncheckedUpdateWithoutFeeLogsInput>
  }

  export type StudentUpdateWithoutFeeLogsInput = {
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutStudentsNestedInput
    family?: FamilyUpdateOneRequiredWithoutChildrenNestedInput
    enrolledBy?: UserUpdateOneWithoutEnrolledStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutFeeLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    enrolledById?: NullableIntFieldUpdateOperationsInput | number | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyEnrolledByInput = {
    id?: number
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    branchId: number
    familyId: number
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyReceivedByInput = {
    id?: number
    familyId: number
    amount: Decimal | DecimalJsLike | number | string
    method?: string | null
    remarks?: string | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type StudentUpdateWithoutEnrolledByInput = {
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutStudentsNestedInput
    family?: FamilyUpdateOneRequiredWithoutChildrenNestedInput
    feeLogs?: FeeLogUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutEnrolledByInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feeLogs?: FeeLogUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutEnrolledByInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutReceivedByInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutReceivedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutReceivedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyBranchInput = {
    id?: number
    name: string
    email: string
    username: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentCreateManyBranchInput = {
    id?: number
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    familyId: number
    enrolledById?: number | null
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FamilyCreateManyBranchInput = {
    id?: number
    fatherName: string
    fatherPhone: string
    fatherOccupation?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutBranchInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    principalBranch?: BranchUpdateOneWithoutPrincipalNestedInput
    enrolledStudents?: StudentUpdateManyWithoutEnrolledByNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceivedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    principalBranch?: BranchUncheckedUpdateOneWithoutPrincipalNestedInput
    enrolledStudents?: StudentUncheckedUpdateManyWithoutEnrolledByNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceivedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutBranchInput = {
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutChildrenNestedInput
    enrolledBy?: UserUpdateOneWithoutEnrolledStudentsNestedInput
    feeLogs?: FeeLogUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    familyId?: IntFieldUpdateOperationsInput | number
    enrolledById?: NullableIntFieldUpdateOperationsInput | number | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feeLogs?: FeeLogUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    familyId?: IntFieldUpdateOperationsInput | number
    enrolledById?: NullableIntFieldUpdateOperationsInput | number | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FamilyUpdateWithoutBranchInput = {
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: StudentUpdateManyWithoutFamilyNestedInput
    payments?: PaymentUpdateManyWithoutFamilyNestedInput
    feeLogs?: FeeLogUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: StudentUncheckedUpdateManyWithoutFamilyNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutFamilyNestedInput
    feeLogs?: FeeLogUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    fatherName?: StringFieldUpdateOperationsInput | string
    fatherPhone?: StringFieldUpdateOperationsInput | string
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyFamilyInput = {
    id?: number
    admissionNo: string
    referenceNo?: string | null
    name: string
    dateOfBirth?: string | null
    formBNicNo?: string | null
    previousSchool?: string | null
    caste?: string | null
    religion?: string | null
    gender?: string | null
    classAdmitted?: string | null
    referenceInSchool?: string | null
    specialInfo?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    houseNo?: string | null
    streetNo?: string | null
    blockPhase?: string | null
    mohallahColony?: string | null
    cell1?: string | null
    cell2?: string | null
    whatsapp?: string | null
    schoolLeavingCert?: boolean
    characterCert?: boolean
    birthCert?: boolean
    admissionFee?: Decimal | DecimalJsLike | number | string
    monthlyFee?: Decimal | DecimalJsLike | number | string
    annualCharges?: Decimal | DecimalJsLike | number | string
    academyFee?: Decimal | DecimalJsLike | number | string
    labMiscFee?: Decimal | DecimalJsLike | number | string
    branchId: number
    enrolledById?: number | null
    admissionDate?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyFamilyInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    method?: string | null
    remarks?: string | null
    receivedById?: number | null
    paidAt?: Date | string
    createdAt?: Date | string
  }

  export type FeeLogCreateManyFamilyInput = {
    id?: number
    studentId?: number | null
    amount: Decimal | DecimalJsLike | number | string
    type: string
    description?: string | null
    billedAt?: Date | string
    createdAt?: Date | string
  }

  export type StudentUpdateWithoutFamilyInput = {
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutStudentsNestedInput
    enrolledBy?: UserUpdateOneWithoutEnrolledStudentsNestedInput
    feeLogs?: FeeLogUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutFamilyInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    enrolledById?: NullableIntFieldUpdateOperationsInput | number | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feeLogs?: FeeLogUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutFamilyInput = {
    id?: IntFieldUpdateOperationsInput | number
    admissionNo?: StringFieldUpdateOperationsInput | string
    referenceNo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableStringFieldUpdateOperationsInput | string | null
    formBNicNo?: NullableStringFieldUpdateOperationsInput | string | null
    previousSchool?: NullableStringFieldUpdateOperationsInput | string | null
    caste?: NullableStringFieldUpdateOperationsInput | string | null
    religion?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    classAdmitted?: NullableStringFieldUpdateOperationsInput | string | null
    referenceInSchool?: NullableStringFieldUpdateOperationsInput | string | null
    specialInfo?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    houseNo?: NullableStringFieldUpdateOperationsInput | string | null
    streetNo?: NullableStringFieldUpdateOperationsInput | string | null
    blockPhase?: NullableStringFieldUpdateOperationsInput | string | null
    mohallahColony?: NullableStringFieldUpdateOperationsInput | string | null
    cell1?: NullableStringFieldUpdateOperationsInput | string | null
    cell2?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    schoolLeavingCert?: BoolFieldUpdateOperationsInput | boolean
    characterCert?: BoolFieldUpdateOperationsInput | boolean
    birthCert?: BoolFieldUpdateOperationsInput | boolean
    admissionFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    monthlyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    annualCharges?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    academyFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labMiscFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    branchId?: IntFieldUpdateOperationsInput | number
    enrolledById?: NullableIntFieldUpdateOperationsInput | number | null
    admissionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutFamilyInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedBy?: UserUpdateOneWithoutReceivedPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutFamilyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    receivedById?: NullableIntFieldUpdateOperationsInput | number | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutFamilyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    receivedById?: NullableIntFieldUpdateOperationsInput | number | null
    paidAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeLogUpdateWithoutFamilyInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    billedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutFeeLogsNestedInput
  }

  export type FeeLogUncheckedUpdateWithoutFamilyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    billedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeLogUncheckedUpdateManyWithoutFamilyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    billedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeLogCreateManyStudentInput = {
    id?: number
    familyId: number
    amount: Decimal | DecimalJsLike | number | string
    type: string
    description?: string | null
    billedAt?: Date | string
    createdAt?: Date | string
  }

  export type FeeLogUpdateWithoutStudentInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    billedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    family?: FamilyUpdateOneRequiredWithoutFeeLogsNestedInput
  }

  export type FeeLogUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    billedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeeLogUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    familyId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    billedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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