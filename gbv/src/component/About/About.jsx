import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-us">
      <div className="about-img">
        <img
          src="https://jwbfamilylaw.com/wp-content/uploads/2023/10/Where-can-you-find-a-trustworthy-domestic-violence-lawyer-in-San-Diego-CA.jpg"
          alt="about-us"
        />
      </div>
      <section className="bg-purple-50 text-center mx-auto">
        <div className="text-center w-60 quote">
          <span className="font-thin  text-lg">
            "<br/> You are not alone, there is help and hope for a better tomorrow. <br/>"
          </span>
        </div>
      </section>
      <section className="mission-vision">
        <div>
          <h2>Our Mission</h2>
          <p>
            To end gender-based violence by advocating for women's and girls'
            rights, ensuring equality through education, and empowering
            survivors to seek justice and support.
          </p>
        </div>
        <div>
          <h2>Our Vision</h2>
          <p>
            A world where everyone can live free from violence, with access to
            the support and resources they need to thrive.
          </p>
        </div>
      </section>
      <hr />
      <section className="values">
        <h2>Our Core Values</h2>
        <p>
          We are guided by a set of core values that define who we are and how
          we operate:
        </p>
        <ul>
          <li>
            <strong className="font-bold text-violet-400 text-xl uppercase">Empathy and Compassion</strong>
            <br />
            We prioritize the well-being of survivors, treating them with
            kindness and understanding.
          </li>
          <li>
            <strong className=" font-bold text-violet-400 text-xl uppercase">Confidentiality and Privacy</strong>
            <br />
            Protecting survivors' data and identities is our top priority. We
            maintain the highest standards of security and confidentiality.
          </li>
          <li>
            <strong className="font-bold text-violet-400 text-xl uppercase">Collaboration and Community</strong>
            <br />
            We believe in the power of working together with communities, NGOs,
            and law enforcement to create real change.
          </li>
          <li>
            <strong className="font-bold text-violet-400 text-xl uppercase">Innovation and Accessibility</strong>
            <br />
            Leveraging technology to provide accessible solutions for survivors,
            especially in underserved areas.
          </li>
          <li>
            <strong className="font-bold text-violet-400 text-xl uppercase">Empowerment and Advocacy:</strong>
            <br />
            We empower survivors to take control of their lives and advocate for
            policies that protect their rights.
          </li>
        </ul>
      </section>
      <section className="bg-indigo-500/30">
        <h2 className="h2-impact">Our Impact</h2>
        <div className="impact-container w-full">
          <div className="impact-case">
            <h2>1,000+</h2>
            <span>
              We've provided survivors with professional guidance to help them
              reclaim their lives and rights.
            </span>
          </div>
          <div className="impact-case">
            <h2>20,000+</h2>
            <span>
              People reached through awareness campaigns. By engaging the
              public, we foster open conversations to break the stigma around
              GBV.
            </span>
          </div>
          <div className="impact-case">
            <h2>10</h2>
            <span>
              Partner organizations working together to combat GBV.
              Collaboration with shelters, NGOs, and legal aid organizations
              amplifies our impact.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
