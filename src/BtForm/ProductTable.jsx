import { useState } from "react"
import { btFormActions } from "../store/BtFormReducer/slice"


import { useDispatch, useSelector } from "react-redux"

export const ProductTable = () => {
    const {productList} = useSelector((state) => state.btFormReducer)
    const [searchItem, setSearchItem] = useState('')

    const dispatch = useDispatch()

    const handleSearch = (ev) => {
        setSearchItem(ev.target.value)
    }

    const filterProductList = productList.filter((product) => {
        return product.name.toLowerCase().includes(searchItem.toLowerCase())
    })
  return (
    <div className="container">
        <div className="d-flex">
            <p className="mt-1">Tìm kiếm</p>
            <input type="text" placeholder="Nhập tên" value={searchItem} onChange={handleSearch} className="mb-3 ms-2"/>
        </div>
        <table className="table">
            <thead className='table-dark'>
                <tr>
                    <th>Mã SV</th>
                    <th>Name</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    filterProductList.map((val) => 
                    <tr key={val.id}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.number}</td>
                        <td>{val.email}</td>
                        <td>
                            <button className="btn btn-danger me-2" onClick={() => {
                                dispatch(btFormActions.deleteProduct(val.id))
                            }}>Xóa</button>
                            <button className="btn btn-info" onClick={() => {
                                dispatch(btFormActions.editProduct(val))
                            }}>Chỉnh sửa</button>
                        </td>
                    </tr>
                    )
                }    
            </tbody>
        </table>
    </div>
  )
}
