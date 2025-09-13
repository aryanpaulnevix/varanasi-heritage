// src/assets/image.js
import background_image from "./background/background_image.jpg";

// 📂 Festivals
import ganga_aarti from "./festivals/ganga_aarti.jpg";
import durga_puja from "./festivals/durga_puja.jpg";
import mahashivratri from "./festivals/mahashivratri.jpg";
import istockphoto_519792618 from "./festivals/istockphoto-519792618-612x612.jpg";

// 📂 Monuments
import kashi_vishwanath from "./monuments/kashi_vishwanath.jpg";
import ramnagar_fort from "./monuments/ramnagar_fort.jpg";
import sankat_mochan from "./monuments/sankat_mochan.jpg";
import sarnath from "./monuments/sarnath.jpg";

// 📂 Food
import banarasi_paan from "./food/banarasi_paan.jpg";
import lassi from "./food/lassi.jpg";

// 📂 Crafts
import banarasi_saree from "./crafts/banarasi_saree.jpg";

// 📂 Ghats
import assi_ghat from "./ghats/assi_ghat.jpg";
import assi_ghat_varanasi from "./ghats/assi_ghat_varanasi.jpg"; // ✅ renamed
import manikarnika_ghat from "./ghats/manikarnika_ghat.jpg";

// 📂 Placeholder
import placeholder from "./placeholder.jpg";

export const images = {
  // ... existing images
  background_image,
  
  // ✅ Festivals
  ganga_aarti,
  durga_puja,
  mahashivratri,
  istockphoto_519792618,

  // ✅ Monuments
  kashi_vishwanath,
  ramnagar_fort,
  sankat_mochan,
  sarnath,

  // ✅ Food
  banarasi_paan,
  lassi,

  // ✅ Crafts
  banarasi_saree,

  // ✅ Ghats
  assi_ghat,
  assi_ghat_varanasi,
  manikarnika_ghat,

  // ✅ Fallback
  placeholder,
};

// Helper function to safely get image by filename
export function getImage(filename) {
  if (!filename) return images.placeholder;

  const key = filename.replace(/\.[^/.]+$/, "").toLowerCase();

  for (let k in images) {
    if (k.toLowerCase() === key) {
      return images[k];
    }
  }

  return images.placeholder;
}
