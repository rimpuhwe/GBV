import React from "react";
import { useState, useEffect } from "react";
import Button from "../button/Button";
import { motion } from "framer-motion";
import "../Home/Home.css";

const text = [
  { text: "Together, We Can End Gender-Based Violence" },
  { text: "Hand on Hand , We can end Gender-Based Violence" },
  { text: "Be aware of the violence you are facing" },
  { text: "Safe place to get help and support" },
];
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full relative z-1">
        <motion.img
          src="https://www.dsw.org/wp-content/uploads/2023/12/END-gbv-1.jpg"
          alt="stop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          width="100%"
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.p
          className="absolute top-80 left-10 text-3xl font-bold text-white z-3 pop-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {text[currentIndex].text}
        </motion.p>
      </div>
      <div>
        <section>
          <h2>Understanding Gender-Based Violence (GBV)</h2>
          <p>
            Gender-Based Violence (GBV) is a global crisis affecting individuals
            across all demographics, especially women, girls, and marginalized
            groups. It refers to harmful acts directed at a person based on their
            gender identity and encompasses physical, sexual, psychological, and
            economic abuse. This violence often arises from unequal power
            dynamics, cultural norms, and systemic gender inequalities. <br /><br /> GBV is a
            severe violation of human rights with devastating consequences.
            Survivors often experience physical injuries, mental health challenges
            such as anxiety and depression, social isolation, and economic
            hardship. Beyond the individual, GBV has a ripple effect on families,
            communities, and society, creating cycles of fear, trauma, and poverty
          </p>
        </section>
        <section>
          <h2>Why We Must Act</h2>
          <p>
            The prevalence of GBV remains alarmingly high. According to global
            statistics:
          </p>
          <ul>
            <li>
              <strong>Physical Violence:</strong> Domestic violence, assault
            </li>
            <li>
              <strong>Sexual Violence:</strong> Rape, sexual harassment, human
              trafficking
            </li>
            <li>
              <strong>Emotional/Psychological Abuse:</strong> Verbal abuse,
              manipulation, threats
            </li>
            <li>
              <strong>Economic Abuse:</strong> Controlling access to financial
              resources
            </li>
          </ul>
          <p>
            Existing platforms and services for reporting and support often fall
            short, failing to provide timely, anonymous, and comprehensive
            assistance. This gap leaves many survivors feeling helpless and alone.
            It's time for a new solution—one that combines technology, innovation,
            and empathy to give survivors the voice and support they need.
          </p>
        </section>
        <section>
          <h2>Introducing EchoSafe: A Lifeline for Survivors</h2>
          <p>
            In response to these challenges, EchoSafe was born—a digital platform
            designed to empower survivors of Gender-Based Violence by offering a
            secure, anonymous space to report incidents and access critical
            resources. EchoSafe represents a new approach to tackling GBV by
            integrating technology with survivor-centered care.
          </p>
          <p>Key features of EchoSafe include:</p>
          <ul>
            <li>
              <strong>Anonymous Reporting:</strong>Survivors can report incidents
              without revealing their identity
            </li>
            <li>
              <strong>AI-Based Case Prioritization</strong>Ensures that urgent
              cases are flagged for immediate response.
            </li>
            <li>
              <strong>Multi-Channel Accessibility: </strong>Available via web,
              mobile app, and SMS to reach survivors in diverse environments.
            </li>
            <li>
              <strong>Comprehensive Support Services:</strong>Access to legal aid,
              psychological counseling, medical assistance, and emergency
              shelters—all in one place.
            </li>
          </ul>
        </section>
        <section className="commitment">
          <h2>Our Commitment</h2>
          <p>
            We are committed to creating a future free from violence. Through
            EchoSafe, we aim to:
          </p>
          <ol>
            <li>
              Break the silence surrounding GBV and empower survivors to seek
              help.
            </li>
            <li>
              Raise awareness and educate communities on recognizing and
              preventing GBV.
            </li>
            <li>
              Connect survivors with life-saving services quickly and efficiently.
            </li>
          </ol>
          <p>
            By combining innovation, advocacy, and compassion, we believe we can
            create a world where survivors no longer suffer in silence, where
            communities come together to protect the vulnerable, and where gender
            equality is no longer just a dream but a reality.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
