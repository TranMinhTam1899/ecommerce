import React from 'react'

const AddressCustomer = () => {
    return (
        <section class="addressCustomer">
            <div class="addressCustomer_title">
                <h4 class="addressCustomer_title_text">
                    Địa chỉ giao hàng
                </h4>
            </div>
            <div class="addressCustomer_content">
                <form>
                    <div class="row">
                        <div class="col-lg-6">
                            <select class="form-control">
                                <optgroup>
                                    <option>1</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="col-lg-6">
                            <select class="form-control">
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddressCustomer;