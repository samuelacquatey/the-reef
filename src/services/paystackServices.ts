import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export interface PaymentData {
    amount: number;
    email: string;
    phone: string;
    currency?: string;
}

export interface OTPData {
    reference: string;
    otp: string;
}

export const initializePaystackPayment = async (paymentData: PaymentData) => {
    const response = await axios.post(
        `${API_URL}/api/paystack/initialize`,
        paymentData,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    );
    return response.data;
};

export const verifyPaystackPayment = async (reference: string) => {
    const response = await axios.post(
        `${API_URL}/api/paystack/verify`,
        { reference },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    );
    return response.data;
};

export const submitPaystackOTP = async (otpData: OTPData) => {
    const response = await axios.post(
        `${API_URL}/api/paystack/submit-otp`,
        otpData,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    );
    return response.data;
};

export const checkPaymentStatus = async (reference: string) => {
    const response = await axios.get(
        `${API_URL}/api/paystack/status/${reference}`,
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }
    );
    return response.data;
};