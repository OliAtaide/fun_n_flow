let atracoes = [
    {
        titulo: "Tiroleza",
        imagem: "imgs/00_tiroleza.jpg"
    },
    {
        titulo: "Caiaque",
        imagem: "imgs/01_caiaque.jpg"
    },
    {
        titulo: "Pedalinho",
        imagem: "imgs/02_pedalinho.jpg"
    },
    {
        titulo: "Stand up paddle",
        imagem: "imgs/03_paddle.jpg"
    },
    {
        titulo: "Circuito kids",
        imagem: "imgs/04_kids.png"
    },
    {
        titulo: "Catapulta",
        imagem: "imgs/05_catapulta.png"
    },
    {
        titulo: "Playground acqua",
        imagem: "imgs/06_playground.jpg"
    },
    {
        titulo: "Parque inflavel",
        imagem: "imgs/07_parque.jpeg"
    }
]

console.log(atracoes)

atracoes.forEach(function (v, i) {
    $('.swiper-wrapper').append(
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

