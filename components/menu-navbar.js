var menuNavbar = document.getElementById("navbar");

menuNavbar.innerHTML = `

    <div class="container-fluid">
        <a class="navbar-brand" href="#">List E-Wallet & Rekening</a>
        <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                    <div class="d-grid gap-2">
                        <a class="btn btn-outline-warning my-2" aria-current="page" href="pages/togel-infini.html">Jadwal TOGEL INFINI</a>
                        <a class="nav-link active" aria-current="page" href="index.html">Dashboard</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">DANA</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="index.html">DANA</a></li>
                        <li><a class="dropdown-item" href="pages/dana-conf.html">DANA CONF</a></li>
                        <li><a class="dropdown-item" href="pages/dana-infini.html">DANA INFINI</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Rekening Bank</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="pages/rek-bca.html">BCA</a></li>
                        <li><a class="dropdown-item" href="pages/rek-bni.html">BNI</a></li>
                        <li><a class="dropdown-item" href="pages/rek-bri.html">BRI</a></li>
                        <li><a class="dropdown-item" href="pages/rek-cimb.html">CIMB</a></li>
                        <li><a class="dropdown-item" href="pages/rek-mandiri.html">Mandiri</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Rekening Digital</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="pages/sebank.html">SeaBank</a></li>
                        <li><a class="dropdown-item" href="pages/neobank.html">neobank</a></li>
                        <li><a class="dropdown-item" href="pages/jagobank.html">Jago Bank</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pages/gopay.html">GoPay</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pages/ovo.html">OVO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pages/linkaja.html">LinkAja</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="pages/spay.html">SPay</a>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
        </div>
    </div>
`;
