import { IToastMessage } from "@/types/toast-message";
import { createContext, useState } from "react";

export const ToastContext = createContext<any>([]);

export function ToastContextProvider({ children }: { children: React.ReactNode }) {

    const [messages, setMessages] = useState<Array<IToastMessage>>([]);

    const dispatchNewMessage = (data: IToastMessage) => {
        const newMessage = { id: (messages.length + 1).toString(), ...data }
        setMessages([...messages, newMessage]);
    }

    const dispatchDeleteMessage = (id: string) => {
        const newMessages = messages.filter((message: any) => {
            return message.id != id;
        })
        setMessages(newMessages);
    }

    return (
        <ToastContext.Provider value={{ messages, setMessages, dispatchNewMessage, dispatchDeleteMessage }}>
            {children}
        </ToastContext.Provider>
    );

}
