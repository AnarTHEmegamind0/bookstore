class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
  
      shadow.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
  
          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            background-color: #1e1e1e;
            color: #fff;
          }
  
          header a {
            text-decoration: none;
            color: inherit;
          }
  
          header img {
            height: 50px;
          }
  
          nav {
            display: flex;
            gap: 20px;
          }
  
          nav a {
            font-size: 18px;
            font-weight: 500;
            color: #e8eaed;
            transition: color 0.3s ease;
          }
  
          nav a:hover {
            color: #ff9800;
          }
  
          header div {
            display: flex;
            gap: 20px;
          }
  
          svg {
            fill: #e8eaed;
            width: 24px;
            height: 24px;
            cursor: pointer;
            transition: fill 0.3s ease;
          }
  
          svg:hover {
            fill: #ff9800;
          }
  
          @media (max-width: 768px) {
            header {
              flex-direction: column;
              text-align: center;
            }
  
            nav {
              flex-direction: column;
              gap: 15px;
            }
  
            header div {
              margin-top: 15px;
            }
          }
        </style>
        <header>
          <a href="home.html">
            <img src="/image/1.png" alt="Company Logo">
          </a>
          <nav>
            <a href="home.html">Нүүр Хуудас</a>
            <a href="app.html">Номын жагсаалт</a>
            <a href="app.html">Бидний тухай</a>
            <a href="salbar.html">Санал Хүсэлт</a>
          </nav>
          <div>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
            </a>
          </div>     
        </header>
      `;
    }
  
    connectedCallback() {
      document.addEventListener("cart-updated", (event) => {
        this.updateCartInfo(event.detail);
      });
    }
  
    updateCartInfo({ totalQuantity, totalPrice }) {
      this.shadowRoot.querySelector("#cart-counter").textContent = totalQuantity;
    }
  }
  