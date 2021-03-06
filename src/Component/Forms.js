import React from 'react';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';


class Forms extends React.Component{

    filterHandler = (event) => {
        event.preventDefault();
        this.props.setFilterOption(parseInt(event.target.value));
    }

    render(){
        return(
            <>
                <Form>
                    <Form.Group className='mb-3 d-flex'>
                        <Form.Label className='w-25  align-self-center text-md-end mx-md-3'>How Many Horns?</Form.Label>
                        <Form.Select 
                            aria-label="Default select example" 
                            onChange={this.filterHandler}
                            name="filter"
                            className='w-50 justify-self-center'
                            >

                            <option value='-1'>All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="100">Wow</option>

                        </Form.Select> 
                    </Form.Group>
                </Form>
            </>
        );
    }
}

export default Forms;