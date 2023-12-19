import styled from "styled-components";

const Wrapper = styled.nav`
  .navigation {
    position: fixed;
    width: 300px;
    height: 100%;
    background: var(--primary-500);
    border-left: 10px solid var(--primary-500);
    transition: 0.5s;
    overflow: hidden;
  }
  .navigation.active {
    width: 80px;
  }

  .navigation ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .navigation ul li {
    position: relative;
    width: 100%;
    list-style: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  .navigation ul li:hover,
  .navigation ul li.hovered {
    background-color: var(--white);
  }

  .navigation ul li:nth-child(1) {
    margin-bottom: 40px;
    pointer-events: none;
  }

  .navigation ul li a {
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: var(--white);
  }
  .navigation ul li:hover a,
  .navigation ul li.hovered a {
    color: var(--primary-500);
  }

  .navigation ul li a .icon {
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    font-size: 1.75rem;
    line-height: 75px;
    text-align: center;
  }
  .navigation ul li a .icon ion-icon {
    font-size: 1.75rem;
  }

  .navigation ul li a .title {
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: start;
    white-space: nowrap;
  }

  /* --------- curve outside ---------- */
  .navigation ul li:hover a::before,
  .navigation ul li.hovered a::before {
    content: "";
    position: absolute;
    right: 0;
    top: -50px;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 35px 35px 0 10px var(--white);
    pointer-events: none;
  }
  .navigation ul li:hover a::after,
  .navigation ul li.hovered a::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: -50px;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 35px -35px 0 10px var(--white);
    pointer-events: none;
  }
  @media (max-width: 991px) {
    .navigation {
      left: -300px;
    }
    .navigation.active {
      width: 300px;
      left: 0;
    }
  }
  @media (max-width: 480px) {
    .navigation {
      width: 100%;
      left: -100%;
      z-index: 1000;
    }
    .navigation.active {
      width: 100%;
      left: 0;
    }
    .toggle {
      z-index: 10001;
    }
  }
`;
export default Wrapper;
