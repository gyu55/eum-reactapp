import React from 'react';
import { Link } from 'react-router-dom';

const ReceiptTebMenu = () => {
    return (
        <div>
            <Link to={"/exam/receipt/info"} preventScrollReset>시험접수안내</Link>
            <Link to={"/exam/receipt/submit"} preventScrollReset>시험원서접수</Link>
            <Link to={"/exam/receipt/confirm"} preventScrollReset>접수확인 / 취소</Link>
        </div>
    );
};

export default ReceiptTebMenu;