import React from 'react';
import HornedBeasts from './HornedBeast';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Forms from './Forms';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterOption: -1,
        };
    }

    setFilterOption = (filterOption) => {
        this.setState({
            filterOption: filterOption,
        });
    }

    render(){
        return(
            <>
                <Forms setFilterOption={this.setFilterOption}/>
                <Container>
                    <Row xs={1} md={3} className='justify-content-center'>
                        {
                            this.props.beastList.filter(bestObj => 
                                this.state.filterOption === -1
                                ? true
                                : bestObj.horns === this.state.filterOption)
                            .map(bestObj => {
                                return <HornedBeasts 
                                            key={bestObj.title.toString()}
                                            imageUrl={bestObj.image_url}
                                            title={bestObj.title}
                                            description={bestObj.description}
                                            modalHandler={this.props.modalHandler}
                                        />
                            })
                        }
                    </Row>
                </Container>
            </>
        );
    }
}

export default Main;
