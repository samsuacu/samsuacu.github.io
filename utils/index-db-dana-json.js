async function getUsers() {
    try {
      const response = await fetch("./services/db-dana.json", {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      data.sort((a,b) => b.id - a.id); //Mengurutkan data Z-A

      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
  getUsers().then((data) => {
    
    //console.log(data);
  
    let table = '<div class="accordion accordion-flush" id="accordionFlushExample">';
  
    data.forEach((user) => {

      table += `
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${user.username.substring(0, user.username.length-2)}" aria-expanded="false" aria-controls="flush-collapse${user.username.substring(0, user.username.length-2)}">
                ${user.id}. ${user.nama}
              </button>
            </h2>
            <div id="flush-collapse${user.username.substring(0, user.username.length-2)}" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-2 ps-2 pe-3">
                <div class="container px-0" style="font-size:0.8em">
                  <div class="row">
                    <div class="col col-2"><code>ID</code></div>
                    <div class="col col-9 text-left px-0">: ${user.username}</div>
                    <div class="col col-1 "></div>
                  </div>
                  <div class="row "> 
                    <div class="col col-2 "><code>DANA</code></div>
                    <div class="col col-9 text-left px-0">:${user.username.substring(0, user.username.length-2)} ${user.rek} ${user.nama}</div>
                    <div class="col col-1  text-end px-0">
                      <button onclick="copy${user.username.substring(0, user.username.length-2)}()" type="button" class="btn btn-sm btn-outline-primary py-0" style="font-size:1em"><i class="bi-copy"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
    });
  
    table += `
        </div>
      `;
      
    const container = document.getElementById("container");
    container.innerHTML = table;
  });
  
  
  
