import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    background-color: white;
    height: 70rem;
    width: 45rem;
    border-radius: 2rem;
    overflow: hidden;
  }
  .order-summary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4.8rem;
  }

  .order-summary h1 {
    font-weight: 800;
    font-size: 2.6rem;
    color: hsl(223, 47%, 23%);
  }

  .order-summary p {
    font-size: 1.6rem;
    line-height: 2rem;
    text-align: center;
    color: hsl(224, 23%, 55%);
    border: none;
  }
  .annual-plan {
    display: flex;
    background: #f8f9fe;
    width: 100%;
    height: 10rem;
    border-radius: 1rem;
    /* justify-content: space-around; */
    padding: 2.5rem;
    align-items: center;
    margin-bottom: 3rem;
  }

  .annual-plan img {
    /* padding-right: 1.7rem; */
    margin-right: 2rem;
  }

  .rate {
    flex-grow: 1;

    line-height: 0.5rem;
  }
  .rate h3 {
    font-weight: 800;
    font-size: 1.25rem;
    color: #21314b;
  }

  .rate span {
    font-size: 1.6rem;
    color: #7b8096;
  }

  .change {
    text-decoration: underline;
    font-size: 1.6rem;
    font-weight: 600;
    color: #4e3cdc;
  }
  .change:hover {
    color: #766cf1;
    text-decoration: none;
  }

  .image {
    background: #ffffff;
    /* border-radius: 50%; */
    height: auto;
    width: 100%;
    overflow: hidden;
  }

  image img {
    object-fit: cover;
  }

  .btn-proceed {
    width: 100%;
    background-color: #382ae1;
    border: none;
    border-radius: 1rem;
    height: 5rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 3.5rem;
    box-shadow: 0 13px 10px rgba(82, 12, 246, 0.25);
    cursor: pointer;
  }

  .btn-proceed:hover {
    background-color: #766cf1;
  }
  .btn-cancel {
    background: none;
    border: none;
    font-size: 1.5rem;
    font-weight: 700;
    color: #7d85a9;
    cursor: pointer;
  }
`;

export default Wrapper;
