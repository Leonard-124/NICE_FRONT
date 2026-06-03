
import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { Link, useNavigate} from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData ] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    interface HandleChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

    const handleChange = (e: HandleChangeEvent) => {
        setFormData({...formData, [e.target.name]: e.target.value});
        setError("");
    };

    const validateForm = () => {
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return false;
    }

    if (formData.username.length < 3) {
        setError("Username must be at least 3 characters");
        return false;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        setError("Please enter a valid email");
        return false;
    }

    return true;
};

interface RegisterPayload {
    username: string;
    email: string;
    password: string;
}

interface AxiosErrorResponse {
    error?: string;
}


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
        await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
            {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            } as RegisterPayload
        );

        setSuccess(true);
        setTimeout(() => {
            navigate("/login")
        }, 3000)
    } catch (err: unknown) {
        let message: string = "Registration failed. Please try again.";
        if (axios.isAxiosError(err)) {
            const data = err.response?.data as AxiosErrorResponse | undefined;
            message = data?.error || message;
        } else if (err instanceof Error) {
            message = err.message;
        }
        setError(message);
    } finally {
        setLoading(false)
    }
}

  return (
    <div>Signup</div>
  )
}

export default Signup;