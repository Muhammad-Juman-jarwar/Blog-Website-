import React from "react";
import about1 from '../images/about/person.jpg';
import about2 from '../images/about/about2.jpg';
import about3 from '../images/about/about3.jpg';
import Abouticon1 from '../images/about/About_icon1.png';
import Abouticon2 from '../images/about/About_icon2.png';
import Abouticon3 from '../images/about/About_icon3.png';
import classes from './About.module.css';

const About = () => {
  return (
    <React.Fragment>
      <h1 className='text-decoration-underline text-center my-4'><strong> About Us</strong></h1>
      <section className='about_section mt-60'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12'>
              <figure className={classes.imageText}>
                <div className={classes.aboutThumb}>
                  <img className={classes.personImg} src={about1} alt='' />
                </div>
                <figcaption className={classes.aboutContent}>
                  <h1 className='my-4'>Mehran Khan</h1>
                  <h3 className='my-4'>Founder and CEO of World Reknown Organization</h3>
                  <p>
                    Adipiscing lacus ut elementum, nec duis, tempor litora
                    turpis dapibus. Imperdiet cursus odio tortor in elementum.
                    Egestas nunc eleifend feugiat lectus laoreet, vel nunc
                    taciti integer cras. Hac pede dis, praesent nibh ac dui
                    mauris sit. Pellentesque mi, facilisi mauris, elit sociis
                    leo sodales accumsan. Iaculis ac fringilla torquent lorem
                    consectetuer, sociosqu phasellus risus urna aliquam, ornare.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <div className='about_gallery_section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-6'>
              <article className='single_gallery_section'>
                <figure>
                  <div className='gallery_thumb'>
                    <img src={about2} alt='' />
                  </div>
                  <figcaption className='about_gallery_content'>
                    <h3>What do we do?</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto. The point of using Lorem Ipsum is that
                      it has a more-or-less normal distribution of letters, as
                      opposed to using ‘Content here, content here’, making it
                      look like readable English.
                    </p>
                  </figcaption>
                </figure>
              </article>
            </div>
            <div className='col-lg-6 col-md-6'>
              <article className='single_gallery_section'>
                <figure>
                  <div className='gallery_thumb'>
                    <img src={about3} alt='' />
                  </div>
                  <figcaption className='about_gallery_content'>
                    <h3>History Of Us</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto. The point of using Lorem Ipsum is that
                      it has a more-or-less normal distribution of letters, as
                      opposed to using ‘Content here, content here’, making it
                      look like readable English.
                    </p>
                  </figcaption>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className='choseus_area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-4'>
              <div className='single_chose'>
                <div className='chose_icone'>
                  <img src={Abouticon1} alt='' />
                </div>
                <div className='chose_content'>
                  <h3>Money Back Guarantee</h3>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut purus
                    at et alias, nulla ornare velit amet
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='single_chose'>
                <div className='chose_icone'>
                  <img src={Abouticon2} alt='' />
                </div>
                <div className='chose_content'>
                  <h3>Creative Writting</h3>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut purus
                    at et alias, nulla ornare velit amet
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4'>
              <div className='single_chose'>
                <div className='chose_icone'>
                  <img src={Abouticon3} alt='' />
                </div>
                <div className='chose_content'>
                  <h3>High Quality</h3>
                  <p>
                    Erat metus sodales eget dolor consectetuer, porta ut purus
                    at et alias, nulla ornare velit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;
