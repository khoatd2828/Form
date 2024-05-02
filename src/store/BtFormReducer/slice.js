import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productList: [
        
    ],
    productEdit: null,
}

const slice = createSlice({
    initialState,
    name: 'BTFormReducer',
    reducers: {
        addProduct: (state, {payload}) => {
            state.productList.push(payload)
        },
        deleteProduct: (state, {payload}) => {
            state.productList = state.productList.filter((val) => val.id != payload)
        },
        editProduct: (state, {payload}) => {
            state.productEdit = payload
            console.log(state.productEdit)
        },
        updateProduct: (state, {payload}) => {
            state.productList = state.productList.map((item) => {
                return item?.id != payload.id ? item : payload
            })
            state.productEdit = null
        }
    }
})
// export const {reducer: btFormReducer, actions: btFormActions} = slice
export const {reducer: btFormReducer, actions: btFormActions} = slice