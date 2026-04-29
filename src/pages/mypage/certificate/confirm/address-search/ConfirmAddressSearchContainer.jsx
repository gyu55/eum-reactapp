import React from 'react';
import ConfirmAddressSearchComponent from './ConfirmAddressSearchComponent';
import { useNavigate } from 'react-router-dom';

const ConfirmAddressSearchContainer = () => {
    const navigate = useNavigate();

    const handleSelect = () => {
        navigate('/mypage/certificate/confirm');
    };

    return (
        <div>
            주소검색 페이지
            <ConfirmAddressSearchComponent onSelect={handleSelect} />
        </div>
    );
};

export default ConfirmAddressSearchContainer;