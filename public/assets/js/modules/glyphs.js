'use strict';

const nexusGlyphs = [
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="3"/><path d="M8 1v6m8 1h-6m-1 8V10m-8-1h6"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="8,2 14,8 8,14 2,8"/><circle cx="8" cy="8" r="2"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 2h12v12H2z"/><path d="M6 6h4v4H6z"/><path d="M8 2v4m0 4v4m-6-8h4m4 0h4"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="3" cy="8" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="13" cy="8" r="1.5"/><path d="M4.5 8h2m2 0h2"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 1l14 14M1 15L15 1"/><circle cx="8" cy="8" r="4"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="8,1 15,8 8,15 1,8"/><path d="M5 8h6m-3-3v6"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 6h12l-2 4H4z"/><circle cx="4" cy="4" r="1"/><circle cx="12" cy="4" r="1"/><circle cx="6" cy="12" r="1"/><circle cx="10" cy="12" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2L3 6v8h10V6z"/><path d="M6 9h4v5H6z"/><path d="M8 2v7"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="4" cy="4" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="8" cy="12" r="2"/><path d="M6 4h4m-6 6l4-4m4 4l-4-4"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="10" height="10" rx="2"/><path d="M7 1v4m2 0V1m-2 14v-4m2 4v-4M1 7h4m0 2H1m14-2h-4m0 2h4"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 8h3l2-4 2 8 2-4h3"/><circle cx="8" cy="8" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="8,2 12,6 8,10 4,6"/><polygon points="8,6 12,10 8,14 4,10"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1v14M1 8h14"/><circle cx="5" cy="5" r="1"/><circle cx="11" cy="5" r="1"/><circle cx="5" cy="11" r="1"/><circle cx="11" cy="11" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3l10 10M13 3L3 13"/><rect x="6" y="6" width="4" height="4"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="3" r="1.5"/><circle cx="3" cy="13" r="1.5"/><circle cx="13" cy="13" r="1.5"/><path d="M8 4.5L3 11.5m5-7l5 7M3 13h10"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="4" height="4"/><rect x="10" y="2" width="4" height="4"/><rect x="6" y="10" width="4" height="4"/><path d="M4 6v4h4m2-4v4h-4"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2v12M2 8h12"/><path d="M4 4l8 8M12 4l-8 8"/><circle cx="8" cy="8" r="2"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="2,8 6,2 10,8 14,2"/><path d="M2 14h12"/><circle cx="6" cy="12" r="1"/><circle cx="10" cy="12" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="7" width="6" height="2"/><rect x="9" y="7" width="6" height="2"/><circle cx="4" cy="4" r="1.5"/><circle cx="12" cy="4" r="1.5"/><circle cx="8" cy="12" r="1.5"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3h10v10H3z"/><path d="M6 1v4m4 0V1m-4 14v-4m4 4v-4M1 6h4m0 4H1m14-4h-4m0 4h4"/><circle cx="8" cy="8" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="4" cy="8" r="2"/><circle cx="12" cy="8" r="2"/><path d="M6 8h4"/><path d="M4 6V2m0 12v-4m8-4V2m0 12v-4"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="8,1 14,5 11,14 5,14 2,5"/><circle cx="8" cy="7" r="2"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 4h6l2 4-2 4H1m14 0H9l-2-4 2-4h6"/><circle cx="8" cy="8" r="1"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="8" height="8" rx="1"/><path d="M2 2h2v2H2zm10 0h2v2h-2zM2 12h2v2H2zm10 0h2v2h-2z"/><path d="M4 6h8m-8 4h8"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 2v4m0 4v4M2 8h4m4 0h4"/><circle cx="8" cy="8" r="1.5"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 2l4 6-4 6m12-12l-4 6 4 6"/><circle cx="8" cy="8" r="2"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="8,3 13,8 8,13 3,8"/><rect x="6" y="6" width="4" height="4"/><path d="M8 1v2m0 10v2M1 8h2m10 0h2"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5h10l-2 6H5z"/><circle cx="6" cy="3" r="1"/><circle cx="10" cy="3" r="1"/><path d="M6 4v1m4-1v1m-3 7v2m2-2v2"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="5" cy="5" r="2"/><circle cx="11" cy="11" r="2"/><path d="M7 5h2v6h-2zm2 0l2 6M7 11L5 5"/></svg>',
    '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="6" width="10" height="4"/><path d="M1 8h2m10 0h2M8 1v5m0 4v5"/><circle cx="5" cy="8" r="1"/><circle cx="11" cy="8" r="1"/></svg>'
];

export default nexusGlyphs;
