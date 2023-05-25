import { Fragment } from "react"
import styles from "../../style/content.module.css";
import { IoIosPerson, IoMdNavigate, IoIosCall, IoIosMail } from "react-icons/io";

const Resume = () => {
  let Content = styles.content;
  let list = styles.list;
  let Icon = styles.icon;
  let col2 = styles.contentCol2;

  return (
    < >

      <h1 className='MainTitle'>
        Resume
      </h1>
      <div className='ProfPicContainer'>
        <picture>
          <img className='ProfilePic' src="https://avatars.githubusercontent.com/u/48605281?v=4" alt="David Profile foto" />
        </picture>
      </div>
      <div className={Content}>
        <div>


          <h2>Personal Information</h2>
          <ul className={list}>
            <li>
              <IoIosPerson className={Icon} />  Julio David Hernandez Segura
            </li>
            <li>
              <IoMdNavigate className={Icon} />   6516 Cugnasco, TI, Switzerland
            </li>
            <li>
              <IoIosCall className={Icon} />  +41 (0) 79 558 08 92
            </li>
            <li>
              <IoIosMail className={Icon} />    david-hd97@hotmail.com
            </li>
          </ul>
        </div>

        <div className={col2}>
          <div >
            <h1 >
              Studies
            </h1>
          </div>
          <div data-dates="03/2022 - 03/2023">
            <h3>Code institute</h3>
            <p>Full Stack Software Developer </p>
            <a
              href="https://www.credential.net/7baa32c1-921d-4399-8881-dec2a782d485#gs.v65mt7">Credential</a>
          </div>
          <div data-dates="08/2021 - 02/2022">
            <h3>City Language School</h3>
            <p> English course </p>
          </div>
          <div data-dates="2020">
            <h3>Coursera</h3>
            <p> Programming Foundations with JavaScript, HTML and CSS</p>
            <a href="https://coursera.org/share/387155c21018c6e0a257a1e1b3e66b4f">Credential</a>
          </div>
          <div data-dates="2020">
            <h3>Coursera</h3>
            <p> Introduction to self-driving cars</p>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/A6RQTWZJGP3S">Credential</a>
          </div>

          <div data-dates="02/2015- 08/2020">
            <h3>Universidad Del Quindio (High Quality certification)</h3>
            <p>Electronic Engineer</p>
            <a href="https://wallet.xertify.co/certificates/FFF45B0AA001">Credential</a>
          </div>
          <div data-dates="2007 - 2012">
            <h3>Zakurayima</h3>
            <p>High School</p>
          </div>
          <div data-dates="2000 - 2006">
            <h3>Los angeles</h3>
            <p>School</p>
          </div>
        <hr />
        <div >
          <h1 >
            Work storie
          </h1>
        </div>
          <div data-dates="07/2022 - 10/2022">
            <h3>Charme Hotel Torchio</h3>
            <p>House Keeper </p>
          </div>
          <div data-dates="08/2021 - 02/2022">
            <h3>Barnacles Hostel Dublin</h3>
            <p> Porter Linnen</p>
          </div>
          <div data-dates="02/2016- 06/2019">
            <h3>Universidad Del Quindio </h3>
            <p>Logistic and Recreation</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Resume;
