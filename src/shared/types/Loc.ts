export interface Loc {
  /** 
   * Activity
   * No description provided
   */
  sActivity: string;

  /** 
   * Merchant
   * No description provided
   */
  sMerchant: string;

  /** 
   * Merchants
   * No description provided
   */
  sMerchants: string;

  /** 
   * Person
   * No description provided
   */
  sPerson: string;

  /** 
   * People
   * No description provided
   */
  sPeople: string;

  /** 
   * Transaction
   * No description provided
   */
  sTransaction: string;

  /** 
   * Transactions
   * No description provided
   */
  sTransactions: string;

  /** 
   * User
   * No description provided
   */
  sUser: string;

  /** 
   * Dashboard
   * No description provided
   */
  sDashboard: string;

  /** 
   * Loading {entity}...
   * This message is displayed when the app is loading a specific entity (Profile, Transactions, Merchants, etc.)
   */
  sLoading: (entity: string) => string;

  /** 
   * Failed to load {entity}
   * This message is displayed when the app fails to load a specific entity (Profile, Transactions, Merchants, etc.)
   */
  sFailedToLoad: (entity: string) => string;

  /** 
   * Profile
   * No description provided
   */
  sProfile: string;

  /** 
   * Username
   * No description provided
   */
  sUsername: string;

  /** 
   * Password
   * No description provided
   */
  sPassword: string;

  /** 
   * Email
   * No description provided
   */
  sEmail: string;

  /** 
   * First name
   * No description provided
   */
  sFirstName: string;

  /** 
   * Last name
   * No description provided
   */
  sLastName: string;

  /** 
   * Settings
   * No description provided
   */
  sSettings: string;

  /** 
   * Login
   * No description provided
   */
  authLogin: string;

  /** 
   * Logout
   * No description provided
   */
  authLogout: string;

  /** 
   * Register
   * No description provided
   */
  authRegister: string;

  /** 
   * Forgot password?
   * No description provided
   */
  authForgotPassword: string;

  /** 
   * Confirm password
   * No description provided
   */
  authConfirmPassword: string;

  /** 
   * Reset password
   * No description provided
   */
  authResetPassword: string;

  /** 
   * Remember me
   * No description provided
   */
  authRememberMe: string;
}