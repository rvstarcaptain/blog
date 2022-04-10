// import React from 'react';
// import { Table } from 'react-bootstrap';

// export default function NestedList() {
//     const Employee = [
//         {
//             name: "a", email: "rv@test.com1", contact: 123456, address: [
//                 { HN: "xyz", city: "kol", country: "india" },
//                 { HN: "4545", city: "mum", country: "india" },
//                 { HN: "2323", city: "shrinagar", country: "india" },
//                 { HN: "6767", city: "gandhinagar", country: "india" },

//             ],
//         },
//         {
//             name: "b", email: "rv@test.com2", contact: 8454545, address: [
//                 { HN: "xyz", city: "kol", country: "india" },
//                 { HN: "4545", city: "mum", country: "india" },
//                 { HN: "2323", city: "shrinagar", country: "india" },
//                 { HN: "6767", city: "gandhinagar", country: "india" },

//             ],
//         },
//         {
//             name: "c", email: "rv@test.com3", contact: 987456, address: [
//                 { HN: "xyz", city: "kol", country: "india" },
//                 { HN: "4545", city: "mum", country: "india" },
//                 { HN: "2323", city: "shrinagar", country: "india" },
//                 { HN: "6767", city: "gandhinagar", country: "india" },

//             ],
//         }

//     ]
//     return (
//         <div>
//             <h1>Nested Array Table</h1>
//             <Table striped bordered hover variant='dark'  >
//                 <tbody>
//                     <tr>
//                         <th>SL.NO</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>Address</th>
//                     </tr>
//                 {
//                     Employee.map((data, i) =>
//                         <tr key={i}>
//                             <td >{i+1}</td>
//                             <td> {data.name} </td>
//                             <td> {data.email}</td>
//                             <td> {data.contact}</td>
//                             <td>
//                                 <Table striped bordered hover variant='dark'>
//                                     <tbody>
//                                         <tr>
//                                             <th>HN</th>
//                                             <th>City</th>
//                                             <th>Country</th>
//                                         </tr>
                                   

//                                     {
//                                         data.address.map((data2, i) =>
//                                             <tr key={i}>
//                                                 <td>{data2.HN}</td>
//                                                 <td>{data2.city}</td>
//                                                 <td>{data2.country}</td>
//                                             </tr>
//                                         )
//                                     }
//                                      </tbody>



//                                 </Table>
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </Table>

//         </div>
//     )
// }
