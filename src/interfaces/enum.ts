export enum MembershipRole {
  OWNER = 1,
  ADMIN = 2,
  MANAGER = 3,
  MEMBER = 4,
  RESELLER = 5
}

export enum UserRole {
  MEMBER = 1,
  RESELLER = 2,
  ADMIN = 3
}

export enum NotificationEmails {
  SECURITY = 0,
  ACCOUNT = 1,
  GENERAL = 2,
  PROMOTIONS = 3
}

export enum EventType {
  USER_CREATED = "user.created",
  USER_UPDATED = "user.updated",
  USER_DELETED = "user.deleted",
  AUTH_REFRESH = "auth.refresh",
  AUTH_LOGIN = "auth.login",
  AUTH_LOGIN_OAUTH = "auth.login_oauth",
  AUTH_LOGIN_BACKUP_CODE = "auth.login_backupCode",
  AUTH_LOGIN_GOOGLE = "auth.login_google",
  AUTH_PASSWORD_CHANGED = "auth.password_changed",
  AUTH_PASSWORD_RESET_REQUESTED = "auth.passwordReset",
  AUTH_APPROVE_LOCATION = "auth.approveLocation",
  ORGANIZATION_CREATED = "organization.created",
  ORGANIZATION_UPDATED = "organization.updated",
  ORGANIZATION_DELETED = "organization.deleted",
  EMAIL_CREATED = "email.created",
  EMAIL_UPDATED = "email.updated",
  EMAIL_DELETED = "email.deleted",
  EMAIL_VERIFIED = "email.verified",
  MEMBERSHIP_CREATED = "membership.created",
  MEMBERSHIP_UPDATED = "membership.updated",
  MEMBERSHIP_DELETED = "membership.deleted",
  BILLING_UPDATED = "billing.updated",
  API_KEY_CREATED = "apiKey.created",
  API_KEY_UPDATED = "apiKey.updated",
  API_KEY_DELETED = "apiKey.deleted"
}

export enum Templates {
  EMAIL_VERIFY = "email-verify",
  PASSWORD_RESET = "password-reset",
  NEW_PASSWORD = "new-password",
  INVITED_TO_TEAM = "invited",
  UNAPPROVED_LOCATION = "unapproved-location",
  CREDITS_NEW_USER = "credits-new-user",
  CREDITS_INVITED_BY = "credits-invited-by"
}

export enum Tokens {
  LOGIN = "auth",
  API_KEY = "api-key",
  ACCESS_TOKEN = "access-token",
  TWO_FACTOR = "2fa",
  REFRESH = "refresh",
  PASSWORD_RESET = "password-reset",
  EMAIL_VERIFY = "email-verify",
  APPROVE_LOCATION = "approve-location",
  COUPON = "coupon"
}

export enum CacheCategories {
  USER = "user",
  ORGANIZATION_RECENT_EVENTS = "organization-recent-events",
  USER_MEMBERSHIPS = "user-memberships",
  MEMBERSHIP = "membership",
  ORGANIZATION = "organization",
  USER_USERNAME = "user-username",
  ORGANIZATION_USERNAME = "organization-username",
  IP_LOOKUP = "ip-lookup"
}

export enum Authorizations {
  CREATE = "create",
  READ = "read",
  CREATE_SECURE = "create-secure",
  READ_SECURE = "read-secure",
  UPDATE = "update",
  UPDATE_SECURE = "update-secure",
  DELETE = "delete",
  DELETE_SECURE = "delete-secure",
  INVITE_MEMBER = "invite-member",
  IMPERSONATE = "impersonate"
}

export enum Genders {
  MALE = "m",
  FEMALE = "f",
  NON_BINARY = "n",
  UNKNOWN = "x"
}

export enum OrgScopes {
  READ_ORG = "org:read",
  UPDATE_ORG = "org:update",
  DELETE_ORG = "org:delete",
  READ_ORG_BILLING = "org:billing:read",
  UPDATE_ORG_BILLING = "org:billing:update",
  READ_ORG_INVOICES = "org:invoices:read",
  READ_ORG_SOURCES = "org:sources:read",
  CREATE_ORG_SOURCES = "org:sources:create",
  UPDATE_ORG_SOURCES = "org:sources:update",
  DELETE_ORG_SOURCES = "org:sources:delete",
  READ_ORG_SUBSCRIPTIONS = "org:subscriptions:read",
  UPDATE_ORG_SUBSCRIPTIONS = "org:subscriptions:update",
  CREATE_ORG_SUBSCRIPTIONS = "org:subscriptions:create",
  READ_ORG_PLANS = "org:plans:read",
  READ_ORG_API_KEYS = "org:api-key:read",
  READ_ORG_API_KEY_LOGS = "org:api-key-logs:read",
  UPDATE_ORG_API_KEYS = "org:api-key:update",
  DELETE_ORG_API_KEYS = "org:api-key:delete",
  CREATE_ORG_API_KEYS = "org:api-key:create",
  READ_ORG_DOMAINS = "org:domain:read",
  UPDATE_ORG_DOMAINS = "org:domain:update",
  DELETE_ORG_DOMAINS = "org:domain:delete",
  CREATE_ORG_DOMAINS = "org:domain:create",
  VERIFY_ORG_DOMAINS = "org:domain:verify",
  READ_ORG_PDF2TABLEJOBS = "org:pdf2tablejob:read",
  UPDATE_ORG_PDF2TABLEJOBS = "org:pdf2tablejob:update",
  DELETE_ORG_PDF2TABLEJOBS = "org:pdf2tablejob:delete",
  CREATE_ORG_PDF2TABLEJOBS = "org:pdf2tablejob:create",
  VERIFY_ORG_PDF2TABLEJOBS = "org:pdf2tablejob:verify",
  READ_ORG_WEBHOOKS = "org:webhook:read",
  UPDATE_ORG_WEBHOOKS = "org:webhook:update",
  DELETE_ORG_WEBHOOKS = "org:webhook:delete",
  CREATE_ORG_WEBHOOKS = "org:webhook:create",
  READ_ORG_MEMBERSHIPS = "org:membership:read",
  UPDATE_ORG_MEMBERSHIPS = "org:membership:update",
  DELETE_ORG_MEMBERSHIPS = "org:membership:delete",
  CREATE_ORG_MEMBERSHIPS = "org:membership:create",
  READ_ORG_TRANSACTIONS = "org:transactions:read",
  UPDATE_ORG_TRANSACTIONS = "org:transactions:update",
  DELETE_ORG_TRANSACTIONS = "org:transactions:delete",
  CREATE_ORG_TRANSACTIONS = "org:transactions:create"
}

export enum UserScopes {
  READ_USER = "user:read",
  UPDATE_USER = "user:update",
  CHANGE_PASSWORD = "user:change-password",
  DELETE_USER = "user:delete",
  READ_USER_MEMBERSHIPS = "user:memberships:read",
  ENABLE_USER_2FA = "user:2fa:enable",
  DISABLE_USER_2FA = "user:2fa:disable",
  READ_USER_BACKUP_CODES = "user:backup-codes:read",
  REGENERATE_USER_BACKUP_CODES = "user:backup-codes:regenerate",
  CREATE_USER_ACCESS_TOKENS = "user:access-tokens:create",
  READ_USER_ACCESS_TOKENS = "user:access-tokens:read",
  UPDATE_USER_ACCESS_TOKENS = "user:access-tokens:update",
  DELETE_USER_ACCESS_TOKENS = "user:access-tokens:delete",
  CREATE_USER_EMAILS = "user:emails:create",
  READ_USER_EMAILS = "user:emails:read",
  DELETE_USER_EMAILS = "user:emails:delete",
  RESEND_USER_EMAIL_VERIFICATION = "user:emails:resend-verification",
  CREATE_USER_SESSION = "user:sessions:create",
  READ_USER_SESSION = "user:sessions:read",
  DELETE_USER_SESSION = "user:sessions:delete",
  CREATE_USER_IDENTITY = "user:identities:create",
  READ_USER_IDENTITY = "user:identities:read",
  DELETE_USER_IDENTITY = "user:identities:delete"
}

export enum Webhooks {
  ALL_EVENTS = "*",
  UPDATE_ORGANIZATION = "update-organization",
  DELETE_ORGANIZATION = "delete-organization",
  UPDATE_ORGANIZATION_BILLING = "update-organization-billing",
  UPDATE_ORGANIZATION_SUBSCRIPTION = "update-organization-subscription",
  CREATE_ORGANIZATION_SUBSCRIPTION = "create-organization-subscription",
  DELETE_ORGANIZATION_SOURCE = "delete-organization-source",
  UPDATE_ORGANIZATION_SOURCE = "update-organization-source",
  CREATE_ORGANIZATION_SOURCE = "create-organization-source",
  UPDATE_API_KEY = "update-api-key",
  CREATE_API_KEY = "create-api-key",
  DELETE_API_KEY = "delete-api-key",
  UPDATE_DOMAIN = "update-domain",
  CREATE_DOMAIN = "create-domain",
  DELETE_DOMAIN = "delete-domain",
  VERIFY_DOMAIN = "verify-domain",
  UPDATE_PDF2TABLEJOB = "update-pdf2tablejob",
  CREATE_PDF2TABLEJOB = "create-pdf2tablejob",
  DELETE_PDF2TABLEJOB = "delete-pdf2tablejob",
  VERIFY_PDF2TABLEJOB = "verify-pdf2tablejob",
  UPDATE_WEBHOOK = "update-webhook",
  CREATE_WEBHOOK = "create-webhook",
  DELETE_WEBHOOK = "delete-webhook"
}
