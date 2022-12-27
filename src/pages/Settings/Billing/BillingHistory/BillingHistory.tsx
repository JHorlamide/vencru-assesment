import React from "react";
import CustomBtn from "../../../../components/CustomBtn/CustomBtn";
import DownloadIcon from "../../../../assets/icons/download_icon.png";
import CheckMarkIcon from "../../../../assets/icons/check_icon.png";
import { TABLE_HEADING } from "../../../../components/data";
import CustomInput from "../../../../components/CustomInput/CustomInput";

const BillingHistory = () => {
  return (
    <div>
      <div className="flex flex-col space-y-2 md:justify-between md:space-y-0 md:flex-row">
        <h1 className="text-[18px] font-[500px]">Billing history</h1>

        <CustomBtn
          leftIcon={
            <img src={DownloadIcon} alt="download_icon" className="pt-1 pr-2" />
          }
          className="flex px-3 py-2 space-x-2 bg-white border border-gray-300 rounded-md w-fit"
        >
          Download all
        </CustomBtn>
      </div>

      {/* <!-- component --> */}
      {/* <!-- This is an example component --> */}
      <div className="mt-5">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-100">
                    <tr className="overflow-x-scroll scroll-smooth md:overflow-hidden">
                      <th scope="col" className="p-3">
                        <div className="flex items-center">
                          <CustomInput
                            id="checkbox-all"
                            className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full focus:ring-red-500 dark:focus:ring-red-600"
                            inputProps={{
                              type: "checkbox",
                            }}
                          />

                          <label htmlFor="checkbox-all" className="sr-only">
                            checkbox
                          </label>
                        </div>
                      </th>

                      {
                        <th
                          key={TABLE_HEADING[0].id}
                          scope="col"
                          className="flex px-1 py-3 text-[12px] font-medium tracking-wider text-left text-gray-500 w-52 md:w-72 whitespace-nowrap"
                        >
                          {TABLE_HEADING[0].title}
                          <img
                            src={TABLE_HEADING[0].icon}
                            alt="arrow_down"
                            className="w-[10.33px] h-[10.33px] mt-1 ml-1"
                          />
                        </th>
                      }

                      {TABLE_HEADING.slice(1).map((item) => (
                        <th
                          key={item.id}
                          scope="col"
                          className="px-3 md:px-1 py-3 text-[12px] font-medium tracking-wider text-left text-gray-500 whitespace-nowrap"
                        >
                          {item.title}
                        </th>
                      ))}

                      <th scope="col" className="p-4">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-200">
                    {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
                      <tr key={idx} className="">
                        <td className="w-4 p-3">
                          <div className="flex items-center">
                            <CustomInput
                              id="checkbox-table-1"
                              className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full focus:ring-red-500 dark:focus:ring-red-600"
                              inputProps={{
                                type: "checkbox",
                              }}
                            />

                            <label
                              htmlFor="checkbox-table-1"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>

                        <td className="px-3 md:px-0 py-3 text-[14px] font-[500px] text-black whitespace-nowrap">
                          Basic Plan – Dec 2022
                        </td>

                        <td className="px-3 md:px-0 py-3 text-[14px] font-[400px] text-gray-500 whitespace-nowrap">
                          USD $10.00
                        </td>

                        <td className="px-3 md:px-0 py-3 text-[14px] font-[400px] text-gray-500 whitespace-nowrap">
                          Dec 1, 2022
                        </td>

                        <td className="px-3 py-3 text-sm font-medium text-black md:px-0 whitespace-nowrap dark:text-black">
                          <div className="flex px-2.5 space-x-1 text-green-700 rounded-full w-fit bg-green-50">
                            <img
                              src={CheckMarkIcon}
                              alt="check_mark_icon"
                              className="w-[8] h-[5.5px] mt-2"
                            />
                            <p className="text-[12px] font-[500px]">Paid</p>
                          </div>
                        </td>

                        <td className="px-0 py-4 text-sm font-medium text-black whitespace-nowrap dark:text-black">
                          <div className="flex">
                            <img
                              src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
                              alt="..."
                              className="w-8 h-8 border-2 rounded-full shadow border-blueGray-50"
                            />
                            <img
                              src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                              alt="..."
                              className="w-8 h-8 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                            />
                            <img
                              src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
                              alt="..."
                              className="w-8 h-8 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                            />
                            <img
                              src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
                              alt="..."
                              className="w-8 h-8 -ml-4 border-2 rounded-full shadow border-blueGray-50"
                            />
                          </div>
                        </td>

                        <td className="px-0 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            href="#/"
                            className="text-blue-600 dark:text-blue-500"
                          >
                            <img
                              src={DownloadIcon}
                              alt="download_icon"
                              className=""
                            />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingHistory;
