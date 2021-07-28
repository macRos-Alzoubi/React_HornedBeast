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
                    <Form.Group className='mb-3'>
                        <Form.Label>How Many Horns?</Form.Label>
                        <Form.Select 
                            aria-label="Default select example" 
                            onChange={this.filterHandler}
                            name="filter"
                            >

                            <option value='-1' selected>All</option>
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