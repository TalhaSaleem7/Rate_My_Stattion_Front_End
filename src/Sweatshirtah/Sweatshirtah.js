import React from "react";
import { Container } from "react-bootstrap";
import Cooperah1 from "../Cooperah/Cooperah1";
import Cooperah from "../Cooperah/Cooperah";
import Buyerah from "../Buyerah/Buyerah";
import Header from "../Header/Header";
import Footerah from "../footerah/Footerah";

const Sweatshirtah = () => {
  return (
    <>
      <Header />
      <section className="Sweatshirt-sec">
        <Container>
          <div className="Sweatshirt">
            <Cooperah1 />

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
