import { View, Text } from 'react-native';
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, } from "@firebase/auth"


// web: 106506087341-fru6h0qffi58s4ukbt7thuoh6ovosseu.apps.googleusercontent.com
// ios: 106506087341-afnq5qqts3llbpo5ch1ajlt8l7tnhi4l.apps.googleusercontent.com
// android: 106506087341-3ivjrsf670tpfilqd3nnlar3pqe6fka3.apps.googleusercontent.com



const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo ] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "106506087341-fru6h0qffi58s4ukbt7thuoh6ovosseu.apps.googleusercontent.com",
    androidClientId: '210913457906-7evo3t8o6rbi9k8r2trdt5quajes2lht.apps.googleusercontent.com',
    iosClientId: '210913457906-5fv60j9ql6ns2vne2q2h8ma5f4mkpp3m.apps.googleusercontent.com'
  });

  useEffect(() => {
    if(response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token])

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
  const user = await response.json();
  setUserInfo(user);
} catch (error) {
  // Add your own error handler here
}
};

    
  return (
    <AuthContext.Provider value={{
        user: null,
        signInWithGoogle,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
    return useContext(AuthContext);
}