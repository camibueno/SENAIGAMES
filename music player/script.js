let musicas = [
    {titulo:'Ben 10 Main Theme', artista: 'Geek Music', src:'musicas/BEN10 ABERTURA 1 TEMPORADA.mp3', img:'imagens/ben10.jpg'},
    {titulo:'Sorriso Resplandecente', artista: 'Ricardo Junior', src:'musicas/Dragon Ball GT Abertura [Melhor qualidade][HD].mp3', img: 'imagens/dbgt.jpg'},
    {titulo:'Abertura Hora de aventura', artista: 'The Kira Justice', src:'musicas/Abertura Hora de Aventura ( Português ).mp3', img: 'imagens/hora de aventura.jpg'},
    {titulo:'Teen Titans Theme', artista: 'The Shake Ups', src:'musicas/Theme Song _ Teen Titans _ Warner Archive.mp3', img: 'imagens/jovens titans.jpg'},
    {titulo:'The Fairly Oddparents', artista: 'Geek Music', src:'musicas/Os padrinhos mágicos abertura.mp3', img: 'imagens/padrinhos magicos.jpg'},
    {titulo:'Patolino: o Mago', artista: 'The Kira Justice', src:'musicas/Cartoon Network _ Patolino_ O Mago _ 2014.mp3', img: 'imagens/patolino.jpg'},
    {titulo:'Temos que pegar', artista: 'Miura Jam', src:'musicas/Pokémon Theme Song.mp3', img: 'imagens/pokemon.jpg'},
    {titulo:'Super Mario World Theme', artista: 'Video Game Players', src:'musicas/Super Mario World Bonus Screen Theme.mp3', img: 'imagens/super mario world.jfif'},
    {titulo:'Super Onze 2° abertura', artista: 'pugcats', src:'musicas/2°ABERTURA DE SUPER ONZE.mp3', img: 'imagens/super onze.jpg'},
    {titulo:'Tetris Theme', artista: 'Video Game Players', src:'musicas/Original Tetris theme (Tetris Soundtrack).mp3', img: 'imagens/tetris.jpg'},
];

let musica = document.querySelector('audio');
let indexMusica=0;
musica.addEventListener('loadeddata', duration);
function duration(){
    let duracaoMusica = document.querySelector('.fim');
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
}
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);
// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click',() => {
    indexMusica--;
    if (indexMusica<0){
        indexMusica=9;
    }
  renderizarMusica(indexMusica);  
});

document.querySelector('.proxima').addEventListener('click',() => {
    indexMusica++;
    if(indexMusica>9){
        indexMusica=0; 
    }
    renderizarMusica(indexMusica);
    musica.play();
});

// Funções

function renderizarMusica(index){
    musica.setAttribute('src',musicas[index].src);
    musica.addEventListener('loadeddata', ()=>{
        nomeMusica.textContent= musicas[index].titulo;
        nomeArtista.textContent= musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display='block';
    document.querySelector('.botao-play').style.display='none'
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display='block';
    document.querySelector('.botao-pause').style.display='none';
}

function atualizarBarra(){
    let barra =document.querySelector('progress');
    barra.style.width= Math.floor((musica.currentTime/ musica.duration)*100) + '%';
    let tempoDecorrido =document.querySelector('.inicio');
    tempoDecorrido.textContent= segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = "0"+campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}

