import React from 'react';

const LoginPage=() =>{
     
     return ( 
          <form>
               <div>
                    <TextField 
                         id="identifier"
                         label="Username"
                         type="text"
                         name="identifier"
                    />
               </div>

               <div>
                    <TextField 
                         id="password"
                         label="Password"
                         type="text"
                         name="password"
                    />
               </div>

          </form>
     );

}
export default LoginPage