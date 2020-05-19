import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import github from '../assets/images/githublogo2.png';
import resumelogo from '../assets/images/resumelg2.png';

import Card from '../components/Card';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Git Hub',
                    subTitle: 'My personal repositories',
                    imgSrc: github,
                    link: 'https://github.com/StephenRenda',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Resume',
                    subTitle: 'Check out my resume',
                    imgSrc: resumelogo,
                    link: 'https://docs.google.com/document/d/1bgH4iU6wmvz7ORpQUvh8JxQpTiKiUzZKuU3Hun0sMoY/edit?usp=sharing',
                    selected: false    
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;