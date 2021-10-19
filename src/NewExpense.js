import styled from "styled-components";

export default function NewExpense() {
  function toLogin(event) {
    event.preventDefault();
    console.log("login");
  }

  return (
    <Container>
      <Top>
        <h1>New expense</h1>
      </Top>
      <Holder>
        <form onSubmit={toLogin}>
          <ExpenseValeu
            type="number"
            //value={email}
            //onChange={(e) => setEmail(e.target.value)}
            placeholder="value"
          />
          <ExpenseDescription
            type="text"
            //value={senha}
            //onChange={(e) => setSenha(e.target.value)}
            placeholder="description"
          />
          <SaveButton>Save expense</SaveButton>
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

const ExpenseValeu = styled.input`
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
