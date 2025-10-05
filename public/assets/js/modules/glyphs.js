'use strict';

const nexusGlyphs = [
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="3"/><path d="M8 1v6M8 9v6M1 8h6M9 8h6"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="8,2 14,6 14,10 8,14 2,10 2,6"/><circle cx="8" cy="8" r="1.5"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 2h12v12H2z"/><path d="M6 6h4v4H6z"/><path d="M2 8h4M10 8h4M8 2v4M8 10v4"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8l2-2 4 4 4-4"/><circle cx="5" cy="6" r="1"/><circle cx="9" cy="10" r="1"/><circle cx="13" cy="6" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><triangle points="8,3 13,8 8,13 3,8"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 2l12 12M14 2L2 14"/><circle cx="4" cy="4" r="1"/><circle cx="12" cy="12" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="4" height="4"/><rect x="9" y="9" width="4" height="4"/><path d="M7 5h2v6"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2L14 8L8 14L2 8Z"/><path d="M5 8h6M8 5v6"/><circle cx="8" cy="8" r="0.5"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 6h4l2-2 2 2h4"/><circle cx="4" cy="6" r="1"/><circle cx="8" cy="4" r="1"/><circle cx="12" cy="6" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1h6v6H1z"/><path d="M9 9h6v6H9z"/><path d="M7 4l2 2 2-2"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="4" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><path d="M8 6l-2 4M8 6l2 4"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 2h12v4H2z"/><path d="M2 10h12v4H2z"/><path d="M8 6v4"/><circle cx="8" cy="8" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2v12M2 8h12"/><circle cx="5" cy="5" r="1"/><circle cx="11" cy="5" r="1"/><circle cx="5" cy="11" r="1"/><circle cx="11" cy="11" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3l10 10M13 3L3 13"/><rect x="6" y="6" width="4" height="4"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1L15 8L8 15L1 8Z"/><path d="M4 8h8M8 4v8"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="3" cy="3" r="1.5"/><circle cx="13" cy="3" r="1.5"/><circle cx="8" cy="13" r="1.5"/><path d="M3 3l5 10M13 3L8 13M3 3h10"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="5" height="5"/><rect x="9" y="9" width="5" height="5"/><path d="M7 4.5h2v7"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2l6 6-6 6-6-6z"/><circle cx="8" cy="5" r="0.5"/><circle cx="8" cy="8" r="0.5"/><circle cx="8" cy="11" r="0.5"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 5h3l3-3 3 3h3"/><path d="M5 8v3l3 3 3-3V8"/><circle cx="8" cy="8" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="8,1 15,5 15,11 8,15 1,11 1,5"/><path d="M4 8h8M8 4v8"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 4h14v8H1z"/><path d="M4 4v8M8 4v8M12 4v8"/><circle cx="6" cy="8" r="1"/><circle cx="10" cy="8" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M2 8h4M10 8h4M8 2v4M8 10v4"/><circle cx="8" cy="8" r="1.5"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3l4 4-4 4M9 3l4 4-4 4"/><circle cx="8" cy="8" r="0.5"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="6" width="14" height="4"/><path d="M4 2v12M8 2v12M12 2v12"/><circle cx="4" cy="8" r="0.5"/><circle cx="8" cy="8" r="0.5"/><circle cx="12" cy="8" r="0.5"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 3L13 8L8 13L3 8Z"/><path d="M6 8h4M8 6v4"/><rect x="7" y="7" width="2" height="2"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="4" cy="4" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><path d="M6 4h4M4 6v4M12 6v4M6 12h4"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 2l6 6 6-6M14 14l-6-6-6 6"/><circle cx="8" cy="8" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="8,2 14,8 8,14 2,8"/><path d="M5 8l3-3 3 3-3 3z"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1h6v6H1z"/><path d="M9 1h6v6H9z"/><path d="M1 9h6v6H1z"/><path d="M9 9h6v6H9z"/><circle cx="8" cy="8" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1v14M1 8h14"/><circle cx="4" cy="4" r="1"/><circle cx="12" cy="4" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><rect x="7" y="7" width="2" height="2"/></svg>'
];

export default nexusGlyphs;