import styled from "styled-components";

export default function Login() {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

  function toLogin(event) {
    event.preventDefault();
    console.log("login");
  }

  return (
    <Container>
      <Holder>
        <Logo>MyWallet</Logo>
        <ContainerForm>
          <form onSubmit={toLogin}>
            <Email
              type="email"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <Password
              type="password"
              //value={senha}
              //onChange={(e) => setSenha(e.target.value)}
              placeholder="Password"
            />
          </form>
        </ContainerForm>
        <LoginButton>Login</LoginButton>
        <RegisterNow>Is it your first time here? Register now!</RegisterNow>
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

const Holder = styled.div`
  height: auto;
  padding-top: calc(100vh / 4);
`;

const Logo = styled.h1`
  color: #ffffff;
  font-size: 32px;
  line-height: 50px;
  font-family: Saira Stencil One;
  text-align: center;
  margin-bottom: 25px;
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 0 auto;
  text-align: center;
`;

const Email = styled.input`
  width: 326px;
  height: 58px;
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
  padding-left: 15px;
  font-family: Raleway;
  font-size: 20px;

  ::placeholder {
    font-family: Raleway;
    font-size: 20px;
    color: #000000;
  }
`;

const Password = styled.input`
  width: 326px;
  height: 58px;
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
  padding-left: 15px;
  font-family: Raleway;
  font-size: 20px;

  ::placeholder {
    font-family: Raleway;
    font-size: 20px;
    color: #000000;
  }
`;

const LoginButton = styled.button`
  width: 326px;
  height: 46px;
  border-radius: 5px;
  background-color: #a328d6;
  border: none;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  font-family: Raleway;
  margin-left: calc((100vw / 2) - 326px / 2);
  margin-bottom: 30px;
`;

const RegisterNow = styled.h2`
  font-weight: bold;
  font-size: 15px;
  font-family: Raleway;
  line-height: 18px;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
`;