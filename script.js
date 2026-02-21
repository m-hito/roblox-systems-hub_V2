const projects = [
  {
    slug: "movement-system",
    title: "Roblox NPC Movement System v1.0",
    displayName: "Movement System",
    description: "Give any Npc movement scales upto 100s of npc, make them combat npc urself blueprint is ready.",
    thumbnail: "https://via.placeholder.com/600x300/8B00FF/FFFFFF?text=Movement+v2.1",
    devNotes: "https://github.com/m-hito/BrawlDevNotes#movement-system",
    repoUrl: "https://icutlink.com/mhitomovementsystem", 
    ytVideo: "https://www.youtube.com/shorts/JZVM3spj24M",
    waitTime: 15,
    brawlNotes: "BrawlDev: Give NPC's tool, use humanoid method to activate it and make them combat npcs"
  },
  {
    slug: "npc-factory",
    title: "Advanced Roblox NPC Factory v1.0",
    displayName: "NPC Factory",
    description: "Spawn NPCs with pathfinding, combat AI, squad behavior.",
    thumbnail: "https://via.placeholder.com/600x300/FF6B6B/FFFFFF?text=NPC+Factory",
    devNotes: "https://github.com/m-hito/BrawlDevNotes#npc-factory",
    repoUrl: "https://icutlink.com/mhitonpcfactoryv1",
    ytVideo: "https://youtube.com/watch?v=npc-tutorial",
    waitTime: 12,
    brawlNotes: "BrawlDev: Use CollectionService for NPC tagging"
  },
  {
    slug: "combat-system",
    title: "Advanced Roblox Combat system v1.0",
    displayName: "Combat System",
    description: "5 combo modular combat system with state handling",
    thumbnail: "https://via.placeholder.com/600x300/FF6B6B/FFFFFF?text=Combat+v1.0",
    devNotes: "https://github.com/m-hito/BrawlDevNotes#combat-system",
    repoUrl: "https://icutlink.com/mhito",
    ytVideo: "https://youtube.com/watch?v=combat-tutorial",
    waitTime: 12,
    brawlNotes: "Adding airbone combat in combat system v2"
  }
];

const slug = window.location.pathname.split('/').pop() || 'movement-system';
const project = projects.find(p => p.slug === slug) || projects[0];

// Load immediately (trust + UX)
document.getElementById('title').textContent = project.title;
document.getElementById('description').textContent = project.description;
document.getElementById('thumbnail').style.backgroundImage = `url(${project.thumbnail})`;
document.getElementById('thumbnail').innerHTML = '';
document.getElementById('notes-link').href = project.devNotes;
document.getElementById('brawl-notes').textContent = project.brawlNotes;
document.getElementById('preparing-text').textContent = `⏳ Preparing ${project.displayName}...`;

// YouTube button
const demoBtn = document.getElementById('demo-btn');
demoBtn.href = project.ytVideo;
demoBtn.innerHTML = '<div class="text-3xl mb-2">📺</div><div class="font-bold text-xl group-hover:underline">Tutorial Video</div>';

// TIMER - ONLY prepare-card changes
let timeLeft = project.waitTime;
let timerUnlocked = false;
const timer = document.getElementById('timer');
const bar = document.getElementById('timer-bar');
const prepareCard = document.getElementById('prepare-card');

const interval = setInterval(() => {
  timeLeft--;
  timer.textContent = timeLeft;
  bar.style.width = `${(timeLeft/project.waitTime)*100}%`;

  if (timeLeft <= 0) {
    clearInterval(interval);
    timerUnlocked = true;
    prepareCard.innerHTML = `
      <div class="text-center p-8">
        <div class="text-3xl font-bold text-emerald-400 mb-2">✅ ${project.displayName} Ready</div>
        <div class="text-slate-300 mb-2">Verified by creator</div>
        <div class="text-xs text-slate-400">Safe GitHub link</div>
      </div>
    `;
    
    // Unlock both buttons
    document.getElementById('github-btn').href = project.repoUrl;
    document.getElementById('all-btn').href = "https://ouo.io/MrWrM2";
  }
}, 1000);

// Other Systems → NEW SECTION
// Other Systems → Shows ALL systems with clear navigation
document.getElementById('other-btn').onclick = (e) => {
  e.preventDefault();
  const otherSystems = document.getElementById('other-systems');
  otherSystems.classList.remove('hidden');
  otherSystems.innerHTML = `
    <div class="bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30">
      <h3 class="text-3xl font-bold mb-8 text-center">🔥 All My Systems</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${projects.map((p, i) => `
          <a href="/${p.slug}" class="group p-6 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/40 hover:to-purple-500/40 border-2 border-indigo-500/30 hover:border-indigo-400 rounded-xl text-center transition-all duration-300 transform hover:-translate-y-2">
            <div class="text-3xl mb-3">${i === 0 ? '⭐' : '⚡'}</div>
            <div class="font-bold text-xl mb-1">${p.displayName}</div>
            <div class="text-sm text-slate-300 mb-2">${p.waitTime}s unlock</div>
            <div class="text-xs text-purple-400">→ Click for page</div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
};

// View All (simple link, always available)
document.getElementById('all-btn').href = "https://ouo.io/MrWrM2";

// View All - timer gated (but simple)
document.getElementById('all-btn').onclick = (e) => {
  if (!timerUnlocked) {
    e.preventDefault();
    return false;
  }
};





