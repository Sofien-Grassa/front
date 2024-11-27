// Components.js
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
`;

export const Message = styled.div`
    color: #ff4b2b;
    font-size: 14px;
    text-align: center;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    background-color: #f5f5f5;
    transition: all 0.3s;

    &:focus {
        outline: none;
        border-color: #ff4b2b;
        background-color: #fff;
    }
`;

export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #CBDCEB;
    background-color: #1A1A19;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
 `;
