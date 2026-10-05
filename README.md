# XANH LAUNDRY – franchise landing page

Production build of the Claude Design prototype in `../project/Xanh Laundry.dc.html`.
Stack: Vite + React 18 + TypeScript + Tailwind CSS 3 + lucide-react.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # static output in dist/ – deploy to any static host
npm run preview
```

## Where things live

- `src/data/content.ts` – all copy, prices, comparison table, image lists, contact links. Most content edits happen here.
- `src/sections/*` – one component per page section, in page order in `src/App.tsx`.
- `public/images/` – images used by the page (renamed to ASCII from the design bundle's `assets/` and `uploads/`).

## Still to wire up

- **Lead form**: `src/submitLead.ts`. Set `VITE_LEAD_ENDPOINT` (e.g. in `.env.local`) to a URL that accepts a JSON POST
  (CRM, Google Apps Script, Zapier/Make webhook). Without it, submissions show the thank-you screen and are only logged to the console.
- **Store-opening videos**: fill `src` in `openingVideos` (`src/data/content.ts`) with an `.mp4` path or a YouTube embed URL.
  Empty entries show the "Video sắp cập nhật" placeholder.

## Differences from the prototype

- Menu order is now Vì sao chọn chúng tôi · Chi phí · Quy trình · Công nghệ, matching the section order.
- "GỌI 0868 430 549", the Hotline/Zalo rows in the form section, and the tablet "Tư vấn ngay" buttons are now working links/buttons.
- Lightbox closes on Escape; form fields have labels/ARIA wiring; footer year is automatic.
- The unused Version A/B/C equipment layouts in the prototype were not ported.
