/* HELANA FAITH — faith ontology.
 *
 * One knowledge base behind the landing page: every glow on screen is a node
 * with a class, a weight, and a source (chapter + line from the webzine). The
 * graph, the dashboard, the inspector and the Web MCP tools all read this one
 * object. Text is taken from index.html; nothing here invents a claim.
 */

export const COL = ['#f4efe6', '#e85d4c', '#d4a84b', '#3db8a8', '#8b7cf0', '#8fb3c9', '#f0c75e'];
export const CLASS = ['Hub', 'Pillar', 'Step', 'Channel', 'Voice', 'Rhythm', 'Install'];
export const SECTIONS = ['cover', 'pillars', 'map', 'method', 'channels', 'voice', 'rhythm', 'install'];

/* Brand strings that panels.js and onto.js paint into the 3D scene. Keeping
   them here means the metalcare code stays generic and the copy stays one
   place per site. */
export const BRAND = {
  kicker: 'Faith ontology',
  kickerDash: 'Faith ontology · WebGPU knowledge graph',
  kickerIntro: 'Faith ontology · interactive 3D · WebGPU',
  nameA: 'Helana ',
  nameB: 'Faith',
  lede: 'An interactive 3D knowledge base for a third-perspective faith webzine. Every glow is an entity — word, prayer, community, witness — every line a relation, and each one traces back to a chapter.',
  introA: 'Starting from doubt.',
  introB: 'Toward genuine faith.',
  introSub: 'Doubt, dialogue and fantasy, rebuilt as a 3D knowledge base. Drag to orbit, scroll to walk, click a glow to read its source.',
  note: 'ONE NAME · NOT A COUNSELING SERVICE · CRISIS → CHURCH & PROFESSIONALS',
  noteShort: 'ONE NAME · NOT A COUNSELING SERVICE',
  noteWrap: ['ONE NAME · NOT A COUNSELING SERVICE', 'CRISIS → CHURCH · PROFESSIONALS'],
  coverTitle: 'Starting from doubt.<br><em>Toward genuine faith.</em>',
  coverDeck: 'Crossing Christianity, Catholicism and Buddhism with a third perspective — seeking genuine faith not from doctrine but from doubt and imagination. This page is also the knowledge base: every glow is an entity with a source.'
};

const N = [];
const L = [];
const add = (id, label, cls, s, val, ref, quote, desc, extra = {}) => {
  N.push({ id, label, cls, s, val, ref, quote, desc, ...extra });
};
const link = (source, target, rel) => L.push({ source, target, rel });

/* ── hub + chapters ─────────────────────────────────────────────── */
add('faith', 'HELANA FAITH', 'Hub', 0, 14, 'Cover', 'Word · Prayer · Community · Witness — under one name.',
  'The hub where the four pillars gather. Every account is under Big Sister’s name; the content leaves on the Hope track.', { chapter: 'cover', big: 1 });
add('ch.pillars', '01 · Pillars', 'Hub', 0, 7, '01 · Pillars', 'Four Pillars · The Stage of Faith',
  'Word, prayer, community, witness. Four pillars gathering into one voice — tap a card to fill its weight.', { chapter: 'pillars' });
add('ch.map', '02 · Map', 'Hub', 0, 7, '02 · Infographic', 'The Map Where Hope Flows',
  'The dotted paths that keep content and care from drifting apart. Hover or tap a node to open its description.', { chapter: 'map' });
add('ch.method', '03 · Method', 'Hub', 0, 7, '03 · Method', 'Content Pipeline, Five Stages',
  'Receive → Draft → Shape → Send → Rest. The Hope track respects the same flow.', { chapter: 'method' });
add('ch.channels', '04 · Channels', 'Hub', 0, 7, '04 · Channels', 'Doors Going Out',
  'Same root, different doors. Depth and speed differ by platform.', { chapter: 'channels' });
add('ch.voice', '05 · Voice', 'Hub', 0, 7, '05 · Voice', 'Tone · One Voice',
  'Under Big Sister’s name. Not showing off, not hiding, never contradicting the care household.', { chapter: 'voice' });
add('ch.rhythm', '06 · Rhythm', 'Hub', 0, 7, '06 · Rhythm', 'Weekly Rhythm',
  'Rhythm over perfection. A filling bar is a direction, not a target.', { chapter: 'rhythm' });
add('ch.install', '07 · Install', 'Hub', 0, 7, '07 · Install', 'Add to Home Screen',
  'No service worker. Manifest plus a gold F monogram, so it opens fast. Chrome / Edge install.', { chapter: 'install' });
['ch.pillars', 'ch.map', 'ch.method', 'ch.channels', 'ch.voice', 'ch.rhythm', 'ch.install']
  .forEach((c) => link('faith', c, 'chapter'));

/* ── 01 · the four pillars ──────────────────────────────────────── */
add('p.word', 'Word', 'Pillar', 1, 9, '01 · Pillars', 'Scripture, reflection, notes. Not long-winded — one verse to hold the day.',
  'Daily and weekly reflection drafts, scripture cards, short commentary, kept apart from the Tistory work log.', { chapter: 'pillars', weight: 92 });
add('p.prayer', 'Prayer', 'Pillar', 1, 8, '01 · Pillars', 'Petition, gratitude, silence. Keeping the boundary between public channels and a personal journal.',
  'A prayer request board without sensitive detail; petitions that touch the care household; answered prayers kept as pseudonym and generalization.', { chapter: 'pillars', weight: 78 });
add('p.community', 'Community', 'Pillar', 1, 7, '01 · Pillars', 'Discord lobby and sharing. Not a place to be alone, but not loud either.',
  'Linked with the S21 Phone Discord, a weekly check-in rhythm, handoff etiquette from the CONSTITUTION.', { chapter: 'pillars', weight: 85 });
add('p.witness', 'Witness', 'Pillar', 1, 8, '01 · Pillars', 'Letting life speak. Sent outward as video, writing and short clips.',
  'The YouTube Faith track, webzine and shorts drafts, a tone of witness rather than boasting.', { chapter: 'pillars', weight: 88 });
['p.word', 'p.prayer', 'p.community', 'p.witness'].forEach((c) => link('ch.pillars', c, 'contains'));

/* ── 02 · the hope map ──────────────────────────────────────────── */
add('m.word', 'Word · Scripture', 'Pillar', 1, 6, '02 · Infographic', 'Scripture, reflection, short commentary. The root of the content.',
  'Top left of the map. Every path starts here.', { chapter: 'map' });
add('m.prayer', 'Prayer · Quiet', 'Pillar', 1, 6, '02 · Infographic', 'Petition and silence. Filtered for sensitive information before publishing.',
  'When prayer crosses the map, private detail does not travel with it.', { chapter: 'map' });
add('m.community', 'Community · Together', 'Pillar', 1, 6, '02 · Infographic', 'Discord and sharing. Not a place to be alone.',
  'The lobby is real time; the sharing is courteous.', { chapter: 'map', href: 'https://discord.gg/JTYSZv2WQE' });
add('m.youtube', 'YouTube', 'Channel', 3, 5, '02 · Infographic', 'Teaching, testimony, shorts. Witness sent outward.',
  'The slow, deep track that matches 1:1 with the hub ecosystem.', { chapter: 'map' });
add('m.discord', 'Discord', 'Channel', 3, 5, '02 · Infographic', 'Real-time lobby. Shared with the S21 Phone server.',
  'Greetings, sharing, reports — courtesy over noise.', { chapter: 'map', href: 'https://discord.gg/JTYSZv2WQE' });
add('m.pages', 'Pages · Notes', 'Channel', 3, 4, '02 · Infographic', 'This webzine and the repo documents. An installable hub.',
  'A faith satellite of the original SSOT; the docs ship as HTML alongside.', { chapter: 'map', href: 'https://github.com/helena751107/helana-faith' });
['m.word', 'm.prayer', 'm.community', 'm.youtube', 'm.discord', 'm.pages'].forEach((c) => link('ch.map', c, 'contains'));
link('ch.map', 'p.word', 'contains');

/* ── 03 · the 5-stage pipe ──────────────────────────────────────── */
add('s.receive', 'Receive', 'Step', 2, 5, '03 · Method', 'Scripture, context, title. Not polished yet.',
  'Today’s verse to hold, a title that came up at home, community prayer requests.', { chapter: 'method' });
add('s.draft', 'Draft', 'Step', 2, 5, '03 · Method', '_Grok draft to 80%. Shape first, voice later.',
  'A rough draft beats a blank screen; polish is a later stage.', { chapter: 'method' });
add('s.shape', 'Shape', 'Step', 2, 5, '03 · Method', 'Tone, length, publish boundary.',
  'Witness over boasting, invitation over condemnation. Sensitive detail is lifted out here.', { chapter: 'method' });
add('s.send', 'Send', 'Step', 2, 5, '03 · Method', 'Shaped per channel: YouTube, Discord, Pages.',
  'One root, three doors going out.', { chapter: 'method' });
add('s.rest', 'Rest', 'Step', 2, 5, '03 · Method', 'See the response, then next week. Rest is a stage too.',
  'A pipeline that never rests does not last.', { chapter: 'method' });
['s.receive', 's.draft', 's.shape', 's.send', 's.rest'].forEach((c) => link('ch.method', c, 'contains'));
['s.receive', 's.draft', 's.shape', 's.send'].forEach((c, i) => link(c, ['s.draft', 's.shape', 's.send', 's.rest'][i], 'flow'));
link('s.rest', 's.receive', 'flow');

/* ── 04 · the doors out ─────────────────────────────────────────── */
add('g.youtube', 'YouTube · Faith', 'Channel', 3, 6, '04 · Channels', 'Teaching, testimony, shorts. The witness track that leaves a mark.',
  'Matched 1:1 with the hub ecosystem — the slowest and deepest door.', { chapter: 'channels', href: 'https://helena751107.github.io/helena_phone/' });
add('g.discord', 'Discord', 'Channel', 3, 6, '04 · Channels', 'The S21 Phone server lobby. Real-time greetings, sharing, reports.',
  'Courtesy over noise. Sensitive records are never kept here.', { chapter: 'channels', href: 'https://discord.gg/JTYSZv2WQE' });
add('g.pages', 'GitHub · Pages', 'Channel', 3, 5, '04 · Channels', 'This webzine, the icons, the install manifest.',
  'A faith satellite of the original SSOT, and an installable hub.', { chapter: 'channels', href: 'https://github.com/helena751107/helana-faith' });
['g.youtube', 'g.discord', 'g.pages'].forEach((c) => link('ch.channels', c, 'contains'));

/* ── 05 · tone ──────────────────────────────────────────────────── */
add('v.verse', 'John 1:5', 'Voice', 4, 8, '05 · Voice', 'And the light shineth in darkness; and the darkness comprehended it not.',
  'The tone anchor. Every public reflection hangs from this verse.', { chapter: 'voice' });
add('v.name', 'Big Sister’s name', 'Voice', 4, 7, '05 · Voice', 'All public accounts are under Big Sister’s name.',
  'No face in front; one name carries it.', { chapter: 'voice' });
add('v.rule', 'Witness · Invitation', 'Voice', 4, 7, '05 · Voice', 'Witness instead of boasting. Invitation instead of condemnation.',
  'Before a sentence ships: does this invite someone in?', { chapter: 'voice' });
add('v.anon', 'Pseudonym · Generalization', 'Voice', 4, 6, '05 · Voice', 'Personal pain gets pseudonyms and generalization.',
  'The story is shared; the person is protected.', { chapter: 'voice' });
add('v.care', 'Care First', 'Voice', 4, 8, '05 · Voice', 'Track 1 (care) safety comes before content views.',
  'If care starts to shake, the content stops — even while views climb.', { chapter: 'voice' });
add('v.handoff', 'Handoff Etiquette', 'Voice', 4, 5, '05 · Voice', 'The handoff etiquette of the CONSTITUTION.',
  'Hand over the context and the boundary together.', { chapter: 'voice' });
['v.verse', 'v.name', 'v.rule', 'v.anon', 'v.care', 'v.handoff'].forEach((c) => link('ch.voice', c, 'contains'));

/* ── 06 · weekly rhythm ─────────────────────────────────────────── */
add('r.word', 'Word 88', 'Rhythm', 5, 6, '06 · Rhythm', 'Weight of the week: 88%.',
  'Reflection and scripture cards are the centre of the weekly rhythm.', { chapter: 'rhythm' });
add('r.prayer', 'Prayer 70', 'Rhythm', 5, 5, '06 · Rhythm', 'Weight of the week: 70%.',
  'The prayer board and a kept silence.', { chapter: 'rhythm' });
add('r.together', 'Community 75', 'Rhythm', 5, 5, '06 · Rhythm', 'Weight of the week: 75%.',
  'The weekly check-in and the Discord lobby.', { chapter: 'rhythm' });
add('r.witness', 'Witness 65', 'Rhythm', 5, 5, '06 · Rhythm', 'Weight of the week: 65%.',
  'One piece of video, writing or clip a week is enough.', { chapter: 'rhythm' });
add('r.rest', 'Rest 50', 'Rhythm', 5, 4, '06 · Rhythm', 'Weight of the week: 50%.',
  'Deliberately left empty. The next week needs the gap.', { chapter: 'rhythm' });
add('r.checkin', 'Weekly Check-in', 'Rhythm', 5, 4, '06 · Rhythm', 'Once a week, a voice asking how you are.',
  'People before numbers. The check-in retunes the rhythm.', { chapter: 'rhythm' });
['r.word', 'r.prayer', 'r.together', 'r.witness', 'r.rest', 'r.checkin'].forEach((c) => link('ch.rhythm', c, 'contains'));

/* ── 07 · install ───────────────────────────────────────────────── */
add('i.manifest', 'Manifest', 'Install', 6, 5, '07 · Install', 'site.webmanifest plus a gold F monogram.',
  'Add to Home Screen or install as an app; it opens in a standalone window.', { chapter: 'install' });
add('i.nows', 'No service worker', 'Install', 6, 4, '07 · Install', 'No service worker, so nothing is trapped in a cache.',
  'The page you open is always the current one.', { chapter: 'install' });
add('i.icon', 'F Monogram', 'Install', 6, 4, '07 · Install', 'icons/icon-192|512.png.',
  'A gold F — a mark you can find on a small screen.', { chapter: 'install' });
add('i.eco', 'S21 Ecosystem', 'Install', 6, 5, '07 · Install', 'S21 Phone · Log · Piano · PsyCare, the same family.',
  'One name, different rooms; cross over from the eco-bar.', { chapter: 'install', href: 'https://helena751107.github.io/helena_phone/' });
['i.manifest', 'i.nows', 'i.icon', 'i.eco'].forEach((c) => link('ch.install', c, 'contains'));

/* ── cross-relations: the faith logic ──────────────────────────── */
[['p.word', 'm.word'], ['p.word', 's.receive'], ['p.word', 'v.verse'], ['p.word', 'r.word'],
 ['p.prayer', 'm.prayer'], ['p.prayer', 'v.anon'], ['p.prayer', 'r.prayer'],
 ['p.community', 'm.community'], ['p.community', 'g.discord'], ['p.community', 'r.together'],
 ['p.witness', 'm.youtube'], ['p.witness', 'g.youtube'], ['p.witness', 'r.witness'],
 ['m.word', 'm.prayer'], ['m.prayer', 'm.community'], ['m.youtube', 'm.pages'], ['m.discord', 'm.community'],
 ['s.draft', 'v.rule'], ['s.shape', 'v.anon'], ['s.shape', 'v.rule'], ['s.send', 'g.youtube'],
 ['s.send', 'g.discord'], ['s.send', 'g.pages'], ['s.rest', 'r.rest'],
 ['v.name', 'g.youtube'], ['v.name', 'g.pages'], ['v.care', 'faith'], ['v.care', 'p.prayer'],
 ['g.youtube', 'r.witness'], ['g.pages', 'i.manifest'], ['g.discord', 'r.together'],
 ['r.checkin', 'p.community'], ['r.rest', 's.rest'],
 ['i.nows', 'g.pages'], ['i.eco', 'g.pages'], ['i.manifest', 'faith'], ['i.manifest', 'i.nows']
].forEach(([a, b]) => link(a, b, 'support'));

/* ── deterministic layout: chapter ring, entities orbiting their chapter ── */
const chapterOf = {};
SECTIONS.forEach((ch, i) => { chapterOf[ch] = i; });
const chapters = ['ch.pillars', 'ch.map', 'ch.method', 'ch.channels', 'ch.voice', 'ch.rhythm', 'ch.install'];
const byId = new Map(N.map((n) => [n.id, n]));
const chapterPos = {};
N.forEach((n) => {
  const ch = n.chapter;
  if (n.id === 'faith') { n.pos = [0, 46, 0]; return; }
  if (n.id.startsWith('ch.')) {
    const k = chapters.indexOf(n.id), a = (k / chapters.length) * Math.PI * 2 - Math.PI / 2;
    n.pos = [Math.cos(a) * 330, 36 + Math.sin(k * 1.7) * 38, Math.sin(a) * 330];
    chapterPos[n.chapter] = n.pos;
  }
});
const counts = {};
N.forEach((n) => { if (!n.id.startsWith('ch.') && n.id !== 'faith') counts[n.chapter] = (counts[n.chapter] || 0) + 1; });
const seen = {};
N.forEach((n) => {
  if (n.id === 'faith' || n.id.startsWith('ch.')) return;
  const base = chapterPos[n.chapter] || [0, 0, 0];
  const k = (seen[n.chapter] = (seen[n.chapter] || 0) + 1) - 1;
  const a = k * 2.399963 + chapterOf[n.chapter] * 0.7;
  const r = 74 + (k % 3) * 26;
  const y = Math.sin(k * 1.3 + 0.6) * 46 + (k % 2 ? 16 : -12);
  n.pos = [base[0] + Math.cos(a) * r, base[1] + y, base[2] + Math.sin(a) * r];
});

export const NODES = N;
export const LINKS = L.filter((l) => byId.has(l.source) && byId.has(l.target));
export const CHAPTER_IDS = chapters;
export const chapterIndex = (id) => SECTIONS.indexOf(String(id || '').replace(/^ch\./, ''));
export const stats = {
  nodes: NODES.length,
  relations: LINKS.length,
  chapters: chapters.length,
  sources: new Set(NODES.map((n) => n.ref)).size
};
