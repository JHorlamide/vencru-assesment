import { testData, TABLE_HEADING } from "../../../components/data";
import CustomInput from "../../../components/CustomInput/CustomInput";
import CheckMarkIcon from "../../../assets/icons/check_icon.png";
import DownloadIcon from "../../../assets/icons/download_icon.png"

export const ResponsiveTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
              Invoice
            </th>

            <th className="px-6 py-3 pl-40 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
              Amount
            </th>

            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
              Date
            </th>

            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
              Status
            </th>

            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Users on plan
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {testData.map((item) => (
            <tr key={item.id}>
              <td className="px-3 py-3 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">{item.id}</div>
              </td>

              <td className="px-3 py-3 whitespace-no-wrap pl-40">
                <div className="text-sm leading-5 text-gray-900">{item.name}</div>
              </td>

              <td className="px-3 py-3 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">{item.age}</div>
              </td>

              {/* <td className="px-6 py-4 whitespace-no-wrap">
                <div className="text-sm leading-5 text-gray-900">{item.email}</div>
              </td> */}

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

              <td className="px-0 py-3 text-sm font-medium text-black whitespace-nowrap dark:text-black">
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

              <td className="px-0 py-3 text-sm font-medium text-right whitespace-nowrap">
                <a href="#/" className="text-blue-600 dark:text-blue-500">
                  <img src={DownloadIcon} alt="download_icon" className="" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


// const BillingHistoryTable = () => {
//   return (
//     <div className="overflow-x-auto">
//       <table className="sm:min-w-max md:min-w-full">
//         <thead className="bg-gray-100 dark:bg-gray-100">
//           <tr>
//             <th scope="col" className="p-3">
//               <div className="flex items-center">
//                 <CustomInput
//                   id="checkbox-all"
//                   className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full focus:ring-red-500 dark:focus:ring-red-600"
//                   inputProps={{
//                     type: "checkbox",
//                   }}
//                 />

//                 <label htmlFor="checkbox-all" className="sr-only">
//                   checkbox
//                 </label>
//               </div>
//             </th>

//             {
//               <th
//                 key={TABLE_HEADING[0].id}
//                 scope="col"
//                 className="flex px-1 py-3 text-[12px] font-medium tracking-wider text-left text-gray-500 w-52 md:w-72 whitespace-nowrap"
//               >
//                 {TABLE_HEADING[0].title}
//                 <img
//                   src={TABLE_HEADING[0].icon}
//                   alt="arrow_down"
//                   className="w-[10.33px] h-[10.33px] mt-1 ml-1"
//                 />
//               </th>
//             }

//             {TABLE_HEADING.slice(1).map((item) => (
//               <th
//                 key={item.id}
//                 scope="col"
//                 className="px-3 md:px-1 py-3 text-[12px] font-medium tracking-wider text-left text-gray-500 whitespace-nowrap"
//               >
//                 {item.title}
//               </th>
//             ))}

//             <th scope="col" className="p-4">
//               <span className="sr-only">Edit</span>
//             </th>
//           </tr>
//         </thead>

//         <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-200">
//           {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
//             <tr key={idx}>
//               <td className="w-4 p-3">
//                 <div className="flex items-center">
//                   <CustomInput
//                     id="checkbox-table-1"
//                     className="w-4 h-4 bg-gray-100 border-gray-300 rounded-full focus:ring-red-500 dark:focus:ring-red-600"
//                     inputProps={{
//                       type: "checkbox",
//                     }}
//                   />

//                   <label htmlFor="checkbox-table-1" className="sr-only">
//                     checkbox
//                   </label>
//                 </div>
//               </td>

//               <td className="px-3 md:px-0 py-3 text-[14px] font-[500px] text-black whitespace-nowrap">
//                 Basic Plan – Dec 2022
//               </td>

//               <td className="px-3 md:px-0 py-3 text-[14px] font-[400px] text-gray-500 whitespace-nowrap">
//                 USD $10.00
//               </td>

//               <td className="px-3 md:px-0 py-3 text-[14px] font-[400px] text-gray-500 whitespace-nowrap">
//                 Dec 1, 2022
//               </td>

//               <td className="px-3 py-3 text-sm font-medium text-black md:px-0 whitespace-nowrap dark:text-black">
//                 <div className="flex px-2.5 space-x-1 text-green-700 rounded-full w-fit bg-green-50">
//                   <img
//                     src={CheckMarkIcon}
//                     alt="check_mark_icon"
//                     className="w-[8] h-[5.5px] mt-2"
//                   />
//                   <p className="text-[12px] font-[500px]">Paid</p>
//                 </div>
//               </td>

//               <td className="px-0 py-4 text-sm font-medium text-black whitespace-nowrap dark:text-black">
//                 <div className="flex">
//                   <img
//                     src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"
//                     alt="..."
//                     className="w-8 h-8 border-2 rounded-full shadow border-blueGray-50"
//                   />
//                   <img
//                     src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
//                     alt="..."
//                     className="w-8 h-8 -ml-4 border-2 rounded-full shadow border-blueGray-50"
//                   />
//                   <img
//                     src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"
//                     alt="..."
//                     className="w-8 h-8 -ml-4 border-2 rounded-full shadow border-blueGray-50"
//                   />
//                   <img
//                     src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png"
//                     alt="..."
//                     className="w-8 h-8 -ml-4 border-2 rounded-full shadow border-blueGray-50"
//                   />
//                 </div>
//               </td>

//               <td className="px-0 py-4 text-sm font-medium text-right whitespace-nowrap">
//                 <a href="#/" className="text-blue-600 dark:text-blue-500">
//                   <img src={DownloadIcon} alt="download_icon" className="" />
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }