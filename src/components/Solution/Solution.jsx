import "./Solution.css";
import Office from "../../assets/tall.png";
import ServicesSection from "../ServicesSection/ServicesSection";

function Solution() {



  
  return (
    
 <>
    <div className="profile-card">
      {/* Left side - Dark panel with text */}
      <div className="profile-content">
        <h1 className="profile-title">
        Oluwapelumi Alesinloye-King (OAK)
        </h1>

        <h2 className="profile-text">
        <span className="highlight">Feminist, {""}Researcher, Pleasure Coach</span></h2>



        <p className="profile-text">
        I’m a Certified Holistic Sexuality Educator and a doctoral researcher at Indiana University Bloomington, where my work focuses on sexual and reproductive health behaviors. I hold a Master’s degree in Sexual, Reproductive, and Perinatal Health from Dalarna University in Sweden and bring over a decade of experience in research and advocacy. As a public health expert, I’ve carved out a niche at the intersection of reproductive justice, digital health innovation, and evidence-based intervention design.


        </p>

     

      
        {/* Hidden full story (you can later toggle this with a state to show/hide) */}
        <div className="full-story">
          <h2><span className="highlight">How It All Started</span></h2>
          <br />

          <p className="profile-text">
          My journey has been deeply rooted in transforming Nigeria’s sexual health landscape. I pioneered digital health strategies that reached more than 300,000 individuals through innovative platforms and strategic partnerships. I’m passionate about bridging the gap between research and real-world impact, especially in contexts where reproductive healthcare access is limited by legal and social barriers. My work has received international recognition, with features in publications like Der Spiegel and Republik.

          </p>




          <h2><span className="highlight">Fast Forward to 2022</span></h2>

          <p className="profile-text">

            <strong></strong><br />
            As both a researcher and educator, I specialize in designing culturally sensitive, evidence-based interventions that promote reproductive autonomy. My current research explores sexual health among African women in the diaspora, while my advocacy centers on expanding access to comprehensive sexuality education and reproductive health services.


          </p>

          <h2><span className="highlight">Finding My True Calling</span></h2>


          <p className="profile-text">
            <strong></strong><br />
            I strive to balance academic rigor with hands-on implementation—whether I’m training healthcare providers, mentoring emerging advocates, or developing sexuality education programs. My mission is to challenge stigma, foster open dialogue, and create inclusive spaces for marginalized communities to access the sexual and reproductive health care they deserve.





          </p>

        </div>
      </div>

      {/* Right side - Image */}
      <div className="profile-image-container">
        <img
          src={Office}
          alt="Real Desmond - Yellow Queen"
          className="profile-image"
        />
      </div>

    </div>
 </>

  );
}

export default Solution;