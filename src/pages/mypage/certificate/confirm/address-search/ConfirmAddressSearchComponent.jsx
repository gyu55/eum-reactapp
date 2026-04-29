import React from 'react';

const ConfirmAddressSearchComponent = ({ onSelect }) => {
    return (
        <div>
            주소검색 폼
            <button onClick={onSelect}>선택</button>
        </div>
    );
};

export default ConfirmAddressSearchComponent;