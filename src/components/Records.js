import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export default function Records() {
  const records = [
    "primeiro",
    "primeiro",
    "primeiro",
    "primeiro",
    "primeiro",
    "primeiro",
    "primeiro",
    "primeiro",
    "primeiro",
    "primeiro",
    "primeiro",
    "primeiro",
  ];

  return (
    <Container>
      <Top>
        <h1>Hello, Fulano</h1>
        <IoExitOutline color="#FFFFFF" size={40} />
      </Top>
      <RecordsContainer>
        {records.map((i) => {
          return (
            <RecordsDisplay>
              <Description>
                <DescriptionDate>19/10</DescriptionDate>
                <DescriptionInfo>Mercado</DescriptionInfo>
              </Description>
              <RecordsValue>542.54</RecordsValue>
            </RecordsDisplay>
          );
        })}
      </RecordsContainer>
      <Net>
        <NetDescription>Net</NetDescription>
        <NetValue>1,435,345.98</NetValue>
      </Net>
      <Bottom>
        <NewIncome>
          <FiPlusCircle color="#FFFFFF" size={35} />
          <h2>New income</h2>
        </NewIncome>
        <NewExpense>
          <FiMinusCircle color="#FFFFFF" size={35} />
          <h2>New expense</h2>
        </NewExpense>
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

const RecordsContainer = styled.div`
  height: 400px;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
  margin: 0 20px;
  padding-top: 10px;
  overflow: scroll;
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
  margin: 0 20px 20px 20px;
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
