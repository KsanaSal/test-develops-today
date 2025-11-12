"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import "./Toast.css";

interface Toast {
    id: string;
    message: string;
    type?: "info" | "success" | "error";
    duration?: number;
}

interface ToastContextType {
    showToast: (
        message: string,
        type?: Toast["type"],
        duration?: number
    ) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error("useToast must be used inside ToastProvider");
    return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = useCallback(
        (message: string, type: Toast["type"] = "info", duration = 3000) => {
            const id = crypto.randomUUID();
            const toast: Toast = { id, message, type, duration };
            setToasts((prev) => [...prev, toast]);
            setTimeout(
                () => setToasts((prev) => prev.filter((t) => t.id !== id)),
                duration
            );
        },
        []
    );

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="container">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`toast ${toast.type || "info"}`}
                    >
                        {toast.message}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
};
