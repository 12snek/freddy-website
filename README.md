# Elite Window Cleaning Co. — website

A one-page static site for Freddy's window cleaning business, covering Portsmouth, Hampshire and West Sussex.

## Structure

```
index.html              The whole page
assets/css/style.css    Styling (brand colours pulled from the logo + van wrap)
assets/js/main.js       Mobile menu, footer year, small form UX
assets/images/          Logo, favicon, apple touch icon
```

No build step — it's plain HTML/CSS/JS, so it can be hosted anywhere that serves static files (Netlify, Vercel, GitHub Pages, or ordinary web hosting).

## Before it goes live

1. **Activate the quote form.** The "Get a Free Quote" form uses [FormSubmit.co](https://formsubmit.co) to email submissions straight to `freddymakongo@yahoo.co.uk` — no backend needed. The **first** submission triggers a confirmation email from FormSubmit that Freddy needs to click to activate the form. Send a test enquiry through the live site once it's hosted, then have him check his inbox (and spam folder).
2. **Double-check the contact details** baked into the page: phone `07411 656895`, WhatsApp (same number), email `freddymakongo@yahoo.co.uk`. These came from the van wrap artwork — confirm the WhatsApp number is correct before launch.
3. **Swap in real photos/videos.** The Gallery section (`#gallery` in `index.html`) currently has six placeholder tiles. Replace a `<div class="gallery-item">…</div>` block with an `<img src="assets/images/your-photo.jpg" alt="...">` or a `<video>` tag, and drop the media files into `assets/images/`.
4. **Coverage area.** The site currently says "Portsmouth, Hampshire, West Sussex + surrounding areas" without naming specific towns, since none were confirmed. Add specific towns to the `.coverage-chips` list in `index.html` if Freddy wants to be more precise (helps local SEO too).

## Deploying

Quickest free option: drag the `freddy-website` folder into [Netlify Drop](https://app.netlify.com/drop), or push it to a GitHub repo and enable GitHub Pages. Either gives Freddy a live URL in a couple of minutes; a custom domain can be pointed at it afterwards.
