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

    return React.createElement(
        "div",
        { style: { padding: 20, display: "flex", gap: 10 } },
        React.createElement(
            "button",
            { onClick: () => showToast("Information message", "info") },
            "Info"
        ),
        React.createElement(
            "button",
            { onClick: () => showToast("Success message", "success") },
            "Success"
        ),
        React.createElement(
            "button",
            { onClick: () => showToast("Error message", "error") },
            "Error"
        )
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
