import React from "react";
import styled from "styled-components";
// import img1 from 'http://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png';
// import img2 from 'https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png';
// import img3 from 'https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png';
// import img4 from 'https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png';
// import img5 from 'https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png';

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Comapnies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            {/* <img src={img1}  alt="trusted-brands"/> */}
          </div>
          <div className="slide">
            {/* <img src={img2}  alt="trusted-brands"/> */}
          </div>
          <div className="slide">
            {/* <img src={img3} alt="trusted-brands"/> */}
          </div>
          <div className="slide">
            {/* <img src={img4} alt="trusted-brands"/> */}
          </div>
          <div className="slide">
            {/* <img src={img5} alt="trusted-brands"/> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
