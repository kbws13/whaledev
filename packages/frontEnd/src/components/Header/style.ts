import styled from 'styled-components'

export const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  height: inherit;
  color: #000;

  background-color: #fff;

  padding: 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    h1 {
      font-size: 20px;
      font-weight: 700;
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }

  .head-right {
    display: flex;
    align-items: center;
    user-select: none;

    & > div {
      margin: 0 5px;
    }

    & > div:nth-child(1),
    & > div:nth-child(3) {
      cursor: pointer;
    }
  }
`
