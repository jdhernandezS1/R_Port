import { Fragment } from "react"
import styles from "../../style/content.module.css";
import { IoIosPerson, IoMdNavigate, IoIosCall, IoIosMail } from "react-icons/io";

const Resume = () => {
  let Content = styles.content;
  let list = styles.list;
  let Icon = styles.icon;
  let col1 = styles.contentCol1;
  let col2 = styles.contentCol2;
  let w100 = styles.w100;
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
        <div className={col1}>


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
          <div className={w100} data-dates="03/2022 - 03/2023">
            <h3>Code institute  ( 03/2022 - 03/2023 )</h3>
            <p>Full Stack Software Developer </p>
            <a
              href="https://www.credential.net/7baa32c1-921d-4399-8881-dec2a782d485#gs.v65mt7" target="_blank" rel="noopener noreferrer">Credential</a>
          </div>
          <div data-dates="08/2021 - 02/2022">
            <h3>City Language School ( 08/2021 - 02/2022 )</h3>
            <p> English course </p>
          </div>
          <div className={w100} data-dates="2020">
            <h3>Coursera ( 2020 )</h3>
            <p className={w100}> Programming Foundations with JavaScript,
              HTML and CSS</p>
            <a href="https://coursera.org/share/387155c21018c6e0a257a1e1b3e66b4f" target="_blank" rel="noopener noreferrer">Credential</a>
          </div>
          <div data-dates="2020">
            <h3>Coursera ( 2020 )</h3>
            <p> Introduction to self-driving cars</p>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/A6RQTWZJGP3S" target="_blank" rel="noopener noreferrer">Credential</a>
          </div>

          <div data-dates="02/2015- 08/2020">
            <h3>Universidad Del Quindio ( 02/2015- 08/2020 ) </h3>
            <h3>(High Quality certification)</h3>
            <p>Electronic Engineer</p>
            <a href="https://wallet.xertify.co/certificates/FFF45B0AA001" target="_blank" rel="noopener noreferrer">Credential</a>
          </div>
          <div data-dates="2007 - 2012">
            <h3>Zakurayima ( 2007 - 2012 )</h3>
            <p>High School</p>
          </div>
          <div data-dates="2000 - 2006">
            <h3>Los angeles (2000 - 2006 )</h3>
            <p>School</p>
          </div>
          <hr />
          <div >
            <h1 >
              Work storie
            </h1>
          </div>
          <ul>

            <div data-dates="07/2023 - actually">
              <li>
                <h3>Locaverse ( 06/2023 - actually )</h3>
                <p>BackEnd Developer </p>
              </li>
            </div>
            <div data-dates="07/2022 - 10/2022">
              <li>
                <h3>Charme Hotel Torchio ( 07/2022 - 10/2022 )</h3>
              </li>
              <p>House Keeper </p>
            </div>
            <div data-dates="08/2021 - 02/2022">
              <li>
                <h3>Barnacles Hostel Dublin ( 08/2021 - 02/2022 )</h3>
              </li>
              <p> Porter Linnen</p>
            </div>
            <div data-dates="02/2016- 06/2019">
              <li>
                <h3>Universidad Del Quindio ( 02/2016- 06/2019 )</h3>
              </li>
              <p>Logistic and Recreation</p>
            </div>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Resume;
