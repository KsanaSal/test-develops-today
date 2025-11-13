import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: "Username",
        placeholder: "Enter your name",
    },
};

export const Clearable: Story = {
    args: {
        label: "Email",
        placeholder: "Enter email",
        clearable: true,
    },
};
