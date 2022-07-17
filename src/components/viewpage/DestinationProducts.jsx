import React from 'react';
import '../Styles/viewpage.css';


const DestinationProducts = (props) => {
    return (  
        <>
            <div className="recommended-products">
                <h5>Some Recommended Products for {props.name} </h5>
                <ul>
                    <li>
                        {/* <h6>{props.product_01} : <a href={props.product_01_affiliate_link}>Get At Amazon</a></h6> */}
                        <h6>{props.product_01}</h6>
                    </li>
                    <li>
                        {/* <h6>{props.product_02} : <a href={props.product_02_affiliate_link}>Get At Amazon</a></h6> */}
                        <h6>{props.product_02}</h6>
                    </li>
                    <li>
                        {/* <h6>{props.product_03} : <a href={props.product_03_affiliate_link}>Get At Amazon</a></h6> */}
                        <h6>{props.product_03}</h6>
                    </li>
                    <li>
                        {/* <h6>{props.product_04} : <a href={props.product_04_affiliate_link}>Get At Amazon</a></h6> */}
                        <h6>{props.product_04}</h6>
                    </li>
                    <li>
                        {/* <h6>{props.product_05} : <a href={props.product_05_affiliate_link}>Get At Amazon</a></h6> */}
                        <h6>{props.product_05}</h6>
                    </li>
                    <li>
                        {/* <h6>{props.product_06} : <a href={props.product_06_affiliate_link}>Get At Amazon</a></h6> */}
                        <h6>{props.product_06}</h6>
                    </li>
                    <li>
                        {/* <h6>{props.product_07} : <a href={props.product_07_affiliate_link}>Get At Amazon</a></h6> */}
                        <h6>{props.product_07}</h6>
                    </li>
                </ul>
            </div> 
        </>
    );
}
 
export default DestinationProducts;