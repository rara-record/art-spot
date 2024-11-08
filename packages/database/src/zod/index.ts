import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','emailVerified','role','name','avatarUrl','createdAt','hashedPassword','onboardingComplete']);

export const UserOauthAccountScalarFieldEnumSchema = z.enum(['id','providerId','providerUserId','userId']);

export const UserSessionScalarFieldEnumSchema = z.enum(['id','userId','expiresAt','impersonatorId']);

export const UserVerificationTokenScalarFieldEnumSchema = z.enum(['id','userId','expires']);

export const UserOneTimePasswordScalarFieldEnumSchema = z.enum(['id','userId','code','type','identifier','expires']);

export const ExhibitionScalarFieldEnumSchema = z.enum(['id','title','thumbnailUrl','startDate','endDate','viewCount','field','status','createdAt','updatedAt','locationId']);

export const ExhibitionDetailScalarFieldEnumSchema = z.enum(['id','title','imgUrl','placeUrl','phone','price','closedDays','createdAt','updatedAt','exhibitionId']);

export const LocationScalarFieldEnumSchema = z.enum(['id','name','address','sido','gugun','latitude','longitude','createdAt','updatedAt']);

export const LikeScalarFieldEnumSchema = z.enum(['id','userId','exhibitionId','createdAt']);

export const VisitScalarFieldEnumSchema = z.enum(['id','userId','exhibitionId','createdAt']);

export const ArtworkScalarFieldEnumSchema = z.enum(['id','exhibitionId','title','description','originalUrl','imageUrl','createdYear','createdAt','updatedAt']);

export const ArtistScalarFieldEnumSchema = z.enum(['id','name','imgUrl','birthYear','deathYear','nationality','createdAt','updatedAt']);

export const ExhibitionArtistScalarFieldEnumSchema = z.enum(['exhibitionId','artistId','createdAt']);

export const ArtworkArtistScalarFieldEnumSchema = z.enum(['artworkId','artistId','role','createdAt','updatedAt']);

export const CategoryScalarFieldEnumSchema = z.enum(['id','name','code','createdAt','updatedAt']);

export const TagScalarFieldEnumSchema = z.enum(['id','name','code','createdAt','updatedAt','categoryId']);

export const ArtworkTagScalarFieldEnumSchema = z.enum(['artworkId','tagId','createdAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const UserRoleSchema = z.enum(['USER','ADMIN']);

export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`

export const UserOneTimePasswordTypeSchema = z.enum(['SIGNUP','LOGIN','PASSWORD_RESET']);

export type UserOneTimePasswordTypeType = `${z.infer<typeof UserOneTimePasswordTypeSchema>}`

export const ExhibitionStatusSchema = z.enum(['UPCOMING','ONGOING','ENDED']);

export type ExhibitionStatusType = `${z.infer<typeof ExhibitionStatusSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  role: UserRoleSchema,
  id: z.string().cuid(),
  email: z.string(),
  emailVerified: z.boolean(),
  name: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  hashedPassword: z.string().nullable(),
  onboardingComplete: z.boolean(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// USER OAUTH ACCOUNT SCHEMA
/////////////////////////////////////////

export const UserOauthAccountSchema = z.object({
  id: z.string().cuid(),
  providerId: z.string(),
  providerUserId: z.string(),
  userId: z.string(),
})

export type UserOauthAccount = z.infer<typeof UserOauthAccountSchema>

/////////////////////////////////////////
// USER SESSION SCHEMA
/////////////////////////////////////////

export const UserSessionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  expiresAt: z.coerce.date(),
  impersonatorId: z.string().nullable(),
})

export type UserSession = z.infer<typeof UserSessionSchema>

/////////////////////////////////////////
// USER VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const UserVerificationTokenSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  expires: z.coerce.date(),
})

export type UserVerificationToken = z.infer<typeof UserVerificationTokenSchema>

/////////////////////////////////////////
// USER ONE TIME PASSWORD SCHEMA
/////////////////////////////////////////

export const UserOneTimePasswordSchema = z.object({
  type: UserOneTimePasswordTypeSchema,
  id: z.string().cuid(),
  userId: z.string(),
  code: z.string(),
  identifier: z.string(),
  expires: z.coerce.date(),
})

export type UserOneTimePassword = z.infer<typeof UserOneTimePasswordSchema>

/////////////////////////////////////////
// EXHIBITION SCHEMA
/////////////////////////////////////////

export const ExhibitionSchema = z.object({
  status: ExhibitionStatusSchema,
  id: z.string().cuid(),
  title: z.string(),
  thumbnailUrl: z.string().nullable(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  viewCount: z.number().int(),
  field: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  locationId: z.string(),
})

export type Exhibition = z.infer<typeof ExhibitionSchema>

/////////////////////////////////////////
// EXHIBITION DETAIL SCHEMA
/////////////////////////////////////////

export const ExhibitionDetailSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  imgUrl: z.string().nullable(),
  placeUrl: z.string().nullable(),
  phone: z.string().nullable(),
  price: z.string().nullable(),
  closedDays: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  exhibitionId: z.string(),
})

export type ExhibitionDetail = z.infer<typeof ExhibitionDetailSchema>

/////////////////////////////////////////
// LOCATION SCHEMA
/////////////////////////////////////////

export const LocationSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  address: z.string(),
  sido: z.string(),
  gugun: z.string(),
  latitude: z.string(),
  longitude: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Location = z.infer<typeof LocationSchema>

/////////////////////////////////////////
// LIKE SCHEMA
/////////////////////////////////////////

export const LikeSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  exhibitionId: z.string(),
  createdAt: z.coerce.date(),
})

export type Like = z.infer<typeof LikeSchema>

/////////////////////////////////////////
// VISIT SCHEMA
/////////////////////////////////////////

export const VisitSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  exhibitionId: z.string(),
  createdAt: z.coerce.date(),
})

export type Visit = z.infer<typeof VisitSchema>

/////////////////////////////////////////
// ARTWORK SCHEMA
/////////////////////////////////////////

export const ArtworkSchema = z.object({
  id: z.string().cuid(),
  exhibitionId: z.string().nullable(),
  title: z.string(),
  description: z.string().nullable(),
  originalUrl: z.string().nullable(),
  imageUrl: z.string().nullable(),
  createdYear: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Artwork = z.infer<typeof ArtworkSchema>

/////////////////////////////////////////
// ARTIST SCHEMA
/////////////////////////////////////////

export const ArtistSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  imgUrl: z.string().nullable(),
  birthYear: z.number().int().nullable(),
  deathYear: z.number().int().nullable(),
  nationality: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Artist = z.infer<typeof ArtistSchema>

/////////////////////////////////////////
// EXHIBITION ARTIST SCHEMA
/////////////////////////////////////////

export const ExhibitionArtistSchema = z.object({
  exhibitionId: z.string(),
  artistId: z.string(),
  createdAt: z.coerce.date(),
})

export type ExhibitionArtist = z.infer<typeof ExhibitionArtistSchema>

/////////////////////////////////////////
// ARTWORK ARTIST SCHEMA
/////////////////////////////////////////

export const ArtworkArtistSchema = z.object({
  artworkId: z.string(),
  artistId: z.string(),
  role: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ArtworkArtist = z.infer<typeof ArtworkArtistSchema>

/////////////////////////////////////////
// CATEGORY SCHEMA
/////////////////////////////////////////

export const CategorySchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  code: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Category = z.infer<typeof CategorySchema>

/////////////////////////////////////////
// TAG SCHEMA
/////////////////////////////////////////

export const TagSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  code: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  categoryId: z.string(),
})

export type Tag = z.infer<typeof TagSchema>

/////////////////////////////////////////
// ARTWORK TAG SCHEMA
/////////////////////////////////////////

export const ArtworkTagSchema = z.object({
  artworkId: z.string(),
  tagId: z.string(),
  createdAt: z.coerce.date(),
})

export type ArtworkTag = z.infer<typeof ArtworkTagSchema>
