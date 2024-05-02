import { ProductTable } from "./ProductTable"
import { ProductForm } from "./ProductForm"


export const BtForm = () => {
  return (
    <div>
        <div>
            <ProductForm/>
        </div>
        <div className="mt-3">
            <ProductTable/>
        </div>
    </div>
  )
}
