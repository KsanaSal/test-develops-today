import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input"; // шлях змінити під свій проект

const meta: Meta<typeof Input> = {
    title: "Components/Input", // Назва секції в Storybook
    component: Input, // Компонент, який показуємо
    tags: ["autodocs"], // необов’язково, для авто-документації
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
