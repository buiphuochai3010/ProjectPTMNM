import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FormQLNhanVien from '../form/FormQLNhanVien'
import FormQLKhachHang from '../form/FormQLKhachHang';
import FormQLTaiKhoan from '../form/FormQLTaiKhoan';
import FormQLCTKM from '../form/FormQLCTKM';

const ButtonDelete = ({ value, type }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Xóa
            </Button>

            {type === "qltaikhoan" ? <FormQLTaiKhoan value={value} type={"delete"} show={show} setshow={setShow} />
                : type === "qlnhanvien" ? <FormQLNhanVien value={value} type={"delete"} show={show} setshow={setShow} />
                    : type === "qlkhachhang" ? <FormQLKhachHang value={value} type={"delete"} show={show} setshow={setShow} />
                        : type === "qlctkm" ? <FormQLCTKM value={value} type={"delete"} show={show} setshow={setShow} />
                            : null}
        </>
    );
}

export default ButtonDelete