import "./Details.css";
import opapix2 from "../images/opapix2.jpg";
import opapix1 from "../images/opapix1.jpg";
const Blog = () => {
  return (
    <>
      <div className=" details">
        <div className=" detailsBox">
          <h2>Blog</h2>
          <img className=" projectImg" src={opapix2} alt="projectImg" />

          <h2>OPA Members with Prime Minister</h2>
          <p>
            The event of the Coronation and recognition of the Prime Minister of
            Okoloma Community in Afam, the person of Chief Monday Hart (Oyi)
            Prime Minister in his full regalia.
          </p>
          <img className=" projectImg" src={opapix1} alt="projectImg" />

          <h2>Prime Minister Ceremony</h2>
          <p>
            The event of the Coronation and recognition of the Prime Minister of
            Okoloma Community in Afam.
          </p>
        </div>
      </div>
    </>
  );
};
export default Blog;
