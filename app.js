var imagenes = [1,2,3,4,5,6,7,8,9,10,11,12,13, 14, 15, 16, 17 ,18,19,20,21,22,23,24,25,26,27];
let gallery = document.getElementById("gallery");

for(imagen of imagenes){
    gallery.innerHTML += 
    `

    <div class="">
          <div class="">
            <a href="#" data-bs-toggle="modal" data-bs-target="#id${imagen}">
              <img class="card-img-top img-fluid" src="img/gallery/illustrator/${imagen}.jpeg" alt="">
            </a>
          </div>
        </div>
       
        <!-- Modal -->
        <div class="modal fade" id="id${imagen}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

          <div class="modal-dialog modal-lg modal-dialog-centered">
            <img class="img-fluid rounded" src="img/gallery/illustrator/${imagen}.jpeg" alt="">
          </div>
        </div>

    `
}