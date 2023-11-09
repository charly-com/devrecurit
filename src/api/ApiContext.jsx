import { createContext, useContext } from "react";

const ApiContext = createContext();

const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw  Error("useApi must be used within an ApiProvider");
  }
  return context;
};

const API_URL = "https://api-dev-recurit.onrender.com"; 

const ApiProvider = ({ children }) => {
    const register = async (registrationData) => {
        try {
          const response = await fetch(`${API_URL}/api/users/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(registrationData),
          });
      
          if (response.status === 201) {
            const data = await response.json();
      
            if (data.token) {
            
              localStorage.setItem('accessToken', data.token);
            }
      
            return {
              success: true,
              data,
            };
          } else {
            return {
              success: false,
              error: "Registration failed",
            };
          }
        } catch (error) {
          throw error;
        }
      };
      
      

  const login = async (loginData) => {
    try {
      const response = await fetch(`${API_URL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const resetPassword = async (resetData) => {
    try {
      const response = await fetch(`${API_URL}/api/users/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resetData),
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const verifyUser = async (verificationData) => {
    try {
      const response = await fetch(`${API_URL}/api/users/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(verificationData),
      });
  
      if (response.status === 200) {
        const data = await response.json();
        return {
          success: true,
          username: data.username,
        };
      } else {
        return {
          success: false,
          error: "Verification failed",
        };
      }
    } catch (error) {
      throw error;
    }
  };
  
  
  

  const refreshAccessToken = async (refreshToken) => {
    try {
      const response = await fetch(`${API_URL}/api/users/refresh-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const resquestPasswordReset = async (email) => {
    try {
      const response = await fetch(`${API_URL}/api/users/request-password-reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  const value = {
    register,
    login,
    resetPassword,
    verifyUser,
    refreshAccessToken,
    resquestPasswordReset,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export { ApiProvider, useApi };
