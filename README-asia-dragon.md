# 🐉 Asia Dragon – Order Display System

Dies ist ein leichtgewichtiges Bestellanzeige-System für Imbisse und Restaurants wie Asia Dragon.  
Es zeigt Kunden ihre Bestellnummern an, während Mitarbeiter sie bequem per Admin-Oberfläche verwalten können.

---

## 📦 Funktionen

✅ Bestellungen visuell in zwei Bereiche:
- **IN BEARBEITUNG** (gelb)
- **BEREIT ZUR ABHOLUNG** (grün + Sound)

✅ Visuelles Admin-Panel:
- Buttons für Bestellnummern (#50–150)
- Bestellungen erscheinen direkt im richtigen Bereich
- Klick auf „Zubereitung“ → wandert nach „Bereit“
- Klick auf „Bereit“ → wird als „Ausgegeben“ entfernt

✅ Anzeige auf TV oder Monitor (mit großem Text & Blinkeffekt)

✅ 📢 Automatischer Soundeffekt bei „Bereit zur Abholung“

---

## 📁 Projektstruktur

```
asia-dragon/
├── server.js              # Node.js WebSocket-Server
├── public/
│   ├── index.html         # Kundenanzeige (für Fernseher)
│   ├── admin.html         # Admin-Bedienpanel
│   ├── admin.css          # Admin-Styles
│   ├── display.css        # Anzeige-Styles
│   └── bereit.mp3         # Sound bei "Bereit"
└── README.md
```

---

## ▶️ Installation & Start

1. **Node.js installieren:**  
   [https://nodejs.org](https://nodejs.org)

2. **Im Projektordner Terminal öffnen:**
   ```bash
   npm init -y
   npm install express socket.io
   node server.js
   ```

3. **Browser öffnen:**
   - **Admin:** `http://<deine-ip>:3000/admin.html`
   - **Anzeige:** `http://<deine-ip>:3000/index.html`

   *(z. B. auf dem Fernseher im Laden)*

---

## 🌐 WLAN-Nutzung (für iPad oder Tablet)

- Im `server.js` muss `0.0.0.0` als Host stehen (ist bereits gesetzt)
- Finde deine lokale IP (z. B. `192.168.1.23`)
- Rufe auf dem iPad: `http://192.168.1.23:3000/admin.html`

---

## 🔔 Sound verwenden

- Lege eine Datei `bereit.mp3` in den `public/`-Ordner
- Bei neuer Bestellung mit Status „bereit“ wird der Ton abgespielt

---

## 🚀 Zukünftige Ideen

- 🔊 Individuelle Audios mit Bestellnummer (Text-to-Speech oder MP3)
- 🕒 Automatisches Löschen nach 5 Minuten
- 📱 QR-Code zur Anzeige auf Kundengeräten
- 🧾 Bon-Drucker-Anbindung

---

## © 2025 – Asia Dragon 🍜
Projekt entwickelt mit ❤️ für deinen Betrieb
