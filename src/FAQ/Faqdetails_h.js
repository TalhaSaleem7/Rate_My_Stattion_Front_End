import Related from "./component/Relatedarticles_h";
import Questioncard from "./component/Questioncard_h";
const FaqDetail = () => {
  return (
    <div>
      <section className="w-100 faq--search--detail--section--h">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="faq--search--detail--h">
                <nav
                  style={{ "--bs-breadcrumb-divider": "' > '" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active">FAQs</li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Search results
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Pellentesque vel tristique ultrices feugiat?
                    </li>
                  </ol>
                </nav>
                <h1>Pellentesque vel tristique ultrices feugiat?</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 faq--search--detail--container faq--search--detail--container-alt">
            <div className="faq--detail--card--one shadow-sm">
              <h3>
                Pellentesque vel tristique ultrices habitasse feugiat nulla
                tempor quam. Et risus commodo natoque pulvinar eu, interdum.
              </h3>
              <p className="faq--detail--card--text--h">
                Pellentesque vel tristique ultrices habitasse feugiat nulla
                tempor quam. Et risus commodo natoque pulvinar eu, interdum.
                Viverra tortor hac sollicitudin dictum sit. Condimentum eget et
                commodo sapien porta felis amet pellentesque. Erat augue enim
                turpis risus urna, ut egestas vivamus proin. Velit leo
                scelerisque pulvinar vestibulum in nunc a tortor mollis. Fusce
                pretium est ipsum elementum parturient. Venenatis, ac nulla non
                varius dolor. Ornare consectetur mauris, adipiscing tristique a
                leo. Habitant pharetra tellus habitasse vestibulum nibh quisque.
                Sed vel condimentum enim leo tortor mi magna tincidunt. Egestas
                bibendum id eget quisque semper ultricies. Gravida viverra massa
                faucibus vestibulum condimentum. <br />
                <br />
                <br />
                Pretium tortor venenatis, mattis lobortis. Sollicitudin non sed
                eu, augue. Morbi purus ipsum ipsum ante felis. Nisi, vulputate
                risus nisl, nulla amet morbi habitant vel. Condimentum egestas
                vestibulum habitant vitae. Faucibus bibendum lacinia volutpat
                nulla placerat semper elementum gravida. Mi vulputate arcu, at
                tincidunt enim sit eu platea leo. Risus vitae in turpis
                elementum, viverra ultricies. Commodo sed eget at massa,
                integer. Porta id id nisl faucibus neque, purus. Fermentum enim,
                sed ut ultrices amet turpis pharetra faucibus blandit. Aenean
                proin at tortor tincidunt. Aenean sed ornare sit arcu mattis
                amet, eget. Id sed amet cras urna et malesuada.
              </p>

              <div className="d-flex align-items-center faq--detail--card--one--bottom--h">
                <h1>Did you find it helpful?</h1>
                <div className="about--button--h pt-1 w-50">
                  <button
                    type="button"
                    className="btn btn-primary about--btn--h about--btn--h--alt"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary about--btn--h about--btn--h--alt--2"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 faq--search--detail--container">
            <div className="faq--search--detail--cont--h">
              <div>
                <h1 className="faq--detail--related--title">
                  Related articles
                </h1>
              </div>
              <div className="row row-cols-1 row-cols-lg-2 g-4 faq--detail--related--container--h">
                <Related />
              </div>
            </div>
          </div>

          <Questioncard className="col-lg-12 faq--search--detail--container faq--search--detail--container-alt-2" />
        </div>
      </div>
    </div>
  );
};

export default FaqDetail;
