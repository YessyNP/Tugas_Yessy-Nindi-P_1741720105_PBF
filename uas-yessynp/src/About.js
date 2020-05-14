import React, { Component } from "react";
import toko from './toko.png';
class About extends Component {
  render() {
    return (
      <div class="card text-center">
      <div>
        <h2>About Store</h2>
        <br></br>
        <img src={toko}  width="250" height="300"/>
         <p>
       </p>
    <p>
  </p>
        <p>
         Toko ini sudah berdiri sejak 2012, dan menjadi satu-satunya store yang menjual laptop terpercaya dikota Gresik. 
         Terdapat banyak pilihan jenis laptop, dari laptop kantor hingga laptop 
         Gaming. Harga yang ditawarkan cukup murah, dan ada garansi kerusakan setiap pembelian laptop. Makanya Kuy! buruan belanja sekarang!
        </p>
        <p>
          Alamat : Jl. Panglima Sudirman XXI Kota Gresik
        </p>
        </div>
      </div>
    );
  }
}
 
export default About;