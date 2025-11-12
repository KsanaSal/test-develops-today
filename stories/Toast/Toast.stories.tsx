import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToast } from "./Toast";

const meta: Meta<typeof ToastProvider> = {
    title: "Feedback/Toast",
    component: ToastProvider,
};
export default meta;

type Story = StoryObj<typeof ToastProvider>;

function Buttons() {
    const { showToast } = useToast();

    return (
        <div style={{ padding: 20 }}>
            <button
                className="info-btn"
                onClick={() => showToast("Information message", "info")}
            >
                Info
            </button>
            <button
                className="success-btn"
                onClick={() => showToast("Success message", "success")}
            >
                Success
            </button>
            <button
                className="error-btn"
                onClick={() => showToast("Error message", "error")}
            >
                Error
            </button>
        </div>
    );
}

export const Example: Story = {
    render: () =>
        React.createElement(
            ToastProvider,
            null,
            React.createElement(Buttons, null)
        ),
};
