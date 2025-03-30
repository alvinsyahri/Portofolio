import certif1 from "../assets/sertifDanPenghargaan/1.jpg"; 

import award1 from "../assets/sertifDanPenghargaan/2.jpg";
import award2 from "../assets/sertifDanPenghargaan/3.jpg";

// Definisikan tipe data untuk array gambar
type ImageList = string[];

// Kelompokkan gambar dalam array
const certif: ImageList = [certif1];
const award: ImageList = [award1, award2];

export { certif, award };