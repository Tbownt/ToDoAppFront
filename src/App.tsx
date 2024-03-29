import { Button } from "antd";
import { useGetUnicornsQuery } from "./store/thunks";

const App = () => {
  // const { status, email } = useSelector((state: RootState) => state.auth);
  // const dispatch = useDispatch();
  const { data } = useGetUnicornsQuery();
  // const user = "frontend.lilhorse@yopmail.com";
  // const password = "123456";
  console.log(data, "data");
  return (
    <div>
      <h1>Hello</h1>

      {/* <p>{status}</p>
      <p>{email}</p> */}
      {/* Puedes mostrar un indicador de carga si isLoading es true */}
      <>
        <Button>Ingresar</Button>
      </>
    </div>
  );
};

export default App;
