import headerlogo from "../../img/work_img_h.png";
import adminimg from "../../img/review-director-img.png";

const AdminHeader = () => {
  return (
    <header>
      <nav>
        <div className="admin--header--main--h">
          <div className="admin--header--main--cont--h">
            <div className="admin--headedr--title--h">
              <div className="admin--header--logo--h">
                <img src={headerlogo} alt="" />
              </div>
              <div className="admin--header--text--h">
                <h1>Dashboard</h1>
              </div>
            </div>
            <div className="admin--header--right--sec--h">
              <div className="admin--header--notification--h">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                >
                  <path
                    d="M10.811 21.2067C8.06529 21.2067 5.31954 21.2067 2.57379 21.2067C1.39305 21.2067 0.477798 20.4941 0.247239 19.3832C0.114493 18.7474 0.247239 18.1605 0.610544 17.6156C1.17646 16.7772 1.73539 15.9388 2.28734 15.0864C2.36419 14.9676 2.4131 14.8 2.4131 14.6533C2.42008 12.5782 2.4131 10.5032 2.42008 8.42815C2.42008 4.74619 4.66978 1.61618 8.17009 0.421464C12.7743 -1.14354 17.9095 1.74893 18.9295 6.50683C19.0693 7.1496 19.1321 7.82032 19.1391 8.47706C19.1671 10.5311 19.1461 12.5922 19.1531 14.6463C19.1531 14.8 19.209 14.9746 19.2928 15.1004C19.8308 15.9248 20.3758 16.7423 20.9277 17.5597C21.4587 18.3422 21.5495 19.1666 21.0954 19.998C20.6482 20.8364 19.9007 21.2067 18.9645 21.2067C16.2466 21.2067 13.5288 21.2067 10.811 21.2067ZM7.66007 22.3386C8.03734 23.5961 9.39275 24.5533 10.7831 24.5533C12.1804 24.5533 13.5358 23.5961 13.9061 22.3386C11.8171 22.3386 9.74208 22.3386 7.66007 22.3386Z"
                    fill="#828282"
                  />
                </svg>
              </div>
              <div className="admin--header--user--info--h">
                <div className="admin--header--user--img--h">
                  <img src={adminimg} alt="" />
                </div>
                <div className="admin--header--user--text--h">
                  <h1>Brooklyn</h1>
                  <p>Admin 1</p>
                </div>
                <div className="admin--header--drop--logo--h">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.31 0.801438C10.7005 1.19196 10.7005 1.82513 10.31 2.21565L6.21565 6.30998C5.82513 6.70051 5.19196 6.70051 4.80144 6.30998L0.707104 2.21565C0.31658 1.82513 0.31658 1.19196 0.707104 0.801438C1.09763 0.410914 1.73079 0.410914 2.12132 0.801438L5.50854 4.18866L8.89577 0.801438C9.28629 0.410914 9.91946 0.410914 10.31 0.801438Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
