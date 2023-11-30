import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function ProductDetails() {
  const { productID } = useParams();
  const apiURL = "https://dummyjson.com/products/" + productID;
  const { resp, error, loading } = useFetch(apiURL);

  //   const [singleProduct, setSingleProduct] = useState({});
  //   const [error, setError] = useState(null);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     axios
  //       .get(apiURL)
  //       .then((resp) => setSingleProduct(resp.data))
  //       .catch((err) => setError(err))
  //       .finally(() => setLoading(false));
  //   }, []);

  if (loading) return <div>loading... </div>;
  if (error) return <div>error... </div>;

  return (
    <>
      <div> {resp.title} </div>
      <div> {resp.description} </div>
      <Link to="/products"> back </Link>
    </>
  );
}

export default ProductDetails;
