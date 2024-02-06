import "./Home.css";
import { Link } from "react-router-dom";
import { lists } from "../components/Data";
import Cards from "../components/Cards";
// import ebere from "../images/ebere.png";
import jaja from "../images/jaja.jpg";
import ukegroups from "../images/ukegroups.mp4";
import culture from "../images/culture.mp4";

const Home = () => {
  // console.log(lists);
  return (
    <>
      <div className="homeContainer">
        <h1 className="heading">
          The Making of
          <span className="history"> Historical Ibani People in Opobo</span> and
          its Environs.
        </h1>
        <p className="subheading">We are the Trailblazers.</p>
        <span className="motto">(Mingi Chikiri fa fagha)</span>
        <Link to="/details">
          <button className="readmore btn">Read More</button>
        </Link>
      </div>

      {/* <img className="headerImage" src={ebere} alt="headerImage" /> */}
      <img className="headerImage" src={jaja} alt="headerImage" />
      <div className="video">
        <video className="headerImage" src={ukegroups} autoPlay muted loop />
      </div>
      <div className="executive"> THE OPA EXECUTIVE</div>

      <section className="homeCard">
        {lists.map((item) => {
          return <Cards item={item} key={item.id} />;
        })}
      </section>
      <div className="video">
        <video className="headerImage" src={culture} autoPlay muted loop />
      </div>
    </>
  );
};
export default Home;
