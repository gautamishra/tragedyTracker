import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './home.css';
import { Carousel } from 'react-responsive-carousel';
import { useHistory } from 'react-router-dom';



const data = [{
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
}];

const MONTHS = ['January','February', 'March', 'April' ,'May', 'June', 'July', 'August', 'September']


export default function HomeComponent () {

    const [selectedMonth, setMonth] = useState(-1);

    const history = useHistory();

    const handleClick = () => {
        history.push(`/Tragedy/${selectedMonth}`);
    };

    const handleChange = (e) => {
        setMonth(e.target.value);
    };

        return (
           <React.Fragment>
            <div className="carousal-container">
             <Carousel
                autoPlay
                infiniteLoop
                centerMode
                stopOnHover={false}
                showThumbs={false} >
                {getCarousalImg()}
            </Carousel>
            </div>
            <div className="form-container">

              <h3 >SELECT MONTH TO FIND LIST OF TRAGEDIES</h3> 
              <select onChange={handleChange}>
                    <option value="-1">select month</option>
                    {getOption()}
              </select>
              <br/>
              <button className={`btn-primary ${+selectedMonth === -1 ?'disabled':'' }` } disabled={+selectedMonth === -1} onClick={handleClick}>Search</button>
            </div>
        </React.Fragment>
            
        );

}

function getCarousalImg(){
    return data.map((img) => {
        return (
            <div key={img.title}>
            <img className="img-carousal" src={img.img} alt={img.title}/>
            <p className="legend">{img.desc}</p>
        </div>
        );
    });
}

function getOption(){
  return  MONTHS.map((mon, i) => {
    return (
        <option key={i} value={i}>{mon}</option>
    )
    })
}