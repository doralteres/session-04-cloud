import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import MainContainer from "./components/MainContainer";
import axios from "axios";
import { currency } from "./utils/formats";
import ProductCard from "./components/ProductCard";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{
    person: { name: string; money: number; imageUrl: string };
    products: { name: string; price: number; imageUrl: string }[];
  }>();
  const [money, setMoney] = useState(0);
  const [bill, setBill] = useState<Record<string, number>>({});
  useEffect(() => {
    console.debug(process.env.NODE_ENV);
    const apiUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api"
        : "/api";
    Promise.all([
      axios.get(`${apiUrl}/person`),
      axios.get(`${apiUrl}/products`),
    ])
      .then(([{ data: personData }, { data: productData }]) => {
        setData({ person: personData.data, products: productData.data });
        setMoney(personData.data.money);
      })
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading)
    return (
      <div className="text-center text-indigo-50 font-semibold mt-2">
        Loading...
      </div>
    );
  return (
    <Layout>
      <MainContainer personImg={data?.person.imageUrl}>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-2xl md:text-3xl text-center">
            Spends {data?.person.name}'s Money
          </h1>
          <p className="font-semibold text-xl md:text-2xl bg-emerald-500 text-emerald-50 px-1 rounded-lg">
            {currency(money)}
          </p>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-2 px-4">
            {data?.products.map((p) => (
              <ProductCard
                key={p.name}
                product={p}
                count={bill[p.name] || 0}
                disabled={money - p.price < 0}
                onAdd={() => {
                  if (money - p.price >= 0) {
                    setBill({ ...bill, [p.name]: (bill[p.name] || 0) + 1 });
                    setMoney((prev) => prev - p.price);
                  }
                }}
                onRemove={() => {
                  if (bill[p.name] && bill[p.name] > 0) {
                    setBill({ ...bill, [p.name]: bill[p.name] - 1 });
                    setMoney((prev) => prev + p.price);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </MainContainer>
    </Layout>
  );
}

export default App;
