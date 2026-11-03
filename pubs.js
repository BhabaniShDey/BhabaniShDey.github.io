(function () {
  var accent = '#0B5CAD';
  var me = 'Dey, B.S.';
  var areaNames = { hrc: 'Human–robot collaboration', s2r: 'Sim2Real gap', safe: 'Safe control for unknown systems', ct: 'Contraction theory', bio: 'Biomedical control' };
  var raw = [
      { id: 'J1', kind: 'journal', area: 'ct', year: '2026', title: 'On incremental stability of interconnected switched systems', authors: 'Dey, B.S., Kar, I.N. and Jagtap, P.', venue: 'International Journal of Systems Science, 57(4), 895–910' },
      { id: 'J2', kind: 'journal', area: 'ct', year: '2026', title: 'A matrix measure framework for incremental stability of mixed-mode switched systems', authors: 'Dey, B.S., Paul, C.K. and Kar, I.N.', venue: 'International Journal of Systems Science' },
      { id: 'J3', kind: 'journal', area: 'safe', year: '2026', title: 'Neural controller for incremental stability of unknown continuous-time systems', authors: 'Basu, A., Dey, B.S. and Jagtap, P.', venue: 'International Journal of Systems Science' },
      { id: 'J4', kind: 'journal', area: 'hrc', year: '2026', title: 'Safety in admittance control using reference trajectory shaping', authors: 'Paul, C.K., Dey, B.S. and Kar, I.N.', venue: 'International Journal of Human–Computer Interaction · corresponding author' },
      { id: 'J5', kind: 'journal', area: 'safe', year: '2026', title: 'An inverse sinh-based robust discrete-time model reference sliding mode control for systems with unmatched uncertainty', authors: 'Nath, A., Kumar, M. and Dey, B.S.', venue: 'Journal of the Franklin Institute · corresponding author' },
      { id: 'J6', kind: 'journal', area: 'ct', year: '2026', title: '2-Contraction and Poincaré-index theory based framework for stability analysis of nonlinear dynamical systems with multiple equilibria', authors: 'Bora, R.M., Dey, B.S. and Kar, I.N.', venue: 'International Journal of Control, Automation, and Systems' },
      { id: 'J7', kind: 'journal', area: 'ct', year: '2021', title: 'Output feedback for contraction of nonlinear singularly perturbed systems', authors: 'Rayguru, M.M., Dey, B.S. and Kar, I.N.', venue: 'International Journal of Control · corresponding author' },
      { id: 'J8', kind: 'journal', area: 'bio', year: '2018', title: 'Nonlinear active control of a cancerous tumour', authors: 'Dey, B.S., Bera, M.K. and Roy, B.K.', venue: 'International Journal of Engineering & Technology, 7(2.21), 72–76' },
      { id: 'R1', kind: 'review', area: 'safe', year: '2026', title: 'Input-to-state stabilizing neural controllers for unknown switched nonlinear systems within compact sets', authors: 'Dey, B.S., Basu, A. and Jagtap, P.', venue: 'arXiv:2601.14643 · under revision, Automatica' },
      { id: 'R2', kind: 'review', area: 'safe', year: '2025', title: 'Formally verified neural network controllers for incremental input-to-state stability of unknown discrete-time systems', authors: 'Basu, A., Dey, B.S. and Jagtap, P.', venue: 'arXiv:2503.04129 · under revision, IEEE SMC' },
      { id: 'R3', kind: 'review', area: 'safe', year: '2024', title: 'Backstepping design for incremental input-to-state stabilization of unknown systems', authors: 'Smith Sundarsingh, D., Dey, B.S. and Jagtap, P.', venue: 'arXiv · under revision, IEEE TAC' },
      { id: 'R4', kind: 'review', area: 's2r', year: '—', title: 'Reducing Sim2Real gap: an incremental stability approach', authors: 'Sangeerth, P., Dey, B.S. and Jagtap, P.', venue: 'Under revision, IEEE RA-L' },
      { id: 'C1', kind: 'conf', area: 'ct', year: '2025', title: 'Formal guarantees for incremental stability in piecewise smooth cascaded switched systems', authors: 'Dey, B.S., Kar, I.N. and Jagtap, P.', venue: 'Indian Control Conference (ICC), IEEE' },
      { id: 'C2', kind: 'conf', area: 'safe', year: '2025', title: 'Controller for incremental input-to-state practical stabilization of partially unknown systems with invariance guarantees', authors: 'Sangeerth, P., Smith Sundarsingh, D., Dey, B.S. and Jagtap, P.', venue: 'Indian Control Conference (ICC), IEEE' },
      { id: 'C3', kind: 'conf', area: 'safe', year: '2025', title: 'Formally verified neural Lyapunov function for incremental input-to-state stability of unknown systems', authors: 'Basu, A., Dey, B.S. and Jagtap, P.', venue: 'European Control Conference (ECC), IEEE' },
      { id: 'C4', kind: 'conf', area: 'hrc', year: '2024', title: 'Safe human robot-interaction using switched model reference admittance control', authors: 'Paul, C.K., Dey, B.S. and Kar, I.N.', venue: 'CoDIT, IEEE' },
      { id: 'C5', kind: 'conf', area: 'hrc', year: '2024', title: 'Adaptive impedance control: a contraction theory approach', authors: 'Paul, C.K., Patel, N., Dey, B.S. and Kar, I.N.', venue: 'IFAC-PapersOnLine, 57' },
      { id: 'C6', kind: 'conf', area: 'ct', year: '2023', title: 'Harmonics suppression in a class of switched mechanical system: a contraction theory approach', authors: 'Dey, B.S., Banerjee, U. and Kar, I.N.', venue: 'CoDIT, IEEE' },
      { id: 'C7', kind: 'conf', area: 'ct', year: '2022', title: 'A contraction theory approach to observer-based controller design for glucose regulation in type 1 diabetes', authors: 'Dey, B.S., Nath, A., Patel, A. and Kar, I.N.', venue: 'Indian Control Conference (ICC), IEEE' },
      { id: 'C8', kind: 'conf', area: 'hrc', year: '2022', title: 'Robust artificial delay-based impedance control of robotic manipulators with uncertain dynamics', authors: 'Banerjee, U., Dey, B.S., Kar, I.N. and Saha, S.K.', venue: 'Int. Workshop on Variable Structure Systems (VSS), IEEE' },
      { id: 'C9', kind: 'conf', area: 'ct', year: '2022', title: 'Switching control for Euler–Lagrange dynamics: an incremental stability approach', authors: 'Dey, B.S. and Kar, I.N.', venue: 'IFAC-PapersOnLine, 55(1)' },
      { id: 'C10', kind: 'conf', area: 'bio', year: '2018', title: 'Super twisting sliding mode control of cancer chemotherapy', authors: 'Dey, B.S., Bera, M.K. and Roy, B.K.', venue: 'Int. Workshop on Variable Structure Systems (VSS), IEEE' }
    ];
  var state = { filter: 'all', area: 'any' };

  function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function chipStyle(on) {
    return 'min-height: 44px; padding: 0 16px; border-radius: 6px; font: inherit; font-size: 14px; font-weight: 500; cursor: pointer; ' +
      (on ? 'background: ' + accent + '; color: #FFFFFF; border: 1px solid ' + accent + ';' : 'background: #FFFFFF; color: #3D4552; border: 1px solid #CDD2D9;');
  }
  function buttons(el, defs, key) {
    el.innerHTML = '';
    defs.forEach(function (d) {
      var b = document.createElement('button');
      b.type = 'button';
      var on = state[key] === d.key;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      b.setAttribute('style', chipStyle(on));
      b.textContent = d.label;
      b.addEventListener('click', function () { state[key] = d.key; render(); });
      el.appendChild(b);
    });
  }
  function render() {
    buttons(document.getElementById('type-filters'), [
      { key: 'all', label: 'All types' }, { key: 'journal', label: 'Journals' },
      { key: 'review', label: 'Under review' }, { key: 'conf', label: 'Conferences' }
    ], 'filter');
    buttons(document.getElementById('area-filters'), [{ key: 'any', label: 'All areas (' + raw.length + ')' }].concat(
      Object.keys(areaNames).map(function (k) {
        return { key: k, label: areaNames[k] + ' (' + raw.filter(function (p) { return p.area === k; }).length + ')' };
      })), 'area');
    var list = raw.filter(function (p) {
      return (state.filter === 'all' || p.kind === state.filter) && (state.area === 'any' || p.area === state.area);
    });
    document.getElementById('pub-count').textContent = list.length + (list.length === 1 ? ' paper' : ' papers');
    document.getElementById('pub-list').innerHTML = list.map(function (p) {
      var i = p.authors.indexOf(me);
      var authors = i < 0 ? esc(p.authors) : esc(p.authors.slice(0, i)) + '<strong style="color: #14181F; font-weight: 600">' + me + '</strong>' + esc(p.authors.slice(i + me.length));
      return '<li style="display: flex; flex-wrap: wrap; gap: 6px 24px; padding: 18px 0; border-bottom: 1px solid #E3E6EA">' +
        '<span style="flex: 0 0 56px; font-family: \'IBM Plex Mono\', monospace; font-size: 14px; color: #5A6270; padding-top: 2px">' + p.id + '</span>' +
        '<div style="flex: 999 1 420px; min-width: 0; display: flex; flex-direction: column; gap: 4px">' +
        '<span style="font-size: 17px; font-weight: 500; line-height: 1.4; color: #14181F">' + esc(p.title) + '</span>' +
        '<span style="font-size: 14px; color: #5A6270">' + authors + '</span>' +
        '<span style="font-size: 14px; color: #3D4552; font-style: italic">' + esc(p.venue) + '</span>' +
        '<span style="align-self: flex-start; margin-top: 4px; font-size: 12px; font-weight: 500; padding: 3px 10px; border-radius: 999px; background: #EEF3FA; color: #1B3B66">' + areaNames[p.area] + '</span>' +
        '</div>' +
        '<span style="flex: 0 0 auto; font-family: \'IBM Plex Mono\', monospace; font-size: 14px; color: #3D4552; padding-top: 2px">' + p.year + '</span>' +
        '</li>';
    }).join('');
  }
  document.querySelectorAll('[data-area]').forEach(function (a) {
    a.addEventListener('click', function () { state.area = a.getAttribute('data-area'); state.filter = 'all'; render(); });
  });
  render();
})();
