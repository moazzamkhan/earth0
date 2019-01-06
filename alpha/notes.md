# features

## Create Account

// to update user account, always send password
1. User will Create a new Account `POST /account/` - creates a new account`. 
return will be a userid and password. Requires, username and password
2. username, password can be updated
3. phonenumber can be updated using OTP

   - params
     - `password` creates with a provided password
     - `phone` sets phone number for recovering account. Will keep OTP in redis DB for 30 mins.
     - `verificationCode` - OTP or current password to be sent to change `phone` or `password` along with the new `phone` and `fpassword`
   -FLOW WOULD BE - 
    * User will be asked press a button to create a new account
    * In response 



Registration - 
username - 
Password - 

Response - 
userid - 
username - 

2. Authentication 

1. 


-----


