import { useEffect } from "react";

function Product() {
  console.log("component mounts");

  useEffect(() => {
    console.log("useEffect is running");
  }, []);

  return <div>Hello from Product component</div>;
}

export default Product;
