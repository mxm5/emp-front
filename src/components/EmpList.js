import React from 'react';

function EmpList() {
    return (
        <>
            <div className={"container mx-auto my-8 "}>
                <button
                    className={"mb-5 bg-green-900 hover:bg-green-100 hover:text-green-900 hover:border-2 border-2 border-green-900 hover:border-green-900 text-white rounded focus:bg-amber-700 p-2"}>
                    add employee
                </button>

                <div className={"row-auto"}>
                    <table className={"text-center"}>
                        <thead className=" bg-gray-50 rounded">
                        <tr>
                            <th className="w-96 text-center border-2 font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                First Name
                            </th>
                            <th className="w-96 text-center border-2 font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Last Name
                            </th>
                            <th className="w-96 text-center border-2 font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Email ID
                            </th>
                            <th className="w-96 text-center border-2 font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                                Actions
                            </th>
                        </tr>
                        <tr className={"p-4"}>
                            <td className={"border-2 p-3 "} >emix</td>
                            <td className={"border-2 p-3 "} >emixia</td>
                            <td className={"border-2 p-3 "} > emix@gmail.com </td>
                            <td className={"border-2 p-3 "} >
                                <a href="#"
                                   className={"text-indigo-700  border-indigo-50 hover:border-2 hover:bg-indigo-100 border-indigo-300  shadow-indigo-500 px-1.5 hover:text-indigo-500 hover:shadow hover:font-bold font-bold"}>edit</a>
                                <a href="#"
                                   className={"text-indigo-700  border-indigo-50 hover:border-2 hover:bg-indigo-100 border-indigo-300  shadow-indigo-500 px-1.5 hover:text-indigo-500 hover:shadow hover:font-bold font-bold"}>delete</a>
                            </td>

                        </tr><tr className={"p-4"}>
                            <td className={"border-2 p-3 "} >emix</td>
                            <td className={"border-2 p-3 "} >emixia</td>
                            <td className={"border-2 p-3 "} > emix@gmail.com </td>
                            <td className={"border-2 p-3 "} >
                                <a href="#"
                                   className={"text-indigo-700  border-indigo-50 hover:border-2 hover:bg-indigo-100 border-indigo-300  shadow-indigo-500 px-1.5 hover:text-indigo-500 hover:shadow hover:font-bold font-bold"}>edit</a>
                                <a href="#"
                                   className={"text-indigo-700  border-indigo-50 hover:border-2 hover:bg-indigo-100 border-indigo-300  shadow-indigo-500 px-1.5 hover:text-indigo-500 hover:shadow hover:font-bold font-bold"}>delete</a>
                            </td>

                        </tr><tr className={"p-4"}>
                            <td className={"border-2 p-3 "} >emix</td>
                            <td className={"border-2 p-3 "} >emixia</td>
                            <td className={"border-2 p-3 "} > emix@gmail.com </td>
                            <td className={"border-2 p-3 "} >
                                <a href="#"
                                   className={"text-indigo-700  border-indigo-50 hover:border-2 hover:bg-indigo-100 border-indigo-300  shadow-indigo-500 px-1.5 hover:text-indigo-500 hover:shadow hover:font-bold font-bold"}>edit</a>
                                <a href="#"
                                   className={"text-indigo-700  border-indigo-50 hover:border-2 hover:bg-indigo-100 border-indigo-300  shadow-indigo-500 px-1.5 hover:text-indigo-500 hover:shadow hover:font-bold font-bold"}>delete</a>
                            </td>

                        </tr><tr className={"p-4"}>
                            <td className={"border-2 p-3 "} >emix</td>
                            <td className={"border-2 p-3 "} >emixia</td>
                            <td className={"border-2 p-3 "} > emix@gmail.com </td>
                            <td className={"border-2 p-3 "} >
                                <a href="#"
                                   className={"text-indigo-700  border-indigo-50 hover:border-2 hover:bg-indigo-100 border-indigo-300  shadow-indigo-500 px-1.5 hover:text-indigo-500 hover:shadow hover:font-bold font-bold"}>edit</a>
                                <a href="#"
                                   className={"text-indigo-700  border-indigo-50 hover:border-2 hover:bg-indigo-100 border-indigo-300  shadow-indigo-500 px-1.5 hover:text-indigo-500 hover:shadow hover:font-bold font-bold"}>delete</a>
                            </td>

                        </tr>
                        </thead>

                    </table>
                </div>
            </div>
        </>
    );
}


export default EmpList;
