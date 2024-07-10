import React from "react";

import adminz from "../img/admin.png";
import Btn from "./btn";
import kabc from "../img/kabc.png";

const AdminManagement  = () => {
  const cards = Array.from({ length: 9 }); // Create an array with 8 elements

  return (
    <>
      <section className="ah1">


        <div className="Employees-table" style={{ paddingTop: "35px" }}>
          <h2>Admin Management </h2>
        </div>

        <div className="Employees-table-inbox">
          <div className="Employees-box-btn-icon">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="23"
                viewBox="0 0 24 23"
                fill="none"
              >
                <circle cx="11.9488" cy="11.6045" r="11.2534" fill="white" />
                <path
                  d="M11.9487 6.9707C11.4608 6.9707 11.0653 7.36623 11.0653 7.85413V11.1541H7.76477C7.27687 11.1541 6.88135 11.5496 6.88135 12.0375C6.88135 12.5254 7.27687 12.921 7.76477 12.921H11.0653V16.2215C11.0653 16.7094 11.4608 17.1049 11.9487 17.1049C12.4366 17.1049 12.8322 16.7094 12.8322 16.2215V12.921H16.1322C16.6201 12.921 17.0156 12.5254 17.0156 12.0375C17.0156 11.5496 16.6201 11.1541 16.1322 11.1541H12.8322V7.85413C12.8322 7.36623 12.4366 6.9707 11.9487 6.9707Z"
                  fill="#194D79"
                />
              </svg>
              Invite people
            </button>
          </div>

          

        </div>


        <div className="table-container">
          <table id="customers">
            <tr>
              <th>
                ID
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
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Account
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
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Job type
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
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Status
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
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Verification
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
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Join Date
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
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>

              <th>
                Action
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
                    d="M10.31 0.292893C10.7005 0.683418 10.7005 1.31658 10.31 1.70711L6.21565 5.80144C5.82513 6.19196 5.19196 6.19196 4.80144 5.80144L0.707104 1.70711C0.31658 1.31658 0.31658 0.683417 0.707104 0.292893C1.09763 -0.097631 1.73079 -0.097631 2.12132 0.292893L5.50854 3.68012L8.89577 0.292893C9.28629 -0.0976311 9.91946 -0.097631 10.31 0.292893Z"
                    fill="#828282"
                  />
                </svg>
              </th>
            </tr>
            <tbody>
              {cards.map((_, index) => (
                <tr key={index}>
                  <td>#0001</td>
                  <td className="gg-td">
                    <div className="admin-dp">
                      <img src={adminz} alt="" />
                    </div>
                    Brooklyn Simmons
                  </td>
                  <td>News Director</td>
                  <td>
                    <div className="new-online">Online</div>
                  </td>
                  <td>Verified</td>
                  <td>June 23, 2022</td>
                  <td>
                    <Btn />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminManagement;
