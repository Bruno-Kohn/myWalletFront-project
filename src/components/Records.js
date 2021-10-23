import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import axios from "axios";
import UserContext from "../contexts/UserContext.js";
import { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import dayjs from "dayjs";

export default function Records() {
  const { userData, setUserData } = useContext(UserContext);
  const [recordsList, setRecordsList] = useState([]);
  const tknLogin = userData.token;
  const history = useHistory();

  if(!tknLogin) {
    history.push("/");
  }

  useEffect(
    () => {
      const header = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };
      console.log(userData.token, "meu tokennn");
      axios.get(`http://localhost:4000/`, header);
      const req = axios.get(`http://localhost:4000/records`, header);
      req.then((resp) => {
        console.log(resp, "opa1");
        console.log(resp.data, "opa2");
        setRecordsList(resp.data);
      });
    },
    // eslint-disable-next-line
    []
  );

  function toExitAccount() {
    localStorage.removeItem("loginUser");
    setUserData({});
    history.push("/");
  }

  return (
    <Container>
      <Top>
        <h1>Hello, {userData.name}</h1>
        <IoExitOutline color="#FFFFFF" size={40} onClick={toExitAccount}/>
      </Top>
      <BackContainer>
      <RecordsContainer>
        {recordsList.length === 0 ? (
          <h1>You don't have any records yet</h1>
        ) : (
          recordsList.map((i) => {
            return (
              <RecordsDisplay>
                <Description>
                  <DescriptionDate>{dayjs(i.date).format('DD/MM')}</DescriptionDate>
                  <DescriptionInfo>{i.description}</DescriptionInfo>
                </Description>
                <RecordsValue>{`$ ${i.value}.00`}</RecordsValue>
              </RecordsDisplay>
            );
          })
        )}
      </RecordsContainer>
      <Net>
        <NetDescription>
          {recordsList.length === 0 ? "" : <h1>Net</h1>}
        </NetDescription>
        <NetValue>
          {recordsList.length === 0 ? "" : <h1>{recordsList.reduce((a,b) => Number(a.value) + Number(b.value))}</h1>}
        </NetValue>
      </Net>
      </BackContainer>
      <Bottom>
        <Link to="/income">
          <NewIncome>
            <FiPlusCircle color="#FFFFFF" size={35} />
            <h2>New income</h2>
          </NewIncome>
        </Link>
        <Link to="/expense">
          <NewExpense>
            <FiMinusCircle color="#FFFFFF" size={35} />
            <h2>New expense</h2>
          </NewExpense>
        </Link>
      </Bottom>
    </Container>
  );
}

//----- Styled Components

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #8c11be;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  h1 {
    color: #ffffff;
    font-size: 26px;
    font-family: Raleway;
    font-weight: bold;
    line-height: 31px;
  }
`;

const BackContainer = styled.div`
background-color: #FFF;
margin: 0 20px;
border-radius: 5px;
`

const RecordsContainer = styled.div`
  height: 400px;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
  padding-top: 10px;
  overflow: scroll;

  h1 {
    font-family: Raleway;
    font-size: 20px;
    text-align: center;
    color: #868686;
    margin-top: 200px;
  }
`;

const RecordsDisplay = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  margin-bottom: 5px;
`;

const Description = styled.div`
  display: flex;
`;

const DescriptionDate = styled.div`
  font-family: Raleway;
  font-size: 20px;
  color: #c6c6c6;
  margin-right: 10px;
`;

const DescriptionInfo = styled.div`
  font-family: Raleway;
  font-size: 20px;
  color: #000000;
`;

const RecordsValue = styled.div`
  font-family: Raleway;
  font-size: 20px;
  color: #c70000;
`;

const Net = styled.div`
  height: auto;
  background-color: #fff;
  margin: 0 0 20px 0;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 12px;
`;

const NetDescription = styled.div`
  font-family: Raleway;
  font-weight: bold;
  font-size: 23px;
  color: #000000;
`;

const NetValue = styled.div`
  font-family: Raleway;
  font-size: 21px;
  color: #03ac00;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px 20px;
`;

const NewIncome = styled.div`
  width: 180px;
  height: 150px;
  background-color: #a328d6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 100px 12px 12px;

  h2 {
    color: #ffffff;
    font-family: Raleway;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 2px;
  }
`;

const NewExpense = styled.div`
  width: 180px;
  height: 150px;
  background-color: #a328d6;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 100px 12px 12px;

  h2 {
    color: #ffffff;
    font-family: Raleway;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 2px;
  }
`;
