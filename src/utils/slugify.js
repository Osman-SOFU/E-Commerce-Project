export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9 -]/g, "") // Alfanümerik ve tire dışındakileri sil
    .replace(/\s+/g, "-") // Boşlukları tire ile değiştir
    .replace(/-+/g, "-") // Çoklu tireleri tek tire yap
    .trim();
