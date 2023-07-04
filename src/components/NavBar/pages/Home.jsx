import styles from "../../style/content.module.css";

const Home = () => {
  let Content = styles.content;
  let col2 = styles.contentCol2;
  let col1 = styles.contentCol1;

  return (
    <>
      <h1 className='MainTitle'>
        Wellcome To David's Portfolio
      </h1>
      <div className='ProfPicContainer'>
        <picture>
          <img className='ProfilePic' src="https://avatars.githubusercontent.com/u/48605281?v=4" alt="David Profile foto" />
        </picture>
      </div>
      <div className={Content}>

        <div className={col1}>
          <h1>Software Skills</h1>
          <ul>
            <li>
              <h3> Programming Languages</h3>
              <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++ icon" />
              <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python icon" />
              <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
              <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
              <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
              <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
            </li>
            <li>

              <h3> Frameworks </h3>
              <img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="React" />
              <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
              <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" />
              <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="Flask" />

            </li>
            <li>

              <h3>Databases and Platforms</h3>
              <img src="https://img.shields.io/badge/PgAdmin-white?style=for-the-badge&logo=postgresql&logoColor=white&color=blue" alt="PgAdmin" />
              <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgresql" />
              <img src="https://img.shields.io/badge/AWS-white?style=for-the-badge&logo=amazon&logoColor=orange" alt="Amazon services" />
              <img src="https://img.shields.io/badge/My-SQL-orange?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
            </li>
            <li>

              <h3>
                Deployment Platforms
              </h3>
              <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku" />
              <img src="https://img.shields.io/badge/Vercel-fff?style=for-the-badge&logo=vercel&logoColor=black" alt="Heroku" />

            </li>
            <li>
              <h3>
                API
              </h3>
              <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white" alt="Stripe" />
              <img src="https://img.shields.io/badge/Gspread-626CD9?style=for-the-badge&logo=Google&logoColor=white" alt="Gspread" />
            </li>

            <li>
              <h3>
                Control Version
              </h3>
              <img src="https://img.shields.io/badge/Git%20-%23302F2F.svg?&style=for-the-badge&logo=Git&logoColor=F05032" alt="Git" />
              <img src="https://img.shields.io/badge/GitHub%20-%23181717.svg?&style=for-the-badge&logo=GitHub&logoColor=FFFFFF" alt="GitHub" />
            </li>
            <li>

              <h3>
                BackEnd Api Test

              </h3>
              <img src="https://img.shields.io/badge/Postman-black?style=for-the-badge&logo=postman&logoColor=orange" alt="Postman" />


            </li>
            <li>
              <h3>
                Operative Systems

              </h3>
              <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux" />
              <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" alt="Windows" />

            </li>
          </ul>
        </div>
        <div className={col2}>
          <h2>
            About Me
          </h2>
          <ul>
            <li>
              <h3>
                What do I do?
              </h3>
              <p>
                Skilled Engineer specialized in Full Stack Development with diverse life and technical experience.
                Expertise in frontend and backend technologies, delivering seamless web applications. Unique perspective and problem-solving abilities.
                Strong collaboration and communication skills. Passionate about staying up-to-date with industry trends and incorporating cutting-edge technologies.
                Ready to contribute to a dynamic organization.
              </p>

            </li>
            <li>
              <h3>
                Why hire me?
              </h3>
              <p>
                <strong>
                  Hardworking and Dedicated: </strong> I am committed to putting in the effort required to deliver high-quality results. I take pride in my work and consistently strive for excellence.

                Full Stack Proficiency: With expertise across the entire technology stack, I am capable of handling projects from end to end. This allows for seamless integration and efficient development.
              </p>
              <p>
                <strong> Effective Communication: </strong>  I excel in communication and thrive in collaborative, vibrant teams. I believe that open and clear communication is essential for successful project execution.
              </p>
              <p>

                <strong> Self-Motivated and Independent:</strong> While I thrive in team environments, I am also a self-starter when working independently. I am proactive in finding solutions and taking initiative to overcome obstacles.
              </p>
              <p>

                <strong> Optimistic Problem Solver:</strong> I approach challenges with a positive mindset and firmly believe that every obstacle has a solution. I enjoy tackling problems head-on and finding creative ways to resolve them.
              </p>
              <p>

                <strong> Adaptability and Learning:</strong> I am passionate about staying current with the latest industry trends and technologies. I am quick to adapt to new tools and methodologies, ensuring that I am always at the forefront of innovation.
              </p>
              <p>

                <strong>Strong Work Ethic:</strong> I bring a strong work ethic to every project, demonstrating a high level of professionalism, reliability, and accountability. I am committed to meeting deadlines and exceeding expectations.
              </p>
            </li>
            <li>
              <h3>
                How do I do it?
              </h3>
              <p>
                I begin planning and following a schematic as function. I know that the philosophies of effective design combined with application rate, security and reliability combining to reach a great user experience and performance.
              </p>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Home;
