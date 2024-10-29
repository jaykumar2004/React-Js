import React from "react";

const UserContext = React.createContext()

export default UserContext;


//to make user context:
/*{ <userContext>  //this is provider
    <Login />
    <Card>
        <Data />
    </Card>
</userContext> } */
//with context we need to make provider
