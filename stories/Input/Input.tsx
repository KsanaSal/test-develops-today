"use client";
import React, { useState, InputHTMLAttributes } from "react";
import "./Input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({
    type = "text",
    label,
    clearable,
    ...props
}) => {
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        props.onChange?.(e);
    };

    const handleClear = () => {
        setValue("");
        props.onChange?.({
            ...({
                target: { value: "" },
            } as unknown as React.ChangeEvent<HTMLInputElement>),
        });
    };

    const toggleVisibility = () => setVisible(!visible);
    const currentType = type === "password" && visible ? "text" : type;

    return (
        <label className="wrapper">
            {label && <span className="label">{label}</span>}
            <div className="inputWrap">
                <input
                    {...props}
                    type={currentType}
                    value={value}
                    onChange={handleChange}
                    className="input"
                />

                {type === "password" && (
                    <button
                        type="button"
                        onClick={toggleVisibility}
                        className="iconBtn"
                    >
                        {visible ? "🙈" : "👁️"}
                    </button>
                )}

                {clearable && value && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="clearBtn"
                    >
                        ✕
                    </button>
                )}
            </div>
        </label>
    );
};

export default Input;
