import * as msal from '@azure/msal-browser'

/**
 * List the requested scopes (aka. the requested permissions)
 */
export const requestedScopes = {
  scopes: ["Mail.Read"]
}

/**
 * List the logout account 
 */
const logoutRequest = {
  mainWindowRedirectUri: "/",
};

const msalInstance = new msal.PublicClientApplication({
  auth: {
    clientId: "e8137439-4d1d-462d-a85f-f81cfea8f0d8",
    mainWindowRedirectUri: "/"
  },
  cache: {
    cacheLocation: "sessionStorage"
  }
})


msalInstance.initialize();

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
  graphMailEndpoint: "https://graph.microsoft.com/v1.0/me/messages"
};

export async function signInAndGetUser () {
  const authResult = await msalInstance.loginPopup(requestedScopes)
  msalInstance.setActiveAccount(authResult.account)
  return authResult
}

export async function signOutUser () {
  const authResult = await msalInstance.logoutPopup(logoutRequest )
  return authResult
}


export async function getConversations() {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw new Error('No active account');
  }

  const silentRequest = {
    ...requestedScopes,
    account: account
  };

  const response = await msalInstance.acquireTokenSilent(silentRequest);
  const accessToken = response.accessToken;

  const result = await fetch(graphConfig.graphMailEndpoint, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  const data = await result.json();
  return data.value;
}



