import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [image, setImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [credit, setCredit] = useState(0);

  const backendURL = import.meta.env.VITE_BACKEND_URL; // ✅ Fixed name

  const navigate = useNavigate();

  const loadCreditsData = async () => {
    if (!token) return;
    try {
      const { data } = await axios.get(`${backendURL}/api/user/credits`, {
        headers: { token }
      });
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) loadCreditsData();
  }, [token]);       //To reload credits when token changes meaning user logs in or out

  const getToken = () => localStorage.getItem('token');

  const removeBg = async (file) => {
    try {
      setResultImage(null);
      setImage(file);
      navigate('/result');

      const token = getToken();
      if (!token) {
        toast.error("Please login to remove background.");
        setShowLogin(true);
        setResultImage(null);
        return;
      }

      const formData = new FormData();
      formData.append('image_file', file);

      const { data } = await axios.post(`${backendURL}/api/image/remove-bg`, formData, {
        headers: { token }
      });

      if (data.success) {
        setResultImage(data.resultImage);
        loadCreditsData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        if (data.creditBalance <= 0) {
          toast.info("No credits left. Please buy more.");
          navigate('/buy');
        }
        return null;
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  };

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendURL,
    token,
    setToken,
    credit,
    setCredit,
    image,
    setImage,
    resultImage,
    setResultImage,
    loadCreditsData,
    logout,
    removeBg
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
