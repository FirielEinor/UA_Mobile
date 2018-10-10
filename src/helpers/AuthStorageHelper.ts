const ACCESS_TOKEN_LOCALSTORAGE_NAME = "access_token"

export class AuthStorageHelper {

   constructor() {}

   /**
    * Read the access token's value in the localStorage
    *
    * @return (String|null)
    */
   getAccessToken() {
       return localStorage.getItem(ACCESS_TOKEN_LOCALSTORAGE_NAME);
   }

   /**
    * Set the access token's value in the localStorage
    *
    * @param String newAccessToken
    */
   setAccessToken(newAccessToken) {
       localStorage.setItem(ACCESS_TOKEN_LOCALSTORAGE_NAME, newAccessToken);
   }

   /**
    * Remove the tokens and user info from the localStorage
    */
   clear() {
       localStorage.removeItem(ACCESS_TOKEN_LOCALSTORAGE_NAME);
   }

}
