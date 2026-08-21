const NIVEIS = [
  { key: "pl1", label: "Pré-leitor 1", short: "PL1", color: "#FF3B30" },
  { key: "pl2", label: "Pré-leitor 2", short: "PL2", color: "#FF9500" },
  { key: "pl3", label: "Pré-leitor 3", short: "PL3", color: "#FFD60A" },
  { key: "pl4", label: "Pré-leitor 4", short: "PL4", color: "#7B61FF" },
  { key: "iniciante", label: "Iniciante", short: "Inic.", color: "#00C8FF" },
  { key: "fluente", label: "Fluente", short: "Fluente", color: "#00E676" },
];

const PRE_KEYS = ["pl1", "pl2", "pl3", "pl4"];

const DADOS = [
  { escola: "E.M.E.I.F. ANTÔNIO AGOSTINHO DOS ANJOS", turma: "ÚNICA", alunos: 19, entrada: { avaliados: 19, pl1: 2, pl2: 2, pl3: 0, pl4: 3, iniciante: 12, fluente: 0 }, percurso: { avaliados: 18, pl1: 0, pl2: 1, pl3: 1, pl4: 2, iniciante: 14, fluente: 0 } },
  { escola: "E.M.E.I.F. ARISTIDES ANTÔNIO DA SILVA", turma: "ÚNICA", alunos: 9, entrada: { avaliados: 7, pl1: 0, pl2: 0, pl3: 2, pl4: 1, iniciante: 4, fluente: 0 }, percurso: { avaliados: 12, pl1: 1, pl2: 0, pl3: 0, pl4: 4, iniciante: 6, fluente: 1 } },
  { escola: "E.M.E.I.F. AUDÁLIO MACIANO DA SILVA", turma: "ÚNICA", alunos: 13, entrada: { avaliados: 12, pl1: 0, pl2: 1, pl3: 2, pl4: 6, iniciante: 3, fluente: 0 }, percurso: { avaliados: 12, pl1: 1, pl2: 0, pl3: 0, pl4: 4, iniciante: 6, fluente: 1 } },
  { escola: "E.M.E.I.F. BARÃO DE ALAGOAS", turma: "ÚNICA", alunos: 20, entrada: { avaliados: 19, pl1: 0, pl2: 2, pl3: 3, pl4: 5, iniciante: 7, fluente: 2 }, percurso: { avaliados: 19, pl1: 0, pl2: 2, pl3: 0, pl4: 2, iniciante: 11, fluente: 4 } },
  { escola: "E.M.E.I.F. CAPITULINO LOURENÇO DE ARAÚJO", turma: "ÚNICA", alunos: 17, entrada: { avaliados: 17, pl1: 0, pl2: 0, pl3: 0, pl4: 4, iniciante: 12, fluente: 1 }, percurso: { avaliados: 17, pl1: 0, pl2: 0, pl3: 0, pl4: 1, iniciante: 13, fluente: 3 } },
  { escola: "E.M.E.I.F. ELISABETHE JACOBA MARIA BORGERS", turma: "A", alunos: 16, entrada: { avaliados: 32, pl1: 8, pl2: 3, pl3: 1, pl4: 9, iniciante: 10, fluente: 1 }, percurso: { avaliados: 16, pl1: 0, pl2: 2, pl3: 0, pl4: 5, iniciante: 8, fluente: 1 } },
  { escola: "E.M.E.I.F. ELISABETHE JACOBA MARIA BORGERS", turma: "B", alunos: 19, entrada: null, percurso: { avaliados: 14, pl1: 0, pl2: 4, pl3: 0, pl4: 1, iniciante: 9, fluente: 0 } },
  { escola: "E.M.E.I.F. IMACULADA CONCEIÇÃO", turma: "ÚNICA", alunos: 23, entrada: { avaliados: 25, pl1: 4, pl2: 0, pl3: 2, pl4: 10, iniciante: 9, fluente: 0 }, percurso: { avaliados: 23, pl1: 3, pl2: 1, pl3: 0, pl4: 5, iniciante: 14, fluente: 0 } },
  { escola: "E.M.E.I.F. JOÃO VIEIRA GOMES", turma: "ÚNICA", alunos: 18, entrada: { avaliados: 16, pl1: 1, pl2: 1, pl3: 2, pl4: 6, iniciante: 6, fluente: 0 }, percurso: { avaliados: 15, pl1: 0, pl2: 0, pl3: 0, pl4: 7, iniciante: 8, fluente: 0 } },
  { escola: "E.M.E.I.F. JOSÉ ALVES DA SILVA", turma: "ÚNICA", alunos: 18, entrada: { avaliados: 18, pl1: 2, pl2: 0, pl3: 2, pl4: 5, iniciante: 9, fluente: 0 }, percurso: { avaliados: 16, pl1: 1, pl2: 0, pl3: 6, pl4: 0, iniciante: 7, fluente: 2 } },
  { escola: "E.M.E.I.F. MANOEL BEZERRA LINTO", turma: "ÚNICA", alunos: 12, entrada: { avaliados: 12, pl1: 1, pl2: 0, pl3: 0, pl4: 6, iniciante: 4, fluente: 1 }, percurso: { avaliados: 6, pl1: 0, pl2: 0, pl3: 0, pl4: 0, iniciante: 6, fluente: 0 } },
  { escola: "E.M.E.I.F. MANOEL LEANDRO PEREIRA", turma: "A", alunos: 17, entrada: { avaliados: 30, pl1: 0, pl2: 1, pl3: 2, pl4: 14, iniciante: 13, fluente: 0 }, percurso: { avaliados: 17, pl1: 0, pl2: 0, pl3: 0, pl4: 0, iniciante: 17, fluente: 0 } },
  { escola: "E.M.E.I.F. MANOEL LEANDRO PEREIRA", turma: "B", alunos: 13, entrada: null, percurso: { avaliados: 13, pl1: 0, pl2: 0, pl3: 0, pl4: 2, iniciante: 11, fluente: 0 } },
  { escola: "E.M.E.I.F. MANOEL PEDRO DE MELO", turma: "ÚNICA", alunos: 10, entrada: { avaliados: 10, pl1: 0, pl2: 0, pl3: 0, pl4: 3, iniciante: 6, fluente: 1 }, percurso: { avaliados: 10, pl1: 0, pl2: 0, pl3: 0, pl4: 1, iniciante: 7, fluente: 2 } },
  { escola: "E.M.E.I.F. MANOEL VIEIRA GADI", turma: "ÚNICA", alunos: 14, entrada: { avaliados: 14, pl1: 3, pl2: 0, pl3: 2, pl4: 3, iniciante: 6, fluente: 0 }, percurso: { avaliados: 14, pl1: 0, pl2: 0, pl3: 3, pl4: 1, iniciante: 9, fluente: 1 } },
  { escola: "E.M.E.I.F. NOSSA SENHORA DE FÁTIMA", turma: "A", alunos: 26, entrada: { avaliados: 118, pl1: 8, pl2: 1, pl3: 16, pl4: 26, iniciante: 56, fluente: 11 }, percurso: { avaliados: 25, pl1: 0, pl2: 0, pl3: 0, pl4: 1, iniciante: 13, fluente: 11 } },
  { escola: "E.M.E.I.F. NOSSA SENHORA DE FÁTIMA", turma: "B", alunos: 25, entrada: null, percurso: { avaliados: 25, pl1: 0, pl2: 0, pl3: 1, pl4: 0, iniciante: 24, fluente: 0 } },
  { escola: "E.M.E.I.F. NOSSA SENHORA DE FÁTIMA", turma: "C", alunos: 26, entrada: null, percurso: { avaliados: 26, pl1: 2, pl2: 0, pl3: 1, pl4: 2, iniciante: 17, fluente: 4 } },
  { escola: "E.M.E.I.F. NOSSA SENHORA DE FÁTIMA", turma: "D", alunos: 22, entrada: null, percurso: { avaliados: 22, pl1: 1, pl2: 2, pl3: 1, pl4: 6, iniciante: 12, fluente: 0 } },
  { escola: "E.M.E.I.F. NOSSA SENHORA DE FÁTIMA", turma: "E", alunos: 20, entrada: null, percurso: { avaliados: 20, pl1: 2, pl2: 1, pl3: 8, pl4: 5, iniciante: 4, fluente: 0 } },
  { escola: "E.M.E.I.F. PEDRO FRANCISCO DAS CHAGAS", turma: "ÚNICA", alunos: 25, entrada: { avaliados: 24, pl1: 1, pl2: 3, pl3: 3, pl4: 11, iniciante: 6, fluente: 0 }, percurso: { avaliados: 23, pl1: 0, pl2: 2, pl3: 0, pl4: 1, iniciante: 18, fluente: 2 } },
  { escola: "E.M.E.I.F. POSSIDÔNIO GADI", turma: "ÚNICA", alunos: 13, entrada: { avaliados: 12, pl1: 0, pl2: 0, pl3: 0, pl4: 2, iniciante: 7, fluente: 3 }, percurso: { avaliados: 13, pl1: 0, pl2: 0, pl3: 0, pl4: 2, iniciante: 5, fluente: 6 } },
  { escola: "E.M.E.I.F. SANTA ANA", turma: "ÚNICA", alunos: 16, entrada: { avaliados: 16, pl1: 1, pl2: 0, pl3: 0, pl4: 4, iniciante: 9, fluente: 2 }, percurso: { avaliados: 15, pl1: 0, pl2: 0, pl3: 2, pl4: 0, iniciante: 4, fluente: 9 } },
  { escola: "E.M.E.I.F. SANTA HELENA", turma: "ÚNICA", alunos: 18, entrada: { avaliados: 17, pl1: 3, pl2: 0, pl3: 1, pl4: 8, iniciante: 5, fluente: 0 }, percurso: { avaliados: 17, pl1: 1, pl2: 1, pl3: 1, pl4: 4, iniciante: 9, fluente: 1 } },
  { escola: "E.M.E.I.F. VEREADOR JOSÉ DOMINGOS DE BARROS", turma: "ÚNICA", alunos: 11, entrada: { avaliados: 11, pl1: 1, pl2: 2, pl3: 1, pl4: 5, iniciante: 2, fluente: 0 }, percurso: { avaliados: 11, pl1: 0, pl2: 0, pl3: 0, pl4: 6, iniciante: 3, fluente: 2 } },
  { escola: "E.M.E.I.F. WELLINGTON PINTO FONTES", turma: "A", alunos: 17, entrada: { avaliados: 46, pl1: 4, pl2: 3, pl3: 1, pl4: 15, iniciante: 19, fluente: 4 }, percurso: { avaliados: 17, pl1: 0, pl2: 1, pl3: 0, pl4: 4, iniciante: 11, fluente: 1 } },
  { escola: "E.M.E.I.F. WELLINGTON PINTO FONTES", turma: "B", alunos: 17, entrada: null, percurso: { avaliados: 17, pl1: 2, pl2: 0, pl3: 1, pl4: 1, iniciante: 12, fluente: 1 } },
  { escola: "E.M.E.I.F. WELLINGTON PINTO FONTES", turma: "C", alunos: 15, entrada: null, percurso: { avaliados: 15, pl1: 2, pl2: 2, pl3: 1, pl4: 1, iniciante: 8, fluente: 1 } },
];

const state = {
  view: "dashboard",
  escola: "",
  turma: "",
  periodo: "percurso",
  nivel: "",
  search: "",
  page: 1,
  pageSize: 10,
  sort: { key: "escola", dir: 1 },
};

const charts = {};
const PAGE_SIZE = 10;

function emptyAgg() {
  return { avaliados: 0, pl1: 0, pl2: 0, pl3: 0, pl4: 0, iniciante: 0, fluente: 0 };
}

function sumLevels(bloco) {
  if (!bloco) return 0;
  return NIVEIS.reduce((acc, n) => acc + (bloco[n.key] || 0), 0);
}

function blocoAtivo(row) {
  if (state.periodo === "entrada") return row.entrada;
  return row.percurso;
}

function matchesNivel(key) {
  if (!state.nivel) return true;
  if (state.nivel === "pre") return PRE_KEYS.includes(key);
  if (state.nivel === "pre12") return key === "pl1" || key === "pl2";
  if (state.nivel === "pre34") return key === "pl3" || key === "pl4";
  return key === state.nivel;
}

function nivelLabel(key) {
  if (key === "pre") return "Pré-leitores";
  if (key === "pre12") return "Pré-leitores 1 e 2";
  if (key === "pre34") return "Pré-leitores 3 e 4";
  return NIVEIS.find((n) => n.key === key)?.label || key;
}

function shortSchool(name) {
  const map = {
    "E.M.E.I.F. NOSSA SENHORA DE FÁTIMA": "N. S. Fátima",
    "E.M.E.I.F. ELISABETHE JACOBA MARIA BORGERS": "Elisabethe Borgers",
    "E.M.E.I.F. WELLINGTON PINTO FONTES": "Wellington Fontes",
    "E.M.E.I.F. MANOEL LEANDRO PEREIRA": "Manoel L. Pereira",
    "E.M.E.I.F. AUDÁLIO MACIANO DA SILVA": "Audálio M. Silva",
    "E.M.E.I.F. ANTÔNIO AGOSTINHO DOS ANJOS": "Antônio dos Anjos",
    "E.M.E.I.F. ARISTIDES ANTÔNIO DA SILVA": "Aristides A. Silva",
    "E.M.E.I.F. CAPITULINO LOURENÇO DE ARAÚJO": "Capitulino Araújo",
    "E.M.E.I.F. VEREADOR JOSÉ DOMINGOS DE BARROS": "Vereador Barros",
    "E.M.E.I.F. BARÃO DE ALAGOAS": "Barão de Alagoas",
    "E.M.E.I.F. IMACULADA CONCEIÇÃO": "Imaculada Conceição",
    "E.M.E.I.F. JOÃO VIEIRA GOMES": "João V. Gomes",
    "E.M.E.I.F. JOSÉ ALVES DA SILVA": "José Alves Silva",
    "E.M.E.I.F. MANOEL VIEIRA GADI": "Manoel V. Gadi",
    "E.M.E.I.F. MANOEL PEDRO DE MELO": "Manoel P. Melo",
    "E.M.E.I.F. PEDRO FRANCISCO DAS CHAGAS": "Pedro das Chagas",
    "E.M.E.I.F. POSSIDÔNIO GADI": "Possidônio Gadi",
    "E.M.E.I.F. MANOEL BEZERRA LINTO": "Manoel B. Linto",
    "E.M.E.I.F. SANTA ANA": "Santa Ana",
    "E.M.E.I.F. SANTA HELENA": "Santa Helena",
  };
  return map[name] || name;
}

function pct(part, total) {
  if (!total) return 0;
  return (part / total) * 100;
}

function fmt(n) {
  return new Intl.NumberFormat("pt-BR").format(n || 0);
}

function fmtPct(n) {
  return `${n.toFixed(1).replace(".", ",")}%`;
}

function rowsBase() {
  const q = state.search.trim().toLowerCase();
  return DADOS.filter((row) => {
    if (state.escola && row.escola !== state.escola) return false;
    if (state.turma && row.turma !== state.turma) return false;
    if (q && !`${row.escola} ${row.turma}`.toLowerCase().includes(q)) return false;
    return true;
  });
}

function addBloco(target, bloco) {
  if (!bloco) return;
  target.avaliados += bloco.avaliados || 0;
  NIVEIS.forEach((n) => {
    target[n.key] += bloco[n.key] || 0;
  });
}

function aggregate(rows, periodo) {
  const agg = emptyAgg();
  rows.forEach((row) => addBloco(agg, row[periodo]));
  if (sumLevels(agg) > agg.avaliados) agg.avaliados = sumLevels(agg);
  return agg;
}

function countNivel(agg) {
  if (!state.nivel) return agg.avaliados;
  return NIVEIS.reduce((acc, n) => acc + (matchesNivel(n.key) ? agg[n.key] : 0), 0);
}

function predominante(bloco) {
  if (!bloco || !sumLevels(bloco)) return null;
  return NIVEIS.reduce((best, n) => (bloco[n.key] > (bloco[best.key] || 0) ? n : best));
}

function toggleFilter(key, value) {
  state[key] = state[key] === value ? "" : value;
  if (key === "escola") state.turma = "";
  state.page = 1;
  syncSelects();
  render();
}

function setView(view) {
  state.view = view;
  document.querySelectorAll(".nav-btn[data-view]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });
  document.getElementById("viewDashboard").hidden = view !== "dashboard";
  document.getElementById("viewTable").hidden = view !== "table";
}

function escolasUnicas() {
  return [...new Set(DADOS.map((r) => r.escola))].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function turmasDaEscola(escola) {
  return [...new Set(DADOS.filter((r) => !escola || r.escola === escola).map((r) => r.turma))];
}

function fillSelects() {
  const escolaSel = document.getElementById("filterEscola");
  const turmaSel = document.getElementById("filterTurma");
  escolaSel.innerHTML = `<option value="">Todas as escolas</option>` +
    escolasUnicas().map((e) => `<option value="${e}">${e}</option>`).join("");
  syncSelects();
  turmaSel.innerHTML = `<option value="">Todas as turmas</option>` +
    turmasDaEscola(state.escola).map((t) => `<option value="${t}">${t}</option>`).join("");
}

function syncSelects() {
  document.getElementById("filterEscola").value = state.escola;
  const turmaSel = document.getElementById("filterTurma");
  const turmas = turmasDaEscola(state.escola);
  turmaSel.innerHTML = `<option value="">Todas as turmas</option>` +
    turmas.map((t) => `<option value="${t}">${t}</option>`).join("");
  if (state.turma && !turmas.includes(state.turma)) state.turma = "";
  turmaSel.value = state.turma;
  document.getElementById("filterPeriodo").value = state.periodo;
}

function pillHtml(delta, invert = false) {
  if (delta === null || Number.isNaN(delta)) return `<span class="pill neutral">sem base</span>`;
  const good = invert ? delta < 0 : delta > 0;
  const cls = delta === 0 ? "neutral" : good ? "up" : "down";
  const sign = delta > 0 ? "+" : "";
  return `<span class="pill ${cls}">${sign}${delta.toFixed(1).replace(".", ",")} pp</span>`;
}

function renderChips() {
  const box = document.getElementById("chips");
  const chips = [];
  if (state.escola) chips.push(["escola", "Escola", state.escola]);
  if (state.turma) chips.push(["turma", "Turma", state.turma]);
  if (state.nivel) chips.push(["nivel", "Nível", nivelLabel(state.nivel)]);
  if (state.search) chips.push(["search", "Busca", state.search]);
  if (!chips.length) {
    box.hidden = true;
    box.innerHTML = "";
    return;
  }
  box.hidden = false;
  box.innerHTML = chips.map(([key, label, value]) =>
    `<span class="chip">${label}: ${value}<button data-clear="${key}" aria-label="Remover">×</button></span>`
  ).join("") + `<button class="chip-clear" data-clear="all">Limpar tudo</button>`;
}

function renderKPIs(rows) {
  const periodo = state.periodo === "entrada" ? "entrada" : "percurso";
  const atual = aggregate(rows, periodo);
  const entrada = aggregate(rows, "entrada");
  const alunos = rows.reduce((acc, r) => acc + r.alunos, 0);
  const pre = PRE_KEYS.reduce((acc, k) => acc + atual[k], 0);
  const preEnt = PRE_KEYS.reduce((acc, k) => acc + entrada[k], 0);
  const fluPct = pct(atual.fluente, atual.avaliados);
  const fluEnt = pct(entrada.fluente, entrada.avaliados);
  const prePct = pct(pre, atual.avaliados);
  const preEntPct = pct(preEnt, entrada.avaliados);
  const hasEntrada = entrada.avaliados > 0;

  const esquerda = [
    {
      key: "",
      title: "Total de alunos",
      value: fmt(alunos),
      pill: `<span class="pill neutral">${rows.length} turmas</span>`,
      foot: "Matrículas no recorte atual",
      icon: `<div class="kpi-icon tot" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`,
    },
    {
      key: "",
      title: "Alunos avaliados",
      value: fmt(atual.avaliados),
      pill: `<span class="pill ${pct(atual.avaliados, alunos) >= 90 ? "up" : "neutral"}">${fmtPct(pct(atual.avaliados, alunos))}</span>`,
      foot: "Quantidade avaliada no filtro atual",
      icon: `<div class="kpi-icon ava" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M9 11l3 3L22 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`,
    },
    {
      key: "",
      title: "Cobertura da avaliação",
      value: fmtPct(pct(atual.avaliados, alunos)),
      pill: `<span class="pill ${pct(atual.avaliados, alunos) >= 90 ? "up" : "neutral"}">${fmt(atual.avaliados)} de ${fmt(alunos)}</span>`,
      foot: "Avaliados sobre o total de alunos",
      icon: `<div class="kpi-icon cov" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 12A10 10 0 0 0 12 2v10z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`,
    },
  ];

  const direita = [
    {
      key: "pre",
      title: "Pré-leitores",
      value: fmt(pre),
      pill: pillHtml(hasEntrada ? prePct - preEntPct : null, true),
      foot: `<span class="num">${fmtPct(prePct)}</span> ainda em pré-leitura`,
      icon: `<div class="kpi-icon pre" aria-hidden="true"><span class="kpi-icon-abc">ABC</span></div>`,
    },
    {
      key: "iniciante",
      title: "Iniciantes",
      value: fmt(atual.iniciante),
      pill: `<span class="pill neutral">${fmtPct(pct(atual.iniciante, atual.avaliados))}</span>`,
      foot: "dos avaliados estão no nível iniciante",
      icon: `<div class="kpi-icon ini" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`,
    },
    {
      key: "fluente",
      title: "Fluentes",
      value: fmt(atual.fluente),
      pill: pillHtml(hasEntrada ? fluPct - fluEnt : null),
      foot: `<span class="num">${fmtPct(fluPct)}</span> do total avaliado`,
      icon: `<div class="kpi-icon flu" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="m9 11 2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`,
    },
  ];

  const kpiHtml = (k) => `
    <article class="card kpi${state.nivel && k.key === state.nivel ? " active" : ""}${k.icon ? " has-icon" : ""}"${k.key ? ` data-nivel="${k.key}"` : ""}>
      ${k.icon || ""}
      <div class="kpi-title">${k.title}</div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-foot">${k.pill}<span>${k.foot}</span></div>
    </article>
  `;

  document.getElementById("kpiLeft").innerHTML = esquerda.map(kpiHtml).join("");
  document.getElementById("kpiRight").innerHTML = direita.map(kpiHtml).join("");
}

const THEME_KEY = "fluencia-theme";

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function cssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function applyTheme(theme) {
  const next = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(THEME_KEY, next);
  const btn = document.getElementById("btnTheme");
  if (btn) {
    const isLight = next === "light";
    btn.setAttribute("aria-checked", String(isLight));
    btn.title = isLight ? "Modo claro" : "Modo escuro";
    btn.setAttribute("aria-label", isLight ? "Ativar modo escuro" : "Ativar modo claro");
  }
}

function toggleTheme() {
  applyTheme(currentTheme() === "light" ? "dark" : "light");
  chartDefaults();
  render();
}

function chartDefaults() {
  Chart.defaults.color = cssVar("--text") || "#ffffff";
  Chart.defaults.borderColor = cssVar("--border") || "rgba(255,255,255,0.06)";
  Chart.defaults.font.family = "DM Sans, sans-serif";
  Chart.defaults.plugins.legend.display = false;
}

function drawOutlinedText(ctx, text, x, y, lineWidth = 3) {
  ctx.lineJoin = "round";
  ctx.miterLimit = 2;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "rgba(12, 12, 13, 0.72)";
  ctx.strokeText(text, x, y);
  ctx.fillStyle = "#ffffff";
  ctx.fillText(text, x, y);
}

const barValueLabels = {
  id: "barValueLabels",
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    ctx.save();
    ctx.fillStyle = cssVar("--text") || "#ffffff";
    ctx.font = "600 11px DM Sans, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      if (!meta.visible) return;
      meta.data.forEach((bar, index) => {
        const value = dataset.data[index];
        if (value == null || value === 0) return;
        ctx.fillText(fmt(value), bar.x, bar.y - 4);
      });
    });
    ctx.restore();
  },
};

const stackValueLabels = {
  id: "stackValueLabels",
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      if (!meta.visible) return;
      meta.data.forEach((bar, index) => {
        const value = Number(dataset.data[index] || 0);
        if (!value) return;

        const width = Math.abs(bar.x - bar.base);
        const height = Math.abs(bar.height);
        const label = fmt(value);
        const byWidth = width / Math.max(label.length, 1) / 0.62;
        const byHeight = height * 0.7;
        const fontSize = Math.min(11, byWidth, byHeight);
        if (fontSize < 6.5) return;

        ctx.font = `700 ${fontSize}px DM Sans, sans-serif`;
        ctx.fillStyle = "#000000";
        ctx.fillText(label, (bar.base + bar.x) / 2, bar.y);
      });
    });

    ctx.restore();
  },
};

const donutValueLabels = {
  id: "donutValueLabels",
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    const dataset = chart.data.datasets[0];
    const meta = chart.getDatasetMeta(0);
    if (!dataset || !meta?.visible) return;
    const total = dataset.data.reduce((acc, value) => acc + Number(value || 0), 0);
    if (!total) return;

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    meta.data.forEach((arc, index) => {
      const value = Number(dataset.data[index] || 0);
      if (!value) return;

      const angle = arc.endAngle - arc.startAngle;
      const mid = (arc.startAngle + arc.endAngle) / 2;
      const ring = arc.outerRadius - arc.innerRadius;
      const radius = (arc.innerRadius + arc.outerRadius) / 2;
      const x = arc.x + Math.cos(mid) * radius;
      const y = arc.y + Math.sin(mid) * radius;
      const percent = fmtPct(pct(value, total));
      const byArc = (radius * angle) / Math.max(percent.length, 1) / 0.62;
      const byRing = ring * 0.52;
      const fontSize = Math.max(6, Math.min(16, byArc, byRing));
      const outline = Math.max(1.2, fontSize * 0.2);

      ctx.font = `700 ${fontSize}px DM Sans, sans-serif`;
      drawOutlinedText(ctx, percent, x, y, outline);
    });

    ctx.restore();
  },
};

function upsertChart(id, config) {
  if (charts[id]) charts[id].destroy();
  const canvas = document.getElementById(id);
  charts[id] = new Chart(canvas, config);
}

function renderDonut(rows) {
  const periodo = state.periodo === "entrada" ? "entrada" : "percurso";
  const agg = aggregate(rows, periodo);
  const values = NIVEIS.map((n) => agg[n.key]);
  const total = values.reduce((a, b) => a + b, 0);

  document.getElementById("donutLegend").innerHTML = NIVEIS.map((n, i) => {
    const active = Boolean(state.nivel) && matchesNivel(n.key);
    return `<li data-nivel="${n.key}" class="${active ? "active" : ""}">
      <span class="swatch" style="background:${n.color}"></span>
      <span>${n.label}</span>
      <b>${fmt(values[i])} · ${fmtPct(pct(values[i], total))}</b>
    </li>`;
  }).join("");

  upsertChart("chartDonut", {
    type: "doughnut",
    plugins: [donutValueLabels],
    data: {
      labels: NIVEIS.map((n) => n.label),
      datasets: [{
        data: values,
        backgroundColor: NIVEIS.map((n) => (!state.nivel || matchesNivel(n.key) ? n.color : `${n.color}55`)),
        borderColor: cssVar("--card") || "#18181b",
        borderWidth: 4,
        hoverOffset: 6,
      }],
    },
    options: {
      cutout: "58%",
      maintainAspectRatio: false,
      onHover: (e, els) => { e.native.target.style.cursor = els.length ? "pointer" : "default"; },
      onClick: (_, els) => {
        if (!els.length) return;
        toggleFilter("nivel", NIVEIS[els[0].index].key);
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.label}: ${fmt(ctx.raw)} (${fmtPct(pct(ctx.raw, total))})`,
          },
        },
      },
    },
  });
}

function renderComparativo(rows) {
  const entrada = aggregate(rows, "entrada");
  const percurso = aggregate(rows, "percurso");
  const labels = NIVEIS.map((n) => n.label);
  const dim = (color, key) => {
    if (!state.nivel) return color;
    return matchesNivel(key) ? color : `${color}55`;
  };

  const ink = cssVar("--text") || "#ffffff";
  upsertChart("chartComparativo", {
    type: "bar",
    plugins: [barValueLabels],
    data: {
      labels,
      datasets: [
        {
          label: "Entrada",
          data: NIVEIS.map((n) => entrada[n.key]),
          backgroundColor: NIVEIS.map((n) => dim("#002776", n.key)),
          borderRadius: 8,
          barPercentage: 0.72,
        },
        {
          label: "Percurso",
          data: NIVEIS.map((n) => percurso[n.key]),
          backgroundColor: NIVEIS.map((n) => dim("#009B3A", n.key)),
          borderRadius: 8,
          barPercentage: 0.72,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      layout: { padding: { top: 18 } },
      onHover: (e, els) => { e.native.target.style.cursor = els.length ? "pointer" : "default"; },
      onClick: (_, els) => {
        if (!els.length) return;
        const nivel = NIVEIS[els[0].index].key;
        const periodo = els[0].datasetIndex === 0 ? "entrada" : "percurso";
        state.periodo = periodo;
        toggleFilter("nivel", nivel);
      },
      scales: {
        x: { grid: { display: false }, ticks: { color: ink, autoSkip: false, maxRotation: 0, minRotation: 0, font: { size: 11 } } },
        y: { beginAtZero: true, grace: "12%", ticks: { precision: 0, color: ink } },
      },
      plugins: {
        legend: { display: true, labels: { boxWidth: 10, usePointStyle: true, color: ink } },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${fmt(ctx.raw)} alunos`,
          },
        },
      },
    },
  });
}

function renderEscolas(rows) {
  const periodo = state.periodo === "entrada" ? "entrada" : "percurso";
  const drillTurmas = Boolean(state.escola);
  const groups = new Map();

  rows.forEach((row) => {
    const key = drillTurmas ? `Turma ${row.turma}` : row.escola;
    if (!groups.has(key)) groups.set(key, { label: key, escola: row.escola, turma: row.turma, ...emptyAgg(), alunos: 0 });
    const g = groups.get(key);
    g.alunos += row.alunos;
    addBloco(g, row[periodo]);
  });

  const items = [...groups.values()].sort((a, b) => {
    const va = state.nivel ? countNivel(a) : a.avaliados || sumLevels(a);
    const vb = state.nivel ? countNivel(b) : b.avaliados || sumLevels(b);
    return vb - va;
  });

  document.getElementById("chartEscolasTitle").textContent = drillTurmas
    ? `Composição por turma · ${shortSchool(state.escola)}`
    : "Composição por escola";

  const labels = items.map((i) => drillTurmas ? i.label : shortSchool(i.label));
  const datasets = NIVEIS.filter((n) => matchesNivel(n.key)).map((n) => ({
    label: n.label,
    data: items.map((i) => i[n.key]),
    backgroundColor: n.color,
    borderSkipped: false,
    borderRadius: 4,
    barPercentage: 0.78,
  }));

  upsertChart("chartEscolas", {
    type: "bar",
    plugins: [stackValueLabels],
    data: { labels, datasets },
    options: {
      indexAxis: "y",
      maintainAspectRatio: false,
      onHover: (e, els) => { e.native.target.style.cursor = els.length ? "pointer" : "default"; },
      onClick: (_, els) => {
        if (!els.length) return;
        const item = items[els[0].index];
        const nivelVisivel = NIVEIS.filter((n) => matchesNivel(n.key));
        const nivel = nivelVisivel[els[0].datasetIndex]?.key || "";
        const sameSchool = drillTurmas
          ? state.turma === item.turma
          : state.escola === item.escola;
        const sameNivel = !nivel || state.nivel === nivel;
        if (sameSchool && sameNivel) {
          if (drillTurmas) state.turma = "";
          else { state.escola = ""; state.turma = ""; }
          if (nivel) state.nivel = "";
        } else {
          if (drillTurmas) state.turma = item.turma;
          else { state.escola = item.escola; state.turma = ""; }
          if (nivel) state.nivel = nivel;
        }
        state.page = 1;
        syncSelects();
        render();
      },
      scales: {
        x: { stacked: true, beginAtZero: true, ticks: { precision: 0 } },
        y: { stacked: true, grid: { display: false }, ticks: { font: { size: 11 } } },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${fmt(ctx.raw)}`,
          },
        },
      },
    },
  });
}

function renderStatus(rows) {
  const periodo = state.periodo === "entrada" ? "entrada" : "percurso";
  const agg = aggregate(rows, periodo);
  const pre12 = agg.pl1 + agg.pl2;
  const pre34 = agg.pl3 + agg.pl4;
  const cards = [
    { key: "pre12", cls: "pl", title: "Pré-leitores 1 e 2", num: pre12, sub: "Maior prioridade pedagógica" },
    { key: "pre34", cls: "mid", title: "Pré-leitores 3 e 4", num: pre34, sub: "Em transição para a leitura" },
    { key: "iniciante", cls: "ini", title: "Iniciantes", num: agg.iniciante, sub: "Leitura em consolidação" },
    { key: "fluente", cls: "flu", title: "Fluentes", num: agg.fluente, sub: "Leitura consolidada" },
  ];
  document.getElementById("statusRow").innerHTML = cards.map((c) => {
    const active = state.nivel === c.key || (state.nivel === "pre" && c.key.startsWith("pre"));
    return `<article class="status-card ${c.cls}${active ? " active" : ""}" data-nivel="${c.key}">
      <h3>${c.title}</h3>
      <div class="num">${fmt(c.num)}</div>
      <div class="sub">${c.sub} · ${fmtPct(pct(c.num, agg.avaliados))}</div>
    </article>`;
  }).join("");
}

function sortedRows(rows) {
  const { key, dir } = state.sort;
  return [...rows].sort((a, b) => {
    const blocoA = blocoAtivo(a) || emptyAgg();
    const blocoB = blocoAtivo(b) || emptyAgg();
    const map = {
      escola: a.escola.localeCompare(b.escola, "pt-BR"),
      turma: a.turma.localeCompare(b.turma, "pt-BR"),
      alunos: a.alunos - b.alunos,
      avaliados: (blocoA.avaliados || 0) - (blocoB.avaliados || 0),
      pl1: blocoA.pl1 - blocoB.pl1,
      pl2: blocoA.pl2 - blocoB.pl2,
      pl3: blocoA.pl3 - blocoB.pl3,
      pl4: blocoA.pl4 - blocoB.pl4,
      iniciante: blocoA.iniciante - blocoB.iniciante,
      fluente: blocoA.fluente - blocoB.fluente,
      predominante: (predominante(blocoA)?.label || "").localeCompare(predominante(blocoB)?.label || "", "pt-BR"),
    };
    return (map[key] || 0) * dir;
  });
}

function renderTable(rows) {
  const sorted = sortedRows(rows);
  const pages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  if (state.page > pages) state.page = pages;
  const start = (state.page - 1) * PAGE_SIZE;
  const pageRows = sorted.slice(start, start + PAGE_SIZE);
  document.getElementById("tableCount").textContent = `${sorted.length} turma${sorted.length === 1 ? "" : "s"}`;
  document.getElementById("pageInfo").textContent = `${state.page} de ${pages}`;

  document.getElementById("tableBody").innerHTML = pageRows.map((row) => {
    const bloco = blocoAtivo(row);
    const pred = predominante(bloco);
    const cells = NIVEIS.map((n) => `<td>${bloco ? fmt(bloco[n.key]) : "—"}</td>`).join("");
    return `<tr class="clickable" data-escola="${row.escola}" data-turma="${row.turma}">
      <td>${row.escola}</td>
      <td>${row.turma}</td>
      <td>${fmt(row.alunos)}</td>
      <td>${bloco ? fmt(bloco.avaliados) : "—"}</td>
      ${cells}
      <td>${pred ? `<span class="tag ${pred.key}">${pred.label}</span>` : `<span class="tag none">Sem dados</span>`}</td>
    </tr>`;
  }).join("");
}

function exportCsv(rows) {
  const periodo = state.periodo === "entrada" ? "Entrada" : "Percurso";
  const header = ["Escola", "Turma", "Alunos", `Avaliados (${periodo})`, ...NIVEIS.map((n) => n.label)];
  const lines = [header.join(";")];
  rows.forEach((row) => {
    const bloco = blocoAtivo(row) || emptyAgg();
    lines.push([row.escola, row.turma, row.alunos, bloco.avaliados || "", ...NIVEIS.map((n) => bloco[n.key] || 0)].join(";"));
  });
  const blob = new Blob(["\uFEFF" + lines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "fluencia-leitora-2ano.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function resetAll() {
  state.escola = "";
  state.turma = "";
  state.nivel = "";
  state.search = "";
  state.periodo = "percurso";
  state.page = 1;
  document.getElementById("searchInput").value = "";
  syncSelects();
  render();
}

function render() {
  const rows = rowsBase();
  renderChips();
  renderKPIs(rows);
  renderDonut(rows);
  renderComparativo(rows);
  renderEscolas(rows);
  renderStatus(rows);
  renderTable(rows);
}

function bindEvents() {
  document.querySelectorAll(".nav-btn[data-view]").forEach((btn) => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });
  document.getElementById("btnResetAll").addEventListener("click", resetAll);
  document.getElementById("btnTheme").addEventListener("click", toggleTheme);
  document.getElementById("filterEscola").addEventListener("change", (e) => {
    state.escola = e.target.value;
    state.turma = "";
    state.page = 1;
    syncSelects();
    render();
  });
  document.getElementById("filterTurma").addEventListener("change", (e) => {
    state.turma = e.target.value;
    state.page = 1;
    render();
  });
  document.getElementById("filterPeriodo").addEventListener("change", (e) => {
    state.periodo = e.target.value;
    state.page = 1;
    render();
  });
  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    state.page = 1;
    render();
  });
  document.getElementById("chips").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-clear]");
    if (!btn) return;
    const key = btn.dataset.clear;
    if (key === "all") return resetAll();
    if (key === "search") document.getElementById("searchInput").value = "";
    state[key] = "";
    if (key === "escola") state.turma = "";
    state.page = 1;
    syncSelects();
    render();
  });
  document.getElementById("kpiRight").addEventListener("click", (e) => {
    const card = e.target.closest("[data-nivel]");
    if (!card || !card.dataset.nivel) return;
    toggleFilter("nivel", card.dataset.nivel);
  });
  document.getElementById("donutLegend").addEventListener("click", (e) => {
    const item = e.target.closest("[data-nivel]");
    if (!item) return;
    toggleFilter("nivel", item.dataset.nivel);
  });
  document.getElementById("statusRow").addEventListener("click", (e) => {
    const card = e.target.closest("[data-nivel]");
    if (!card) return;
    toggleFilter("nivel", card.dataset.nivel);
  });
  document.getElementById("tableBody").addEventListener("click", (e) => {
    const tr = e.target.closest("tr");
    if (!tr) return;
    state.escola = tr.dataset.escola;
    state.turma = tr.dataset.turma;
    state.page = 1;
    syncSelects();
    render();
  });
  document.querySelectorAll("th[data-sort]").forEach((th) => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      state.sort.dir = state.sort.key === key ? -state.sort.dir : 1;
      state.sort.key = key;
      render();
    });
  });
  document.getElementById("pagePrev").addEventListener("click", () => {
    state.page = Math.max(1, state.page - 1);
    render();
  });
  document.getElementById("pageNext").addEventListener("click", () => {
    state.page += 1;
    render();
  });
  document.getElementById("btnExport").addEventListener("click", () => exportCsv(rowsBase()));
}

function setToday() {
  const now = new Date();
  const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  document.getElementById("todayLabel").textContent =
    `Hoje, ${dias[now.getDay()]} ${now.getDate()} ${meses[now.getMonth()]}`;
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem(THEME_KEY) || currentTheme());
  chartDefaults();
  setToday();
  fillSelects();
  bindEvents();
  render();
});
