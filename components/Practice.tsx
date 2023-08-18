// import React from 'react'
// import dynamic from "next/dynamic";
// import { type } from 'os';

// const DynamicImage = dynamic(() => import("next/image"), {
//     loading: () => (
//         <img src="Image_here" alt="" />
//     ),
//     ssr: false,
// });

// type ColumnProps = {
//     title: string;
//     links: Array<string>;
// }
// const FooterColumn = ({ title, links }: ColumnProps) => {
//     return (
//         <div className='footer_column'>
//             <h4 className='font-semibold'>{title}</h4>
//             <ul>
//                 {links.map((link, index) => (
//                     <li key={index}>{link}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// const Practice = () => {
//     return (
//         <FooterColumn title={Xyz[0].title} links={Xyz[0].link}/>
//     )
// }

// export default Practice