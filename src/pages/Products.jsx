import { Link, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Products() {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get("limit");
  const apiURL = "https://dummyjson.com/products";
  const { resp, error, loading } = useFetch(apiURL);

  //   const [products, setProducts] = useState([]);
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     axios
  //       .get(apiURL)
  //       .then((resp) => setProducts(resp.data.products))
  //       .catch((err) => setError(err))
  //       .finally(() => setLoading(false));
  //   }, []);

  if (loading) return <div>loading... </div>;
  if (error) return <div>error... </div>;

  return (
    <>
      {resp.products.slice(-limit).map((e) => (
        <div key={e.id}>
          <Link to={"/products/" + e.id}> {e.title} </Link>
        </div>
      ))}
    </>
  );
}

export default Products;
