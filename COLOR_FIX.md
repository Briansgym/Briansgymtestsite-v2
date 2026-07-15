# Color Palette Fix — Brian's Gym V2

## PROBLEM
The current build introduced a red-orange accent (#e63946) that does not exist on the client's actual website. The client's instruction was "slightly darker versions of the current site's palette" — meaning darken the EXISTING colors, not introduce new ones.

## CURRENT SITE ACTUAL PALETTE (extracted from CSS)
```css
--color-primary:        #2c79bf;  /* Blue */
--color-primary-light:  #4a9ae0;  /* Light blue */
--color-primary-dark:   #1a5a9e;  /* Dark blue */
--color-primary-glow:   rgba(44, 121, 191, 0.3);
--color-navy:           #0a1628;  /* Deep navy */
--color-navy-light:     #0f1f38;
--color-navy-medium:    #142848;
--color-dark-surface:   #111a2e;
--color-white:          #ffffff;
--color-off-white:      #f0f4f8;
--color-light-gray:     #e2e8f0;
--color-medium-gray:    #94a3b8;
--color-dark-gray:      #475569;
--color-text:           #1e293b;
--color-text-light:     #cbd5e1;
--color-success:        #10b981;  /* Green checkmarks */
--color-warning:        #f59e0b;  /* Amber/gold — stars, badges */
--color-danger:         #ef4444;  /* Red — only for errors */
```

## CORRECTED PALETTE (same hues, slightly darker for premium feel)
```css
--color-primary:        #1e5a99;  /* Darker blue (from #2c79bf) */
--color-primary-light:  #2c79bf;  /* Original blue as light variant */
--color-primary-dark:   #143d6b;  /* Deep blue */
--color-primary-glow:   rgba(30, 90, 153, 0.3);
--color-navy:           #070f1d;  /* Slightly darker navy (from #0a1628) */
--color-navy-light:     #0b1a30;
--color-navy-medium:    #102240;
--color-dark-surface:   #0c1424;
--color-white:          #ffffff;
--color-off-white:      #f0f4f8;
--color-light-gray:     #e2e8f0;
--color-medium-gray:    #94a3b8;
--color-dark-gray:      #475569;
--color-text:           #1e293b;
--color-text-light:     #cbd5e1;
--color-success:        #10b981;  /* Keep green */
--color-warning:        #f59e0b;  /* Keep amber/gold for stars and badges */
--color-danger:         #ef4444;  /* Keep red — errors only */
```

## WHAT TO CHANGE
1. Remove #e63946 (red-orange) from everywhere — tailwind.config.ts, globals.css, all component files
2. Replace ALL CTA buttons that were using #e63946 with the darker blue primary (#1e5a99)
3. Replace ALL accent styling that was using #e63946 with the primary blue or amber (#f59e0b) depending on context:
   - CTA buttons → primary blue (#1e5a99)
   - Star ratings → amber (#f59e0b) 
   - Badge highlights → amber (#f59e0b)
   - Section accent lines → primary blue gradient
4. Keep the darker navy (#070f1d) — that part was correct
5. Keep everything else in the site the same — structure, content, layout, SEO, all unchanged

## DO NOT
- Do NOT add any new colors
- Do NOT change the layout or structure
- Do NOT change any content
- Do NOT change any components beyond color values
- Do NOT change the font or typography

## FILES TO UPDATE
- tailwind.config.ts — color tokens
- app/globals.css — any hardcoded color values
- components/*.tsx — any hardcoded color values (especially CTAs, badges, accents)
- app/page.tsx — hero CTAs, any accent colors
- app/*/page.tsx — any accent colors on sub-pages

Search for #e63946, red-orange, accent, and replace with the correct palette colors per the mapping above.
