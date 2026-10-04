# Post Office Horizon IT Inquiry Report, Volume 1

HC 1119, presented to Parliament on 8 July 2025 under section 26 of the Inquiries Act 2005. Sir Wyn Williams's first volume of the Inquiry's report: the human impact of the Horizon scandal (with 17 case illustrations) and the financial redress schemes (HSS, OCS, GLO Scheme, HCRS), with 19 recommendations. 166 pages.

## Scope

Volume 1 only, as the report id `uk-post-office-horizon-inquiry`. The Chair has said Volumes 2 to 5 will be published together later; each will be a further unit of this same report id (one inquiry, one report), added as a volume in `ingest.ts`, as Saville's and Duelfer's further volumes are planned. The Rapid Read summary and the Welsh translation of the recommendations are separate publications and out of scope.

## Source

`archive/post-office-horizon-it-inquiry-vol1-hc1119.pdf`: the Inquiry's own PDF (document INQ00002037), from https://www.postofficehorizoninquiry.org.uk/volume-1-post-office-horizon-it-inquirys-final-report. Crown copyright 2025, licensed under the Open Government Licence v3.0 (stated on the PDF's p.4 and in the Inquiry site's footer). See `datapackage.json`.

## Materials

Checked 2026-10-04 (stage 1 of the preparation pipeline, reportsthatmatter-gqsy.2).

| Need | Source | Role |
| --- | --- | --- |
| Words | The Inquiry's PDF (`_0.pdf`, re-uploaded 9 July 2025), SHA-256 `ebdd61c6…308e` | canonical, citation target |
| Blocks and headings | The same PDF's layout (faces and sizes); it is also tagged (InDesign styles Heading_1-3, List_Paragraph, Note, Footnote_text) | the PDF pipeline reads the layout; the tags are a possible structure source or reference, not used yet |
| Notes | The PDF's page-foot notes (345, numbered once through) | PDF |
| Page anchors | PDF page numbers: the pages carry no folio, and the contents cites PDF pages ("1. INTRODUCTION 6" is PDF p.6) | PDF |
| Provenance | HC 1119, ISBN 978-1-5286-5867-6, E03395555 07/2025 | datapackage |
| Rejected | The "Accessible Version" PDF (466 pages, untagged, large-print reflow at 612 × 859 pt, SHA-256 `ef34507d…f9b3`): the same text at different pagination, so no use for citation or anchors | — |
| Rejected | The 8 July 2025 upload (`…Volume%201.pdf`, now 404; Wayback 20250708121705, SHA-256 `f0a01341…135a`): identical text but for "Sir Wyn Willams" on p.163, corrected in the re-upload | — |
| Reference (not built) | Matthew Somerville's HTML at https://postofficeinquiry.dracos.co.uk/report/volume-1/ (one page per chapter, footnotes linked, OGL) | a candidate clean edition for scoring |

Sourcing checklist:

1. How the PDF was made: Adobe InDesign 20.3 (Macintosh), Adobe PDF Library 17.0, created 7 July 2025, modified 9 July 2025. Fonts embedded (Open Sans body, Roboto headings, Arial notes). Born-digital; the text layer is clean (167 digits per 1,000 words). Page boxes: A4, MediaBox = CropBox = TrimBox, no bleed. Five images (cover and logos).
2. Tagged: yes. Other renditions: the Accessible Version (rejected above), the 8 July upload (rejected above).
3. Official HTML: none. GOV.UK carries the Government's response, not the report; Wayback holds only the PDFs.
4. EPUB: none known.
5. Wikisource: none (searched 2026-10-04).
6. Court documents: not applicable.
7. US congressional: not applicable.
8. Originals: the Inquiry secretariat (posecretariat@postofficehorizoninquiry.org.uk); no request needed while the PDF is tagged and clean.

Layout notes: single column; numbered paragraphs ("1.10.") with a hanging indent; notes at the page foot in Arial with the number flush and the text at a tab stop; InDesign "indent to here" characters (U+0007) in the text layer before every note's text; no folios; quotations and the Select Committee's ten-point plan (p.104) set as inset numbered lists with a blank line between an item's lines.

## Build

`ingest.ts` declares how the report is turned into Markdown. Rebuild from the site repo with `pnpm ingest run uk-post-office-horizon-inquiry`. `fidelity.md` lists the words the pipeline flagged for review.
