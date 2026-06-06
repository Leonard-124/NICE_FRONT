
import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"

const Signin = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [needsVerification, setNeedsVerification] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
  return (
    <div>Signin</div>
  )
}

export default Signin