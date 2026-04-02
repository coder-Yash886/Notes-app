import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const Verify = () => {

    const { token } = useParams();
    const [status, setStatus] = useState("Verifying...");
    const navigate = useNavigate();

    useEffect(() => {
        const verifyEmail = async () => {
            try {
                console.log("TOKEN:", token);

                const res = await axios.post(
                    `http://localhost:8000/api/verify`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                console.log("RESPONSE:", res.data);

                if (res.data.success) {
                    setStatus("Email verified successfully ✅");
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                } else {
                    setStatus(res.data.message || "Invalid or Expired Token ❌");
                }

            } catch (error) {
                console.log("ERROR:", error.response?.data || error.message);
                setStatus(error.response?.data?.message || "Verification failed. Please try again ❌");
            }
        };

        if (token) verifyEmail();

    }, [token, navigate]);

    return (
        <div className='min-h-screen flex items-center justify-center bg-green-100'>
            <div className='bg-white p-6 rounded-xl shadow-md text-center w-[90%] max-w-md'>
                <h2 className='text-xl font-semibold text-gray-800'>{status}</h2>
            </div>
        </div>
    );
};

export default Verify;