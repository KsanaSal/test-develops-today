import type { Meta } from "@storybook/react";
import { SidebarMenu, MenuItem } from "./SidebarMenu";
import React, { useState } from "react";

const meta: Meta<typeof SidebarMenu> = {
    title: "Navigation/SidebarMenu",
    component: SidebarMenu,
};
export default meta;

const items: MenuItem[] = [
    { id: "1", label: "Dashboard" },
    {
        id: "2",
        label: "Products",
        children: [
            { id: "2-1", label: "All Products" },
            { id: "2-2", label: "Add Product" },
        ],
    },
    {
        id: "3",
        label: "Settings",
        children: [
            { id: "3-1", label: "Profile" },
            {
                id: "3-2",
                label: "Billing",
                children: [{ id: "3-2-1", label: "Invoices" }],
            },
        ],
    },
];

export const Example = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)}>Open Sidebar</button>
            <SidebarMenu
                open={open}
                onClose={() => setOpen(false)}
                items={items}
            />
        </>
    );
};
