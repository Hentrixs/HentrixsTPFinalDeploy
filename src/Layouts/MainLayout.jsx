import { Outlet } from "react-router";
import ContactSidebar from "../Components/ContactSidebar/ContactSidebar";
import WhatsAppHeader from "../Components/WhatsappHeader/WhatsappHeader";
import WhatsappFooter from "../Components/WhatsappFooter/WhatsappFooter";
import MessageBoxContextProvider from "../Contexts/MessageBoxContext/MessageBoxContext";
import ContactSidebarContextProvider from "../Contexts/ContactSidebarContext/ContactSidebarContext";

function MainLayout() {
    return (
        <MessageBoxContextProvider>
            <ContactSidebarContextProvider>

                <div className="app-container" data-theme="light">
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

export default MainLayout;
