export interface Loc {
  /** 
   * Activity
   *
   * No description provided
   */
  sActivity: string;

  /** 
   * Merchant
   *
   * No description provided
   */
  sMerchant: string;

  /** 
   * Merchants
   *
   * No description provided
   */
  sMerchants: string;

  /** 
   * Person
   *
   * No description provided
   */
  sPerson: string;

  /** 
   * People
   *
   * No description provided
   */
  sPeople: string;

  /** 
   * Transaction
   *
   * No description provided
   */
  sTransaction: string;

  /** 
   * Transactions
   *
   * No description provided
   */
  sTransactions: string;

  /** 
   * User
   *
   * No description provided
   */
  sUser: string;

  /** 
   * Dashboard
   *
   * No description provided
   */
  sDashboard: string;

  /** 
   * Timeline
   *
   * No description provided
   */
  sTimeline: string;

  /** 
   * Loading {entity}...
   *
   * This message is displayed when the app is loading a specific entity (`Profile` | `Transactions` | `Merchants` etc.)
@example
loc.sLoading(s.sProfile) // Loading Profile...
loc.sLoading(s.sTransactions) // Loading Transactions...
loc.sLoading(s.sMerchants) // Loading Merchants...
   */
  sLoading: (entity: string) => string;

  /** 
   * Failed to load {entity}
   *
   * This message is displayed when the app failed to load a specific entity (`Profile` | `Transactions` | `Merchants` etc.)
@example
loc.sFailedToLoad(s.sProfile) // Failed to load Profile
loc.sFailedToLoad(s.sTransactions) // Failed to load Transactions
loc.sFailedToLoad(s.sMerchants) // Failed to load Merchants
   */
  sFailedToLoad: (entity: string) => string;

  /** 
   * Profile
   *
   * No description provided
   */
  sProfile: string;

  /** 
   * Username
   *
   * No description provided
   */
  sUsername: string;

  /** 
   * Password
   *
   * No description provided
   */
  sPassword: string;

  /** 
   * Email
   *
   * No description provided
   */
  sEmail: string;

  /** 
   * First name
   *
   * No description provided
   */
  sFirstName: string;

  /** 
   * Last name
   *
   * No description provided
   */
  sLastName: string;

  /** 
   * Settings
   *
   * No description provided
   */
  sSettings: string;

  /** 
   * General
   *
   * No description provided
   */
  sGeneral: string;

  /** 
   * Notifications
   *
   * No description provided
   */
  sNotifications: string;

  /** 
   * Privacy
   *
   * No description provided
   */
  sPrivacy: string;

  /** 
   * Account
   *
   * No description provided
   */
  sAccount: string;

  /** 
   * About
   *
   * No description provided
   */
  sAbout: string;

  /** 
   * Help
   *
   * No description provided
   */
  sHelp: string;

  /** 
   * Feedback
   *
   * No description provided
   */
  sFeedback: string;

  /** 
   * Account Summary
   *
   * No description provided
   */
  sAccountSummary: string;

  /** 
   * Income
   *
   * No description provided
   */
  sIncome: string;

  /** 
   * Spending
   *
   * No description provided
   */
  sSpending: string;

  /** 
   * Balance
   *
   * No description provided
   */
  sBalance: string;

  /** 
   * Total
   *
   * No description provided
   */
  sTotal: string;

  /** 
   * Carryover
   *
   * No description provided
   */
  sCarryover: string;

  /** 
   * Login
   *
   * No description provided
   */
  authLogin: string;

  /** 
   * Logout
   *
   * No description provided
   */
  authLogout: string;

  /** 
   * Register
   *
   * No description provided
   */
  authRegister: string;

  /** 
   * Forgot password?
   *
   * No description provided
   */
  authForgotPassword: string;

  /** 
   * Confirm password
   *
   * No description provided
   */
  authConfirmPassword: string;

  /** 
   * Reset password
   *
   * No description provided
   */
  authResetPassword: string;

  /** 
   * Remember me
   *
   * No description provided
   */
  authRememberMe: string;

  /** 
   * Recent Transactions
   *
   * No description provided
   */
  trRecentTransactions: string;
}