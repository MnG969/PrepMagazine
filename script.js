let zoom = 1;

const pageFlip = new St.PageFlip(
  document.getElementById("book"),
  {
    width: 400,
    height: 600,
    size: "stretch",
    maxShadowOpacity: 0.5,

    showCover: true,
    usePortrait: true,
    mobileScrollSupport: true
  }
);

let pages = [];


// SAYFA SAYINI BURADA AYARLA
for (let i = 1; i <= 30; i++) {
  pages.push(`pages/${i}.jpg`);
}

pageFlip.loadFromImages(pages);

// BUTONLAR
function nextPage() {
  pageFlip.flipNext();
}

function prevPage() {
  pageFlip.flipPrev();
}

// ZOOM
function zoomIn() {
  zoom = Math.min(2, zoom + 0.1);
  document.getElementById("book").style.transform = `scale(${zoom})`;
}

function zoomOut() {
  zoom = Math.max(0.5, zoom - 0.1);
  document.getElementById("book").style.transform = `scale(${zoom})`;
}

document.addEventListener("keydown", function(e) {

  if (e.key === "ArrowRight") {
    pageFlip.flipNext();
  }

  if (e.key === "ArrowLeft") {
    pageFlip.flipPrev();
  }

});