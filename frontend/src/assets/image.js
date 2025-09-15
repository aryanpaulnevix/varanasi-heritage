// src/assets/image.js

// 📂 Background
import background_image from "./background/background_image.jpg";

// 📂 Festivals
import ganga_aarti from "./festivals/ganga_aarti.jpg";
import durga_puja from "./festivals/durga_puja.jpg";
import mahashivratri from "./festivals/mahashivratri.jpg";
import istockphoto_519792618 from "./festivals/istockphoto-519792618-612x612.jpg";
import dev_deepawali from "./festivals/dev_deepawali.jpg";

// 📂 Monuments
import kashi_vishwanath from "./monuments/kashi_vishwanath.jpg";
import ramnagar_fort from "./monuments/ramnagar_fort.jpg";
import sankat_mochan from "./monuments/sankat_mochan.jpg";
import sarnath from "./monuments/sarnath.jpg";
import bharat_mata_mandir from "./monuments/bharat_mata_mandir.jpg";

// 📂 Food
import banarasi_paan from "./food/banarasi_paan.jpg";
import kachori_sabzi from "./food/kachori_sabzi.jpg";
import lassi from "./food/lassi.jpg";
import malaiyyo from "./food/malaiyyo.jpg";

// 📂 Crafts
import banarasi_saree from "./crafts/banarasi_saree.jpg";
import gulabi_meenakari from "./crafts/gulabi_meenakari.jpg";
import varanasi_brassware from "./crafts/varanasi_brassware.jpg";
import wooden_toys from "./crafts/wooden_toys.jpg";

// 📂 Ghats
import assi_ghat from "./ghats/assi_ghat.jpg";
import assi_ghat_varanasi from "./ghats/assi_ghat_varanasi.jpg";
import dashashwamedh_ghat from "./ghats/dashashwamedh_ghat.jpg";
import manikarnika_ghat from "./ghats/manikarnika_ghat.jpg";
import panchganga_ghat from "./ghats/panchganga_ghat.jpg";
import harishchandra_ghat from "./ghats/harishchandra_ghat.jpg";

// 📂 Stories
import legend_shiva_ganga from "./stories/legend_shiva_ganga.jpg";
import raja_harishchandra from "./stories/raja_harishchandra.jpg";
import ramlila_ramnagar from "./stories/ramlila_ramnagar.jpg";
import manikarnika_ghat_story from "./stories/manikarnika_ghat_story.jpg";
import ganga_descent from "./stories/ganga_descent.jpg";

// 📂 Placeholder
import placeholder from "./placeholder.jpg";

// ✅ Export all images
export const images = {
  // Background
  background_image,

  // Festivals
  ganga_aarti,
  durga_puja,
  mahashivratri,
  istockphoto_519792618,
  dev_deepawali,

  // Monuments
  kashi_vishwanath,
  ramnagar_fort,
  sankat_mochan,
  sarnath,
  bharat_mata_mandir,

  // Food
  banarasi_paan,
  kachori_sabzi,
  lassi,
  malaiyyo,

  // Crafts
  banarasi_saree,
  gulabi_meenakari,
  varanasi_brassware,
  wooden_toys,

  // Ghats
  assi_ghat,
  assi_ghat_varanasi,
  dashashwamedh_ghat,
  manikarnika_ghat,
  panchganga_ghat,
  harishchandra_ghat,

  // Stories
  legend_shiva_ganga,
  raja_harishchandra,
  ramlila_ramnagar,
  ganga_descent,
  manikarnika_ghat_story,

  // Fallback
  placeholder,
};

// 🔹 Helper function to safely get image by filename
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
