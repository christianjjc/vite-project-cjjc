import { useEffect, useState } from "react";
import { Title } from "../components";
import { Usuario } from "../interfaces/user.interface";

export const Dashboard = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState<Usuario[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  const fetchData = async (): Promise<Usuario[]> => {
    return fetch(API_URL)
      .then((res) => res.json())
      .then((data) => data);
  };

  useEffect(() => {
    if (users.length) setLoaded(true);
  }, [users]);

  useEffect(() => {
    const llenaArray = async () => {
      setUsers(await fetchData());
    };
    setTimeout(() => {
      llenaArray();
    }, 5000);
  }, []);

  return (
    <>
      <Title title="Página Dashboard" subtitle="Esta página es de Dashboard" />
      {loaded ? users.map((el) => <p key={el.id}>{JSON.stringify(el)}</p>) : <h2 className="loading">Cargando...</h2>}
    </>
  );
};
