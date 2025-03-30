// Import semua gambar dengan import langsung agar TypeScript mengenali tipe datanya
import iain1 from "../assets/tryoutIain/1.png";
import iain2 from "../assets/tryoutIain/2.png";
import iain3 from "../assets/tryoutIain/3.png";
import iain4 from "../assets/tryoutIain/4.png";

import sirehat1 from "../assets/sirehatCerdas/1.png";
import sirehat2 from "../assets/sirehatCerdas/2.png";
import sirehat3 from "../assets/sirehatCerdas/3.png";

import dbscan1 from "../assets/dbscanSentimentAnalysis/1.png";
import dbscan2 from "../assets/dbscanSentimentAnalysis/2.png";

import inflow1 from "../assets/inflow/1.png";
import inflow2 from "../assets/inflow/2.png";
import inflow3 from "../assets/inflow/3.png";

import gampong1 from "../assets/gampongGeutanyoe/1.png";
import gampong2 from "../assets/gampongGeutanyoe/2.png";
import gampong3 from "../assets/gampongGeutanyoe/3.png";
import gampong4 from "../assets/gampongGeutanyoe/4.png";
import gampong5 from "../assets/gampongGeutanyoe/5.png";
import gampong6 from "../assets/gampongGeutanyoe/6.png";
import gampong7 from "../assets/gampongGeutanyoe/7.png";

// Definisikan tipe data untuk array gambar
type ImageList = string[];

// Kelompokkan gambar dalam array
const iain: ImageList = [iain1, iain2, iain3, iain4];
const sirehat: ImageList = [sirehat1, sirehat2, sirehat3];
const dbscan: ImageList = [dbscan1, dbscan2];
const inflow: ImageList = [inflow1, inflow2, inflow3];
const gampongGeutanyoe: ImageList = [gampong1, gampong2, gampong3, gampong4, gampong5, gampong6, gampong7];

// Export semua aset
export { iain, sirehat, dbscan, inflow, gampongGeutanyoe };
