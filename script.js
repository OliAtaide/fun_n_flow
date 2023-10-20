let atracoes = [
    {
        titulo: "Tiroleza",
        imagem: "imgs/atracoes/00_tiroleza.jpg"
    },
    {
        titulo: "Caiaque",
        imagem: "imgs/atracoes/01_caiaque.jpg"
    },
    {
        titulo: "Pedalinho",
        imagem: "imgs/atracoes/02_pedalinho.jpg"
    },
    {
        titulo: "Stand up paddle",
        imagem: "imgs/atracoes/03_paddle.jpg"
    },
    {
        titulo: "Circuito kids",
        imagem: "imgs/atracoes/04_kids.png"
    },
    {
        titulo: "Catapulta",
        imagem: "imgs/atracoes/05_catapulta.png"
    },
    {
        titulo: "Playground acqua",
        imagem: "imgs/atracoes/06_playground.jpg"
    },
    {
        titulo: "Parque inflavel",
        imagem: "imgs/atracoes/07_parque.jpeg"
    }
]

eventos = [
    {
        titulo: "Espaço Exclusivo",
        imagem: "imgs/eventos/eventos_00.jpg"
    },
    {
        titulo: "Ônibus de Turismo Completo",
        imagem: "imgs/eventos/eventos_01.jpg"
    },
    {
        titulo: "Passeio de Buggy",
        imagem: "imgs/eventos/eventos_02.jpg"
    },
    {
        titulo: "Petiscos volantes, chopps e drinks",
        imagem: "imgs/eventos/eventos_03.jpg"
    },
    {
        titulo: "Música ao vivo",
        imagem: "imgs/eventos/eventos_04.jpg"
    },
    {
        titulo: "Intervenção",
        imagem: "imgs/eventos/eventos_05.jpg"
    }
]



let album = [
    "imgs/album/_MG_0002.jpg", "imgs/album/DSC_0002.jpg", "imgs/album/DSC_0027.jpg", "imgs/album/DSC_0039.jpg", "imgs/album/DSC_0060.jpg", "imgs/album/DSC_0106.jpg", "imgs/album/DSC_0111.jpg", "imgs/album/DSC_0151.jpg", "imgs/album/DSC_0170.jpg", "imgs/album/DSC_0171.jpg", "imgs/album/DSC_0177.jpg", "imgs/album/DSC_0312.jpg", "imgs/album/DSC_0341.jpg", "imgs/album/DSC_0361.jpg", "imgs/album/DSC_0383.jpg", "imgs/album/DSC_0396.jpg", "imgs/album/DSC_0415.jpg", "imgs/album/DSC_0420.jpg", "imgs/album/DSC_0422.jpg", "imgs/album/DSC_0453.jpg", "imgs/album/DSC_0481.jpg", "imgs/album/DSC_0493.jpg", "imgs/album/DSC_0510.jpg"
]

let carousel = [
    "imgs/index/carousel_00.png",
    "imgs/index/carousel_01.jpg",
    "imgs/index/carousel_02.jpg",
    "imgs/index/carousel_03.jpg",
    "imgs/index/carousel_04.jpg",
    "imgs/index/carousel_05.jpeg",
]

console.log(atracoes)

atracoes.forEach(function (v, i) {
    $('.indexSwiper .swiper-wrapper').append(
        `
        <div class="swiper-slide">
            <div class="card">
                <div class="card-body">
                    <img src="${v.imagem}" alt="" class="img-fluid">
                    <h1 class="card-title">
                        ${v.titulo}
                    </h1>
                </div>
            </div>
        </div>
        `
    )
});

eventos.forEach(function (v, i) {
    $('.eventosSwiper .swiper-wrapper').append(
        `
        <div class="swiper-slide">
            <img src="${v.imagem}" alt="" class="img-fluid">
            <h5 class="evento-title mt-3">
                ${v.titulo}
            </h5>
        </div>
        `
    )
});

album.forEach(function (v, i) {
    $('.albumCarousel .carousel-inner').append(
        `
        <div class="carousel-item ${i == 0 ? 'active' : ''}">
            <img src="${v}" class="d-block w-100 img-fluid" alt="Album - Imagem ${(i + 1)}">
        </div>
        `
    )
})

carousel.forEach(function (v, i) {
    $('.indexCarousel .carousel-inner').append(
        `
        <div class="carousel-item ${i == 0 ? 'active' : ''}">
            <img src="${v}" class="d-block w-100 img-fluid" alt="Carrossel principal - Imagem ${(i + 1)}">
        </div>
        `
    )
    $('.indexCarousel .carousel-indicators').append(
        `
        <button type="button" data-bs-slide-to="${i}" ${i == 0 ? 'class="active" aria-current="true"' : ''}  data-bs-target="#indexCarousel"
                     aria-label="Carrossel principal - Indicardor do Slide ${(i + 1)}">
        </button>
        `
    )
})