import React from 'react'
import { Row } from 'reactstrap';

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
                    <Row>
                        <Col md="6">
                            <select class="form-control">
                                <optgroup>
                                    <option>1</option>
                                </optgroup>
                            </select>
                        </Col>
                        <Col md="6">
                            <select class="form-control">
                                <option>1</option>
                            </select>
                        </Col>
                    </Row>
                </form>
            </div>
        </section>
    )
}

export default AddressCustomer;