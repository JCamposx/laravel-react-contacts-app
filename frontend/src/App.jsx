import Navbar from "@/components/Navbar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { AlertContextProvider } from "@/context/AlertContext";
import { AuthContextProvider } from "@/context/AuthContext";
import { ContactContextProvider } from "@/context/ContactContext";
import { ContactRequestErrorContextProvider } from "@/context/ContactRequestErrorContext";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import ContactsCreate from "@/pages/contacts/Create";
import ContactsEdit from "@/pages/contacts/Edit";
import ContactsIndex from "@/pages/contacts/Index";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { routes, url } from "@/routes/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navbar />
        <div className="container">
          <ContactRequestErrorContextProvider>
            <AlertContextProvider>
              <Routes>
                <Route element={<ProtectedRoute isAuthRoute={true} />}>
                  <Route path={routes.auth.login} element={<Login />} />
                  <Route path={routes.auth.register} element={<Register />} />
                </Route>
                <Route element={<ProtectedRoute />}>
                  <Route path={routes.home} element={<Home />} />
                  <Route
                    path={routes.contacts.index}
                    element={<ContactsIndex />}
                  />
                  <Route
                    path={routes.contacts.create}
                    element={
                      <ContactContextProvider>
                        <ContactsCreate />
                      </ContactContextProvider>
                    }
                  />
                  <Route
                    path={url(routes.contacts.edit)}
                    element={<ContactsEdit />}
                  />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </AlertContextProvider>
          </ContactRequestErrorContextProvider>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
