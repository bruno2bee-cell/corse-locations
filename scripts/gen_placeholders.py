"""Génère des images placeholder aux couleurs de la charte graphique,
à remplacer par les vraies photos avant mise en ligne."""
import os
from PIL import Image, ImageDraw, ImageFont

BASE = os.path.join(os.path.dirname(__file__), "..", "public", "images")

PALETTE = [
    ("#1B3A4B", "#2C5468"),  # dusk
    ("#4A5D3A", "#7A8F63"),  # maquis
    ("#C9A467", "#E6D4AB"),  # stone
    ("#8F3F2C", "#B5533C"),  # terracotta
]

IMAGES = {
    "villa-mare": [
        ("cover.jpg", 1600, 1200, "Villa Mare — Photo de couverture"),
        ("salon.jpg", 1400, 1050, "Villa Mare — Salon"),
        ("terrasse.jpg", 1400, 1050, "Villa Mare — Terrasse"),
        ("chambre-1.jpg", 1400, 1050, "Villa Mare — Chambre 1"),
        ("chambre-2.jpg", 1400, 1050, "Villa Mare — Chambre 2"),
        ("cuisine.jpg", 1400, 1050, "Villa Mare — Cuisine"),
        ("vue-mer.jpg", 1400, 1050, "Villa Mare — Vue mer"),
    ],
    "casa-monte": [
        ("cover.jpg", 1600, 1200, "Casa Monte — Photo de couverture"),
        ("facade.jpg", 1400, 1050, "Casa Monte — Façade"),
        ("sejour.jpg", 1400, 1050, "Casa Monte — Séjour"),
        ("chambre-1.jpg", 1400, 1050, "Casa Monte — Chambre 1"),
        ("terrasse.jpg", 1400, 1050, "Casa Monte — Terrasse"),
        ("village.jpg", 1400, 1050, "Casa Monte — Village"),
    ],
    "corse": [
        ("hero.jpg", 2000, 1400, "Hero — Vue de la Balagne"),
        ("hero-region.jpg", 2000, 1200, "Hero page région"),
        ("og-cover.jpg", 1200, 630, "Image de partage réseaux sociaux"),
        ("plage-1.jpg", 1400, 1050, "Plage 1"),
        ("plage-2.jpg", 1200, 1200, "Plage 2"),
        ("plage-3.jpg", 1200, 1200, "Plage 3"),
        ("village-1.jpg", 1400, 1050, "Village 1"),
        ("village-2.jpg", 1200, 1200, "Village 2"),
        ("village-3.jpg", 1200, 1200, "Village 3"),
        ("rando-1.jpg", 1400, 1050, "Randonnée 1"),
        ("rando-2.jpg", 1400, 1050, "Randonnée 2"),
        ("gastronomie-1.jpg", 1400, 1050, "Gastronomie 1"),
        ("gastronomie-2.jpg", 1400, 1050, "Gastronomie 2"),
        ("patrimoine-1.jpg", 1400, 1050, "Patrimoine 1"),
        ("patrimoine-2.jpg", 1400, 1050, "Patrimoine 2"),
    ],
}


def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))


def make_gradient(w, h, c1, c2):
    c1, c2 = hex_to_rgb(c1), hex_to_rgb(c2)
    img = Image.new("RGB", (w, h))
    for y in range(h):
        t = y / h
        row = tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))
        for x in range(w):
            img.putpixel((x, y), row)
    return img


def get_font(size):
    for path in [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def main():
    idx = 0
    for folder, images in IMAGES.items():
        out_dir = os.path.join(BASE, folder)
        os.makedirs(out_dir, exist_ok=True)
        for filename, w, h, label in images:
            c1, c2 = PALETTE[idx % len(PALETTE)]
            idx += 1
            img = make_gradient(w, h, c1, c2)
            draw = ImageDraw.Draw(img)

            font_label = get_font(max(18, w // 40))
            font_small = get_font(max(14, w // 60))

            text = "PHOTO À REMPLACER"
            bbox = draw.textbbox((0, 0), text, font=font_label)
            tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
            draw.text(((w - tw) / 2, (h - th) / 2 - 20), text, font=font_label, fill="#F2EFE9")

            bbox2 = draw.textbbox((0, 0), label, font=font_small)
            tw2 = bbox2[2] - bbox2[0]
            draw.text(((w - tw2) / 2, (h) / 2 + 25), label, font=font_small, fill="#F2EFE9")

            img.save(os.path.join(out_dir, filename), quality=82)
    print("Images placeholder générées.")


if __name__ == "__main__":
    main()
