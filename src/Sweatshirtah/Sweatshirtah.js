import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import Cooperah1 from "../Cooperah/Cooperah1";
import Cooperah from "../Cooperah/Cooperah";
import Buyerah from "../Buyerah/Buyerah";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";
import { baseurl } from "../baseurl";
import axios from "axios";

const Sweatshirtah = () => {
  const [productdata, setProduct] = useState({});


  useEffect(() => {
    // Retrieve user data from local storage
    const storedProduct = localStorage.getItem('productdata');
    if (storedProduct) {
      const product = JSON.parse(storedProduct);
      console.log(product, productdata)
      // setProduct(user)  

      fetchproductdata(product.id);
    }
  }, []);
 

  const fetchproductdata = async (productId) => {
    try {
      const response = await axios.get(`${baseurl}/productdetails/${productId}`);

      setProduct(response.data)
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  return (
    <>
      <Header />
      <section className="Sweatshirt-sec">
        <Container>
          <div className="Sweatshirt">
            <Cooperah1 productdata = {productdata} />

            <div className="Sweatshirt-box Sweatshirt--box--alt">
              <div className="Sweatshirt-part-1 Sweatshirt--part--alt">
                <Cooperah />
              </div>

              <div className="Sweatshirt-part-2 Sweatshirt--part--alt">
                <Buyerah />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footerah />
    </>
  );
};

export default Sweatshirtah;
