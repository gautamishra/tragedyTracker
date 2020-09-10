import React from 'react';
import Card from './Card';
import './CardContainer.css';


export default class CardContainer extends React.Component {

    

    constructor(props){
        super(props);
        this.state = {
            tragedy : [],
            id: this.props.match.params.id
        }
    }
    

    componentDidMount(){
        this.setState({
            tragedy:this.getCardContent()
        });
        console.log(this.state.id)
    }

    getCardContent(){
      return  ( [{
        title: 'Bush Fire',
        url: 'www.bushFire.com',
        img: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/14644/production/_110242538_gettyimages-1194815171.jpg',
        month: 'January',
        desc: 'Massive Fire In Australia Bush for more then 18 Days!!asdadasdadadadadadad'
    },
    {
        title: 'kobey is Dead',
        url: 'www.bushFire.com',
        img: 'https://clutchpoints.com/wp-content/uploads/2020/01/Lakers-news-Celebrities-react-to-tragic-death-of-Kobe-Bryant-and-his-daughter-Gigi-ADD-when-you-see.jpg',
        month: 'January',
        desc: 'Kobey and her daughter 23 died in Chopper crash'
    },
    {
        title: 'Irfan Khan is Dead',
        url: 'www.bushFire.com',
        img: 'https://resize.indiatv.in/resize/newbucket/1200_675/2020/04/irrfankhandeath-1588160513.jpg',
        month: 'May',
        desc: 'Irfan Khan was Suffering form cancer'
    },
    {
        title: 'India 21 day LockDown',
        url: 'www.bushFire.com',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYMj3KcK1QGvVrBrxqVhlhRjEmadvueFp0jg&usqp=CAU',
        month: 'January',
        desc: 'PM MODI announce 21 days nationwide Lockdown'
    },
    {
        title: '20 Indian Soldiers were killed by Chinese forces',
        url: 'www.bushFire.com',
        img: 'https://fighterjetsworld.com/wp-content/uploads/2020/06/20-Indian-Soldiers-killed.jpg',
        month: 'January',
        desc: 'Kobey and her daughter 23 died in Chopper crash'
    }]);
    }

    getCards(){
      const cards =  this.state.tragedy.map((card => {
            return (
                <Card key={card.title} data={card} />
            )
        }));
        return cards;
    }

    render() {
        return (
            <div className="card-container">
                {this.getCards()}
            </div>
        );
    }
}