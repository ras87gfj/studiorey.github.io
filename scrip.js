var totalBelanja = 0;

    function tambahKeKeranjang(namaProduk, hargaProduk) {
      var keranjang = document.getElementById("keranjang");
      var li = document.createElement("li");
      li.innerHTML = namaProduk + " - Rp" + hargaProduk;
      keranjang.appendChild(li);

      totalBelanja += hargaProduk;
      var totalBelanjaElem = document.getElementById("total-belanja");
      totalBelanjaElem.innerHTML = totalBelanja;
    }