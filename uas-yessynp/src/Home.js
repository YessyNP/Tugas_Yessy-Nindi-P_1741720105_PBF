// import React, { Component } from "react";
import './style.css'
import React from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import gambar1 from './1.jpg';
import gambar2 from './2.jpg';
import gambar3 from './3.jpg';
import gambar4 from './4.jpg';
import gambar5 from './5.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton />
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
            F I Y A'LAPTOP
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                {/* <a class="nav-item nav-link active" href="/public">
                  Home <span class="sr-only">(current)</span>
                </a>

                <a class="nav-item nav-link active" href="/login">
                  Category
                </a> */}
              </div>
            </div>
          </nav>
        </div>

         <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <PrivateRoute path="/private">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,

  Authenticate(cb) {
    fakeAuth.isAuthenticated = true;

    setTimeout(cb, 100);
  },

  signout(cb) {
    fakeAuth.isAuthenticated = false;

    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <ul>
    <p>
      Terimakasih telah membeli{""}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/public"));
        }}
      >
        Back To About
      </button>
    </p>
    </ul>
  ) : (
    <p></p>
  );
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",

              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PublicPage() {
  return (
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">ABOUT US</h5>
        <p class="card-text">
        Laptop menjadi perangkat yang sangat membantu pekerjaan manusia. Berbagai macam fungsi yang dimilikinya memudahkan urusan banyak orang, terutama para pelajar, dosen, mahasiswa, pekerja kantoran, freelancer dan lainnya. 
        Laptop sering disebut sebagai komputer jinjing. Ini tidak lepas dari fisiknya yang dapat dibawa ke mana-mana. Bentuknya yang  kecil lebih lebih flexible dan efektif digunakan dibandingkan dengan komputer dekstop yang memakan ruang dan daya listrik..{" "}
        </p>
        <p class="card-text">
          {" "}
         Fiya Gadget menyediakan berbagai macam jenis laptop terbaru. Selain itu harganya pun cukup terjangkau.
        </p>
      </div>
    </div>
  );
}

function ProtectedPage() {
  return <h3>Private</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.Authenticate(() => {
      history.replace(from);
    });
  };
  return (
    <Router>
      <div class="card-deck">
      <div class="card">
        <img class="card-img-top" src={gambar1} alt="Card image" />
        <div class="card-body">
          <ul>
          <h5 class="card-title">Acer Aspire</h5>
          <li>
            <Link to="/spesifikasi">SPESIFIKASI</Link>
          </li>
          <li>
            <Link to="/harga">HARGA</Link>
          </li>
          <li>
            <Link to="/warna">WARNA</Link>
          </li>
          </ul>
          <hr/>
          </div>
        <div class="card-footer">
          <button
            onClick={login}
            type="button"
            class="btn btn-secondary btn-lg btn-block"
          >
            Beli
          </button>
        </div>
      </div>
      <hr />
      <div class="card">
        <img class="card-img-top" src={gambar2} alt="Card image cap" />
        <div class="card-body">
          <ul>
          <h5 class="card-title">Asus Vivobook</h5>
          <li>
            <Link to="/spesifikasi">SPESIFIKASI</Link>
          </li>
          <li>
            <Link to="/harga">HARGA</Link>
          </li>
          <li>
            <Link to="/warna">WARNA</Link>
          </li>
          </ul>
          <hr/>
          </div>

        <div class="card-footer">
          <button
            onClick={login}
            type="button"
            class="btn btn-secondary btn-lg btn-block"
          >
            Beli
          </button>
        </div>
      </div>

      <div class="card">
        <img class="card-img-top" src={gambar3} alt="Card image cap" />

        <div class="card-body">
          <ul>
          <h5 class="card-title">Acer Swift</h5>
          <li>
            <Link to="/spesifikasi">SPESIFIKASI</Link>
          </li>
          <li>
            <Link to="/harga">HARGA</Link>
          </li>
          <li>
            <Link to="/warna">WARNA</Link>
          </li>
          </ul>
          <hr/>
          </div>
        <div class="card-footer">
          <button
            onClick={login}
            type="button"
            class="btn btn-secondary btn-lg btn-block"
          >
            Beli
          </button>
        </div>
      </div>
      
 <div class="card">
        <img class="card-img-top" src={gambar4} alt="Card image cap" />
        <div class="card-body">
          <ul>
          <h5 class="card-title">MacBook Pro</h5>
          <li>
            <Link to="/spesifikasi">SPESIFIKASI</Link>
          </li>
          <li>
            <Link to="/harga">HARGA</Link>
          </li>
          <li>
            <Link to="/warna">WARNA</Link>
          </li>
          </ul>
          <hr/>
          </div>

        <div class="card-footer">
          <button
            onClick={login}
            type="button"
            class="btn btn-secondary btn-lg btn-block"
          >
            Beli
          </button>
        </div>
      </div>

      <div class="card">
        <img class="card-img-top" src={gambar5} alt="Card image cap" />

        <div class="card-body">
          <ul>
          <h5 class="card-title">Asus VivoBook</h5>
          <li>
            <Link to="/spesifikasi">SPESIFIKASI</Link>
          </li>
          <li>
            <Link to="/harga">HARGA</Link>
          </li>
          <li>
            <Link to="/warna">WARNA</Link>
          </li>
          </ul>
          <hr/>
          </div>
        <div class="card-footer">
          <button
            onClick={login}
            type="button"
            class="btn btn-secondary btn-lg btn-block"
          >
            Beli
          </button>
        </div>
      </div>
 
          <Switch>
              <Route path="/spesifikasi">
                <SPESIFIKASI />
              </Route>
              <Route path="/harga">
                <Harga />
              </Route>
              <Route path="/warna">
                <Warna />
              </Route>
              {/* <Route path="/paket4">
                <Paket4/>
              </Route> */}
            </Switch>
            </div>
    </Router>
    
      );
    }
function SPESIFIKASI() {
  let { path, url } = useRouteMatch();
  return (
    
      <div class="card text-center">SPESIFIKASI
      <ul>
        <li>
          <Link
            to={`${url}/8GB`}>RAM
          </Link>
        </li>
        <li>
          <Link to={`${url}/Intel Core-I3-6060U`}>Processor</Link>
        </li>
        <li>
          <Link to={`${url}/Wifi dan Bloetooth`}>Konektivitas</Link>
        </li>
      </ul>


      
      <Switch>
        <Route exact path={path}>
          <h3>Please select an item.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Harga() {
  let { path, url } = useRouteMatch();
  return (      
      <div class="card text-center">Harga
      <ul>
        <br></br>
        <p>Rp. 13.760.000 </p>
        </ul>
</div>
  );
}

function Warna() {
  let { path, url } = useRouteMatch();
  return (
      <div class="card text-center">WARNA
      <ul>
        <br>
        </br>
        <p> Hitam </p>
      </ul>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}