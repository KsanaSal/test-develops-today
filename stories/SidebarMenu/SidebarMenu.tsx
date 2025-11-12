"use client";
import React, { useState } from "react";
import "./SidebarMenu.css";

export interface MenuItem {
    id: string;
    label: string;
    children?: MenuItem[];
}

interface SidebarMenuProps {
    open: boolean;
    onClose: () => void;
    items: MenuItem[];
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
    open,
    onClose,
    items,
}) => {
    return (
        <>
            <div
                className={`overlay, { [styles.show]: open`}
                onClick={onClose}
            />
            <aside className={`sidebar, { [styles.open]: open }`}>
                <div className="header">
                    <strong>Menu</strong>
                    <button onClick={onClose}>✕</button>
                </div>
                <nav className="nav">
                    {items.map((item) => (
                        <MenuItemNode key={item.id} item={item} />
                    ))}
                </nav>
            </aside>
        </>
    );
};

function MenuItemNode({ item }: { item: MenuItem }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <div className="item">
                <button onClick={() => setExpanded((prev) => !prev)}>
                    {item.label}
                </button>
                {item.children && <span>{expanded ? "▾" : "▸"}</span>}
            </div>
            {item.children && expanded && (
                <div className="submenu">
                    {item.children.map((child) => (
                        <MenuItemNode key={child.id} item={child} />
                    ))}
                </div>
            )}
        </div>
    );
}
