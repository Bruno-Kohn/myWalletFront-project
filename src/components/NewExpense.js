import styled from "styled-components";
import { TiArrowBackOutline } from "react-icons/ti";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext.js";
import { useContext, useState } from "react";
import axios from "axios";

export default function NewExpense() {
  const history = useHistory();
  const { userData } = useContext(UserContext);
  const [expenseValue, setExpenseValue] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [clicked, setClicked] = useState(false);

  function toAddNewExpense(event) {
    event.preventDefault();
    console.log("new expense added"); //remove later
    setClicked(true);
    const body = {
      expenseValue,
      expenseDescription,
    };

    const req = axios.post(`http://localhost:4000/expense`, body, { headers: {
      Authorization: `Bearer ${userData.token}`
    }});

    req.then((resp) => {
      history.push("/records");
    });

    req.catch((error) => {
      setExpenseValue("");
      setExpenseDescription("");
      setClicked(false);
      alert("Oh no! Something went wrong. Please try again");
    });
  }

  return (
    <Container>
      <Top>
        <h1>New expense</h1>
        <Link to="/records">
          <TiArrowBackOutline color="#FFFFFF" size={35} />
        </Link>
      </Top>
      <Holder>
        <form onSubmit={toAddNewExpense}>
          <ExpenseValue
            type="number"
            min="1"
            value={expenseValue}
            onChange={(e) => setExpenseValue(e.target.value)}
            placeholder="value"
            disabled={clicked}
          />
          <ExpenseDescription
            type="text"
            value={expenseDescription}
            onChange={(e) => setExpenseDescription(e.target.value)}
            placeholder="description"
            disabled={clicked}
          />
          <SaveButton disabled={clicked} type="submit">Save expense</SaveButton>
        </form>
      </Holder>
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

const Holder = styled.div`
  height: auto;
  padding-top: 20px;
`;

const ExpenseValue = styled.input`
  width: 360px;
  height: 58px;
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
  padding-left: 15px;
  font-family: Raleway;
  font-size: 20px;
  margin-left: calc((100vw / 2) - 360px / 2);

  ::placeholder {
    font-family: Raleway;
    font-size: 20px;
    color: #000000;
  }
`;

const ExpenseDescription = styled.input`
  width: 360px;
  height: 58px;
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
  padding-left: 15px;
  font-family: Raleway;
  font-size: 20px;
  margin-left: calc((100vw / 2) - 360px / 2);

  ::placeholder {
    font-family: Raleway;
    font-size: 20px;
    color: #000000;
  }
`;

const SaveButton = styled.button`
  width: 360px;
  height: 46px;
  border-radius: 5px;
  background-color: #a328d6;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  font-family: Raleway;
  margin-left: calc((100vw / 2) - 360px / 2);
`;
