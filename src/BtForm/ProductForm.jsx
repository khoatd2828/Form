import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { btFormActions } from '../store/BtFormReducer/slice'
import { useEffect } from 'react'
// import { btFormActions } from '../store/BtFormReducer/slice'

export const ProductForm = () => {
    const 
    {   handleSubmit, //submit form
        register, // register field
        formState: {errors}, //validate
        setValue,
        getValues,
        reset,
    } = useForm({
        mode: 'onBlur'
    })

    const dispath = useDispatch()
    const { productEdit } = useSelector((state) => state.btFormReducer)
    useEffect(() => {
        if (!productEdit) {
            reset({
                id: '',
                name: '',
                number: '',
                email: '',
            })
            return
        }
        reset(productEdit)
    }, [productEdit])
  return (
    <form onSubmit={handleSubmit((val) => {
        if (!productEdit) {
            dispath(btFormActions.addProduct(val))
            return
        }
        dispath(btFormActions.updateProduct(val))
    })} className='container mt-5'>
      <h2 className="bg-dark text-white p-3">Thông tin sinh viên</h2>
      <div className="row">
          <div className="col-6">
              <p>Mã SV</p>
              <input className='form-control' {...register('id', {
                    required: 'Vui lòng nhập ID',
                    minLength: {
                        value: 4,
                        message: 'Tối thiểu 4 kí tự'
                    },
                    maxLength: {
                        value: 10,
                        message: 'Tối đa 10 kí tự'
                    }
                })}/>
                {errors?.id && <p style = {{color: 'red'}}>{errors?.id?.message}</p>}
          </div>
          <div className="col-6">
              <p>Họ tên</p>
              <input className='form-control' {...register('name', {
                    required: 'Vui lòng nhập tên',
                    pattern:  {
                        value: /[A-Za-z]/,
                        message: 'Vui lòng nhập đúng định tên'
                    }
                })}/>
                {errors?.name && <p style = {{color: 'red'}}>{errors?.name?.message}</p>}
          </div>
      </div>
      <div className="row mt-1">
          <div className="col-6">
              <p>Số điện thoại</p>
              <input className='form-control' {...register('number', {
                    required: 'Vui lòng nhập số điện thoại',
                    pattern:  {
                        value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                        message: 'Vui lòng nhập đúng định dạng số'
                    }
                })}/>
                {errors?.number && <p style = {{color: 'red'}}>{errors?.number?.message}</p>}
          </div>
          <div className="col-6">
              <p>Email</p>
              <input className='form-control' {...register('email', {
                    required: 'Vui lòng nhập email',
                    pattern:  {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: 'Vui lòng nhập đúng định định dạng email'
                    }
                })}/>
                {errors?.email && <p style = {{color: 'red'}}>{errors?.email?.message}</p>}
          </div>
      </div>
    
      <div className="mt-3">
          <button className="btn btn-success ">Thêm sinh viên</button>
          <button className="btn btn-info ms-3">Cập nhật</button>
      </div>
  </form>
  )
}
