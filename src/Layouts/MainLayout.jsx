import { Outlet } from "react-router";
import ContactSidebar from "../Components/ContactSidebar/ContactSidebar";
import WhatsAppHeader from "../Components/WhatsappHeader/WhatsappHeader";
import WhatsappFooter from "../Components/WhatsappFooter/WhatsappFooter";
import MessageBoxContextProvider from "../Contexts/MessageBoxContext/MessageBoxContext";
import ContactSidebarContextProvider from "../Contexts/ContactSidebarContext/ContactSidebarContext";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext/ThemeContext";

export default function MainLayout() {

    const { darkTheme } = useContext(ThemeContext);

    return (
        <MessageBoxContextProvider>
            <ContactSidebarContextProvider>
                <div className="app-container" data-theme={darkTheme ? "light" : "dark"} >
                    <div className="contact-list-container">

                        <WhatsAppHeader />
                        <ContactSidebar />
                        <WhatsappFooter />

                    </div>
                    <div className="messagebox-outlet-container">
                        <Outlet />
                    </div>
                </div>
            </ContactSidebarContextProvider>
        </MessageBoxContextProvider>
    );
}
