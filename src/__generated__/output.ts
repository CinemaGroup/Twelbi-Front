import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type Advertising = {
  alt?: Maybe<Scalars['String']['output']>;
  bigImagePath: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  resolution?: Maybe<Scalars['String']['output']>;
  smallImagePath?: Maybe<Scalars['String']['output']>;
  type: AdvertisingType;
  url?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Visibility>;
};

export type AdvertisingInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  bigImage: Scalars['Upload']['input'];
  monthPrice: Scalars['String']['input'];
  resolution: Scalars['String']['input'];
  smallImage: Scalars['Upload']['input'];
  type: AdvertisingTypeSelectInput;
  url?: InputMaybe<Scalars['String']['input']>;
  weekPrice: Scalars['String']['input'];
};

export enum AdvertisingType {
  Banner = 'BANNER',
  Card = 'CARD',
  Catalog = 'CATALOG',
  Large = 'LARGE',
  Small = 'SMALL'
}

export type AdvertisingTypeSelectInput = {
  name: Scalars['String']['input'];
  value: AdvertisingType;
};

export type AllAdvertisements = {
  advertisements: Array<Advertising>;
  count: Scalars['Int']['output'];
};

export type AllBrands = {
  brands: Array<BrandCard>;
  count: Scalars['Int']['output'];
};

export type AllCategories = {
  categories: Array<CategoryCard>;
  count: Scalars['Int']['output'];
};

export type AllProducts = {
  count: Scalars['Int']['output'];
  products: Array<ProductCard>;
};

export type AllReviews = {
  count: Scalars['Int']['output'];
  reviews: Array<ReviewCard>;
};

export type Brand = {
  about: Scalars['String']['output'];
  city: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isBrandOwner: Scalars['Boolean']['output'];
  isSubscribed: Scalars['Boolean']['output'];
  logoPath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  postedCount: Scalars['Int']['output'];
  rating: Scalars['String']['output'];
  reviews: Array<ReviewCard>;
  reviewsCount: Scalars['Int']['output'];
};

export type BrandCard = {
  category: NestedCategory;
  id: Scalars['Int']['output'];
  logoPath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rating: Scalars['String']['output'];
  reviewsCount: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
};

export type BrandQueryInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Sort>;
  reviewsCount?: InputMaybe<Sort>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  visibility: Visibility;
};

export type Category = {
  bigImagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  seo: Seo;
  slug: Scalars['String']['output'];
  smallImagePath: Scalars['String']['output'];
};

export type CategoryCard = {
  bigImagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  smallImagePath: Scalars['String']['output'];
};

export type CategoryInput = {
  bigImagePath: Scalars['String']['input'];
  name: Scalars['String']['input'];
  seo?: InputMaybe<SeoInput>;
  smallImagePath: Scalars['String']['input'];
};

export type CategoryQueryInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  visibility: Visibility;
};

export type CurrentAdvertising = {
  alt?: Maybe<Scalars['String']['output']>;
  bigImagePath: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  monthPrice: Scalars['String']['output'];
  resolution?: Maybe<Scalars['String']['output']>;
  smallImagePath?: Maybe<Scalars['String']['output']>;
  type: AdvertisingType;
  url?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Visibility>;
  weekPrice: Scalars['String']['output'];
};

export type FullestQueryInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  visibility: Visibility;
};

export type Id = {
  id: Scalars['Int']['output'];
};

export type JwtAuthConfirmationInput = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type JwtAuthLoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type JwtAuthResetInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type JwtAuthVerificationInput = {
  email: Scalars['String']['input'];
};

export type Mutation = {
  createAdvertising: Id;
  createCategory: Scalars['Boolean']['output'];
  createProduct: ProductCard;
  deleteAdvertising: Scalars['Boolean']['output'];
  deleteCategory: Scalars['Boolean']['output'];
  deleteProduct: Scalars['Int']['output'];
  duplicateAdvertising: Scalars['Boolean']['output'];
  duplicateCategory: Scalars['Boolean']['output'];
  duplicateProduct: ProductCard;
  jwtConfirmation: Scalars['Boolean']['output'];
  jwtLogin: SessionUserResponse;
  jwtReset: Scalars['Boolean']['output'];
  jwtVerification: Scalars['Boolean']['output'];
  logout: Scalars['Boolean']['output'];
  toggleAdvertising: Scalars['Boolean']['output'];
  toggleCategory: Scalars['Boolean']['output'];
  toggleProduct: Visibility;
  updateAdvertising: Scalars['Boolean']['output'];
  updateCategory: Scalars['Boolean']['output'];
  updateProduct: ProductCard;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationDeleteAdvertisingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateAdvertisingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationJwtConfirmationArgs = {
  data: JwtAuthConfirmationInput;
};


export type MutationJwtLoginArgs = {
  data: JwtAuthLoginInput;
};


export type MutationJwtResetArgs = {
  data: JwtAuthResetInput;
};


export type MutationJwtVerificationArgs = {
  data: JwtAuthVerificationInput;
};


export type MutationToggleAdvertisingArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAdvertisingArgs = {
  data: AdvertisingInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['Int']['input'];
};

export type NestedBrand = {
  logoPath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type NestedCategory = {
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type Price = {
  minQuantity: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
};

export type PriceInput = {
  minQuantity: Scalars['Int']['input'];
  price: Scalars['Int']['input'];
};

export type Product = {
  about: Scalars['String']['output'];
  imagesPaths: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  posterPath: Scalars['String']['output'];
  prices: Array<Price>;
  sku: Scalars['String']['output'];
  videoPath?: Maybe<Scalars['String']['output']>;
};

export type ProductCard = {
  category: NestedCategory;
  id: Scalars['Int']['output'];
  maxPrice: Scalars['Int']['output'];
  minPrice: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  posterPath: Scalars['String']['output'];
  provider: NestedBrand;
  ratesCount: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  visibility: Visibility;
};

export type ProductInput = {
  about: Scalars['String']['input'];
  category: SelectInput;
  images: Array<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  poster: Scalars['Upload']['input'];
  prices: Array<PriceInput>;
  sku: Scalars['String']['input'];
  video?: InputMaybe<Scalars['Upload']['input']>;
};

export type ProductQueryInput = {
  brandId?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  views?: InputMaybe<Sort>;
  visibility: Visibility;
};

export type Profile = {
  email: Scalars['String']['output'];
  login: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type Query = {
  advertisements: AllAdvertisements;
  advertisementsByTypes: Array<Advertising>;
  advertisingById: CurrentAdvertising;
  brand: Brand;
  brands: AllBrands;
  categories: AllCategories;
  categoryById: Category;
  jwtRegister: SessionUserResponse;
  productById: Product;
  products: AllProducts;
  reviews: AllReviews;
  user: SessionUser;
};


export type QueryAdvertisementsArgs = {
  query: FullestQueryInput;
};


export type QueryAdvertisementsByTypesArgs = {
  types: Array<AdvertisingType>;
};


export type QueryAdvertisingByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBrandArgs = {
  slug: Scalars['String']['input'];
};


export type QueryBrandsArgs = {
  query: BrandQueryInput;
};


export type QueryCategoriesArgs = {
  query: CategoryQueryInput;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryJwtRegisterArgs = {
  token: Scalars['String']['input'];
};


export type QueryProductByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductsArgs = {
  query: ProductQueryInput;
};


export type QueryReviewsArgs = {
  query: QueryInput;
};

export type QueryInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
};

export type ReviewCard = {
  authorName: Scalars['String']['output'];
  comment: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
};

export type SelectInput = {
  name: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};

export type Seo = {
  description: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type SeoInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type SessionProfile = {
  email: Scalars['String']['output'];
  login: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type SessionUser = {
  profile: SessionProfile;
  role: UserRole;
};

export type SessionUserResponse = {
  user: SessionUser;
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum UserRole {
  Admin = 'ADMIN',
  Provider = 'PROVIDER'
}

export enum Visibility {
  Hidden = 'HIDDEN',
  Visible = 'VISIBLE'
}

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout: boolean };

export type JwtConfirmationMutationVariables = Exact<{
  data: JwtAuthConfirmationInput;
}>;


export type JwtConfirmationMutation = { jwtConfirmation: boolean };

export type JwtLoginMutationVariables = Exact<{
  data: JwtAuthLoginInput;
}>;


export type JwtLoginMutation = { jwtLogin: { user: { role: UserRole, profile: { email: string, login: string, phone: string } } } };

export type JwtResetMutationVariables = Exact<{
  data: JwtAuthResetInput;
}>;


export type JwtResetMutation = { jwtReset: boolean };

export type JwtVerificationMutationVariables = Exact<{
  data: JwtAuthVerificationInput;
}>;


export type JwtVerificationMutation = { jwtVerification: boolean };

export type CreateAdvertisingMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateAdvertisingMutation = { createAdvertising: { id: number } };

export type DeleteAdvertisingMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteAdvertisingMutation = { deleteAdvertising: boolean };

export type DuplicateAdvertisingMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateAdvertisingMutation = { duplicateAdvertising: boolean };

export type ToggleAdvertisingMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleAdvertisingMutation = { toggleAdvertising: boolean };

export type UpdateAdvertisingMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: AdvertisingInput;
}>;


export type UpdateAdvertisingMutation = { updateAdvertising: boolean };

export type CreateCategoryMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCategoryMutation = { createCategory: boolean };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCategoryMutation = { deleteCategory: boolean };

export type DuplicateCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateCategoryMutation = { duplicateCategory: boolean };

export type ToggleCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleCategoryMutation = { toggleCategory: boolean };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: CategoryInput;
}>;


export type UpdateCategoryMutation = { updateCategory: boolean };

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteProductMutation = { deleteProduct: number };

export type DuplicateProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DuplicateProductMutation = { duplicateProduct: { id: number, name: string, posterPath: string, minPrice: number, maxPrice: number, rating: number, ratesCount: number, visibility: Visibility, category: { name: string, slug: string }, provider: { name: string, slug: string, logoPath: string } } };

export type ToggleProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleProductMutation = { toggleProduct: Visibility };

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: ProductInput;
}>;


export type UpdateProductMutation = { updateProduct: { id: number, name: string, posterPath: string, minPrice: number, maxPrice: number, rating: number, ratesCount: number, visibility: Visibility, category: { name: string, slug: string }, provider: { name: string, slug: string, logoPath: string } } };

export type AdvertisementsByTypesQueryVariables = Exact<{
  types: Array<AdvertisingType> | AdvertisingType;
}>;


export type AdvertisementsByTypesQuery = { advertisementsByTypes: Array<{ id: number, smallImagePath?: string | null, bigImagePath: string, url?: string | null, alt?: string | null, resolution?: string | null, type: AdvertisingType }> };

export type AdvertisementsQueryVariables = Exact<{
  query: FullestQueryInput;
}>;


export type AdvertisementsQuery = { advertisements: { count: number, advertisements: Array<{ id: number, smallImagePath?: string | null, bigImagePath: string, url?: string | null, alt?: string | null, resolution?: string | null, type: AdvertisingType, visibility?: Visibility | null }> } };

export type JwtRegisterQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type JwtRegisterQuery = { jwtRegister: { user: { role: UserRole, profile: { email: string, login: string, phone: string } } } };

export type BrandQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type BrandQuery = { brand: { id: number, name: string, logoPath: string, city: string, postedCount: number, rating: string, phoneNumber: string, isSubscribed: boolean, isBrandOwner: boolean, about: string, reviewsCount: number, createdAt: string, reviews: Array<{ id: number, authorName: string, comment: string, rating: number, createdAt: string }> } };

export type BrandsQueryVariables = Exact<{
  query: BrandQueryInput;
}>;


export type BrandsQuery = { brands: { count: number, brands: Array<{ id: number, name: string, slug: string, logoPath: string, rating: string, reviewsCount: number, category: { name: string, slug: string } }> } };

export type CategoriesQueryVariables = Exact<{
  query: CategoryQueryInput;
}>;


export type CategoriesQuery = { categories: { count: number, categories: Array<{ name: string, slug: string, smallImagePath: string, bigImagePath: string }> } };

export type ProductsQueryVariables = Exact<{
  query: ProductQueryInput;
}>;


export type ProductsQuery = { products: { count: number, products: Array<{ id: number, name: string, posterPath: string, minPrice: number, maxPrice: number, rating: number, ratesCount: number, visibility: Visibility, category: { name: string, slug: string }, provider: { name: string, slug: string, logoPath: string } }> } };

export type ReviewsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type ReviewsQuery = { reviews: { count: number, reviews: Array<{ id: number }> } };

export type AdvertisingByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AdvertisingByIdQuery = { advertisingById: { smallImagePath?: string | null, bigImagePath: string, resolution?: string | null, url?: string | null, alt?: string | null, type: AdvertisingType, weekPrice: string, monthPrice: string } };

export type CategoryByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CategoryByIdQuery = { categoryById: { name: string, slug: string, smallImagePath: string, bigImagePath: string, seo: { title: string, description: string } } };

export type ProductByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProductByIdQuery = { productById: { name: string, about: string, sku: string, posterPath: string, videoPath?: string | null, imagesPaths: Array<string>, prices: Array<{ price: number, minQuantity: number }> } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { user: { role: UserRole, profile: { email: string, login: string, phone: string } } };


export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const JwtConfirmationDocument = gql`
    mutation JwtConfirmation($data: JwtAuthConfirmationInput!) {
  jwtConfirmation(data: $data)
}
    `;
export type JwtConfirmationMutationFn = Apollo.MutationFunction<JwtConfirmationMutation, JwtConfirmationMutationVariables>;

/**
 * __useJwtConfirmationMutation__
 *
 * To run a mutation, you first call `useJwtConfirmationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwtConfirmationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtConfirmationMutation, { data, loading, error }] = useJwtConfirmationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJwtConfirmationMutation(baseOptions?: Apollo.MutationHookOptions<JwtConfirmationMutation, JwtConfirmationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JwtConfirmationMutation, JwtConfirmationMutationVariables>(JwtConfirmationDocument, options);
      }
export type JwtConfirmationMutationHookResult = ReturnType<typeof useJwtConfirmationMutation>;
export type JwtConfirmationMutationResult = Apollo.MutationResult<JwtConfirmationMutation>;
export type JwtConfirmationMutationOptions = Apollo.BaseMutationOptions<JwtConfirmationMutation, JwtConfirmationMutationVariables>;
export const JwtLoginDocument = gql`
    mutation JwtLogin($data: JwtAuthLoginInput!) {
  jwtLogin(data: $data) {
    user {
      profile {
        email
        login
        phone
      }
      role
    }
  }
}
    `;
export type JwtLoginMutationFn = Apollo.MutationFunction<JwtLoginMutation, JwtLoginMutationVariables>;

/**
 * __useJwtLoginMutation__
 *
 * To run a mutation, you first call `useJwtLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwtLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtLoginMutation, { data, loading, error }] = useJwtLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJwtLoginMutation(baseOptions?: Apollo.MutationHookOptions<JwtLoginMutation, JwtLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JwtLoginMutation, JwtLoginMutationVariables>(JwtLoginDocument, options);
      }
export type JwtLoginMutationHookResult = ReturnType<typeof useJwtLoginMutation>;
export type JwtLoginMutationResult = Apollo.MutationResult<JwtLoginMutation>;
export type JwtLoginMutationOptions = Apollo.BaseMutationOptions<JwtLoginMutation, JwtLoginMutationVariables>;
export const JwtResetDocument = gql`
    mutation JwtReset($data: JwtAuthResetInput!) {
  jwtReset(data: $data)
}
    `;
export type JwtResetMutationFn = Apollo.MutationFunction<JwtResetMutation, JwtResetMutationVariables>;

/**
 * __useJwtResetMutation__
 *
 * To run a mutation, you first call `useJwtResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwtResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtResetMutation, { data, loading, error }] = useJwtResetMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJwtResetMutation(baseOptions?: Apollo.MutationHookOptions<JwtResetMutation, JwtResetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JwtResetMutation, JwtResetMutationVariables>(JwtResetDocument, options);
      }
export type JwtResetMutationHookResult = ReturnType<typeof useJwtResetMutation>;
export type JwtResetMutationResult = Apollo.MutationResult<JwtResetMutation>;
export type JwtResetMutationOptions = Apollo.BaseMutationOptions<JwtResetMutation, JwtResetMutationVariables>;
export const JwtVerificationDocument = gql`
    mutation JwtVerification($data: JwtAuthVerificationInput!) {
  jwtVerification(data: $data)
}
    `;
export type JwtVerificationMutationFn = Apollo.MutationFunction<JwtVerificationMutation, JwtVerificationMutationVariables>;

/**
 * __useJwtVerificationMutation__
 *
 * To run a mutation, you first call `useJwtVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJwtVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [jwtVerificationMutation, { data, loading, error }] = useJwtVerificationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJwtVerificationMutation(baseOptions?: Apollo.MutationHookOptions<JwtVerificationMutation, JwtVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JwtVerificationMutation, JwtVerificationMutationVariables>(JwtVerificationDocument, options);
      }
export type JwtVerificationMutationHookResult = ReturnType<typeof useJwtVerificationMutation>;
export type JwtVerificationMutationResult = Apollo.MutationResult<JwtVerificationMutation>;
export type JwtVerificationMutationOptions = Apollo.BaseMutationOptions<JwtVerificationMutation, JwtVerificationMutationVariables>;
export const CreateAdvertisingDocument = gql`
    mutation CreateAdvertising {
  createAdvertising {
    id
  }
}
    `;
export type CreateAdvertisingMutationFn = Apollo.MutationFunction<CreateAdvertisingMutation, CreateAdvertisingMutationVariables>;

/**
 * __useCreateAdvertisingMutation__
 *
 * To run a mutation, you first call `useCreateAdvertisingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdvertisingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdvertisingMutation, { data, loading, error }] = useCreateAdvertisingMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateAdvertisingMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdvertisingMutation, CreateAdvertisingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAdvertisingMutation, CreateAdvertisingMutationVariables>(CreateAdvertisingDocument, options);
      }
export type CreateAdvertisingMutationHookResult = ReturnType<typeof useCreateAdvertisingMutation>;
export type CreateAdvertisingMutationResult = Apollo.MutationResult<CreateAdvertisingMutation>;
export type CreateAdvertisingMutationOptions = Apollo.BaseMutationOptions<CreateAdvertisingMutation, CreateAdvertisingMutationVariables>;
export const DeleteAdvertisingDocument = gql`
    mutation DeleteAdvertising($id: Int!) {
  deleteAdvertising(id: $id)
}
    `;
export type DeleteAdvertisingMutationFn = Apollo.MutationFunction<DeleteAdvertisingMutation, DeleteAdvertisingMutationVariables>;

/**
 * __useDeleteAdvertisingMutation__
 *
 * To run a mutation, you first call `useDeleteAdvertisingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdvertisingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdvertisingMutation, { data, loading, error }] = useDeleteAdvertisingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAdvertisingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdvertisingMutation, DeleteAdvertisingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdvertisingMutation, DeleteAdvertisingMutationVariables>(DeleteAdvertisingDocument, options);
      }
export type DeleteAdvertisingMutationHookResult = ReturnType<typeof useDeleteAdvertisingMutation>;
export type DeleteAdvertisingMutationResult = Apollo.MutationResult<DeleteAdvertisingMutation>;
export type DeleteAdvertisingMutationOptions = Apollo.BaseMutationOptions<DeleteAdvertisingMutation, DeleteAdvertisingMutationVariables>;
export const DuplicateAdvertisingDocument = gql`
    mutation DuplicateAdvertising($id: Int!) {
  duplicateAdvertising(id: $id)
}
    `;
export type DuplicateAdvertisingMutationFn = Apollo.MutationFunction<DuplicateAdvertisingMutation, DuplicateAdvertisingMutationVariables>;

/**
 * __useDuplicateAdvertisingMutation__
 *
 * To run a mutation, you first call `useDuplicateAdvertisingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateAdvertisingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateAdvertisingMutation, { data, loading, error }] = useDuplicateAdvertisingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateAdvertisingMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateAdvertisingMutation, DuplicateAdvertisingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateAdvertisingMutation, DuplicateAdvertisingMutationVariables>(DuplicateAdvertisingDocument, options);
      }
export type DuplicateAdvertisingMutationHookResult = ReturnType<typeof useDuplicateAdvertisingMutation>;
export type DuplicateAdvertisingMutationResult = Apollo.MutationResult<DuplicateAdvertisingMutation>;
export type DuplicateAdvertisingMutationOptions = Apollo.BaseMutationOptions<DuplicateAdvertisingMutation, DuplicateAdvertisingMutationVariables>;
export const ToggleAdvertisingDocument = gql`
    mutation ToggleAdvertising($id: Int!) {
  toggleAdvertising(id: $id)
}
    `;
export type ToggleAdvertisingMutationFn = Apollo.MutationFunction<ToggleAdvertisingMutation, ToggleAdvertisingMutationVariables>;

/**
 * __useToggleAdvertisingMutation__
 *
 * To run a mutation, you first call `useToggleAdvertisingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleAdvertisingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleAdvertisingMutation, { data, loading, error }] = useToggleAdvertisingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleAdvertisingMutation(baseOptions?: Apollo.MutationHookOptions<ToggleAdvertisingMutation, ToggleAdvertisingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleAdvertisingMutation, ToggleAdvertisingMutationVariables>(ToggleAdvertisingDocument, options);
      }
export type ToggleAdvertisingMutationHookResult = ReturnType<typeof useToggleAdvertisingMutation>;
export type ToggleAdvertisingMutationResult = Apollo.MutationResult<ToggleAdvertisingMutation>;
export type ToggleAdvertisingMutationOptions = Apollo.BaseMutationOptions<ToggleAdvertisingMutation, ToggleAdvertisingMutationVariables>;
export const UpdateAdvertisingDocument = gql`
    mutation UpdateAdvertising($id: Int!, $data: AdvertisingInput!) {
  updateAdvertising(id: $id, data: $data)
}
    `;
export type UpdateAdvertisingMutationFn = Apollo.MutationFunction<UpdateAdvertisingMutation, UpdateAdvertisingMutationVariables>;

/**
 * __useUpdateAdvertisingMutation__
 *
 * To run a mutation, you first call `useUpdateAdvertisingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdvertisingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdvertisingMutation, { data, loading, error }] = useUpdateAdvertisingMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAdvertisingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdvertisingMutation, UpdateAdvertisingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAdvertisingMutation, UpdateAdvertisingMutationVariables>(UpdateAdvertisingDocument, options);
      }
export type UpdateAdvertisingMutationHookResult = ReturnType<typeof useUpdateAdvertisingMutation>;
export type UpdateAdvertisingMutationResult = Apollo.MutationResult<UpdateAdvertisingMutation>;
export type UpdateAdvertisingMutationOptions = Apollo.BaseMutationOptions<UpdateAdvertisingMutation, UpdateAdvertisingMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory {
  createCategory
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: Int!) {
  deleteCategory(id: $id)
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const DuplicateCategoryDocument = gql`
    mutation DuplicateCategory($id: Int!) {
  duplicateCategory(id: $id)
}
    `;
export type DuplicateCategoryMutationFn = Apollo.MutationFunction<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>;

/**
 * __useDuplicateCategoryMutation__
 *
 * To run a mutation, you first call `useDuplicateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateCategoryMutation, { data, loading, error }] = useDuplicateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>(DuplicateCategoryDocument, options);
      }
export type DuplicateCategoryMutationHookResult = ReturnType<typeof useDuplicateCategoryMutation>;
export type DuplicateCategoryMutationResult = Apollo.MutationResult<DuplicateCategoryMutation>;
export type DuplicateCategoryMutationOptions = Apollo.BaseMutationOptions<DuplicateCategoryMutation, DuplicateCategoryMutationVariables>;
export const ToggleCategoryDocument = gql`
    mutation ToggleCategory($id: Int!) {
  toggleCategory(id: $id)
}
    `;
export type ToggleCategoryMutationFn = Apollo.MutationFunction<ToggleCategoryMutation, ToggleCategoryMutationVariables>;

/**
 * __useToggleCategoryMutation__
 *
 * To run a mutation, you first call `useToggleCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCategoryMutation, { data, loading, error }] = useToggleCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCategoryMutation(baseOptions?: Apollo.MutationHookOptions<ToggleCategoryMutation, ToggleCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleCategoryMutation, ToggleCategoryMutationVariables>(ToggleCategoryDocument, options);
      }
export type ToggleCategoryMutationHookResult = ReturnType<typeof useToggleCategoryMutation>;
export type ToggleCategoryMutationResult = Apollo.MutationResult<ToggleCategoryMutation>;
export type ToggleCategoryMutationOptions = Apollo.BaseMutationOptions<ToggleCategoryMutation, ToggleCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: Int!, $data: CategoryInput!) {
  updateCategory(id: $id, data: $data)
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: Int!) {
  deleteProduct(id: $id)
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const DuplicateProductDocument = gql`
    mutation DuplicateProduct($id: Int!) {
  duplicateProduct(id: $id) {
    id
    name
    posterPath
    minPrice
    maxPrice
    rating
    ratesCount
    category {
      name
      slug
    }
    provider {
      name
      slug
      logoPath
    }
    visibility
  }
}
    `;
export type DuplicateProductMutationFn = Apollo.MutationFunction<DuplicateProductMutation, DuplicateProductMutationVariables>;

/**
 * __useDuplicateProductMutation__
 *
 * To run a mutation, you first call `useDuplicateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDuplicateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [duplicateProductMutation, { data, loading, error }] = useDuplicateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDuplicateProductMutation(baseOptions?: Apollo.MutationHookOptions<DuplicateProductMutation, DuplicateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DuplicateProductMutation, DuplicateProductMutationVariables>(DuplicateProductDocument, options);
      }
export type DuplicateProductMutationHookResult = ReturnType<typeof useDuplicateProductMutation>;
export type DuplicateProductMutationResult = Apollo.MutationResult<DuplicateProductMutation>;
export type DuplicateProductMutationOptions = Apollo.BaseMutationOptions<DuplicateProductMutation, DuplicateProductMutationVariables>;
export const ToggleProductDocument = gql`
    mutation ToggleProduct($id: Int!) {
  toggleProduct(id: $id)
}
    `;
export type ToggleProductMutationFn = Apollo.MutationFunction<ToggleProductMutation, ToggleProductMutationVariables>;

/**
 * __useToggleProductMutation__
 *
 * To run a mutation, you first call `useToggleProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleProductMutation, { data, loading, error }] = useToggleProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleProductMutation(baseOptions?: Apollo.MutationHookOptions<ToggleProductMutation, ToggleProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleProductMutation, ToggleProductMutationVariables>(ToggleProductDocument, options);
      }
export type ToggleProductMutationHookResult = ReturnType<typeof useToggleProductMutation>;
export type ToggleProductMutationResult = Apollo.MutationResult<ToggleProductMutation>;
export type ToggleProductMutationOptions = Apollo.BaseMutationOptions<ToggleProductMutation, ToggleProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: Int!, $data: ProductInput!) {
  updateProduct(id: $id, data: $data) {
    id
    name
    posterPath
    minPrice
    maxPrice
    rating
    ratesCount
    category {
      name
      slug
    }
    provider {
      name
      slug
      logoPath
    }
    visibility
  }
}
    `;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, options);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const AdvertisementsByTypesDocument = gql`
    query AdvertisementsByTypes($types: [AdvertisingType!]!) {
  advertisementsByTypes(types: $types) {
    id
    smallImagePath
    bigImagePath
    url
    alt
    resolution
    type
  }
}
    `;

/**
 * __useAdvertisementsByTypesQuery__
 *
 * To run a query within a React component, call `useAdvertisementsByTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdvertisementsByTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdvertisementsByTypesQuery({
 *   variables: {
 *      types: // value for 'types'
 *   },
 * });
 */
export function useAdvertisementsByTypesQuery(baseOptions: Apollo.QueryHookOptions<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables> & ({ variables: AdvertisementsByTypesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>(AdvertisementsByTypesDocument, options);
      }
export function useAdvertisementsByTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>(AdvertisementsByTypesDocument, options);
        }
export function useAdvertisementsByTypesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>(AdvertisementsByTypesDocument, options);
        }
export type AdvertisementsByTypesQueryHookResult = ReturnType<typeof useAdvertisementsByTypesQuery>;
export type AdvertisementsByTypesLazyQueryHookResult = ReturnType<typeof useAdvertisementsByTypesLazyQuery>;
export type AdvertisementsByTypesSuspenseQueryHookResult = ReturnType<typeof useAdvertisementsByTypesSuspenseQuery>;
export type AdvertisementsByTypesQueryResult = Apollo.QueryResult<AdvertisementsByTypesQuery, AdvertisementsByTypesQueryVariables>;
export const AdvertisementsDocument = gql`
    query Advertisements($query: FullestQueryInput!) {
  advertisements(query: $query) {
    advertisements {
      id
      smallImagePath
      bigImagePath
      url
      alt
      resolution
      type
      visibility
    }
    count
  }
}
    `;

/**
 * __useAdvertisementsQuery__
 *
 * To run a query within a React component, call `useAdvertisementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdvertisementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdvertisementsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useAdvertisementsQuery(baseOptions: Apollo.QueryHookOptions<AdvertisementsQuery, AdvertisementsQueryVariables> & ({ variables: AdvertisementsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdvertisementsQuery, AdvertisementsQueryVariables>(AdvertisementsDocument, options);
      }
export function useAdvertisementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdvertisementsQuery, AdvertisementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdvertisementsQuery, AdvertisementsQueryVariables>(AdvertisementsDocument, options);
        }
export function useAdvertisementsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdvertisementsQuery, AdvertisementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdvertisementsQuery, AdvertisementsQueryVariables>(AdvertisementsDocument, options);
        }
export type AdvertisementsQueryHookResult = ReturnType<typeof useAdvertisementsQuery>;
export type AdvertisementsLazyQueryHookResult = ReturnType<typeof useAdvertisementsLazyQuery>;
export type AdvertisementsSuspenseQueryHookResult = ReturnType<typeof useAdvertisementsSuspenseQuery>;
export type AdvertisementsQueryResult = Apollo.QueryResult<AdvertisementsQuery, AdvertisementsQueryVariables>;
export const JwtRegisterDocument = gql`
    query JwtRegister($token: String!) {
  jwtRegister(token: $token) {
    user {
      profile {
        email
        login
        phone
      }
      role
    }
  }
}
    `;

/**
 * __useJwtRegisterQuery__
 *
 * To run a query within a React component, call `useJwtRegisterQuery` and pass it any options that fit your needs.
 * When your component renders, `useJwtRegisterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJwtRegisterQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useJwtRegisterQuery(baseOptions: Apollo.QueryHookOptions<JwtRegisterQuery, JwtRegisterQueryVariables> & ({ variables: JwtRegisterQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<JwtRegisterQuery, JwtRegisterQueryVariables>(JwtRegisterDocument, options);
      }
export function useJwtRegisterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<JwtRegisterQuery, JwtRegisterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<JwtRegisterQuery, JwtRegisterQueryVariables>(JwtRegisterDocument, options);
        }
export function useJwtRegisterSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<JwtRegisterQuery, JwtRegisterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<JwtRegisterQuery, JwtRegisterQueryVariables>(JwtRegisterDocument, options);
        }
export type JwtRegisterQueryHookResult = ReturnType<typeof useJwtRegisterQuery>;
export type JwtRegisterLazyQueryHookResult = ReturnType<typeof useJwtRegisterLazyQuery>;
export type JwtRegisterSuspenseQueryHookResult = ReturnType<typeof useJwtRegisterSuspenseQuery>;
export type JwtRegisterQueryResult = Apollo.QueryResult<JwtRegisterQuery, JwtRegisterQueryVariables>;
export const BrandDocument = gql`
    query Brand($slug: String!) {
  brand(slug: $slug) {
    id
    name
    logoPath
    city
    postedCount
    rating
    phoneNumber
    isSubscribed
    isBrandOwner
    about
    reviews {
      id
      authorName
      comment
      rating
      createdAt
    }
    reviewsCount
    createdAt
  }
}
    `;

/**
 * __useBrandQuery__
 *
 * To run a query within a React component, call `useBrandQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBrandQuery(baseOptions: Apollo.QueryHookOptions<BrandQuery, BrandQueryVariables> & ({ variables: BrandQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandQuery, BrandQueryVariables>(BrandDocument, options);
      }
export function useBrandLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandQuery, BrandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandQuery, BrandQueryVariables>(BrandDocument, options);
        }
export function useBrandSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BrandQuery, BrandQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BrandQuery, BrandQueryVariables>(BrandDocument, options);
        }
export type BrandQueryHookResult = ReturnType<typeof useBrandQuery>;
export type BrandLazyQueryHookResult = ReturnType<typeof useBrandLazyQuery>;
export type BrandSuspenseQueryHookResult = ReturnType<typeof useBrandSuspenseQuery>;
export type BrandQueryResult = Apollo.QueryResult<BrandQuery, BrandQueryVariables>;
export const BrandsDocument = gql`
    query Brands($query: BrandQueryInput!) {
  brands(query: $query) {
    brands {
      id
      name
      slug
      logoPath
      rating
      reviewsCount
      category {
        name
        slug
      }
    }
    count
  }
}
    `;

/**
 * __useBrandsQuery__
 *
 * To run a query within a React component, call `useBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBrandsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useBrandsQuery(baseOptions: Apollo.QueryHookOptions<BrandsQuery, BrandsQueryVariables> & ({ variables: BrandsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
      }
export function useBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
        }
export function useBrandsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BrandsQuery, BrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BrandsQuery, BrandsQueryVariables>(BrandsDocument, options);
        }
export type BrandsQueryHookResult = ReturnType<typeof useBrandsQuery>;
export type BrandsLazyQueryHookResult = ReturnType<typeof useBrandsLazyQuery>;
export type BrandsSuspenseQueryHookResult = ReturnType<typeof useBrandsSuspenseQuery>;
export type BrandsQueryResult = Apollo.QueryResult<BrandsQuery, BrandsQueryVariables>;
export const CategoriesDocument = gql`
    query Categories($query: CategoryQueryInput!) {
  categories(query: $query) {
    categories {
      name
      slug
      smallImagePath
      bigImagePath
    }
    count
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables> & ({ variables: CategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const ProductsDocument = gql`
    query Products($query: ProductQueryInput!) {
  products(query: $query) {
    products {
      id
      name
      posterPath
      minPrice
      maxPrice
      rating
      ratesCount
      category {
        name
        slug
      }
      provider {
        name
        slug
        logoPath
      }
      visibility
    }
    count
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables> & ({ variables: ProductsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ReviewsDocument = gql`
    query Reviews($query: QueryInput!) {
  reviews(query: $query) {
    reviews {
      id
    }
    count
  }
}
    `;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useReviewsQuery(baseOptions: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables> & ({ variables: ReviewsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export function useReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsSuspenseQueryHookResult = ReturnType<typeof useReviewsSuspenseQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;
export const AdvertisingByIdDocument = gql`
    query AdvertisingById($id: Int!) {
  advertisingById(id: $id) {
    smallImagePath
    bigImagePath
    resolution
    url
    alt
    type
    weekPrice
    monthPrice
  }
}
    `;

/**
 * __useAdvertisingByIdQuery__
 *
 * To run a query within a React component, call `useAdvertisingByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdvertisingByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdvertisingByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdvertisingByIdQuery(baseOptions: Apollo.QueryHookOptions<AdvertisingByIdQuery, AdvertisingByIdQueryVariables> & ({ variables: AdvertisingByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdvertisingByIdQuery, AdvertisingByIdQueryVariables>(AdvertisingByIdDocument, options);
      }
export function useAdvertisingByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdvertisingByIdQuery, AdvertisingByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdvertisingByIdQuery, AdvertisingByIdQueryVariables>(AdvertisingByIdDocument, options);
        }
export function useAdvertisingByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdvertisingByIdQuery, AdvertisingByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdvertisingByIdQuery, AdvertisingByIdQueryVariables>(AdvertisingByIdDocument, options);
        }
export type AdvertisingByIdQueryHookResult = ReturnType<typeof useAdvertisingByIdQuery>;
export type AdvertisingByIdLazyQueryHookResult = ReturnType<typeof useAdvertisingByIdLazyQuery>;
export type AdvertisingByIdSuspenseQueryHookResult = ReturnType<typeof useAdvertisingByIdSuspenseQuery>;
export type AdvertisingByIdQueryResult = Apollo.QueryResult<AdvertisingByIdQuery, AdvertisingByIdQueryVariables>;
export const CategoryByIdDocument = gql`
    query CategoryById($id: Int!) {
  categoryById(id: $id) {
    name
    slug
    smallImagePath
    bigImagePath
    seo {
      title
      description
    }
  }
}
    `;

/**
 * __useCategoryByIdQuery__
 *
 * To run a query within a React component, call `useCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryByIdQuery(baseOptions: Apollo.QueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables> & ({ variables: CategoryByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
      }
export function useCategoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
        }
export function useCategoryByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
        }
export type CategoryByIdQueryHookResult = ReturnType<typeof useCategoryByIdQuery>;
export type CategoryByIdLazyQueryHookResult = ReturnType<typeof useCategoryByIdLazyQuery>;
export type CategoryByIdSuspenseQueryHookResult = ReturnType<typeof useCategoryByIdSuspenseQuery>;
export type CategoryByIdQueryResult = Apollo.QueryResult<CategoryByIdQuery, CategoryByIdQueryVariables>;
export const ProductByIdDocument = gql`
    query ProductById($id: Int!) {
  productById(id: $id) {
    name
    about
    sku
    posterPath
    videoPath
    imagesPaths
    prices {
      price
      minQuantity
    }
  }
}
    `;

/**
 * __useProductByIdQuery__
 *
 * To run a query within a React component, call `useProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductByIdQuery(baseOptions: Apollo.QueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables> & ({ variables: ProductByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
      }
export function useProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
        }
export function useProductByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductByIdQuery, ProductByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductByIdQuery, ProductByIdQueryVariables>(ProductByIdDocument, options);
        }
export type ProductByIdQueryHookResult = ReturnType<typeof useProductByIdQuery>;
export type ProductByIdLazyQueryHookResult = ReturnType<typeof useProductByIdLazyQuery>;
export type ProductByIdSuspenseQueryHookResult = ReturnType<typeof useProductByIdSuspenseQuery>;
export type ProductByIdQueryResult = Apollo.QueryResult<ProductByIdQuery, ProductByIdQueryVariables>;
export const UserDocument = gql`
    query User {
  user {
    profile {
      email
      login
      phone
    }
    role
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;