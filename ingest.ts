import {
  pipeline,
  layoutPageJoins,
  quoteListRunOns,
  runningFurniture,
  footnoteBlock,
  footnoteNumbers,
  pdfPageNumbers,
  layoutMarkers,
  numberedParagraphs,
  hangingIndents,
  typographicHeadings,
} from "@rtm/ingest";

/**
 * How this report is built. Owned by the report: every decision that shaped
 * its text is named here, and the passes it composes are library code, so a
 * fix to a shared pass reaches every report that calls it.
 *
 * The source is the Inquiry's born-digital, tagged InDesign PDF (166 A4
 * pages, single column). Its structure tree (Heading_1-3, List_Paragraph,
 * Note/Footnote_text) is not read: the PDF pipeline below reads the layout.
 *
 * Needs @rtm/ingest with footnoteNumbers("tabbed"), pdfPageNumbers() and
 * typographicHeadings({ faces }) (ingest branch pohorizon-passes; not yet
 * released when this was written).
 */
export default pipeline({
  id: "uk-post-office-horizon-inquiry",
  title: "Post Office Horizon IT Inquiry Report, Volume 1",
  authors: "Sir Wyn Williams (Chair)",
  published_at: "8 July 2025",
  source_url: "https://www.postofficehorizoninquiry.org.uk/sites/default/files/2025-07/Post%20Office%20Horizon%20IT%20Inquiry%20Final%20Report%20Volume%201_0.pdf",
  repo: ".",
  volumes: [
    // HC 1119, the Inquiry's re-upload of 9 July 2025 (the 8 July file, now gone from the site, differs
    // only in "Sir Wyn Willams" on p.163; see README).
    { path: "archive/post-office-horizon-it-inquiry-vol1-hc1119.pdf", sha256: "ebdd61c68bf32b916c10037293d851921f9e422fb3fac54558f26ec6c143308e" },
  ],
  passes: [
    // A paragraph run over a page break joins when the layout says it runs on (p.107 to p.108, 4.293).
    // numberedBody: every body paragraph is numbered, so a page that opens on unnumbered text at the hanging
    // indent carries on the paragraph above even past a full stop: 3.71 "…she was still a serving prisoner." /
    // "Mrs McDonald had anticipated…" (p.26), 5.4's list of recommendations "…Sixth, …" / "They should,
    // rather, …" (p.118); six joins, each read against the page (reportsthatmatter-sh1b).
    layoutPageJoins({ numberedBody: true }),
    // A quotation running over a page arrives as two.
    quoteListRunOns(),
    // "Post Office Horizon IT Inquiry Report: Volume 1" heads every page from p.5 on.
    runningFurniture(),
    // No page carries a folio, and the contents cites PDF pages ("1. INTRODUCTION 6" is PDF p.6).
    // Without this, runningFurniture read the running head's "Volume 1" as the folio of pages 1-51.
    pdfPageNumbers(),
    // 345 notes at each page foot, numbered once through the volume.
    footnoteBlock(),
    // ... set "9<tab>Most of the persons…" (p.8) and "11<tab>[INQ00002032]." (p.9): the number flush,
    // the text at a tab stop, often opening on a bracketed document reference; Arial 15 under an
    // Open Sans 17 body. The bare style read 3 of the 345.
    footnoteNumbers("tabbed"),
    // Markers are small raised digits after a word or a closing quotation mark ("disastrous.9", p.8).
    layoutMarkers(),
    // "1.10." paragraphs, the number at the margin and the text hanging one tab in (p.8).
    numberedParagraphs(),
    hangingIndents(),
    // Headings are set only by face: the chapters in Roboto 27 bold (p.12 "3. THE HUMAN IMPACT"),
    // the lettered sub-sections the contents lists in 18-20pt bold, Open Sans or Roboto ("a.
    // Introduction" p.12 is Open Sans 20, "c. Case Illustrations" p.22 Roboto 20, "b. The Horizon
    // Shortfall Scheme - HSS" p.50 Open Sans 18), and the topics and case-illustration names under
    // them in Open Sans 18 italic ("Martin Griffiths (Deceased)" p.22, "Late Claims" p.55).
    typographicHeadings({
      firstLevel: 2,
      faces: [
        ["Roboto|27|#000000|b"],
        ["OpenSans|20|#000000|b", "Roboto|20|#000000|b", "OpenSans|18|#000000|b"],
        ["OpenSans|18|#000000|i"],
      ],
    }),
  ],
});
